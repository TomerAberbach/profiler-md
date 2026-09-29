# Peak memory profile

Held 78.6 MiB over 22,679 allocations (3.55 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 81.7% | 64.2 MiB |      21,439 |
| Standard library | 18.0% | 14.1 MiB |       1,007 |
| Third-party      |  0.3% |  275 KiB |         233 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                               | Location                                     |
| ----: | -------: | ----------: | -------------------------------------- | -------------------------------------------- |
| 23.2% | 18.2 MiB |      20,790 | `mark`                                 | `black/brackets.py:70`                       |
| 11.6% | 9.12 MiB |         142 | `parse`                                | `/usr/lib/python3.11/ast.py:33`              |
| 10.2% |    8 MiB |           8 | `changed`                              | `blib2to3/pytree.py:160`                     |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`                    | `black/__init__.py:1510`                     |
|  7.7% | 6.05 MiB |          62 | `_stringify_ast`                       | `black/parsing.py:182`                       |
|  6.4% |    5 MiB |           5 | `__new__`                              | `blib2to3/pytree.py:70`                      |
|  3.8% |    3 MiB |           4 | `visit_default`                        | `black/linegen.py:134`                       |
|  3.8% |    3 MiB |           3 | `generate_comments`                    | `black/comments.py:52`                       |
|  3.2% | 2.54 MiB |         603 | `_compile_bytecode`                    | `<frozen importlib._bootstrap_external>:727` |
|  2.5% |    2 MiB |           4 | `addtoken`                             | `blib2to3/pgen2/parse.py:230`                |
|  2.5% |    2 MiB |           2 | `pop`                                  | `blib2to3/pgen2/parse.py:386`                |
|  1.5% | 1.14 MiB |         196 | `update_sibling_maps`                  | `blib2to3/pytree.py:358`                     |
|  1.3% |    1 MiB |           5 | `visit`                                | `black/nodes.py:152`                         |
|  1.3% |    1 MiB |           5 | `__init__`                             | `blib2to3/pytree.py:237`                     |
|  1.3% |    1 MiB |           3 | `_compile`                             | `/usr/lib/python3.11/re/_compiler.py:37`     |
|  1.3% |    1 MiB |           4 | `visit_STRING`                         | `black/linegen.py:413`                       |
|  1.3% |    1 MiB |           1 | `shift`                                | `blib2to3/pgen2/parse.py:361`                |
|  1.3% |    1 MiB |           1 | `__init__`                             | `blib2to3/pytree.py:389`                     |
|  1.3% |    1 MiB |           1 | `comments_after`                       | `black/lines.py:418`                         |
|  1.3% |    1 MiB |           1 | `contains_uncollapsable_type_comments` | `black/lines.py:265`                         |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                               | Location                      |
| ----: | -------: | ----------: | -------------------------------------- | ----------------------------- |
| 23.2% | 18.2 MiB |      20,790 | `mark`                                 | `black/brackets.py:70`        |
| 10.2% |    8 MiB |           8 | `changed`                              | `blib2to3/pytree.py:160`      |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`                    | `black/__init__.py:1510`      |
|  7.7% | 6.05 MiB |          62 | `_stringify_ast`                       | `black/parsing.py:182`        |
|  6.4% |    5 MiB |           5 | `__new__`                              | `blib2to3/pytree.py:70`       |
|  3.8% |    3 MiB |           4 | `visit_default`                        | `black/linegen.py:134`        |
|  3.8% |    3 MiB |           3 | `generate_comments`                    | `black/comments.py:52`        |
|  2.5% |    2 MiB |           4 | `addtoken`                             | `blib2to3/pgen2/parse.py:230` |
|  2.5% |    2 MiB |           2 | `pop`                                  | `blib2to3/pgen2/parse.py:386` |
|  1.5% | 1.14 MiB |         196 | `update_sibling_maps`                  | `blib2to3/pytree.py:358`      |
|  1.3% |    1 MiB |           5 | `visit`                                | `black/nodes.py:152`          |
|  1.3% |    1 MiB |           5 | `__init__`                             | `blib2to3/pytree.py:237`      |
|  1.3% |    1 MiB |           4 | `visit_STRING`                         | `black/linegen.py:413`        |
|  1.3% |    1 MiB |           1 | `shift`                                | `blib2to3/pgen2/parse.py:361` |
|  1.3% |    1 MiB |           1 | `__init__`                             | `blib2to3/pytree.py:389`      |
|  1.3% |    1 MiB |           1 | `comments_after`                       | `black/lines.py:418`          |
|  1.3% |    1 MiB |           1 | `contains_uncollapsable_type_comments` | `black/lines.py:265`          |
|  1.3% |    1 MiB |           1 | `is_complex_subscript`                 | `black/lines.py:430`          |
|  0.3% |  225 KiB |           5 | `_format_str_once`                     | `black/__init__.py:1215`      |
|  0.1% | 57.2 KiB |          65 | `normalize_string_prefix`              | `black/strings.py:143`        |

##### Standard library

|     % |     Size | Allocations | Function            | Location                                          |
| ----: | -------: | ----------: | ------------------- | ------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse`             | `/usr/lib/python3.11/ast.py:33`                   |
|  3.2% | 2.54 MiB |         603 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727`      |
|  1.3% |    1 MiB |           3 | `_compile`          | `/usr/lib/python3.11/re/_compiler.py:37`          |
|  1.3% |    1 MiB |           1 | `replace`           | `/usr/lib/python3.11/dataclasses.py:1443`         |
|  0.3% |  222 KiB |           1 | `decode`            | `<frozen codecs>:319`                             |
|  0.1% | 77.4 KiB |          81 | `__new__`           | `<frozen abc>:105`                                |
| <0.1% | 22.6 KiB |          12 | `compile`           | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 22.2 KiB |          25 | `__new__`           | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 19.8 KiB |          12 | `<module>`          | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`           | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`             | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% | 8.22 KiB |           9 | `__setattr__`       | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% |    8 KiB |           4 | `_fill_cache`       | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`        | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 5.63 KiB |           6 | `namedtuple`        | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.61 KiB |           3 | `_parse`            | `/usr/lib/python3.11/re/_parser.py:507`           |
| <0.1% | 5.32 KiB |           2 | `_code`             | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`          | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`              | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`    | `/usr/lib/python3.11/dataclasses.py:884`          |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Location                |
| -----: | -------: | ----------: | ----------------------- |
| 100.0% | 18.2 MiB |      20,789 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 9.12 MiB |         142 | `/usr/lib/python3.11/ast.py:50` |

##### `changed` (`blib2to3/pytree.py:160`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 87.5% | 7 MiB |           7 | `blib2to3/pytree.py:165` |
| 12.5% | 1 MiB |           1 | `blib2to3/pytree.py:164` |

##### `assert_equivalent` (`black/__init__.py:1510`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 55.4% | 3.93 MiB |           2 | `black/__init__.py:1533` |
| 44.6% | 3.17 MiB |           2 | `black/__init__.py:1532` |

##### `_stringify_ast` (`black/parsing.py:182`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 49.6% |    3 MiB |           3 | `black/parsing.py:205` |
| 16.5% |    1 MiB |           1 | `black/parsing.py:193` |
| 16.5% |    1 MiB |           1 | `black/parsing.py:225` |
| 16.5% |    1 MiB |           1 | `black/parsing.py:252` |
|  0.8% | 46.8 KiB |          56 | `black/parsing.py:248` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 5 MiB |           5 | `blib2to3/pytree.py:73` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 3 MiB |           3 | `black/linegen.py:158` |
|  <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 66.7% | 2 MiB |           2 | `black/comments.py:76` |
| 33.3% | 1 MiB |           1 | `black/comments.py:72` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.54 MiB |         603 | `<frozen importlib._bootstrap_external>:729` |

##### `addtoken` (`blib2to3/pgen2/parse.py:230`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 2 MiB |           3 | `blib2to3/pgen2/parse.py:240` |
|  <0.1% | 560 B |           1 | `blib2to3/pgen2/parse.py:233` |

##### `pop` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 2 MiB |           2 | `blib2to3/pgen2/parse.py:396` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 93.6% | 1.07 MiB |          94 | `blib2to3/pytree.py:365` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:366` |
|  0.4% | 4.99 KiB |           9 | `blib2to3/pytree.py:368` |

##### `visit` (`black/nodes.py:152`)

|     % |  Size | Allocations | Location             |
| ----: | ----: | ----------: | -------------------- |
| 99.9% | 1 MiB |           4 | `black/nodes.py:172` |
|  0.1% | 690 B |           1 | `black/nodes.py:174` |

##### `__init__` (`blib2to3/pytree.py:237`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 99.7% |    1 MiB |           1 | `blib2to3/pytree.py:256` |
|  0.3% | 3.03 KiB |           4 | `blib2to3/pytree.py:255` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py:37`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 99.8% |    1 MiB |           1 | `/usr/lib/python3.11/re/_compiler.py:111` |
|  0.2% | 1.86 KiB |           1 | `/usr/lib/python3.11/re/_compiler.py:86`  |
|  0.1% |    592 B |           1 | `/usr/lib/python3.11/re/_compiler.py:96`  |

##### `visit_STRING` (`black/linegen.py:413`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 99.8% |    1 MiB |           1 | `black/linegen.py:427` |
|  0.1% | 1.03 KiB |           1 | `black/linegen.py:502` |
|  0.1% |    640 B |           1 | `black/linegen.py:417` |
|  0.1% |    610 B |           1 | `black/linegen.py:444` |

##### `shift` (`blib2to3/pgen2/parse.py:361`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:371` |

##### `__init__` (`blib2to3/pytree.py:389`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:413` |

##### `comments_after` (`black/lines.py:418`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:420` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:265`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:278` |

##### `is_complex_subscript` (`black/lines.py:430`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:445` |

##### `replace` (`/usr/lib/python3.11/dataclasses.py:1443`)

|      % |  Size | Allocations | Location                                  |
| -----: | ----: | ----------: | ----------------------------------------- |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/dataclasses.py:1484` |

##### `_format_str_once` (`black/__init__.py:1215`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 98.6% |  222 KiB |           1 | `black/__init__.py:1266` |
|  0.5% | 1.07 KiB |           1 | `black/__init__.py:1250` |
|  0.4% |    904 B |           1 | `black/__init__.py:1218` |
|  0.3% |    644 B |           1 | `black/__init__.py:1248` |
|  0.3% |    638 B |           1 | `black/__init__.py:1223` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Location              |
| -----: | ------: | ----------: | --------------------- |
| 100.0% | 222 KiB |           1 | `<frozen codecs>:322` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Location           |
| ----: | -------: | ----------: | ------------------ |
| 99.0% | 76.7 KiB |          80 | `<frozen abc>:106` |
|  1.0% |    768 B |           1 | `<frozen abc>:107` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Location               |
| -----: | -------: | ----------: | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `black/strings.py:158` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/lib/python3.11/re/_compiler.py:759` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 22.2 KiB |          25 | `/usr/lib/python3.11/enum.py:554` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|     % |  Size | Allocations | Location                                    |
| ----: | ----: | ----------: | ------------------------------------------- |
| 20.2% | 4 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:37` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:27` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:36` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 17.4 KiB |          21 | `/usr/lib/python3.11/typing.py:2909` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Allocations | Location                            |
| -----: | -----: | ----------: | ----------------------------------- |
| 100.0% | 12 KiB |           3 | `/usr/lib/python3.11/typing.py:341` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 8.22 KiB |           9 | `/usr/lib/python3.11/enum.py:842` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1667` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:455` |

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
| 18.4% |  1,002 B |           1 | `/usr/lib/python3.11/re/_compiler.py:577` |

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

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Caller   | Location            |
| -----: | -------: | ----------: | -------- | ------------------- |
| 100.0% | 18.2 MiB |      20,790 | `append` | `black/lines.py:52` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 9.12 MiB |         142 | `_parse_single_version` | `black/parsing.py:125` |

##### `changed` (`blib2to3/pytree.py:160`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 87.5% | 7 MiB |           7 | `changed` | `blib2to3/pytree.py:160` |
| 12.5% | 1 MiB |           1 | `prefix`  | `blib2to3/pytree.py:469` |

##### `assert_equivalent` (`black/__init__.py:1510`)

|      % |    Size | Allocations | Caller                            | Location                 |
| -----: | ------: | ----------: | --------------------------------- | ------------------------ |
| 100.0% | 7.1 MiB |           4 | `check_stability_and_equivalence` | `black/__init__.py:1042` |

##### `_stringify_ast` (`black/parsing.py:182`)

|      % |     Size | Allocations | Caller                           | Location               |
| -----: | -------: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 6.05 MiB |          62 | `_stringify_ast_with_new_parent` | `black/parsing.py:174` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 5 MiB |           5 | `convert` | `blib2to3/pytree.py:475` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Caller         | Location               |
| ----: | ----: | ----------: | -------------- | ---------------------- |
| 66.7% | 2 MiB |           2 | `visit`        | `black/nodes.py:152`   |
| 33.3% | 1 MiB |           1 | `visit_power`  | `black/linegen.py:341` |
| <0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 3 MiB |           3 | `visit_default` | `black/linegen.py:134` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.54 MiB |         603 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `addtoken` (`blib2to3/pgen2/parse.py:230`)

|      % |  Size | Allocations | Caller         | Location                       |
| -----: | ----: | ----------: | -------------- | ------------------------------ |
| 100.0% | 2 MiB |           4 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `pop` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 2 MiB |           2 | `_addtoken` | `blib2to3/pgen2/parse.py:278` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 1.14 MiB |         196 | `prev_sibling` | `blib2to3/pytree.py:196` |

##### `visit` (`black/nodes.py:152`)

|     % |  Size | Allocations | Caller             | Location                 |
| ----: | ----: | ----------: | ------------------ | ------------------------ |
| 99.9% | 1 MiB |           4 | `visit_default`    | `black/nodes.py:176`     |
|  0.1% | 690 B |           1 | `_format_str_once` | `black/__init__.py:1215` |

##### `__init__` (`blib2to3/pytree.py:237`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:475` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py:37`)

|      % |  Size | Allocations | Caller     | Location                                 |
| -----: | ----: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 1 MiB |           3 | `_compile` | `/usr/lib/python3.11/re/_compiler.py:37` |

##### `visit_STRING` (`black/linegen.py:413`)

|      % |  Size | Allocations | Caller  | Location             |
| -----: | ----: | ----------: | ------- | -------------------- |
| 100.0% | 1 MiB |           4 | `visit` | `black/nodes.py:152` |

##### `shift` (`blib2to3/pgen2/parse.py:361`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:278` |

##### `__init__` (`blib2to3/pytree.py:389`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `convert` | `blib2to3/pytree.py:475` |

##### `comments_after` (`black/lines.py:418`)

|      % |  Size | Allocations | Caller                     | Location                |
| -----: | ----: | ----------: | -------------------------- | ----------------------- |
| 100.0% | 1 MiB |           1 | `bracket_split_build_line` | `black/linegen.py:1123` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:265`)

|      % |  Size | Allocations | Caller           | Location               |
| -----: | ----: | ----------: | ---------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `transform_line` | `black/linegen.py:601` |

##### `is_complex_subscript` (`black/lines.py:430`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:52` |

##### `replace` (`/usr/lib/python3.11/dataclasses.py:1443`)

|      % |  Size | Allocations | Caller                                  | Location               |
| -----: | ----: | ----------: | --------------------------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `_maybe_split_omitting_optional_parens` | `black/linegen.py:932` |

##### `_format_str_once` (`black/__init__.py:1215`)

|      % |    Size | Allocations | Caller       | Location                 |
| -----: | ------: | ----------: | ------------ | ------------------------ |
| 100.0% | 225 KiB |           5 | `format_str` | `black/__init__.py:1168` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Caller         | Location                 |
| -----: | ------: | ----------: | -------------- | ------------------------ |
| 100.0% | 222 KiB |           1 | `decode_bytes` | `black/__init__.py:1269` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                         |
| ----: | -------: | ----------: | ---------- | ---------------------------------------------------------------- |
| 50.7% | 39.2 KiB |          46 | `<module>` | `/venv13/lib/python3.11/site-packages/click/types.py:1`          |
| 22.6% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                               |
| 18.9% | 14.6 KiB |          10 | `<module>` | `/venv13/lib/python3.11/site-packages/click/core.py:1`           |
|  7.8% | 6.07 KiB |           7 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Caller         | Location               |
| -----: | -------: | ----------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `visit_STRING` | `black/linegen.py:413` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Caller     | Location                                 |
| -----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 31.0% | 6.89 KiB |           8 | `<module>` | `black/mode.py:1`                                              |
| 14.8% |  3.3 KiB |           3 | `<module>` | `/venv13/lib/python3.11/site-packages/click/_utils.py:1`       |
| 12.6% | 2.81 KiB |           3 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/_elffile.py:1` |
| 11.0% | 2.44 KiB |           3 | `<module>` | `black/__init__.py:1`                                          |
|  7.8% | 1.74 KiB |           2 | `<module>` | `/venv13/lib/python3.11/site-packages/click/core.py:1`         |

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

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|     % |     Size | Allocations | Caller         | Location                          |
| ----: | -------: | ----------: | -------------- | --------------------------------- |
| 54.6% | 4.48 KiB |           5 | `__set_name__` | `/usr/lib/python3.11/enum.py:237` |
| 45.4% | 3.73 KiB |           4 | `__new__`      | `/usr/lib/python3.11/enum.py:488` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1604` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Caller  | Location                                |
| -----: | -------: | ----------: | ------- | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `parse` | `/usr/lib/python3.11/re/_parser.py:970` |

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

### Total size

Functions ranked by total bytes held at peak memory in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                         |
| -----: | -------: | ----------: | ---------------------- | ---------------------------------------------------------------- |
| 100.0% | 78.6 MiB |      22,679 | `_run_tracker`         | `/venv13/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 78.6 MiB |      22,678 | `run_module`           | `<frozen runpy>:201`                                             |
|  94.5% | 74.3 MiB |      21,396 | `__call__`             | `/venv13/lib/python3.11/site-packages/click/core.py:1629`        |
|  94.5% | 74.3 MiB |      21,396 | `patched_main`         | `black/__init__.py:1580`                                         |
|  94.5% | 74.3 MiB |      21,396 | `<module>`             | `black/__main__.py:1`                                            |
|  94.5% | 74.3 MiB |      21,396 | `_run_code`            | `<frozen runpy>:65`                                              |
|  94.5% | 74.3 MiB |      21,396 | `_run_module_code`     | `<frozen runpy>:91`                                              |
|  94.5% | 74.3 MiB |      21,395 | `main`                 | `/venv13/lib/python3.11/site-packages/click/core.py:1484`        |
|  94.5% | 74.3 MiB |      21,374 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:1401`        |
|  94.5% | 74.3 MiB |      21,371 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:857`         |
|  94.5% | 74.3 MiB |      21,369 | `new_func`             | `/venv13/lib/python3.11/site-packages/click/decorators.py:33`    |
|  94.5% | 74.3 MiB |      21,366 | `main`                 | `black/__init__.py:240`                                          |
|  94.5% | 74.2 MiB |      21,362 | `reformat_one`         | `black/__init__.py:865`                                          |
|  94.5% | 74.2 MiB |      21,359 | `format_file_in_place` | `black/__init__.py:922`                                          |
|  94.2% |   74 MiB |      21,356 | `format_file_contents` | `black/__init__.py:1059`                                         |
|  65.9% | 51.8 MiB |      21,147 | `format_str`           | `black/__init__.py:1168`                                         |
|  65.9% | 51.8 MiB |      21,146 | `_format_str_once`     | `black/__init__.py:1215`                                         |
|  46.4% | 36.4 MiB |      21,087 | `visit`                | `black/nodes.py:152`                                             |
|  46.4% | 36.4 MiB |      21,085 | `visit_default`        | `black/nodes.py:176`                                             |
|  46.4% | 36.4 MiB |      21,085 | `visit_default`        | `black/linegen.py:134`                                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 94.5% | 74.3 MiB |      21,396 | `patched_main`                    | `black/__init__.py:1580` |
| 94.5% | 74.3 MiB |      21,396 | `<module>`                        | `black/__main__.py:1`    |
| 94.5% | 74.3 MiB |      21,366 | `main`                            | `black/__init__.py:240`  |
| 94.5% | 74.2 MiB |      21,362 | `reformat_one`                    | `black/__init__.py:865`  |
| 94.5% | 74.2 MiB |      21,359 | `format_file_in_place`            | `black/__init__.py:922`  |
| 94.2% |   74 MiB |      21,356 | `format_file_contents`            | `black/__init__.py:1059` |
| 65.9% | 51.8 MiB |      21,147 | `format_str`                      | `black/__init__.py:1168` |
| 65.9% | 51.8 MiB |      21,146 | `_format_str_once`                | `black/__init__.py:1215` |
| 46.4% | 36.4 MiB |      21,087 | `visit`                           | `black/nodes.py:152`     |
| 46.4% | 36.4 MiB |      21,085 | `visit_default`                   | `black/nodes.py:176`     |
| 46.4% | 36.4 MiB |      21,085 | `visit_default`                   | `black/linegen.py:134`   |
| 46.0% | 36.2 MiB |      20,714 | `visit_stmt`                      | `black/linegen.py:199`   |
| 45.5% | 35.7 MiB |      20,147 | `visit_suite`                     | `black/linegen.py:288`   |
| 44.3% | 34.8 MiB |      20,272 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 31.6% | 24.8 MiB |      13,403 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 28.3% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1042` |
| 28.3% | 22.3 MiB |         208 | `assert_equivalent`               | `black/__init__.py:1510` |
| 25.8% | 20.3 MiB |      20,885 | `append`                          | `black/lines.py:52`      |
| 25.3% | 19.9 MiB |      10,811 | `visit_power`                     | `black/linegen.py:341`   |
| 23.2% | 18.2 MiB |      20,790 | `mark`                            | `black/brackets.py:70`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 78.6 MiB |      22,678 | `run_module`                | `<frozen runpy>:201`                          |
|  94.5% | 74.3 MiB |      21,396 | `_run_code`                 | `<frozen runpy>:65`                           |
|  94.5% | 74.3 MiB |      21,396 | `_run_module_code`          | `<frozen runpy>:91`                           |
|  11.6% | 9.12 MiB |         142 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   5.5% | 4.29 MiB |       1,281 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   5.5% | 4.28 MiB |       1,274 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   5.4% | 4.28 MiB |       1,272 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   5.4% | 4.28 MiB |       1,271 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   5.4% | 4.28 MiB |       1,269 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   5.4% | 4.25 MiB |       1,240 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   3.2% | 2.54 MiB |         603 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   3.2% | 2.54 MiB |         603 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   1.7% | 1.34 MiB |         319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.3% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   1.3% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   1.3% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   1.3% | 1.01 MiB |           7 | `_code`                     | `/usr/lib/python3.11/re/_compiler.py:571`     |
|   1.3% | 1.01 MiB |           9 | `<module>`                  | `/usr/lib/python3.11/secrets.py:1`            |
|   1.3% |    1 MiB |           3 | `_compile`                  | `/usr/lib/python3.11/re/_compiler.py:37`      |
|   1.3% |    1 MiB |           1 | `replace`                   | `/usr/lib/python3.11/dataclasses.py:1443`     |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 78.6 MiB |      22,678 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 94.5% | 74.3 MiB |      21,396 | `_run_module_code`    | `<frozen runpy>:91`  |
|  5.5% | 4.29 MiB |       1,281 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv13/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                  |
| -----: | -------: | ----------: | ------ | --------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,395 | `main` | `/venv13/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1580`)

|      % |     Size | Allocations | Callee     | Location                                                  |
| -----: | -------: | ----------: | ---------- | --------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,396 | `__call__` | `/venv13/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 74.3 MiB |      21,396 | `patched_main` | `black/__init__.py:1580` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 74.3 MiB |      21,396 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 74.3 MiB |      21,396 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv13/lib/python3.11/site-packages/click/core.py:1484`)

|      % |     Size | Allocations | Callee         | Location                                                  |
| -----: | -------: | ----------: | -------------- | --------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,374 | `invoke`       | `/venv13/lib/python3.11/site-packages/click/core.py:1401` |
|  <0.1% | 15.3 KiB |          19 | `make_context` | `/venv13/lib/python3.11/site-packages/click/core.py:1328` |
|  <0.1% |     32 B |           1 | `__enter__`    | `/venv13/lib/python3.11/site-packages/click/core.py:549`  |

##### `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:1401`)

|      % |     Size | Allocations | Callee   | Location                                                 |
| -----: | -------: | ----------: | -------- | -------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,371 | `invoke` | `/venv13/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`)

|      % |     Size | Allocations | Callee     | Location                                                      |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,369 | `new_func` | `/venv13/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 74.3 MiB |      21,366 | `main` | `black/__init__.py:240` |

##### `main` (`black/__init__.py:240`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 74.2 MiB |      21,362 | `reformat_one` | `black/__init__.py:865` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:729` |

##### `reformat_one` (`black/__init__.py:865`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 74.2 MiB |      21,359 | `format_file_in_place` | `black/__init__.py:922` |
|  <0.1% | 1.19 KiB |           1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:922`)

|     % |    Size | Allocations | Callee                 | Location                 |
| ----: | ------: | ----------: | ---------------------- | ------------------------ |
| 99.7% |  74 MiB |      21,356 | `format_file_contents` | `black/__init__.py:1059` |
|  0.3% | 223 KiB |           2 | `decode_bytes`         | `black/__init__.py:1269` |

##### `format_file_contents` (`black/__init__.py:1059`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 69.9% | 51.8 MiB |      21,147 | `format_str`                      | `black/__init__.py:1168` |
| 30.1% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1042` |

##### `format_str` (`black/__init__.py:1168`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 51.8 MiB |      21,146 | `_format_str_once` | `black/__init__.py:1215` |

##### `_format_str_once` (`black/__init__.py:1215`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 70.4% | 36.4 MiB |      21,087 | `visit`                  | `black/nodes.py:152`     |
| 23.3% | 12.1 MiB |          32 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  5.8% | 3.01 MiB |          15 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1443` |

##### `visit` (`black/nodes.py:152`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 36.2 MiB |      20,714 | `visit_stmt`        | `black/linegen.py:199` |
|  98.1% | 35.7 MiB |      20,147 | `visit_suite`       | `black/linegen.py:288` |
|  95.5% | 34.8 MiB |      20,272 | `visit_funcdef`     | `black/linegen.py:254` |
|  68.1% | 24.8 MiB |      13,403 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:176`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit` | `black/nodes.py:152` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/nodes.py:176`   |
|  55.7% | 20.3 MiB |      20,885 | `append`            | `black/lines.py:52`    |
|  27.4% |   10 MiB |          10 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 36.2 MiB |      20,712 | `visit`                      | `black/nodes.py:152`    |
|   2.8% |    1 MiB |           2 | `normalize_invisible_parens` | `black/linegen.py:1344` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 35.7 MiB |      20,147 | `visit_default` | `black/linegen.py:134` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 34.8 MiB |      20,272 | `visit` | `black/nodes.py:152` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 24.8 MiB |      13,403 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1042`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 22.3 MiB |         208 | `assert_equivalent` | `black/__init__.py:1510` |

##### `assert_equivalent` (`black/__init__.py:1510`)

|     % |     Size | Allocations | Callee           | Location               |
| ----: | -------: | ----------: | ---------------- | ---------------------- |
| 41.0% | 9.12 MiB |         142 | `parse_ast`      | `black/parsing.py:137` |
| 27.2% | 6.05 MiB |          62 | `_stringify_ast` | `black/parsing.py:182` |

##### `append` (`black/lines.py:52`)

|     % |     Size | Allocations | Callee                 | Location               |
| ----: | -------: | ----------: | ---------------------- | ---------------------- |
| 89.8% | 18.2 MiB |      20,790 | `mark`                 | `black/brackets.py:70` |
|  5.2% | 1.05 MiB |          90 | `whitespace`           | `black/nodes.py:183`   |
|  4.9% |    1 MiB |           1 | `is_complex_subscript` | `black/lines.py:430`   |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 19.9 MiB |      10,810 | `visit_default` | `black/linegen.py:134` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.28 MiB |       1,274 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.28 MiB |       1,274 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.28 MiB |       1,272 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.28 MiB |       1,271 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.8% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.28 MiB |       1,269 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.25 MiB |       1,240 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.3% | 2.54 MiB |         603 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                   |
| -----: | -------: | ----------: | ---------------- | ---------------------------------------------------------- |
| 100.0% | 4.25 MiB |       1,240 | `<module>`       | `black/__init__.py:1`                                      |
|  31.8% | 1.35 MiB |         330 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                       |
|  30.9% | 1.31 MiB |         316 | `<module>`       | `/venv13/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.2% | 1.28 MiB |         258 | `<module>`       | `black/comments.py:1`                                      |
|  29.9% | 1.27 MiB |         244 | `<module>`       | `black/nodes.py:1`                                         |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
| 100.0% | 2.54 MiB |         603 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.34 MiB |         319 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|     % |     Size | Allocations | Callee     | Location                                 |
| ----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 99.9% | 1.05 MiB |          25 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py:272`)

|     % |     Size | Allocations | Callee    | Location                                  |
| ----: | -------: | ----------: | --------- | ----------------------------------------- |
| 99.9% | 1.05 MiB |          24 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |
|  0.1% |    698 B |           1 | `__and__` | `/usr/lib/python3.11/enum.py:1504`        |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|     % |     Size | Allocations | Callee  | Location                                  |
| ----: | -------: | ----------: | ------- | ----------------------------------------- |
| 96.5% | 1.01 MiB |           7 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |
|  1.3% | 14.4 KiB |           5 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|     % |     Size | Allocations | Callee          | Location                                  |
| ----: | -------: | ----------: | --------------- | ----------------------------------------- |
| 99.3% |    1 MiB |           3 | `_compile`      | `/usr/lib/python3.11/re/_compiler.py:37`  |
|  0.2% | 1.74 KiB |           2 | `_compile_info` | `/usr/lib/python3.11/re/_compiler.py:509` |

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 99.8% | 1.01 MiB |           8 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py:37`)

|      % |  Size | Allocations | Callee     | Location                                 |
| -----: | ----: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 1 MiB |           3 | `_compile` | `/usr/lib/python3.11/re/_compiler.py:37` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  6.4% |    5 MiB |           5 | `__new__` (`blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.9% | 3.04 MiB |          44 | `_stringify_ast` (`black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.7% | 2.09 MiB |         126 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% |    2 MiB |           4 | `addtoken` (`blib2to3/pgen2/parse.py:230`) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.5% |    2 MiB |           2 | `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.5% |    2 MiB |           2 | `changed` (`blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.3% | 1.01 MiB |          15 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/exceptions.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/types.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                   |
|  1.3% | 1.01 MiB |           8 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% |    1 MiB |           7 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/usr/lib/python3.11/secrets.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/handle_ipynb_magics.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% |    1 MiB |           5 | `__init__` (`blib2to3/pytree.py:237`) ← `convert` (475) ← `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% |    1 MiB |           2 | `visit_STRING` (`black/linegen.py:413`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.3% |    1 MiB |           1 | `_compile` (`/usr/lib/python3.11/re/_compiler.py:37`) ← `_compile` (37) ← `_code` (571) ← `compile` (738) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`black/strings.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.3% |    1 MiB |           1 | `shift` (`blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.3% |    1 MiB |           1 | `__init__` (`blib2to3/pytree.py:389`) ← `convert` (475) ← `shift` (`blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |    1 MiB |           1 | `comments_after` (`black/lines.py:418`) ← `bracket_split_build_line` (`black/linegen.py:1123`) ← `_first_right_hand_split` (829) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1771) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.3% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`black/nodes.py:436`) ← `whitespace` (183) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                      |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                |

# Leaked memory profile

Leaked 59.9 MiB over 22,484 allocations (2.73 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 88.2% | 52.9 MiB |      21,383 |
| Standard library | 11.4% | 6.82 MiB |         871 |
| Third-party      |  0.4% |  237 KiB |         230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                               | Location                                     |
| ----: | -------: | ----------: | -------------------------------------- | -------------------------------------------- |
| 30.4% | 18.2 MiB |      20,790 | `mark`                                 | `black/brackets.py:70`                       |
| 13.4% |    8 MiB |           8 | `changed`                              | `blib2to3/pytree.py:160`                     |
|  8.3% |    5 MiB |           5 | `__new__`                              | `blib2to3/pytree.py:70`                      |
|  5.0% |    3 MiB |           4 | `visit_default`                        | `black/linegen.py:134`                       |
|  5.0% |    3 MiB |           3 | `generate_comments`                    | `black/comments.py:52`                       |
|  4.2% | 2.54 MiB |         603 | `_compile_bytecode`                    | `<frozen importlib._bootstrap_external>:727` |
|  3.3% | 2.01 MiB |           3 | `parse`                                | `/usr/lib/python3.11/ast.py:33`              |
|  3.3% |    2 MiB |           4 | `addtoken`                             | `blib2to3/pgen2/parse.py:230`                |
|  3.3% |    2 MiB |           2 | `pop`                                  | `blib2to3/pgen2/parse.py:386`                |
|  3.3% |    2 MiB |           2 | `_stringify_ast`                       | `black/parsing.py:182`                       |
|  1.9% | 1.14 MiB |         196 | `update_sibling_maps`                  | `blib2to3/pytree.py:358`                     |
|  1.7% |    1 MiB |           5 | `visit`                                | `black/nodes.py:152`                         |
|  1.7% |    1 MiB |           5 | `__init__`                             | `blib2to3/pytree.py:237`                     |
|  1.7% |    1 MiB |           3 | `_compile`                             | `/usr/lib/python3.11/re/_compiler.py:37`     |
|  1.7% |    1 MiB |           4 | `visit_STRING`                         | `black/linegen.py:413`                       |
|  1.7% |    1 MiB |           1 | `shift`                                | `blib2to3/pgen2/parse.py:361`                |
|  1.7% |    1 MiB |           1 | `__init__`                             | `blib2to3/pytree.py:389`                     |
|  1.7% |    1 MiB |           1 | `comments_after`                       | `black/lines.py:418`                         |
|  1.7% |    1 MiB |           1 | `contains_uncollapsable_type_comments` | `black/lines.py:265`                         |
|  1.7% |    1 MiB |           1 | `replace`                              | `/usr/lib/python3.11/dataclasses.py:1443`    |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                               | Location                        |
| ----: | -------: | ----------: | -------------------------------------- | ------------------------------- |
| 30.4% | 18.2 MiB |      20,790 | `mark`                                 | `black/brackets.py:70`          |
| 13.4% |    8 MiB |           8 | `changed`                              | `blib2to3/pytree.py:160`        |
|  8.3% |    5 MiB |           5 | `__new__`                              | `blib2to3/pytree.py:70`         |
|  5.0% |    3 MiB |           4 | `visit_default`                        | `black/linegen.py:134`          |
|  5.0% |    3 MiB |           3 | `generate_comments`                    | `black/comments.py:52`          |
|  3.3% |    2 MiB |           4 | `addtoken`                             | `blib2to3/pgen2/parse.py:230`   |
|  3.3% |    2 MiB |           2 | `pop`                                  | `blib2to3/pgen2/parse.py:386`   |
|  3.3% |    2 MiB |           2 | `_stringify_ast`                       | `black/parsing.py:182`          |
|  1.9% | 1.14 MiB |         196 | `update_sibling_maps`                  | `blib2to3/pytree.py:358`        |
|  1.7% |    1 MiB |           5 | `visit`                                | `black/nodes.py:152`            |
|  1.7% |    1 MiB |           5 | `__init__`                             | `blib2to3/pytree.py:237`        |
|  1.7% |    1 MiB |           4 | `visit_STRING`                         | `black/linegen.py:413`          |
|  1.7% |    1 MiB |           1 | `shift`                                | `blib2to3/pgen2/parse.py:361`   |
|  1.7% |    1 MiB |           1 | `__init__`                             | `blib2to3/pytree.py:389`        |
|  1.7% |    1 MiB |           1 | `comments_after`                       | `black/lines.py:418`            |
|  1.7% |    1 MiB |           1 | `contains_uncollapsable_type_comments` | `black/lines.py:265`            |
|  1.7% |    1 MiB |           1 | `is_complex_subscript`                 | `black/lines.py:430`            |
|  0.1% | 76.5 KiB |           6 | `transform_line`                       | `black/linegen.py:601`          |
|  0.1% | 57.2 KiB |          65 | `normalize_string_prefix`              | `black/strings.py:143`          |
|  0.1% | 46.7 KiB |          49 | `load`                                 | `blib2to3/pgen2/grammar.py:121` |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
|  4.2% | 2.54 MiB |         603 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  3.3% | 2.01 MiB |           3 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  1.7% |    1 MiB |           3 | `_compile`                 | `/usr/lib/python3.11/re/_compiler.py:37`          |
|  1.7% |    1 MiB |           1 | `replace`                  | `/usr/lib/python3.11/dataclasses.py:1443`         |
|  0.1% | 77.4 KiB |          81 | `__new__`                  | `<frozen abc>:105`                                |
| <0.1% | 22.6 KiB |          12 | `compile`                  | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 22.2 KiB |          25 | `__new__`                  | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 19.8 KiB |          12 | `<module>`                 | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                  | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                    | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% | 8.22 KiB |           9 | `__setattr__`              | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% |    8 KiB |           4 | `_fill_cache`              | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`               | `/usr/lib/python3.11/re/_parser.py:447`           |
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

|      % |     Size | Allocations | Location                |
| -----: | -------: | ----------: | ----------------------- |
| 100.0% | 18.2 MiB |      20,789 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `changed` (`blib2to3/pytree.py:160`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 87.5% | 7 MiB |           7 | `blib2to3/pytree.py:165` |
| 12.5% | 1 MiB |           1 | `blib2to3/pytree.py:164` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 5 MiB |           5 | `blib2to3/pytree.py:73` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 3 MiB |           3 | `black/linegen.py:158` |
|  <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 66.7% | 2 MiB |           2 | `black/comments.py:76` |
| 33.3% | 1 MiB |           1 | `black/comments.py:72` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.54 MiB |         603 | `<frozen importlib._bootstrap_external>:729` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 2.01 MiB |           3 | `/usr/lib/python3.11/ast.py:50` |

##### `addtoken` (`blib2to3/pgen2/parse.py:230`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 2 MiB |           3 | `blib2to3/pgen2/parse.py:240` |
|  <0.1% | 560 B |           1 | `blib2to3/pgen2/parse.py:233` |

##### `pop` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 2 MiB |           2 | `blib2to3/pgen2/parse.py:396` |

##### `_stringify_ast` (`black/parsing.py:182`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 50.0% | 1 MiB |           1 | `black/parsing.py:193` |
| 50.0% | 1 MiB |           1 | `black/parsing.py:205` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 93.6% | 1.07 MiB |          94 | `blib2to3/pytree.py:365` |
|  6.0% | 70.3 KiB |          93 | `blib2to3/pytree.py:366` |
|  0.4% | 4.99 KiB |           9 | `blib2to3/pytree.py:368` |

##### `visit` (`black/nodes.py:152`)

|     % |  Size | Allocations | Location             |
| ----: | ----: | ----------: | -------------------- |
| 99.9% | 1 MiB |           4 | `black/nodes.py:172` |
|  0.1% | 690 B |           1 | `black/nodes.py:174` |

##### `__init__` (`blib2to3/pytree.py:237`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 99.7% |    1 MiB |           1 | `blib2to3/pytree.py:256` |
|  0.3% | 3.03 KiB |           4 | `blib2to3/pytree.py:255` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py:37`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 99.8% |    1 MiB |           1 | `/usr/lib/python3.11/re/_compiler.py:111` |
|  0.2% | 1.86 KiB |           1 | `/usr/lib/python3.11/re/_compiler.py:86`  |
|  0.1% |    592 B |           1 | `/usr/lib/python3.11/re/_compiler.py:96`  |

##### `visit_STRING` (`black/linegen.py:413`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 99.8% |    1 MiB |           1 | `black/linegen.py:427` |
|  0.1% | 1.03 KiB |           1 | `black/linegen.py:502` |
|  0.1% |    640 B |           1 | `black/linegen.py:417` |
|  0.1% |    610 B |           1 | `black/linegen.py:444` |

##### `shift` (`blib2to3/pgen2/parse.py:361`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:371` |

##### `__init__` (`blib2to3/pytree.py:389`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:413` |

##### `comments_after` (`black/lines.py:418`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:420` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:265`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:278` |

##### `replace` (`/usr/lib/python3.11/dataclasses.py:1443`)

|      % |  Size | Allocations | Location                                  |
| -----: | ----: | ----------: | ----------------------------------------- |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/dataclasses.py:1484` |

##### `is_complex_subscript` (`black/lines.py:430`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:445` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Location           |
| ----: | -------: | ----------: | ------------------ |
| 99.0% | 76.7 KiB |          80 | `<frozen abc>:106` |
|  1.0% |    768 B |           1 | `<frozen abc>:107` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 96.4% | 73.7 KiB |           3 | `black/linegen.py:679` |
|  1.8% | 1.39 KiB |           1 | `black/linegen.py:635` |
|  1.2% |    910 B |           1 | `black/linegen.py:714` |
|  0.7% |    518 B |           1 | `black/linegen.py:631` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Location               |
| -----: | -------: | ----------: | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `black/strings.py:158` |

##### `load` (`blib2to3/pgen2/grammar.py:121`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 46.7 KiB |          49 | `blib2to3/pgen2/grammar.py:124` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/lib/python3.11/re/_compiler.py:759` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 22.2 KiB |          25 | `/usr/lib/python3.11/enum.py:554` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|     % |  Size | Allocations | Location                                    |
| ----: | ----: | ----------: | ------------------------------------------- |
| 20.2% | 4 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:37` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:27` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:36` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 17.4 KiB |          21 | `/usr/lib/python3.11/typing.py:2909` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Allocations | Location                            |
| -----: | -----: | ----------: | ----------------------------------- |
| 100.0% | 12 KiB |           3 | `/usr/lib/python3.11/typing.py:341` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 8.22 KiB |           9 | `/usr/lib/python3.11/enum.py:842` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1667` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:455` |

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
| 18.4% |  1,002 B |           1 | `/usr/lib/python3.11/re/_compiler.py:577` |

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
| 100.0% | 18.2 MiB |      20,790 | `append` | `black/lines.py:52` |

##### `changed` (`blib2to3/pytree.py:160`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 87.5% | 7 MiB |           7 | `changed` | `blib2to3/pytree.py:160` |
| 12.5% | 1 MiB |           1 | `prefix`  | `blib2to3/pytree.py:469` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 5 MiB |           5 | `convert` | `blib2to3/pytree.py:475` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Caller         | Location               |
| ----: | ----: | ----------: | -------------- | ---------------------- |
| 66.7% | 2 MiB |           2 | `visit`        | `black/nodes.py:152`   |
| 33.3% | 1 MiB |           1 | `visit_power`  | `black/linegen.py:341` |
| <0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 3 MiB |           3 | `visit_default` | `black/linegen.py:134` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.54 MiB |         603 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 2.01 MiB |           3 | `_parse_single_version` | `black/parsing.py:125` |

##### `addtoken` (`blib2to3/pgen2/parse.py:230`)

|      % |  Size | Allocations | Caller         | Location                       |
| -----: | ----: | ----------: | -------------- | ------------------------------ |
| 100.0% | 2 MiB |           4 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `pop` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 2 MiB |           2 | `_addtoken` | `blib2to3/pgen2/parse.py:278` |

##### `_stringify_ast` (`black/parsing.py:182`)

|      % |  Size | Allocations | Caller                           | Location               |
| -----: | ----: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `_stringify_ast_with_new_parent` | `black/parsing.py:174` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 1.14 MiB |         196 | `prev_sibling` | `blib2to3/pytree.py:196` |

##### `visit` (`black/nodes.py:152`)

|     % |  Size | Allocations | Caller             | Location                 |
| ----: | ----: | ----------: | ------------------ | ------------------------ |
| 99.9% | 1 MiB |           4 | `visit_default`    | `black/nodes.py:176`     |
|  0.1% | 690 B |           1 | `_format_str_once` | `black/__init__.py:1215` |

##### `__init__` (`blib2to3/pytree.py:237`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:475` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py:37`)

|      % |  Size | Allocations | Caller     | Location                                 |
| -----: | ----: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 1 MiB |           3 | `_compile` | `/usr/lib/python3.11/re/_compiler.py:37` |

##### `visit_STRING` (`black/linegen.py:413`)

|      % |  Size | Allocations | Caller  | Location             |
| -----: | ----: | ----------: | ------- | -------------------- |
| 100.0% | 1 MiB |           4 | `visit` | `black/nodes.py:152` |

##### `shift` (`blib2to3/pgen2/parse.py:361`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:278` |

##### `__init__` (`blib2to3/pytree.py:389`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `convert` | `blib2to3/pytree.py:475` |

##### `comments_after` (`black/lines.py:418`)

|      % |  Size | Allocations | Caller                     | Location                |
| -----: | ----: | ----------: | -------------------------- | ----------------------- |
| 100.0% | 1 MiB |           1 | `bracket_split_build_line` | `black/linegen.py:1123` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:265`)

|      % |  Size | Allocations | Caller           | Location               |
| -----: | ----: | ----------: | ---------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `transform_line` | `black/linegen.py:601` |

##### `replace` (`/usr/lib/python3.11/dataclasses.py:1443`)

|      % |  Size | Allocations | Caller                                  | Location               |
| -----: | ----: | ----------: | --------------------------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `_maybe_split_omitting_optional_parens` | `black/linegen.py:932` |

##### `is_complex_subscript` (`black/lines.py:430`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:52` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                         |
| ----: | -------: | ----------: | ---------- | ---------------------------------------------------------------- |
| 50.7% | 39.2 KiB |          46 | `<module>` | `/venv13/lib/python3.11/site-packages/click/types.py:1`          |
| 22.6% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                               |
| 18.9% | 14.6 KiB |          10 | `<module>` | `/venv13/lib/python3.11/site-packages/click/core.py:1`           |
|  7.8% | 6.07 KiB |           7 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Caller             | Location                 |
| ----: | -------: | ----------: | ------------------ | ------------------------ |
| 94.1% |   72 KiB |           1 | `run_transformer`  | `black/linegen.py:1771`  |
|  5.9% | 4.48 KiB |           5 | `_format_str_once` | `black/__init__.py:1215` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Caller         | Location               |
| -----: | -------: | ----------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `visit_STRING` | `black/linegen.py:413` |

##### `load` (`blib2to3/pgen2/grammar.py:121`)

|      % |     Size | Allocations | Caller         | Location                       |
| -----: | -------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 46.7 KiB |          49 | `load_grammar` | `blib2to3/pgen2/driver.py:246` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Caller     | Location                                 |
| -----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 31.0% | 6.89 KiB |           8 | `<module>` | `black/mode.py:1`                                              |
| 14.8% |  3.3 KiB |           3 | `<module>` | `/venv13/lib/python3.11/site-packages/click/_utils.py:1`       |
| 12.6% | 2.81 KiB |           3 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/_elffile.py:1` |
| 11.0% | 2.44 KiB |           3 | `<module>` | `black/__init__.py:1`                                          |
|  7.8% | 1.74 KiB |           2 | `<module>` | `/venv13/lib/python3.11/site-packages/click/core.py:1`         |

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

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|     % |     Size | Allocations | Caller         | Location                          |
| ----: | -------: | ----------: | -------------- | --------------------------------- |
| 54.6% | 4.48 KiB |           5 | `__set_name__` | `/usr/lib/python3.11/enum.py:237` |
| 45.4% | 3.73 KiB |           4 | `__new__`      | `/usr/lib/python3.11/enum.py:488` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1604` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Caller  | Location                                |
| -----: | -------: | ----------: | ------- | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `parse` | `/usr/lib/python3.11/re/_parser.py:970` |

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

Functions ranked by total bytes never freed in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                         |
| -----: | -------: | ----------: | ---------------------- | ---------------------------------------------------------------- |
| 100.0% | 59.9 MiB |      22,484 | `_run_tracker`         | `/venv13/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 59.9 MiB |      22,483 | `run_module`           | `<frozen runpy>:201`                                             |
|  92.9% | 55.7 MiB |      21,202 | `__call__`             | `/venv13/lib/python3.11/site-packages/click/core.py:1629`        |
|  92.9% | 55.7 MiB |      21,202 | `patched_main`         | `black/__init__.py:1580`                                         |
|  92.9% | 55.7 MiB |      21,202 | `<module>`             | `black/__main__.py:1`                                            |
|  92.9% | 55.7 MiB |      21,202 | `_run_code`            | `<frozen runpy>:65`                                              |
|  92.9% | 55.7 MiB |      21,202 | `_run_module_code`     | `<frozen runpy>:91`                                              |
|  92.9% | 55.7 MiB |      21,201 | `main`                 | `/venv13/lib/python3.11/site-packages/click/core.py:1484`        |
|  92.9% | 55.6 MiB |      21,180 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:1401`        |
|  92.9% | 55.6 MiB |      21,178 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:857`         |
|  92.9% | 55.6 MiB |      21,177 | `new_func`             | `/venv13/lib/python3.11/site-packages/click/decorators.py:33`    |
|  92.9% | 55.6 MiB |      21,175 | `main`                 | `black/__init__.py:240`                                          |
|  92.9% | 55.6 MiB |      21,169 | `reformat_one`         | `black/__init__.py:865`                                          |
|  92.8% | 55.6 MiB |      21,157 | `format_file_in_place` | `black/__init__.py:922`                                          |
|  92.8% | 55.6 MiB |      21,156 | `format_file_contents` | `black/__init__.py:1059`                                         |
|  86.1% | 51.6 MiB |      21,148 | `_format_str_once`     | `black/__init__.py:1215`                                         |
|  60.8% | 36.4 MiB |      21,087 | `visit`                | `black/nodes.py:152`                                             |
|  60.8% | 36.4 MiB |      21,085 | `visit_default`        | `black/nodes.py:176`                                             |
|  60.8% | 36.4 MiB |      21,085 | `visit_default`        | `black/linegen.py:134`                                           |
|  60.4% | 36.2 MiB |      20,714 | `visit_stmt`           | `black/linegen.py:199`                                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 92.9% | 55.7 MiB |      21,202 | `patched_main`                    | `black/__init__.py:1580` |
| 92.9% | 55.7 MiB |      21,202 | `<module>`                        | `black/__main__.py:1`    |
| 92.9% | 55.6 MiB |      21,175 | `main`                            | `black/__init__.py:240`  |
| 92.9% | 55.6 MiB |      21,169 | `reformat_one`                    | `black/__init__.py:865`  |
| 92.8% | 55.6 MiB |      21,157 | `format_file_in_place`            | `black/__init__.py:922`  |
| 92.8% | 55.6 MiB |      21,156 | `format_file_contents`            | `black/__init__.py:1059` |
| 86.1% | 51.6 MiB |      21,148 | `_format_str_once`                | `black/__init__.py:1215` |
| 60.8% | 36.4 MiB |      21,087 | `visit`                           | `black/nodes.py:152`     |
| 60.8% | 36.4 MiB |      21,085 | `visit_default`                   | `black/nodes.py:176`     |
| 60.8% | 36.4 MiB |      21,085 | `visit_default`                   | `black/linegen.py:134`   |
| 60.4% | 36.2 MiB |      20,714 | `visit_stmt`                      | `black/linegen.py:199`   |
| 60.2% | 36.1 MiB |          95 | `format_str`                      | `black/__init__.py:1168` |
| 59.6% | 35.7 MiB |      20,147 | `visit_suite`                     | `black/linegen.py:288`   |
| 58.1% | 34.8 MiB |      20,272 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 41.4% | 24.8 MiB |      13,403 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 33.9% | 20.3 MiB |      20,885 | `append`                          | `black/lines.py:52`      |
| 33.2% | 19.9 MiB |      10,811 | `visit_power`                     | `black/linegen.py:341`   |
| 32.6% | 19.5 MiB |      21,061 | `check_stability_and_equivalence` | `black/__init__.py:1042` |
| 30.4% | 18.2 MiB |      20,790 | `mark`                            | `black/brackets.py:70`   |
| 25.9% | 15.5 MiB |      21,054 | `assert_stable`                   | `black/__init__.py:1543` |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 59.9 MiB |      22,483 | `run_module`                | `<frozen runpy>:201`                          |
|  92.9% | 55.7 MiB |      21,202 | `_run_code`                 | `<frozen runpy>:65`                           |
|  92.9% | 55.7 MiB |      21,202 | `_run_module_code`          | `<frozen runpy>:91`                           |
|   7.1% | 4.25 MiB |       1,280 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   7.1% | 4.25 MiB |       1,273 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   7.1% | 4.25 MiB |       1,271 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   7.1% | 4.25 MiB |       1,270 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   7.1% | 4.24 MiB |       1,268 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   7.0% | 4.21 MiB |       1,239 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   4.2% | 2.54 MiB |         603 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   4.2% | 2.54 MiB |         603 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   3.3% | 2.01 MiB |           3 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   2.2% |  1.3 MiB |         318 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.7% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   1.7% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   1.7% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   1.7% | 1.01 MiB |           7 | `_code`                     | `/usr/lib/python3.11/re/_compiler.py:571`     |
|   1.7% | 1.01 MiB |           9 | `<module>`                  | `/usr/lib/python3.11/secrets.py:1`            |
|   1.7% |    1 MiB |           3 | `_compile`                  | `/usr/lib/python3.11/re/_compiler.py:37`      |
|   1.7% |    1 MiB |           1 | `replace`                   | `/usr/lib/python3.11/dataclasses.py:1443`     |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 59.9 MiB |      22,483 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 92.9% | 55.7 MiB |      21,202 | `_run_module_code`    | `<frozen runpy>:91`  |
|  7.1% | 4.25 MiB |       1,280 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv13/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                  |
| -----: | -------: | ----------: | ------ | --------------------------------------------------------- |
| 100.0% | 55.7 MiB |      21,201 | `main` | `/venv13/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1580`)

|      % |     Size | Allocations | Callee     | Location                                                  |
| -----: | -------: | ----------: | ---------- | --------------------------------------------------------- |
| 100.0% | 55.7 MiB |      21,202 | `__call__` | `/venv13/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 55.7 MiB |      21,202 | `patched_main` | `black/__init__.py:1580` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 55.7 MiB |      21,202 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 55.7 MiB |      21,202 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv13/lib/python3.11/site-packages/click/core.py:1484`)

|      % |     Size | Allocations | Callee         | Location                                                  |
| -----: | -------: | ----------: | -------------- | --------------------------------------------------------- |
| 100.0% | 55.6 MiB |      21,180 | `invoke`       | `/venv13/lib/python3.11/site-packages/click/core.py:1401` |
|  <0.1% | 14.8 KiB |          18 | `make_context` | `/venv13/lib/python3.11/site-packages/click/core.py:1328` |
|  <0.1% |    529 B |           2 | `__exit__`     | `/venv13/lib/python3.11/site-packages/click/core.py:554`  |

##### `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:1401`)

|      % |     Size | Allocations | Callee   | Location                                                 |
| -----: | -------: | ----------: | -------- | -------------------------------------------------------- |
| 100.0% | 55.6 MiB |      21,178 | `invoke` | `/venv13/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`)

|      % |     Size | Allocations | Callee     | Location                                                      |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 55.6 MiB |      21,177 | `new_func` | `/venv13/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 55.6 MiB |      21,175 | `main` | `black/__init__.py:240` |

##### `main` (`black/__init__.py:240`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 55.6 MiB |      21,169 | `reformat_one` | `black/__init__.py:865` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:729` |
|  <0.1% |    550 B |           1 | `__str__`      | `black/report.py:80`    |

##### `reformat_one` (`black/__init__.py:865`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 55.6 MiB |      21,157 | `format_file_in_place` | `black/__init__.py:922` |
|  <0.1% | 5.22 KiB |           7 | `write`                | `black/cache.py:132`    |
|  <0.1% | 1.57 KiB |           2 | `done`                 | `black/report.py:36`    |
|  <0.1% | 1.19 KiB |           1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:922`)

|      % |     Size | Allocations | Callee                 | Location                 |
| -----: | -------: | ----------: | ---------------------- | ------------------------ |
| 100.0% | 55.6 MiB |      21,156 | `format_file_contents` | `black/__init__.py:1059` |
|  <0.1% |    552 B |           1 | `decode_bytes`         | `black/__init__.py:1269` |

##### `format_file_contents` (`black/__init__.py:1059`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 64.9% | 36.1 MiB |          95 | `format_str`                      | `black/__init__.py:1168` |
| 35.1% | 19.5 MiB |      21,061 | `check_stability_and_equivalence` | `black/__init__.py:1042` |

##### `_format_str_once` (`black/__init__.py:1215`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 70.6% | 36.4 MiB |      21,087 | `visit`                  | `black/nodes.py:152`     |
| 23.4% | 12.1 MiB |          32 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  6.0% | 3.08 MiB |          18 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1443` |

##### `visit` (`black/nodes.py:152`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 36.2 MiB |      20,714 | `visit_stmt`        | `black/linegen.py:199` |
|  98.1% | 35.7 MiB |      20,147 | `visit_suite`       | `black/linegen.py:288` |
|  95.5% | 34.8 MiB |      20,272 | `visit_funcdef`     | `black/linegen.py:254` |
|  68.1% | 24.8 MiB |      13,403 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:176`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit` | `black/nodes.py:152` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/nodes.py:176`   |
|  55.7% | 20.3 MiB |      20,885 | `append`            | `black/lines.py:52`    |
|  27.4% |   10 MiB |          10 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 36.2 MiB |      20,712 | `visit`                      | `black/nodes.py:152`    |
|   2.8% |    1 MiB |           2 | `normalize_invisible_parens` | `black/linegen.py:1344` |

##### `format_str` (`black/__init__.py:1168`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 36.1 MiB |          94 | `_format_str_once` | `black/__init__.py:1215` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 35.7 MiB |      20,147 | `visit_default` | `black/linegen.py:134` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 34.8 MiB |      20,272 | `visit` | `black/nodes.py:152` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 24.8 MiB |      13,403 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:52`)

|     % |     Size | Allocations | Callee                 | Location               |
| ----: | -------: | ----------: | ---------------------- | ---------------------- |
| 89.8% | 18.2 MiB |      20,790 | `mark`                 | `black/brackets.py:70` |
|  5.2% | 1.05 MiB |          90 | `whitespace`           | `black/nodes.py:183`   |
|  4.9% |    1 MiB |           1 | `is_complex_subscript` | `black/lines.py:430`   |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 19.9 MiB |      10,810 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1042`)

|     % |     Size | Allocations | Callee              | Location                 |
| ----: | -------: | ----------: | ------------------- | ------------------------ |
| 79.5% | 15.5 MiB |      21,054 | `assert_stable`     | `black/__init__.py:1543` |
| 20.5% | 4.01 MiB |           6 | `assert_equivalent` | `black/__init__.py:1510` |

##### `assert_stable` (`black/__init__.py:1543`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 15.5 MiB |      21,054 | `_format_str_once` | `black/__init__.py:1215` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.25 MiB |       1,273 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.25 MiB |       1,273 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.25 MiB |       1,271 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.25 MiB |       1,270 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.9% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.24 MiB |       1,268 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.21 MiB |       1,239 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.8% | 2.54 MiB |         603 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                   |
| -----: | -------: | ----------: | ---------------- | ---------------------------------------------------------- |
| 100.0% | 4.21 MiB |       1,239 | `<module>`       | `black/__init__.py:1`                                      |
|  31.2% | 1.31 MiB |         316 | `<module>`       | `/venv13/lib/python3.11/site-packages/click/__init__.py:1` |
|  31.2% | 1.31 MiB |         329 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                       |
|  30.5% | 1.28 MiB |         258 | `<module>`       | `black/comments.py:1`                                      |
|  30.1% | 1.27 MiB |         244 | `<module>`       | `black/nodes.py:1`                                         |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
| 100.0% | 2.54 MiB |         603 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.3 MiB |         318 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|     % |     Size | Allocations | Callee     | Location                                 |
| ----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 99.9% | 1.05 MiB |          25 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py:272`)

|     % |     Size | Allocations | Callee    | Location                                  |
| ----: | -------: | ----------: | --------- | ----------------------------------------- |
| 99.9% | 1.05 MiB |          24 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |
|  0.1% |    698 B |           1 | `__and__` | `/usr/lib/python3.11/enum.py:1504`        |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|     % |     Size | Allocations | Callee  | Location                                  |
| ----: | -------: | ----------: | ------- | ----------------------------------------- |
| 96.5% | 1.01 MiB |           7 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |
|  1.3% | 14.4 KiB |           5 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|     % |     Size | Allocations | Callee          | Location                                  |
| ----: | -------: | ----------: | --------------- | ----------------------------------------- |
| 99.3% |    1 MiB |           3 | `_compile`      | `/usr/lib/python3.11/re/_compiler.py:37`  |
|  0.2% | 1.74 KiB |           2 | `_compile_info` | `/usr/lib/python3.11/re/_compiler.py:509` |

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 99.8% | 1.01 MiB |           8 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py:37`)

|      % |  Size | Allocations | Callee     | Location                                 |
| -----: | ----: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 1 MiB |           3 | `_compile` | `/usr/lib/python3.11/re/_compiler.py:37` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | -------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.3% |    5 MiB |           5 | `__new__` (`blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.3% | 2.01 MiB |           3 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.3% |    2 MiB |           4 | `addtoken` (`blib2to3/pgen2/parse.py:230`) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.3% |    2 MiB |           2 | `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.3% |    2 MiB |           2 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.3% |    2 MiB |           2 | `changed` (`blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% | 1.01 MiB |          15 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/exceptions.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/types.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |    1 MiB |           7 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/usr/lib/python3.11/secrets.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/handle_ipynb_magics.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.7% |    1 MiB |           2 | `visit_STRING` (`black/linegen.py:413`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.7% |    1 MiB |           1 | `_compile` (`/usr/lib/python3.11/re/_compiler.py:37`) ← `_compile` (37) ← `_code` (571) ← `compile` (738) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`black/strings.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |    1 MiB |           1 | `shift` (`blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |    1 MiB |           1 | `__init__` (`blib2to3/pytree.py:237`) ← `convert` (475) ← `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.7% |    1 MiB |           1 | `__init__` (`blib2to3/pytree.py:389`) ← `convert` (475) ← `shift` (`blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.7% |    1 MiB |           1 | `comments_after` (`black/lines.py:418`) ← `bracket_split_build_line` (`black/linegen.py:1123`) ← `_first_right_hand_split` (829) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1771) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`black/nodes.py:436`) ← `whitespace` (183) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                      |
| 1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
| 1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                |
| 1.7% |    1 MiB |           1 | `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.7% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                        |
| 1.7% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

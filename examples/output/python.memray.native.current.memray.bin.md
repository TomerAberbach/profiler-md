# Peak memory profile

Held 78.6 MiB over 22,696 allocations (3.55 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 82.9% | 65.2 MiB |      21,440 |
| Standard library | 16.8% | 13.2 MiB |       1,024 |
| Third-party      |  0.3% |  238 KiB |         232 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Allocations | Function              | Location                                     |
| ----: | -------: | ----------: | --------------------- | -------------------------------------------- |
| 21.9% | 17.2 MiB |      20,789 | `mark`                | `black/brackets.py:70`                       |
| 11.6% | 9.12 MiB |         142 | `parse`               | `/usr/lib/python3.11/ast.py:33`              |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`   | `black/__init__.py:1510`                     |
|  7.7% | 6.05 MiB |          62 | `_stringify_ast`      | `black/parsing.py:182`                       |
|  6.5% | 5.14 MiB |         200 | `update_sibling_maps` | `blib2to3/pytree.py:358`                     |
|  6.4% |    5 MiB |           6 | `visit_default`       | `black/linegen.py:134`                       |
|  6.4% |    5 MiB |           5 | `__new__`             | `blib2to3/pytree.py:70`                      |
|  3.8% |    3 MiB |           3 | `changed`             | `blib2to3/pytree.py:160`                     |
|  3.2% | 2.55 MiB |         618 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>:727` |
|  2.6% | 2.01 MiB |           6 | `append`              | `black/lines.py:52`                          |
|  2.5% |    2 MiB |           2 | `generate_tokens`     | `blib2to3/pgen2/tokenize.py:554`             |
|  2.5% |    2 MiB |           2 | `__init__`            | `<string>:2`                                 |
|  1.3% | 1.01 MiB |           4 | `_parse`              | `/usr/lib/python3.11/re/_parser.py:507`      |
|  1.3% |    1 MiB |           5 | `__init__`            | `blib2to3/pytree.py:237`                     |
|  1.3% |    1 MiB |           4 | `transform_line`      | `black/linegen.py:601`                       |
|  1.3% |    1 MiB |           1 | `convert`             | `blib2to3/pytree.py:475`                     |
|  1.3% |    1 MiB |           1 | `_addtoken`           | `blib2to3/pgen2/parse.py:278`                |
|  1.3% |    1 MiB |           1 | `pop`                 | `blib2to3/pgen2/parse.py:386`                |
|  1.3% |    1 MiB |           1 | `push`                | `blib2to3/pgen2/parse.py:374`                |
|  1.3% |    1 MiB |           1 | `prefix`              | `blib2to3/pytree.py:469`                     |

#### Categories

##### Ours

|     % |     Size | Allocations | Function              | Location                         |
| ----: | -------: | ----------: | --------------------- | -------------------------------- |
| 21.9% | 17.2 MiB |      20,789 | `mark`                | `black/brackets.py:70`           |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`   | `black/__init__.py:1510`         |
|  7.7% | 6.05 MiB |          62 | `_stringify_ast`      | `black/parsing.py:182`           |
|  6.5% | 5.14 MiB |         200 | `update_sibling_maps` | `blib2to3/pytree.py:358`         |
|  6.4% |    5 MiB |           6 | `visit_default`       | `black/linegen.py:134`           |
|  6.4% |    5 MiB |           5 | `__new__`             | `blib2to3/pytree.py:70`          |
|  3.8% |    3 MiB |           3 | `changed`             | `blib2to3/pytree.py:160`         |
|  2.6% | 2.01 MiB |           6 | `append`              | `black/lines.py:52`              |
|  2.5% |    2 MiB |           2 | `generate_tokens`     | `blib2to3/pgen2/tokenize.py:554` |
|  2.5% |    2 MiB |           2 | `__init__`            | `<string>:2`                     |
|  1.3% |    1 MiB |           5 | `__init__`            | `blib2to3/pytree.py:237`         |
|  1.3% |    1 MiB |           4 | `transform_line`      | `black/linegen.py:601`           |
|  1.3% |    1 MiB |           1 | `convert`             | `blib2to3/pytree.py:475`         |
|  1.3% |    1 MiB |           1 | `_addtoken`           | `blib2to3/pgen2/parse.py:278`    |
|  1.3% |    1 MiB |           1 | `pop`                 | `blib2to3/pgen2/parse.py:386`    |
|  1.3% |    1 MiB |           1 | `push`                | `blib2to3/pgen2/parse.py:374`    |
|  1.3% |    1 MiB |           1 | `prefix`              | `blib2to3/pytree.py:469`         |
|  1.3% |    1 MiB |           1 | `generate_comments`   | `black/comments.py:52`           |
|  1.3% |    1 MiB |           1 | `__str__`             | `blib2to3/pytree.py:429`         |
|  1.3% |    1 MiB |           1 | `__str__`             | `black/lines.py:479`             |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  3.2% | 2.55 MiB |         618 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  1.3% | 1.01 MiB |           4 | `_parse`                   | `/usr/lib/python3.11/re/_parser.py:507`           |
|  0.3% |  222 KiB |           1 | `decode`                   | `<frozen codecs>:319`                             |
|  0.1% |  113 KiB |          82 | `__new__`                  | `<frozen abc>:105`                                |
| <0.1% | 23.3 KiB |          26 | `__new__`                  | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |          12 | `compile`                  | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |          12 | `<module>`                 | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                  | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                    | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% | 8.22 KiB |           9 | `__setattr__`              | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% |    8 KiB |           4 | `_fill_cache`              | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`               | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 5.63 KiB |           6 | `namedtuple`               | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.32 KiB |           2 | `_code`                    | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`                 | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`                     | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`           | `/usr/lib/python3.11/dataclasses.py:884`          |
| <0.1% | 2.56 KiB |           3 | `_signature_from_function` | `/usr/lib/python3.11/inspect.py:2331`             |
| <0.1% |  2.5 KiB |           1 | `<module>`                 | `/usr/lib/python3.11/secrets.py:1`                |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Location                |
| -----: | -------: | ----------: | ----------------------- |
| 100.0% | 17.2 MiB |      20,788 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 9.12 MiB |         142 | `/usr/lib/python3.11/ast.py:50` |

##### `assert_equivalent` (`black/__init__.py:1510`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 55.4% | 3.93 MiB |           2 | `black/__init__.py:1533` |
| 44.6% | 3.17 MiB |           2 | `black/__init__.py:1532` |

##### `_stringify_ast` (`black/parsing.py:182`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 33.8% | 2.05 MiB |          58 | `black/parsing.py:248` |
| 33.1% |    2 MiB |           2 | `black/parsing.py:193` |
| 16.5% |    1 MiB |           1 | `black/parsing.py:252` |
| 16.5% |    1 MiB |           1 | `black/parsing.py:205` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 59.7% | 3.07 MiB |          96 | `blib2to3/pytree.py:366` |
| 40.2% | 2.07 MiB |          95 | `blib2to3/pytree.py:365` |
|  0.1% | 4.99 KiB |           9 | `blib2to3/pytree.py:368` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 80.0% | 4 MiB |           4 | `black/linegen.py:158` |
| 20.0% | 1 MiB |           1 | `black/linegen.py:149` |
| <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 5 MiB |           5 | `blib2to3/pytree.py:73` |

##### `changed` (`blib2to3/pytree.py:160`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 66.7% | 2 MiB |           2 | `blib2to3/pytree.py:164` |
| 33.3% | 1 MiB |           1 | `blib2to3/pytree.py:165` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.55 MiB |         618 | `<frozen importlib._bootstrap_external>:729` |

##### `append` (`black/lines.py:52`)

|     % |     Size | Allocations | Location            |
| ----: | -------: | ----------: | ------------------- |
| 49.9% |    1 MiB |           2 | `black/lines.py:86` |
| 49.8% |    1 MiB |           1 | `black/lines.py:91` |
|  0.2% | 4.09 KiB |           1 | `black/lines.py:78` |
|  0.1% | 1.04 KiB |           1 | `black/lines.py:84` |
| <0.1% |    678 B |           1 | `black/lines.py:90` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`)

|     % |  Size | Allocations | Location                         |
| ----: | ----: | ----------: | -------------------------------- |
| 50.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:694` |
| 50.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:603` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Location     |
| ----: | ----: | ----------: | ------------ |
| 50.0% | 1 MiB |           1 | `<string>:5` |
| 50.0% | 1 MiB |           1 | `<string>:8` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 99.5% |    1 MiB |           1 | `/usr/lib/python3.11/re/_parser.py:548` |
|  0.2% | 2.43 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:539` |
|  0.2% |  1.9 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:568` |
|  0.1% | 1.28 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:838` |

##### `__init__` (`blib2to3/pytree.py:237`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:255` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 99.7% |    1 MiB |           1 | `black/linegen.py:627` |
|  0.1% | 1.39 KiB |           1 | `black/linegen.py:635` |
|  0.1% |    910 B |           1 | `black/linegen.py:714` |
| <0.1% |    518 B |           1 | `black/linegen.py:631` |

##### `convert` (`blib2to3/pytree.py:475`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:490` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:278`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:303` |

##### `pop` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:396` |

##### `push` (`blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:382` |

##### `prefix` (`blib2to3/pytree.py:469`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:471` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/comments.py:76` |

##### `__str__` (`blib2to3/pytree.py:429`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:435` |

##### `__str__` (`black/lines.py:479`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:489` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Location              |
| -----: | ------: | ----------: | --------------------- |
| 100.0% | 222 KiB |           1 | `<frozen codecs>:322` |

##### `__new__` (`<frozen abc>:105`)

|     % |    Size | Allocations | Location           |
| ----: | ------: | ----------: | ------------------ |
| 99.3% | 113 KiB |          81 | `<frozen abc>:106` |
|  0.7% |   768 B |           1 | `<frozen abc>:107` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 23.3 KiB |          26 | `/usr/lib/python3.11/enum.py:554` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/lib/python3.11/re/_compiler.py:759` |

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

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|      % |    Size | Allocations | Location                            |
| -----: | ------: | ----------: | ----------------------------------- |
| 100.0% | 2.5 KiB |           1 | `/usr/lib/python3.11/secrets.py:21` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Caller   | Location            |
| -----: | -------: | ----------: | -------- | ------------------- |
| 100.0% | 17.2 MiB |      20,789 | `append` | `black/lines.py:52` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 9.12 MiB |         142 | `_parse_single_version` | `black/parsing.py:125` |

##### `assert_equivalent` (`black/__init__.py:1510`)

|      % |    Size | Allocations | Caller                            | Location                 |
| -----: | ------: | ----------: | --------------------------------- | ------------------------ |
| 100.0% | 7.1 MiB |           4 | `check_stability_and_equivalence` | `black/__init__.py:1042` |

##### `_stringify_ast` (`black/parsing.py:182`)

|      % |     Size | Allocations | Caller                           | Location               |
| -----: | -------: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 6.05 MiB |          62 | `_stringify_ast_with_new_parent` | `black/parsing.py:174` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 5.14 MiB |         200 | `prev_sibling` | `blib2to3/pytree.py:196` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Caller         | Location               |
| ----: | ----: | ----------: | -------------- | ---------------------- |
| 60.0% | 3 MiB |           3 | `visit`        | `black/nodes.py:152`   |
| 20.0% | 1 MiB |           2 | `visit_STRING` | `black/linegen.py:413` |
| 20.0% | 1 MiB |           1 | `visit_power`  | `black/linegen.py:341` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 5 MiB |           5 | `convert` | `blib2to3/pytree.py:475` |

##### `changed` (`blib2to3/pytree.py:160`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 3 MiB |           3 | `changed` | `blib2to3/pytree.py:160` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.55 MiB |         618 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `append` (`black/lines.py:52`)

|      % |     Size | Allocations | Caller          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 2.01 MiB |           6 | `visit_default` | `black/linegen.py:134` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 2 MiB |           2 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Caller     | Location               |
| ----: | ----: | ----------: | ---------- | ---------------------- |
| 50.0% | 1 MiB |           1 | `line`     | `black/linegen.py:109` |
| 50.0% | 1 MiB |           1 | `__init__` | `<string>:2`           |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|      % |     Size | Allocations | Caller       | Location                                |
| -----: | -------: | ----------: | ------------ | --------------------------------------- |
| 100.0% | 1.01 MiB |           4 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `__init__` (`blib2to3/pytree.py:237`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:475` |

##### `transform_line` (`black/linegen.py:601`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 1 MiB |           4 | `_format_str_once` | `black/__init__.py:1215` |

##### `convert` (`blib2to3/pytree.py:475`)

|      % |  Size | Allocations | Caller | Location                      |
| -----: | ----: | ----------: | ------ | ----------------------------- |
| 100.0% | 1 MiB |           1 | `pop`  | `blib2to3/pgen2/parse.py:386` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:278`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:230` |

##### `pop` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:278` |

##### `push` (`blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:278` |

##### `prefix` (`blib2to3/pytree.py:469`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:52` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `visit_default` | `black/linegen.py:134` |

##### `__str__` (`blib2to3/pytree.py:429`)

|      % |  Size | Allocations | Caller    | Location             |
| -----: | ----: | ----------: | --------- | -------------------- |
| 100.0% | 1 MiB |           1 | `__str__` | `black/lines.py:479` |

##### `__str__` (`black/lines.py:479`)

|      % |  Size | Allocations | Caller           | Location              |
| -----: | ----: | ----------: | ---------------- | --------------------- |
| 100.0% | 1 MiB |           1 | `line_to_string` | `black/lines.py:1062` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Caller         | Location                 |
| -----: | ------: | ----------: | -------------- | ------------------------ |
| 100.0% | 222 KiB |           1 | `decode_bytes` | `black/__init__.py:1269` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 37.1% | 42.1 KiB |           8 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |
| 34.6% | 39.2 KiB |          46 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`          |
| 15.4% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                             |
| 12.9% | 14.6 KiB |          10 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`           |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Allocations | Caller     | Location                                                     |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------------ |
| 29.5% | 6.89 KiB |           8 | `<module>` | `black/mode.py:1`                                            |
| 16.7% | 3.89 KiB |           4 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/_elffile.py:1` |
| 14.2% |  3.3 KiB |           3 | `<module>` | `/venv/lib/python3.11/site-packages/click/_utils.py:1`       |
| 10.4% | 2.44 KiB |           3 | `<module>` | `black/__init__.py:1`                                        |
|  7.5% | 1.74 KiB |           2 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`         |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Caller     | Location                                 |
| -----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 19.8 KiB |          12 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|     % |     Size | Allocations | Caller     | Location                                                    |
| ----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 90.3% | 15.7 KiB |          19 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`       |
|  9.7% | 1.69 KiB |           2 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/version.py:1` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Allocations | Caller        | Location                                              |
| ----: | -------: | ----------: | ------------- | ----------------------------------------------------- |
| 75.3% | 9.02 KiB |           1 | `Line`        | `black/lines.py:38`                                   |
| 17.9% | 2.15 KiB |           1 | `__getitem__` | `/usr/lib/python3.11/typing.py:467`                   |
|  6.7% |    826 B |           1 | `<module>`    | `/venv/lib/python3.11/site-packages/click/types.py:1` |

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

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|      % |     Size | Allocations | Caller    | Location                                  |
| -----: | -------: | ----------: | --------- | ----------------------------------------- |
| 100.0% | 5.32 KiB |           2 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.73 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Caller     | Location                                                   |
| -----: | -------: | ----------: | ---------- | ---------------------------------------------------------- |
| 100.0% | 2.85 KiB |           1 | `<module>` | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1` |

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

Functions ranked by total bytes held at peak memory in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 78.6 MiB |      22,696 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 78.6 MiB |      22,695 | `run_module`           | `<frozen runpy>:201`                                           |
|  94.5% | 74.3 MiB |      21,395 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1629`        |
|  94.5% | 74.3 MiB |      21,395 | `patched_main`         | `black/__init__.py:1580`                                       |
|  94.5% | 74.3 MiB |      21,395 | `<module>`             | `black/__main__.py:1`                                          |
|  94.5% | 74.3 MiB |      21,395 | `_run_code`            | `<frozen runpy>:65`                                            |
|  94.5% | 74.3 MiB |      21,395 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  94.5% | 74.3 MiB |      21,394 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1484`        |
|  94.5% | 74.3 MiB |      21,374 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1401`        |
|  94.5% | 74.3 MiB |      21,371 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:857`         |
|  94.5% | 74.3 MiB |      21,369 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  94.5% | 74.3 MiB |      21,366 | `main`                 | `black/__init__.py:240`                                        |
|  94.5% | 74.2 MiB |      21,362 | `reformat_one`         | `black/__init__.py:865`                                        |
|  94.5% | 74.2 MiB |      21,359 | `format_file_in_place` | `black/__init__.py:922`                                        |
|  94.2% |   74 MiB |      21,356 | `format_file_contents` | `black/__init__.py:1059`                                       |
|  65.9% | 51.8 MiB |      21,147 | `format_str`           | `black/__init__.py:1168`                                       |
|  65.9% | 51.8 MiB |      21,146 | `_format_str_once`     | `black/__init__.py:1215`                                       |
|  46.4% | 36.4 MiB |      21,087 | `visit`                | `black/nodes.py:152`                                           |
|  46.4% | 36.4 MiB |      21,085 | `visit_default`        | `black/nodes.py:176`                                           |
|  46.4% | 36.4 MiB |      21,085 | `visit_default`        | `black/linegen.py:134`                                         |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 94.5% | 74.3 MiB |      21,395 | `patched_main`                    | `black/__init__.py:1580` |
| 94.5% | 74.3 MiB |      21,395 | `<module>`                        | `black/__main__.py:1`    |
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
| 44.3% | 34.8 MiB |      20,272 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 44.2% | 34.7 MiB |      20,146 | `visit_suite`                     | `black/linegen.py:288`   |
| 30.9% | 24.3 MiB |      20,889 | `append`                          | `black/lines.py:52`      |
| 28.3% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1042` |
| 28.3% | 22.3 MiB |         208 | `assert_equivalent`               | `black/__init__.py:1510` |
| 26.5% | 20.8 MiB |      13,399 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 21.9% | 17.2 MiB |      20,789 | `mark`                            | `black/brackets.py:70`   |
| 19.0% | 14.9 MiB |      10,806 | `visit_power`                     | `black/linegen.py:341`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 78.6 MiB |      22,695 | `run_module`                | `<frozen runpy>:201`                          |
|  94.5% | 74.3 MiB |      21,395 | `_run_code`                 | `<frozen runpy>:65`                           |
|  94.5% | 74.3 MiB |      21,395 | `_run_module_code`          | `<frozen runpy>:91`                           |
|  11.6% | 9.12 MiB |         142 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   5.5% | 4.31 MiB |       1,299 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   5.5% |  4.3 MiB |       1,292 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   5.5% |  4.3 MiB |       1,290 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   5.5% |  4.3 MiB |       1,289 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   5.5% |  4.3 MiB |       1,287 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   5.4% | 4.27 MiB |       1,258 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   3.2% | 2.55 MiB |         618 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   3.2% | 2.55 MiB |         618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   1.7% | 1.31 MiB |         319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.3% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   1.3% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   1.3% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   1.3% | 1.01 MiB |           6 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`       |
|   1.3% | 1.01 MiB |           5 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`       |
|   1.3% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`       |
|   0.3% |  222 KiB |           1 | `decode`                    | `<frozen codecs>:319`                         |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 78.6 MiB |      22,695 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 94.5% | 74.3 MiB |      21,395 | `_run_module_code`    | `<frozen runpy>:91`  |
|  5.5% | 4.31 MiB |       1,299 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,394 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1580`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,395 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 74.3 MiB |      21,395 | `patched_main` | `black/__init__.py:1580` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 74.3 MiB |      21,395 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 74.3 MiB |      21,395 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,374 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1401` |
|  <0.1% | 14.6 KiB |          18 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1328` |
|  <0.1% |     32 B |           1 | `__enter__`    | `/venv/lib/python3.11/site-packages/click/core.py:549`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 74.3 MiB |      21,371 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,369 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

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
|  95.5% | 34.8 MiB |      20,272 | `visit_funcdef`     | `black/linegen.py:254` |
|  95.3% | 34.7 MiB |      20,146 | `visit_suite`       | `black/linegen.py:288` |
|  57.2% | 20.8 MiB |      13,399 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:176`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit` | `black/nodes.py:152` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/nodes.py:176`   |
|  66.6% | 24.3 MiB |      20,889 | `append`            | `black/lines.py:52`    |
|   8.2% |    3 MiB |           3 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 36.2 MiB |      20,712 | `visit`                      | `black/nodes.py:152`    |
|   2.8% |    1 MiB |           2 | `normalize_invisible_parens` | `black/linegen.py:1344` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 34.8 MiB |      20,272 | `visit` | `black/nodes.py:152` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 34.7 MiB |      20,146 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:52`)

|     % |     Size | Allocations | Callee       | Location                 |
| ----: | -------: | ----------: | ------------ | ------------------------ |
| 70.9% | 17.2 MiB |      20,789 | `mark`       | `black/brackets.py:70`   |
| 16.7% | 4.05 MiB |          93 | `whitespace` | `black/nodes.py:183`     |
|  4.1% |    1 MiB |           1 | `prefix`     | `blib2to3/pytree.py:469` |

##### `check_stability_and_equivalence` (`black/__init__.py:1042`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 22.3 MiB |         208 | `assert_equivalent` | `black/__init__.py:1510` |

##### `assert_equivalent` (`black/__init__.py:1510`)

|     % |     Size | Allocations | Callee           | Location               |
| ----: | -------: | ----------: | ---------------- | ---------------------- |
| 41.0% | 9.12 MiB |         142 | `parse_ast`      | `black/parsing.py:137` |
| 27.2% | 6.05 MiB |          62 | `_stringify_ast` | `black/parsing.py:182` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 20.8 MiB |      13,399 | `visit_default` | `black/linegen.py:134` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 14.9 MiB |      10,805 | `visit_default` | `black/linegen.py:134` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% |  4.3 MiB |       1,292 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% |  4.3 MiB |       1,292 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |    Size | Allocations | Callee                    | Location                             |
| -----: | ------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.3 MiB |       1,290 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |   560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% |  4.3 MiB |       1,289 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.8% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% |  4.3 MiB |       1,287 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.27 MiB |       1,258 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.4% | 2.55 MiB |         618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                 |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 100.0% | 4.27 MiB |       1,258 | `<module>`       | `black/__init__.py:1`                                    |
|  30.8% | 1.32 MiB |         330 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                     |
|  30.8% | 1.31 MiB |         316 | `<module>`       | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.1% | 1.28 MiB |         258 | `<module>`       | `black/comments.py:1`                                    |
|  29.8% | 1.27 MiB |         244 | `<module>`       | `black/nodes.py:1`                                       |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
| 100.0% | 2.55 MiB |         618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.31 MiB |         319 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

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
| 97.0% | 1.01 MiB |           6 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |
|  0.9% |  9.5 KiB |           6 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |

##### `parse` (`/usr/lib/python3.11/re/_parser.py:970`)

|     % |     Size | Allocations | Callee       | Location                                |
| ----: | -------: | ----------: | ------------ | --------------------------------------- |
| 99.9% | 1.01 MiB |           5 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|     % |     Size | Allocations | Callee   | Location                                |
| ----: | -------: | ----------: | -------- | --------------------------------------- |
| 99.2% | 1.01 MiB |           4 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |  Size | Allocations | Callee       | Location                                |
| ----: | ----: | ----------: | ------------ | --------------------------------------- |
| 99.6% | 1 MiB |           2 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | -------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.8% |    3 MiB |           3 | `__new__` (`blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.8% |    3 MiB |           3 | `_stringify_ast` (`black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.5% |    2 MiB |           2 | `__new__` (`blib2to3/pytree.py:70`) ← `convert` (475) ← `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.5% |    2 MiB |           2 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.4% | 1.09 MiB |         125 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.4% | 1.06 MiB |          74 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.3% | 1.05 MiB |          85 | `update_sibling_maps` (`blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `prev_siblings_are` (`black/nodes.py:454`) ← `is_docstring` (553) ← `visit_STRING` (`black/linegen.py:413`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% | 1.04 MiB |          42 | `_stringify_ast` (`black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.3% | 1.03 MiB |          23 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% | 1.03 MiB |          37 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.3% | 1.02 MiB |          27 | `update_sibling_maps` (`blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`black/nodes.py:436`) ← `whitespace` (183) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.3% | 1.01 MiB |          16 | `_stringify_ast` (`black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.3% |    1 MiB |           5 | `__init__` (`blib2to3/pytree.py:237`) ← `convert` (475) ← `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.3% |    1 MiB |           4 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.3% |    1 MiB |           1 | `_parse` (`/usr/lib/python3.11/re/_parser.py:507`) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`blib2to3/pgen2/tokenize.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`blib2to3/pgen2/driver.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`blib2to3/pygram.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
|  1.3% |    1 MiB |           1 | `convert` (`blib2to3/pytree.py:475`) ← `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.3% |    1 MiB |           1 | `_addtoken` (`blib2to3/pgen2/parse.py:278`) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% |    1 MiB |           1 | `push` (`blib2to3/pgen2/parse.py:374`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

# Leaked memory profile

Leaked 59.9 MiB over 22,501 allocations (2.73 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 88.2% | 52.8 MiB |      21,383 |
| Standard library | 11.4% | 6.83 MiB |         888 |
| Third-party      |  0.4% |  237 KiB |         230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Allocations | Function              | Location                                     |
| ----: | -------: | ----------: | --------------------- | -------------------------------------------- |
| 28.8% | 17.2 MiB |      20,789 | `mark`                | `black/brackets.py:70`                       |
|  8.6% | 5.14 MiB |         200 | `update_sibling_maps` | `blib2to3/pytree.py:358`                     |
|  8.3% |    5 MiB |           5 | `__new__`             | `blib2to3/pytree.py:70`                      |
|  6.7% |    4 MiB |           5 | `visit_default`       | `black/linegen.py:134`                       |
|  5.0% | 3.01 MiB |           4 | `parse`               | `/usr/lib/python3.11/ast.py:33`              |
|  5.0% |    3 MiB |           3 | `changed`             | `blib2to3/pytree.py:160`                     |
|  4.3% | 2.55 MiB |         618 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>:727` |
|  3.3% | 2.01 MiB |           6 | `append`              | `black/lines.py:52`                          |
|  3.3% |    2 MiB |           2 | `generate_tokens`     | `blib2to3/pgen2/tokenize.py:554`             |
|  3.3% |    2 MiB |           2 | `__init__`            | `<string>:2`                                 |
|  3.3% |    2 MiB |           2 | `_stringify_ast`      | `black/parsing.py:182`                       |
|  1.7% | 1.04 MiB |           7 | `transform_line`      | `black/linegen.py:601`                       |
|  1.7% | 1.01 MiB |           4 | `_parse`              | `/usr/lib/python3.11/re/_parser.py:507`      |
|  1.7% |    1 MiB |           5 | `__init__`            | `blib2to3/pytree.py:237`                     |
|  1.7% |    1 MiB |           1 | `convert`             | `blib2to3/pytree.py:475`                     |
|  1.7% |    1 MiB |           1 | `_addtoken`           | `blib2to3/pgen2/parse.py:278`                |
|  1.7% |    1 MiB |           1 | `pop`                 | `blib2to3/pgen2/parse.py:386`                |
|  1.7% |    1 MiB |           1 | `push`                | `blib2to3/pgen2/parse.py:374`                |
|  1.7% |    1 MiB |           1 | `prefix`              | `blib2to3/pytree.py:469`                     |
|  1.7% |    1 MiB |           1 | `generate_comments`   | `black/comments.py:52`                       |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                  | Location                         |
| ----: | -------: | ----------: | ------------------------- | -------------------------------- |
| 28.8% | 17.2 MiB |      20,789 | `mark`                    | `black/brackets.py:70`           |
|  8.6% | 5.14 MiB |         200 | `update_sibling_maps`     | `blib2to3/pytree.py:358`         |
|  8.3% |    5 MiB |           5 | `__new__`                 | `blib2to3/pytree.py:70`          |
|  6.7% |    4 MiB |           5 | `visit_default`           | `black/linegen.py:134`           |
|  5.0% |    3 MiB |           3 | `changed`                 | `blib2to3/pytree.py:160`         |
|  3.3% | 2.01 MiB |           6 | `append`                  | `black/lines.py:52`              |
|  3.3% |    2 MiB |           2 | `generate_tokens`         | `blib2to3/pgen2/tokenize.py:554` |
|  3.3% |    2 MiB |           2 | `__init__`                | `<string>:2`                     |
|  3.3% |    2 MiB |           2 | `_stringify_ast`          | `black/parsing.py:182`           |
|  1.7% | 1.04 MiB |           7 | `transform_line`          | `black/linegen.py:601`           |
|  1.7% |    1 MiB |           5 | `__init__`                | `blib2to3/pytree.py:237`         |
|  1.7% |    1 MiB |           1 | `convert`                 | `blib2to3/pytree.py:475`         |
|  1.7% |    1 MiB |           1 | `_addtoken`               | `blib2to3/pgen2/parse.py:278`    |
|  1.7% |    1 MiB |           1 | `pop`                     | `blib2to3/pgen2/parse.py:386`    |
|  1.7% |    1 MiB |           1 | `push`                    | `blib2to3/pgen2/parse.py:374`    |
|  1.7% |    1 MiB |           1 | `prefix`                  | `blib2to3/pytree.py:469`         |
|  1.7% |    1 MiB |           1 | `generate_comments`       | `black/comments.py:52`           |
|  1.7% |    1 MiB |           1 | `__str__`                 | `blib2to3/pytree.py:429`         |
|  1.7% |    1 MiB |           1 | `__str__`                 | `black/lines.py:479`             |
|  0.1% | 57.2 KiB |          65 | `normalize_string_prefix` | `black/strings.py:143`           |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
|  5.0% | 3.01 MiB |           4 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  4.3% | 2.55 MiB |         618 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  1.7% | 1.01 MiB |           4 | `_parse`                   | `/usr/lib/python3.11/re/_parser.py:507`           |
|  0.1% | 77.4 KiB |          81 | `__new__`                  | `<frozen abc>:105`                                |
| <0.1% | 23.3 KiB |          26 | `__new__`                  | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |          12 | `compile`                  | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |          12 | `<module>`                 | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                  | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                    | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% | 8.22 KiB |           9 | `__setattr__`              | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% |    8 KiB |           4 | `_fill_cache`              | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`               | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 5.63 KiB |           6 | `namedtuple`               | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.32 KiB |           2 | `_code`                    | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`                 | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`                     | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`           | `/usr/lib/python3.11/dataclasses.py:884`          |
| <0.1% | 2.56 KiB |           3 | `_signature_from_function` | `/usr/lib/python3.11/inspect.py:2331`             |
| <0.1% |  2.5 KiB |           1 | `<module>`                 | `/usr/lib/python3.11/secrets.py:1`                |
| <0.1% |  2.5 KiB |           1 | `rng`                      | `/usr/lib/python3.11/tempfile.py:281`             |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Location                |
| -----: | -------: | ----------: | ----------------------- |
| 100.0% | 17.2 MiB |      20,788 | `black/brackets.py:112` |
|  <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 59.7% | 3.07 MiB |          96 | `blib2to3/pytree.py:366` |
| 40.2% | 2.07 MiB |          95 | `blib2to3/pytree.py:365` |
|  0.1% | 4.99 KiB |           9 | `blib2to3/pytree.py:368` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 5 MiB |           5 | `blib2to3/pytree.py:73` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 4 MiB |           4 | `black/linegen.py:158` |
|  <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 3.01 MiB |           4 | `/usr/lib/python3.11/ast.py:50` |

##### `changed` (`blib2to3/pytree.py:160`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 66.7% | 2 MiB |           2 | `blib2to3/pytree.py:164` |
| 33.3% | 1 MiB |           1 | `blib2to3/pytree.py:165` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.55 MiB |         618 | `<frozen importlib._bootstrap_external>:729` |

##### `append` (`black/lines.py:52`)

|     % |     Size | Allocations | Location            |
| ----: | -------: | ----------: | ------------------- |
| 49.9% |    1 MiB |           2 | `black/lines.py:86` |
| 49.8% |    1 MiB |           1 | `black/lines.py:91` |
|  0.2% | 4.09 KiB |           1 | `black/lines.py:78` |
|  0.1% | 1.04 KiB |           1 | `black/lines.py:84` |
| <0.1% |    678 B |           1 | `black/lines.py:90` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`)

|     % |  Size | Allocations | Location                         |
| ----: | ----: | ----------: | -------------------------------- |
| 50.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:694` |
| 50.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:603` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Location     |
| ----: | ----: | ----------: | ------------ |
| 50.0% | 1 MiB |           1 | `<string>:5` |
| 50.0% | 1 MiB |           1 | `<string>:8` |

##### `_stringify_ast` (`black/parsing.py:182`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 50.0% | 1 MiB |           1 | `black/parsing.py:248` |
| 50.0% | 1 MiB |           1 | `black/parsing.py:193` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 96.2% |    1 MiB |           1 | `black/linegen.py:627` |
|  3.5% | 37.7 KiB |           3 | `black/linegen.py:679` |
|  0.1% | 1.39 KiB |           1 | `black/linegen.py:635` |
|  0.1% |    910 B |           1 | `black/linegen.py:714` |
| <0.1% |    518 B |           1 | `black/linegen.py:631` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 99.5% |    1 MiB |           1 | `/usr/lib/python3.11/re/_parser.py:548` |
|  0.2% | 2.43 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:539` |
|  0.2% |  1.9 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:568` |
|  0.1% | 1.28 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:838` |

##### `__init__` (`blib2to3/pytree.py:237`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:255` |

##### `convert` (`blib2to3/pytree.py:475`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:490` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:278`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:303` |

##### `pop` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:396` |

##### `push` (`blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:382` |

##### `prefix` (`blib2to3/pytree.py:469`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:471` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/comments.py:76` |

##### `__str__` (`blib2to3/pytree.py:429`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:435` |

##### `__str__` (`black/lines.py:479`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:489` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Location           |
| ----: | -------: | ----------: | ------------------ |
| 99.0% | 76.7 KiB |          80 | `<frozen abc>:106` |
|  1.0% |    768 B |           1 | `<frozen abc>:107` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Location               |
| -----: | -------: | ----------: | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `black/strings.py:158` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 23.3 KiB |          26 | `/usr/lib/python3.11/enum.py:554` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/lib/python3.11/re/_compiler.py:759` |

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

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|      % |    Size | Allocations | Location                            |
| -----: | ------: | ----------: | ----------------------------------- |
| 100.0% | 2.5 KiB |           1 | `/usr/lib/python3.11/secrets.py:21` |

##### `rng` (`/usr/lib/python3.11/tempfile.py:281`)

|      % |    Size | Allocations | Location                              |
| -----: | ------: | ----------: | ------------------------------------- |
| 100.0% | 2.5 KiB |           1 | `/usr/lib/python3.11/tempfile.py:285` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Caller   | Location            |
| -----: | -------: | ----------: | -------- | ------------------- |
| 100.0% | 17.2 MiB |      20,789 | `append` | `black/lines.py:52` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 5.14 MiB |         200 | `prev_sibling` | `blib2to3/pytree.py:196` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 5 MiB |           5 | `convert` | `blib2to3/pytree.py:475` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Caller         | Location               |
| ----: | ----: | ----------: | -------------- | ---------------------- |
| 50.0% | 2 MiB |           2 | `visit`        | `black/nodes.py:152`   |
| 25.0% | 1 MiB |           2 | `visit_STRING` | `black/linegen.py:413` |
| 25.0% | 1 MiB |           1 | `visit_power`  | `black/linegen.py:341` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 3.01 MiB |           4 | `_parse_single_version` | `black/parsing.py:125` |

##### `changed` (`blib2to3/pytree.py:160`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 3 MiB |           3 | `changed` | `blib2to3/pytree.py:160` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.55 MiB |         618 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `append` (`black/lines.py:52`)

|      % |     Size | Allocations | Caller          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 2.01 MiB |           6 | `visit_default` | `black/linegen.py:134` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 2 MiB |           2 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Caller     | Location               |
| ----: | ----: | ----------: | ---------- | ---------------------- |
| 50.0% | 1 MiB |           1 | `line`     | `black/linegen.py:109` |
| 50.0% | 1 MiB |           1 | `__init__` | `<string>:2`           |

##### `_stringify_ast` (`black/parsing.py:182`)

|      % |  Size | Allocations | Caller                           | Location               |
| -----: | ----: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `_stringify_ast_with_new_parent` | `black/parsing.py:174` |

##### `transform_line` (`black/linegen.py:601`)

|      % |     Size | Allocations | Caller             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 1.04 MiB |           7 | `_format_str_once` | `black/__init__.py:1215` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|      % |     Size | Allocations | Caller       | Location                                |
| -----: | -------: | ----------: | ------------ | --------------------------------------- |
| 100.0% | 1.01 MiB |           4 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `__init__` (`blib2to3/pytree.py:237`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:475` |

##### `convert` (`blib2to3/pytree.py:475`)

|      % |  Size | Allocations | Caller | Location                      |
| -----: | ----: | ----------: | ------ | ----------------------------- |
| 100.0% | 1 MiB |           1 | `pop`  | `blib2to3/pgen2/parse.py:386` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:278`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:230` |

##### `pop` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:278` |

##### `push` (`blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:278` |

##### `prefix` (`blib2to3/pytree.py:469`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:52` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `visit_default` | `black/linegen.py:134` |

##### `__str__` (`blib2to3/pytree.py:429`)

|      % |  Size | Allocations | Caller    | Location             |
| -----: | ----: | ----------: | --------- | -------------------- |
| 100.0% | 1 MiB |           1 | `__str__` | `black/lines.py:479` |

##### `__str__` (`black/lines.py:479`)

|      % |  Size | Allocations | Caller           | Location              |
| -----: | ----: | ----------: | ---------------- | --------------------- |
| 100.0% | 1 MiB |           1 | `line_to_string` | `black/lines.py:1062` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 50.7% | 39.2 KiB |          46 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`          |
| 22.6% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                             |
| 18.9% | 14.6 KiB |          10 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`           |
|  7.8% | 6.07 KiB |           7 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Caller         | Location               |
| -----: | -------: | ----------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `visit_STRING` | `black/linegen.py:413` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Allocations | Caller     | Location                                                     |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------------ |
| 29.5% | 6.89 KiB |           8 | `<module>` | `black/mode.py:1`                                            |
| 16.7% | 3.89 KiB |           4 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/_elffile.py:1` |
| 14.2% |  3.3 KiB |           3 | `<module>` | `/venv/lib/python3.11/site-packages/click/_utils.py:1`       |
| 10.4% | 2.44 KiB |           3 | `<module>` | `black/__init__.py:1`                                        |
|  7.5% | 1.74 KiB |           2 | `<module>` | `/venv/lib/python3.11/site-packages/click/core.py:1`         |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Caller     | Location                                 |
| -----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 19.8 KiB |          12 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|     % |     Size | Allocations | Caller     | Location                                                    |
| ----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 90.3% | 15.7 KiB |          19 | `<module>` | `/venv/lib/python3.11/site-packages/click/types.py:1`       |
|  9.7% | 1.69 KiB |           2 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/version.py:1` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Allocations | Caller        | Location                                              |
| ----: | -------: | ----------: | ------------- | ----------------------------------------------------- |
| 75.3% | 9.02 KiB |           1 | `Line`        | `black/lines.py:38`                                   |
| 17.9% | 2.15 KiB |           1 | `__getitem__` | `/usr/lib/python3.11/typing.py:467`                   |
|  6.7% |    826 B |           1 | `<module>`    | `/venv/lib/python3.11/site-packages/click/types.py:1` |

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

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|      % |     Size | Allocations | Caller    | Location                                  |
| -----: | -------: | ----------: | --------- | ----------------------------------------- |
| 100.0% | 5.32 KiB |           2 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.73 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Caller     | Location                                                   |
| -----: | -------: | ----------: | ---------- | ---------------------------------------------------------- |
| 100.0% | 2.85 KiB |           1 | `<module>` | `/venv/lib/python3.11/site-packages/pathspec/pattern.py:1` |

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

##### `rng` (`/usr/lib/python3.11/tempfile.py:281`)

|      % |    Size | Allocations | Caller     | Location                              |
| -----: | ------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 2.5 KiB |           1 | `__next__` | `/usr/lib/python3.11/tempfile.py:292` |

### Total size

Functions ranked by total bytes never freed in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 59.9 MiB |      22,501 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 59.9 MiB |      22,500 | `run_module`           | `<frozen runpy>:201`                                           |
|  92.9% | 55.6 MiB |      21,201 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1629`        |
|  92.9% | 55.6 MiB |      21,201 | `patched_main`         | `black/__init__.py:1580`                                       |
|  92.9% | 55.6 MiB |      21,201 | `<module>`             | `black/__main__.py:1`                                          |
|  92.9% | 55.6 MiB |      21,201 | `_run_code`            | `<frozen runpy>:65`                                            |
|  92.9% | 55.6 MiB |      21,201 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  92.9% | 55.6 MiB |      21,200 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1484`        |
|  92.8% | 55.6 MiB |      21,180 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1401`        |
|  92.8% | 55.6 MiB |      21,178 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:857`         |
|  92.8% | 55.6 MiB |      21,177 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  92.8% | 55.6 MiB |      21,175 | `main`                 | `black/__init__.py:240`                                        |
|  92.8% | 55.6 MiB |      21,169 | `reformat_one`         | `black/__init__.py:865`                                        |
|  92.8% | 55.6 MiB |      21,157 | `format_file_in_place` | `black/__init__.py:922`                                        |
|  92.8% | 55.6 MiB |      21,156 | `format_file_contents` | `black/__init__.py:1059`                                       |
|  84.4% | 50.6 MiB |      21,147 | `_format_str_once`     | `black/__init__.py:1215`                                       |
|  59.2% | 35.4 MiB |      21,086 | `visit`                | `black/nodes.py:152`                                           |
|  59.2% | 35.4 MiB |      21,084 | `visit_default`        | `black/nodes.py:176`                                           |
|  59.2% | 35.4 MiB |      21,084 | `visit_default`        | `black/linegen.py:134`                                         |
|  58.7% | 35.2 MiB |      20,713 | `visit_stmt`           | `black/linegen.py:199`                                         |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 92.9% | 55.6 MiB |      21,201 | `patched_main`                    | `black/__init__.py:1580` |
| 92.9% | 55.6 MiB |      21,201 | `<module>`                        | `black/__main__.py:1`    |
| 92.8% | 55.6 MiB |      21,175 | `main`                            | `black/__init__.py:240`  |
| 92.8% | 55.6 MiB |      21,169 | `reformat_one`                    | `black/__init__.py:865`  |
| 92.8% | 55.6 MiB |      21,157 | `format_file_in_place`            | `black/__init__.py:922`  |
| 92.8% | 55.6 MiB |      21,156 | `format_file_contents`            | `black/__init__.py:1059` |
| 84.4% | 50.6 MiB |      21,147 | `_format_str_once`                | `black/__init__.py:1215` |
| 59.2% | 35.4 MiB |      21,086 | `visit`                           | `black/nodes.py:152`     |
| 59.2% | 35.4 MiB |      21,084 | `visit_default`                   | `black/nodes.py:176`     |
| 59.2% | 35.4 MiB |      21,084 | `visit_default`                   | `black/linegen.py:134`   |
| 58.7% | 35.2 MiB |      20,713 | `visit_stmt`                      | `black/linegen.py:199`   |
| 58.6% | 35.1 MiB |          94 | `format_str`                      | `black/__init__.py:1168` |
| 58.1% | 34.8 MiB |      20,272 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 58.0% | 34.7 MiB |      20,146 | `visit_suite`                     | `black/linegen.py:288`   |
| 40.5% | 24.3 MiB |      20,889 | `append`                          | `black/lines.py:52`      |
| 34.2% | 20.5 MiB |      21,062 | `check_stability_and_equivalence` | `black/__init__.py:1042` |
| 33.1% | 19.8 MiB |      13,398 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 28.8% | 17.2 MiB |      20,789 | `mark`                            | `black/brackets.py:70`   |
| 25.9% | 15.5 MiB |      21,054 | `assert_stable`                   | `black/__init__.py:1543` |
| 24.9% | 14.9 MiB |      10,806 | `visit_power`                     | `black/linegen.py:341`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 59.9 MiB |      22,500 | `run_module`                | `<frozen runpy>:201`                          |
|  92.9% | 55.6 MiB |      21,201 | `_run_code`                 | `<frozen runpy>:65`                           |
|  92.9% | 55.6 MiB |      21,201 | `_run_module_code`          | `<frozen runpy>:91`                           |
|   7.1% | 4.27 MiB |       1,298 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   7.1% | 4.27 MiB |       1,291 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   7.1% | 4.26 MiB |       1,289 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   7.1% | 4.26 MiB |       1,288 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   7.1% | 4.26 MiB |       1,286 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   7.1% | 4.23 MiB |       1,257 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   5.0% | 3.01 MiB |           4 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   4.3% | 2.55 MiB |         618 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   4.3% | 2.55 MiB |         618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   2.2% | 1.31 MiB |         319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.7% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   1.7% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   1.7% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   1.7% | 1.01 MiB |           6 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`       |
|   1.7% | 1.01 MiB |           5 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`       |
|   1.7% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`       |
|   0.1% | 77.4 KiB |          81 | `__new__`                   | `<frozen abc>:105`                            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 59.9 MiB |      22,500 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 92.9% | 55.6 MiB |      21,201 | `_run_module_code`    | `<frozen runpy>:91`  |
|  7.1% | 4.27 MiB |       1,298 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 55.6 MiB |      21,200 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1580`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 55.6 MiB |      21,201 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 55.6 MiB |      21,201 | `patched_main` | `black/__init__.py:1580` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 55.6 MiB |      21,201 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 55.6 MiB |      21,201 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 55.6 MiB |      21,180 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1401` |
|  <0.1% | 14.1 KiB |          17 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1328` |
|  <0.1% |    529 B |           2 | `__exit__`     | `/venv/lib/python3.11/site-packages/click/core.py:554`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 55.6 MiB |      21,178 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 55.6 MiB |      21,177 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

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
| 63.1% | 35.1 MiB |          94 | `format_str`                      | `black/__init__.py:1168` |
| 36.9% | 20.5 MiB |      21,062 | `check_stability_and_equivalence` | `black/__init__.py:1042` |

##### `_format_str_once` (`black/__init__.py:1215`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 70.1% | 35.4 MiB |      21,086 | `visit`                  | `black/nodes.py:152`     |
| 23.8% | 12.1 MiB |          32 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  6.0% | 3.05 MiB |          18 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1443` |

##### `visit` (`black/nodes.py:152`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 35.2 MiB |      20,713 | `visit_stmt`        | `black/linegen.py:199` |
|  98.2% | 34.8 MiB |      20,272 | `visit_funcdef`     | `black/linegen.py:254` |
|  98.0% | 34.7 MiB |      20,146 | `visit_suite`       | `black/linegen.py:288` |
|  55.9% | 19.8 MiB |      13,398 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:176`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit` | `black/nodes.py:152` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 35.4 MiB |      21,084 | `visit_default`     | `black/nodes.py:176`   |
|  68.5% | 24.3 MiB |      20,889 | `append`            | `black/lines.py:52`    |
|   8.5% |    3 MiB |           3 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 35.2 MiB |      20,711 | `visit`                      | `black/nodes.py:152`    |
|   2.8% |    1 MiB |           2 | `normalize_invisible_parens` | `black/linegen.py:1344` |

##### `format_str` (`black/__init__.py:1168`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 35.1 MiB |          93 | `_format_str_once` | `black/__init__.py:1215` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 34.8 MiB |      20,272 | `visit` | `black/nodes.py:152` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 34.7 MiB |      20,146 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:52`)

|     % |     Size | Allocations | Callee       | Location                 |
| ----: | -------: | ----------: | ------------ | ------------------------ |
| 70.9% | 17.2 MiB |      20,789 | `mark`       | `black/brackets.py:70`   |
| 16.7% | 4.05 MiB |          93 | `whitespace` | `black/nodes.py:183`     |
|  4.1% |    1 MiB |           1 | `prefix`     | `blib2to3/pytree.py:469` |

##### `check_stability_and_equivalence` (`black/__init__.py:1042`)

|     % |     Size | Allocations | Callee              | Location                 |
| ----: | -------: | ----------: | ------------------- | ------------------------ |
| 75.6% | 15.5 MiB |      21,054 | `assert_stable`     | `black/__init__.py:1543` |
| 24.4% | 5.01 MiB |           7 | `assert_equivalent` | `black/__init__.py:1510` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 19.8 MiB |      13,398 | `visit_default` | `black/linegen.py:134` |

##### `assert_stable` (`black/__init__.py:1543`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 15.5 MiB |      21,054 | `_format_str_once` | `black/__init__.py:1215` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 14.9 MiB |      10,805 | `visit_default` | `black/linegen.py:134` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.27 MiB |       1,291 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.27 MiB |       1,291 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.26 MiB |       1,289 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.26 MiB |       1,288 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.9% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.26 MiB |       1,286 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.23 MiB |       1,257 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.9% | 2.55 MiB |         618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                 |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 100.0% | 4.23 MiB |       1,257 | `<module>`       | `black/__init__.py:1`                                    |
|  31.1% | 1.32 MiB |         330 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                     |
|  31.1% | 1.31 MiB |         316 | `<module>`       | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.4% | 1.28 MiB |         258 | `<module>`       | `black/comments.py:1`                                    |
|  30.0% | 1.27 MiB |         244 | `<module>`       | `black/nodes.py:1`                                       |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
| 100.0% | 2.55 MiB |         618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.31 MiB |         319 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

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
| 97.0% | 1.01 MiB |           6 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |
|  0.9% |  9.5 KiB |           6 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |

##### `parse` (`/usr/lib/python3.11/re/_parser.py:970`)

|     % |     Size | Allocations | Callee       | Location                                |
| ----: | -------: | ----------: | ------------ | --------------------------------------- |
| 99.9% | 1.01 MiB |           5 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|     % |     Size | Allocations | Callee   | Location                                |
| ----: | -------: | ----------: | -------- | --------------------------------------- |
| 99.2% | 1.01 MiB |           4 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |  Size | Allocations | Callee       | Location                                |
| ----: | ----: | ----------: | ------------ | --------------------------------------- |
| 99.6% | 1 MiB |           2 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | -------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.0% | 3.01 MiB |           4 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5.0% |    3 MiB |           3 | `__new__` (`blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3.3% |    2 MiB |           2 | `__new__` (`blib2to3/pytree.py:70`) ← `convert` (475) ← `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.3% |    2 MiB |           2 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.8% | 1.06 MiB |          74 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% | 1.03 MiB |          23 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.7% |    1 MiB |           4 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |    1 MiB |           1 | `_parse` (`/usr/lib/python3.11/re/_parser.py:507`) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`blib2to3/pgen2/tokenize.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`blib2to3/pgen2/driver.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`blib2to3/pygram.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
| 1.7% |    1 MiB |           1 | `convert` (`blib2to3/pytree.py:475`) ← `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |    1 MiB |           1 | `_addtoken` (`blib2to3/pgen2/parse.py:278`) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.7% |    1 MiB |           1 | `__init__` (`blib2to3/pytree.py:237`) ← `convert` (475) ← `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |    1 MiB |           1 | `push` (`blib2to3/pgen2/parse.py:374`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |    1 MiB |           1 | `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.7% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`black/nodes.py:183`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.7% |    1 MiB |           1 | `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                               |
| 1.7% |    1 MiB |           1 | `prefix` (`blib2to3/pytree.py:469`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.7% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `prev_siblings_are` (`black/nodes.py:454`) ← `is_docstring` (553) ← `visit_STRING` (`black/linegen.py:413`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.7% |    1 MiB |           1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.7% |    1 MiB |           1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

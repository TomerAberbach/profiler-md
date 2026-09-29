# Peak memory profile

Held 78.6 MiB over 22,706 allocations (3.54 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 82.9% | 65.2 MiB |      21,446 |
| Standard library | 16.8% | 13.2 MiB |       1,028 |
| Third-party      |  0.3% |  238 KiB |         232 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                         | Location                                     |
| ----: | -------: | ----------: | -------------------------------- | -------------------------------------------- |
| 21.9% | 17.2 MiB |      20,789 | `mark`                           | `black/brackets.py:70`                       |
| 11.6% | 9.12 MiB |         142 | `parse`                          | `/usr/lib/python3.11/ast.py:33`              |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`              | `black/__init__.py:1510`                     |
|  8.9% |    7 MiB |           7 | `changed`                        | `blib2to3/pytree.py:160`                     |
|  8.9% |    7 MiB |           7 | `__new__`                        | `blib2to3/pytree.py:70`                      |
|  6.4% | 5.05 MiB |          61 | `_stringify_ast`                 | `black/parsing.py:182`                       |
|  4.0% | 3.14 MiB |         198 | `update_sibling_maps`            | `blib2to3/pytree.py:358`                     |
|  3.8% |    3 MiB |           4 | `visit_default`                  | `black/linegen.py:134`                       |
|  3.8% |    3 MiB |           3 | `generate_comments`              | `black/comments.py:52`                       |
|  3.8% |    3 MiB |           3 | `__init__`                       | `<string>:2`                                 |
|  3.2% | 2.55 MiB |         618 | `_compile_bytecode`              | `<frozen importlib._bootstrap_external>:727` |
|  2.5% |    2 MiB |           6 | `visit`                          | `black/nodes.py:152`                         |
|  2.5% |    2 MiB |           4 | `addtoken`                       | `blib2to3/pgen2/parse.py:230`                |
|  1.3% |    1 MiB |           4 | `transform_line`                 | `black/linegen.py:601`                       |
|  1.3% |    1 MiB |           1 | `_stringify_ast_with_new_parent` | `black/parsing.py:174`                       |
|  1.3% |    1 MiB |           1 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py:554`             |
|  1.3% |    1 MiB |           1 | `convert`                        | `blib2to3/pytree.py:475`                     |
|  1.3% |    1 MiB |           1 | `_uniq`                          | `/usr/lib/python3.11/re/_parser.py:444`      |
|  1.3% |    1 MiB |           1 | `push`                           | `blib2to3/pgen2/parse.py:374`                |
|  0.3% |  225 KiB |           5 | `_format_str_once`               | `black/__init__.py:1215`                     |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                         | Location                         |
| ----: | -------: | ----------: | -------------------------------- | -------------------------------- |
| 21.9% | 17.2 MiB |      20,789 | `mark`                           | `black/brackets.py:70`           |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`              | `black/__init__.py:1510`         |
|  8.9% |    7 MiB |           7 | `changed`                        | `blib2to3/pytree.py:160`         |
|  8.9% |    7 MiB |           7 | `__new__`                        | `blib2to3/pytree.py:70`          |
|  6.4% | 5.05 MiB |          61 | `_stringify_ast`                 | `black/parsing.py:182`           |
|  4.0% | 3.14 MiB |         198 | `update_sibling_maps`            | `blib2to3/pytree.py:358`         |
|  3.8% |    3 MiB |           4 | `visit_default`                  | `black/linegen.py:134`           |
|  3.8% |    3 MiB |           3 | `generate_comments`              | `black/comments.py:52`           |
|  3.8% |    3 MiB |           3 | `__init__`                       | `<string>:2`                     |
|  2.5% |    2 MiB |           6 | `visit`                          | `black/nodes.py:152`             |
|  2.5% |    2 MiB |           4 | `addtoken`                       | `blib2to3/pgen2/parse.py:230`    |
|  1.3% |    1 MiB |           4 | `transform_line`                 | `black/linegen.py:601`           |
|  1.3% |    1 MiB |           1 | `_stringify_ast_with_new_parent` | `black/parsing.py:174`           |
|  1.3% |    1 MiB |           1 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py:554` |
|  1.3% |    1 MiB |           1 | `convert`                        | `blib2to3/pytree.py:475`         |
|  1.3% |    1 MiB |           1 | `push`                           | `blib2to3/pgen2/parse.py:374`    |
|  0.3% |  225 KiB |           5 | `_format_str_once`               | `black/__init__.py:1215`         |
|  0.1% | 57.2 KiB |          65 | `normalize_string_prefix`        | `black/strings.py:143`           |
|  0.1% | 41.5 KiB |          16 | `copy`                           | `blib2to3/pgen2/grammar.py:131`  |
| <0.1% |   32 KiB |           1 | `classify`                       | `blib2to3/pgen2/parse.py:324`    |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  3.2% | 2.55 MiB |         618 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  1.3% |    1 MiB |           1 | `_uniq`                    | `/usr/lib/python3.11/re/_parser.py:444`           |
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

##### `changed` (`blib2to3/pytree.py:160`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 57.1% | 4 MiB |           4 | `blib2to3/pytree.py:164` |
| 42.9% | 3 MiB |           3 | `blib2to3/pytree.py:165` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 7 MiB |           7 | `blib2to3/pytree.py:73` |

##### `_stringify_ast` (`black/parsing.py:182`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 39.6% |    2 MiB |           2 | `black/parsing.py:205` |
| 39.6% |    2 MiB |           2 | `black/parsing.py:193` |
| 19.8% |    1 MiB |           1 | `black/parsing.py:252` |
|  0.9% | 46.8 KiB |          56 | `black/parsing.py:248` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 65.8% | 2.07 MiB |          95 | `blib2to3/pytree.py:366` |
| 34.0% | 1.07 MiB |          94 | `blib2to3/pytree.py:365` |
|  0.2% | 4.99 KiB |           9 | `blib2to3/pytree.py:368` |

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

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Location     |
| ----: | ----: | ----------: | ------------ |
| 66.7% | 2 MiB |           2 | `<string>:8` |
| 33.3% | 1 MiB |           1 | `<string>:7` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.55 MiB |         618 | `<frozen importlib._bootstrap_external>:729` |

##### `visit` (`black/nodes.py:152`)

|     % |     Size | Allocations | Location             |
| ----: | -------: | ----------: | -------------------- |
| 99.9% |    2 MiB |           3 | `black/nodes.py:174` |
|  0.1% | 2.68 KiB |           3 | `black/nodes.py:172` |

##### `addtoken` (`blib2to3/pgen2/parse.py:230`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 2 MiB |           3 | `blib2to3/pgen2/parse.py:240` |
|  <0.1% | 560 B |           1 | `blib2to3/pgen2/parse.py:233` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 99.7% |    1 MiB |           1 | `black/linegen.py:627` |
|  0.1% | 1.39 KiB |           1 | `black/linegen.py:635` |
|  0.1% |    910 B |           1 | `black/linegen.py:714` |
| <0.1% |    518 B |           1 | `black/linegen.py:631` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py:174`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/parsing.py:178` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`)

|      % |  Size | Allocations | Location                         |
| -----: | ----: | ----------: | -------------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:694` |

##### `convert` (`blib2to3/pytree.py:475`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:492` |

##### `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`)

|      % |  Size | Allocations | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/re/_parser.py:445` |

##### `push` (`blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:382` |

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

|     % |    Size | Allocations | Location           |
| ----: | ------: | ----------: | ------------------ |
| 99.3% | 113 KiB |          81 | `<frozen abc>:106` |
|  0.7% |   768 B |           1 | `<frozen abc>:107` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Location               |
| -----: | -------: | ----------: | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `black/strings.py:158` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|     % |     Size | Allocations | Location                        |
| ----: | -------: | ----------: | ------------------------------- |
| 88.2% | 36.6 KiB |          12 | `blib2to3/pgen2/grammar.py:145` |
|  7.6% | 3.16 KiB |           2 | `blib2to3/pgen2/grammar.py:146` |
|  4.2% | 1.75 KiB |           2 | `blib2to3/pgen2/grammar.py:147` |

##### `classify` (`blib2to3/pgen2/parse.py:324`)

|      % |   Size | Allocations | Location                      |
| -----: | -----: | ----------: | ----------------------------- |
| 100.0% | 32 KiB |           1 | `blib2to3/pgen2/parse.py:331` |

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
| 100.0% | 17.2 MiB |      20,789 | `append` | `black/lines.py:52` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 9.12 MiB |         142 | `_parse_single_version` | `black/parsing.py:125` |

##### `assert_equivalent` (`black/__init__.py:1510`)

|      % |    Size | Allocations | Caller                            | Location                 |
| -----: | ------: | ----------: | --------------------------------- | ------------------------ |
| 100.0% | 7.1 MiB |           4 | `check_stability_and_equivalence` | `black/__init__.py:1042` |

##### `changed` (`blib2to3/pytree.py:160`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 85.7% | 6 MiB |           6 | `changed` | `blib2to3/pytree.py:160` |
| 14.3% | 1 MiB |           1 | `prefix`  | `blib2to3/pytree.py:469` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 7 MiB |           7 | `convert` | `blib2to3/pytree.py:475` |

##### `_stringify_ast` (`black/parsing.py:182`)

|      % |     Size | Allocations | Caller                           | Location               |
| -----: | -------: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 5.05 MiB |          61 | `_stringify_ast_with_new_parent` | `black/parsing.py:174` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 3.14 MiB |         198 | `prev_sibling` | `blib2to3/pytree.py:196` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Caller         | Location               |
| -----: | ----: | ----------: | -------------- | ---------------------- |
| 100.0% | 3 MiB |           3 | `visit`        | `black/nodes.py:152`   |
|  <0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 3 MiB |           3 | `visit_default` | `black/linegen.py:134` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location     |
| -----: | ----: | ----------: | ---------- | ------------ |
| 100.0% | 3 MiB |           3 | `__init__` | `<string>:2` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.55 MiB |         618 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `visit` (`black/nodes.py:152`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 2 MiB |           5 | `visit_default`    | `black/nodes.py:176`     |
|  <0.1% | 690 B |           1 | `_format_str_once` | `black/__init__.py:1215` |

##### `addtoken` (`blib2to3/pgen2/parse.py:230`)

|      % |  Size | Allocations | Caller         | Location                       |
| -----: | ----: | ----------: | -------------- | ------------------------------ |
| 100.0% | 2 MiB |           4 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `transform_line` (`black/linegen.py:601`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 1 MiB |           4 | `_format_str_once` | `black/__init__.py:1215` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py:174`)

|      % |  Size | Allocations | Caller           | Location               |
| -----: | ----: | ----------: | ---------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `_stringify_ast` | `black/parsing.py:182` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `convert` (`blib2to3/pytree.py:475`)

|      % |  Size | Allocations | Caller  | Location                      |
| -----: | ----: | ----------: | ------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `shift` | `blib2to3/pgen2/parse.py:361` |

##### `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`)

|      % |  Size | Allocations | Caller   | Location                                |
| -----: | ----: | ----------: | -------- | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `push` (`blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:278` |

##### `_format_str_once` (`black/__init__.py:1215`)

|      % |    Size | Allocations | Caller       | Location                 |
| -----: | ------: | ----------: | ------------ | ------------------------ |
| 100.0% | 225 KiB |           5 | `format_str` | `black/__init__.py:1168` |

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

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Caller         | Location               |
| -----: | -------: | ----------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `visit_STRING` | `black/linegen.py:413` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|      % |     Size | Allocations | Caller       | Location                 |
| -----: | -------: | ----------: | ------------ | ------------------------ |
| 100.0% | 41.5 KiB |          16 | `initialize` | `blib2to3/pygram.py:165` |

##### `classify` (`blib2to3/pgen2/parse.py:324`)

|      % |   Size | Allocations | Caller     | Location                      |
| -----: | -----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 32 KiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:230` |

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

### Total size

Functions ranked by total bytes held at peak memory in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 78.6 MiB |      22,706 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 78.6 MiB |      22,705 | `run_module`           | `<frozen runpy>:201`                                           |
|  94.5% | 74.3 MiB |      21,394 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1629`        |
|  94.5% | 74.3 MiB |      21,394 | `patched_main`         | `black/__init__.py:1580`                                       |
|  94.5% | 74.3 MiB |      21,394 | `<module>`             | `black/__main__.py:1`                                          |
|  94.5% | 74.3 MiB |      21,394 | `_run_code`            | `<frozen runpy>:65`                                            |
|  94.5% | 74.3 MiB |      21,394 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  94.5% | 74.3 MiB |      21,393 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1484`        |
|  94.5% | 74.2 MiB |      21,373 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1401`        |
|  94.5% | 74.2 MiB |      21,370 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:857`         |
|  94.5% | 74.2 MiB |      21,368 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  94.5% | 74.2 MiB |      21,365 | `main`                 | `black/__init__.py:240`                                        |
|  94.5% | 74.2 MiB |      21,361 | `reformat_one`         | `black/__init__.py:865`                                        |
|  94.5% | 74.2 MiB |      21,358 | `format_file_in_place` | `black/__init__.py:922`                                        |
|  94.2% |   74 MiB |      21,355 | `format_file_contents` | `black/__init__.py:1059`                                       |
|  65.8% | 51.8 MiB |      21,146 | `format_str`           | `black/__init__.py:1168`                                       |
|  65.8% | 51.8 MiB |      21,145 | `_format_str_once`     | `black/__init__.py:1215`                                       |
|  48.9% | 38.4 MiB |      21,089 | `visit`                | `black/nodes.py:152`                                           |
|  48.9% | 38.4 MiB |      21,087 | `visit_default`        | `black/linegen.py:134`                                         |
|  48.9% | 38.4 MiB |      21,087 | `visit_default`        | `black/nodes.py:176`                                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 94.5% | 74.3 MiB |      21,394 | `patched_main`                    | `black/__init__.py:1580` |
| 94.5% | 74.3 MiB |      21,394 | `<module>`                        | `black/__main__.py:1`    |
| 94.5% | 74.2 MiB |      21,365 | `main`                            | `black/__init__.py:240`  |
| 94.5% | 74.2 MiB |      21,361 | `reformat_one`                    | `black/__init__.py:865`  |
| 94.5% | 74.2 MiB |      21,358 | `format_file_in_place`            | `black/__init__.py:922`  |
| 94.2% |   74 MiB |      21,355 | `format_file_contents`            | `black/__init__.py:1059` |
| 65.8% | 51.8 MiB |      21,146 | `format_str`                      | `black/__init__.py:1168` |
| 65.8% | 51.8 MiB |      21,145 | `_format_str_once`                | `black/__init__.py:1215` |
| 48.9% | 38.4 MiB |      21,089 | `visit`                           | `black/nodes.py:152`     |
| 48.9% | 38.4 MiB |      21,087 | `visit_default`                   | `black/linegen.py:134`   |
| 48.9% | 38.4 MiB |      21,087 | `visit_default`                   | `black/nodes.py:176`     |
| 48.6% | 38.2 MiB |      20,716 | `visit_stmt`                      | `black/linegen.py:199`   |
| 46.8% | 36.8 MiB |      20,274 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 46.7% | 36.7 MiB |      20,148 | `visit_suite`                     | `black/linegen.py:288`   |
| 28.3% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1042` |
| 28.3% | 22.3 MiB |         208 | `assert_equivalent`               | `black/__init__.py:1510` |
| 27.8% | 21.8 MiB |      13,400 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 25.8% | 20.3 MiB |      20,885 | `append`                          | `black/lines.py:52`      |
| 21.9% | 17.2 MiB |      20,789 | `mark`                            | `black/brackets.py:70`   |
| 20.2% | 15.9 MiB |      10,807 | `visit_power`                     | `black/linegen.py:341`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 78.6 MiB |      22,705 | `run_module`                | `<frozen runpy>:201`                          |
|  94.5% | 74.3 MiB |      21,394 | `_run_code`                 | `<frozen runpy>:65`                           |
|  94.5% | 74.3 MiB |      21,394 | `_run_module_code`          | `<frozen runpy>:91`                           |
|  11.6% | 9.12 MiB |         142 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   5.5% | 4.32 MiB |       1,310 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   5.5% | 4.32 MiB |       1,303 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   5.5% | 4.32 MiB |       1,301 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   5.5% | 4.32 MiB |       1,300 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   5.5% | 4.31 MiB |       1,298 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   5.4% | 4.28 MiB |       1,269 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   3.2% | 2.55 MiB |         618 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   3.2% | 2.55 MiB |         618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   1.7% | 1.31 MiB |         319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.3% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   1.3% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   1.3% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   1.3% | 1.01 MiB |           6 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`       |
|   1.3% | 1.01 MiB |           5 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`       |
|   1.3% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`       |
|   1.3% |    1 MiB |           1 | `_uniq`                     | `/usr/lib/python3.11/re/_parser.py:444`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 78.6 MiB |      22,705 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 94.5% | 74.3 MiB |      21,394 | `_run_module_code`    | `<frozen runpy>:91`  |
|  5.5% | 4.32 MiB |       1,310 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,393 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1580`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,394 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 74.3 MiB |      21,394 | `patched_main` | `black/__init__.py:1580` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 74.3 MiB |      21,394 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 74.3 MiB |      21,394 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 74.2 MiB |      21,373 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1401` |
|  <0.1% | 14.6 KiB |          18 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1328` |
|  <0.1% |     32 B |           1 | `__enter__`    | `/venv/lib/python3.11/site-packages/click/core.py:549`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 74.2 MiB |      21,370 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 74.2 MiB |      21,368 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 74.2 MiB |      21,365 | `main` | `black/__init__.py:240` |

##### `main` (`black/__init__.py:240`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 74.2 MiB |      21,361 | `reformat_one` | `black/__init__.py:865` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:729` |

##### `reformat_one` (`black/__init__.py:865`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 74.2 MiB |      21,358 | `format_file_in_place` | `black/__init__.py:922` |
|  <0.1% | 1.19 KiB |           1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:922`)

|     % |    Size | Allocations | Callee                 | Location                 |
| ----: | ------: | ----------: | ---------------------- | ------------------------ |
| 99.7% |  74 MiB |      21,355 | `format_file_contents` | `black/__init__.py:1059` |
|  0.3% | 223 KiB |           2 | `decode_bytes`         | `black/__init__.py:1269` |

##### `format_file_contents` (`black/__init__.py:1059`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 69.9% | 51.8 MiB |      21,146 | `format_str`                      | `black/__init__.py:1168` |
| 30.1% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1042` |

##### `format_str` (`black/__init__.py:1168`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 51.8 MiB |      21,145 | `_format_str_once` | `black/__init__.py:1215` |

##### `_format_str_once` (`black/__init__.py:1215`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 74.3% | 38.4 MiB |      21,089 | `visit`                  | `black/nodes.py:152`     |
| 23.3% |   12 MiB |          31 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  2.0% | 1.01 MiB |          13 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1443` |

##### `visit` (`black/nodes.py:152`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 38.4 MiB |      21,087 | `visit_default`     | `black/linegen.py:134` |
|  99.3% | 38.2 MiB |      20,716 | `visit_stmt`        | `black/linegen.py:199` |
|  95.8% | 36.8 MiB |      20,274 | `visit_funcdef`     | `black/linegen.py:254` |
|  95.6% | 36.7 MiB |      20,148 | `visit_suite`       | `black/linegen.py:288` |
|  56.8% | 21.8 MiB |      13,400 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 38.4 MiB |      21,087 | `visit_default`     | `black/nodes.py:176`   |
|  52.8% | 20.3 MiB |      20,885 | `append`            | `black/lines.py:52`    |
|  15.6% |    6 MiB |           6 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:176`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 38.4 MiB |      21,087 | `visit` | `black/nodes.py:152` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 38.2 MiB |      20,714 | `visit`                      | `black/nodes.py:152`    |
|  10.5% |    4 MiB |           5 | `normalize_invisible_parens` | `black/linegen.py:1344` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 36.8 MiB |      20,274 | `visit` | `black/nodes.py:152` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 36.7 MiB |      20,148 | `visit_default` | `black/linegen.py:134` |

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
| 100.0% | 21.8 MiB |      13,400 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:52`)

|     % |     Size | Allocations | Callee       | Location               |
| ----: | -------: | ----------: | ------------ | ---------------------- |
| 84.9% | 17.2 MiB |      20,789 | `mark`       | `black/brackets.py:70` |
| 15.1% | 3.05 MiB |          92 | `whitespace` | `black/nodes.py:183`   |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 15.9 MiB |      10,806 | `visit_default` | `black/linegen.py:134` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.32 MiB |       1,303 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.32 MiB |       1,303 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.32 MiB |       1,301 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.32 MiB |       1,300 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.8% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.31 MiB |       1,298 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.28 MiB |       1,269 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.2% | 2.55 MiB |         618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                 |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 100.0% | 4.28 MiB |       1,269 | `<module>`       | `black/__init__.py:1`                                    |
|  30.7% | 1.32 MiB |         330 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                     |
|  30.7% | 1.31 MiB |         316 | `<module>`       | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.4% |  1.3 MiB |         269 | `<module>`       | `black/comments.py:1`                                    |
|  30.0% | 1.29 MiB |         255 | `<module>`       | `black/nodes.py:1`                                       |

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
| 99.5% | 1 MiB |           1 | `_uniq`      | `/usr/lib/python3.11/re/_parser.py:444` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | -------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 11.6% | 9.12 MiB |         142 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  5.1% |    4 MiB |           4 | `__new__` (`blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.8% |    3 MiB |           3 | `__new__` (`blib2to3/pytree.py:70`) ← `convert` (475) ← `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.5% |    2 MiB |           4 | `addtoken` (`blib2to3/pgen2/parse.py:230`) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% |    2 MiB |           2 | `_stringify_ast` (`black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% |    2 MiB |           2 | `_stringify_ast` (`black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% |    2 MiB |           2 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`black/linegen.py:109`) ← `visit_INDENT` (179) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.4% | 1.09 MiB |         125 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% | 1.04 MiB |          42 | `_stringify_ast` (`black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.3% | 1.03 MiB |          34 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% | 1.03 MiB |          23 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.3% | 1.03 MiB |          37 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% |    1 MiB |           4 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% |    1 MiB |           1 | `_stringify_ast_with_new_parent` (`black/parsing.py:174`) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.3% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% |    1 MiB |           1 | `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:160`) ← `changed` (160) ← `changed` (160) ← `prefix` (469) ← `prefix` (318) ← `prefix` (318) ← `wrap_in_parentheses` (`black/nodes.py:930`) ← `normalize_invisible_parens` (`black/linegen.py:1344`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:160`) ← `changed` (160) ← `changed` (160) ← `prefix` (469) ← `wrap_in_parentheses` (`black/nodes.py:930`) ← `normalize_invisible_parens` (`black/linegen.py:1344`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.3% |    1 MiB |           1 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

# Leaked memory profile

Leaked 55.9 MiB over 22,502 allocations (2.55 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 87.4% | 48.9 MiB |      21,384 |
| Standard library | 12.2% | 6.83 MiB |         888 |
| Third-party      |  0.4% |  237 KiB |         230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Allocations | Function              | Location                                     |
| ----: | -------: | ----------: | --------------------- | -------------------------------------------- |
| 32.6% | 18.2 MiB |      20,790 | `mark`                | `black/brackets.py:70`                       |
| 12.5% |    7 MiB |           7 | `__new__`             | `blib2to3/pytree.py:70`                      |
|  8.9% |    5 MiB |           5 | `changed`             | `blib2to3/pytree.py:160`                     |
|  5.4% | 3.01 MiB |           4 | `parse`               | `/usr/lib/python3.11/ast.py:33`              |
|  4.6% | 2.55 MiB |         618 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>:727` |
|  3.8% | 2.14 MiB |         197 | `update_sibling_maps` | `blib2to3/pytree.py:358`                     |
|  3.6% |    2 MiB |           6 | `visit`               | `black/nodes.py:152`                         |
|  3.6% |    2 MiB |           4 | `addtoken`            | `blib2to3/pgen2/parse.py:230`                |
|  3.6% |    2 MiB |           3 | `visit_default`       | `black/linegen.py:134`                       |
|  3.6% |    2 MiB |           2 | `generate_comments`   | `black/comments.py:52`                       |
|  1.9% | 1.07 MiB |           7 | `transform_line`      | `black/linegen.py:601`                       |
|  1.8% |    1 MiB |           1 | `line`                | `black/linegen.py:109`                       |
|  1.8% |    1 MiB |           1 | `__str__`             | `black/lines.py:479`                         |
|  1.8% |    1 MiB |           1 | `_stringify_ast`      | `black/parsing.py:182`                       |
|  1.8% |    1 MiB |           1 | `generate_tokens`     | `blib2to3/pgen2/tokenize.py:554`             |
|  1.8% |    1 MiB |           1 | `convert`             | `blib2to3/pytree.py:475`                     |
|  1.8% |    1 MiB |           1 | `_uniq`               | `/usr/lib/python3.11/re/_parser.py:444`      |
|  1.8% |    1 MiB |           1 | `__init__`            | `<string>:2`                                 |
|  1.8% |    1 MiB |           1 | `push`                | `blib2to3/pgen2/parse.py:374`                |
|  0.1% | 77.4 KiB |          81 | `__new__`             | `<frozen abc>:105`                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                  | Location                         |
| ----: | -------: | ----------: | ------------------------- | -------------------------------- |
| 32.6% | 18.2 MiB |      20,790 | `mark`                    | `black/brackets.py:70`           |
| 12.5% |    7 MiB |           7 | `__new__`                 | `blib2to3/pytree.py:70`          |
|  8.9% |    5 MiB |           5 | `changed`                 | `blib2to3/pytree.py:160`         |
|  3.8% | 2.14 MiB |         197 | `update_sibling_maps`     | `blib2to3/pytree.py:358`         |
|  3.6% |    2 MiB |           6 | `visit`                   | `black/nodes.py:152`             |
|  3.6% |    2 MiB |           4 | `addtoken`                | `blib2to3/pgen2/parse.py:230`    |
|  3.6% |    2 MiB |           3 | `visit_default`           | `black/linegen.py:134`           |
|  3.6% |    2 MiB |           2 | `generate_comments`       | `black/comments.py:52`           |
|  1.9% | 1.07 MiB |           7 | `transform_line`          | `black/linegen.py:601`           |
|  1.8% |    1 MiB |           1 | `line`                    | `black/linegen.py:109`           |
|  1.8% |    1 MiB |           1 | `__str__`                 | `black/lines.py:479`             |
|  1.8% |    1 MiB |           1 | `_stringify_ast`          | `black/parsing.py:182`           |
|  1.8% |    1 MiB |           1 | `generate_tokens`         | `blib2to3/pgen2/tokenize.py:554` |
|  1.8% |    1 MiB |           1 | `convert`                 | `blib2to3/pytree.py:475`         |
|  1.8% |    1 MiB |           1 | `__init__`                | `<string>:2`                     |
|  1.8% |    1 MiB |           1 | `push`                    | `blib2to3/pgen2/parse.py:374`    |
|  0.1% | 57.2 KiB |          65 | `normalize_string_prefix` | `black/strings.py:143`           |
|  0.1% | 41.5 KiB |          16 | `copy`                    | `blib2to3/pgen2/grammar.py:131`  |
|  0.1% |   32 KiB |           1 | `classify`                | `blib2to3/pgen2/parse.py:324`    |
| <0.1% | 25.3 KiB |          40 | `make_first`              | `blib2to3/pgen2/pgen.py:63`      |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
|  5.4% | 3.01 MiB |           4 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  4.6% | 2.55 MiB |         618 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  1.8% |    1 MiB |           1 | `_uniq`                    | `/usr/lib/python3.11/re/_parser.py:444`           |
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
| 94.5% | 17.2 MiB |      20,788 | `black/brackets.py:112` |
|  5.5% |    1 MiB |           1 | `black/brackets.py:118` |
| <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 7 MiB |           7 | `blib2to3/pytree.py:73` |

##### `changed` (`blib2to3/pytree.py:160`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 60.0% | 3 MiB |           3 | `blib2to3/pytree.py:164` |
| 40.0% | 2 MiB |           2 | `blib2to3/pytree.py:165` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 3.01 MiB |           4 | `/usr/lib/python3.11/ast.py:50` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.55 MiB |         618 | `<frozen importlib._bootstrap_external>:729` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 49.9% | 1.07 MiB |          94 | `blib2to3/pytree.py:366` |
| 49.9% | 1.07 MiB |          94 | `blib2to3/pytree.py:365` |
|  0.2% | 4.99 KiB |           9 | `blib2to3/pytree.py:368` |

##### `visit` (`black/nodes.py:152`)

|     % |     Size | Allocations | Location             |
| ----: | -------: | ----------: | -------------------- |
| 99.9% |    2 MiB |           3 | `black/nodes.py:174` |
|  0.1% | 2.68 KiB |           3 | `black/nodes.py:172` |

##### `addtoken` (`blib2to3/pgen2/parse.py:230`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 2 MiB |           3 | `blib2to3/pgen2/parse.py:240` |
|  <0.1% | 560 B |           1 | `blib2to3/pgen2/parse.py:233` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 2 MiB |           2 | `black/linegen.py:158` |
|  <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 50.0% | 1 MiB |           1 | `black/comments.py:76` |
| 50.0% | 1 MiB |           1 | `black/comments.py:72` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 93.0% |    1 MiB |           1 | `black/linegen.py:627` |
|  6.7% | 73.7 KiB |           3 | `black/linegen.py:679` |
|  0.1% | 1.39 KiB |           1 | `black/linegen.py:635` |
|  0.1% |    910 B |           1 | `black/linegen.py:714` |
| <0.1% |    518 B |           1 | `black/linegen.py:631` |

##### `line` (`black/linegen.py:109`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/linegen.py:131` |

##### `__str__` (`black/lines.py:479`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:489` |

##### `_stringify_ast` (`black/parsing.py:182`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/parsing.py:205` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`)

|      % |  Size | Allocations | Location                         |
| -----: | ----: | ----------: | -------------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:694` |

##### `convert` (`blib2to3/pytree.py:475`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:492` |

##### `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`)

|      % |  Size | Allocations | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/re/_parser.py:445` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Location     |
| -----: | ----: | ----------: | ------------ |
| 100.0% | 1 MiB |           1 | `<string>:7` |

##### `push` (`blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:382` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Location           |
| ----: | -------: | ----------: | ------------------ |
| 99.0% | 76.7 KiB |          80 | `<frozen abc>:106` |
|  1.0% |    768 B |           1 | `<frozen abc>:107` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Location               |
| -----: | -------: | ----------: | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `black/strings.py:158` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|     % |     Size | Allocations | Location                        |
| ----: | -------: | ----------: | ------------------------------- |
| 88.2% | 36.6 KiB |          12 | `blib2to3/pgen2/grammar.py:145` |
|  7.6% | 3.16 KiB |           2 | `blib2to3/pgen2/grammar.py:146` |
|  4.2% | 1.75 KiB |           2 | `blib2to3/pgen2/grammar.py:147` |

##### `classify` (`blib2to3/pgen2/parse.py:324`)

|      % |   Size | Allocations | Location                      |
| -----: | -----: | ----------: | ----------------------------- |
| 100.0% | 32 KiB |           1 | `blib2to3/pgen2/parse.py:331` |

##### `make_first` (`blib2to3/pgen2/pgen.py:63`)

|      % |     Size | Allocations | Location                    |
| -----: | -------: | ----------: | --------------------------- |
| 100.0% | 25.3 KiB |          40 | `blib2to3/pgen2/pgen.py:70` |

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

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|      % |    Size | Allocations | Location                            |
| -----: | ------: | ----------: | ----------------------------------- |
| 100.0% | 2.5 KiB |           1 | `/usr/lib/python3.11/secrets.py:21` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Caller   | Location            |
| -----: | -------: | ----------: | -------- | ------------------- |
| 100.0% | 18.2 MiB |      20,790 | `append` | `black/lines.py:52` |

##### `__new__` (`blib2to3/pytree.py:70`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 7 MiB |           7 | `convert` | `blib2to3/pytree.py:475` |

##### `changed` (`blib2to3/pytree.py:160`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 80.0% | 4 MiB |           4 | `changed` | `blib2to3/pytree.py:160` |
| 20.0% | 1 MiB |           1 | `prefix`  | `blib2to3/pytree.py:469` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 3.01 MiB |           4 | `_parse_single_version` | `black/parsing.py:125` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.55 MiB |         618 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 2.14 MiB |         197 | `prev_sibling` | `blib2to3/pytree.py:196` |

##### `visit` (`black/nodes.py:152`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 2 MiB |           5 | `visit_default`    | `black/nodes.py:176`     |
|  <0.1% | 690 B |           1 | `_format_str_once` | `black/__init__.py:1215` |

##### `addtoken` (`blib2to3/pgen2/parse.py:230`)

|      % |  Size | Allocations | Caller         | Location                       |
| -----: | ----: | ----------: | -------------- | ------------------------------ |
| 100.0% | 2 MiB |           4 | `parse_tokens` | `blib2to3/pgen2/driver.py:114` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Caller         | Location               |
| -----: | ----: | ----------: | -------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit`        | `black/nodes.py:152`   |
|  <0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit_default` | `black/linegen.py:134` |

##### `transform_line` (`black/linegen.py:601`)

|      % |     Size | Allocations | Caller             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 1.07 MiB |           7 | `_format_str_once` | `black/__init__.py:1215` |

##### `line` (`black/linegen.py:109`)

|      % |  Size | Allocations | Caller              | Location               |
| -----: | ----: | ----------: | ------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `__str__` (`black/lines.py:479`)

|      % |  Size | Allocations | Caller           | Location              |
| -----: | ----: | ----------: | ---------------- | --------------------- |
| 100.0% | 1 MiB |           1 | `line_to_string` | `black/lines.py:1062` |

##### `_stringify_ast` (`black/parsing.py:182`)

|      % |  Size | Allocations | Caller                           | Location               |
| -----: | ----: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `_stringify_ast_with_new_parent` | `black/parsing.py:174` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `convert` (`blib2to3/pytree.py:475`)

|      % |  Size | Allocations | Caller  | Location                      |
| -----: | ----: | ----------: | ------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `shift` | `blib2to3/pgen2/parse.py:361` |

##### `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`)

|      % |  Size | Allocations | Caller   | Location                                |
| -----: | ----: | ----------: | -------- | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location     |
| -----: | ----: | ----------: | ---------- | ------------ |
| 100.0% | 1 MiB |           1 | `__init__` | `<string>:2` |

##### `push` (`blib2to3/pgen2/parse.py:374`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:278` |

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

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|      % |     Size | Allocations | Caller       | Location                 |
| -----: | -------: | ----------: | ------------ | ------------------------ |
| 100.0% | 41.5 KiB |          16 | `initialize` | `blib2to3/pygram.py:165` |

##### `classify` (`blib2to3/pgen2/parse.py:324`)

|      % |   Size | Allocations | Caller     | Location                      |
| -----: | -----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 32 KiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:230` |

##### `make_first` (`blib2to3/pgen2/pgen.py:63`)

|      % |     Size | Allocations | Caller         | Location                    |
| -----: | -------: | ----------: | -------------- | --------------------------- |
| 100.0% | 25.3 KiB |          40 | `make_grammar` | `blib2to3/pgen2/pgen.py:38` |

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

Functions ranked by total bytes never freed in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 55.9 MiB |      22,502 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 55.9 MiB |      22,501 | `run_module`           | `<frozen runpy>:201`                                           |
|  92.3% | 51.6 MiB |      21,191 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1629`        |
|  92.3% | 51.6 MiB |      21,191 | `patched_main`         | `black/__init__.py:1580`                                       |
|  92.3% | 51.6 MiB |      21,191 | `<module>`             | `black/__main__.py:1`                                          |
|  92.3% | 51.6 MiB |      21,191 | `_run_code`            | `<frozen runpy>:65`                                            |
|  92.3% | 51.6 MiB |      21,191 | `_run_module_code`     | `<frozen runpy>:91`                                            |
|  92.3% | 51.6 MiB |      21,190 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1484`        |
|  92.3% | 51.6 MiB |      21,170 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1401`        |
|  92.3% | 51.6 MiB |      21,168 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:857`         |
|  92.3% | 51.6 MiB |      21,167 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  92.3% | 51.6 MiB |      21,165 | `main`                 | `black/__init__.py:240`                                        |
|  92.3% | 51.6 MiB |      21,159 | `reformat_one`         | `black/__init__.py:865`                                        |
|  92.3% | 51.6 MiB |      21,152 | `format_file_in_place` | `black/__init__.py:922`                                        |
|  92.3% | 51.6 MiB |      21,151 | `format_file_contents` | `black/__init__.py:1059`                                       |
|  85.1% | 47.6 MiB |      21,143 | `_format_str_once`     | `black/__init__.py:1215`                                       |
|  58.0% | 32.4 MiB |      21,083 | `visit`                | `black/nodes.py:152`                                           |
|  58.0% | 32.4 MiB |      21,081 | `visit_default`        | `black/linegen.py:134`                                         |
|  58.0% | 32.4 MiB |      21,081 | `visit_default`        | `black/nodes.py:176`                                           |
|  55.7% | 31.2 MiB |      20,709 | `visit_stmt`           | `black/linegen.py:199`                                         |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 92.3% | 51.6 MiB |      21,191 | `patched_main`                    | `black/__init__.py:1580` |
| 92.3% | 51.6 MiB |      21,191 | `<module>`                        | `black/__main__.py:1`    |
| 92.3% | 51.6 MiB |      21,165 | `main`                            | `black/__init__.py:240`  |
| 92.3% | 51.6 MiB |      21,159 | `reformat_one`                    | `black/__init__.py:865`  |
| 92.3% | 51.6 MiB |      21,152 | `format_file_in_place`            | `black/__init__.py:922`  |
| 92.3% | 51.6 MiB |      21,151 | `format_file_contents`            | `black/__init__.py:1059` |
| 85.1% | 47.6 MiB |      21,143 | `_format_str_once`                | `black/__init__.py:1215` |
| 58.0% | 32.4 MiB |      21,083 | `visit`                           | `black/nodes.py:152`     |
| 58.0% | 32.4 MiB |      21,081 | `visit_default`                   | `black/linegen.py:134`   |
| 58.0% | 32.4 MiB |      21,081 | `visit_default`                   | `black/nodes.py:176`     |
| 55.7% | 31.2 MiB |      20,709 | `visit_stmt`                      | `black/linegen.py:199`   |
| 53.3% | 29.8 MiB |      20,267 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 53.2% | 29.7 MiB |      20,141 | `visit_suite`                     | `black/linegen.py:288`   |
| 52.0% | 29.1 MiB |          87 | `format_str`                      | `black/__init__.py:1168` |
| 40.3% | 22.5 MiB |      21,064 | `check_stability_and_equivalence` | `black/__init__.py:1042` |
| 36.3% | 20.3 MiB |      20,885 | `append`                          | `black/lines.py:52`      |
| 35.5% | 19.8 MiB |      13,398 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 33.1% | 18.5 MiB |      21,057 | `assert_stable`                   | `black/__init__.py:1543` |
| 32.6% | 18.2 MiB |      20,790 | `mark`                            | `black/brackets.py:70`   |
| 26.6% | 14.9 MiB |      10,806 | `visit_power`                     | `black/linegen.py:341`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 55.9 MiB |      22,501 | `run_module`                | `<frozen runpy>:201`                          |
|  92.3% | 51.6 MiB |      21,191 | `_run_code`                 | `<frozen runpy>:65`                           |
|  92.3% | 51.6 MiB |      21,191 | `_run_module_code`          | `<frozen runpy>:91`                           |
|   7.7% | 4.29 MiB |       1,309 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   7.7% | 4.28 MiB |       1,302 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   7.7% | 4.28 MiB |       1,300 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   7.7% | 4.28 MiB |       1,299 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   7.6% | 4.28 MiB |       1,297 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   7.6% | 4.25 MiB |       1,268 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   5.4% | 3.01 MiB |           4 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   4.6% | 2.55 MiB |         618 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   4.6% | 2.55 MiB |         618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   2.3% | 1.31 MiB |         319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.9% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   1.9% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   1.9% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   1.8% | 1.01 MiB |           6 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`       |
|   1.8% | 1.01 MiB |           5 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`       |
|   1.8% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`       |
|   1.8% |    1 MiB |           1 | `_uniq`                     | `/usr/lib/python3.11/re/_parser.py:444`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 55.9 MiB |      22,501 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 92.3% | 51.6 MiB |      21,191 | `_run_module_code`    | `<frozen runpy>:91`  |
|  7.7% | 4.29 MiB |       1,309 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 51.6 MiB |      21,190 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1580`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 51.6 MiB |      21,191 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 51.6 MiB |      21,191 | `patched_main` | `black/__init__.py:1580` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 51.6 MiB |      21,191 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 51.6 MiB |      21,191 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 51.6 MiB |      21,170 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1401` |
|  <0.1% | 14.1 KiB |          17 | `make_context` | `/venv/lib/python3.11/site-packages/click/core.py:1328` |
|  <0.1% |    529 B |           2 | `__exit__`     | `/venv/lib/python3.11/site-packages/click/core.py:554`  |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 51.6 MiB |      21,168 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 51.6 MiB |      21,167 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 51.6 MiB |      21,165 | `main` | `black/__init__.py:240` |

##### `main` (`black/__init__.py:240`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 51.6 MiB |      21,159 | `reformat_one` | `black/__init__.py:865` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:729` |
|  <0.1% |    550 B |           1 | `__str__`      | `black/report.py:80`    |

##### `reformat_one` (`black/__init__.py:865`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 51.6 MiB |      21,152 | `format_file_in_place` | `black/__init__.py:922` |
|  <0.1% | 1.57 KiB |           2 | `done`                 | `black/report.py:36`    |
|  <0.1% | 1.19 KiB |           1 | `read`                 | `black/cache.py:60`     |
|  <0.1% |     72 B |           2 | `write`                | `black/cache.py:132`    |

##### `format_file_in_place` (`black/__init__.py:922`)

|      % |     Size | Allocations | Callee                 | Location                 |
| -----: | -------: | ----------: | ---------------------- | ------------------------ |
| 100.0% | 51.6 MiB |      21,151 | `format_file_contents` | `black/__init__.py:1059` |
|  <0.1% |    552 B |           1 | `decode_bytes`         | `black/__init__.py:1269` |

##### `format_file_contents` (`black/__init__.py:1059`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 56.3% | 29.1 MiB |          87 | `format_str`                      | `black/__init__.py:1168` |
| 43.7% | 22.5 MiB |      21,064 | `check_stability_and_equivalence` | `black/__init__.py:1042` |

##### `_format_str_once` (`black/__init__.py:1215`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 68.2% | 32.4 MiB |      21,083 | `visit`                  | `black/nodes.py:152`     |
| 25.3% |   12 MiB |          31 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  6.5% | 3.08 MiB |          18 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1443` |

##### `visit` (`black/nodes.py:152`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 32.4 MiB |      21,081 | `visit_default`     | `black/linegen.py:134` |
|  96.0% | 31.2 MiB |      20,709 | `visit_stmt`        | `black/linegen.py:199` |
|  91.9% | 29.8 MiB |      20,267 | `visit_funcdef`     | `black/linegen.py:254` |
|  91.7% | 29.7 MiB |      20,141 | `visit_suite`       | `black/linegen.py:288` |
|  61.1% | 19.8 MiB |      13,398 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 32.4 MiB |      21,081 | `visit_default`     | `black/nodes.py:176`   |
|  59.4% | 19.3 MiB |      20,884 | `append`            | `black/lines.py:52`    |
|  15.4% |    5 MiB |           5 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:176`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 32.4 MiB |      21,081 | `visit` | `black/nodes.py:152` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 31.2 MiB |      20,707 | `visit`                      | `black/nodes.py:152`    |
|   6.4% |    2 MiB |           3 | `normalize_invisible_parens` | `black/linegen.py:1344` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 29.8 MiB |      20,267 | `visit` | `black/nodes.py:152` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 29.7 MiB |      20,141 | `visit_default` | `black/linegen.py:134` |

##### `format_str` (`black/__init__.py:1168`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 29.1 MiB |          86 | `_format_str_once` | `black/__init__.py:1215` |

##### `check_stability_and_equivalence` (`black/__init__.py:1042`)

|     % |     Size | Allocations | Callee              | Location                 |
| ----: | -------: | ----------: | ------------------- | ------------------------ |
| 82.2% | 18.5 MiB |      21,057 | `assert_stable`     | `black/__init__.py:1543` |
| 17.8% | 4.01 MiB |           6 | `assert_equivalent` | `black/__init__.py:1510` |

##### `append` (`black/lines.py:52`)

|     % |     Size | Allocations | Callee       | Location               |
| ----: | -------: | ----------: | ------------ | ---------------------- |
| 89.8% | 18.2 MiB |      20,790 | `mark`       | `black/brackets.py:70` |
| 10.1% | 2.05 MiB |          91 | `whitespace` | `black/nodes.py:183`   |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 95.0% | 18.8 MiB |      13,397 | `visit_default` | `black/linegen.py:134` |
|  5.0% |    1 MiB |           1 | `line`          | `black/linegen.py:109` |

##### `assert_stable` (`black/__init__.py:1543`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 18.5 MiB |      21,057 | `_format_str_once` | `black/__init__.py:1215` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 14.9 MiB |      10,805 | `visit_default` | `black/linegen.py:134` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.28 MiB |       1,302 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.28 MiB |       1,302 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.28 MiB |       1,300 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.28 MiB |       1,299 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.8% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.28 MiB |       1,297 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.25 MiB |       1,268 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.7% | 2.55 MiB |         618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                 |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 100.0% | 4.25 MiB |       1,268 | `<module>`       | `black/__init__.py:1`                                    |
|  31.0% | 1.32 MiB |         330 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                     |
|  30.9% | 1.31 MiB |         316 | `<module>`       | `/venv/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.6% |  1.3 MiB |         269 | `<module>`       | `black/comments.py:1`                                    |
|  30.3% | 1.29 MiB |         255 | `<module>`       | `black/nodes.py:1`                                       |

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
| 99.5% | 1 MiB |           1 | `_uniq`      | `/usr/lib/python3.11/re/_parser.py:444` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | -------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.2% |    4 MiB |           4 | `__new__` (`blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5.4% | 3.01 MiB |           4 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5.4% |    3 MiB |           3 | `__new__` (`blib2to3/pytree.py:70`) ← `convert` (475) ← `pop` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.6% |    2 MiB |           4 | `addtoken` (`blib2to3/pgen2/parse.py:230`) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.8% | 1.03 MiB |          34 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.8% | 1.03 MiB |          23 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.8% |    1 MiB |           4 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.8% |    1 MiB |           1 | `line` (`black/linegen.py:109`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% |    1 MiB |           1 | `__str__` (`black/lines.py:479`) ← `line_to_string` (1062) ← `_hugging_power_ops_line_to_string` (`black/linegen.py:590`) ← `transform_line` (601) ← `run_transformer` (1771) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.8% |    1 MiB |           1 | `_stringify_ast` (`black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.8% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.8% |    1 MiB |           1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:52`) ← `bracket_split_build_line` (`black/linegen.py:1123`) ← `_first_right_hand_split` (829) ← `_maybe_split_omitting_optional_parens` (932) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1771) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |    1 MiB |           1 | `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                       |
| 1.8% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:160`) ← `changed` (160) ← `changed` (160) ← `prefix` (469) ← `wrap_in_parentheses` (`black/nodes.py:930`) ← `normalize_invisible_parens` (`black/linegen.py:1344`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |    1 MiB |           1 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.8% |    1 MiB |           1 | `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.8% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`black/nodes.py:183`) ← `append` (`black/lines.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |    1 MiB |           1 | `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`blib2to3/pgen2/tokenize.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`blib2to3/pgen2/driver.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`blib2to3/pygram.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
| 1.8% |    1 MiB |           1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`black/linegen.py:109`) ← `visit_INDENT` (179) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:152`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:152`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.8% |    1 MiB |           1 | `push` (`blib2to3/pgen2/parse.py:374`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1580`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

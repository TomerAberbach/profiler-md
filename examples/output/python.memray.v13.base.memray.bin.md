# Peak memory profile

Held 78.6 MiB over 22,680 allocations (3.55 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 82.9% | 65.2 MiB |      21,440 |
| Standard library | 16.7% | 13.1 MiB |       1,007 |
| Third-party      |  0.3% |  274 KiB |         233 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                    | Location                                     |
| ----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
| 23.2% | 18.2 MiB |      20,790 | `mark`                      | `black/brackets.py:70`                       |
| 11.6% | 9.12 MiB |         142 | `parse`                     | `/usr/lib/python3.11/ast.py:33`              |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`         | `black/__init__.py:1524`                     |
|  8.9% |    7 MiB |           7 | `changed`                   | `blib2to3/pytree.py:171`                     |
|  7.7% | 6.05 MiB |          62 | `_stringify_ast`            | `black/parsing.py:174`                       |
|  3.8% |    3 MiB |           4 | `visit_default`             | `black/linegen.py:134`                       |
|  3.8% |    3 MiB |           3 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`             |
|  3.8% |    3 MiB |           3 | `__new__`                   | `blib2to3/pytree.py:81`                      |
|  3.8% |    3 MiB |           3 | `is_split_before_delimiter` | `black/brackets.py:232`                      |
|  3.2% | 2.54 MiB |         604 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727` |
|  2.5% |    2 MiB |           2 | `pop`                       | `blib2to3/pgen2/parse.py:398`                |
|  2.5% |    2 MiB |           2 | `__init__`                  | `<string>:2`                                 |
|  2.5% |    2 MiB |           2 | `generate_comments`         | `black/comments.py:52`                       |
|  1.3% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`                     |
|  1.3% |    1 MiB |           2 | `_rhs`                      | `black/linegen.py:650`                       |
|  1.3% |    1 MiB |           2 | `_first_right_hand_split`   | `black/linegen.py:829`                       |
|  1.3% |    1 MiB |           1 | `__init__`                  | `/usr/lib/python3.11/re/_parser.py:109`      |
|  1.3% |    1 MiB |           1 | `_addtoken`                 | `blib2to3/pgen2/parse.py:290`                |
|  1.3% |    1 MiB |           1 | `__init__`                  | `blib2to3/pytree.py:400`                     |
|  1.3% |    1 MiB |           1 | `push`                      | `blib2to3/pgen2/parse.py:386`                |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                    | Location                         |
| ----: | -------: | ----------: | --------------------------- | -------------------------------- |
| 23.2% | 18.2 MiB |      20,790 | `mark`                      | `black/brackets.py:70`           |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`         | `black/__init__.py:1524`         |
|  8.9% |    7 MiB |           7 | `changed`                   | `blib2to3/pytree.py:171`         |
|  7.7% | 6.05 MiB |          62 | `_stringify_ast`            | `black/parsing.py:174`           |
|  3.8% |    3 MiB |           4 | `visit_default`             | `black/linegen.py:134`           |
|  3.8% |    3 MiB |           3 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565` |
|  3.8% |    3 MiB |           3 | `__new__`                   | `blib2to3/pytree.py:81`          |
|  3.8% |    3 MiB |           3 | `is_split_before_delimiter` | `black/brackets.py:232`          |
|  2.5% |    2 MiB |           2 | `pop`                       | `blib2to3/pgen2/parse.py:398`    |
|  2.5% |    2 MiB |           2 | `__init__`                  | `<string>:2`                     |
|  2.5% |    2 MiB |           2 | `generate_comments`         | `black/comments.py:52`           |
|  1.3% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`         |
|  1.3% |    1 MiB |           2 | `_rhs`                      | `black/linegen.py:650`           |
|  1.3% |    1 MiB |           2 | `_first_right_hand_split`   | `black/linegen.py:829`           |
|  1.3% |    1 MiB |           1 | `_addtoken`                 | `blib2to3/pgen2/parse.py:290`    |
|  1.3% |    1 MiB |           1 | `__init__`                  | `blib2to3/pytree.py:400`         |
|  1.3% |    1 MiB |           1 | `push`                      | `blib2to3/pgen2/parse.py:386`    |
|  1.3% |    1 MiB |           1 | `__str__`                   | `black/lines.py:490`             |
|  1.3% |    1 MiB |           1 | `pre_order`                 | `blib2to3/pytree.py:314`         |
|  0.3% |  225 KiB |           5 | `_format_str_once`          | `black/__init__.py:1236`         |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  3.2% | 2.54 MiB |         604 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  1.3% |    1 MiB |           1 | `__init__`                 | `/usr/lib/python3.11/re/_parser.py:109`           |
|  0.3% |  222 KiB |           1 | `decode`                   | `<frozen codecs>:319`                             |
|  0.1% | 77.4 KiB |          81 | `__new__`                  | `<frozen abc>:105`                                |
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
| 94.5% | 17.2 MiB |      20,788 | `black/brackets.py:112` |
|  5.5% |    1 MiB |           1 | `black/brackets.py:125` |
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

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 71.4% | 5 MiB |           5 | `blib2to3/pytree.py:175` |
| 28.6% | 2 MiB |           2 | `blib2to3/pytree.py:176` |

##### `_stringify_ast` (`black/parsing.py:174`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 50.4% | 3.05 MiB |          59 | `black/parsing.py:240` |
| 33.1% |    2 MiB |           2 | `black/parsing.py:217` |
| 16.5% |    1 MiB |           1 | `black/parsing.py:197` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 66.7% | 2 MiB |           2 | `black/linegen.py:138` |
| 33.3% | 1 MiB |           1 | `black/linegen.py:158` |
| <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|     % |  Size | Allocations | Location                         |
| ----: | ----: | ----------: | -------------------------------- |
| 66.7% | 2 MiB |           2 | `blib2to3/pgen2/tokenize.py:614` |
| 33.3% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:879` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 3 MiB |           3 | `blib2to3/pytree.py:84` |

##### `is_split_before_delimiter` (`black/brackets.py:232`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 3 MiB |           3 | `black/brackets.py:240` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.54 MiB |         604 | `<frozen importlib._bootstrap_external>:729` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 2 MiB |           2 | `blib2to3/pgen2/parse.py:408` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Location     |
| ----: | ----: | ----------: | ------------ |
| 50.0% | 1 MiB |           1 | `<string>:9` |
| 50.0% | 1 MiB |           1 | `<string>:7` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 50.0% | 1 MiB |           1 | `black/comments.py:75` |
| 50.0% | 1 MiB |           1 | `black/comments.py:72` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `_rhs` (`black/linegen.py:650`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           2 | `black/linegen.py:659` |

##### `_first_right_hand_split` (`black/linegen.py:829`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 99.9% |    1 MiB |           1 | `black/linegen.py:859` |
|  0.1% | 1.03 KiB |           1 | `black/linegen.py:918` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py:109`)

|      % |  Size | Allocations | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/re/_parser.py:112` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:314` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:425` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:394` |

##### `__str__` (`black/lines.py:490`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:504` |

##### `pre_order` (`blib2to3/pytree.py:314`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:316` |

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

|     % |     Size | Allocations | Location           |
| ----: | -------: | ----------: | ------------------ |
| 99.0% | 76.7 KiB |          80 | `<frozen abc>:106` |
|  1.0% |    768 B |           1 | `<frozen abc>:107` |

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
| 100.0% | 18.2 MiB |      20,790 | `append` | `black/lines.py:63` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 9.12 MiB |         142 | `_parse_single_version` | `black/parsing.py:117` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|      % |    Size | Allocations | Caller                            | Location                 |
| -----: | ------: | ----------: | --------------------------------- | ------------------------ |
| 100.0% | 7.1 MiB |           4 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 57.1% | 4 MiB |           4 | `changed` | `blib2to3/pytree.py:171` |
| 42.9% | 3 MiB |           3 | `prefix`  | `blib2to3/pytree.py:480` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |     Size | Allocations | Caller                           | Location               |
| -----: | -------: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 6.05 MiB |          62 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Caller         | Location               |
| ----: | ----: | ----------: | -------------- | ---------------------- |
| 66.7% | 2 MiB |           2 | `visit`        | `black/nodes.py:163`   |
| 33.3% | 1 MiB |           1 | `visit_power`  | `black/linegen.py:341` |
| <0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 3 MiB |           3 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 3 MiB |           3 | `convert` | `blib2to3/pytree.py:486` |

##### `is_split_before_delimiter` (`black/brackets.py:232`)

|      % |  Size | Allocations | Caller | Location               |
| -----: | ----: | ----------: | ------ | ---------------------- |
| 100.0% | 3 MiB |           3 | `mark` | `black/brackets.py:70` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.54 MiB |         604 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 2 MiB |           2 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location     |
| -----: | ----: | ----------: | ---------- | ------------ |
| 100.0% | 2 MiB |           2 | `__init__` | `<string>:2` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit_default` | `black/linegen.py:134` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `_rhs` (`black/linegen.py:650`)

|      % |  Size | Allocations | Caller            | Location                |
| -----: | ----: | ----------: | ----------------- | ----------------------- |
| 100.0% | 1 MiB |           2 | `run_transformer` | `black/linegen.py:1755` |

##### `_first_right_hand_split` (`black/linegen.py:829`)

|      % |  Size | Allocations | Caller             | Location               |
| -----: | ----: | ----------: | ------------------ | ---------------------- |
| 100.0% | 1 MiB |           2 | `right_hand_split` | `black/linegen.py:809` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py:109`)

|      % |  Size | Allocations | Caller   | Location                                |
| -----: | ----: | ----------: | -------- | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `convert` | `blib2to3/pytree.py:486` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `__str__` (`black/lines.py:490`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 1 MiB |           1 | `_format_str_once` | `black/__init__.py:1236` |

##### `pre_order` (`blib2to3/pytree.py:314`)

|      % |  Size | Allocations | Caller                 | Location             |
| -----: | ----: | ----------: | ---------------------- | -------------------- |
| 100.0% | 1 MiB |           1 | `is_complex_subscript` | `black/lines.py:441` |

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
| 50.7% | 39.2 KiB |          46 | `<module>` | `/venv13/lib/python3.11/site-packages/click/types.py:1`          |
| 22.6% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                               |
| 18.9% | 14.6 KiB |          10 | `<module>` | `/venv13/lib/python3.11/site-packages/click/core.py:1`           |
|  7.8% | 6.07 KiB |           7 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/specifiers.py:1` |

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
| 100.0% | 78.6 MiB |      22,680 | `_run_tracker`         | `/venv13/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 78.6 MiB |      22,679 | `run_module`           | `<frozen runpy>:201`                                             |
|  94.5% | 74.3 MiB |      21,396 | `__call__`             | `/venv13/lib/python3.11/site-packages/click/core.py:1629`        |
|  94.5% | 74.3 MiB |      21,396 | `patched_main`         | `black/__init__.py:1594`                                         |
|  94.5% | 74.3 MiB |      21,396 | `<module>`             | `black/__main__.py:1`                                            |
|  94.5% | 74.3 MiB |      21,396 | `_run_code`            | `<frozen runpy>:65`                                              |
|  94.5% | 74.3 MiB |      21,396 | `_run_module_code`     | `<frozen runpy>:91`                                              |
|  94.5% | 74.3 MiB |      21,395 | `main`                 | `/venv13/lib/python3.11/site-packages/click/core.py:1484`        |
|  94.5% | 74.3 MiB |      21,374 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:1401`        |
|  94.5% | 74.3 MiB |      21,371 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:857`         |
|  94.5% | 74.3 MiB |      21,369 | `new_func`             | `/venv13/lib/python3.11/site-packages/click/decorators.py:33`    |
|  94.5% | 74.2 MiB |      21,366 | `main`                 | `black/__init__.py:244`                                          |
|  94.5% | 74.2 MiB |      21,362 | `reformat_one`         | `black/__init__.py:860`                                          |
|  94.5% | 74.2 MiB |      21,359 | `format_file_in_place` | `black/__init__.py:917`                                          |
|  94.2% |   74 MiB |      21,356 | `format_file_contents` | `black/__init__.py:1054`                                         |
|  65.9% | 51.8 MiB |      21,147 | `format_str`           | `black/__init__.py:1189`                                         |
|  65.9% | 51.8 MiB |      21,146 | `_format_str_once`     | `black/__init__.py:1236`                                         |
|  46.4% | 36.4 MiB |      21,087 | `visit`                | `black/nodes.py:163`                                             |
|  46.4% | 36.4 MiB |      21,085 | `visit_default`        | `black/nodes.py:187`                                             |
|  46.4% | 36.4 MiB |      21,085 | `visit_default`        | `black/linegen.py:134`                                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 94.5% | 74.3 MiB |      21,396 | `patched_main`                    | `black/__init__.py:1594` |
| 94.5% | 74.3 MiB |      21,396 | `<module>`                        | `black/__main__.py:1`    |
| 94.5% | 74.2 MiB |      21,366 | `main`                            | `black/__init__.py:244`  |
| 94.5% | 74.2 MiB |      21,362 | `reformat_one`                    | `black/__init__.py:860`  |
| 94.5% | 74.2 MiB |      21,359 | `format_file_in_place`            | `black/__init__.py:917`  |
| 94.2% |   74 MiB |      21,356 | `format_file_contents`            | `black/__init__.py:1054` |
| 65.9% | 51.8 MiB |      21,147 | `format_str`                      | `black/__init__.py:1189` |
| 65.9% | 51.8 MiB |      21,146 | `_format_str_once`                | `black/__init__.py:1236` |
| 46.4% | 36.4 MiB |      21,087 | `visit`                           | `black/nodes.py:163`     |
| 46.4% | 36.4 MiB |      21,085 | `visit_default`                   | `black/nodes.py:187`     |
| 46.4% | 36.4 MiB |      21,085 | `visit_default`                   | `black/linegen.py:134`   |
| 46.0% | 36.2 MiB |      20,714 | `visit_stmt`                      | `black/linegen.py:199`   |
| 45.6% | 35.8 MiB |      20,273 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 45.5% | 35.7 MiB |      20,147 | `visit_suite`                     | `black/linegen.py:288`   |
| 36.7% | 28.8 MiB |      13,407 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 28.4% | 22.3 MiB |      20,887 | `append`                          | `black/lines.py:63`      |
| 28.3% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 28.3% | 22.3 MiB |         208 | `assert_equivalent`               | `black/__init__.py:1524` |
| 27.0% | 21.2 MiB |      20,793 | `mark`                            | `black/brackets.py:70`   |
| 25.3% | 19.9 MiB |      10,811 | `visit_power`                     | `black/linegen.py:341`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 78.6 MiB |      22,679 | `run_module`                | `<frozen runpy>:201`                          |
|  94.5% | 74.3 MiB |      21,396 | `_run_code`                 | `<frozen runpy>:65`                           |
|  94.5% | 74.3 MiB |      21,396 | `_run_module_code`          | `<frozen runpy>:91`                           |
|  11.6% | 9.12 MiB |         142 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   5.5% | 4.29 MiB |       1,282 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   5.5% | 4.29 MiB |       1,275 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   5.5% | 4.28 MiB |       1,273 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   5.5% | 4.28 MiB |       1,272 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   5.4% | 4.28 MiB |       1,270 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   5.4% | 4.25 MiB |       1,240 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   3.2% | 2.54 MiB |         604 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   3.2% | 2.54 MiB |         604 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   1.7% | 1.34 MiB |         319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.3% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   1.3% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   1.3% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   1.3% | 1.01 MiB |           6 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`       |
|   1.3% | 1.01 MiB |           5 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`       |
|   1.3% | 1.01 MiB |           9 | `<module>`                  | `/usr/lib/python3.11/secrets.py:1`            |
|   1.3% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 78.6 MiB |      22,679 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 94.5% | 74.3 MiB |      21,396 | `_run_module_code`    | `<frozen runpy>:91`  |
|  5.5% | 4.29 MiB |       1,282 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv13/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                  |
| -----: | -------: | ----------: | ------ | --------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,395 | `main` | `/venv13/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                  |
| -----: | -------: | ----------: | ---------- | --------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,396 | `__call__` | `/venv13/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 74.3 MiB |      21,396 | `patched_main` | `black/__init__.py:1594` |

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
| 70.4% | 36.4 MiB |      21,087 | `visit`             | `black/nodes.py:163`    |
| 23.3% | 12.1 MiB |          32 | `lib2to3_parse`     | `black/parsing.py:55`   |
|  3.9% | 2.01 MiB |          14 | `transform_line`    | `black/linegen.py:601`  |
|  1.9% |    1 MiB |           1 | `__str__`           | `black/lines.py:490`    |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off` | `black/comments.py:168` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 36.2 MiB |      20,714 | `visit_stmt`        | `black/linegen.py:199` |
|  98.3% | 35.8 MiB |      20,273 | `visit_funcdef`     | `black/linegen.py:254` |
|  98.1% | 35.7 MiB |      20,147 | `visit_suite`       | `black/linegen.py:288` |
|  79.1% | 28.8 MiB |      13,407 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/nodes.py:187`   |
|  61.2% | 22.3 MiB |      20,887 | `append`            | `black/lines.py:63`    |
|  24.7% |    9 MiB |           9 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 36.2 MiB |      20,712 | `visit`                      | `black/nodes.py:163`    |
|   2.8% |    1 MiB |           1 | `line`                       | `black/linegen.py:109`  |
|  <0.1% | 1.15 KiB |           1 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 35.8 MiB |      20,273 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 35.7 MiB |      20,147 | `visit_default` | `black/linegen.py:134` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 96.5% | 27.8 MiB |      13,406 | `visit_default` | `black/linegen.py:134` |
|  3.5% |    1 MiB |           1 | `line`          | `black/linegen.py:109` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee                 | Location               |
| ----: | -------: | ----------: | ---------------------- | ---------------------- |
| 95.2% | 21.2 MiB |      20,793 | `mark`                 | `black/brackets.py:70` |
|  4.5% |    1 MiB |           1 | `is_complex_subscript` | `black/lines.py:441`   |
|  0.2% | 55.7 KiB |          89 | `whitespace`           | `black/nodes.py:194`   |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 22.3 MiB |         208 | `assert_equivalent` | `black/__init__.py:1524` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Allocations | Callee           | Location               |
| ----: | -------: | ----------: | ---------------- | ---------------------- |
| 41.0% | 9.12 MiB |         142 | `parse_ast`      | `black/parsing.py:129` |
| 27.2% | 6.05 MiB |          62 | `_stringify_ast` | `black/parsing.py:174` |

##### `mark` (`black/brackets.py:70`)

|     % |  Size | Allocations | Callee                      | Location                |
| ----: | ----: | ----------: | --------------------------- | ----------------------- |
| 14.1% | 3 MiB |           3 | `is_split_before_delimiter` | `black/brackets.py:232` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 19.9 MiB |      10,810 | `visit_default` | `black/linegen.py:134` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.29 MiB |       1,275 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.29 MiB |       1,275 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.28 MiB |       1,273 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.28 MiB |       1,272 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.8% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.28 MiB |       1,270 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.25 MiB |       1,240 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.3% | 2.54 MiB |         604 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                   |
| -----: | -------: | ----------: | ---------------- | ---------------------------------------------------------- |
| 100.0% | 4.25 MiB |       1,240 | `<module>`       | `black/__init__.py:1`                                      |
|  31.7% | 1.35 MiB |         330 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                       |
|  30.9% | 1.31 MiB |         316 | `<module>`       | `/venv13/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.2% | 1.28 MiB |         258 | `<module>`       | `black/comments.py:1`                                      |
|  29.9% | 1.27 MiB |         244 | `<module>`       | `black/nodes.py:1`                                         |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
| 100.0% | 2.54 MiB |         604 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

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

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 99.8% | 1.01 MiB |           8 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |  Size | Allocations | Callee       | Location                                |
| ----: | ----: | ----------: | ------------ | --------------------------------------- |
| 99.6% | 1 MiB |           2 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |
| 99.5% | 1 MiB |           1 | `__init__`   | `/usr/lib/python3.11/re/_parser.py:109` |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | -------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.8% |    3 MiB |           3 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.8% |    3 MiB |           3 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% |    2 MiB |           2 | `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.5% |    2 MiB |           2 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% |    2 MiB |           2 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                 |
|  2.5% |    2 MiB |           2 | `is_split_before_delimiter` (`black/brackets.py:232`) ← `mark` (70) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |    2 MiB |           2 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.0% | 1.56 MiB |         767 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.4% | 1.09 MiB |         125 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                         |
|  1.3% | 1.04 MiB |          49 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.3% | 1.01 MiB |          15 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/exceptions.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/types.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
|  1.3% |    1 MiB |           7 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/usr/lib/python3.11/secrets.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/handle_ipynb_magics.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |    1 MiB |           5 | `__init__` (`blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |    1 MiB |           2 | `_rhs` (`black/linegen.py:650`) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.3% |    1 MiB |           2 | `_first_right_hand_split` (`black/linegen.py:829`) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.3% |    1 MiB |           1 | `__init__` (`/usr/lib/python3.11/re/_parser.py:109`) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`black/strings.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.3% |    1 MiB |           1 | `__init__` (`blib2to3/pytree.py:400`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.3% |    1 MiB |           1 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

# Leaked memory profile

Leaked 59.9 MiB over 22,485 allocations (2.73 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 88.2% | 52.9 MiB |      21,383 |
| Standard library | 11.4% | 6.82 MiB |         872 |
| Third-party      |  0.4% |  237 KiB |         230 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                    | Location                                     |
| ----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
| 30.4% | 18.2 MiB |      20,790 | `mark`                      | `black/brackets.py:70`                       |
| 11.7% |    7 MiB |           7 | `changed`                   | `blib2to3/pytree.py:171`                     |
|  5.0% | 3.01 MiB |           4 | `parse`                     | `/usr/lib/python3.11/ast.py:33`              |
|  5.0% |    3 MiB |           4 | `visit_default`             | `black/linegen.py:134`                       |
|  5.0% |    3 MiB |           3 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`             |
|  5.0% |    3 MiB |           3 | `__new__`                   | `blib2to3/pytree.py:81`                      |
|  5.0% |    3 MiB |           3 | `is_split_before_delimiter` | `black/brackets.py:232`                      |
|  4.2% | 2.54 MiB |         604 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727` |
|  3.3% |    2 MiB |           2 | `pop`                       | `blib2to3/pgen2/parse.py:398`                |
|  3.3% |    2 MiB |           2 | `__init__`                  | `<string>:2`                                 |
|  3.3% |    2 MiB |           2 | `generate_comments`         | `black/comments.py:52`                       |
|  1.7% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`                     |
|  1.7% |    1 MiB |           2 | `_rhs`                      | `black/linegen.py:650`                       |
|  1.7% |    1 MiB |           2 | `_first_right_hand_split`   | `black/linegen.py:829`                       |
|  1.7% |    1 MiB |           1 | `__init__`                  | `/usr/lib/python3.11/re/_parser.py:109`      |
|  1.7% |    1 MiB |           1 | `_addtoken`                 | `blib2to3/pgen2/parse.py:290`                |
|  1.7% |    1 MiB |           1 | `__init__`                  | `blib2to3/pytree.py:400`                     |
|  1.7% |    1 MiB |           1 | `push`                      | `blib2to3/pgen2/parse.py:386`                |
|  1.7% |    1 MiB |           1 | `__str__`                   | `black/lines.py:490`                         |
|  1.7% |    1 MiB |           1 | `pre_order`                 | `blib2to3/pytree.py:314`                     |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                    | Location                         |
| ----: | -------: | ----------: | --------------------------- | -------------------------------- |
| 30.4% | 18.2 MiB |      20,790 | `mark`                      | `black/brackets.py:70`           |
| 11.7% |    7 MiB |           7 | `changed`                   | `blib2to3/pytree.py:171`         |
|  5.0% |    3 MiB |           4 | `visit_default`             | `black/linegen.py:134`           |
|  5.0% |    3 MiB |           3 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565` |
|  5.0% |    3 MiB |           3 | `__new__`                   | `blib2to3/pytree.py:81`          |
|  5.0% |    3 MiB |           3 | `is_split_before_delimiter` | `black/brackets.py:232`          |
|  3.3% |    2 MiB |           2 | `pop`                       | `blib2to3/pgen2/parse.py:398`    |
|  3.3% |    2 MiB |           2 | `__init__`                  | `<string>:2`                     |
|  3.3% |    2 MiB |           2 | `generate_comments`         | `black/comments.py:52`           |
|  1.7% |    1 MiB |           5 | `__init__`                  | `blib2to3/pytree.py:248`         |
|  1.7% |    1 MiB |           2 | `_rhs`                      | `black/linegen.py:650`           |
|  1.7% |    1 MiB |           2 | `_first_right_hand_split`   | `black/linegen.py:829`           |
|  1.7% |    1 MiB |           1 | `_addtoken`                 | `blib2to3/pgen2/parse.py:290`    |
|  1.7% |    1 MiB |           1 | `__init__`                  | `blib2to3/pytree.py:400`         |
|  1.7% |    1 MiB |           1 | `push`                      | `blib2to3/pgen2/parse.py:386`    |
|  1.7% |    1 MiB |           1 | `__str__`                   | `black/lines.py:490`             |
|  1.7% |    1 MiB |           1 | `pre_order`                 | `blib2to3/pytree.py:314`         |
|  1.7% |    1 MiB |           1 | `_stringify_ast`            | `black/parsing.py:174`           |
|  0.2% |  146 KiB |         195 | `update_sibling_maps`       | `blib2to3/pytree.py:369`         |
|  0.1% | 76.5 KiB |           6 | `transform_line`            | `black/linegen.py:601`           |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
|  5.0% | 3.01 MiB |           4 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  4.2% | 2.54 MiB |         604 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  1.7% |    1 MiB |           1 | `__init__`                 | `/usr/lib/python3.11/re/_parser.py:109`           |
|  0.1% | 77.4 KiB |          81 | `__new__`                  | `<frozen abc>:105`                                |
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
| 94.5% | 17.2 MiB |      20,788 | `black/brackets.py:112` |
|  5.5% |    1 MiB |           1 | `black/brackets.py:125` |
| <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 71.4% | 5 MiB |           5 | `blib2to3/pytree.py:175` |
| 28.6% | 2 MiB |           2 | `blib2to3/pytree.py:176` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 3.01 MiB |           4 | `/usr/lib/python3.11/ast.py:50` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 66.7% | 2 MiB |           2 | `black/linegen.py:138` |
| 33.3% | 1 MiB |           1 | `black/linegen.py:158` |
| <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|     % |  Size | Allocations | Location                         |
| ----: | ----: | ----------: | -------------------------------- |
| 66.7% | 2 MiB |           2 | `blib2to3/pgen2/tokenize.py:614` |
| 33.3% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:879` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 3 MiB |           3 | `blib2to3/pytree.py:84` |

##### `is_split_before_delimiter` (`black/brackets.py:232`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 3 MiB |           3 | `black/brackets.py:240` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.54 MiB |         604 | `<frozen importlib._bootstrap_external>:729` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 2 MiB |           2 | `blib2to3/pgen2/parse.py:408` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Location     |
| ----: | ----: | ----------: | ------------ |
| 50.0% | 1 MiB |           1 | `<string>:9` |
| 50.0% | 1 MiB |           1 | `<string>:7` |

##### `generate_comments` (`black/comments.py:52`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 50.0% | 1 MiB |           1 | `black/comments.py:75` |
| 50.0% | 1 MiB |           1 | `black/comments.py:72` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `_rhs` (`black/linegen.py:650`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           2 | `black/linegen.py:659` |

##### `_first_right_hand_split` (`black/linegen.py:829`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 99.9% |    1 MiB |           1 | `black/linegen.py:859` |
|  0.1% | 1.03 KiB |           1 | `black/linegen.py:918` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py:109`)

|      % |  Size | Allocations | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/re/_parser.py:112` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:314` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:425` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:394` |

##### `__str__` (`black/lines.py:490`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:504` |

##### `pre_order` (`blib2to3/pytree.py:314`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:316` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/parsing.py:240` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 48.3% | 70.3 KiB |          93 | `blib2to3/pytree.py:376` |
| 48.3% | 70.3 KiB |          93 | `blib2to3/pytree.py:377` |
|  3.4% | 4.99 KiB |           9 | `blib2to3/pytree.py:379` |

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
| 100.0% | 18.2 MiB |      20,790 | `append` | `black/lines.py:63` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 57.1% | 4 MiB |           4 | `changed` | `blib2to3/pytree.py:171` |
| 42.9% | 3 MiB |           3 | `prefix`  | `blib2to3/pytree.py:480` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 3.01 MiB |           4 | `_parse_single_version` | `black/parsing.py:117` |

##### `visit_default` (`black/linegen.py:134`)

|     % |  Size | Allocations | Caller         | Location               |
| ----: | ----: | ----------: | -------------- | ---------------------- |
| 66.7% | 2 MiB |           2 | `visit`        | `black/nodes.py:163`   |
| 33.3% | 1 MiB |           1 | `visit_power`  | `black/linegen.py:341` |
| <0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 3 MiB |           3 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 3 MiB |           3 | `convert` | `blib2to3/pytree.py:486` |

##### `is_split_before_delimiter` (`black/brackets.py:232`)

|      % |  Size | Allocations | Caller | Location               |
| -----: | ----: | ----------: | ------ | ---------------------- |
| 100.0% | 3 MiB |           3 | `mark` | `black/brackets.py:70` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.54 MiB |         604 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `pop` (`blib2to3/pgen2/parse.py:398`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 2 MiB |           2 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location     |
| -----: | ----: | ----------: | ---------- | ------------ |
| 100.0% | 2 MiB |           2 | `__init__` | `<string>:2` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit_default` | `black/linegen.py:134` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `_rhs` (`black/linegen.py:650`)

|      % |  Size | Allocations | Caller            | Location                |
| -----: | ----: | ----------: | ----------------- | ----------------------- |
| 100.0% | 1 MiB |           2 | `run_transformer` | `black/linegen.py:1755` |

##### `_first_right_hand_split` (`black/linegen.py:829`)

|      % |  Size | Allocations | Caller             | Location               |
| -----: | ----: | ----------: | ------------------ | ---------------------- |
| 100.0% | 1 MiB |           2 | `right_hand_split` | `black/linegen.py:809` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py:109`)

|      % |  Size | Allocations | Caller   | Location                                |
| -----: | ----: | ----------: | -------- | --------------------------------------- |
| 100.0% | 1 MiB |           1 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `convert` | `blib2to3/pytree.py:486` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `__str__` (`black/lines.py:490`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 1 MiB |           1 | `_format_str_once` | `black/__init__.py:1236` |

##### `pre_order` (`blib2to3/pytree.py:314`)

|      % |  Size | Allocations | Caller                 | Location             |
| -----: | ----: | ----------: | ---------------------- | -------------------- |
| 100.0% | 1 MiB |           1 | `is_complex_subscript` | `black/lines.py:441` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Allocations | Caller                           | Location               |
| -----: | ----: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |    Size | Allocations | Caller         | Location                 |
| -----: | ------: | ----------: | -------------- | ------------------------ |
| 100.0% | 146 KiB |         195 | `prev_sibling` | `blib2to3/pytree.py:207` |

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
| 94.1% |   72 KiB |           1 | `run_transformer`  | `black/linegen.py:1755`  |
|  5.9% | 4.48 KiB |           5 | `_format_str_once` | `black/__init__.py:1236` |

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
| 100.0% | 59.9 MiB |      22,485 | `_run_tracker`         | `/venv13/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 59.9 MiB |      22,484 | `run_module`           | `<frozen runpy>:201`                                             |
|  92.9% | 55.7 MiB |      21,202 | `__call__`             | `/venv13/lib/python3.11/site-packages/click/core.py:1629`        |
|  92.9% | 55.7 MiB |      21,202 | `patched_main`         | `black/__init__.py:1594`                                         |
|  92.9% | 55.7 MiB |      21,202 | `<module>`             | `black/__main__.py:1`                                            |
|  92.9% | 55.7 MiB |      21,202 | `_run_code`            | `<frozen runpy>:65`                                              |
|  92.9% | 55.7 MiB |      21,202 | `_run_module_code`     | `<frozen runpy>:91`                                              |
|  92.9% | 55.7 MiB |      21,201 | `main`                 | `/venv13/lib/python3.11/site-packages/click/core.py:1484`        |
|  92.9% | 55.6 MiB |      21,180 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:1401`        |
|  92.9% | 55.6 MiB |      21,178 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:857`         |
|  92.9% | 55.6 MiB |      21,177 | `new_func`             | `/venv13/lib/python3.11/site-packages/click/decorators.py:33`    |
|  92.9% | 55.6 MiB |      21,175 | `main`                 | `black/__init__.py:244`                                          |
|  92.8% | 55.6 MiB |      21,169 | `reformat_one`         | `black/__init__.py:860`                                          |
|  92.8% | 55.6 MiB |      21,157 | `format_file_in_place` | `black/__init__.py:917`                                          |
|  92.8% | 55.6 MiB |      21,156 | `format_file_contents` | `black/__init__.py:1054`                                         |
|  86.1% | 51.6 MiB |      21,148 | `_format_str_once`     | `black/__init__.py:1236`                                         |
|  60.8% | 36.4 MiB |      21,087 | `visit`                | `black/nodes.py:163`                                             |
|  60.8% | 36.4 MiB |      21,085 | `visit_default`        | `black/nodes.py:187`                                             |
|  60.8% | 36.4 MiB |      21,085 | `visit_default`        | `black/linegen.py:134`                                           |
|  60.4% | 36.2 MiB |      20,714 | `visit_stmt`           | `black/linegen.py:199`                                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 92.9% | 55.7 MiB |      21,202 | `patched_main`                    | `black/__init__.py:1594` |
| 92.9% | 55.7 MiB |      21,202 | `<module>`                        | `black/__main__.py:1`    |
| 92.9% | 55.6 MiB |      21,175 | `main`                            | `black/__init__.py:244`  |
| 92.8% | 55.6 MiB |      21,169 | `reformat_one`                    | `black/__init__.py:860`  |
| 92.8% | 55.6 MiB |      21,157 | `format_file_in_place`            | `black/__init__.py:917`  |
| 92.8% | 55.6 MiB |      21,156 | `format_file_contents`            | `black/__init__.py:1054` |
| 86.1% | 51.6 MiB |      21,148 | `_format_str_once`                | `black/__init__.py:1236` |
| 60.8% | 36.4 MiB |      21,087 | `visit`                           | `black/nodes.py:163`     |
| 60.8% | 36.4 MiB |      21,085 | `visit_default`                   | `black/nodes.py:187`     |
| 60.8% | 36.4 MiB |      21,085 | `visit_default`                   | `black/linegen.py:134`   |
| 60.4% | 36.2 MiB |      20,714 | `visit_stmt`                      | `black/linegen.py:199`   |
| 60.2% | 36.1 MiB |          95 | `format_str`                      | `black/__init__.py:1189` |
| 59.8% | 35.8 MiB |      20,273 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 59.6% | 35.7 MiB |      20,147 | `visit_suite`                     | `black/linegen.py:288`   |
| 48.1% | 28.8 MiB |      13,407 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 37.2% | 22.3 MiB |      20,887 | `append`                          | `black/lines.py:63`      |
| 35.4% | 21.2 MiB |      20,793 | `mark`                            | `black/brackets.py:70`   |
| 33.2% | 19.9 MiB |      10,811 | `visit_power`                     | `black/linegen.py:341`   |
| 32.6% | 19.5 MiB |      21,061 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 25.9% | 15.5 MiB |      21,054 | `assert_stable`                   | `black/__init__.py:1557` |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 59.9 MiB |      22,484 | `run_module`                | `<frozen runpy>:201`                          |
|  92.9% | 55.7 MiB |      21,202 | `_run_code`                 | `<frozen runpy>:65`                           |
|  92.9% | 55.7 MiB |      21,202 | `_run_module_code`          | `<frozen runpy>:91`                           |
|   7.1% | 4.26 MiB |       1,281 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   7.1% | 4.25 MiB |       1,274 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   7.1% | 4.25 MiB |       1,272 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   7.1% | 4.25 MiB |       1,271 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   7.1% | 4.25 MiB |       1,269 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   7.0% | 4.21 MiB |       1,239 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   5.0% | 3.01 MiB |           4 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   4.2% | 2.54 MiB |         604 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   4.2% | 2.54 MiB |         604 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   2.2% |  1.3 MiB |         318 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.7% | 1.05 MiB |          26 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   1.7% | 1.05 MiB |          25 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   1.7% | 1.05 MiB |          24 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |
|   1.7% | 1.01 MiB |           6 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`       |
|   1.7% | 1.01 MiB |           5 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`       |
|   1.7% | 1.01 MiB |           9 | `<module>`                  | `/usr/lib/python3.11/secrets.py:1`            |
|   1.7% | 1.01 MiB |           4 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 59.9 MiB |      22,484 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 92.9% | 55.7 MiB |      21,202 | `_run_module_code`    | `<frozen runpy>:91`  |
|  7.1% | 4.26 MiB |       1,281 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv13/lib/python3.11/site-packages/click/core.py:1629`)

|      % |     Size | Allocations | Callee | Location                                                  |
| -----: | -------: | ----------: | ------ | --------------------------------------------------------- |
| 100.0% | 55.7 MiB |      21,201 | `main` | `/venv13/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                  |
| -----: | -------: | ----------: | ---------- | --------------------------------------------------------- |
| 100.0% | 55.7 MiB |      21,202 | `__call__` | `/venv13/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 55.7 MiB |      21,202 | `patched_main` | `black/__init__.py:1594` |

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
| 100.0% | 55.6 MiB |      21,175 | `main` | `black/__init__.py:244` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 55.6 MiB |      21,169 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:724` |
|  <0.1% |    550 B |           1 | `__str__`      | `black/report.py:80`    |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 55.6 MiB |      21,157 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 5.22 KiB |           7 | `write`                | `black/cache.py:132`    |
|  <0.1% | 1.57 KiB |           2 | `done`                 | `black/report.py:36`    |
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
| 70.6% | 36.4 MiB |      21,087 | `visit`             | `black/nodes.py:163`    |
| 23.4% | 12.1 MiB |          32 | `lib2to3_parse`     | `black/parsing.py:55`   |
|  4.0% | 2.08 MiB |          17 | `transform_line`    | `black/linegen.py:601`  |
|  1.9% |    1 MiB |           1 | `__str__`           | `black/lines.py:490`    |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off` | `black/comments.py:168` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 36.2 MiB |      20,714 | `visit_stmt`        | `black/linegen.py:199` |
|  98.3% | 35.8 MiB |      20,273 | `visit_funcdef`     | `black/linegen.py:254` |
|  98.1% | 35.7 MiB |      20,147 | `visit_suite`       | `black/linegen.py:288` |
|  79.1% | 28.8 MiB |      13,407 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/nodes.py:187`   |
|  61.2% | 22.3 MiB |      20,887 | `append`            | `black/lines.py:63`    |
|  24.7% |    9 MiB |           9 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 36.2 MiB |      20,712 | `visit`                      | `black/nodes.py:163`    |
|   2.8% |    1 MiB |           1 | `line`                       | `black/linegen.py:109`  |
|  <0.1% | 1.15 KiB |           1 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 36.1 MiB |          94 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 35.8 MiB |      20,273 | `visit` | `black/nodes.py:163` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 35.7 MiB |      20,147 | `visit_default` | `black/linegen.py:134` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 96.5% | 27.8 MiB |      13,406 | `visit_default` | `black/linegen.py:134` |
|  3.5% |    1 MiB |           1 | `line`          | `black/linegen.py:109` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee                 | Location               |
| ----: | -------: | ----------: | ---------------------- | ---------------------- |
| 95.2% | 21.2 MiB |      20,793 | `mark`                 | `black/brackets.py:70` |
|  4.5% |    1 MiB |           1 | `is_complex_subscript` | `black/lines.py:441`   |
|  0.2% | 55.7 KiB |          89 | `whitespace`           | `black/nodes.py:194`   |

##### `mark` (`black/brackets.py:70`)

|     % |  Size | Allocations | Callee                      | Location                |
| ----: | ----: | ----------: | --------------------------- | ----------------------- |
| 14.1% | 3 MiB |           3 | `is_split_before_delimiter` | `black/brackets.py:232` |

##### `visit_power` (`black/linegen.py:341`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 19.9 MiB |      10,810 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|     % |     Size | Allocations | Callee              | Location                 |
| ----: | -------: | ----------: | ------------------- | ------------------------ |
| 79.5% | 15.5 MiB |      21,054 | `assert_stable`     | `black/__init__.py:1557` |
| 20.5% | 4.01 MiB |           6 | `assert_equivalent` | `black/__init__.py:1524` |

##### `assert_stable` (`black/__init__.py:1557`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 15.5 MiB |      21,054 | `_format_str_once` | `black/__init__.py:1236` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.25 MiB |       1,274 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.25 MiB |       1,274 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.25 MiB |       1,272 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.25 MiB |       1,271 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.9% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.25 MiB |       1,269 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.21 MiB |       1,239 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.8% | 2.54 MiB |         604 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

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
| 100.0% | 2.54 MiB |         604 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

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

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|     % |     Size | Allocations | Callee           | Location                             |
| ----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 99.8% | 1.01 MiB |           8 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |  Size | Allocations | Callee       | Location                                |
| ----: | ----: | ----------: | ------------ | --------------------------------------- |
| 99.6% | 1 MiB |           2 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |
| 99.5% | 1 MiB |           1 | `__init__`   | `/usr/lib/python3.11/re/_parser.py:109` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | -------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 5.0% | 3.01 MiB |           4 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 5.0% |    3 MiB |           3 | `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`) ← `__next__` (`blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.3% |    2 MiB |           2 | `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.3% |    2 MiB |           2 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.3% |    2 MiB |           2 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.3% |    2 MiB |           2 | `is_split_before_delimiter` (`black/brackets.py:232`) ← `mark` (70) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.7% | 1.01 MiB |          15 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/exceptions.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/types.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                             |
| 1.7% |    1 MiB |           7 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/usr/lib/python3.11/secrets.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/handle_ipynb_magics.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.7% |    1 MiB |           2 | `_rhs` (`black/linegen.py:650`) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.7% |    1 MiB |           2 | `_first_right_hand_split` (`black/linegen.py:829`) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% |    1 MiB |           1 | `__init__` (`/usr/lib/python3.11/re/_parser.py:109`) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`black/strings.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.7% |    1 MiB |           1 | `__init__` (`blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.7% |    1 MiB |           1 | `__init__` (`blib2to3/pytree.py:400`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |    1 MiB |           1 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.7% |    1 MiB |           1 | `_addtoken` (`blib2to3/pgen2/parse.py:290`) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.7% |    1 MiB |           1 | `push` (`blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% |    1 MiB |           1 | `__str__` (`black/lines.py:490`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% |    1 MiB |           1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`black/linegen.py:109`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
| 1.7% |    1 MiB |           1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

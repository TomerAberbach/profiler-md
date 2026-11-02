# Peak memory profile

Held 66.3 MiB over 28,448 allocations (2.39 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 78.7% | 52.2 MiB |      26,755 |
| Standard library | 20.9% | 13.9 MiB |       1,474 |
| Third-party      |  0.3% |  221 KiB |         219 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 66.3 MiB (100.0%) _run_tracker at /venv/lib/python3.10/site-packages/memray/commands/run.py:40
    └── 66.3 MiB (100.0%) run_module at /usr/local/lib/python3.10/runpy.py:199
        ├── … 61.2 MiB (92.3%) format_file_contents at ./black/__init__.py:1054
        │   ├── 51 MiB (76.8%) format_str at 1189
        │   │   └── 51 MiB (76.8%) _format_str_once at 1236
        │   │       ├── 26.6 MiB (40.1%) visit at ./black/nodes.py:163
        │   │       │   ├── … 19.2 MiB (29.0%, self 1.5%) visit_default at ./black/linegen.py:134
        │   │       │   │   ├── 13.2 MiB (19.8%, self 3.0%) generate_comments at ./black/comments.py:52
        │   │       │   │   │   └── … 11.2 MiB (16.8%, self 24.5% globally) changed at ./blib2to3/pytree.py:171
        │   │       │   │   └── 5.06 MiB (7.6%) append at ./black/lines.py:63
        │   │       │   │       └── 5.06 MiB (7.6%) whitespace at ./black/nodes.py:194
        │   │       │   │           ├── 3.01 MiB (4.5%, self 1.5%, self 3.0% globally) prev_sibling at ./blib2to3/pytree.py:207
        │   │       │   │           │   └── 2.01 MiB (3.0%, self 6.2% globally) update_sibling_maps at 369
        │   │       │   │           └── 2.04 MiB (3.1%) preceding_leaf at 441 …
        │   │       │   └── 7.36 MiB (11.1%) 10 more callees, led by (5.0%) visit_stmt at ./black/linegen.py:199
        │   │       ├── … 16.1 MiB (24.2%) parse_tokens at ./blib2to3/pgen2/driver.py:114
        │   │       │   ├── 15 MiB (22.7%) addtoken at ./blib2to3/pgen2/parse.py:242
        │   │       │   │   └── 15 MiB (22.6%, self 1.5%) _addtoken at 290
        │   │       │   │       ├── 7 MiB (10.6%, self 3.0%) shift at 373
        │   │       │   │       │   └── 5 MiB (7.5%, self 3.0%) convert at ./blib2to3/pytree.py:486
        │   │       │   │       │       ├── 2 MiB (3.0%) __init__ at 400
        │   │       │   │       │       └── 1 MiB (1.5%, self 4.5% globally) __new__ at 81
        │   │       │   │       ├── 6 MiB (9.1%) pop at 398
        │   │       │   │       │   └── 6 MiB (9.1%) convert at ./blib2to3/pytree.py:486
        │   │       │   │       │       └── 6 MiB (9.1%) __init__ at 248
        │   │       │   │       └── 1 MiB (1.5%) push at 386
        │   │       │   └── 1 MiB (1.5%) __next__ at 80
        │   │       │       └── 1 MiB (1.5%) generate_tokens at ./blib2to3/pgen2/tokenize.py:565
        │   │       ├── 7.09 MiB (10.7%) transform_line at ./black/linegen.py:601
        │   │       │   ├── 4.04 MiB (6.1%, self 3.1%) run_transformer at 1755
        │   │       │   │   └── 2 MiB (3.0%, self 1.5%) hug_power_op at ./black/trans.py:85
        │   │       │   │       └── 1 MiB (1.5%) clone at ./blib2to3/pytree.py:452 …
        │   │       │   └── 3 MiB (4.5%) 2 more callees, led by (3.0%) line_to_string at ./black/lines.py:1073
        │   │       └── 1 MiB (1.5%, self 1.5%) maybe_empty_lines at ./black/lines.py:560
        │   └── … 10.2 MiB (15.4%) parse at /usr/local/lib/python3.10/ast.py:33
        └── … 4.88 MiB (7.4%) exec_module at <frozen importlib._bootstrap_external>:877
            ├── … 3.07 MiB (4.6%) _call_with_frames_removed at <frozen importlib._bootstrap>:233
            └── 1.65 MiB (2.5%) _call_with_frames_removed at <frozen importlib._bootstrap>:233
                ├── … 1 MiB (1.5%) __init__ at ./blib2to3/pgen2/pgen.py:376
                └── 539 KiB (0.8%) 80 more callees, led by (0.1%) <module> at /venv/lib/python3.10/site-packages/click/types.py:1
```

## Hottest functions

### Self size

Functions with the most bytes held at peak memory within the function body, excluding callees.

|     % |     Size | Allocations | Function                    | Location                              |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------- |
| 24.5% | 16.2 MiB |      25,907 | `changed`                   | `./blib2to3/pytree.py:171`            |
| 15.4% | 10.2 MiB |         983 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33` |
|  9.1% |    6 MiB |          11 | `__init__`                  | `./blib2to3/pytree.py:248`            |
|  6.2% | 4.14 MiB |         199 | `update_sibling_maps`       | `./blib2to3/pytree.py:369`            |
|  4.6% | 3.07 MiB |         108 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`   |
|  4.5% |    3 MiB |           3 | `__new__`                   | `./blib2to3/pytree.py:81`             |
|  3.1% | 2.04 MiB |          66 | `run_transformer`           | `./black/linegen.py:1755`             |
|  3.0% |    2 MiB |           3 | `convert`                   | `./blib2to3/pytree.py:486`            |
|  3.0% |    2 MiB |           2 | `__init__`                  | `./blib2to3/pytree.py:400`            |
|  3.0% |    2 MiB |           2 | `shift`                     | `./blib2to3/pgen2/parse.py:373`       |
|  3.0% |    2 MiB |           2 | `prev_sibling`              | `./blib2to3/pytree.py:207`            |
|  3.0% |    2 MiB |           2 | `generate_comments`         | `./black/comments.py:52`              |
|  1.5% |    1 MiB |           3 | `generate_tokens`           | `./blib2to3/pgen2/tokenize.py:565`    |
|  1.5% |    1 MiB |           2 | `maybe_empty_lines`         | `./black/lines.py:560`                |
|  1.5% |    1 MiB |           2 | `hug_power_op`              | `./black/trans.py:85`                 |
|  1.5% |    1 MiB |           2 | `__init__`                  | `<string>:2`                          |
|  1.5% |    1 MiB |           1 | `__init__`                  | `./blib2to3/pgen2/pgen.py:376`        |
|  1.5% |    1 MiB |           1 | `_addtoken`                 | `./blib2to3/pgen2/parse.py:290`       |
|  1.5% |    1 MiB |           1 | `push`                      | `./blib2to3/pgen2/parse.py:386`       |
|  1.5% |    1 MiB |           1 | `visit_default`             | `./black/linegen.py:134`              |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Allocations | Function              | Location                           |
| ----: | -------: | ----------: | --------------------- | ---------------------------------- |
| 24.5% | 16.2 MiB |      25,907 | `changed`             | `./blib2to3/pytree.py:171`         |
|  9.1% |    6 MiB |          11 | `__init__`            | `./blib2to3/pytree.py:248`         |
|  6.2% | 4.14 MiB |         199 | `update_sibling_maps` | `./blib2to3/pytree.py:369`         |
|  4.5% |    3 MiB |           3 | `__new__`             | `./blib2to3/pytree.py:81`          |
|  3.1% | 2.04 MiB |          66 | `run_transformer`     | `./black/linegen.py:1755`          |
|  3.0% |    2 MiB |           3 | `convert`             | `./blib2to3/pytree.py:486`         |
|  3.0% |    2 MiB |           2 | `__init__`            | `./blib2to3/pytree.py:400`         |
|  3.0% |    2 MiB |           2 | `shift`               | `./blib2to3/pgen2/parse.py:373`    |
|  3.0% |    2 MiB |           2 | `prev_sibling`        | `./blib2to3/pytree.py:207`         |
|  3.0% |    2 MiB |           2 | `generate_comments`   | `./black/comments.py:52`           |
|  1.5% |    1 MiB |           3 | `generate_tokens`     | `./blib2to3/pgen2/tokenize.py:565` |
|  1.5% |    1 MiB |           2 | `maybe_empty_lines`   | `./black/lines.py:560`             |
|  1.5% |    1 MiB |           2 | `hug_power_op`        | `./black/trans.py:85`              |
|  1.5% |    1 MiB |           2 | `__init__`            | `<string>:2`                       |
|  1.5% |    1 MiB |           1 | `__init__`            | `./blib2to3/pgen2/pgen.py:376`     |
|  1.5% |    1 MiB |           1 | `_addtoken`           | `./blib2to3/pgen2/parse.py:290`    |
|  1.5% |    1 MiB |           1 | `push`                | `./blib2to3/pgen2/parse.py:386`    |
|  1.5% |    1 MiB |           1 | `visit_default`       | `./black/linegen.py:134`           |
|  1.5% |    1 MiB |           1 | `__str__`             | `./blib2to3/pytree.py:440`         |
|  1.5% |    1 MiB |           1 | `__str__`             | `./black/lines.py:490`             |

##### Standard library

|     % |     Size | Allocations | Function                    | Location                                                |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------------------------- |
| 15.4% | 10.2 MiB |         983 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33`                   |
|  4.6% | 3.07 MiB |         108 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`                     |
|  0.3% |  222 KiB |           1 | `decode`                    | `/usr/local/lib/python3.10/codecs.py:319`               |
|  0.2% |  159 KiB |         154 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:670`            |
|  0.1% | 65.9 KiB |          67 | `__new__`                   | `/usr/local/lib/python3.10/abc.py:105`                  |
| <0.1% | 22.6 KiB |          12 | `compile`                   | `/usr/local/lib/python3.10/sre_compile.py:783`          |
| <0.1% | 16.3 KiB |          20 | `_parse_sub`                | `/usr/local/lib/python3.10/sre_parse.py:436`            |
| <0.1% | 15.8 KiB |          20 | `__new__`                   | `/usr/local/lib/python3.10/enum.py:180`                 |
| <0.1% | 11.2 KiB |           2 | `inner`                     | `/usr/local/lib/python3.10/typing.py:306`               |
| <0.1% | 9.78 KiB |          11 | `__new__`                   | `/usr/local/lib/python3.10/typing.py:2338`              |
| <0.1% |    8 KiB |           4 | `_fill_cache`               | `<frozen importlib._bootstrap_external>:1587`           |
| <0.1% | 7.78 KiB |          12 | `_compile`                  | `/usr/local/lib/python3.10/sre_compile.py:87`           |
| <0.1% | 7.61 KiB |           6 | `_parse`                    | `/usr/local/lib/python3.10/sre_parse.py:494`            |
| <0.1% | 7.42 KiB |          10 | `namedtuple`                | `/usr/local/lib/python3.10/collections/__init__.py:328` |
| <0.1% | 6.71 KiB |          11 | `__setattr__`               | `/usr/local/lib/python3.10/enum.py:470`                 |
| <0.1% | 6.11 KiB |           9 | `_set_new_attribute`        | `/usr/local/lib/python3.10/dataclasses.py:824`          |
| <0.1% |  4.5 KiB |           8 | `_process_class`            | `/usr/local/lib/python3.10/dataclasses.py:881`          |
| <0.1% | 4.46 KiB |           7 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:987`                     |
| <0.1% | 3.49 KiB |           4 | `<module>`                  | `/usr/local/lib/python3.10/pkgutil.py:1`                |
| <0.1% | 3.05 KiB |           2 | `<module>`                  | `/usr/local/lib/python3.10/secrets.py:1`                |

#### Lines

Lines with the largest contribution to each function's self size.

##### `changed` (`./blib2to3/pytree.py:171`)

|      % |     Size | Allocations | Location                   |
| -----: | -------: | ----------: | -------------------------- |
| 100.0% | 16.2 MiB |      25,907 | `./blib2to3/pytree.py:176` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |     Size | Allocations | Location                              |
| -----: | -------: | ----------: | ------------------------------------- |
| 100.0% | 10.2 MiB |         983 | `/usr/local/lib/python3.10/ast.py:50` |

##### `__init__` (`./blib2to3/pytree.py:248`)

|      % |     Size | Allocations | Location                   |
| -----: | -------: | ----------: | -------------------------- |
| 100.0% |    6 MiB |           7 | `./blib2to3/pytree.py:269` |
|  <0.1% | 3.03 KiB |           4 | `./blib2to3/pytree.py:266` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                   |
| ----: | -------: | ----------: | -------------------------- |
| 74.1% | 3.07 MiB |          96 | `./blib2to3/pytree.py:377` |
| 24.3% |    1 MiB |          10 | `./blib2to3/pytree.py:379` |
|  1.7% |   71 KiB |          93 | `./blib2to3/pytree.py:376` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Location                            |
| -----: | -------: | ----------: | ----------------------------------- |
| 100.0% | 3.07 MiB |         108 | `<frozen importlib._bootstrap>:241` |

##### `__new__` (`./blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                  |
| -----: | ----: | ----------: | ------------------------- |
| 100.0% | 3 MiB |           3 | `./blib2to3/pytree.py:84` |

##### `run_transformer` (`./black/linegen.py:1755`)

|     % |     Size | Allocations | Location                  |
| ----: | -------: | ----------: | ------------------------- |
| 98.2% |    2 MiB |           2 | `./black/linegen.py:1766` |
|  1.7% | 36.4 KiB |          63 | `./black/linegen.py:1770` |

##### `convert` (`./blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Location                   |
| -----: | ----: | ----------: | -------------------------- |
| 100.0% | 2 MiB |           3 | `./blib2to3/pytree.py:503` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Location                   |
| -----: | ----: | ----------: | -------------------------- |
| 100.0% | 2 MiB |           2 | `./blib2to3/pytree.py:425` |

##### `shift` (`./blib2to3/pgen2/parse.py:373`)

|      % |  Size | Allocations | Location                        |
| -----: | ----: | ----------: | ------------------------------- |
| 100.0% | 2 MiB |           2 | `./blib2to3/pgen2/parse.py:383` |

##### `prev_sibling` (`./blib2to3/pytree.py:207`)

|      % |  Size | Allocations | Location                   |
| -----: | ----: | ----------: | -------------------------- |
| 100.0% | 2 MiB |           2 | `./blib2to3/pytree.py:219` |

##### `generate_comments` (`./black/comments.py:52`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 2 MiB |           2 | `./black/comments.py:72` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:565`)

|     % |     Size | Allocations | Location                            |
| ----: | -------: | ----------: | ----------------------------------- |
| 99.5% |    1 MiB |           1 | `./blib2to3/pgen2/tokenize.py:879`  |
|  0.5% | 4.73 KiB |           2 | `./blib2to3/pgen2/tokenize.py:1103` |

##### `maybe_empty_lines` (`./black/lines.py:560`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 99.9% | 1 MiB |           1 | `./black/lines.py:584` |

##### `hug_power_op` (`./black/trans.py:85`)

|     % |  Size | Allocations | Location              |
| ----: | ----: | ----------: | --------------------- |
| 99.9% | 1 MiB |           1 | `./black/trans.py:95` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Location      |
| ----: | ----: | ----------: | ------------- |
| 99.9% | 1 MiB |           1 | `<string>:9`  |
|  0.1% | 576 B |           1 | `<string>:13` |

##### `__init__` (`./blib2to3/pgen2/pgen.py:376`)

|      % |  Size | Allocations | Location                       |
| -----: | ----: | ----------: | ------------------------------ |
| 100.0% | 1 MiB |           1 | `./blib2to3/pgen2/pgen.py:377` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Location                        |
| -----: | ----: | ----------: | ------------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pgen2/parse.py:314` |

##### `push` (`./blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                        |
| -----: | ----: | ----------: | ------------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pgen2/parse.py:394` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `./black/linegen.py:158` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|      % |  Size | Allocations | Location                   |
| -----: | ----: | ----------: | -------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pytree.py:446` |

##### `__str__` (`./black/lines.py:490`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `./black/lines.py:496` |

##### `decode` (`/usr/local/lib/python3.10/codecs.py:319`)

|      % |    Size | Allocations | Location                                  |
| -----: | ------: | ----------: | ----------------------------------------- |
| 100.0% | 222 KiB |           1 | `/usr/local/lib/python3.10/codecs.py:322` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Location                                     |
| -----: | ------: | ----------: | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `<frozen importlib._bootstrap_external>:672` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |    Size | Allocations | Location                               |
| ----: | ------: | ----------: | -------------------------------------- |
| 94.1% |  62 KiB |          61 | `/usr/local/lib/python3.10/abc.py:106` |
|  5.9% | 3.9 KiB |           6 | `/usr/local/lib/python3.10/abc.py:107` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Location                                       |
| -----: | -------: | ----------: | ---------------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/local/lib/python3.10/sre_compile.py:804` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 16.3 KiB |          20 | `/usr/local/lib/python3.10/sre_parse.py:444` |

##### `__new__` (`/usr/local/lib/python3.10/enum.py:180`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 78.6% | 12.4 KiB |          14 | `/usr/local/lib/python3.10/enum.py:215` |
| 10.7% | 1.69 KiB |           3 | `/usr/local/lib/python3.10/enum.py:313` |
| 10.7% | 1.69 KiB |           3 | `/usr/local/lib/python3.10/enum.py:318` |

##### `inner` (`/usr/local/lib/python3.10/typing.py:306`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 11.2 KiB |           2 | `/usr/local/lib/python3.10/typing.py:309` |

##### `__new__` (`/usr/local/lib/python3.10/typing.py:2338`)

|      % |     Size | Allocations | Location                                   |
| -----: | -------: | ----------: | ------------------------------------------ |
| 100.0% | 9.78 KiB |          11 | `/usr/local/lib/python3.10/typing.py:2350` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1587`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1599` |

##### `_compile` (`/usr/local/lib/python3.10/sre_compile.py:87`)

|     % |     Size | Allocations | Location                                       |
| ----: | -------: | ----------: | ---------------------------------------------- |
| 41.7% | 3.24 KiB |           5 | `/usr/local/lib/python3.10/sre_compile.py:184` |
| 25.0% | 1.95 KiB |           3 | `/usr/local/lib/python3.10/sre_compile.py:164` |
| 25.0% | 1.95 KiB |           3 | `/usr/local/lib/python3.10/sre_compile.py:225` |
|  8.3% |    664 B |           1 | `/usr/local/lib/python3.10/sre_compile.py:172` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|     % |     Size | Allocations | Location                                     |
| ----: | -------: | ----------: | -------------------------------------------- |
| 20.9% | 1.59 KiB |           3 | `/usr/local/lib/python3.10/sre_parse.py:841` |
|  7.0% |    544 B |           1 | `/usr/local/lib/python3.10/sre_parse.py:755` |

##### `namedtuple` (`/usr/local/lib/python3.10/collections/__init__.py:328`)

|      % |     Size | Allocations | Location                                                |
| -----: | -------: | ----------: | ------------------------------------------------------- |
| 100.0% | 7.42 KiB |          10 | `/usr/local/lib/python3.10/collections/__init__.py:481` |

##### `__setattr__` (`/usr/local/lib/python3.10/enum.py:470`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 6.71 KiB |          11 | `/usr/local/lib/python3.10/enum.py:481` |

##### `_set_new_attribute` (`/usr/local/lib/python3.10/dataclasses.py:824`)

|      % |     Size | Allocations | Location                                       |
| -----: | -------: | ----------: | ---------------------------------------------- |
| 100.0% | 6.11 KiB |           9 | `/usr/local/lib/python3.10/dataclasses.py:830` |

##### `_process_class` (`/usr/local/lib/python3.10/dataclasses.py:881`)

|     % |     Size | Allocations | Location                                        |
| ----: | -------: | ----------: | ----------------------------------------------- |
| 62.5% | 2.81 KiB |           5 | `/usr/local/lib/python3.10/dataclasses.py:1088` |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:899`  |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:958`  |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:995`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 4.46 KiB |           7 | `<frozen importlib._bootstrap>:1012` |

##### `<module>` (`/usr/local/lib/python3.10/pkgutil.py:1`)

|     % |     Size | Allocations | Location                                   |
| ----: | -------: | ----------: | ------------------------------------------ |
| 42.5% | 1.48 KiB |           2 | `/usr/local/lib/python3.10/pkgutil.py:269` |
| 31.1% | 1.09 KiB |           1 | `/usr/local/lib/python3.10/pkgutil.py:137` |
| 26.4% |    944 B |           1 | `/usr/local/lib/python3.10/pkgutil.py:194` |

##### `<module>` (`/usr/local/lib/python3.10/secrets.py:1`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 81.6% | 2.49 KiB |           1 | `/usr/local/lib/python3.10/secrets.py:21` |
| 18.4% |    576 B |           1 | `/usr/local/lib/python3.10/secrets.py:16` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `changed` (`./blib2to3/pytree.py:171`)

|     % |     Size | Allocations | Caller    | Location                   |
| ----: | -------: | ----------: | --------- | -------------------------- |
| 87.7% | 14.2 MiB |      25,905 | `prefix`  | `./blib2to3/pytree.py:480` |
| 12.3% |    2 MiB |           2 | `changed` | `./blib2to3/pytree.py:171` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location                 |
| -----: | -------: | ----------: | ----------------------- | ------------------------ |
| 100.0% | 10.2 MiB |         983 | `_parse_single_version` | `./black/parsing.py:117` |

##### `__init__` (`./blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                   |
| -----: | ----: | ----------: | --------- | -------------------------- |
| 100.0% | 6 MiB |          11 | `convert` | `./blib2to3/pytree.py:486` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 4.14 MiB |         199 | `prev_sibling` | `./blib2to3/pytree.py:207` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Caller           | Location                                     |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------- |
| 100.0% | 3.07 MiB |         108 | `source_to_code` | `<frozen importlib._bootstrap_external>:942` |

##### `__new__` (`./blib2to3/pytree.py:81`)

|     % |  Size | Allocations | Caller    | Location                   |
| ----: | ----: | ----------: | --------- | -------------------------- |
| 66.7% | 2 MiB |           2 | `clone`   | `./blib2to3/pytree.py:452` |
| 33.3% | 1 MiB |           1 | `convert` | `./blib2to3/pytree.py:486` |

##### `run_transformer` (`./black/linegen.py:1755`)

|      % |     Size | Allocations | Caller           | Location                 |
| -----: | -------: | ----------: | ---------------- | ------------------------ |
| 100.0% | 2.04 MiB |          66 | `transform_line` | `./black/linegen.py:601` |

##### `convert` (`./blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Caller  | Location                        |
| -----: | ----: | ----------: | ------- | ------------------------------- |
| 100.0% | 2 MiB |           3 | `shift` | `./blib2to3/pgen2/parse.py:373` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Caller    | Location                   |
| -----: | ----: | ----------: | --------- | -------------------------- |
| 100.0% | 2 MiB |           2 | `convert` | `./blib2to3/pytree.py:486` |

##### `shift` (`./blib2to3/pgen2/parse.py:373`)

|      % |  Size | Allocations | Caller      | Location                        |
| -----: | ----: | ----------: | ----------- | ------------------------------- |
| 100.0% | 2 MiB |           2 | `_addtoken` | `./blib2to3/pgen2/parse.py:290` |

##### `prev_sibling` (`./blib2to3/pytree.py:207`)

|     % |  Size | Allocations | Caller           | Location               |
| ----: | ----: | ----------: | ---------------- | ---------------------- |
| 50.0% | 1 MiB |           1 | `preceding_leaf` | `./black/nodes.py:441` |
| 50.0% | 1 MiB |           1 | `whitespace`     | `./black/nodes.py:194` |

##### `generate_comments` (`./black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location                 |
| -----: | ----: | ----------: | --------------- | ------------------------ |
| 100.0% | 2 MiB |           2 | `visit_default` | `./black/linegen.py:134` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:565`)

|     % |     Size | Allocations | Caller     | Location                        |
| ----: | -------: | ----------: | ---------- | ------------------------------- |
| 99.5% |    1 MiB |           1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |
|  0.5% | 4.73 KiB |           2 | `gettoken` | `./blib2to3/pgen2/pgen.py:357`  |

##### `maybe_empty_lines` (`./black/lines.py:560`)

|      % |  Size | Allocations | Caller             | Location                   |
| -----: | ----: | ----------: | ------------------ | -------------------------- |
| 100.0% | 1 MiB |           2 | `_format_str_once` | `./black/__init__.py:1236` |

##### `hug_power_op` (`./black/trans.py:85`)

|      % |  Size | Allocations | Caller            | Location                  |
| -----: | ----: | ----------: | ----------------- | ------------------------- |
| 100.0% | 1 MiB |           2 | `run_transformer` | `./black/linegen.py:1755` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Caller     | Location                  |
| ----: | ----: | ----------: | ---------- | ------------------------- |
| 99.9% | 1 MiB |           1 | `__init__` | `<string>:2`              |
|  0.1% | 576 B |           1 | `main`     | `./black/__init__.py:244` |

##### `__init__` (`./blib2to3/pgen2/pgen.py:376`)

|      % |  Size | Allocations | Caller       | Location                       |
| -----: | ----: | ----------: | ------------ | ------------------------------ |
| 100.0% | 1 MiB |           1 | `parse_atom` | `./blib2to3/pgen2/pgen.py:329` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Caller     | Location                        |
| -----: | ----: | ----------: | ---------- | ------------------------------- |
| 100.0% | 1 MiB |           1 | `addtoken` | `./blib2to3/pgen2/parse.py:242` |

##### `push` (`./blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                        |
| -----: | ----: | ----------: | ----------- | ------------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `./blib2to3/pgen2/parse.py:290` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |  Size | Allocations | Caller  | Location               |
| -----: | ----: | ----------: | ------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `visit` | `./black/nodes.py:163` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|      % |  Size | Allocations | Caller    | Location               |
| -----: | ----: | ----------: | --------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `__str__` | `./black/lines.py:490` |

##### `__str__` (`./black/lines.py:490`)

|      % |  Size | Allocations | Caller           | Location                |
| -----: | ----: | ----------: | ---------------- | ----------------------- |
| 100.0% | 1 MiB |           1 | `line_to_string` | `./black/lines.py:1073` |

##### `decode` (`/usr/local/lib/python3.10/codecs.py:319`)

|      % |    Size | Allocations | Caller         | Location                   |
| -----: | ------: | ----------: | -------------- | -------------------------- |
| 100.0% | 222 KiB |           1 | `decode_bytes` | `./black/__init__.py:1290` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Caller     | Location                                     |
| -----: | ------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 44.2% | 29.1 KiB |          34 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`          |
| 23.9% | 15.7 KiB |          17 | `<module>` | `./black/trans.py:1`                                           |
| 20.9% | 13.8 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`           |
| 11.0% | 7.25 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:1` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Caller     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Caller   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 16.3 KiB |          20 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

##### `__new__` (`/usr/local/lib/python3.10/enum.py:180`)

|     % |     Size | Allocations | Caller     | Location                                                     |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------------ |
| 38.8% | 6.14 KiB |           9 | `<module>` | `./black/mode.py:1`                                          |
| 17.5% | 2.77 KiB |           3 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/_elffile.py:1` |
| 10.9% | 1.73 KiB |           2 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`         |
|  9.4% | 1.48 KiB |           2 | `<module>` | `/venv/lib/python3.10/site-packages/click/_utils.py:1`       |
|  5.8% |    944 B |           1 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/_ranges.py:1`  |

##### `inner` (`/usr/local/lib/python3.10/typing.py:306`)

|     % |     Size | Allocations | Caller        | Location                                  |
| ----: | -------: | ----------: | ------------- | ----------------------------------------- |
| 80.7% | 9.03 KiB |           1 | `Optional`    | `/usr/local/lib/python3.10/typing.py:523` |
| 19.3% | 2.16 KiB |           1 | `__getitem__` | `/usr/local/lib/python3.10/typing.py:407` |

##### `__new__` (`/usr/local/lib/python3.10/typing.py:2338`)

|     % |     Size | Allocations | Caller     | Location                                                    |
| ----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 90.6% | 8.86 KiB |          10 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`       |
|  9.4% |    944 B |           1 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/version.py:1` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1587`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1536` |

##### `_compile` (`/usr/local/lib/python3.10/sre_compile.py:87`)

|     % |     Size | Allocations | Caller     | Location                                       |
| ----: | -------: | ----------: | ---------- | ---------------------------------------------- |
| 58.3% | 4.54 KiB |           7 | `_compile` | `/usr/local/lib/python3.10/sre_compile.py:87`  |
| 41.7% | 3.24 KiB |           5 | `_code`    | `/usr/local/lib/python3.10/sre_compile.py:622` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|      % |     Size | Allocations | Caller       | Location                                     |
| -----: | -------: | ----------: | ------------ | -------------------------------------------- |
| 100.0% | 7.61 KiB |           6 | `_parse_sub` | `/usr/local/lib/python3.10/sre_parse.py:436` |

##### `namedtuple` (`/usr/local/lib/python3.10/collections/__init__.py:328`)

|     % |     Size | Allocations | Caller          | Location                                   |
| ----: | -------: | ----------: | --------------- | ------------------------------------------ |
| 80.0% | 5.94 KiB |           8 | `_make_nmtuple` | `/usr/local/lib/python3.10/typing.py:2247` |
| 20.0% | 1.48 KiB |           2 | `<module>`      | `/usr/local/lib/python3.10/pkgutil.py:1`   |

##### `__setattr__` (`/usr/local/lib/python3.10/enum.py:470`)

|      % |     Size | Allocations | Caller    | Location                                |
| -----: | -------: | ----------: | --------- | --------------------------------------- |
| 100.0% | 6.71 KiB |          11 | `__new__` | `/usr/local/lib/python3.10/enum.py:180` |

##### `_set_new_attribute` (`/usr/local/lib/python3.10/dataclasses.py:824`)

|      % |     Size | Allocations | Caller           | Location                                       |
| -----: | -------: | ----------: | ---------------- | ---------------------------------------------- |
| 100.0% | 6.11 KiB |           9 | `_process_class` | `/usr/local/lib/python3.10/dataclasses.py:881` |

##### `_process_class` (`/usr/local/lib/python3.10/dataclasses.py:881`)

|      % |    Size | Allocations | Caller | Location                                        |
| -----: | ------: | ----------: | ------ | ----------------------------------------------- |
| 100.0% | 4.5 KiB |           8 | `wrap` | `/usr/local/lib/python3.10/dataclasses.py:1174` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Caller           | Location                             |
| -----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 4.46 KiB |           7 | `_find_and_load` | `<frozen importlib._bootstrap>:1022` |

##### `<module>` (`/usr/local/lib/python3.10/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.49 KiB |           4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/usr/local/lib/python3.10/secrets.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.05 KiB |           2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

Functions with the most bytes held at peak memory within the function and its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 66.3 MiB |      28,448 | `run_module`           | `/usr/local/lib/python3.10/runpy.py:199`                       |
| 100.0% | 66.3 MiB |      28,448 | `_run_tracker`         | `/venv/lib/python3.10/site-packages/memray/commands/run.py:40` |
|  92.6% | 61.4 MiB |      27,574 | `_run_module_code`     | `/usr/local/lib/python3.10/runpy.py:89`                        |
|  92.6% | 61.4 MiB |      27,573 | `_run_code`            | `/usr/local/lib/python3.10/runpy.py:63`                        |
|  92.6% | 61.4 MiB |      27,572 | `__call__`             | `/venv/lib/python3.10/site-packages/click/core.py:1651`        |
|  92.6% | 61.4 MiB |      27,572 | `patched_main`         | `./black/__init__.py:1594`                                     |
|  92.6% | 61.4 MiB |      27,572 | `<module>`             | `./black/__main__.py:1`                                        |
|  92.6% | 61.4 MiB |      27,571 | `main`                 | `/venv/lib/python3.10/site-packages/click/core.py:1483`        |
|  92.6% | 61.4 MiB |      27,554 | `invoke`               | `/venv/lib/python3.10/site-packages/click/core.py:1400`        |
|  92.6% | 61.4 MiB |      27,552 | `invoke`               | `/venv/lib/python3.10/site-packages/click/core.py:861`         |
|  92.6% | 61.4 MiB |      27,550 | `new_func`             | `/venv/lib/python3.10/site-packages/click/decorators.py:33`    |
|  92.6% | 61.4 MiB |      27,548 | `main`                 | `./black/__init__.py:244`                                      |
|  92.6% | 61.4 MiB |      27,539 | `reformat_one`         | `./black/__init__.py:860`                                      |
|  92.6% | 61.4 MiB |      27,537 | `format_file_in_place` | `./black/__init__.py:917`                                      |
|  92.3% | 61.2 MiB |      27,534 | `format_file_contents` | `./black/__init__.py:1054`                                     |
|  76.8% |   51 MiB |      26,551 | `format_str`           | `./black/__init__.py:1189`                                     |
|  76.8% |   51 MiB |      26,550 | `_format_str_once`     | `./black/__init__.py:1236`                                     |
|  40.1% | 26.6 MiB |      26,393 | `visit`                | `./black/nodes.py:163`                                         |
|  40.1% | 26.6 MiB |      26,392 | `visit_default`        | `./black/nodes.py:187`                                         |
|  40.1% | 26.6 MiB |      26,392 | `visit_default`        | `./black/linegen.py:134`                                       |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Allocations | Function               | Location                         |
| ----: | -------: | ----------: | ---------------------- | -------------------------------- |
| 92.6% | 61.4 MiB |      27,572 | `patched_main`         | `./black/__init__.py:1594`       |
| 92.6% | 61.4 MiB |      27,572 | `<module>`             | `./black/__main__.py:1`          |
| 92.6% | 61.4 MiB |      27,548 | `main`                 | `./black/__init__.py:244`        |
| 92.6% | 61.4 MiB |      27,539 | `reformat_one`         | `./black/__init__.py:860`        |
| 92.6% | 61.4 MiB |      27,537 | `format_file_in_place` | `./black/__init__.py:917`        |
| 92.3% | 61.2 MiB |      27,534 | `format_file_contents` | `./black/__init__.py:1054`       |
| 76.8% |   51 MiB |      26,551 | `format_str`           | `./black/__init__.py:1189`       |
| 76.8% |   51 MiB |      26,550 | `_format_str_once`     | `./black/__init__.py:1236`       |
| 40.1% | 26.6 MiB |      26,393 | `visit`                | `./black/nodes.py:163`           |
| 40.1% | 26.6 MiB |      26,392 | `visit_default`        | `./black/nodes.py:187`           |
| 40.1% | 26.6 MiB |      26,392 | `visit_default`        | `./black/linegen.py:134`         |
| 39.6% | 26.2 MiB |      25,804 | `visit_stmt`           | `./black/linegen.py:199`         |
| 39.2% |   26 MiB |      25,386 | `visit_suite`          | `./black/linegen.py:288`         |
| 39.2% |   26 MiB |      25,384 | `visit_funcdef`        | `./black/linegen.py:254`         |
| 28.0% | 18.5 MiB |      15,457 | `visit_simple_stmt`    | `./black/linegen.py:295`         |
| 24.5% | 16.2 MiB |      25,907 | `changed`              | `./blib2to3/pytree.py:171`       |
| 24.5% | 16.2 MiB |      25,907 | `prefix`               | `./blib2to3/pytree.py:480`       |
| 24.2% | 16.1 MiB |          37 | `parse_string`         | `./blib2to3/pgen2/driver.py:198` |
| 24.2% | 16.1 MiB |          37 | `lib2to3_parse`        | `./black/parsing.py:55`          |
| 24.2% | 16.1 MiB |          36 | `parse_tokens`         | `./blib2to3/pgen2/driver.py:114` |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                       |
| -----: | -------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 66.3 MiB |      28,448 | `run_module`                | `/usr/local/lib/python3.10/runpy.py:199`       |
|  92.6% | 61.4 MiB |      27,574 | `_run_module_code`          | `/usr/local/lib/python3.10/runpy.py:89`        |
|  92.6% | 61.4 MiB |      27,573 | `_run_code`                 | `/usr/local/lib/python3.10/runpy.py:63`        |
|  15.4% | 10.2 MiB |         983 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33`          |
|   7.4% | 4.89 MiB |         873 | `_get_module_details`       | `/usr/local/lib/python3.10/runpy.py:103`       |
|   7.4% | 4.89 MiB |         870 | `exec_module`               | `<frozen importlib._bootstrap_external>:877`   |
|   7.4% | 4.89 MiB |         870 | `_load_unlocked`            | `<frozen importlib._bootstrap>:664`            |
|   7.4% | 4.89 MiB |         870 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:987`            |
|   7.4% | 4.89 MiB |         870 | `_find_and_load`            | `<frozen importlib._bootstrap>:1022`           |
|   7.4% | 4.89 MiB |         869 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`            |
|   4.9% | 3.23 MiB |         263 | `get_code`                  | `<frozen importlib._bootstrap_external>:950`   |
|   4.6% | 3.07 MiB |         108 | `source_to_code`            | `<frozen importlib._bootstrap_external>:942`   |
|   0.3% |  222 KiB |           1 | `decode`                    | `/usr/local/lib/python3.10/codecs.py:319`      |
|   0.3% |  219 KiB |         222 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1053`           |
|   0.2% |  159 KiB |         154 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:670`   |
|   0.1% |   67 KiB |          69 | `__new__`                   | `/usr/local/lib/python3.10/abc.py:105`         |
|   0.1% | 55.6 KiB |          52 | `_compile`                  | `/usr/local/lib/python3.10/re.py:288`          |
|   0.1% | 54.8 KiB |          51 | `compile`                   | `/usr/local/lib/python3.10/sre_compile.py:783` |
|   0.1% | 50.7 KiB |          45 | `compile`                   | `/usr/local/lib/python3.10/re.py:249`          |
|  <0.1% | 24.4 KiB |          27 | `_parse_sub`                | `/usr/local/lib/python3.10/sre_parse.py:436`   |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

|      % |     Size | Allocations | Caller         | Location                                                       |
| -----: | -------: | ----------: | -------------- | -------------------------------------------------------------- |
| 100.0% | 66.3 MiB |      28,448 | `_run_tracker` | `/venv/lib/python3.10/site-packages/memray/commands/run.py:40` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

|      % |     Size | Allocations | Caller       | Location                                 |
| -----: | -------: | ----------: | ------------ | ---------------------------------------- |
| 100.0% | 61.4 MiB |      27,574 | `run_module` | `/usr/local/lib/python3.10/runpy.py:199` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

|      % |     Size | Allocations | Caller             | Location                                |
| -----: | -------: | ----------: | ------------------ | --------------------------------------- |
| 100.0% | 61.4 MiB |      27,573 | `_run_module_code` | `/usr/local/lib/python3.10/runpy.py:89` |

##### `__call__` (`/venv/lib/python3.10/site-packages/click/core.py:1651`)

|      % |     Size | Allocations | Caller         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 61.4 MiB |      27,572 | `patched_main` | `./black/__init__.py:1594` |

##### `patched_main` (`./black/__init__.py:1594`)

|      % |     Size | Allocations | Caller     | Location                |
| -----: | -------: | ----------: | ---------- | ----------------------- |
| 100.0% | 61.4 MiB |      27,572 | `<module>` | `./black/__main__.py:1` |

##### `<module>` (`./black/__main__.py:1`)

|      % |     Size | Allocations | Caller      | Location                                |
| -----: | -------: | ----------: | ----------- | --------------------------------------- |
| 100.0% | 61.4 MiB |      27,572 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `main` (`/venv/lib/python3.10/site-packages/click/core.py:1483`)

|      % |     Size | Allocations | Caller     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,571 | `__call__` | `/venv/lib/python3.10/site-packages/click/core.py:1651` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:1400`)

|      % |     Size | Allocations | Caller | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,554 | `main` | `/venv/lib/python3.10/site-packages/click/core.py:1483` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`)

|      % |     Size | Allocations | Caller   | Location                                                |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,552 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:1400` |

##### `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Caller   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 61.4 MiB |      27,550 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:861` |

##### `main` (`./black/__init__.py:244`)

|      % |     Size | Allocations | Caller     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,548 | `new_func` | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |

##### `reformat_one` (`./black/__init__.py:860`)

|      % |     Size | Allocations | Caller | Location                  |
| -----: | -------: | ----------: | ------ | ------------------------- |
| 100.0% | 61.4 MiB |      27,539 | `main` | `./black/__init__.py:244` |

##### `format_file_in_place` (`./black/__init__.py:917`)

|      % |     Size | Allocations | Caller         | Location                  |
| -----: | -------: | ----------: | -------------- | ------------------------- |
| 100.0% | 61.4 MiB |      27,537 | `reformat_one` | `./black/__init__.py:860` |

##### `format_file_contents` (`./black/__init__.py:1054`)

|      % |     Size | Allocations | Caller                 | Location                  |
| -----: | -------: | ----------: | ---------------------- | ------------------------- |
| 100.0% | 61.2 MiB |      27,534 | `format_file_in_place` | `./black/__init__.py:917` |

##### `format_str` (`./black/__init__.py:1189`)

|      % |   Size | Allocations | Caller                 | Location                   |
| -----: | -----: | ----------: | ---------------------- | -------------------------- |
| 100.0% | 51 MiB |      26,551 | `format_file_contents` | `./black/__init__.py:1054` |

##### `_format_str_once` (`./black/__init__.py:1236`)

|      % |   Size | Allocations | Caller       | Location                   |
| -----: | -----: | ----------: | ------------ | -------------------------- |
| 100.0% | 51 MiB |      26,550 | `format_str` | `./black/__init__.py:1189` |

##### `visit` (`./black/nodes.py:163`)

|      % |     Size | Allocations | Caller             | Location                   |
| -----: | -------: | ----------: | ------------------ | -------------------------- |
| 100.0% | 26.6 MiB |      26,393 | `_format_str_once` | `./black/__init__.py:1236` |
| 100.0% | 26.6 MiB |      26,392 | `visit_default`    | `./black/nodes.py:187`     |
|  97.8% |   26 MiB |      25,384 | `visit_funcdef`    | `./black/linegen.py:254`   |
|  94.6% | 25.1 MiB |      25,610 | `visit_stmt`       | `./black/linegen.py:199`   |
|   0.5% |  131 KiB |         232 | `visit_decorators` | `./black/linegen.py:335`   |

##### `visit_default` (`./black/nodes.py:187`)

|      % |     Size | Allocations | Caller          | Location                 |
| -----: | -------: | ----------: | --------------- | ------------------------ |
| 100.0% | 26.6 MiB |      26,392 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |     Size | Allocations | Caller              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 26.6 MiB |      26,392 | `visit`             | `./black/nodes.py:163`   |
|  97.9% |   26 MiB |      25,386 | `visit_suite`       | `./black/linegen.py:288` |
|  69.8% | 18.5 MiB |      15,456 | `visit_simple_stmt` | `./black/linegen.py:295` |
|  34.9% | 9.26 MiB |       9,582 | `visit_power`       | `./black/linegen.py:341` |
|   2.2% |  610 KiB |       1,084 | `visit_INDENT`      | `./black/linegen.py:179` |

##### `visit_stmt` (`./black/linegen.py:199`)

|      % |     Size | Allocations | Caller  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 26.2 MiB |      25,804 | `visit` | `./black/nodes.py:163` |

##### `visit_suite` (`./black/linegen.py:288`)

|      % |   Size | Allocations | Caller  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 26 MiB |      25,386 | `visit` | `./black/nodes.py:163` |

##### `visit_funcdef` (`./black/linegen.py:254`)

|      % |   Size | Allocations | Caller  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 26 MiB |      25,384 | `visit` | `./black/nodes.py:163` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

|      % |     Size | Allocations | Caller  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 18.5 MiB |      15,457 | `visit` | `./black/nodes.py:163` |

##### `changed` (`./blib2to3/pytree.py:171`)

|      % |     Size | Allocations | Caller    | Location                   |
| -----: | -------: | ----------: | --------- | -------------------------- |
| 100.0% | 16.2 MiB |      25,907 | `prefix`  | `./blib2to3/pytree.py:480` |
|  12.3% |    2 MiB |           2 | `changed` | `./blib2to3/pytree.py:171` |

##### `prefix` (`./blib2to3/pytree.py:480`)

|     % |     Size | Allocations | Caller                      | Location                   |
| ----: | -------: | ----------: | --------------------------- | -------------------------- |
| 80.1% |   13 MiB |      23,654 | `normalize_trailing_prefix` | `./black/comments.py:127`  |
| 18.3% | 2.98 MiB |       1,777 | `prefix`                    | `./blib2to3/pytree.py:329` |
|  1.6% |  268 KiB |         476 | `wrap_in_parentheses`       | `./black/nodes.py:935`     |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|      % |     Size | Allocations | Caller          | Location                |
| -----: | -------: | ----------: | --------------- | ----------------------- |
| 100.0% | 16.1 MiB |          37 | `lib2to3_parse` | `./black/parsing.py:55` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

|      % |     Size | Allocations | Caller             | Location                   |
| -----: | -------: | ----------: | ------------------ | -------------------------- |
| 100.0% | 16.1 MiB |          37 | `_format_str_once` | `./black/__init__.py:1236` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

|      % |     Size | Allocations | Caller         | Location                         |
| -----: | -------: | ----------: | -------------- | -------------------------------- |
| 100.0% | 16.1 MiB |          36 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location                 |
| -----: | -------: | ----------: | ----------------------- | ------------------------ |
| 100.0% | 10.2 MiB |         983 | `_parse_single_version` | `./black/parsing.py:117` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

|      % |     Size | Allocations | Caller                | Location                                 |
| -----: | -------: | ----------: | --------------------- | ---------------------------------------- |
| 100.0% | 4.89 MiB |         873 | `run_module`          | `/usr/local/lib/python3.10/runpy.py:199` |
|  99.9% | 4.89 MiB |         870 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

|      % |     Size | Allocations | Caller           | Location                            |
| -----: | -------: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         870 | `_load_unlocked` | `<frozen importlib._bootstrap>:664` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

|      % |     Size | Allocations | Caller                    | Location                            |
| -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         870 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Caller           | Location                             |
| -----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 4.89 MiB |         870 | `_find_and_load` | `<frozen importlib._bootstrap>:1022` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

|      % |     Size | Allocations | Caller                      | Location                                                 |
| -----: | -------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 100.0% | 4.89 MiB |         870 | `_get_module_details`       | `/usr/local/lib/python3.10/runpy.py:103`                 |
|  79.1% | 3.87 MiB |         841 | `<module>`                  | `./black/__init__.py:1`                                  |
|  25.6% | 1.25 MiB |         206 | `<module>`                  | `./black/comments.py:1`                                  |
|   4.6% |  228 KiB |         233 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`                      |
|   4.2% |  211 KiB |         194 | `<module>`                  | `/venv/lib/python3.10/site-packages/click/__init__.py:1` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Allocations | Caller                    | Location                                     |
| ----: | -------: | ----------: | ------------------------- | -------------------------------------------- |
| 79.4% | 3.88 MiB |         854 | `exec_module`             | `<frozen importlib._bootstrap_external>:877` |
| 62.8% | 3.07 MiB |         108 | `source_to_code`          | `<frozen importlib._bootstrap_external>:942` |
|  4.4% |  219 KiB |         222 | `_handle_fromlist`        | `<frozen importlib._bootstrap>:1053`         |
|  0.6% | 30.3 KiB |          39 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987`          |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

|      % |     Size | Allocations | Caller        | Location                                     |
| -----: | -------: | ----------: | ------------- | -------------------------------------------- |
| 100.0% | 3.23 MiB |         263 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

|      % |     Size | Allocations | Caller     | Location                                     |
| -----: | -------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 3.07 MiB |         108 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `decode` (`/usr/local/lib/python3.10/codecs.py:319`)

|      % |    Size | Allocations | Caller         | Location                   |
| -----: | ------: | ----------: | -------------- | -------------------------- |
| 100.0% | 222 KiB |           1 | `decode_bytes` | `./black/__init__.py:1290` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

|     % |     Size | Allocations | Caller     | Location                                                             |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------------- |
| 41.0% | 89.7 KiB |          77 | `<module>` | `./black/nodes.py:1`                                                 |
| 40.6% | 88.8 KiB |          98 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`                 |
| 37.7% | 82.4 KiB |          73 | `<module>` | `./blib2to3/pygram.py:1`                                             |
|  9.7% | 21.1 KiB |          28 | `<module>` | `/venv/lib/python3.10/site-packages/pathspec/patterns/__init__.py:1` |
|  8.0% | 17.5 KiB |          23 | `<module>` | `./blib2to3/pgen2/driver.py:1`                                       |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Caller     | Location                                     |
| -----: | ------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 45.1% | 30.2 KiB |          36 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`          |
| 23.5% | 15.7 KiB |          17 | `<module>` | `./black/trans.py:1`                                           |
| 20.6% | 13.8 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`           |
| 10.8% | 7.25 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:1` |

##### `_compile` (`/usr/local/lib/python3.10/re.py:288`)

|     % |     Size | Allocations | Caller    | Location                              |
| ----: | -------: | ----------: | --------- | ------------------------------------- |
| 91.2% | 50.7 KiB |          45 | `compile` | `/usr/local/lib/python3.10/re.py:249` |
|  4.0% | 2.24 KiB |           3 | `match`   | `/usr/local/lib/python3.10/re.py:187` |
|  3.6% | 1.99 KiB |           3 | `findall` | `/usr/local/lib/python3.10/re.py:232` |
|  1.2% |    664 B |           1 | `split`   | `/usr/local/lib/python3.10/re.py:222` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Caller     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 54.8 KiB |          51 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `compile` (`/usr/local/lib/python3.10/re.py:249`)

|     % |     Size | Allocations | Caller            | Location                                                         |
| ----: | -------: | ----------: | ----------------- | ---------------------------------------------------------------- |
| 28.0% | 14.2 KiB |           9 | `<module>`        | `./blib2to3/pgen2/tokenize.py:1`                                 |
| 21.3% | 10.8 KiB |           4 | `Specifier`       | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:220` |
| 12.7% | 6.42 KiB |           9 | `_cached_compile` | `./black/strings.py:164`                                         |
| 10.2% | 5.19 KiB |           6 | `<module>`        | `/venv/lib/python3.10/site-packages/tomli/_re.py:1`              |
|  9.3% |  4.7 KiB |           5 | `Version`         | `/venv/lib/python3.10/site-packages/packaging/version.py:340`    |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Caller   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 24.4 KiB |          27 | `parse`  | `/usr/local/lib/python3.10/sre_parse.py:944` |
|  95.6% | 23.4 KiB |          25 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

|     % |     Size | Allocations | Callee                | Location                                 |
| ----: | -------: | ----------: | --------------------- | ---------------------------------------- |
| 92.6% | 61.4 MiB |      27,574 | `_run_module_code`    | `/usr/local/lib/python3.10/runpy.py:89`  |
|  7.4% | 4.89 MiB |         873 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location                                 |
| -----: | -------: | ----------: | ------------ | ---------------------------------------- |
| 100.0% | 66.3 MiB |      28,448 | `run_module` | `/usr/local/lib/python3.10/runpy.py:199` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

|      % |     Size | Allocations | Callee      | Location                                |
| -----: | -------: | ----------: | ----------- | --------------------------------------- |
| 100.0% | 61.4 MiB |      27,573 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

|      % |     Size | Allocations | Callee     | Location                |
| -----: | -------: | ----------: | ---------- | ----------------------- |
| 100.0% | 61.4 MiB |      27,572 | `<module>` | `./black/__main__.py:1` |

##### `__call__` (`/venv/lib/python3.10/site-packages/click/core.py:1651`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,571 | `main` | `/venv/lib/python3.10/site-packages/click/core.py:1483` |

##### `patched_main` (`./black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,572 | `__call__` | `/venv/lib/python3.10/site-packages/click/core.py:1651` |

##### `<module>` (`./black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 61.4 MiB |      27,572 | `patched_main` | `./black/__init__.py:1594` |

##### `main` (`/venv/lib/python3.10/site-packages/click/core.py:1483`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,554 | `invoke`       | `/venv/lib/python3.10/site-packages/click/core.py:1400` |
|  <0.1% | 10.9 KiB |          16 | `make_context` | `/venv/lib/python3.10/site-packages/click/core.py:1330` |
|  <0.1% |     32 B |           1 | `__enter__`    | `/venv/lib/python3.10/site-packages/click/core.py:553`  |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:1400`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 61.4 MiB |      27,552 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:861` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 61.4 MiB |      27,550 | `new_func` | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                  |
| -----: | -------: | ----------: | ------ | ------------------------- |
| 100.0% | 61.4 MiB |      27,548 | `main` | `./black/__init__.py:244` |

##### `main` (`./black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                  |
| -----: | -------: | ----------: | -------------- | ------------------------- |
| 100.0% | 61.4 MiB |      27,539 | `reformat_one` | `./black/__init__.py:860` |
|  <0.1% |    4 KiB |           5 | `get_sources`  | `./black/__init__.py:724` |
|  <0.1% |    576 B |           1 | `__init__`     | `<string>:2`              |

##### `reformat_one` (`./black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                  |
| -----: | -------: | ----------: | ---------------------- | ------------------------- |
| 100.0% | 61.4 MiB |      27,537 | `format_file_in_place` | `./black/__init__.py:917` |

##### `format_file_in_place` (`./black/__init__.py:917`)

|     % |     Size | Allocations | Callee                 | Location                   |
| ----: | -------: | ----------: | ---------------------- | -------------------------- |
| 99.6% | 61.2 MiB |      27,534 | `format_file_contents` | `./black/__init__.py:1054` |
|  0.4% |  223 KiB |           2 | `decode_bytes`         | `./black/__init__.py:1290` |

##### `format_file_contents` (`./black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                   |
| ----: | -------: | ----------: | --------------------------------- | -------------------------- |
| 83.3% |   51 MiB |      26,551 | `format_str`                      | `./black/__init__.py:1189` |
| 16.7% | 10.2 MiB |         983 | `check_stability_and_equivalence` | `./black/__init__.py:1037` |

##### `format_str` (`./black/__init__.py:1189`)

|      % |   Size | Allocations | Callee             | Location                   |
| -----: | -----: | ----------: | ------------------ | -------------------------- |
| 100.0% | 51 MiB |      26,550 | `_format_str_once` | `./black/__init__.py:1236` |

##### `_format_str_once` (`./black/__init__.py:1236`)

|     % |     Size | Allocations | Callee              | Location                  |
| ----: | -------: | ----------: | ------------------- | ------------------------- |
| 52.1% | 26.6 MiB |      26,393 | `visit`             | `./black/nodes.py:163`    |
| 31.5% | 16.1 MiB |          37 | `lib2to3_parse`     | `./black/parsing.py:55`   |
| 13.9% | 7.09 MiB |         106 | `transform_line`    | `./black/linegen.py:601`  |
|  2.0% |    1 MiB |           3 | `maybe_empty_lines` | `./black/lines.py:560`    |
| <0.1% | 22.1 KiB |           7 | `normalize_fmt_off` | `./black/comments.py:168` |

##### `visit` (`./black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 26.6 MiB |      26,392 | `visit_default`     | `./black/linegen.py:134` |
|  98.7% | 26.2 MiB |      25,804 | `visit_stmt`        | `./black/linegen.py:199` |
|  97.9% |   26 MiB |      25,386 | `visit_suite`       | `./black/linegen.py:288` |
|  97.8% |   26 MiB |      25,384 | `visit_funcdef`     | `./black/linegen.py:254` |
|  69.8% | 18.5 MiB |      15,457 | `visit_simple_stmt` | `./black/linegen.py:295` |

##### `visit_default` (`./black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 26.6 MiB |      26,392 | `visit` | `./black/nodes.py:163` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 26.6 MiB |      26,392 | `visit_default`     | `./black/nodes.py:187`   |
|  56.4% |   15 MiB |      23,656 | `generate_comments` | `./black/comments.py:52` |
|  19.1% | 5.07 MiB |         102 | `append`            | `./black/lines.py:63`    |

##### `visit_stmt` (`./black/linegen.py:199`)

|     % |     Size | Allocations | Callee                       | Location                  |
| ----: | -------: | ----------: | ---------------------------- | ------------------------- |
| 95.8% | 25.1 MiB |      25,610 | `visit`                      | `./black/nodes.py:163`    |
| 12.7% | 3.34 MiB |       2,441 | `normalize_invisible_parens` | `./black/linegen.py:1328` |

##### `visit_suite` (`./black/linegen.py:288`)

|      % |   Size | Allocations | Callee          | Location                 |
| -----: | -----: | ----------: | --------------- | ------------------------ |
| 100.0% | 26 MiB |      25,386 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

|      % |   Size | Allocations | Callee  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 26 MiB |      25,384 | `visit` | `./black/nodes.py:163` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location                 |
| -----: | -------: | ----------: | --------------- | ------------------------ |
| 100.0% | 18.5 MiB |      15,456 | `visit_default` | `./black/linegen.py:134` |
|  <0.1% |    672 B |           1 | `is_stub_suite` | `./black/nodes.py:801`   |

##### `changed` (`./blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Callee    | Location                   |
| ----: | ----: | ----------: | --------- | -------------------------- |
| 12.3% | 2 MiB |           2 | `changed` | `./blib2to3/pytree.py:171` |

##### `prefix` (`./blib2to3/pytree.py:480`)

|      % |     Size | Allocations | Callee    | Location                   |
| -----: | -------: | ----------: | --------- | -------------------------- |
| 100.0% | 16.2 MiB |      25,907 | `changed` | `./blib2to3/pytree.py:171` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|      % |     Size | Allocations | Callee         | Location                         |
| -----: | -------: | ----------: | -------------- | -------------------------------- |
| 100.0% | 16.1 MiB |          36 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

|      % |     Size | Allocations | Callee         | Location                         |
| -----: | -------: | ----------: | -------------- | -------------------------------- |
| 100.0% | 16.1 MiB |          37 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

|     % |   Size | Allocations | Callee     | Location                        |
| ----: | -----: | ----------: | ---------- | ------------------------------- |
| 93.7% | 15 MiB |          24 | `addtoken` | `./blib2to3/pgen2/parse.py:242` |
|  6.2% |  1 MiB |           1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

|     % |     Size | Allocations | Callee                | Location                                         |
| ----: | -------: | ----------: | --------------------- | ------------------------------------------------ |
| 99.9% | 4.89 MiB |         870 | `_find_and_load`      | `<frozen importlib._bootstrap>:1022`             |
| 99.9% | 4.89 MiB |         870 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103`         |
| <0.1% |    2 KiB |           1 | `find_spec`           | `/usr/local/lib/python3.10/importlib/util.py:73` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

|     % |     Size | Allocations | Callee                      | Location                                     |
| ----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
| 79.4% | 3.88 MiB |         854 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
| 66.0% | 3.23 MiB |         263 | `get_code`                  | `<frozen importlib._bootstrap_external>:950` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

|      % |     Size | Allocations | Callee        | Location                                     |
| -----: | -------: | ----------: | ------------- | -------------------------------------------- |
| 100.0% | 4.89 MiB |         870 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         870 | `_load_unlocked`            | `<frozen importlib._bootstrap>:664` |
|   0.6% | 30.3 KiB |          39 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |
|   0.2% | 8.16 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:921` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

|      % |     Size | Allocations | Callee                    | Location                            |
| -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         870 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Allocations | Callee           | Location                                                 |
| ----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 79.4% | 3.88 MiB |         854 | `<module>`       | `./black/__init__.py:1`                                  |
| 25.7% | 1.26 MiB |         209 | `<module>`       | `./black/comments.py:1`                                  |
| 25.6% | 1.25 MiB |         204 | `<module>`       | `./black/nodes.py:1`                                     |
|  4.6% |  228 KiB |         233 | `_find_and_load` | `<frozen importlib._bootstrap>:1022`                     |
|  4.3% |  215 KiB |         195 | `<module>`       | `/venv/lib/python3.10/site-packages/click/__init__.py:1` |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

|     % |     Size | Allocations | Callee              | Location                                      |
| ----: | -------: | ----------: | ------------------- | --------------------------------------------- |
| 95.2% | 3.07 MiB |         108 | `source_to_code`    | `<frozen importlib._bootstrap_external>:942`  |
|  4.8% |  159 KiB |         154 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:670`  |
| <0.1% |    536 B |           1 | `_cache_bytecode`   | `<frozen importlib._bootstrap_external>:1094` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.07 MiB |         108 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 219 KiB |         222 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|    % |     Size | Allocations | Callee              | Location                                   |
| ---: | -------: | ----------: | ------------------- | ------------------------------------------ |
| 1.7% | 1.13 KiB |           2 | `__init_subclass__` | `/usr/local/lib/python3.10/typing.py:1350` |

##### `_compile` (`/usr/local/lib/python3.10/re.py:288`)

|     % |     Size | Allocations | Callee    | Location                                       |
| ----: | -------: | ----------: | --------- | ---------------------------------------------- |
| 98.6% | 54.8 KiB |          51 | `compile` | `/usr/local/lib/python3.10/sre_compile.py:783` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|     % |     Size | Allocations | Callee  | Location                                       |
| ----: | -------: | ----------: | ------- | ---------------------------------------------- |
| 44.6% | 24.4 KiB |          27 | `parse` | `/usr/local/lib/python3.10/sre_parse.py:944`   |
| 14.2% | 7.78 KiB |          12 | `_code` | `/usr/local/lib/python3.10/sre_compile.py:622` |

##### `compile` (`/usr/local/lib/python3.10/re.py:249`)

|      % |     Size | Allocations | Callee     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 50.7 KiB |          45 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Callee   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 24.4 KiB |          27 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

## Hottest call stacks

Call stacks with the most bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`/usr/local/lib/python3.10/runpy.py:199`) ← `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.4% | 10.2 MiB |         983 | `parse` (`/usr/local/lib/python3.10/ast.py:33`) ← `_parse_single_version` (`./black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`./black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  9.1% |    6 MiB |          11 | `__init__` (`./blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`./blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.1% | 2.02 MiB |          45 | `run_transformer` (`./black/linegen.py:1755`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.0% | 2.01 MiB |          27 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:942`) ← `get_code` (950) ← `exec_module` (877) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.0% |    2 MiB |           3 | `convert` (`./blib2to3/pytree.py:486`) ← `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.0% |    2 MiB |           2 | `__init__` (`./blib2to3/pytree.py:400`) ← `convert` (486) ← `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.0% |    2 MiB |           2 | `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.6% | 1.05 MiB |          85 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `prev_siblings_are` (`./black/nodes.py:459`) ← `is_docstring` (558) ← `visit_STRING` (`./black/linegen.py:413`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.5% | 1.01 MiB |          17 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`./black/nodes.py:441`) ← `whitespace` (194) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.5% | 1.01 MiB |          15 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:942`) ← `get_code` (950) ← `exec_module` (877) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.5% |    1 MiB |           2 | `maybe_empty_lines` (`./black/lines.py:560`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.5% |    1 MiB |           2 | `hug_power_op` (`./black/trans.py:85`) ← `run_transformer` (`./black/linegen.py:1755`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.5% |    1 MiB |           1 | `__init__` (`./blib2to3/pgen2/pgen.py:376`) ← `parse_atom` (329) ← `parse_item` (309) ← `parse_alt` (300) ← `parse_rhs` (283) ← `parse_atom` (329) ← `parse_item` (309) ← `parse_alt` (300) ← `parse_rhs` (283) ← `parse` (175) ← `__init__` (34) ← `generate_grammar` (426) ← `load_grammar` (`./blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`./blib2to3/pygram.py:165`) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.5% |    1 MiB |           1 | `__new__` (`./blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.5% |    1 MiB |           1 | `_addtoken` (`./blib2to3/pgen2/parse.py:290`) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.5% |    1 MiB |           1 | `push` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% |    1 MiB |           1 | `generate_tokens` (`./blib2to3/pgen2/tokenize.py:565`) ← `__next__` (`./blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.5% |    1 MiB |           1 | `__new__` (`./blib2to3/pytree.py:81`) ← `clone` (452) ← `hug_power_op` (`./black/trans.py:85`) ← `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.5% |    1 MiB |           1 | `__str__` (`./blib2to3/pytree.py:440`) ← `__str__` (`./black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.5% |    1 MiB |           1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89) |

# Leaked memory profile

Leaked 57.6 MiB over 27,439 allocations (2.15 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 90.2% |   52 MiB |      26,732 |
| Standard library |  9.4% | 5.44 MiB |         492 |
| Third-party      |  0.4% |  216 KiB |         215 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 57.6 MiB (100.0%) _run_tracker at /venv/lib/python3.10/site-packages/memray/commands/run.py:40
    └── 57.6 MiB (100.0%) run_module at /usr/local/lib/python3.10/runpy.py:199
        ├── … 52.7 MiB (91.5%) format_file_contents at ./black/__init__.py:1054
        │   ├── 36.1 MiB (62.6%) format_str at 1189
        │   │   └── 36.1 MiB (62.6%) _format_str_once at 1236
        │   │       ├── … 16 MiB (27.8%) parse_tokens at ./blib2to3/pgen2/driver.py:114
        │   │       │   ├── 15 MiB (26.0%) addtoken at ./blib2to3/pgen2/parse.py:242
        │   │       │   │   └── 15 MiB (26.0%, self 1.7%) _addtoken at 290
        │   │       │   │       ├── 7 MiB (12.1%, self 3.5%) shift at 373
        │   │       │   │       │   └── 5 MiB (8.7%, self 3.5%) convert at ./blib2to3/pytree.py:486
        │   │       │   │       │       ├── 2 MiB (3.5%) __init__ at 400
        │   │       │   │       │       └── 1 MiB (1.7%, self 5.2% globally) __new__ at 81
        │   │       │   │       ├── 6 MiB (10.4%) pop at 398
        │   │       │   │       │   └── 6 MiB (10.4%) convert at ./blib2to3/pytree.py:486
        │   │       │   │       │       └── 6 MiB (10.4%) __init__ at 248
        │   │       │   │       └── 1 MiB (1.7%) push at 386
        │   │       │   └── 1 MiB (1.7%) __next__ at 80
        │   │       │       └── 1 MiB (1.7%) generate_tokens at ./blib2to3/pgen2/tokenize.py:565
        │   │       ├── 12 MiB (20.9%) visit at ./black/nodes.py:163
        │   │       │   ├── … 8.01 MiB (13.9%, self 1.7%) visit_default at ./black/linegen.py:134
        │   │       │   │   ├── 5.01 MiB (8.7%) append at ./black/lines.py:63
        │   │       │   │   │   └── 5.01 MiB (8.7%) whitespace at ./black/nodes.py:194
        │   │       │   │   │       ├── 3 MiB (5.2%, self 1.7%, self 3.5% globally) prev_sibling at ./blib2to3/pytree.py:207
        │   │       │   │   │       │   └── 2 MiB (3.5%, self 7.2% globally) update_sibling_maps at 369
        │   │       │   │   │       └── 2 MiB (3.5%) preceding_leaf at 441 …
        │   │       │   │   └── 2 MiB (3.5%) generate_comments at ./black/comments.py:52
        │   │       │   └── 4.02 MiB (7.0%) 7 more callees, led by (3.5%) visit_stmt at ./black/linegen.py:199
        │   │       ├── 7.02 MiB (12.2%) transform_line at ./black/linegen.py:601
        │   │       │   ├── 4.01 MiB (7.0%, self 3.5%) run_transformer at 1755
        │   │       │   │   └── 2 MiB (3.5%) 2 more callees, led by (3.5%) hug_power_op at ./black/trans.py:85
        │   │       │   └── 3 MiB (5.2%) 2 more callees, led by (3.5%) line_to_string at ./black/lines.py:1073
        │   │       └── 1 MiB (1.7%, self 1.7%) maybe_empty_lines at ./black/lines.py:560
        │   └── 16.6 MiB (28.8%) check_stability_and_equivalence at 1037
        │       ├── … 14.5 MiB (25.2%) visit at ./black/nodes.py:163
        │       │   ├── … 11.2 MiB (19.4%, self 28.2% globally) changed at ./blib2to3/pytree.py:171
        │       │   └── 3.33 MiB (5.8%) 7 more callees, led by (2.3%) visit_stmt at ./black/linegen.py:199
        │       └── … 2 MiB (3.5%) parse at /usr/local/lib/python3.10/ast.py:33
        └── … 4.88 MiB (8.5%) exec_module at <frozen importlib._bootstrap_external>:877
            ├── … 3.07 MiB (5.3%) _call_with_frames_removed at <frozen importlib._bootstrap>:233
            └── 1.65 MiB (2.9%) _call_with_frames_removed at <frozen importlib._bootstrap>:233 …
```

## Hottest functions

### Self size

Functions with the most bytes never freed within the function body, excluding callees.

|     % |     Size | Allocations | Function                    | Location                              |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------- |
| 28.2% | 16.2 MiB |      25,907 | `changed`                   | `./blib2to3/pytree.py:171`            |
| 10.4% |    6 MiB |          11 | `__init__`                  | `./blib2to3/pytree.py:248`            |
|  7.2% | 4.14 MiB |         199 | `update_sibling_maps`       | `./blib2to3/pytree.py:369`            |
|  5.3% | 3.07 MiB |         108 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`   |
|  5.2% |    3 MiB |           3 | `__new__`                   | `./blib2to3/pytree.py:81`             |
|  3.5% | 2.03 MiB |          48 | `run_transformer`           | `./black/linegen.py:1755`             |
|  3.5% |    2 MiB |           3 | `convert`                   | `./blib2to3/pytree.py:486`            |
|  3.5% |    2 MiB |           2 | `__init__`                  | `./blib2to3/pytree.py:400`            |
|  3.5% |    2 MiB |           2 | `shift`                     | `./blib2to3/pgen2/parse.py:373`       |
|  3.5% |    2 MiB |           2 | `prev_sibling`              | `./blib2to3/pytree.py:207`            |
|  3.5% |    2 MiB |           2 | `generate_comments`         | `./black/comments.py:52`              |
|  3.5% |    2 MiB |           2 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33` |
|  1.7% |    1 MiB |           3 | `generate_tokens`           | `./blib2to3/pgen2/tokenize.py:565`    |
|  1.7% |    1 MiB |           2 | `maybe_empty_lines`         | `./black/lines.py:560`                |
|  1.7% |    1 MiB |           2 | `hug_power_op`              | `./black/trans.py:85`                 |
|  1.7% |    1 MiB |           2 | `__init__`                  | `<string>:2`                          |
|  1.7% |    1 MiB |           1 | `__init__`                  | `./blib2to3/pgen2/pgen.py:376`        |
|  1.7% |    1 MiB |           1 | `_addtoken`                 | `./blib2to3/pgen2/parse.py:290`       |
|  1.7% |    1 MiB |           1 | `push`                      | `./blib2to3/pgen2/parse.py:386`       |
|  1.7% |    1 MiB |           1 | `visit_default`             | `./black/linegen.py:134`              |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Allocations | Function              | Location                           |
| ----: | -------: | ----------: | --------------------- | ---------------------------------- |
| 28.2% | 16.2 MiB |      25,907 | `changed`             | `./blib2to3/pytree.py:171`         |
| 10.4% |    6 MiB |          11 | `__init__`            | `./blib2to3/pytree.py:248`         |
|  7.2% | 4.14 MiB |         199 | `update_sibling_maps` | `./blib2to3/pytree.py:369`         |
|  5.2% |    3 MiB |           3 | `__new__`             | `./blib2to3/pytree.py:81`          |
|  3.5% | 2.03 MiB |          48 | `run_transformer`     | `./black/linegen.py:1755`          |
|  3.5% |    2 MiB |           3 | `convert`             | `./blib2to3/pytree.py:486`         |
|  3.5% |    2 MiB |           2 | `__init__`            | `./blib2to3/pytree.py:400`         |
|  3.5% |    2 MiB |           2 | `shift`               | `./blib2to3/pgen2/parse.py:373`    |
|  3.5% |    2 MiB |           2 | `prev_sibling`        | `./blib2to3/pytree.py:207`         |
|  3.5% |    2 MiB |           2 | `generate_comments`   | `./black/comments.py:52`           |
|  1.7% |    1 MiB |           3 | `generate_tokens`     | `./blib2to3/pgen2/tokenize.py:565` |
|  1.7% |    1 MiB |           2 | `maybe_empty_lines`   | `./black/lines.py:560`             |
|  1.7% |    1 MiB |           2 | `hug_power_op`        | `./black/trans.py:85`              |
|  1.7% |    1 MiB |           2 | `__init__`            | `<string>:2`                       |
|  1.7% |    1 MiB |           1 | `__init__`            | `./blib2to3/pgen2/pgen.py:376`     |
|  1.7% |    1 MiB |           1 | `_addtoken`           | `./blib2to3/pgen2/parse.py:290`    |
|  1.7% |    1 MiB |           1 | `push`                | `./blib2to3/pgen2/parse.py:386`    |
|  1.7% |    1 MiB |           1 | `visit_default`       | `./black/linegen.py:134`           |
|  1.7% |    1 MiB |           1 | `__str__`             | `./blib2to3/pytree.py:440`         |
|  1.7% |    1 MiB |           1 | `__str__`             | `./black/lines.py:490`             |

##### Standard library

|     % |     Size | Allocations | Function                    | Location                                                |
| ----: | -------: | ----------: | --------------------------- | ------------------------------------------------------- |
|  5.3% | 3.07 MiB |         108 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`                     |
|  3.5% |    2 MiB |           2 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33`                   |
|  0.3% |  159 KiB |         154 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:670`            |
|  0.1% | 65.9 KiB |          67 | `__new__`                   | `/usr/local/lib/python3.10/abc.py:105`                  |
| <0.1% | 22.6 KiB |          12 | `compile`                   | `/usr/local/lib/python3.10/sre_compile.py:783`          |
| <0.1% | 16.3 KiB |          20 | `_parse_sub`                | `/usr/local/lib/python3.10/sre_parse.py:436`            |
| <0.1% | 15.8 KiB |          20 | `__new__`                   | `/usr/local/lib/python3.10/enum.py:180`                 |
| <0.1% | 11.2 KiB |           2 | `inner`                     | `/usr/local/lib/python3.10/typing.py:306`               |
| <0.1% | 9.78 KiB |          11 | `__new__`                   | `/usr/local/lib/python3.10/typing.py:2338`              |
| <0.1% |    8 KiB |           4 | `_fill_cache`               | `<frozen importlib._bootstrap_external>:1587`           |
| <0.1% | 7.78 KiB |          12 | `_compile`                  | `/usr/local/lib/python3.10/sre_compile.py:87`           |
| <0.1% | 7.61 KiB |           6 | `_parse`                    | `/usr/local/lib/python3.10/sre_parse.py:494`            |
| <0.1% | 7.42 KiB |          10 | `namedtuple`                | `/usr/local/lib/python3.10/collections/__init__.py:328` |
| <0.1% | 6.71 KiB |          11 | `__setattr__`               | `/usr/local/lib/python3.10/enum.py:470`                 |
| <0.1% | 6.11 KiB |           9 | `_set_new_attribute`        | `/usr/local/lib/python3.10/dataclasses.py:824`          |
| <0.1% |  4.5 KiB |           8 | `_process_class`            | `/usr/local/lib/python3.10/dataclasses.py:881`          |
| <0.1% | 4.46 KiB |           7 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:987`                     |
| <0.1% | 3.49 KiB |           4 | `<module>`                  | `/usr/local/lib/python3.10/pkgutil.py:1`                |
| <0.1% | 3.05 KiB |           2 | `<module>`                  | `/usr/local/lib/python3.10/secrets.py:1`                |
| <0.1% | 2.49 KiB |           1 | `rng`                       | `/usr/local/lib/python3.10/tempfile.py:142`             |

#### Lines

Lines with the largest contribution to each function's self size.

##### `changed` (`./blib2to3/pytree.py:171`)

|      % |     Size | Allocations | Location                   |
| -----: | -------: | ----------: | -------------------------- |
| 100.0% | 16.2 MiB |      25,907 | `./blib2to3/pytree.py:176` |

##### `__init__` (`./blib2to3/pytree.py:248`)

|      % |     Size | Allocations | Location                   |
| -----: | -------: | ----------: | -------------------------- |
| 100.0% |    6 MiB |           7 | `./blib2to3/pytree.py:269` |
|  <0.1% | 3.03 KiB |           4 | `./blib2to3/pytree.py:266` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                   |
| ----: | -------: | ----------: | -------------------------- |
| 74.1% | 3.07 MiB |          96 | `./blib2to3/pytree.py:377` |
| 24.3% |    1 MiB |          10 | `./blib2to3/pytree.py:379` |
|  1.7% |   71 KiB |          93 | `./blib2to3/pytree.py:376` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Location                            |
| -----: | -------: | ----------: | ----------------------------------- |
| 100.0% | 3.07 MiB |         108 | `<frozen importlib._bootstrap>:241` |

##### `__new__` (`./blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                  |
| -----: | ----: | ----------: | ------------------------- |
| 100.0% | 3 MiB |           3 | `./blib2to3/pytree.py:84` |

##### `run_transformer` (`./black/linegen.py:1755`)

|     % |   Size | Allocations | Location                  |
| ----: | -----: | ----------: | ------------------------- |
| 98.7% |  2 MiB |           2 | `./black/linegen.py:1766` |
|  1.3% | 26 KiB |          45 | `./black/linegen.py:1770` |

##### `convert` (`./blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Location                   |
| -----: | ----: | ----------: | -------------------------- |
| 100.0% | 2 MiB |           3 | `./blib2to3/pytree.py:503` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Location                   |
| -----: | ----: | ----------: | -------------------------- |
| 100.0% | 2 MiB |           2 | `./blib2to3/pytree.py:425` |

##### `shift` (`./blib2to3/pgen2/parse.py:373`)

|      % |  Size | Allocations | Location                        |
| -----: | ----: | ----------: | ------------------------------- |
| 100.0% | 2 MiB |           2 | `./blib2to3/pgen2/parse.py:383` |

##### `prev_sibling` (`./blib2to3/pytree.py:207`)

|      % |  Size | Allocations | Location                   |
| -----: | ----: | ----------: | -------------------------- |
| 100.0% | 2 MiB |           2 | `./blib2to3/pytree.py:219` |

##### `generate_comments` (`./black/comments.py:52`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 2 MiB |           2 | `./black/comments.py:72` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |  Size | Allocations | Location                              |
| -----: | ----: | ----------: | ------------------------------------- |
| 100.0% | 2 MiB |           2 | `/usr/local/lib/python3.10/ast.py:50` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:565`)

|     % |     Size | Allocations | Location                            |
| ----: | -------: | ----------: | ----------------------------------- |
| 99.5% |    1 MiB |           1 | `./blib2to3/pgen2/tokenize.py:879`  |
|  0.5% | 4.73 KiB |           2 | `./blib2to3/pgen2/tokenize.py:1103` |

##### `maybe_empty_lines` (`./black/lines.py:560`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 99.9% | 1 MiB |           1 | `./black/lines.py:584` |

##### `hug_power_op` (`./black/trans.py:85`)

|     % |  Size | Allocations | Location              |
| ----: | ----: | ----------: | --------------------- |
| 99.9% | 1 MiB |           1 | `./black/trans.py:95` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Location      |
| ----: | ----: | ----------: | ------------- |
| 99.9% | 1 MiB |           1 | `<string>:9`  |
|  0.1% | 576 B |           1 | `<string>:13` |

##### `__init__` (`./blib2to3/pgen2/pgen.py:376`)

|      % |  Size | Allocations | Location                       |
| -----: | ----: | ----------: | ------------------------------ |
| 100.0% | 1 MiB |           1 | `./blib2to3/pgen2/pgen.py:377` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Location                        |
| -----: | ----: | ----------: | ------------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pgen2/parse.py:314` |

##### `push` (`./blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                        |
| -----: | ----: | ----------: | ------------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pgen2/parse.py:394` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `./black/linegen.py:158` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|      % |  Size | Allocations | Location                   |
| -----: | ----: | ----------: | -------------------------- |
| 100.0% | 1 MiB |           1 | `./blib2to3/pytree.py:446` |

##### `__str__` (`./black/lines.py:490`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `./black/lines.py:496` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Location                                     |
| -----: | ------: | ----------: | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `<frozen importlib._bootstrap_external>:672` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |    Size | Allocations | Location                               |
| ----: | ------: | ----------: | -------------------------------------- |
| 94.1% |  62 KiB |          61 | `/usr/local/lib/python3.10/abc.py:106` |
|  5.9% | 3.9 KiB |           6 | `/usr/local/lib/python3.10/abc.py:107` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Location                                       |
| -----: | -------: | ----------: | ---------------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/local/lib/python3.10/sre_compile.py:804` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 16.3 KiB |          20 | `/usr/local/lib/python3.10/sre_parse.py:444` |

##### `__new__` (`/usr/local/lib/python3.10/enum.py:180`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 78.6% | 12.4 KiB |          14 | `/usr/local/lib/python3.10/enum.py:215` |
| 10.7% | 1.69 KiB |           3 | `/usr/local/lib/python3.10/enum.py:313` |
| 10.7% | 1.69 KiB |           3 | `/usr/local/lib/python3.10/enum.py:318` |

##### `inner` (`/usr/local/lib/python3.10/typing.py:306`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 11.2 KiB |           2 | `/usr/local/lib/python3.10/typing.py:309` |

##### `__new__` (`/usr/local/lib/python3.10/typing.py:2338`)

|      % |     Size | Allocations | Location                                   |
| -----: | -------: | ----------: | ------------------------------------------ |
| 100.0% | 9.78 KiB |          11 | `/usr/local/lib/python3.10/typing.py:2350` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1587`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1599` |

##### `_compile` (`/usr/local/lib/python3.10/sre_compile.py:87`)

|     % |     Size | Allocations | Location                                       |
| ----: | -------: | ----------: | ---------------------------------------------- |
| 41.7% | 3.24 KiB |           5 | `/usr/local/lib/python3.10/sre_compile.py:184` |
| 25.0% | 1.95 KiB |           3 | `/usr/local/lib/python3.10/sre_compile.py:164` |
| 25.0% | 1.95 KiB |           3 | `/usr/local/lib/python3.10/sre_compile.py:225` |
|  8.3% |    664 B |           1 | `/usr/local/lib/python3.10/sre_compile.py:172` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|     % |     Size | Allocations | Location                                     |
| ----: | -------: | ----------: | -------------------------------------------- |
| 20.9% | 1.59 KiB |           3 | `/usr/local/lib/python3.10/sre_parse.py:841` |
|  7.0% |    544 B |           1 | `/usr/local/lib/python3.10/sre_parse.py:755` |

##### `namedtuple` (`/usr/local/lib/python3.10/collections/__init__.py:328`)

|      % |     Size | Allocations | Location                                                |
| -----: | -------: | ----------: | ------------------------------------------------------- |
| 100.0% | 7.42 KiB |          10 | `/usr/local/lib/python3.10/collections/__init__.py:481` |

##### `__setattr__` (`/usr/local/lib/python3.10/enum.py:470`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 6.71 KiB |          11 | `/usr/local/lib/python3.10/enum.py:481` |

##### `_set_new_attribute` (`/usr/local/lib/python3.10/dataclasses.py:824`)

|      % |     Size | Allocations | Location                                       |
| -----: | -------: | ----------: | ---------------------------------------------- |
| 100.0% | 6.11 KiB |           9 | `/usr/local/lib/python3.10/dataclasses.py:830` |

##### `_process_class` (`/usr/local/lib/python3.10/dataclasses.py:881`)

|     % |     Size | Allocations | Location                                        |
| ----: | -------: | ----------: | ----------------------------------------------- |
| 62.5% | 2.81 KiB |           5 | `/usr/local/lib/python3.10/dataclasses.py:1088` |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:899`  |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:958`  |
| 12.5% |    576 B |           1 | `/usr/local/lib/python3.10/dataclasses.py:995`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 4.46 KiB |           7 | `<frozen importlib._bootstrap>:1012` |

##### `<module>` (`/usr/local/lib/python3.10/pkgutil.py:1`)

|     % |     Size | Allocations | Location                                   |
| ----: | -------: | ----------: | ------------------------------------------ |
| 42.5% | 1.48 KiB |           2 | `/usr/local/lib/python3.10/pkgutil.py:269` |
| 31.1% | 1.09 KiB |           1 | `/usr/local/lib/python3.10/pkgutil.py:137` |
| 26.4% |    944 B |           1 | `/usr/local/lib/python3.10/pkgutil.py:194` |

##### `<module>` (`/usr/local/lib/python3.10/secrets.py:1`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 81.6% | 2.49 KiB |           1 | `/usr/local/lib/python3.10/secrets.py:21` |
| 18.4% |    576 B |           1 | `/usr/local/lib/python3.10/secrets.py:16` |

##### `rng` (`/usr/local/lib/python3.10/tempfile.py:142`)

|      % |     Size | Allocations | Location                                    |
| -----: | -------: | ----------: | ------------------------------------------- |
| 100.0% | 2.49 KiB |           1 | `/usr/local/lib/python3.10/tempfile.py:146` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `changed` (`./blib2to3/pytree.py:171`)

|     % |     Size | Allocations | Caller    | Location                   |
| ----: | -------: | ----------: | --------- | -------------------------- |
| 87.7% | 14.2 MiB |      25,905 | `prefix`  | `./blib2to3/pytree.py:480` |
| 12.3% |    2 MiB |           2 | `changed` | `./blib2to3/pytree.py:171` |

##### `__init__` (`./blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                   |
| -----: | ----: | ----------: | --------- | -------------------------- |
| 100.0% | 6 MiB |          11 | `convert` | `./blib2to3/pytree.py:486` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 4.14 MiB |         199 | `prev_sibling` | `./blib2to3/pytree.py:207` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Caller           | Location                                     |
| -----: | -------: | ----------: | ---------------- | -------------------------------------------- |
| 100.0% | 3.07 MiB |         108 | `source_to_code` | `<frozen importlib._bootstrap_external>:942` |

##### `__new__` (`./blib2to3/pytree.py:81`)

|     % |  Size | Allocations | Caller    | Location                   |
| ----: | ----: | ----------: | --------- | -------------------------- |
| 66.7% | 2 MiB |           2 | `clone`   | `./blib2to3/pytree.py:452` |
| 33.3% | 1 MiB |           1 | `convert` | `./blib2to3/pytree.py:486` |

##### `run_transformer` (`./black/linegen.py:1755`)

|      % |     Size | Allocations | Caller           | Location                 |
| -----: | -------: | ----------: | ---------------- | ------------------------ |
| 100.0% | 2.03 MiB |          48 | `transform_line` | `./black/linegen.py:601` |

##### `convert` (`./blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Caller  | Location                        |
| -----: | ----: | ----------: | ------- | ------------------------------- |
| 100.0% | 2 MiB |           3 | `shift` | `./blib2to3/pgen2/parse.py:373` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Caller    | Location                   |
| -----: | ----: | ----------: | --------- | -------------------------- |
| 100.0% | 2 MiB |           2 | `convert` | `./blib2to3/pytree.py:486` |

##### `shift` (`./blib2to3/pgen2/parse.py:373`)

|      % |  Size | Allocations | Caller      | Location                        |
| -----: | ----: | ----------: | ----------- | ------------------------------- |
| 100.0% | 2 MiB |           2 | `_addtoken` | `./blib2to3/pgen2/parse.py:290` |

##### `prev_sibling` (`./blib2to3/pytree.py:207`)

|     % |  Size | Allocations | Caller           | Location               |
| ----: | ----: | ----------: | ---------------- | ---------------------- |
| 50.0% | 1 MiB |           1 | `preceding_leaf` | `./black/nodes.py:441` |
| 50.0% | 1 MiB |           1 | `whitespace`     | `./black/nodes.py:194` |

##### `generate_comments` (`./black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location                 |
| -----: | ----: | ----------: | --------------- | ------------------------ |
| 100.0% | 2 MiB |           2 | `visit_default` | `./black/linegen.py:134` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |  Size | Allocations | Caller                  | Location                 |
| -----: | ----: | ----------: | ----------------------- | ------------------------ |
| 100.0% | 2 MiB |           2 | `_parse_single_version` | `./black/parsing.py:117` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:565`)

|     % |     Size | Allocations | Caller     | Location                        |
| ----: | -------: | ----------: | ---------- | ------------------------------- |
| 99.5% |    1 MiB |           1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |
|  0.5% | 4.73 KiB |           2 | `gettoken` | `./blib2to3/pgen2/pgen.py:357`  |

##### `maybe_empty_lines` (`./black/lines.py:560`)

|      % |  Size | Allocations | Caller             | Location                   |
| -----: | ----: | ----------: | ------------------ | -------------------------- |
| 100.0% | 1 MiB |           2 | `_format_str_once` | `./black/__init__.py:1236` |

##### `hug_power_op` (`./black/trans.py:85`)

|      % |  Size | Allocations | Caller            | Location                  |
| -----: | ----: | ----------: | ----------------- | ------------------------- |
| 100.0% | 1 MiB |           2 | `run_transformer` | `./black/linegen.py:1755` |

##### `__init__` (`<string>:2`)

|     % |  Size | Allocations | Caller     | Location                  |
| ----: | ----: | ----------: | ---------- | ------------------------- |
| 99.9% | 1 MiB |           1 | `__init__` | `<string>:2`              |
|  0.1% | 576 B |           1 | `main`     | `./black/__init__.py:244` |

##### `__init__` (`./blib2to3/pgen2/pgen.py:376`)

|      % |  Size | Allocations | Caller       | Location                       |
| -----: | ----: | ----------: | ------------ | ------------------------------ |
| 100.0% | 1 MiB |           1 | `parse_atom` | `./blib2to3/pgen2/pgen.py:329` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:290`)

|      % |  Size | Allocations | Caller     | Location                        |
| -----: | ----: | ----------: | ---------- | ------------------------------- |
| 100.0% | 1 MiB |           1 | `addtoken` | `./blib2to3/pgen2/parse.py:242` |

##### `push` (`./blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                        |
| -----: | ----: | ----------: | ----------- | ------------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `./blib2to3/pgen2/parse.py:290` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |  Size | Allocations | Caller  | Location               |
| -----: | ----: | ----------: | ------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `visit` | `./black/nodes.py:163` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|      % |  Size | Allocations | Caller    | Location               |
| -----: | ----: | ----------: | --------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `__str__` | `./black/lines.py:490` |

##### `__str__` (`./black/lines.py:490`)

|      % |  Size | Allocations | Caller           | Location                |
| -----: | ----: | ----------: | ---------------- | ----------------------- |
| 100.0% | 1 MiB |           1 | `line_to_string` | `./black/lines.py:1073` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Caller     | Location                                     |
| -----: | ------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 44.2% | 29.1 KiB |          34 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`          |
| 23.9% | 15.7 KiB |          17 | `<module>` | `./black/trans.py:1`                                           |
| 20.9% | 13.8 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`           |
| 11.0% | 7.25 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:1` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Caller     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Caller   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 16.3 KiB |          20 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

##### `__new__` (`/usr/local/lib/python3.10/enum.py:180`)

|     % |     Size | Allocations | Caller     | Location                                                     |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------------ |
| 38.8% | 6.14 KiB |           9 | `<module>` | `./black/mode.py:1`                                          |
| 17.5% | 2.77 KiB |           3 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/_elffile.py:1` |
| 10.9% | 1.73 KiB |           2 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`         |
|  9.4% | 1.48 KiB |           2 | `<module>` | `/venv/lib/python3.10/site-packages/click/_utils.py:1`       |
|  5.8% |    944 B |           1 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/_ranges.py:1`  |

##### `inner` (`/usr/local/lib/python3.10/typing.py:306`)

|     % |     Size | Allocations | Caller        | Location                                  |
| ----: | -------: | ----------: | ------------- | ----------------------------------------- |
| 80.7% | 9.03 KiB |           1 | `Optional`    | `/usr/local/lib/python3.10/typing.py:523` |
| 19.3% | 2.16 KiB |           1 | `__getitem__` | `/usr/local/lib/python3.10/typing.py:407` |

##### `__new__` (`/usr/local/lib/python3.10/typing.py:2338`)

|     % |     Size | Allocations | Caller     | Location                                                    |
| ----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 90.6% | 8.86 KiB |          10 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`       |
|  9.4% |    944 B |           1 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/version.py:1` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1587`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1536` |

##### `_compile` (`/usr/local/lib/python3.10/sre_compile.py:87`)

|     % |     Size | Allocations | Caller     | Location                                       |
| ----: | -------: | ----------: | ---------- | ---------------------------------------------- |
| 58.3% | 4.54 KiB |           7 | `_compile` | `/usr/local/lib/python3.10/sre_compile.py:87`  |
| 41.7% | 3.24 KiB |           5 | `_code`    | `/usr/local/lib/python3.10/sre_compile.py:622` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|      % |     Size | Allocations | Caller       | Location                                     |
| -----: | -------: | ----------: | ------------ | -------------------------------------------- |
| 100.0% | 7.61 KiB |           6 | `_parse_sub` | `/usr/local/lib/python3.10/sre_parse.py:436` |

##### `namedtuple` (`/usr/local/lib/python3.10/collections/__init__.py:328`)

|     % |     Size | Allocations | Caller          | Location                                   |
| ----: | -------: | ----------: | --------------- | ------------------------------------------ |
| 80.0% | 5.94 KiB |           8 | `_make_nmtuple` | `/usr/local/lib/python3.10/typing.py:2247` |
| 20.0% | 1.48 KiB |           2 | `<module>`      | `/usr/local/lib/python3.10/pkgutil.py:1`   |

##### `__setattr__` (`/usr/local/lib/python3.10/enum.py:470`)

|      % |     Size | Allocations | Caller    | Location                                |
| -----: | -------: | ----------: | --------- | --------------------------------------- |
| 100.0% | 6.71 KiB |          11 | `__new__` | `/usr/local/lib/python3.10/enum.py:180` |

##### `_set_new_attribute` (`/usr/local/lib/python3.10/dataclasses.py:824`)

|      % |     Size | Allocations | Caller           | Location                                       |
| -----: | -------: | ----------: | ---------------- | ---------------------------------------------- |
| 100.0% | 6.11 KiB |           9 | `_process_class` | `/usr/local/lib/python3.10/dataclasses.py:881` |

##### `_process_class` (`/usr/local/lib/python3.10/dataclasses.py:881`)

|      % |    Size | Allocations | Caller | Location                                        |
| -----: | ------: | ----------: | ------ | ----------------------------------------------- |
| 100.0% | 4.5 KiB |           8 | `wrap` | `/usr/local/lib/python3.10/dataclasses.py:1174` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Caller           | Location                             |
| -----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 4.46 KiB |           7 | `_find_and_load` | `<frozen importlib._bootstrap>:1022` |

##### `<module>` (`/usr/local/lib/python3.10/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.49 KiB |           4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/usr/local/lib/python3.10/secrets.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.05 KiB |           2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `rng` (`/usr/local/lib/python3.10/tempfile.py:142`)

|      % |     Size | Allocations | Caller     | Location                                    |
| -----: | -------: | ----------: | ---------- | ------------------------------------------- |
| 100.0% | 2.49 KiB |           1 | `__next__` | `/usr/local/lib/python3.10/tempfile.py:153` |

### Total size

Functions with the most bytes never freed within the function and its callees.

|      % |     Size | Allocations | Function               | Location                                                       |
| -----: | -------: | ----------: | ---------------------- | -------------------------------------------------------------- |
| 100.0% | 57.6 MiB |      27,439 | `run_module`           | `/usr/local/lib/python3.10/runpy.py:199`                       |
| 100.0% | 57.6 MiB |      27,439 | `_run_tracker`         | `/venv/lib/python3.10/site-packages/memray/commands/run.py:40` |
|  91.5% | 52.7 MiB |      26,565 | `_run_module_code`     | `/usr/local/lib/python3.10/runpy.py:89`                        |
|  91.5% | 52.7 MiB |      26,564 | `_run_code`            | `/usr/local/lib/python3.10/runpy.py:63`                        |
|  91.5% | 52.7 MiB |      26,563 | `__call__`             | `/venv/lib/python3.10/site-packages/click/core.py:1651`        |
|  91.5% | 52.7 MiB |      26,563 | `patched_main`         | `./black/__init__.py:1594`                                     |
|  91.5% | 52.7 MiB |      26,563 | `<module>`             | `./black/__main__.py:1`                                        |
|  91.5% | 52.7 MiB |      26,562 | `main`                 | `/venv/lib/python3.10/site-packages/click/core.py:1483`        |
|  91.5% | 52.7 MiB |      26,545 | `new_func`             | `/venv/lib/python3.10/site-packages/click/decorators.py:33`    |
|  91.5% | 52.7 MiB |      26,545 | `invoke`               | `/venv/lib/python3.10/site-packages/click/core.py:861`         |
|  91.5% | 52.7 MiB |      26,545 | `invoke`               | `/venv/lib/python3.10/site-packages/click/core.py:1400`        |
|  91.5% | 52.7 MiB |      26,544 | `main`                 | `./black/__init__.py:244`                                      |
|  91.5% | 52.7 MiB |      26,534 | `reformat_one`         | `./black/__init__.py:860`                                      |
|  91.5% | 52.7 MiB |      26,530 | `format_file_in_place` | `./black/__init__.py:917`                                      |
|  91.5% | 52.7 MiB |      26,529 | `format_file_contents` | `./black/__init__.py:1054`                                     |
|  88.0% | 50.7 MiB |      26,525 | `_format_str_once`     | `./black/__init__.py:1236`                                     |
|  62.6% | 36.1 MiB |         129 | `format_str`           | `./black/__init__.py:1189`                                     |
|  46.1% | 26.6 MiB |      26,394 | `visit`                | `./black/nodes.py:163`                                         |
|  46.1% | 26.6 MiB |      26,393 | `visit_default`        | `./black/nodes.py:187`                                         |
|  46.1% | 26.6 MiB |      26,393 | `visit_default`        | `./black/linegen.py:134`                                       |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Allocations | Function                          | Location                         |
| ----: | -------: | ----------: | --------------------------------- | -------------------------------- |
| 91.5% | 52.7 MiB |      26,563 | `patched_main`                    | `./black/__init__.py:1594`       |
| 91.5% | 52.7 MiB |      26,563 | `<module>`                        | `./black/__main__.py:1`          |
| 91.5% | 52.7 MiB |      26,544 | `main`                            | `./black/__init__.py:244`        |
| 91.5% | 52.7 MiB |      26,534 | `reformat_one`                    | `./black/__init__.py:860`        |
| 91.5% | 52.7 MiB |      26,530 | `format_file_in_place`            | `./black/__init__.py:917`        |
| 91.5% | 52.7 MiB |      26,529 | `format_file_contents`            | `./black/__init__.py:1054`       |
| 88.0% | 50.7 MiB |      26,525 | `_format_str_once`                | `./black/__init__.py:1236`       |
| 62.6% | 36.1 MiB |         129 | `format_str`                      | `./black/__init__.py:1189`       |
| 46.1% | 26.6 MiB |      26,394 | `visit`                           | `./black/nodes.py:163`           |
| 46.1% | 26.6 MiB |      26,393 | `visit_default`                   | `./black/nodes.py:187`           |
| 46.1% | 26.6 MiB |      26,393 | `visit_default`                   | `./black/linegen.py:134`         |
| 45.5% | 26.2 MiB |      25,805 | `visit_stmt`                      | `./black/linegen.py:199`         |
| 45.1% |   26 MiB |      25,387 | `visit_suite`                     | `./black/linegen.py:288`         |
| 45.1% |   26 MiB |      25,385 | `visit_funcdef`                   | `./black/linegen.py:254`         |
| 32.2% | 18.5 MiB |      15,458 | `visit_simple_stmt`               | `./black/linegen.py:295`         |
| 28.8% | 16.6 MiB |      26,400 | `check_stability_and_equivalence` | `./black/__init__.py:1037`       |
| 28.2% | 16.2 MiB |      25,907 | `changed`                         | `./blib2to3/pytree.py:171`       |
| 28.2% | 16.2 MiB |      25,907 | `prefix`                          | `./blib2to3/pytree.py:480`       |
| 27.8% | 16.1 MiB |          37 | `parse_string`                    | `./blib2to3/pgen2/driver.py:198` |
| 27.8% | 16.1 MiB |          37 | `lib2to3_parse`                   | `./black/parsing.py:55`          |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                       |
| -----: | -------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 57.6 MiB |      27,439 | `run_module`                | `/usr/local/lib/python3.10/runpy.py:199`       |
|  91.5% | 52.7 MiB |      26,565 | `_run_module_code`          | `/usr/local/lib/python3.10/runpy.py:89`        |
|  91.5% | 52.7 MiB |      26,564 | `_run_code`                 | `/usr/local/lib/python3.10/runpy.py:63`        |
|   8.5% | 4.89 MiB |         873 | `_get_module_details`       | `/usr/local/lib/python3.10/runpy.py:103`       |
|   8.5% | 4.89 MiB |         870 | `exec_module`               | `<frozen importlib._bootstrap_external>:877`   |
|   8.5% | 4.89 MiB |         870 | `_load_unlocked`            | `<frozen importlib._bootstrap>:664`            |
|   8.5% | 4.89 MiB |         870 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:987`            |
|   8.5% | 4.89 MiB |         870 | `_find_and_load`            | `<frozen importlib._bootstrap>:1022`           |
|   8.5% | 4.89 MiB |         869 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`            |
|   5.6% | 3.23 MiB |         263 | `get_code`                  | `<frozen importlib._bootstrap_external>:950`   |
|   5.3% | 3.07 MiB |         108 | `source_to_code`            | `<frozen importlib._bootstrap_external>:942`   |
|   3.5% |    2 MiB |           2 | `parse`                     | `/usr/local/lib/python3.10/ast.py:33`          |
|   0.4% |  219 KiB |         222 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1053`           |
|   0.3% |  159 KiB |         154 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:670`   |
|   0.1% |   67 KiB |          69 | `__new__`                   | `/usr/local/lib/python3.10/abc.py:105`         |
|   0.1% | 55.6 KiB |          52 | `_compile`                  | `/usr/local/lib/python3.10/re.py:288`          |
|   0.1% | 54.8 KiB |          51 | `compile`                   | `/usr/local/lib/python3.10/sre_compile.py:783` |
|   0.1% | 50.7 KiB |          45 | `compile`                   | `/usr/local/lib/python3.10/re.py:249`          |
|  <0.1% | 24.4 KiB |          27 | `_parse_sub`                | `/usr/local/lib/python3.10/sre_parse.py:436`   |
|  <0.1% | 24.4 KiB |          27 | `_parse`                    | `/usr/local/lib/python3.10/sre_parse.py:494`   |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

|      % |     Size | Allocations | Caller         | Location                                                       |
| -----: | -------: | ----------: | -------------- | -------------------------------------------------------------- |
| 100.0% | 57.6 MiB |      27,439 | `_run_tracker` | `/venv/lib/python3.10/site-packages/memray/commands/run.py:40` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

|      % |     Size | Allocations | Caller       | Location                                 |
| -----: | -------: | ----------: | ------------ | ---------------------------------------- |
| 100.0% | 52.7 MiB |      26,565 | `run_module` | `/usr/local/lib/python3.10/runpy.py:199` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

|      % |     Size | Allocations | Caller             | Location                                |
| -----: | -------: | ----------: | ------------------ | --------------------------------------- |
| 100.0% | 52.7 MiB |      26,564 | `_run_module_code` | `/usr/local/lib/python3.10/runpy.py:89` |

##### `__call__` (`/venv/lib/python3.10/site-packages/click/core.py:1651`)

|      % |     Size | Allocations | Caller         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 52.7 MiB |      26,563 | `patched_main` | `./black/__init__.py:1594` |

##### `patched_main` (`./black/__init__.py:1594`)

|      % |     Size | Allocations | Caller     | Location                |
| -----: | -------: | ----------: | ---------- | ----------------------- |
| 100.0% | 52.7 MiB |      26,563 | `<module>` | `./black/__main__.py:1` |

##### `<module>` (`./black/__main__.py:1`)

|      % |     Size | Allocations | Caller      | Location                                |
| -----: | -------: | ----------: | ----------- | --------------------------------------- |
| 100.0% | 52.7 MiB |      26,563 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `main` (`/venv/lib/python3.10/site-packages/click/core.py:1483`)

|      % |     Size | Allocations | Caller     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 52.7 MiB |      26,562 | `__call__` | `/venv/lib/python3.10/site-packages/click/core.py:1651` |

##### `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Caller   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 52.7 MiB |      26,545 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:861` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`)

|      % |     Size | Allocations | Caller   | Location                                                |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------- |
| 100.0% | 52.7 MiB |      26,545 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:1400` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:1400`)

|      % |     Size | Allocations | Caller | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 52.7 MiB |      26,545 | `main` | `/venv/lib/python3.10/site-packages/click/core.py:1483` |

##### `main` (`./black/__init__.py:244`)

|      % |     Size | Allocations | Caller     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 52.7 MiB |      26,544 | `new_func` | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |

##### `reformat_one` (`./black/__init__.py:860`)

|      % |     Size | Allocations | Caller | Location                  |
| -----: | -------: | ----------: | ------ | ------------------------- |
| 100.0% | 52.7 MiB |      26,534 | `main` | `./black/__init__.py:244` |

##### `format_file_in_place` (`./black/__init__.py:917`)

|      % |     Size | Allocations | Caller         | Location                  |
| -----: | -------: | ----------: | -------------- | ------------------------- |
| 100.0% | 52.7 MiB |      26,530 | `reformat_one` | `./black/__init__.py:860` |

##### `format_file_contents` (`./black/__init__.py:1054`)

|      % |     Size | Allocations | Caller                 | Location                  |
| -----: | -------: | ----------: | ---------------------- | ------------------------- |
| 100.0% | 52.7 MiB |      26,529 | `format_file_in_place` | `./black/__init__.py:917` |

##### `_format_str_once` (`./black/__init__.py:1236`)

|     % |     Size | Allocations | Caller          | Location                   |
| ----: | -------: | ----------: | --------------- | -------------------------- |
| 71.2% | 36.1 MiB |         128 | `format_str`    | `./black/__init__.py:1189` |
| 28.8% | 14.6 MiB |      26,397 | `assert_stable` | `./black/__init__.py:1557` |

##### `format_str` (`./black/__init__.py:1189`)

|      % |     Size | Allocations | Caller                 | Location                   |
| -----: | -------: | ----------: | ---------------------- | -------------------------- |
| 100.0% | 36.1 MiB |         129 | `format_file_contents` | `./black/__init__.py:1054` |

##### `visit` (`./black/nodes.py:163`)

|      % |     Size | Allocations | Caller             | Location                   |
| -----: | -------: | ----------: | ------------------ | -------------------------- |
| 100.0% | 26.6 MiB |      26,394 | `_format_str_once` | `./black/__init__.py:1236` |
| 100.0% | 26.6 MiB |      26,393 | `visit_default`    | `./black/nodes.py:187`     |
|  97.8% |   26 MiB |      25,385 | `visit_funcdef`    | `./black/linegen.py:254`   |
|  94.6% | 25.1 MiB |      25,611 | `visit_stmt`       | `./black/linegen.py:199`   |
|   0.5% |  131 KiB |         232 | `visit_decorators` | `./black/linegen.py:335`   |

##### `visit_default` (`./black/nodes.py:187`)

|      % |     Size | Allocations | Caller          | Location                 |
| -----: | -------: | ----------: | --------------- | ------------------------ |
| 100.0% | 26.6 MiB |      26,393 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |     Size | Allocations | Caller              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 26.6 MiB |      26,393 | `visit`             | `./black/nodes.py:163`   |
|  97.9% |   26 MiB |      25,387 | `visit_suite`       | `./black/linegen.py:288` |
|  69.8% | 18.5 MiB |      15,457 | `visit_simple_stmt` | `./black/linegen.py:295` |
|  34.9% | 9.26 MiB |       9,582 | `visit_power`       | `./black/linegen.py:341` |
|   2.2% |  610 KiB |       1,084 | `visit_INDENT`      | `./black/linegen.py:179` |

##### `visit_stmt` (`./black/linegen.py:199`)

|      % |     Size | Allocations | Caller  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 26.2 MiB |      25,805 | `visit` | `./black/nodes.py:163` |

##### `visit_suite` (`./black/linegen.py:288`)

|      % |   Size | Allocations | Caller  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 26 MiB |      25,387 | `visit` | `./black/nodes.py:163` |

##### `visit_funcdef` (`./black/linegen.py:254`)

|      % |   Size | Allocations | Caller  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 26 MiB |      25,385 | `visit` | `./black/nodes.py:163` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

|      % |     Size | Allocations | Caller  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 18.5 MiB |      15,458 | `visit` | `./black/nodes.py:163` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1037`)

|      % |     Size | Allocations | Caller                 | Location                   |
| -----: | -------: | ----------: | ---------------------- | -------------------------- |
| 100.0% | 16.6 MiB |      26,400 | `format_file_contents` | `./black/__init__.py:1054` |

##### `changed` (`./blib2to3/pytree.py:171`)

|      % |     Size | Allocations | Caller    | Location                   |
| -----: | -------: | ----------: | --------- | -------------------------- |
| 100.0% | 16.2 MiB |      25,907 | `prefix`  | `./blib2to3/pytree.py:480` |
|  12.3% |    2 MiB |           2 | `changed` | `./blib2to3/pytree.py:171` |

##### `prefix` (`./blib2to3/pytree.py:480`)

|     % |     Size | Allocations | Caller                      | Location                   |
| ----: | -------: | ----------: | --------------------------- | -------------------------- |
| 80.1% |   13 MiB |      23,654 | `normalize_trailing_prefix` | `./black/comments.py:127`  |
| 18.3% | 2.98 MiB |       1,777 | `prefix`                    | `./blib2to3/pytree.py:329` |
|  1.6% |  268 KiB |         476 | `wrap_in_parentheses`       | `./black/nodes.py:935`     |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|      % |     Size | Allocations | Caller          | Location                |
| -----: | -------: | ----------: | --------------- | ----------------------- |
| 100.0% | 16.1 MiB |          37 | `lib2to3_parse` | `./black/parsing.py:55` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

|      % |     Size | Allocations | Caller             | Location                   |
| -----: | -------: | ----------: | ------------------ | -------------------------- |
| 100.0% | 16.1 MiB |          37 | `_format_str_once` | `./black/__init__.py:1236` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

|      % |     Size | Allocations | Caller                | Location                                 |
| -----: | -------: | ----------: | --------------------- | ---------------------------------------- |
| 100.0% | 4.89 MiB |         873 | `run_module`          | `/usr/local/lib/python3.10/runpy.py:199` |
|  99.9% | 4.89 MiB |         870 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

|      % |     Size | Allocations | Caller           | Location                            |
| -----: | -------: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         870 | `_load_unlocked` | `<frozen importlib._bootstrap>:664` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

|      % |     Size | Allocations | Caller                    | Location                            |
| -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         870 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Caller           | Location                             |
| -----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 4.89 MiB |         870 | `_find_and_load` | `<frozen importlib._bootstrap>:1022` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

|      % |     Size | Allocations | Caller                      | Location                                                 |
| -----: | -------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 100.0% | 4.89 MiB |         870 | `_get_module_details`       | `/usr/local/lib/python3.10/runpy.py:103`                 |
|  79.1% | 3.87 MiB |         841 | `<module>`                  | `./black/__init__.py:1`                                  |
|  25.6% | 1.25 MiB |         206 | `<module>`                  | `./black/comments.py:1`                                  |
|   4.6% |  228 KiB |         233 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`                      |
|   4.2% |  211 KiB |         194 | `<module>`                  | `/venv/lib/python3.10/site-packages/click/__init__.py:1` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Allocations | Caller                    | Location                                     |
| ----: | -------: | ----------: | ------------------------- | -------------------------------------------- |
| 79.4% | 3.88 MiB |         854 | `exec_module`             | `<frozen importlib._bootstrap_external>:877` |
| 62.8% | 3.07 MiB |         108 | `source_to_code`          | `<frozen importlib._bootstrap_external>:942` |
|  4.4% |  219 KiB |         222 | `_handle_fromlist`        | `<frozen importlib._bootstrap>:1053`         |
|  0.6% | 30.3 KiB |          39 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987`          |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

|      % |     Size | Allocations | Caller        | Location                                     |
| -----: | -------: | ----------: | ------------- | -------------------------------------------- |
| 100.0% | 3.23 MiB |         263 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

|      % |     Size | Allocations | Caller     | Location                                     |
| -----: | -------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 3.07 MiB |         108 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `parse` (`/usr/local/lib/python3.10/ast.py:33`)

|      % |  Size | Allocations | Caller                  | Location                 |
| -----: | ----: | ----------: | ----------------------- | ------------------------ |
| 100.0% | 2 MiB |           2 | `_parse_single_version` | `./black/parsing.py:117` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

|     % |     Size | Allocations | Caller     | Location                                                             |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------------- |
| 41.0% | 89.7 KiB |          77 | `<module>` | `./black/nodes.py:1`                                                 |
| 40.6% | 88.8 KiB |          98 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`                 |
| 37.7% | 82.4 KiB |          73 | `<module>` | `./blib2to3/pygram.py:1`                                             |
|  9.7% | 21.1 KiB |          28 | `<module>` | `/venv/lib/python3.10/site-packages/pathspec/patterns/__init__.py:1` |
|  8.0% | 17.5 KiB |          23 | `<module>` | `./blib2to3/pgen2/driver.py:1`                                       |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:670`)

|      % |    Size | Allocations | Caller     | Location                                     |
| -----: | ------: | ----------: | ---------- | -------------------------------------------- |
| 100.0% | 159 KiB |         154 | `get_code` | `<frozen importlib._bootstrap_external>:950` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 45.1% | 30.2 KiB |          36 | `<module>` | `/venv/lib/python3.10/site-packages/click/types.py:1`          |
| 23.5% | 15.7 KiB |          17 | `<module>` | `./black/trans.py:1`                                           |
| 20.6% | 13.8 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/click/core.py:1`           |
| 10.8% | 7.25 KiB |           8 | `<module>` | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:1` |

##### `_compile` (`/usr/local/lib/python3.10/re.py:288`)

|     % |     Size | Allocations | Caller    | Location                              |
| ----: | -------: | ----------: | --------- | ------------------------------------- |
| 91.2% | 50.7 KiB |          45 | `compile` | `/usr/local/lib/python3.10/re.py:249` |
|  4.0% | 2.24 KiB |           3 | `match`   | `/usr/local/lib/python3.10/re.py:187` |
|  3.6% | 1.99 KiB |           3 | `findall` | `/usr/local/lib/python3.10/re.py:232` |
|  1.2% |    664 B |           1 | `split`   | `/usr/local/lib/python3.10/re.py:222` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|      % |     Size | Allocations | Caller     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 54.8 KiB |          51 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `compile` (`/usr/local/lib/python3.10/re.py:249`)

|     % |     Size | Allocations | Caller            | Location                                                         |
| ----: | -------: | ----------: | ----------------- | ---------------------------------------------------------------- |
| 28.0% | 14.2 KiB |           9 | `<module>`        | `./blib2to3/pgen2/tokenize.py:1`                                 |
| 21.3% | 10.8 KiB |           4 | `Specifier`       | `/venv/lib/python3.10/site-packages/packaging/specifiers.py:220` |
| 12.7% | 6.42 KiB |           9 | `_cached_compile` | `./black/strings.py:164`                                         |
| 10.2% | 5.19 KiB |           6 | `<module>`        | `/venv/lib/python3.10/site-packages/tomli/_re.py:1`              |
|  9.3% |  4.7 KiB |           5 | `Version`         | `/venv/lib/python3.10/site-packages/packaging/version.py:340`    |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Caller   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 24.4 KiB |          27 | `parse`  | `/usr/local/lib/python3.10/sre_parse.py:944` |
|  95.6% | 23.4 KiB |          25 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|      % |     Size | Allocations | Caller       | Location                                     |
| -----: | -------: | ----------: | ------------ | -------------------------------------------- |
| 100.0% | 24.4 KiB |          27 | `_parse_sub` | `/usr/local/lib/python3.10/sre_parse.py:436` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run_module` (`/usr/local/lib/python3.10/runpy.py:199`)

|     % |     Size | Allocations | Callee                | Location                                 |
| ----: | -------: | ----------: | --------------------- | ---------------------------------------- |
| 91.5% | 52.7 MiB |      26,565 | `_run_module_code`    | `/usr/local/lib/python3.10/runpy.py:89`  |
|  8.5% | 4.89 MiB |         873 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103` |

##### `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location                                 |
| -----: | -------: | ----------: | ------------ | ---------------------------------------- |
| 100.0% | 57.6 MiB |      27,439 | `run_module` | `/usr/local/lib/python3.10/runpy.py:199` |

##### `_run_module_code` (`/usr/local/lib/python3.10/runpy.py:89`)

|      % |     Size | Allocations | Callee      | Location                                |
| -----: | -------: | ----------: | ----------- | --------------------------------------- |
| 100.0% | 52.7 MiB |      26,564 | `_run_code` | `/usr/local/lib/python3.10/runpy.py:63` |

##### `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`)

|      % |     Size | Allocations | Callee     | Location                |
| -----: | -------: | ----------: | ---------- | ----------------------- |
| 100.0% | 52.7 MiB |      26,563 | `<module>` | `./black/__main__.py:1` |

##### `__call__` (`/venv/lib/python3.10/site-packages/click/core.py:1651`)

|      % |     Size | Allocations | Callee | Location                                                |
| -----: | -------: | ----------: | ------ | ------------------------------------------------------- |
| 100.0% | 52.7 MiB |      26,562 | `main` | `/venv/lib/python3.10/site-packages/click/core.py:1483` |

##### `patched_main` (`./black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------- |
| 100.0% | 52.7 MiB |      26,563 | `__call__` | `/venv/lib/python3.10/site-packages/click/core.py:1651` |

##### `<module>` (`./black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                   |
| -----: | -------: | ----------: | -------------- | -------------------------- |
| 100.0% | 52.7 MiB |      26,563 | `patched_main` | `./black/__init__.py:1594` |

##### `main` (`/venv/lib/python3.10/site-packages/click/core.py:1483`)

|      % |     Size | Allocations | Callee         | Location                                                |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------- |
| 100.0% | 52.7 MiB |      26,545 | `invoke`       | `/venv/lib/python3.10/site-packages/click/core.py:1400` |
|  <0.1% | 10.9 KiB |          16 | `make_context` | `/venv/lib/python3.10/site-packages/click/core.py:1330` |
|  <0.1% |      1 B |           1 | `__exit__`     | `/venv/lib/python3.10/site-packages/click/core.py:558`  |

##### `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                  |
| -----: | -------: | ----------: | ------ | ------------------------- |
| 100.0% | 52.7 MiB |      26,544 | `main` | `./black/__init__.py:244` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`)

|      % |     Size | Allocations | Callee     | Location                                                    |
| -----: | -------: | ----------: | ---------- | ----------------------------------------------------------- |
| 100.0% | 52.7 MiB |      26,545 | `new_func` | `/venv/lib/python3.10/site-packages/click/decorators.py:33` |

##### `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:1400`)

|      % |     Size | Allocations | Callee   | Location                                               |
| -----: | -------: | ----------: | -------- | ------------------------------------------------------ |
| 100.0% | 52.7 MiB |      26,545 | `invoke` | `/venv/lib/python3.10/site-packages/click/core.py:861` |

##### `main` (`./black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                                               |
| -----: | -------: | ----------: | -------------- | ------------------------------------------------------ |
| 100.0% | 52.7 MiB |      26,534 | `reformat_one` | `./black/__init__.py:860`                              |
|  <0.1% |    4 KiB |           5 | `get_sources`  | `./black/__init__.py:724`                              |
|  <0.1% |    576 B |           1 | `__init__`     | `<string>:2`                                           |
|  <0.1% |    528 B |           1 | `exit`         | `/venv/lib/python3.10/site-packages/click/core.py:823` |

##### `reformat_one` (`./black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                  |
| -----: | -------: | ----------: | ---------------------- | ------------------------- |
| 100.0% | 52.7 MiB |      26,530 | `format_file_in_place` | `./black/__init__.py:917` |
|  <0.1% |     72 B |           2 | `write`                | `./black/cache.py:132`    |

##### `format_file_in_place` (`./black/__init__.py:917`)

|      % |     Size | Allocations | Callee                 | Location                   |
| -----: | -------: | ----------: | ---------------------- | -------------------------- |
| 100.0% | 52.7 MiB |      26,529 | `format_file_contents` | `./black/__init__.py:1054` |
|  <0.1% |    520 B |           1 | `decode_bytes`         | `./black/__init__.py:1290` |

##### `format_file_contents` (`./black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                   |
| ----: | -------: | ----------: | --------------------------------- | -------------------------- |
| 68.5% | 36.1 MiB |         129 | `format_str`                      | `./black/__init__.py:1189` |
| 31.5% | 16.6 MiB |      26,400 | `check_stability_and_equivalence` | `./black/__init__.py:1037` |

##### `_format_str_once` (`./black/__init__.py:1236`)

|     % |     Size | Allocations | Callee              | Location                  |
| ----: | -------: | ----------: | ------------------- | ------------------------- |
| 52.4% | 26.6 MiB |      26,394 | `visit`             | `./black/nodes.py:163`    |
| 31.6% | 16.1 MiB |          37 | `lib2to3_parse`     | `./black/parsing.py:55`   |
| 14.0% | 7.08 MiB |          81 | `transform_line`    | `./black/linegen.py:601`  |
|  2.0% |    1 MiB |           3 | `maybe_empty_lines` | `./black/lines.py:560`    |
| <0.1% | 22.1 KiB |           7 | `normalize_fmt_off` | `./black/comments.py:168` |

##### `format_str` (`./black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                   |
| -----: | -------: | ----------: | ------------------ | -------------------------- |
| 100.0% | 36.1 MiB |         128 | `_format_str_once` | `./black/__init__.py:1236` |

##### `visit` (`./black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 26.6 MiB |      26,393 | `visit_default`     | `./black/linegen.py:134` |
|  98.7% | 26.2 MiB |      25,805 | `visit_stmt`        | `./black/linegen.py:199` |
|  97.9% |   26 MiB |      25,387 | `visit_suite`       | `./black/linegen.py:288` |
|  97.8% |   26 MiB |      25,385 | `visit_funcdef`     | `./black/linegen.py:254` |
|  69.8% | 18.5 MiB |      15,458 | `visit_simple_stmt` | `./black/linegen.py:295` |

##### `visit_default` (`./black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location               |
| -----: | -------: | ----------: | ------- | ---------------------- |
| 100.0% | 26.6 MiB |      26,393 | `visit` | `./black/nodes.py:163` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 26.6 MiB |      26,393 | `visit_default`     | `./black/nodes.py:187`   |
|  56.4% |   15 MiB |      23,656 | `generate_comments` | `./black/comments.py:52` |
|  19.1% | 5.07 MiB |         102 | `append`            | `./black/lines.py:63`    |

##### `visit_stmt` (`./black/linegen.py:199`)

|     % |     Size | Allocations | Callee                       | Location                  |
| ----: | -------: | ----------: | ---------------------------- | ------------------------- |
| 95.8% | 25.1 MiB |      25,611 | `visit`                      | `./black/nodes.py:163`    |
| 12.7% | 3.34 MiB |       2,442 | `normalize_invisible_parens` | `./black/linegen.py:1328` |

##### `visit_suite` (`./black/linegen.py:288`)

|      % |   Size | Allocations | Callee          | Location                 |
| -----: | -----: | ----------: | --------------- | ------------------------ |
| 100.0% | 26 MiB |      25,387 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

|      % |   Size | Allocations | Callee  | Location               |
| -----: | -----: | ----------: | ------- | ---------------------- |
| 100.0% | 26 MiB |      25,385 | `visit` | `./black/nodes.py:163` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location                 |
| -----: | -------: | ----------: | --------------- | ------------------------ |
| 100.0% | 18.5 MiB |      15,457 | `visit_default` | `./black/linegen.py:134` |
|  <0.1% |    672 B |           1 | `is_stub_suite` | `./black/nodes.py:801`   |

##### `check_stability_and_equivalence` (`./black/__init__.py:1037`)

|     % |     Size | Allocations | Callee              | Location                   |
| ----: | -------: | ----------: | ------------------- | -------------------------- |
| 88.0% | 14.6 MiB |      26,397 | `assert_stable`     | `./black/__init__.py:1557` |
| 12.0% |    2 MiB |           3 | `assert_equivalent` | `./black/__init__.py:1524` |

##### `changed` (`./blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Callee    | Location                   |
| ----: | ----: | ----------: | --------- | -------------------------- |
| 12.3% | 2 MiB |           2 | `changed` | `./blib2to3/pytree.py:171` |

##### `prefix` (`./blib2to3/pytree.py:480`)

|      % |     Size | Allocations | Callee    | Location                   |
| -----: | -------: | ----------: | --------- | -------------------------- |
| 100.0% | 16.2 MiB |      25,907 | `changed` | `./blib2to3/pytree.py:171` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|      % |     Size | Allocations | Callee         | Location                         |
| -----: | -------: | ----------: | -------------- | -------------------------------- |
| 100.0% | 16.1 MiB |          36 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

|      % |     Size | Allocations | Callee         | Location                         |
| -----: | -------: | ----------: | -------------- | -------------------------------- |
| 100.0% | 16.1 MiB |          37 | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`)

|     % |     Size | Allocations | Callee                | Location                                         |
| ----: | -------: | ----------: | --------------------- | ------------------------------------------------ |
| 99.9% | 4.89 MiB |         870 | `_find_and_load`      | `<frozen importlib._bootstrap>:1022`             |
| 99.9% | 4.89 MiB |         870 | `_get_module_details` | `/usr/local/lib/python3.10/runpy.py:103`         |
| <0.1% |    2 KiB |           1 | `find_spec`           | `/usr/local/lib/python3.10/importlib/util.py:73` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:877`)

|     % |     Size | Allocations | Callee                      | Location                                     |
| ----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
| 79.4% | 3.88 MiB |         854 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
| 66.0% | 3.23 MiB |         263 | `get_code`                  | `<frozen importlib._bootstrap_external>:950` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:664`)

|      % |     Size | Allocations | Callee        | Location                                     |
| -----: | -------: | ----------: | ------------- | -------------------------------------------- |
| 100.0% | 4.89 MiB |         870 | `exec_module` | `<frozen importlib._bootstrap_external>:877` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:987`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         870 | `_load_unlocked`            | `<frozen importlib._bootstrap>:664` |
|   0.6% | 30.3 KiB |          39 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |
|   0.2% | 8.16 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:921` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1022`)

|      % |     Size | Allocations | Callee                    | Location                            |
| -----: | -------: | ----------: | ------------------------- | ----------------------------------- |
| 100.0% | 4.89 MiB |         870 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:987` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|     % |     Size | Allocations | Callee           | Location                                                 |
| ----: | -------: | ----------: | ---------------- | -------------------------------------------------------- |
| 79.4% | 3.88 MiB |         854 | `<module>`       | `./black/__init__.py:1`                                  |
| 25.7% | 1.26 MiB |         209 | `<module>`       | `./black/comments.py:1`                                  |
| 25.6% | 1.25 MiB |         204 | `<module>`       | `./black/nodes.py:1`                                     |
|  4.6% |  228 KiB |         233 | `_find_and_load` | `<frozen importlib._bootstrap>:1022`                     |
|  4.3% |  215 KiB |         195 | `<module>`       | `/venv/lib/python3.10/site-packages/click/__init__.py:1` |

##### `get_code` (`<frozen importlib._bootstrap_external>:950`)

|     % |     Size | Allocations | Callee              | Location                                      |
| ----: | -------: | ----------: | ------------------- | --------------------------------------------- |
| 95.2% | 3.07 MiB |         108 | `source_to_code`    | `<frozen importlib._bootstrap_external>:942`  |
|  4.8% |  159 KiB |         154 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:670`  |
| <0.1% |    536 B |           1 | `_cache_bytecode`   | `<frozen importlib._bootstrap_external>:1094` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:942`)

|      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 3.07 MiB |         108 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1053`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 219 KiB |         222 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/local/lib/python3.10/abc.py:105`)

|    % |     Size | Allocations | Callee              | Location                                   |
| ---: | -------: | ----------: | ------------------- | ------------------------------------------ |
| 1.7% | 1.13 KiB |           2 | `__init_subclass__` | `/usr/local/lib/python3.10/typing.py:1350` |

##### `_compile` (`/usr/local/lib/python3.10/re.py:288`)

|     % |     Size | Allocations | Callee    | Location                                       |
| ----: | -------: | ----------: | --------- | ---------------------------------------------- |
| 98.6% | 54.8 KiB |          51 | `compile` | `/usr/local/lib/python3.10/sre_compile.py:783` |

##### `compile` (`/usr/local/lib/python3.10/sre_compile.py:783`)

|     % |     Size | Allocations | Callee  | Location                                       |
| ----: | -------: | ----------: | ------- | ---------------------------------------------- |
| 44.6% | 24.4 KiB |          27 | `parse` | `/usr/local/lib/python3.10/sre_parse.py:944`   |
| 14.2% | 7.78 KiB |          12 | `_code` | `/usr/local/lib/python3.10/sre_compile.py:622` |

##### `compile` (`/usr/local/lib/python3.10/re.py:249`)

|      % |     Size | Allocations | Callee     | Location                              |
| -----: | -------: | ----------: | ---------- | ------------------------------------- |
| 100.0% | 50.7 KiB |          45 | `_compile` | `/usr/local/lib/python3.10/re.py:288` |

##### `_parse_sub` (`/usr/local/lib/python3.10/sre_parse.py:436`)

|      % |     Size | Allocations | Callee   | Location                                     |
| -----: | -------: | ----------: | -------- | -------------------------------------------- |
| 100.0% | 24.4 KiB |          27 | `_parse` | `/usr/local/lib/python3.10/sre_parse.py:494` |

##### `_parse` (`/usr/local/lib/python3.10/sre_parse.py:494`)

|     % |     Size | Allocations | Callee       | Location                                     |
| ----: | -------: | ----------: | ------------ | -------------------------------------------- |
| 95.6% | 23.4 KiB |          25 | `_parse_sub` | `/usr/local/lib/python3.10/sre_parse.py:436` |
|  2.3% |    576 B |           1 | `opengroup`  | `/usr/local/lib/python3.10/sre_parse.py:85`  |

## Hottest call stacks

Call stacks with the most bytes never freed in their leaf frame.

Common call stack: `run_module` (`/usr/local/lib/python3.10/runpy.py:199`) ← `_run_tracker` (`/venv/lib/python3.10/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.4% |    6 MiB |           7 | `__init__` (`./blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`./blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.5% | 2.01 MiB |          27 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:942`) ← `get_code` (950) ← `exec_module` (877) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.5% | 2.01 MiB |          14 | `run_transformer` (`./black/linegen.py:1755`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.5% |    2 MiB |           3 | `convert` (`./blib2to3/pytree.py:486`) ← `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.5% |    2 MiB |           2 | `__init__` (`./blib2to3/pytree.py:400`) ← `convert` (486) ← `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.5% |    2 MiB |           2 | `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.5% |    2 MiB |           2 | `parse` (`/usr/local/lib/python3.10/ast.py:33`) ← `_parse_single_version` (`./black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`./black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.7% | 1.01 MiB |          15 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `source_to_code` (`<frozen importlib._bootstrap_external>:942`) ← `get_code` (950) ← `exec_module` (877) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.7% |    1 MiB |           2 | `maybe_empty_lines` (`./black/lines.py:560`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.7% |    1 MiB |           2 | `hug_power_op` (`./black/trans.py:85`) ← `run_transformer` (`./black/linegen.py:1755`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.7% |    1 MiB |           1 | `__init__` (`./blib2to3/pgen2/pgen.py:376`) ← `parse_atom` (329) ← `parse_item` (309) ← `parse_alt` (300) ← `parse_rhs` (283) ← `parse_atom` (329) ← `parse_item` (309) ← `parse_alt` (300) ← `parse_rhs` (283) ← `parse` (175) ← `__init__` (34) ← `generate_grammar` (426) ← `load_grammar` (`./blib2to3/pgen2/driver.py:246`) ← `load_packaged_grammar` (280) ← `initialize` (`./blib2to3/pygram.py:165`) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:877`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:664`) ← `_find_and_load_unlocked` (987) ← `_find_and_load` (1022) ← `_get_module_details` (`/usr/local/lib/python3.10/runpy.py:103`) ← `_get_module_details` (103)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.7% |    1 MiB |           1 | `__new__` (`./blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.7% |    1 MiB |           1 | `_addtoken` (`./blib2to3/pgen2/parse.py:290`) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.7% |    1 MiB |           1 | `push` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.7% |    1 MiB |           1 | `generate_tokens` (`./blib2to3/pgen2/tokenize.py:565`) ← `__next__` (`./blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.7% |    1 MiB |           1 | `__new__` (`./blib2to3/pytree.py:81`) ← `clone` (452) ← `hug_power_op` (`./black/trans.py:85`) ← `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.7% |    1 MiB |           1 | `__str__` (`./blib2to3/pytree.py:440`) ← `__str__` (`./black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.7% |    1 MiB |           1 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`./black/nodes.py:441`) ← `whitespace` (194) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.7% |    1 MiB |           1 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `prev_siblings_are` (`./black/nodes.py:459`) ← `is_docstring` (558) ← `visit_STRING` (`./black/linegen.py:413`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.7% |    1 MiB |           1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.10/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.10/site-packages/click/core.py:861`) ← `invoke` (1400) ← `main` (1483) ← `__call__` (1651) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`/usr/local/lib/python3.10/runpy.py:63`) ← `_run_module_code` (89) |

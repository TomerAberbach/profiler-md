# Sampling profile diff

Took 4.76s → 5.78s (+1.019s, +21.4%).

| Category    | Change |    Delta |             % |              Time |
| ----------- | -----: | -------: | ------------: | ----------------: |
| Ours        | +23.8% |  +1.082s | 95.7% → 97.5% |     4.55s → 5.63s |
| Native      | -30.8% | -62.62ms |   4.3% → 2.4% | 203.6ms → 141.0ms |
| Third-party | -50.7% |  -1.01ms |         <0.1% |     2.0ms → 1.0ms |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|    Change |     Delta |             % |              Time | Function               | Location                              |
| --------: | --------: | ------------: | ----------------: | ---------------------- | ------------------------------------- |
|    +22.9% | +467.95ms | 43.0% → 43.5% |     2.04s → 2.51s | `_format_str_once`     | `./black/__init__.py:1236 → 1215`     |
|    +16.8% | +264.00ms | 33.0% → 31.7% |     1.56s → 1.83s | `parse_tokens`         | `./blib2to3/pgen2/driver.py:114`      |
|       new | +116.86ms |   0.0% → 2.0% |     0ms → 116.9ms | `is_complex_subscript` | `./black/lines.py:430`                |
|       new | +108.75ms |   0.0% → 1.9% |     0ms → 108.7ms | `__init__`             | `./blib2to3/pytree.py:389`            |
| +10787.3% |  +66.95ms |  <0.1% → 1.2% |    0.6ms → 67.6ms | `visit`                | `./black/nodes.py:163 → 152`          |
|       new |  +64.84ms |   0.0% → 1.1% |      0ms → 64.8ms | `__contains__`         | `./black/mode.py:249`                 |
|    +12.5% |  +36.02ms |   6.0% → 5.6% | 288.0ms → 324.0ms | `get_features_used`    | `./black/__init__.py:1307 → 1286`     |
|    +22.4% |  +28.04ms |          2.6% | 125.0ms → 153.0ms | `_stringify_ast`       | `./black/parsing.py:174 → 182`        |
|    +22.3% |  +25.73ms |          2.4% | 115.2ms → 141.0ms | `compile`              | `<built-in>`                          |
|    +26.6% |  +15.60ms |   1.2% → 1.3% |   58.5ms → 74.1ms | `<module>`             | `./black/__init__.py:1`               |
|       new |  +11.97ms |   0.0% → 0.2% |      0ms → 12.0ms | `visit_stmt`           | `./black/linegen.py:199`              |
|    +20.7% |  +10.99ms |          1.1% |   53.0ms → 64.0ms | `<module>`             | `./black/nodes.py:1`                  |
|       new |   +4.62ms |   0.0% → 0.1% |       0ms → 4.6ms | `visit_default`        | `./black/linegen.py:134`              |
|    +95.7% |   +2.81ms |          0.1% |     2.9ms → 5.7ms | `assert_stable`        | `./black/__init__.py:1557 → 1543`     |
|       new |   +2.53ms |  0.0% → <0.1% |       0ms → 2.5ms | `_addtoken`            | `./blib2to3/pgen2/parse.py:290 → 278` |
|    +34.1% |   +1.53ms |          0.1% |     4.5ms → 6.0ms | `<module>`             | `/venv/bin/black:1`                   |
|       new |   +1.01ms |  0.0% → <0.1% |       0ms → 1.0ms | `append`               | `./black/lines.py:52`                 |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `main`                 | `./black/__init__.py:244 → 240`       |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `convert`              | `./blib2to3/pytree.py:486 → 475`      |
|    +19.6% |   +0.99ms |          0.1% |     5.1ms → 6.1ms | `format_str`           | `./black/__init__.py:1189 → 1168`     |

##### Ours

|    Change |     Delta |             % |              Time | Function                            | Location                              |
| --------: | --------: | ------------: | ----------------: | ----------------------------------- | ------------------------------------- |
|    +22.9% | +467.95ms | 43.0% → 43.5% |     2.04s → 2.51s | `_format_str_once`                  | `./black/__init__.py:1236 → 1215`     |
|    +16.8% | +264.00ms | 33.0% → 31.7% |     1.56s → 1.83s | `parse_tokens`                      | `./blib2to3/pgen2/driver.py:114`      |
|       new | +116.86ms |   0.0% → 2.0% |     0ms → 116.9ms | `is_complex_subscript`              | `./black/lines.py:430`                |
|       new | +108.75ms |   0.0% → 1.9% |     0ms → 108.7ms | `__init__`                          | `./blib2to3/pytree.py:389`            |
| +10787.3% |  +66.95ms |  <0.1% → 1.2% |    0.6ms → 67.6ms | `visit`                             | `./black/nodes.py:163 → 152`          |
|       new |  +64.84ms |   0.0% → 1.1% |      0ms → 64.8ms | `__contains__`                      | `./black/mode.py:249`                 |
|    +12.5% |  +36.02ms |   6.0% → 5.6% | 288.0ms → 324.0ms | `get_features_used`                 | `./black/__init__.py:1307 → 1286`     |
|    +22.4% |  +28.04ms |          2.6% | 125.0ms → 153.0ms | `_stringify_ast`                    | `./black/parsing.py:174 → 182`        |
|    +26.6% |  +15.60ms |   1.2% → 1.3% |   58.5ms → 74.1ms | `<module>`                          | `./black/__init__.py:1`               |
|       new |  +11.97ms |   0.0% → 0.2% |      0ms → 12.0ms | `visit_stmt`                        | `./black/linegen.py:199`              |
|    +20.7% |  +10.99ms |          1.1% |   53.0ms → 64.0ms | `<module>`                          | `./black/nodes.py:1`                  |
|       new |   +4.62ms |   0.0% → 0.1% |       0ms → 4.6ms | `visit_default`                     | `./black/linegen.py:134`              |
|    +95.7% |   +2.81ms |          0.1% |     2.9ms → 5.7ms | `assert_stable`                     | `./black/__init__.py:1557 → 1543`     |
|       new |   +2.53ms |  0.0% → <0.1% |       0ms → 2.5ms | `_addtoken`                         | `./blib2to3/pgen2/parse.py:290 → 278` |
|    +34.1% |   +1.53ms |          0.1% |     4.5ms → 6.0ms | `<module>`                          | `/venv/bin/black:1`                   |
|       new |   +1.01ms |  0.0% → <0.1% |       0ms → 1.0ms | `append`                            | `./black/lines.py:52`                 |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `main`                              | `./black/__init__.py:244 → 240`       |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `convert`                           | `./blib2to3/pytree.py:486 → 475`      |
|    +19.6% |   +0.99ms |          0.1% |     5.1ms → 6.1ms | `format_str`                        | `./black/__init__.py:1189 → 1168`     |
|       new |   +0.19ms |  0.0% → <0.1% |       0ms → 0.2ms | `_hugging_power_ops_line_to_string` | `./black/linegen.py:590`              |

##### Native

| Change |    Delta |    % |              Time | Function  | Location     |
| -----: | -------: | ---: | ----------------: | --------- | ------------ |
| +22.3% | +25.73ms | 2.4% | 115.2ms → 141.0ms | `compile` | `<built-in>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time | Function                          | Location                                                |
| ------: | -------: | -----------: | ----------------: | --------------------------------- | ------------------------------------------------------- |
| removed | -88.35ms |  1.9% → 0.0% |      88.4ms → 0ms | `object.__new__`                  | `<built-in>`                                            |
| removed | -57.39ms |  1.2% → 0.0% |      57.4ms → 0ms | `generate_comments`               | `./black/comments.py:52`                                |
| removed | -47.88ms |  1.0% → 0.0% |      47.9ms → 0ms | `original_is_simple_lookup_func`  | `./black/trans.py:158`                                  |
|   -3.5% |  -9.81ms |  5.9% → 4.7% | 281.2ms → 271.4ms | `assert_equivalent`               | `./black/__init__.py:1524 → 1510`                       |
| removed |  -6.99ms |  0.1% → 0.0% |       7.0ms → 0ms | `addtoken`                        | `./blib2to3/pgen2/parse.py:242 → 230`                   |
| removed |  -1.11ms | <0.1% → 0.0% |       1.1ms → 0ms | `parse_string`                    | `./blib2to3/pgen2/driver.py:198`                        |
|  -50.7% |  -1.01ms |        <0.1% |     2.0ms → 1.0ms | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py:1484` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `transform_line`                  | `./black/linegen.py:601`                                |
| removed |  -0.66ms | <0.1% → 0.0% |       0.7ms → 0ms | `pop`                             | `./blib2to3/pgen2/parse.py:398`                         |
| removed |  -0.13ms | <0.1% → 0.0% |       0.1ms → 0ms | `hug_power_op`                    | `./black/trans.py:85 → 81`                              |
|   -3.8% |  -0.11ms | 0.1% → <0.1% |     3.0ms → 2.9ms | `<module>`                        | `./black/comments.py:1`                                 |
|   -2.4% |  -0.09ms |         0.1% |     4.0ms → 3.9ms | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`                       |

##### Ours

|  Change |    Delta |            % |              Time | Function                          | Location                              |
| ------: | -------: | -----------: | ----------------: | --------------------------------- | ------------------------------------- |
| removed | -57.39ms |  1.2% → 0.0% |      57.4ms → 0ms | `generate_comments`               | `./black/comments.py:52`              |
| removed | -47.88ms |  1.0% → 0.0% |      47.9ms → 0ms | `original_is_simple_lookup_func`  | `./black/trans.py:158`                |
|   -3.5% |  -9.81ms |  5.9% → 4.7% | 281.2ms → 271.4ms | `assert_equivalent`               | `./black/__init__.py:1524 → 1510`     |
| removed |  -6.99ms |  0.1% → 0.0% |       7.0ms → 0ms | `addtoken`                        | `./blib2to3/pgen2/parse.py:242 → 230` |
| removed |  -1.11ms | <0.1% → 0.0% |       1.1ms → 0ms | `parse_string`                    | `./blib2to3/pgen2/driver.py:198`      |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `transform_line`                  | `./black/linegen.py:601`              |
| removed |  -0.66ms | <0.1% → 0.0% |       0.7ms → 0ms | `pop`                             | `./blib2to3/pgen2/parse.py:398`       |
| removed |  -0.13ms | <0.1% → 0.0% |       0.1ms → 0ms | `hug_power_op`                    | `./black/trans.py:85 → 81`            |
|   -3.8% |  -0.11ms | 0.1% → <0.1% |     3.0ms → 2.9ms | `<module>`                        | `./black/comments.py:1`               |
|   -2.4% |  -0.09ms |         0.1% |     4.0ms → 3.9ms | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`     |

##### Native

|  Change |    Delta |           % |         Time | Function         | Location     |
| ------: | -------: | ----------: | -----------: | ---------------- | ------------ |
| removed | -88.35ms | 1.9% → 0.0% | 88.4ms → 0ms | `object.__new__` | `<built-in>` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |     Delta |             % |              Time | Caller          | Location                          |
| -----: | --------: | ------------: | ----------------: | --------------- | --------------------------------- |
| +42.5% | +286.97ms | 33.0% → 38.3% | 675.0ms → 962.0ms | `assert_stable` | `./black/__init__.py:1557 → 1543` |
| +13.2% | +180.98ms | 67.0% → 61.7% |     1.37s → 1.55s | `format_str`    | `./black/__init__.py:1189 → 1168` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

| Change |     Delta |      % |          Time | Caller         | Location                         |
| -----: | --------: | -----: | ------------: | -------------- | -------------------------------- |
| +16.8% | +264.00ms | 100.0% | 1.56s → 1.83s | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `is_complex_subscript` (`./black/lines.py:430`)

| Change |     Delta |             % |          Time | Caller   | Location              |
| -----: | --------: | ------------: | ------------: | -------- | --------------------- |
|    new | +116.86ms | 0.0% → 100.0% | 0ms → 116.9ms | `append` | `./black/lines.py:52` |

##### `__init__` (`./blib2to3/pytree.py:389`)

| Change |     Delta |             % |          Time | Caller    | Location                   |
| -----: | --------: | ------------: | ------------: | --------- | -------------------------- |
|    new | +108.75ms | 0.0% → 100.0% | 0ms → 108.7ms | `convert` | `./blib2to3/pytree.py:475` |

##### `visit` (`./black/nodes.py:152`)

|    Change |    Delta |              % |           Time | Caller          | Location                     |
| --------: | -------: | -------------: | -------------: | --------------- | ---------------------------- |
| +10627.3% | +65.96ms | 100.0% → 98.5% | 0.6ms → 66.6ms | `visit_default` | `./black/nodes.py:187 → 176` |
|       new |  +0.99ms |    0.0% → 1.5% |    0ms → 1.0ms | `visit_funcdef` | `./black/linegen.py:254`     |

##### `__contains__` (`./black/mode.py:249`)

| Change |    Delta |             % |         Time | Caller             | Location              |
| -----: | -------: | ------------: | -----------: | ------------------ | --------------------- |
|    new | +64.84ms | 0.0% → 100.0% | 0ms → 64.8ms | `is_simple_lookup` | `./black/trans.py:93` |

##### `get_features_used` (`./black/__init__.py:1286`)

| Change |    Delta |      % |              Time | Caller                   | Location                          |
| -----: | -------: | -----: | ----------------: | ------------------------ | --------------------------------- |
| +12.5% | +36.02ms | 100.0% | 288.0ms → 324.0ms | `detect_target_versions` | `./black/__init__.py:1464 → 1443` |

##### `_stringify_ast` (`./black/parsing.py:182`)

| Change |    Delta |      % |              Time | Caller              | Location                          |
| -----: | -------: | -----: | ----------------: | ------------------- | --------------------------------- |
| +22.4% | +28.04ms | 100.0% | 125.0ms → 153.0ms | `assert_equivalent` | `./black/__init__.py:1524 → 1510` |

##### `compile` (`<built-in>`)

| Change |    Delta |      % |              Time | Caller  | Location                        |
| -----: | -------: | -----: | ----------------: | ------- | ------------------------------- |
| +22.3% | +25.73ms | 100.0% | 115.2ms → 141.0ms | `parse` | `/usr/lib/python3.11/ast.py:33` |

##### `<module>` (`./black/__init__.py:1`)

| Change |    Delta |      % |            Time | Caller     | Location            |
| -----: | -------: | -----: | --------------: | ---------- | ------------------- |
| +26.6% | +15.60ms | 100.0% | 58.5ms → 74.1ms | `<module>` | `/venv/bin/black:1` |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |    Delta |             % |         Time | Caller  | Location                     |
| -----: | -------: | ------------: | -----------: | ------- | ---------------------------- |
|    new | +11.97ms | 0.0% → 100.0% | 0ms → 12.0ms | `visit` | `./black/nodes.py:163 → 152` |

##### `<module>` (`./black/nodes.py:1`)

| Change |    Delta |      % |            Time | Caller     | Location                |
| -----: | -------: | -----: | --------------: | ---------- | ----------------------- |
| +20.7% | +10.99ms | 100.0% | 53.0ms → 64.0ms | `<module>` | `./black/comments.py:1` |

##### `visit_default` (`./black/linegen.py:134`)

| Change |   Delta |             % |        Time | Caller        | Location                 |
| -----: | ------: | ------------: | ----------: | ------------- | ------------------------ |
|    new | +4.62ms | 0.0% → 100.0% | 0ms → 4.6ms | `visit_suite` | `./black/linegen.py:288` |

##### `assert_stable` (`./black/__init__.py:1543`)

| Change |   Delta |      % |          Time | Caller                            | Location                          |
| -----: | ------: | -----: | ------------: | --------------------------------- | --------------------------------- |
| +95.7% | +2.81ms | 100.0% | 2.9ms → 5.7ms | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |   Delta |             % |        Time | Caller     | Location                              |
| -----: | ------: | ------------: | ----------: | ---------- | ------------------------------------- |
|    new | +2.53ms | 0.0% → 100.0% | 0ms → 2.5ms | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `append` (`./black/lines.py:52`)

| Change |   Delta |             % |        Time | Caller          | Location                 |
| -----: | ------: | ------------: | ----------: | --------------- | ------------------------ |
|    new | +1.01ms | 0.0% → 100.0% | 0ms → 1.0ms | `visit_default` | `./black/linegen.py:134` |

##### `main` (`./black/__init__.py:240`)

| Change |   Delta |             % |        Time | Caller     | Location                                                    |
| -----: | ------: | ------------: | ----------: | ---------- | ----------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |   Delta |             % |        Time | Caller  | Location                        |
| -----: | ------: | ------------: | ----------: | ------- | ------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `shift` | `./blib2to3/pgen2/parse.py:361` |

##### `format_str` (`./black/__init__.py:1168`)

| Change |   Delta |      % |          Time | Caller                 | Location                          |
| -----: | ------: | -----: | ------------: | ---------------------- | --------------------------------- |
| +19.6% | +0.99ms | 100.0% | 5.1ms → 6.1ms | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`)

| Change |   Delta |             % |        Time | Caller           | Location                 |
| -----: | ------: | ------------: | ----------: | ---------------- | ------------------------ |
|    new | +0.19ms | 0.0% → 100.0% | 0ms → 0.2ms | `transform_line` | `./black/linegen.py:601` |

##### `object.__new__` (`<built-in>`)

|  Change |    Delta |             % |         Time | Caller    | Location                  |
| ------: | -------: | ------------: | -----------: | --------- | ------------------------- |
| removed | -88.35ms | 100.0% → 0.0% | 88.4ms → 0ms | `__new__` | `./blib2to3/pytree.py:81` |

##### `generate_comments` (`./black/comments.py:52`)

|  Change |    Delta |             % |         Time | Caller          | Location                 |
| ------: | -------: | ------------: | -----------: | --------------- | ------------------------ |
| removed | -57.39ms | 100.0% → 0.0% | 57.4ms → 0ms | `visit_default` | `./black/linegen.py:134` |

##### `original_is_simple_lookup_func` (`./black/trans.py:158`)

|  Change |    Delta |             % |         Time | Caller             | Location              |
| ------: | -------: | ------------: | -----------: | ------------------ | --------------------- |
| removed | -47.88ms | 100.0% → 0.0% | 47.9ms → 0ms | `is_simple_lookup` | `./black/trans.py:97` |

##### `assert_equivalent` (`./black/__init__.py:1510`)

| Change |   Delta |      % |              Time | Caller                            | Location                          |
| -----: | ------: | -----: | ----------------: | --------------------------------- | --------------------------------- |
|  -3.5% | -9.81ms | 100.0% | 281.2ms → 271.4ms | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

|  Change |   Delta |             % |        Time | Caller         | Location                         |
| ------: | ------: | ------------: | ----------: | -------------- | -------------------------------- |
| removed | -6.99ms | 100.0% → 0.0% | 7.0ms → 0ms | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|  Change |   Delta |             % |        Time | Caller          | Location                |
| ------: | ------: | ------------: | ----------: | --------------- | ----------------------- |
| removed | -1.11ms | 100.0% → 0.0% | 1.1ms → 0ms | `lib2to3_parse` | `./black/parsing.py:55` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

| Change |   Delta |      % |          Time | Caller     | Location                                                |
| -----: | ------: | -----: | ------------: | ---------- | ------------------------------------------------------- |
| -50.7% | -1.01ms | 100.0% | 2.0ms → 1.0ms | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `transform_line` (`./black/linegen.py:601`)

|  Change |   Delta |             % |        Time | Caller             | Location                          |
| ------: | ------: | ------------: | ----------: | ------------------ | --------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `pop` (`./blib2to3/pgen2/parse.py:398`)

|  Change |   Delta |             % |        Time | Caller      | Location                        |
| ------: | ------: | ------------: | ----------: | ----------- | ------------------------------- |
| removed | -0.66ms | 100.0% → 0.0% | 0.7ms → 0ms | `_addtoken` | `./blib2to3/pgen2/parse.py:290` |

##### `hug_power_op` (`./black/trans.py:81`)

|  Change |   Delta |             % |        Time | Caller                              | Location                 |
| ------: | ------: | ------------: | ----------: | ----------------------------------- | ------------------------ |
| removed | -0.13ms | 100.0% → 0.0% | 0.1ms → 0ms | `_hugging_power_ops_line_to_string` | `./black/linegen.py:590` |

##### `<module>` (`./black/comments.py:1`)

| Change |   Delta |      % |          Time | Caller     | Location                |
| -----: | ------: | -----: | ------------: | ---------- | ----------------------- |
|  -3.8% | -0.11ms | 100.0% | 3.0ms → 2.9ms | `<module>` | `./black/__init__.py:1` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change |   Delta |      % |          Time | Caller                 | Location                          |
| -----: | ------: | -----: | ------------: | ---------------------- | --------------------------------- |
|  -2.4% | -0.09ms | 100.0% | 4.0ms → 3.9ms | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |             Time | Function                          | Location                                                    |
| ------: | --------: | ------------: | ---------------: | --------------------------------- | ----------------------------------------------------------- |
|  +21.4% |   +1.019s |        100.0% |    4.76s → 5.78s | `<module>`                        | `/venv/bin/black:1`                                         |
|  +21.4% | +992.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `main`                            | `./black/__init__.py:244 → 240`                             |
|  +21.4% | +992.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|  +21.4% | +992.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py:857`      |
|  +21.4% | +992.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py:1401`     |
|  +21.4% | +991.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `format_file_in_place`            | `./black/__init__.py:917 → 922`                             |
|  +21.4% | +991.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `reformat_one`                    | `./black/__init__.py:860 → 865`                             |
|  +21.3% | +990.99ms |         97.5% |    4.64s → 5.63s | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py:1484`     |
|  +21.3% | +990.99ms |         97.5% |    4.64s → 5.63s | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py:1629`     |
|  +21.3% | +990.99ms |         97.5% |    4.64s → 5.63s | `patched_main`                    | `./black/__init__.py:1594 → 1580`                           |
|  +21.3% | +990.83ms | 97.5% → 97.4% |    4.64s → 5.63s | `format_file_contents`            | `./black/__init__.py:1054 → 1059`                           |
|  +23.0% | +943.16ms | 86.3% → 87.4% |    4.10s → 5.05s | `_format_str_once`                | `./black/__init__.py:1236 → 1215`                           |
|  +34.5% | +651.74ms | 39.7% → 44.0% |    1.88s → 2.54s | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`                           |
|  +44.6% | +607.87ms | 28.6% → 34.1% |    1.36s → 1.97s | `assert_stable`                   | `./black/__init__.py:1557 → 1543`                           |
|  +12.3% | +339.09ms | 57.8% → 53.5% |    2.75s → 3.09s | `format_str`                      | `./black/__init__.py:1189 → 1168`                           |
|  +16.8% | +280.27ms | 35.0% → 33.7% |    1.66s → 1.94s | `parse_tokens`                    | `./blib2to3/pgen2/driver.py:114`                            |
|  +16.8% | +279.16ms | 35.0% → 33.7% |    1.66s → 1.94s | `parse_string`                    | `./blib2to3/pgen2/driver.py:198`                            |
|  +16.8% | +279.16ms | 35.0% → 33.7% |    1.66s → 1.94s | `lib2to3_parse`                   | `./black/parsing.py:55`                                     |
| +248.2% | +144.01ms |   1.2% → 3.5% | 58.0ms → 202.0ms | `visit_default`                   | `./black/linegen.py:134`                                    |
| +248.2% | +144.01ms |   1.2% → 3.5% | 58.0ms → 202.0ms | `visit`                           | `./black/nodes.py:163 → 152`                                |

##### Ours

|  Change |     Delta |             % |             Time | Function                          | Location                          |
| ------: | --------: | ------------: | ---------------: | --------------------------------- | --------------------------------- |
|  +21.4% |   +1.019s |        100.0% |    4.76s → 5.78s | `<module>`                        | `/venv/bin/black:1`               |
|  +21.4% | +992.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `main`                            | `./black/__init__.py:244 → 240`   |
|  +21.4% | +991.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `format_file_in_place`            | `./black/__init__.py:917 → 922`   |
|  +21.4% | +991.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `reformat_one`                    | `./black/__init__.py:860 → 865`   |
|  +21.3% | +990.99ms |         97.5% |    4.64s → 5.63s | `patched_main`                    | `./black/__init__.py:1594 → 1580` |
|  +21.3% | +990.83ms | 97.5% → 97.4% |    4.64s → 5.63s | `format_file_contents`            | `./black/__init__.py:1054 → 1059` |
|  +23.0% | +943.16ms | 86.3% → 87.4% |    4.10s → 5.05s | `_format_str_once`                | `./black/__init__.py:1236 → 1215` |
|  +34.5% | +651.74ms | 39.7% → 44.0% |    1.88s → 2.54s | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042` |
|  +44.6% | +607.87ms | 28.6% → 34.1% |    1.36s → 1.97s | `assert_stable`                   | `./black/__init__.py:1557 → 1543` |
|  +12.3% | +339.09ms | 57.8% → 53.5% |    2.75s → 3.09s | `format_str`                      | `./black/__init__.py:1189 → 1168` |
|  +16.8% | +280.27ms | 35.0% → 33.7% |    1.66s → 1.94s | `parse_tokens`                    | `./blib2to3/pgen2/driver.py:114`  |
|  +16.8% | +279.16ms | 35.0% → 33.7% |    1.66s → 1.94s | `parse_string`                    | `./blib2to3/pgen2/driver.py:198`  |
|  +16.8% | +279.16ms | 35.0% → 33.7% |    1.66s → 1.94s | `lib2to3_parse`                   | `./black/parsing.py:55`           |
| +248.2% | +144.01ms |   1.2% → 3.5% | 58.0ms → 202.0ms | `visit_default`                   | `./black/linegen.py:134`          |
| +248.2% | +144.01ms |   1.2% → 3.5% | 58.0ms → 202.0ms | `visit`                           | `./black/nodes.py:163 → 152`      |
| +248.2% | +144.01ms |   1.2% → 3.5% | 58.0ms → 202.0ms | `visit_default`                   | `./black/nodes.py:187 → 176`      |
| +227.6% | +132.04ms |   1.2% → 3.3% | 58.0ms → 190.1ms | `visit_funcdef`                   | `./black/linegen.py:254`          |
|     new | +118.03ms |   0.0% → 2.0% |    0ms → 118.0ms | `visit_dictsetmaker`              | `./black/linegen.py:234`          |
|     new | +117.87ms |   0.0% → 2.0% |    0ms → 117.9ms | `append`                          | `./black/lines.py:52`             |
|     new | +117.87ms |   0.0% → 2.0% |    0ms → 117.9ms | `visit_STRING`                    | `./black/linegen.py:413`          |

##### Native

| Change |    Delta |    % |              Time | Function  | Location     |
| -----: | -------: | ---: | ----------------: | --------- | ------------ |
| +22.3% | +25.73ms | 2.4% | 115.2ms → 141.0ms | `compile` | `<built-in>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |           % |         Time | Function                         | Location                        |
| ------: | -------: | ----------: | -----------: | -------------------------------- | ------------------------------- |
| removed | -89.01ms | 1.9% → 0.0% | 89.0ms → 0ms | `pop`                            | `./blib2to3/pgen2/parse.py:398` |
| removed | -88.35ms | 1.9% → 0.0% | 88.4ms → 0ms | `object.__new__`                 | `<built-in>`                    |
| removed | -88.35ms | 1.9% → 0.0% | 88.4ms → 0ms | `__new__`                        | `./blib2to3/pytree.py:81`       |
| removed | -58.01ms | 1.2% → 0.0% | 58.0ms → 0ms | `visit_power`                    | `./black/linegen.py:341`        |
| removed | -58.01ms | 1.2% → 0.0% | 58.0ms → 0ms | `visit_simple_stmt`              | `./black/linegen.py:295`        |
| removed | -57.39ms | 1.2% → 0.0% | 57.4ms → 0ms | `generate_comments`              | `./black/comments.py:52`        |
| removed | -47.88ms | 1.0% → 0.0% | 47.9ms → 0ms | `original_is_simple_lookup_func` | `./black/trans.py:158`          |

##### Ours

|  Change |    Delta |           % |         Time | Function                         | Location                        |
| ------: | -------: | ----------: | -----------: | -------------------------------- | ------------------------------- |
| removed | -89.01ms | 1.9% → 0.0% | 89.0ms → 0ms | `pop`                            | `./blib2to3/pgen2/parse.py:398` |
| removed | -88.35ms | 1.9% → 0.0% | 88.4ms → 0ms | `__new__`                        | `./blib2to3/pytree.py:81`       |
| removed | -58.01ms | 1.2% → 0.0% | 58.0ms → 0ms | `visit_power`                    | `./black/linegen.py:341`        |
| removed | -58.01ms | 1.2% → 0.0% | 58.0ms → 0ms | `visit_simple_stmt`              | `./black/linegen.py:295`        |
| removed | -57.39ms | 1.2% → 0.0% | 57.4ms → 0ms | `generate_comments`              | `./black/comments.py:52`        |
| removed | -47.88ms | 1.0% → 0.0% | 47.9ms → 0ms | `original_is_simple_lookup_func` | `./black/trans.py:158`          |

##### Native

|  Change |    Delta |           % |         Time | Function         | Location     |
| ------: | -------: | ----------: | -----------: | ---------------- | ------------ |
| removed | -88.35ms | 1.9% → 0.0% | 88.4ms → 0ms | `object.__new__` | `<built-in>` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `<module>` (`/venv/bin/black:1`)

| Change |     Delta |     % |              Time | Callee         | Location                          |
| -----: | --------: | ----: | ----------------: | -------------- | --------------------------------- |
| +21.3% | +990.99ms | 97.5% |     4.64s → 5.63s | `patched_main` | `./black/__init__.py:1594 → 1580` |
| +23.1% |  +26.47ms |  2.4% | 114.5ms → 141.0ms | `<module>`     | `./black/__init__.py:1`           |

##### `main` (`./black/__init__.py:240`)

| Change |     Delta |      % |          Time | Callee         | Location                        |
| -----: | --------: | -----: | ------------: | -------------- | ------------------------------- |
| +21.4% | +991.00ms | 100.0% | 4.64s → 5.63s | `reformat_one` | `./black/__init__.py:860 → 865` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |     Delta |      % |          Time | Callee | Location                        |
| -----: | --------: | -----: | ------------: | ------ | ------------------------------- |
| +21.4% | +992.00ms | 100.0% | 4.64s → 5.63s | `main` | `./black/__init__.py:244 → 240` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

| Change |     Delta |      % |          Time | Callee     | Location                                                    |
| -----: | --------: | -----: | ------------: | ---------- | ----------------------------------------------------------- |
| +21.4% | +992.00ms | 100.0% | 4.64s → 5.63s | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

| Change |     Delta |      % |          Time | Callee   | Location                                               |
| -----: | --------: | -----: | ------------: | -------- | ------------------------------------------------------ |
| +21.4% | +992.00ms | 100.0% | 4.64s → 5.63s | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `format_file_in_place` (`./black/__init__.py:922`)

| Change |     Delta |      % |          Time | Callee                 | Location                          |
| -----: | --------: | -----: | ------------: | ---------------------- | --------------------------------- |
| +21.3% | +990.83ms | 100.0% | 4.64s → 5.63s | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `reformat_one` (`./black/__init__.py:865`)

| Change |     Delta |      % |          Time | Callee                 | Location                        |
| -----: | --------: | -----: | ------------: | ---------------------- | ------------------------------- |
| +21.4% | +991.00ms | 100.0% | 4.64s → 5.63s | `format_file_in_place` | `./black/__init__.py:917 → 922` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

| Change |     Delta |      % |          Time | Callee   | Location                                                |
| -----: | --------: | -----: | ------------: | -------- | ------------------------------------------------------- |
| +21.4% | +992.00ms | 100.0% | 4.64s → 5.63s | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:1401` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

| Change |     Delta |      % |          Time | Callee | Location                                                |
| -----: | --------: | -----: | ------------: | ------ | ------------------------------------------------------- |
| +21.3% | +990.99ms | 100.0% | 4.64s → 5.63s | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`./black/__init__.py:1580`)

| Change |     Delta |      % |          Time | Callee     | Location                                                |
| -----: | --------: | -----: | ------------: | ---------- | ------------------------------------------------------- |
| +21.3% | +990.99ms | 100.0% | 4.64s → 5.63s | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `format_file_contents` (`./black/__init__.py:1059`)

| Change |     Delta |             % |          Time | Callee                            | Location                          |
| -----: | --------: | ------------: | ------------: | --------------------------------- | --------------------------------- |
| +34.5% | +651.74ms | 40.7% → 45.1% | 1.88s → 2.54s | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042` |
| +12.3% | +339.09ms | 59.3% → 54.9% | 2.75s → 3.09s | `format_str`                      | `./black/__init__.py:1189 → 1168` |

##### `_format_str_once` (`./black/__init__.py:1215`)

|  Change |     Delta |             % |              Time | Callee                   | Location                          |
| ------: | --------: | ------------: | ----------------: | ------------------------ | --------------------------------- |
|  +16.8% | +279.16ms | 40.6% → 38.5% |     1.66s → 1.94s | `lib2to3_parse`          | `./black/parsing.py:55`           |
| +248.2% | +144.01ms |   1.4% → 4.0% |  58.0ms → 202.0ms | `visit`                  | `./black/nodes.py:163 → 152`      |
|  +12.5% |  +36.02ms |   7.0% → 6.4% | 288.0ms → 324.0ms | `detect_target_versions` | `./black/__init__.py:1464 → 1443` |
|  +32.7% |  +16.01ms |   1.2% → 1.3% |   49.0ms → 65.0ms | `transform_line`         | `./black/linegen.py:601`          |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change |     Delta |             % |              Time | Callee              | Location                          |
| -----: | --------: | ------------: | ----------------: | ------------------- | --------------------------------- |
| +44.6% | +607.87ms | 72.2% → 77.6% |     1.36s → 1.97s | `assert_stable`     | `./black/__init__.py:1557 → 1543` |
|  +8.4% |  +43.96ms | 27.6% → 22.2% | 521.4ms → 565.3ms | `assert_equivalent` | `./black/__init__.py:1524 → 1510` |

##### `assert_stable` (`./black/__init__.py:1543`)

| Change |     Delta |             % |          Time | Callee             | Location                          |
| -----: | --------: | ------------: | ------------: | ------------------ | --------------------------------- |
| +44.5% | +605.06ms | 99.8% → 99.7% | 1.36s → 1.96s | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `format_str` (`./black/__init__.py:1168`)

| Change |     Delta |     % |          Time | Callee             | Location                          |
| -----: | --------: | ----: | ------------: | ------------------ | --------------------------------- |
| +12.3% | +338.09ms | 99.8% | 2.74s → 3.08s | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

| Change |    Delta |    % |             Time | Callee     | Location                              |
| -----: | -------: | ---: | ---------------: | ---------- | ------------------------------------- |
| +16.9% | +16.27ms | 5.8% | 96.0ms → 112.3ms | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

| Change |     Delta |              % |          Time | Callee         | Location                         |
| -----: | --------: | -------------: | ------------: | -------------- | -------------------------------- |
| +16.8% | +280.27ms | 99.9% → 100.0% | 1.66s → 1.94s | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

| Change |     Delta |      % |          Time | Callee         | Location                         |
| -----: | --------: | -----: | ------------: | -------------- | -------------------------------- |
| +16.8% | +279.16ms | 100.0% | 1.66s → 1.94s | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |     Delta |            % |             Time | Callee              | Location                     |
| ------: | --------: | -----------: | ---------------: | ------------------- | ---------------------------- |
| +248.2% | +144.01ms |       100.0% | 58.0ms → 202.0ms | `visit_default`     | `./black/nodes.py:187 → 176` |
|     new | +117.87ms | 0.0% → 58.3% |    0ms → 117.9ms | `append`            | `./black/lines.py:52`        |
| removed |  -57.39ms | 98.9% → 0.0% |     57.4ms → 0ms | `generate_comments` | `./black/comments.py:52`     |

##### `visit` (`./black/nodes.py:152`)

|  Change |     Delta |              % |             Time | Callee               | Location                 |
| ------: | --------: | -------------: | ---------------: | -------------------- | ------------------------ |
| +248.2% | +144.01ms |         100.0% | 58.0ms → 202.0ms | `visit_default`      | `./black/linegen.py:134` |
| +227.6% | +132.04ms | 100.0% → 94.1% | 58.0ms → 190.1ms | `visit_funcdef`      | `./black/linegen.py:254` |
|     new | +118.03ms |   0.0% → 58.4% |    0ms → 118.0ms | `visit_dictsetmaker` | `./black/linegen.py:234` |
|     new | +117.87ms |   0.0% → 58.3% |    0ms → 117.9ms | `visit_STRING`       | `./black/linegen.py:413` |
| removed |  -58.01ms |  100.0% → 0.0% |     58.0ms → 0ms | `visit_power`        | `./black/linegen.py:341` |

##### `visit_default` (`./black/nodes.py:176`)

|  Change |     Delta |      % |             Time | Callee  | Location                     |
| ------: | --------: | -----: | ---------------: | ------- | ---------------------------- |
| +248.2% | +144.01ms | 100.0% | 58.0ms → 202.0ms | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_funcdef` (`./black/linegen.py:254`)

|  Change |     Delta |      % |             Time | Callee  | Location                     |
| ------: | --------: | -----: | ---------------: | ------- | ---------------------------- |
| +227.6% | +132.04ms | 100.0% | 58.0ms → 190.1ms | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_dictsetmaker` (`./black/linegen.py:234`)

| Change |     Delta |             % |          Time | Callee          | Location                 |
| -----: | --------: | ------------: | ------------: | --------------- | ------------------------ |
|    new | +118.03ms | 0.0% → 100.0% | 0ms → 118.0ms | `visit_default` | `./black/linegen.py:134` |

##### `append` (`./black/lines.py:52`)

| Change |     Delta |            % |          Time | Callee                 | Location               |
| -----: | --------: | -----------: | ------------: | ---------------------- | ---------------------- |
|    new | +116.86ms | 0.0% → 99.1% | 0ms → 116.9ms | `is_complex_subscript` | `./black/lines.py:430` |

##### `visit_STRING` (`./black/linegen.py:413`)

| Change |     Delta |             % |          Time | Callee          | Location                 |
| -----: | --------: | ------------: | ------------: | --------------- | ------------------------ |
|    new | +117.87ms | 0.0% → 100.0% | 0ms → 117.9ms | `visit_default` | `./black/linegen.py:134` |

##### `pop` (`./blib2to3/pgen2/parse.py:398`)

|  Change |    Delta |            % |         Time | Callee    | Location                   |
| ------: | -------: | -----------: | -----------: | --------- | -------------------------- |
| removed | -88.35ms | 99.3% → 0.0% | 88.4ms → 0ms | `convert` | `./blib2to3/pytree.py:486` |

##### `__new__` (`./blib2to3/pytree.py:81`)

|  Change |    Delta |             % |         Time | Callee           | Location     |
| ------: | -------: | ------------: | -----------: | ---------------- | ------------ |
| removed | -88.35ms | 100.0% → 0.0% | 88.4ms → 0ms | `object.__new__` | `<built-in>` |

##### `visit_power` (`./black/linegen.py:341`)

|  Change |    Delta |             % |         Time | Callee          | Location                 |
| ------: | -------: | ------------: | -----------: | --------------- | ------------------------ |
| removed | -58.01ms | 100.0% → 0.0% | 58.0ms → 0ms | `visit_default` | `./black/linegen.py:134` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

|  Change |    Delta |             % |         Time | Callee          | Location                 |
| ------: | -------: | ------------: | -----------: | --------------- | ------------------------ |
| removed | -58.01ms | 100.0% → 0.0% | 58.0ms → 0ms | `visit_default` | `./black/linegen.py:134` |

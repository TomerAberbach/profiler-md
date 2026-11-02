# Sampling profile diff

Took 24.50s → 34.00s (+9.500s, +38.8%) over 245 → 340 samples (100.0ms per sample).

| Category         |  Change |     Delta |             % |            Time |   Samples |
| ---------------- | ------: | --------: | ------------: | --------------: | --------: |
| Third-party      |  +26.8% |   +6.100s | 93.1% → 85.0% | 22.80s → 28.90s | 228 → 289 |
| Standard library | +228.6% |   +1.600s |   2.9% → 6.8% | 700.0ms → 2.30s |    7 → 23 |
| Native           | +157.1% |   +1.100s |   2.9% → 5.3% | 700.0ms → 1.80s |    7 → 18 |
| Ours             | +233.3% | +700.00ms |   1.2% → 2.9% | 300.0ms → 1.00s |    3 → 10 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 24.50s → 34.00s (100.0%, self 2.4% → 2.9%) (unsymbolized) at /usr/lib/x86_64-linux-gnu/libc.so.6
    ├── 23.60s → 32.30s (96.3% → 95.0%) _run_module_as_main at <frozen runpy>
    │   ├── … 22.90s → 31.10s (93.5% → 91.5%) CPyDef_black___main at /venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so
    │   │   └── … 22.90s → 31.00s (93.5% → 91.2%) CPyDef_black___format_file_contents at /venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so
    │   │       ├── 13.40s → 21.80s (54.7% → 64.1%) CPyDef_black___format_str
    │   │       │   └── 13.40s → 21.80s (54.7% → 64.1%) CPyDef_black____format_str_once
    │   │       │       ├── … 5.30s → 9.10s (21.6% → 26.8%, self 3.7% → 3.2%, self 5.3% → 4.7% globally) CPyDef_driver___Driver___parse_tokens at /venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so
    │   │       │       │   ├── 2.50s → 4.90s (10.2% → 14.4%) CPyDef_parse___Parser___addtoken
    │   │       │       │   │   ├── 2.40s → 4.70s (9.8% → 13.8%, self 5.3% → 4.1%, self 7.3% → 5.3% globally) CPyDef_parse___Parser____addtoken
    │   │       │       │   │   │   ├── 400.0ms → 1.70s (1.6% → 5.0%, self 1.6% → 4.7%, self 2.9% → 5.0% globally) CPyDef_parse___Parser___push
    │   │       │       │   │   │   └── 700.0ms → 1.60s (2.9% → 4.7%) 2 more callees, led by (2.4% → 2.6%) CPyDef_parse___Parser___pop
    │   │       │       │   │   └── 100.0ms → 200.0ms (0.4% → 0.6%) CPyDef_parse___Parser___classify
    │   │       │       │   ├── 1.50s → 2.70s (6.1% → 7.9%) CPyDef_driver___TokenProxy_____next__
    │   │       │       │   │   └── 1.40s → 2.70s (5.7% → 7.9%, self 4.1% → 6.5%, self 6.9% → 7.1% globally) CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__
    │   │       │       │   │       ├── 200.0ms → 0ms (0.8% → 0.0%, self 6.1% → 6.8% globally) (unsymbolized)
    │   │       │       │   │       └── 200.0ms → 500.0ms (0.8% → 1.5%) 4 more callees, led by (0.4% → 0.6%) CPyTagged_StealAsObject
    │   │       │       │   └── 400.0ms (1.6% → 1.2%) 4 more callees, led by (0.8% → 0.3%) pytree___Node_clear
    │   │       │       ├── 5.40s → 7.20s (22.0% → 21.2%, self 4.9% → 3.2%, self 7.3% → 4.4% globally) CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__
    │   │       │       │   ├── … 2.20s → 3.00s (9.0% → 8.8%, self 0.4% → 1.5%, self 1.2% → 1.5% globally) CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__ at /venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so
    │   │       │       │   │   ├── 1.20s → 1.10s (4.9% → 3.2%, self 0.4% → 0.6% globally) CPyDef_lines___Line___append
    │   │       │       │   │   │   ├── 500.0ms → 700.0ms (2.0% → 2.1%, self 0.8% → 0.0%, self 1.6% → 0.0% globally) CPyDef_nodes___whitespace
    │   │       │       │   │   │   │   ├── 100.0ms → 400.0ms (0.4% → 1.2%) CPyDef_pytree___Base___prev_sibling
    │   │       │       │   │   │   │   │   └── 0ms → 400.0ms (0.0% → 1.2%, self 0.4% → 2.1% globally) CPyDef_pytree___Node___update_sibling_maps
    │   │       │       │   │   │   │   └── 200.0ms → 300.0ms (0.8% → 0.9%) 2 more callees, led by (0.4% → 0.9%) CPyDef_nodes___preceding_leaf
    │   │       │       │   │   │   └── 600.0ms → 400.0ms (2.4% → 1.2%) 4 more callees, led by (1.6% → 0.9%) CPyDef_brackets___BracketTracker___mark
    │   │       │       │   │   └── 900.0ms → 1.40s (3.7% → 4.1%) 4 more callees, led by (1.2% → 2.4%) CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__
    │   │       │       │   └── 2.00s → 3.10s (8.2% → 9.1%) 13 more callees, led by (1.2% → 2.6%) CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__ at /venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so
    │   │       │       ├── 0ms → 600.0ms (0.0% → 1.8%) CPyDef_lines___LinesBlock___all_lines
    │   │       │       │   └── 0ms → 500.0ms (0.0% → 1.5%, self 1.2% → 2.9% globally) __init__ at <string>
    │   │       │       └── 2.60s → 4.90s (10.6% → 14.4%) 6 more callees, led by (3.7% → 7.6%) CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__
    │   │       └── 9.50s → 9.20s (38.8% → 27.1%) CPyDef_black___check_stability_and_equivalence
    │   │           ├── 7.50s → 6.30s (30.6% → 18.5%) CPyDef_black___assert_stable
    │   │           │   └── 7.50s → 6.30s (30.6% → 18.5%) CPyDef_black____format_str_once
    │   │           │       └── 7.50s → 6.30s (30.6% → 18.5%) 9 more callees, led by (12.7% → 5.9%) CPyDef_parsing___lib2to3_parse
    │   │           └── 2.00s → 2.90s (8.2% → 8.5%) CPyDef_black___assert_equivalent
    │   │               ├── 1.40s → 1.70s (5.7% → 5.0%) CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__ …
    │   │               └── … 500.0ms → 1.10s (2.0% → 3.2%, self 1.2% → 3.2%) parse at /usr/lib/python3.11/ast.py
    │   │                   └── 100.0ms → 0ms (0.4% → 0.0%, self 0.4% → 0.6% globally) pytree___Node_traverse at /venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so
    │   └── 700.0ms → 1.10s (2.9% → 3.2%) _get_module_details …
    └── 300.0ms → 700.0ms (1.2% → 2.1%) 3 more callees, led by (1.2% → 0.0%) pytree___Node_clear at /venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |           % |              Time | Samples | Function                                                                 | Location                                                                                         |
| ------: | --------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +142.9% |   +1.000s | 2.9% → 5.0% |   700.0ms → 1.70s |  7 → 17 | `CPyDef_parse___Parser___push`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +53.3% | +800.00ms | 6.1% → 6.8% |     1.50s → 2.30s | 15 → 23 | `(unsymbolized)`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +266.7% | +800.00ms | 1.2% → 3.2% |   300.0ms → 1.10s |  3 → 11 | `parse`                                                                  | `/usr/lib/python3.11/ast.py`                                                                     |
|  +41.2% | +700.00ms | 6.9% → 7.1% |     1.70s → 2.40s | 17 → 24 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +233.3% | +700.00ms | 1.2% → 2.9% |   300.0ms → 1.00s |  3 → 10 | `__init__`                                                               | `<string>`                                                                                       |
| +600.0% | +600.00ms | 0.4% → 2.1% | 100.0ms → 700.0ms |   1 → 7 | `CPyDef_pytree___Node___update_sibling_maps`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +250.0% | +500.00ms | 0.8% → 2.1% | 200.0ms → 700.0ms |   2 → 7 | `CPyDef_lines___Line_____str__`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +400.00ms | 0.0% → 1.2% |     0ms → 400.0ms |   0 → 4 | `(unsymbolized)`                                                         | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`                                                 |
| +400.0% | +400.00ms | 0.4% → 1.5% | 100.0ms → 500.0ms |   1 → 5 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +400.00ms | 0.0% → 1.2% |     0ms → 400.0ms |   0 → 4 | `_compile_bytecode`                                                      | `<frozen importlib._bootstrap_external>`                                                         |
|  +66.7% | +400.00ms | 2.4% → 2.9% |   600.0ms → 1.00s |  6 → 10 | `(unsymbolized)`                                                         | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  +23.1% | +300.00ms | 5.3% → 4.7% |     1.30s → 1.60s | 13 → 16 | `CPyDef_driver___Driver___parse_tokens`                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +60.0% | +300.00ms | 2.0% → 2.4% | 500.0ms → 800.0ms |   5 → 8 | `CPyDef_black___get_features_used`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `CPyDef_comments___convert_one_fmt_off_pair`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyStr_Build`                                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_pytree___convert`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_comments___normalize_trailing_prefix`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_nodes___Visitor___visit`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Third-party

|  Change |     Delta |           % |              Time | Samples | Function                                                                 | Location                                                                                         |
| ------: | --------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +142.9% |   +1.000s | 2.9% → 5.0% |   700.0ms → 1.70s |  7 → 17 | `CPyDef_parse___Parser___push`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +53.3% | +800.00ms | 6.1% → 6.8% |     1.50s → 2.30s | 15 → 23 | `(unsymbolized)`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +41.2% | +700.00ms | 6.9% → 7.1% |     1.70s → 2.40s | 17 → 24 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +600.0% | +600.00ms | 0.4% → 2.1% | 100.0ms → 700.0ms |   1 → 7 | `CPyDef_pytree___Node___update_sibling_maps`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +250.0% | +500.00ms | 0.8% → 2.1% | 200.0ms → 700.0ms |   2 → 7 | `CPyDef_lines___Line_____str__`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +400.0% | +400.00ms | 0.4% → 1.5% | 100.0ms → 500.0ms |   1 → 5 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +23.1% | +300.00ms | 5.3% → 4.7% |     1.30s → 1.60s | 13 → 16 | `CPyDef_driver___Driver___parse_tokens`                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +60.0% | +300.00ms | 2.0% → 2.4% | 500.0ms → 800.0ms |   5 → 8 | `CPyDef_black___get_features_used`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `CPyDef_comments___convert_one_fmt_off_pair`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyStr_Build`                                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_pytree___convert`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_comments___normalize_trailing_prefix`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_nodes___Visitor___visit`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +200.00ms | 0.8% → 1.2% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +200.00ms | 0.8% → 1.2% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +200.00ms | 0.8% → 1.2% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_strings___sub_twice`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_trans___StringSplitter_____mypyc_defaults_setup`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|  Change |     Delta |           % |            Time | Samples | Function                    | Location                                 |
| ------: | --------: | ----------: | --------------: | ------: | --------------------------- | ---------------------------------------- |
| +266.7% | +800.00ms | 1.2% → 3.2% | 300.0ms → 1.10s |  3 → 11 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
|     new | +400.00ms | 0.0% → 1.2% |   0ms → 400.0ms |   0 → 4 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|     new | +200.00ms | 0.0% → 0.6% |   0ms → 200.0ms |   0 → 2 | `_create_fn`                | `/usr/lib/python3.11/dataclasses.py`     |
|     new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|     new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `<genexpr>`                 | `<frozen importlib._bootstrap_external>` |
|     new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `spec_from_file_location`   | `<frozen importlib._bootstrap_external>` |
|     new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `__hash__`                  | `/usr/lib/python3.11/enum.py`            |
|     new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `__exit__`                  | `/usr/lib/python3.11/contextlib.py`      |

##### Native

| Change |     Delta |           % |            Time | Samples | Function         | Location                                         |
| -----: | --------: | ----------: | --------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +400.00ms | 0.0% → 1.2% |   0ms → 400.0ms |   0 → 4 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| +66.7% | +400.00ms | 2.4% → 2.9% | 600.0ms → 1.00s |  6 → 10 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `realloc`        | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `read`           | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `malloc`         | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|    new | +100.00ms | 0.0% → 0.3% |   0ms → 100.0ms |   0 → 1 | `free`           | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### Ours

|  Change |     Delta |           % |            Time | Samples | Function   | Location   |
| ------: | --------: | ----------: | --------------: | ------: | ---------- | ---------- |
| +233.3% | +700.00ms | 1.2% → 2.9% | 300.0ms → 1.00s |  3 → 10 | `__init__` | `<string>` |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |           % |              Time | Samples | Function                                                          | Location                                                                                         |
| ------: | --------: | ----------: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -400.00ms | 1.6% → 0.0% |     400.0ms → 0ms |   4 → 0 | `CPyDef_nodes___whitespace`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -16.7% | -300.00ms | 7.3% → 4.4% |     1.80s → 1.50s | 18 → 15 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `CPyDef_lines___Line___is_def`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDict_Build`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPy_AddTraceback`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `pytree___Node_clear`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_mode___Mode_____contains__`                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_linegen___LineGenerator___line`                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyIter_Send`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -20.0% | -200.00ms | 4.1% → 2.4% |   1.00s → 800.0ms |  10 → 8 | `CPyDef_parse___Parser___pop`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -33.3% | -100.00ms | 1.2% → 0.6% | 300.0ms → 200.0ms |   3 → 2 | `CPyDef_nodes___Visitor___visit_default`                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`                          |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/platformdirs/__init__.py`                                    |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_pgen___ParserGenerator___make_grammar`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `getwidth`                                                        | `/usr/lib/python3.11/re/_parser.py`                                                              |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `_optimize_charset`                                               | `/usr/lib/python3.11/re/_compiler.py`                                                            |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyInit_black___ranges`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_black____format_str_once`                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -100.00ms | 0.8% → 0.3% | 200.0ms → 100.0ms |   2 → 1 | `CPyTagged_StealAsObject`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Third-party

|  Change |     Delta |           % |              Time | Samples | Function                                                          | Location                                                                                         |
| ------: | --------: | ----------: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -400.00ms | 1.6% → 0.0% |     400.0ms → 0ms |   4 → 0 | `CPyDef_nodes___whitespace`                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -16.7% | -300.00ms | 7.3% → 4.4% |     1.80s → 1.50s | 18 → 15 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms | 1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `CPyDef_lines___Line___is_def`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDict_Build`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPy_AddTraceback`                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `pytree___Node_clear`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_mode___Mode_____contains__`                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_linegen___LineGenerator___line`                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyIter_Send`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -20.0% | -200.00ms | 4.1% → 2.4% |   1.00s → 800.0ms |  10 → 8 | `CPyDef_parse___Parser___pop`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -33.3% | -100.00ms | 1.2% → 0.6% | 300.0ms → 200.0ms |   3 → 2 | `CPyDef_nodes___Visitor___visit_default`                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`                          |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/platformdirs/__init__.py`                                    |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_pgen___ParserGenerator___make_grammar`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyInit_black___ranges`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_black____format_str_once`                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -100.00ms | 0.8% → 0.3% | 200.0ms → 100.0ms |   2 → 1 | `CPyTagged_StealAsObject`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_pytree___pre_order_Leaf_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `pytree___leaves_Base_env_dealloc`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|  Change |     Delta |           % |          Time | Samples | Function            | Location                              |
| ------: | --------: | ----------: | ------------: | ------: | ------------------- | ------------------------------------- |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth`          | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_optimize_charset` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__init__`          | `/usr/lib/python3.11/re/_parser.py`   |

##### Native

|  Change |     Delta |           % |          Time | Samples | Function        | Location                              |
| ------: | --------: | ----------: | ------------: | ------: | --------------- | ------------------------------------- |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__libc_malloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `parse` (`/usr/lib/python3.11/ast.py`)

|  Change |     Delta |      % |            Time | Samples | Location                        |
| ------: | --------: | -----: | --------------: | ------: | ------------------------------- |
| +266.7% | +800.00ms | 100.0% | 300.0ms → 1.10s |  3 → 11 | `/usr/lib/python3.11/ast.py:50` |

##### `__init__` (`<string>`)

|  Change |     Delta |             % |              Time | Samples | Location     |
| ------: | --------: | ------------: | ----------------: | ------: | ------------ |
|     new | +300.00ms |  0.0% → 30.0% |     0ms → 300.0ms |   0 → 3 | `<string>:4` |
| +100.0% | +100.00ms | 33.3% → 20.0% | 100.0ms → 200.0ms |   1 → 2 | `<string>:5` |
| removed | -100.00ms |  33.3% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<string>:6` |
|     new | +100.00ms |  0.0% → 10.0% |     0ms → 100.0ms |   0 → 1 | `<string>:3` |
|     new | +100.00ms |  0.0% → 10.0% |     0ms → 100.0ms |   0 → 1 | `<string>:8` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Location                                     |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `<frozen importlib._bootstrap_external>:729` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py`)

| Change |     Delta |             % |          Time | Samples | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------------------- |
|    new | +200.00ms | 0.0% → 100.0% | 0ms → 200.0ms |   0 → 2 | `/usr/lib/python3.11/dataclasses.py:433` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change |     Delta |             % |          Time | Samples | Location                            |
| -----: | --------: | ------------: | ------------: | ------: | ----------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `<frozen importlib._bootstrap>:241` |

##### `<genexpr>` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Location                                     |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `<frozen importlib._bootstrap_external>:134` |

##### `spec_from_file_location` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Location                                     |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `<frozen importlib._bootstrap_external>:803` |

##### `__hash__` (`/usr/lib/python3.11/enum.py`)

| Change |     Delta |             % |          Time | Samples | Location                           |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `/usr/lib/python3.11/enum.py:1230` |

##### `__exit__` (`/usr/lib/python3.11/contextlib.py`)

| Change |     Delta |             % |          Time | Samples | Location                                |
| -----: | --------: | ------------: | ------------: | ------: | --------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `/usr/lib/python3.11/contextlib.py:551` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                                                   |
| ------: | --------: | ------------: | ------------: | ------: | -------------------------------------------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py:20` |

##### `<module>` (`/venv/lib/python3.11/site-packages/platformdirs/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                                          |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/platformdirs/__init__.py:383` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `/usr/lib/python3.11/re/_parser.py:192` |

##### `_optimize_charset` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                  |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `/usr/lib/python3.11/re/_compiler.py:310` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `/usr/lib/python3.11/re/_parser.py:111` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |   Delta |      % |            Time | Samples | Caller                              | Location                                                                                         |
| ------: | ------: | -----: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| +142.9% | +1.000s | 100.0% | 700.0ms → 1.70s |  7 → 17 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `(unsymbolized)` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                                                                   | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 13.3% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 13.3% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_parse___Parser___push`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +200.00ms |  0.0% → 8.7% | 0ms → 200.0ms |   0 → 2 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +200.00ms |  0.0% → 8.7% | 0ms → 200.0ms |   0 → 2 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |  6.7% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_pytree___Base___prev_sibling`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|  Change |     Delta |      % |            Time | Samples | Caller                                   | Location                                                                                         |
| ------: | --------: | -----: | --------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +266.7% | +800.00ms | 100.0% | 300.0ms → 1.10s |  3 → 11 | `CPyDef_parsing____parse_single_version` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |          Time | Samples | Caller                                  | Location                                                                                         |
| -----: | --------: | -----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +41.2% | +700.00ms | 100.0% | 1.70s → 2.40s | 17 → 24 | `CPyDef_driver___TokenProxy_____next__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`<string>`)

|  Change |     Delta |             % |              Time | Samples | Caller                                                                 | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +300.0% | +300.00ms | 33.3% → 40.0% | 100.0ms → 400.0ms |   1 → 4 | `__init__`                                                             | `<string>`                                                                                       |
| +200.0% | +200.00ms | 33.3% → 30.0% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_lines___LinesBlock___all_lines`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +100.00ms | 33.3% → 20.0% | 100.0ms → 200.0ms |   1 → 2 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 10.0% |     0ms → 100.0ms |   0 → 1 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Node___update_sibling_maps` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
|     new | +700.00ms | 0.0% → 100.0% | 0ms → 700.0ms |   0 → 7 | `CPyDef_pytree___Base___prev_sibling` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_pytree___Base___next_sibling` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time | Samples | Caller                            | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
|     new | +300.00ms |  0.0% → 42.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 50.0% → 42.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_lines___line_to_string`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

| Change |     Delta |             % |          Time | Samples | Caller           | Location                                         |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +400.0% | +400.00ms | 100.0% | 100.0ms → 500.0ms |   1 → 5 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Caller     | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ---------- | ---------------------------------------- |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |              Time | Samples | Caller                                                          | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +200.0% | +200.00ms | 16.7% → 30.0% | 100.0ms → 300.0ms |   1 → 3 | `(unsymbolized)`                                                | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|     new | +200.00ms |  0.0% → 20.0% |     0ms → 200.0ms |   0 → 2 | `malloc`                                                        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| removed | -100.00ms |  16.7% → 0.0% |     100.0ms → 0ms |   1 → 0 | `calloc`                                                        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| removed | -100.00ms |  16.7% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyStr_Build`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |  16.7% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |          Time | Samples | Caller                                  | Location                                                                                         |
| -----: | --------: | -----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +23.1% | +300.00ms | 100.0% | 1.30s → 1.60s | 13 → 16 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___get_features_used` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                  | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +60.0% | +300.00ms | 100.0% | 500.0ms → 800.0ms |   5 → 8 | `CPyDef_black___detect_target_versions` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                            | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |             % |          Time | Samples | Caller                                                                          | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyStr_Build` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |            % |          Time | Samples | Caller                                                             | Location                                                                                         |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|    new | +200.00ms | 0.0% → 66.7% | 0ms → 200.0ms |   0 → 2 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___convert` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |             % |          Time | Samples | Caller                          | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `CPyDef_parse___Parser___shift` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                                              | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___visit_INDENT_LineGenerator_gen_____mypyc_generator_helper__`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                                                                 | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +200.0% | +200.00ms | 100.0% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___Visitor___visit` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |            % |          Time | Samples | Caller                                                                       | Location                                                                                         |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +200.00ms | 0.0% → 66.7% | 0ms → 200.0ms |   0 → 2 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                                                                          | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +100.0% | +200.00ms | 100.0% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |            % |          Time | Samples | Caller                                               | Location                                                                                         |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen____hugging_power_ops_line_to_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___run_transformer`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                            | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| +100.0% | +200.00ms | 100.0% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_strings___sub_twice` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |      % |              Time | Samples | Caller                                     | Location                                                                                         |
| ------: | --------: | -----: | ----------------: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +100.0% | +200.00ms | 100.0% | 200.0ms → 400.0ms |   2 → 4 | `CPyDef_strings___normalize_string_quotes` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_trans___StringSplitter_____mypyc_defaults_setup` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |             % |          Time | Samples | Caller                                                             | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|    new | +200.00ms | 0.0% → 100.0% | 0ms → 200.0ms |   0 → 2 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_create_fn` (`/usr/lib/python3.11/dataclasses.py`)

| Change |     Delta |            % |          Time | Samples | Caller                 | Location                             |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------- | ------------------------------------ |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `_frozen_get_del_attr` | `/usr/lib/python3.11/dataclasses.py` |
|    new | +100.00ms | 0.0% → 50.0% | 0ms → 100.0ms |   0 → 1 | `_init_fn`             | `/usr/lib/python3.11/dataclasses.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change |     Delta |             % |          Time | Samples | Caller          | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | --------------- | ------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `create_module` | `<frozen importlib._bootstrap>` |

##### `<genexpr>` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Caller        | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `_path_split` | `<frozen importlib._bootstrap_external>` |

##### `spec_from_file_location` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Caller      | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ----------- | ---------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `_get_spec` | `<frozen importlib._bootstrap_external>` |

##### `__hash__` (`/usr/lib/python3.11/enum.py`)

| Change |     Delta |             % |          Time | Samples | Caller                              | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_mode___Mode_____contains__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__exit__` (`/usr/lib/python3.11/contextlib.py`)

| Change |     Delta |             % |          Time | Samples | Caller                       | Location                                           |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------- | -------------------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `_close_with_exception_info` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller                                                               | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `read` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller     | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ---------- | ---------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `get_data` | `<frozen importlib._bootstrap_external>` |

##### `malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller                       | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_strings___sub_twice` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `free` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller                                                               | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___whitespace` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                         | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -400.00ms | 100.0% → 0.0% | 400.0ms → 0ms |   4 → 0 | `CPyDef_lines___Line___append` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time | Samples | Caller                                                                       | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -20.0% | -300.00ms | 83.3% → 80.0% |     1.50s → 1.20s | 15 → 12 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +50.0% | +100.00ms | 11.1% → 20.0% | 200.0ms → 300.0ms |   2 → 3 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |   5.6% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_black____format_str_once`                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line___is_def` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 66.7% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                                            | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -66.7% | -200.00ms | 100.0% | 300.0ms → 100.0ms |   3 → 1 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDict_Build` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms |  66.7% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |  33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___append_to_line_delimiter_split_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPy_AddTraceback` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Node_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                  | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `(unsymbolized)`        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___Node_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_mode___Mode_____contains__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                               | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_lines___Line___is_docstring` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___LineGenerator___line` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                                              | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyIter_Send` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |            Time | Samples | Caller                              | Location                                                                                         |
| -----: | --------: | -----: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| -20.0% | -200.00ms | 100.0% | 1.00s → 800.0ms |  10 → 8 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___Visitor___visit_default` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                                                          | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -33.3% | -100.00ms | 100.0% | 300.0ms → 200.0ms |   3 → 2 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/platformdirs/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `CPyDef_pgen___ParserGenerator___make_grammar` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                           | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_pgen___generate_grammar` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Caller     | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth` | `/usr/lib/python3.11/re/_parser.py` |

##### `_optimize_charset` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Caller     | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `CPyInit_black___ranges` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `CPyDef_black____format_str_once` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_black___format_str` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyTagged_StealAsObject` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                      | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | --------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_nodes___whitespace` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___pre_order_Leaf_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                            | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___leaves_Base_env_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                             | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___leaves_Base_gen_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Caller   | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | -------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py` |

##### `__libc_malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |   Delta |             % |            Time |   Samples | Function                                | Location                                                                                         |
| -----: | ------: | ------------: | --------------: | --------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +39.8% | +9.600s | 98.4% → 99.1% | 24.10s → 33.70s | 241 → 337 | `_run_module_as_main`                   | `<frozen runpy>`                                                                                 |
| +38.8% | +9.500s |        100.0% | 24.50s → 34.00s | 245 → 340 | `(unsymbolized)`                        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `CPyDef_black___main`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `CPyPy_black___main`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `new_func`                              | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `invoke`                                | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `main`                                  | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `__call__`                              | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `CPyDef_black___patched_main`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `CPyPy_black___patched_main`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `<module>`                              | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `_run_code`                             | `<frozen runpy>`                                                                                 |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_contents`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_in_place`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___reformat_one`           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___reformat_one`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +62.8% | +8.600s | 55.9% → 65.6% | 13.70s → 22.30s | 137 → 223 | `CPyDef_black___format_str`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.2% | +7.500s | 86.9% → 84.7% | 21.30s → 28.80s | 213 → 288 | `CPyDef_black____format_str_once`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.3% | +3.000s | 34.7% → 33.8% |  8.50s → 11.50s |  85 → 115 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.3% | +3.000s | 34.7% → 33.8% |  8.50s → 11.50s |  85 → 115 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Third-party

| Change |   Delta |             % |            Time |   Samples | Function                                                                            | Location                                                                                         |
| -----: | ------: | ------------: | --------------: | --------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `CPyDef_black___main`                                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `CPyPy_black___main`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `new_func`                                                                          | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `invoke`                                                                            | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `main`                                                                              | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `__call__`                                                                          | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `CPyDef_black___patched_main`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `CPyPy_black___patched_main`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +37.3% | +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `<module>`                                                                          | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_contents`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_in_place`                                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___reformat_one`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +36.9% | +8.600s | 95.1% → 93.8% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___reformat_one`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +62.8% | +8.600s | 55.9% → 65.6% | 13.70s → 22.30s | 137 → 223 | `CPyDef_black___format_str`                                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.2% | +7.500s | 86.9% → 84.7% | 21.30s → 28.80s | 213 → 288 | `CPyDef_black____format_str_once`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.3% | +3.000s | 34.7% → 33.8% |  8.50s → 11.50s |  85 → 115 | `CPyDef_driver___Driver___parse_tokens`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.3% | +3.000s | 34.7% → 33.8% |  8.50s → 11.50s |  85 → 115 | `CPyDef_driver___Driver___parse_string`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +35.3% | +3.000s | 34.7% → 33.8% |  8.50s → 11.50s |  85 → 115 | `CPyDef_parsing___lib2to3_parse`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +46.0% | +2.300s | 20.4% → 21.5% |   5.00s → 7.30s |   50 → 73 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +25.0% | +2.000s | 32.7% → 29.4% |  8.00s → 10.00s |  80 → 100 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|  Change |     Delta |             % |            Time |   Samples | Function                    | Location                                 |
| ------: | --------: | ------------: | --------------: | --------: | --------------------------- | ---------------------------------------- |
|  +39.8% |   +9.600s | 98.4% → 99.1% | 24.10s → 33.70s | 241 → 337 | `_run_module_as_main`       | `<frozen runpy>`                         |
|  +37.3% |   +8.700s | 95.1% → 94.1% | 23.30s → 32.00s | 233 → 320 | `_run_code`                 | `<frozen runpy>`                         |
| +150.0% |   +1.200s |   3.3% → 5.9% | 800.0ms → 2.00s |    8 → 20 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| +150.0% |   +1.200s |   3.3% → 5.9% | 800.0ms → 2.00s |    8 → 20 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
| +150.0% |   +1.200s |   3.3% → 5.9% | 800.0ms → 2.00s |    8 → 20 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
| +150.0% |   +1.200s |   3.3% → 5.9% | 800.0ms → 2.00s |    8 → 20 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
| +125.0% |   +1.000s |   3.3% → 5.3% | 800.0ms → 1.80s |    8 → 18 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |
| +112.5% | +900.00ms |   3.3% → 5.0% | 800.0ms → 1.70s |    8 → 17 | `create_module`             | `<frozen importlib._bootstrap_external>` |
| +112.5% | +900.00ms |   3.3% → 5.0% | 800.0ms → 1.70s |    8 → 17 | `_get_module_details`       | `<frozen runpy>`                         |
| +175.0% | +700.00ms |   1.6% → 3.2% | 400.0ms → 1.10s |    4 → 11 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|     new | +700.00ms |   0.0% → 2.1% |   0ms → 700.0ms |     0 → 7 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
| +140.0% | +700.00ms |   2.0% → 3.5% | 500.0ms → 1.20s |    5 → 12 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
|     new | +600.00ms |   0.0% → 1.8% |   0ms → 600.0ms |     0 → 6 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|     new | +500.00ms |   0.0% → 1.5% |   0ms → 500.0ms |     0 → 5 | `<module>`                  | `/usr/lib/python3.11/json/decoder.py`    |
|     new | +500.00ms |   0.0% → 1.5% |   0ms → 500.0ms |     0 → 5 | `<module>`                  | `/usr/lib/python3.11/json/__init__.py`   |
|     new | +400.00ms |   0.0% → 1.2% |   0ms → 400.0ms |     0 → 4 | `<module>`                  | `/usr/lib/python3.11/re/__init__.py`     |
|     new | +300.00ms |   0.0% → 0.9% |   0ms → 300.0ms |     0 → 3 | `<module>`                  | `/usr/lib/python3.11/contextlib.py`      |
|     new | +300.00ms |   0.0% → 0.9% |   0ms → 300.0ms |     0 → 3 | `<module>`                  | `<frozen importlib.util>`                |
|     new | +300.00ms |   0.0% → 0.9% |   0ms → 300.0ms |     0 → 3 | `exec_module`               | `<frozen importlib._bootstrap>`          |
|     new | +300.00ms |   0.0% → 0.9% |   0ms → 300.0ms |     0 → 3 | `<module>`                  | `<frozen runpy>`                         |

##### Native

|  Change |     Delta |           % |              Time |   Samples | Function              | Location                                         |
| ------: | --------: | ----------: | ----------------: | --------: | --------------------- | ------------------------------------------------ |
|  +38.8% |   +9.500s |      100.0% |   24.50s → 34.00s | 245 → 340 | `(unsymbolized)`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |     1 → 4 | `(unsymbolized)`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |     1 → 4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |     1 → 4 | `_dl_catch_error`     | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |     1 → 4 | `dlopen`              | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |     1 → 4 | `realloc`             | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |     0 → 3 | `malloc`              | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +100.00ms | 0.0% → 0.3% |     0ms → 100.0ms |     0 → 1 | `read`                | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|     new | +100.00ms | 0.0% → 0.3% |     0ms → 100.0ms |     0 → 1 | `(unsymbolized)`      | `<unknown>`                                      |
|     new | +100.00ms | 0.0% → 0.3% |     0ms → 100.0ms |     0 → 1 | `free`                | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### Ours

|  Change |     Delta |           % |            Time | Samples | Function   | Location   |
| ------: | --------: | ----------: | --------------: | ------: | ---------- | ---------- |
| +233.3% | +700.00ms | 1.2% → 2.9% | 300.0ms → 1.00s |  3 → 10 | `__init__` | `<string>` |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time | Samples | Function                                                          | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -14.5% |   -1.100s | 31.0% → 19.1% |     7.60s → 6.50s | 76 → 65 | `CPyDef_black___assert_stable`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -83.3% | -500.00ms |   2.4% → 0.3% | 600.0ms → 100.0ms |   6 → 1 | `pytree___Node_clear`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -400.00ms |   2.4% → 0.6% | 600.0ms → 200.0ms |   6 → 2 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `compile`                                                         | `/usr/lib/python3.11/re/_compiler.py`                                                            |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `_compile`                                                        | `/usr/lib/python3.11/re/__init__.py`                                                             |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `CPyDef_lines___Line___is_def`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -300.00ms |   2.4% → 0.9% | 600.0ms → 300.0ms |   6 → 3 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDict_Build`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_env_dealloc`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_gen_dealloc`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `_code`                                                           | `/usr/lib/python3.11/re/_compiler.py`                                                            |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `compile`                                                         | `/usr/lib/python3.11/re/__init__.py`                                                             |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `Version`                                                         | `/venv/lib/python3.11/site-packages/packaging/version.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/version.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/_ranges.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/specifiers.py`                                     |
|  -50.0% | -200.00ms |   1.6% → 0.6% | 400.0ms → 200.0ms |   4 → 2 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___Leaf_dealloc`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyIter_Send`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_env_clear`                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Third-party

|  Change |     Delta |             % |              Time | Samples | Function                                                          | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -14.5% |   -1.100s | 31.0% → 19.1% |     7.60s → 6.50s | 76 → 65 | `CPyDef_black___assert_stable`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -83.3% | -500.00ms |   2.4% → 0.3% | 600.0ms → 100.0ms |   6 → 1 | `pytree___Node_clear`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -400.00ms |   2.4% → 0.6% | 600.0ms → 200.0ms |   6 → 2 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |   3 → 0 | `CPyDef_lines___Line___is_def`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -300.00ms |   2.4% → 0.9% | 600.0ms → 300.0ms |   6 → 3 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDict_Build`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_env_dealloc`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -66.7% | -200.00ms |   1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_gen_dealloc`                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `Version`                                                         | `/venv/lib/python3.11/site-packages/packaging/version.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/version.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/_ranges.py`                                        |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/packaging/specifiers.py`                                     |
|  -50.0% | -200.00ms |   1.6% → 0.6% | 400.0ms → 200.0ms |   4 → 2 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___Leaf_dealloc`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyIter_Send`                                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_env_clear`                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_env_dealloc`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms |   0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___Node_dealloc`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -33.3% | -100.00ms |   1.2% → 0.6% | 300.0ms → 200.0ms |   3 → 2 | `linegen___visit_default_LineGenerator_env_clear`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |   0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>`                                                        | `/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`                          |

##### Standard library

|  Change |     Delta |           % |          Time | Samples | Function            | Location                              |
| ------: | --------: | ----------: | ------------: | ------: | ------------------- | ------------------------------------- |
| removed | -300.00ms | 1.2% → 0.0% | 300.0ms → 0ms |   3 → 0 | `compile`           | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -300.00ms | 1.2% → 0.0% | 300.0ms → 0ms |   3 → 0 | `_compile`          | `/usr/lib/python3.11/re/__init__.py`  |
| removed | -200.00ms | 0.8% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_code`             | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -200.00ms | 0.8% → 0.0% | 200.0ms → 0ms |   2 → 0 | `compile`           | `/usr/lib/python3.11/re/__init__.py`  |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth`          | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile_info`     | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_optimize_charset` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile`          | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__init__`          | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse`            | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse_sub`        | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `parse`             | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `findall`           | `/usr/lib/python3.11/re/__init__.py`  |

##### Native

|  Change |     Delta |           % |          Time | Samples | Function        | Location                              |
| ------: | --------: | ----------: | ------------: | ------: | --------------- | ------------------------------------- |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `calloc`        | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| removed | -100.00ms | 0.4% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__libc_malloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_run_module_as_main` (`<frozen runpy>`)

| Change |   Delta |      % |            Time |   Samples | Caller           | Location                              |
| -----: | ------: | -----: | --------------: | --------: | ---------------- | ------------------------------------- |
| +39.8% | +9.600s | 100.0% | 24.10s → 33.70s | 241 → 337 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |           % |              Time | Samples | Caller                | Location                              |
| ------: | --------: | ----------: | ----------------: | ------: | --------------------- | ------------------------------------- |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `dlopen`              | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `(unsymbolized)`      | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `realloc`             | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `malloc`              | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `CPyDef_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Caller               | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| +37.3% | +8.700s | 100.0% | 23.30s → 32.00s | 233 → 320 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |              % |            Time |   Samples | Caller     | Location                                                 |
| -----: | --------: | -------------: | --------------: | --------: | ---------- | -------------------------------------------------------- |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

| Change |     Delta |              % |            Time |   Samples | Caller                                  | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `invoke`                                | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |   Delta |      % |            Time |   Samples | Caller   | Location                                           |
| -----: | ------: | -----: | --------------: | --------: | -------- | -------------------------------------------------- |
| +37.3% | +8.700s | 100.0% | 23.30s → 32.00s | 233 → 320 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |
| +37.3% | +8.700s | 100.0% | 23.30s → 32.00s | 233 → 320 | `main`   | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |   Delta |      % |            Time |   Samples | Caller     | Location                                           |
| -----: | ------: | -----: | --------------: | --------: | ---------- | -------------------------------------------------- |
| +37.3% | +8.700s | 100.0% | 23.30s → 32.00s | 233 → 320 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |              % |            Time |   Samples | Caller                        | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `<module>`                    | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |

##### `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Caller                       | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| +37.3% | +8.700s | 100.0% | 23.30s → 32.00s | 233 → 320 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |              % |            Time |   Samples | Caller      | Location                                               |
| -----: | --------: | -------------: | --------------: | --------: | ----------- | ------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `<module>`  | `/venv/lib/python3.11/site-packages/black/__main__.py` |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `_run_code` | `<frozen runpy>`                                       |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

| Change |     Delta |              % |            Time |   Samples | Caller                        | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `_run_code`                   | `<frozen runpy>`                                                                                 |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `CPyDef_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_code` (`<frozen runpy>`)

| Change |   Delta |      % |            Time |   Samples | Caller                | Location         |
| -----: | ------: | -----: | --------------: | --------: | --------------------- | ---------------- |
| +37.3% | +8.700s | 100.0% | 23.30s → 32.00s | 233 → 320 | `_run_module_as_main` | `<frozen runpy>` |

##### `CPyDef_black___format_file_contents` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Caller                                | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_in_place` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_in_place` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Caller                        | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Caller                       | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Caller                | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Caller                                | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +62.8% | +8.600s | 100.0% | 13.70s → 22.30s | 137 → 223 | `CPyDef_black___format_file_contents` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black____format_str_once` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |             % |            Time |   Samples | Caller                         | Location                                                                                         |
| -----: | ------: | ------------: | --------------: | --------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| +62.8% | +8.600s | 64.3% → 77.4% | 13.70s → 22.30s | 137 → 223 | `CPyDef_black___format_str`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| -14.5% | -1.100s | 35.7% → 22.6% |   7.60s → 6.50s |   76 → 65 | `CPyDef_black___assert_stable` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |           Time |  Samples | Caller                                  | Location                                                                                         |
| -----: | ------: | -----: | -------------: | -------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +35.3% | +3.000s | 100.0% | 8.50s → 11.50s | 85 → 115 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_string` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |           Time |  Samples | Caller                           | Location                                                                                         |
| -----: | ------: | -----: | -------------: | -------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| +35.3% | +3.000s | 100.0% | 8.50s → 11.50s | 85 → 115 | `CPyDef_parsing___lib2to3_parse` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing___lib2to3_parse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |           Time |  Samples | Caller                            | Location                                                                                         |
| -----: | ------: | -----: | -------------: | -------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| +35.3% | +3.000s | 100.0% | 8.50s → 11.50s | 85 → 115 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |          Time | Samples | Caller                                                          | Location                                                                                         |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +46.0% | +2.300s | 100.0% | 5.00s → 7.30s | 50 → 73 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time |  Samples | Caller                                                                              | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | -------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +57.8% |   +2.600s | 56.3% → 71.0% |     4.50s → 7.10s |  45 → 71 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +25.0% |   +2.000s |        100.0% |    8.00s → 10.00s | 80 → 100 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +22.8% |   +1.800s | 98.8% → 97.0% |     7.90s → 9.70s |  79 → 97 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   +7.4% | +200.00ms | 33.8% → 29.0% |     2.70s → 2.90s |  27 → 29 | `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +100.00ms |   1.3% → 2.0% | 100.0ms → 200.0ms |    1 → 2 | `CPyDef_linegen___visit_NUMBER_LineGenerator_gen_____mypyc_generator_helper__`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change |     Delta |              % |            Time | Samples | Caller             | Location                                 |
| ------: | --------: | -------------: | --------------: | ------: | ------------------ | ---------------------------------------- |
| +112.5% | +900.00ms | 100.0% → 85.0% | 800.0ms → 1.70s |  8 → 17 | `create_module`    | `<frozen importlib._bootstrap_external>` |
| +175.0% | +700.00ms |  50.0% → 55.0% | 400.0ms → 1.10s |  4 → 11 | `exec_module`      | `<frozen importlib._bootstrap_external>` |
|     new | +200.00ms |   0.0% → 10.0% |   0ms → 200.0ms |   0 → 2 | `_handle_fromlist` | `<frozen importlib._bootstrap>`          |
|     new | +100.00ms |    0.0% → 5.0% |   0ms → 100.0ms |   0 → 1 | `create_module`    | `<frozen importlib._bootstrap>`          |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |   Delta |      % |            Time | Samples | Caller                    | Location                        |
| ------: | ------: | -----: | --------------: | ------: | ------------------------- | ------------------------------- |
| +150.0% | +1.200s | 100.0% | 800.0ms → 2.00s |  8 → 20 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |   Delta |      % |            Time | Samples | Caller           | Location                        |
| ------: | ------: | -----: | --------------: | ------: | ---------------- | ------------------------------- |
| +150.0% | +1.200s | 100.0% | 800.0ms → 2.00s |  8 → 20 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|  Change |     Delta |              % |            Time | Samples | Caller                     | Location                                                                                         |
| ------: | --------: | -------------: | --------------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------ |
| +112.5% | +900.00ms | 100.0% → 85.0% | 800.0ms → 1.70s |  8 → 17 | `_get_module_details`      | `<frozen runpy>`                                                                                 |
|     new | +500.00ms |   0.0% → 25.0% |   0ms → 500.0ms |   0 → 5 | `<module>`                 | `/usr/lib/python3.11/json/decoder.py`                                                            |
|     new | +500.00ms |   0.0% → 25.0% |   0ms → 500.0ms |   0 → 5 | `<module>`                 | `/usr/lib/python3.11/json/__init__.py`                                                           |
|  +50.0% | +400.00ms | 100.0% → 60.0% | 800.0ms → 1.20s |  8 → 12 | `CPyImport_ImportFromMany` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +400.00ms |   0.0% → 20.0% |   0ms → 400.0ms |   0 → 4 | `<module>`                 | `/usr/lib/python3.11/re/__init__.py`                                                             |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|  Change |   Delta |      % |            Time | Samples | Caller           | Location                        |
| ------: | ------: | -----: | --------------: | ------: | ---------------- | ------------------------------- |
| +125.0% | +1.000s | 100.0% | 800.0ms → 1.80s |  8 → 18 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

|  Change |     Delta |      % |            Time | Samples | Caller             | Location                        |
| ------: | --------: | -----: | --------------: | ------: | ------------------ | ------------------------------- |
| +112.5% | +900.00ms | 100.0% | 800.0ms → 1.70s |  8 → 17 | `module_from_spec` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|  Change |     Delta |      % |            Time | Samples | Caller                | Location         |
| ------: | --------: | -----: | --------------: | ------: | --------------------- | ---------------- |
| +112.5% | +900.00ms | 100.0% | 800.0ms → 1.70s |  8 → 17 | `_get_module_details` | `<frozen runpy>` |
| +112.5% | +900.00ms | 100.0% | 800.0ms → 1.70s |  8 → 17 | `_run_module_as_main` | `<frozen runpy>` |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|  Change |     Delta |      % |            Time | Samples | Caller           | Location                        |
| ------: | --------: | -----: | --------------: | ------: | ---------------- | ------------------------------- |
| +175.0% | +700.00ms | 100.0% | 400.0ms → 1.10s |  4 → 11 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Caller        | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------- |
|    new | +700.00ms | 0.0% → 100.0% | 0ms → 700.0ms |   0 → 7 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|  Change |     Delta |      % |            Time | Samples | Caller                                   | Location                                                                                         |
| ------: | --------: | -----: | --------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +140.0% | +700.00ms | 100.0% | 500.0ms → 1.20s |  5 → 12 | `CPyDef_parsing____parse_single_version` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |             % |          Time | Samples | Caller     | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ---------- | ---------------------------------------- |
|    new | +600.00ms | 0.0% → 100.0% | 0ms → 600.0ms |   0 → 6 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `<module>` (`/usr/lib/python3.11/json/decoder.py`)

| Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
|    new | +500.00ms | 0.0% → 100.0% | 0ms → 500.0ms |   0 → 5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/json/__init__.py`)

| Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
|    new | +500.00ms | 0.0% → 100.0% | 0ms → 500.0ms |   0 → 5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/re/__init__.py`)

| Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/contextlib.py`)

| Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`<frozen importlib.util>`)

| Change |     Delta |             % |          Time | Samples | Caller        | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ------------- | ------------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `exec_module` | `<frozen importlib._bootstrap>` |

##### `exec_module` (`<frozen importlib._bootstrap>`)

| Change |     Delta |             % |          Time | Samples | Caller           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `<module>` (`<frozen runpy>`)

| Change |     Delta |             % |          Time | Samples | Caller        | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ------------- | ------------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `exec_module` | `<frozen importlib._bootstrap>` |

##### `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|  Change |     Delta |      % |              Time | Samples | Caller                | Location                                         |
| ------: | --------: | -----: | ----------------: | ------: | --------------------- | ------------------------------------------------ |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `(unsymbolized)`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `(unsymbolized)`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### `_dl_catch_exception` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |      % |              Time | Samples | Caller            | Location                                         |
| ------: | --------: | -----: | ----------------: | ------: | ----------------- | ------------------------------------------------ |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `(unsymbolized)`  | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `_dl_catch_error` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### `_dl_catch_error` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |      % |              Time | Samples | Caller           | Location                              |
| ------: | --------: | -----: | ----------------: | ------: | ---------------- | ------------------------------------- |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `dlopen` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |      % |              Time | Samples | Caller                      | Location                        |
| ------: | --------: | -----: | ----------------: | ------: | --------------------------- | ------------------------------- |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |              % |              Time | Samples | Caller                                                               | Location                                                                                         |
| ------: | --------: | -------------: | ----------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +200.0% | +200.00ms | 100.0% → 75.0% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |   0.0% → 25.0% |     0ms → 100.0ms |   0 → 1 | `CPyDef_black___assert_equivalent`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |            % |          Time | Samples | Caller                       | Location                                                                                         |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `_compile_bytecode`          | `<frozen importlib._bootstrap_external>`                                                         |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `CPyDef_strings___sub_twice` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms | 0.0% → 33.3% | 0ms → 100.0ms |   0 → 1 | `parse`                      | `/usr/lib/python3.11/ast.py`                                                                     |

##### `read` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller     | Location                                 |
| -----: | --------: | ------------: | ------------: | ------: | ---------- | ---------------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `get_data` | `<frozen importlib._bootstrap_external>` |

##### `(unsymbolized)` (`<unknown>`)

| Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `(unsymbolized)`            | `<unknown>`                     |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `free` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |             % |          Time | Samples | Caller                                                               | Location                                                                                         |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`<string>`)

|  Change |     Delta |             % |              Time | Samples | Caller                                                                 | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +300.0% | +300.00ms | 33.3% → 40.0% | 100.0ms → 400.0ms |   1 → 4 | `__init__`                                                             | `<string>`                                                                                       |
| +150.0% | +300.00ms | 66.7% → 50.0% | 200.0ms → 500.0ms |   2 → 5 | `CPyDef_lines___LinesBlock___all_lines`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +200.0% | +200.00ms | 33.3% → 30.0% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 10.0% |     0ms → 100.0ms |   0 → 1 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 10.0% |     0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___bracket_split_build_line`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___assert_stable` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |          Time | Samples | Caller                                           | Location                                                                                         |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| -14.5% | -1.100s | 100.0% | 7.60s → 6.50s | 76 → 65 | `CPyDef_black___check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Node_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |              % |              Time | Samples | Caller                                  | Location                                                                                         |
| ------: | --------: | -------------: | ----------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -300.00ms |   50.0% → 0.0% |     300.0ms → 0ms |   3 → 0 | `(unsymbolized)`                        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  -50.0% | -100.00ms | 33.3% → 100.0% | 200.0ms → 100.0ms |   2 → 1 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |   16.7% → 0.0% |     100.0ms → 0ms |   1 → 0 | `parse`                                 | `/usr/lib/python3.11/ast.py`                                                                     |
| removed | -100.00ms |   16.7% → 0.0% |     100.0ms → 0ms |   1 → 0 | `pytree___Node_dealloc`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                                            | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -66.7% | -400.00ms | 100.0% | 600.0ms → 200.0ms |   6 → 2 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| -66.7% | -400.00ms | 100.0% | 600.0ms → 200.0ms |   6 → 2 | `CPyDef_black___get_features_used`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Caller     | Location                             |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------------------ |
| removed | -300.00ms | 100.0% → 0.0% | 300.0ms → 0ms |   3 → 0 | `_compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location                             |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ------------------------------------ |
| removed | -200.00ms | 66.7% → 0.0% | 200.0ms → 0ms |   2 → 0 | `compile` | `/usr/lib/python3.11/re/__init__.py` |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `findall` | `/usr/lib/python3.11/re/__init__.py` |

##### `CPyDef_lines___Line___is_def` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 66.7% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___EmptyLineTracker___maybe_empty_lines` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                            | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| -50.0% | -300.00ms | 100.0% | 600.0ms → 300.0ms |   6 → 3 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDict_Build` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms |  66.7% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |  33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `CPyDef_linegen___append_to_line_delimiter_split_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `nodes___visit_default_Visitor_env_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                      | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -66.7% | -200.00ms | 100.0% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_gen_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `nodes___visit_default_Visitor_gen_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                            | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -66.7% | -200.00ms | 100.0% | 300.0ms → 100.0ms |   3 → 1 | `linegen___visit_default_LineGenerator_env_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | --------- | ------------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location                                                  |
| ------: | --------: | ------------: | ------------: | ------: | --------- | --------------------------------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `Version` | `/venv/lib/python3.11/site-packages/packaging/version.py` |

##### `Version` (`/venv/lib/python3.11/site-packages/packaging/version.py`)

|  Change |     Delta |             % |          Time | Samples | Caller     | Location                                                  |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | --------------------------------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/version.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `CPyDef_lines___EmptyLineTracker____maybe_empty_lines` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                                | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -50.0% | -200.00ms | 100.0% | 400.0ms → 200.0ms |   4 → 2 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Leaf_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___Node_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyIter_Send` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___pre_order_Node_env_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_env_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___pre_order_Node_env_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                                | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_gen_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Node_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Caller                | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___Node_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `linegen___visit_default_LineGenerator_env_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Caller                                              | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -33.3% | -100.00ms | 100.0% | 300.0ms → 200.0ms |   3 → 2 | `linegen___visit_default_LineGenerator_env_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`)

|  Change |     Delta |             % |          Time | Samples | Caller                      | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Caller          | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | --------------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth`      | `/usr/lib/python3.11/re/_parser.py`   |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile_info` | `/usr/lib/python3.11/re/_compiler.py` |

##### `_compile_info` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Caller  | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_code` | `/usr/lib/python3.11/re/_compiler.py` |

##### `_optimize_charset` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Caller     | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Caller     | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_code`    | `/usr/lib/python3.11/re/_compiler.py` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Caller   | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | -------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Caller       | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ------------ | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Caller   | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | -------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `parse`  | `/usr/lib/python3.11/re/_parser.py` |

##### `parse` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | --------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `findall` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Caller                                     | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_strings___normalize_string_quotes` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `calloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Caller           | Location                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `__libc_malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Caller                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_run_module_as_main` (`<frozen runpy>`)

|  Change |     Delta |             % |            Time |   Samples | Callee                | Location         |
| ------: | --------: | ------------: | --------------: | --------: | --------------------- | ---------------- |
|  +37.3% |   +8.700s | 96.7% → 95.0% | 23.30s → 32.00s | 233 → 320 | `_run_code`           | `<frozen runpy>` |
| +112.5% | +900.00ms |   3.3% → 5.0% | 800.0ms → 1.70s |    8 → 17 | `_get_module_details` | `<frozen runpy>` |

##### `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |              Time |   Samples | Callee                | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------------------------------------------------ |
|  +39.8% |   +9.600s | 98.4% → 99.1% |   24.10s → 33.70s | 241 → 337 | `_run_module_as_main` | `<frozen runpy>`                                                                                 |
| +300.0% | +300.00ms |   0.4% → 1.2% | 100.0ms → 400.0ms |     1 → 4 | `(unsymbolized)`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`                                                 |
| +300.0% | +300.00ms |   0.4% → 1.2% | 100.0ms → 400.0ms |     1 → 4 | `_dl_catch_error`     | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| removed | -300.00ms |   1.2% → 0.0% |     300.0ms → 0ms |     3 → 0 | `pytree___Node_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +300.00ms |   0.0% → 0.9% |     0ms → 300.0ms |     0 → 3 | `_find_and_load`      | `<frozen importlib._bootstrap>`                                                                  |

##### `CPyDef_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |              % |            Time |   Samples | Callee                       | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `exit`                       | `/venv/lib/python3.11/site-packages/click/core.py`                                               |

##### `CPyPy_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Callee                | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| +37.3% | +8.700s | 100.0% | 23.30s → 32.00s | 233 → 320 | `CPyDef_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

| Change |   Delta |              % |            Time |   Samples | Callee               | Location                                                                                         |
| -----: | ------: | -------------: | --------------: | --------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |              % |            Time |   Samples | Callee               | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| +37.3% |   +8.700s |         100.0% | 23.30s → 32.00s | 233 → 320 | `invoke`             | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `new_func`           | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |   Delta |      % |            Time |   Samples | Callee   | Location                                           |
| -----: | ------: | -----: | --------------: | --------: | -------- | -------------------------------------------------- |
| +37.3% | +8.700s | 100.0% | 23.30s → 32.00s | 233 → 320 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |   Delta |      % |            Time |   Samples | Callee | Location                                           |
| -----: | ------: | -----: | --------------: | --------: | ------ | -------------------------------------------------- |
| +37.3% | +8.700s | 100.0% | 23.30s → 32.00s | 233 → 320 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |              % |            Time |   Samples | Callee     | Location                                               |
| -----: | --------: | -------------: | --------------: | --------: | ---------- | ------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py`     |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `CPyPy_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Callee                        | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| +37.3% | +8.700s | 100.0% | 23.30s → 32.00s | 233 → 320 | `CPyDef_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

| Change |     Delta |              % |            Time |   Samples | Callee                       | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `__call__`                   | `/venv/lib/python3.11/site-packages/click/core.py`                                               |

##### `_run_code` (`<frozen runpy>`)

| Change |     Delta |              % |            Time |   Samples | Callee                       | Location                                                                                         |
| -----: | --------: | -------------: | --------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% |   +8.600s | 100.0% → 99.7% | 23.30s → 31.90s | 233 → 319 | `<module>`                   | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
|    new | +100.00ms |    0.0% → 0.3% |   0ms → 100.0ms |     0 → 1 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_contents` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |    Delta |             % |            Time |   Samples | Callee                                           | Location                                                                                         |
| -----: | -------: | ------------: | --------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +62.8% |  +8.600s | 58.8% → 69.9% | 13.70s → 22.30s | 137 → 223 | `CPyDef_black___format_str`                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    ~0% | +<0.01µs | 41.2% → 30.1% |           9.60s |        96 | `CPyDef_black___check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_in_place` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Callee                                | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_contents` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Callee                                | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___format_file_in_place` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Callee                        | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| +36.9% | +8.600s | 100.0% | 23.30s → 31.90s | 233 → 319 | `CPyDef_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |            Time |   Samples | Callee                            | Location                                                                                         |
| -----: | ------: | -----: | --------------: | --------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| +62.8% | +8.600s | 100.0% | 13.70s → 22.30s | 137 → 223 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black____format_str_once` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time |  Samples | Callee                                                             | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | -------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  +35.3% |   +3.000s |         39.9% |    8.50s → 11.50s | 85 → 115 | `CPyDef_parsing___lib2to3_parse`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +23.5% |   +1.900s | 38.0% → 34.7% |    8.10s → 10.00s | 81 → 100 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +94.7% |   +1.800s |  8.9% → 12.8% |     1.90s → 3.70s |  19 → 37 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +250.0% | +500.00ms |   0.9% → 2.4% | 200.0ms → 700.0ms |    2 → 7 | `CPyDef_lines___LinesBlock___all_lines`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +400.00ms |   0.0% → 1.4% |     0ms → 400.0ms |    0 → 4 | `CPyDef_lines___Line_____str__`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time | Samples | Callee                                               | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +41.9% |   +1.800s | 50.6% → 53.0% |     4.30s → 6.10s | 43 → 61 | `CPyDef_parse___Parser___addtoken`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  +33.3% | +800.00ms | 28.2% → 27.8% |     2.40s → 3.20s | 24 → 32 | `CPyDef_driver___TokenProxy_____next__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -100.00ms |   2.4% → 0.9% | 200.0ms → 100.0ms |   2 → 1 | `pytree___Node_clear`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +100.0% | +100.00ms |   1.2% → 1.7% | 100.0ms → 200.0ms |   1 → 2 | `CPyDef_driver___Driver____partially_consume_prefix` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |   0.0% → 0.9% |     0ms → 100.0ms |   0 → 1 | `new_func`                                           | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |

##### `CPyDef_driver___Driver___parse_string` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |           Time |  Samples | Callee                                  | Location                                                                                         |
| -----: | ------: | -----: | -------------: | -------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +35.3% | +3.000s | 100.0% | 8.50s → 11.50s | 85 → 115 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing___lib2to3_parse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |           Time |  Samples | Callee                                  | Location                                                                                         |
| -----: | ------: | -----: | -------------: | -------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +35.3% | +3.000s | 100.0% | 8.50s → 11.50s | 85 → 115 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time | Samples | Callee                                                                          | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +57.8% |   +2.600s | 90.0% → 97.3% |     4.50s → 7.10s | 45 → 71 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -100.00ms |   4.0% → 1.4% | 200.0ms → 100.0ms |   2 → 1 | `CPyDef_linegen___LineGenerator___line`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |   2.0% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_nodes___is_stub_suite`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |              % |              Time | Samples | Callee                                                                  | Location                                                                                         |
| -----: | --------: | -------------: | ----------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +23.7% |   +1.900s | 100.0% → 99.0% |     8.00s → 9.90s | 80 → 99 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +80.0% | +400.00ms |    6.3% → 9.0% | 500.0ms → 900.0ms |   5 → 9 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +20.0% | +300.00ms |  18.8% → 18.0% |     1.50s → 1.80s | 15 → 18 | `CPyDef_lines___Line___append`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|    new | +300.00ms |    0.0% → 3.0% |     0ms → 300.0ms |   0 → 3 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| +33.3% | +100.00ms |    3.8% → 4.0% | 300.0ms → 400.0ms |   3 → 4 | `CPyDef_nodes___Visitor___visit_default`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change |     Delta |              % |              Time | Samples | Callee                  | Location                                                                                         |
| ------: | --------: | -------------: | ----------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| +100.0% | +800.00ms | 100.0% → 80.0% |   800.0ms → 1.60s |  8 → 16 | `CPyInit_black`         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +500.00ms |   0.0% → 25.0% |     0ms → 500.0ms |   0 → 5 | `<module>`              | `/usr/lib/python3.11/json/decoder.py`                                                            |
|     new | +500.00ms |   0.0% → 25.0% |     0ms → 500.0ms |   0 → 5 | `<module>`              | `/usr/lib/python3.11/json/__init__.py`                                                           |
|     new | +400.00ms |   0.0% → 20.0% |     0ms → 400.0ms |   0 → 4 | `<module>`              | `/usr/lib/python3.11/re/__init__.py`                                                             |
| +200.0% | +400.00ms |  25.0% → 30.0% | 200.0ms → 600.0ms |   2 → 6 | `CPyInit_black___nodes` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |     Delta |              % |            Time | Samples | Callee             | Location                                 |
| ------: | --------: | -------------: | --------------: | ------: | ------------------ | ---------------------------------------- |
| +125.0% |   +1.000s | 100.0% → 90.0% | 800.0ms → 1.80s |  8 → 18 | `module_from_spec` | `<frozen importlib._bootstrap>`          |
| +175.0% | +700.00ms |  50.0% → 55.0% | 400.0ms → 1.10s |  4 → 11 | `exec_module`      | `<frozen importlib._bootstrap_external>` |
|     new | +300.00ms |   0.0% → 15.0% |   0ms → 300.0ms |   0 → 3 | `exec_module`      | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |     Delta |           % |            Time | Samples | Callee           | Location                        |
| ------: | --------: | ----------: | --------------: | ------: | ---------------- | ------------------------------- |
| +150.0% |   +1.200s |      100.0% | 800.0ms → 2.00s |  8 → 20 | `_load_unlocked` | `<frozen importlib._bootstrap>` |
|     new | +100.00ms | 0.0% → 5.0% |   0ms → 100.0ms |   0 → 1 | `_find_spec`     | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|  Change |   Delta |      % |            Time | Samples | Callee                    | Location                        |
| ------: | ------: | -----: | --------------: | ------: | ------------------------- | ------------------------------- |
| +150.0% | +1.200s | 100.0% | 800.0ms → 2.00s |  8 → 20 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|  Change |     Delta |              % |            Time | Samples | Callee               | Location                                 |
| ------: | --------: | -------------: | --------------: | ------: | -------------------- | ---------------------------------------- |
| +112.5% | +900.00ms | 100.0% → 94.4% | 800.0ms → 1.70s |  8 → 17 | `create_module`      | `<frozen importlib._bootstrap_external>` |
|     new | +100.00ms |    0.0% → 5.6% |   0ms → 100.0ms |   0 → 1 | `_init_module_attrs` | `<frozen importlib._bootstrap>`          |
|     new | +100.00ms |    0.0% → 5.6% |   0ms → 100.0ms |   0 → 1 | `create_module`      | `<frozen importlib._bootstrap>`          |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

|  Change |     Delta |      % |            Time | Samples | Callee                      | Location                        |
| ------: | --------: | -----: | --------------: | ------: | --------------------------- | ------------------------------- |
| +112.5% | +900.00ms | 100.0% | 800.0ms → 1.70s |  8 → 17 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|  Change |     Delta |      % |            Time | Samples | Callee                | Location                        |
| ------: | --------: | -----: | --------------: | ------: | --------------------- | ------------------------------- |
| +112.5% | +900.00ms | 100.0% | 800.0ms → 1.70s |  8 → 17 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| +112.5% | +900.00ms | 100.0% | 800.0ms → 1.70s |  8 → 17 | `_get_module_details` | `<frozen runpy>`                |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|  Change |     Delta |            % |            Time | Samples | Callee                      | Location                                 |
| ------: | --------: | -----------: | --------------: | ------: | --------------------------- | ---------------------------------------- |
| +175.0% | +700.00ms |       100.0% | 400.0ms → 1.10s |  4 → 11 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|     new | +700.00ms | 0.0% → 63.6% |   0ms → 700.0ms |   0 → 7 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |            % |          Time | Samples | Callee              | Location                                 |
| -----: | --------: | -----------: | ------------: | ------: | ------------------- | ---------------------------------------- |
|    new | +600.00ms | 0.0% → 85.7% | 0ms → 600.0ms |   0 → 6 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |
|    new | +100.00ms | 0.0% → 14.3% | 0ms → 100.0ms |   0 → 1 | `get_data`          | `<frozen importlib._bootstrap_external>` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|  Change |     Delta |            % |          Time | Samples | Callee                   | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 20.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___Node_traverse` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 20.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___Node_clear`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms |  0.0% → 8.3% | 0ms → 100.0ms |   0 → 1 | `malloc`                 | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change |     Delta |            % |          Time | Samples | Callee           | Location                              |
| -----: | --------: | -----------: | ------------: | ------: | ---------------- | ------------------------------------- |
|    new | +100.00ms | 0.0% → 16.7% | 0ms → 100.0ms |   0 → 1 | `malloc`         | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
|    new | +100.00ms | 0.0% → 16.7% | 0ms → 100.0ms |   0 → 1 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `<module>` (`/usr/lib/python3.11/json/decoder.py`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +500.00ms | 0.0% → 100.0% | 0ms → 500.0ms |   0 → 5 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/json/__init__.py`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +500.00ms | 0.0% → 100.0% | 0ms → 500.0ms |   0 → 5 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/re/__init__.py`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +400.00ms | 0.0% → 100.0% | 0ms → 400.0ms |   0 → 4 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/contextlib.py`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`<frozen importlib.util>`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `exec_module` (`<frozen importlib._bootstrap>`)

| Change |     Delta |             % |          Time | Samples | Callee     | Location                  |
| -----: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `<module>` | `<frozen importlib.util>` |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `<module>` | `<frozen runpy>`          |

##### `<module>` (`<frozen runpy>`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +300.00ms | 0.0% → 100.0% | 0ms → 300.0ms |   0 → 3 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|  Change |     Delta |             % |              Time | Samples | Callee                | Location                                         |
| ------: | --------: | ------------: | ----------------: | ------: | --------------------- | ------------------------------------------------ |
| +300.0% | +300.00ms |        100.0% | 100.0ms → 400.0ms |   1 → 4 | `(unsymbolized)`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| +300.0% | +300.00ms |        100.0% | 100.0ms → 400.0ms |   1 → 4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
| removed | -100.00ms | 100.0% → 0.0% |     100.0ms → 0ms |   1 → 0 | `calloc`              | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### `_dl_catch_exception` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |      % |              Time | Samples | Callee           | Location                                         |
| ------: | --------: | -----: | ----------------: | ------: | ---------------- | ------------------------------------------------ |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### `_dl_catch_error` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |      % |              Time | Samples | Callee                | Location                              |
| ------: | --------: | -----: | ----------------: | ------: | --------------------- | ------------------------------------- |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `dlopen` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |      % |              Time | Samples | Callee           | Location                              |
| ------: | --------: | -----: | ----------------: | ------: | ---------------- | ------------------------------------- |
| +300.0% | +300.00ms | 100.0% | 100.0ms → 400.0ms |   1 → 4 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |              % |              Time | Samples | Callee           | Location                              |
| ------: | --------: | -------------: | ----------------: | ------: | ---------------- | ------------------------------------- |
| +200.0% | +200.00ms | 100.0% → 75.0% | 100.0ms → 300.0ms |   1 → 3 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

| Change |     Delta |            % |          Time | Samples | Callee           | Location                              |
| -----: | --------: | -----------: | ------------: | ------: | ---------------- | ------------------------------------- |
|    new | +200.00ms | 0.0% → 66.7% | 0ms → 200.0ms |   0 → 2 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `(unsymbolized)` (`<unknown>`)

| Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| -----: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |
|    new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |   0 → 1 | `(unsymbolized)` | `<unknown>`                     |

##### `__init__` (`<string>`)

|  Change |     Delta |             % |              Time | Samples | Callee     | Location   |
| ------: | --------: | ------------: | ----------------: | ------: | ---------- | ---------- |
| +300.0% | +300.00ms | 33.3% → 40.0% | 100.0ms → 400.0ms |   1 → 4 | `__init__` | `<string>` |

##### `CPyDef_black___assert_stable` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |   Delta |      % |          Time | Samples | Callee                            | Location                                                                                         |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| -14.5% | -1.100s | 100.0% | 7.60s → 6.50s | 76 → 65 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Node_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Callee                  | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 33.3% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___Leaf_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -200.00ms | 33.3% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___Node_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |              Time | Samples | Callee                                                            | Location                                                                                         |
| ------: | --------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -66.7% | -400.00ms |        100.0% | 600.0ms → 200.0ms |   6 → 2 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |  16.7% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_pytree___pre_order_Leaf_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -100.00ms | 33.3% → 50.0% | 200.0ms → 100.0ms |   2 → 1 | `pytree___pre_order_Node_gen_dealloc`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |            % |          Time | Samples | Callee  | Location                              |
| ------: | --------: | -----------: | ------------: | ------: | ------- | ------------------------------------- |
| removed | -200.00ms | 66.7% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_code` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 33.3% → 0.0% | 100.0ms → 0ms |   1 → 0 | `parse` | `/usr/lib/python3.11/re/_parser.py`   |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Callee    | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | --------- | ------------------------------------- |
| removed | -300.00ms | 100.0% → 0.0% | 300.0ms → 0ms |   3 → 0 | `compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `CPyDef_lines___EmptyLineTracker___maybe_empty_lines` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |              Time | Samples | Callee                                                 | Location                                                                                         |
| ------: | --------: | -----------: | ----------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  -50.0% | -200.00ms |        66.7% | 400.0ms → 200.0ms |   4 → 2 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms | 16.7% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDict_Build`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|     new | +100.00ms | 0.0% → 33.3% |     0ms → 100.0ms |   0 → 1 | `__init__`                                             | `<string>`                                                                                       |

##### `nodes___visit_default_Visitor_env_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |              % |              Time | Samples | Callee                                    | Location                                                                                         |
| -----: | --------: | -------------: | ----------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -50.0% | -100.00ms | 66.7% → 100.0% | 200.0ms → 100.0ms |   2 → 1 | `nodes___visit_default_Visitor_env_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `nodes___visit_default_Visitor_gen_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

| Change |     Delta |      % |              Time | Samples | Callee                                      | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -66.7% | -200.00ms | 100.0% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_env_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |            % |          Time | Samples | Callee          | Location                              |
| ------: | --------: | -----------: | ------------: | ------: | --------------- | ------------------------------------- |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile_info` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile`      | `/usr/lib/python3.11/re/_compiler.py` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Callee     | Location                             |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `Version` (`/venv/lib/python3.11/site-packages/packaging/version.py`)

|  Change |     Delta |             % |          Time | Samples | Callee    | Location                             |
| ------: | --------: | ------------: | ------------: | ------: | --------- | ------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/version.py`)

|  Change |     Delta |             % |          Time | Samples | Callee    | Location                                                  |
| ------: | --------: | ------------: | ------------: | ------: | --------- | --------------------------------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `Version` | `/venv/lib/python3.11/site-packages/packaging/version.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                        |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------- |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `CPyDef_lines___EmptyLineTracker____maybe_empty_lines` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |              Time | Samples | Callee                               | Location                                                                                         |
| ------: | --------: | -----------: | ----------------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 50.0% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_lines___Line___is_def`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  -50.0% | -100.00ms |        50.0% | 200.0ms → 100.0ms |   2 → 1 | `CPyDef_lines___Line___is_docstring` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Leaf_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Callee                | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___Leaf_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___pre_order_Node_env_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Callee                                | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_gen_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |  50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___pre_order_Leaf_gen_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___pre_order_Node_env_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |             % |          Time | Samples | Callee                              | Location                                                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -200.00ms | 100.0% → 0.0% | 200.0ms → 0ms |   2 → 0 | `pytree___pre_order_Node_env_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Node_dealloc` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |            % |          Time | Samples | Callee                | Location                                                                                         |
| ------: | --------: | -----------: | ------------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -100.00ms | 50.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `pytree___Node_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `linegen___visit_default_LineGenerator_env_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|  Change |     Delta |              % |              Time | Samples | Callee                                      | Location                                                                                         |
| ------: | --------: | -------------: | ----------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -66.7% | -200.00ms | 100.0% → 50.0% | 300.0ms → 100.0ms |   3 → 1 | `nodes___visit_default_Visitor_gen_dealloc` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| removed | -100.00ms |   33.3% → 0.0% |     100.0ms → 0ms |   1 → 0 | `comments___generate_comments_gen_dealloc`  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Callee     | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth` | `/usr/lib/python3.11/re/_parser.py` |

##### `_compile_info` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Callee     | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `getwidth` | `/usr/lib/python3.11/re/_parser.py` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py`)

|  Change |     Delta |             % |          Time | Samples | Callee              | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ------------------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_optimize_charset` | `/usr/lib/python3.11/re/_compiler.py` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile`          | `/usr/lib/python3.11/re/_compiler.py` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Callee       | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ------------ | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `__init__`   | `/usr/lib/python3.11/re/_parser.py` |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Callee   | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | -------- | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py` |

##### `parse` (`/usr/lib/python3.11/re/_parser.py`)

|  Change |     Delta |             % |          Time | Samples | Callee       | Location                            |
| ------: | --------: | ------------: | ------------: | ------: | ------------ | ----------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py` |

##### `findall` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Callee     | Location                             |
| ------: | --------: | ------------: | ------------: | ------: | ---------- | ------------------------------------ |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `_compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `calloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |             % |          Time | Samples | Callee           | Location                              |
| ------: | --------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |   1 → 0 | `(unsymbolized)` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `_run_module_as_main` (`<frozen runpy>`) ← `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |           % |              Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | --------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| +120.0% |   +1.200s | 4.1% → 6.5% |     1.00s → 2.20s | 10 → 22 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +300.0% |   +1.200s | 1.6% → 4.7% |   400.0ms → 1.60s |  4 → 16 | `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +266.7% | +800.00ms | 1.2% → 3.2% |   300.0ms → 1.10s |  3 → 11 | `parse` (`/usr/lib/python3.11/ast.py`) ← `CPyDef_parsing____parse_single_version` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing___parse_ast` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new | +400.00ms | 0.0% → 1.2% |     0ms → 400.0ms |   0 → 4 | `CPyDef_comments___convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| +300.0% | +300.00ms | 0.4% → 1.2% | 100.0ms → 400.0ms |   1 → 4 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>`) ← `get_code` ← `exec_module` ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/usr/lib/python3.11/re/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/usr/lib/python3.11/json/decoder.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/usr/lib/python3.11/json/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_lines___Line_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_lines___line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_lines___Line___contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `CPyDef_lines___Line_____str__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new | +300.00ms | 0.0% → 0.9% |     0ms → 300.0ms |   0 → 3 | `__init__` (`<string>`) ← `CPyDef_lines___LinesBlock___all_lines` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +200.0% | +200.00ms | 0.4% → 0.9% | 100.0ms → 300.0ms |   1 → 3 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`) ← `(unsymbolized)` ← `(unsymbolized)` ← `(unsymbolized)` ← `_dl_catch_exception` (`/usr/lib/x86_64-linux-gnu/libc.so.6`) ← `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`) ← `_dl_catch_exception` (`/usr/lib/x86_64-linux-gnu/libc.so.6`) ← `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`) ← `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/libc.so.6`) ← `_dl_catch_exception` ← `_dl_catch_error` ← `(unsymbolized)` ← `dlopen` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_call_with_frames_removed` ← `_handle_fromlist` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_nodes_____top_level__` ← `CPyInit_black___nodes` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_comments_____top_level__` ← `CPyInit_black___comments` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_pytree___Leaf_____init__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_pytree___convert` ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_pytree___convert` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_driver___Driver____partially_consume_prefix` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `__init__` (`<string>`) ← `__init__` ← `CPyDef_lines___LinesBlock___all_lines` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `pytree___Leaf_traverse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_nodes___Visitor___visit` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_nodes___Visitor___visit` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new | +200.00ms | 0.0% → 0.6% |     0ms → 200.0ms |   0 → 2 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `_run_module_as_main` (`<frozen runpy>`) ← `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|  Change |     Delta |           % |              Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------: | --------: | ----------: | ----------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -71.4% | -500.00ms | 2.9% → 0.6% | 700.0ms → 200.0ms |   7 → 2 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -66.7% | -200.00ms | 1.2% → 0.3% | 300.0ms → 100.0ms |   3 → 1 | `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `(unsymbolized)` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_mode___Mode_____contains__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_lines___Line___is_docstring` ← `CPyDef_lines___EmptyLineTracker____maybe_empty_lines` ← `CPyDef_lines___EmptyLineTracker___maybe_empty_lines` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_linegen___LineGenerator___line` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_lines___Line___is_def` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_lines___EmptyLineTracker____maybe_empty_lines` ← `CPyDef_lines___EmptyLineTracker___maybe_empty_lines` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `pytree___Leaf_traverse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_nodes___Visitor___visit` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                      |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -50.0% | -200.00ms | 1.6% → 0.6% | 400.0ms → 200.0ms |   4 → 2 | `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed | -200.00ms | 0.8% → 0.0% |     200.0ms → 0ms |   2 → 0 | `(unsymbolized)` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___push` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -33.3% | -100.00ms | 1.2% → 0.6% | 300.0ms → 200.0ms |   3 → 2 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/re2/pathspec.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/re2/gitignore.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/pathspec/_backends/agg.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/pathspec/gitignore.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/pathspec/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `<module>` (`/venv/lib/python3.11/site-packages/platformdirs/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_cache_____top_level__` ← `CPyInit_black___cache` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_pgen___ParserGenerator___make_grammar` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_pgen___generate_grammar` ← `CPyDef_driver___load_grammar` ← `CPyDef_driver___load_packaged_grammar` ← `CPyDef_pygram___initialize` ← `CPyDef_nodes_____top_level__` ← `CPyInit_black___nodes` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_comments_____top_level__` ← `CPyInit_black___comments` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyDef_pgen___ParserGenerator___make_label` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_pgen___ParserGenerator___make_first` ← `CPyDef_pgen___ParserGenerator___make_grammar` ← `CPyDef_pgen___generate_grammar` ← `CPyDef_driver___load_grammar` ← `CPyDef_driver___load_packaged_grammar` ← `CPyDef_pygram___initialize` ← `CPyDef_nodes_____top_level__` ← `CPyInit_black___nodes` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_comments_____top_level__` ← `CPyInit_black___comments` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `getwidth` (`/usr/lib/python3.11/re/_parser.py`) ← `getwidth` ← `getwidth` ← `_compile_info` (`/usr/lib/python3.11/re/_compiler.py`) ← `_code` ← `compile` ← `_compile` (`/usr/lib/python3.11/re/__init__.py`) ← `compile` ← `Version` (`/venv/lib/python3.11/site-packages/packaging/version.py`) ← `<module>` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/black/files.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `_optimize_charset` (`/usr/lib/python3.11/re/_compiler.py`) ← `_compile` ← `_compile` ← `_compile` ← `_compile` ← `_compile` ← `_code` ← `compile` ← `_compile` (`/usr/lib/python3.11/re/__init__.py`) ← `compile` ← `Version` (`/venv/lib/python3.11/site-packages/packaging/version.py`) ← `<module>` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/black/files.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/libc.so.6`) ← `calloc` ← `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`) ← `(unsymbolized)` ← `(unsymbolized)` ← `(unsymbolized)` ← `_dl_catch_exception` (`/usr/lib/x86_64-linux-gnu/libc.so.6`) ← `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`) ← `_dl_catch_exception` (`/usr/lib/x86_64-linux-gnu/libc.so.6`) ← `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`) ← `(unsymbolized)` (`/usr/lib/x86_64-linux-gnu/libc.so.6`) ← `_dl_catch_exception` ← `_dl_catch_error` ← `(unsymbolized)` ← `dlopen` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -100.00ms | 0.4% → 0.0% |     100.0ms → 0ms |   1 → 0 | `CPyInit_black___ranges` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportFromMany` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

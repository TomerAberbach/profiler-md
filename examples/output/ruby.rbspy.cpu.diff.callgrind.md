# Sampling profile diff

Collected 129 samples → 126 samples (-3 samples, -2.3%).

| Category         | Change | Delta |             % |  Samples |
| ---------------- | -----: | ----: | ------------: | -------: |
| Third-party      |  -2.9% |    -3 | 79.1% → 78.6% | 102 → 99 |
| Unknown          |  -6.7% |    -1 | 11.6% → 11.1% |  15 → 14 |
| Standard library |  +8.3% |    +1 |  9.3% → 10.3% |  12 → 13 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                           | Location                                                                                     |
| ------: | ----: | ----------: | ------: | ---------------------------------- | -------------------------------------------------------------------------------------------- |
|  +40.0% |    +2 | 3.9% → 5.6% |   5 → 7 | `require`                          | `<unknown>`                                                                                  |
| +200.0% |    +2 | 0.8% → 2.4% |   1 → 3 | `block in each_child_node`         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`      |
| +100.0% |    +2 | 1.6% → 3.2% |   2 → 4 | `def_helper`                       | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in make_switch`             | `../../lib/ruby/3.1.0/optparse.rb`                                                           |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `scalar`                           | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                                                 |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<top (required)>`                 | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/xpath.rb`                              |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<top (required)>`                 | `../../lib/ruby/vendor_ruby/rubygems/resolver.rb`                                            |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in load`                    | `<unknown>`                                                                                  |
|  +50.0% |    +1 | 1.6% → 2.4% |   2 → 3 | `initialize`                       | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`                                         |
|  +50.0% |    +1 | 1.6% → 2.4% |   2 → 3 | `<module:Parser>`                  | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                     |
| +100.0% |    +1 | 0.8% → 1.6% |   1 → 2 | `emit`                             | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                            |
|  +33.3% |    +1 | 2.3% → 3.2% |   3 → 4 | `line_begins`                      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                       |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `line`                             | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/range.rb`                        |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `callbacks_needed`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                            |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `on_new_investigation`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`            |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                    |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `range_with_surrounding_space`     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `percent_literal?`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/percent_literal.rb`           |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `assignment_type?`                 | `<unknown>`                                                                                  |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `line`                             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                            |

##### Third-party

|  Change | Delta |           % | Samples | Function                           | Location                                                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| +200.0% |    +2 | 0.8% → 2.4% |   1 → 3 | `block in each_child_node`         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
| +100.0% |    +2 | 1.6% → 3.2% |   2 → 4 | `def_helper`                       | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`           |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<top (required)>`                 | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/xpath.rb`                                        |
|  +50.0% |    +1 | 1.6% → 2.4% |   2 → 3 | `initialize`                       | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`                                                   |
|  +50.0% |    +1 | 1.6% → 2.4% |   2 → 3 | `<module:Parser>`                  | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                               |
| +100.0% |    +1 | 0.8% → 1.6% |   1 → 2 | `emit`                             | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
|  +33.3% |    +1 | 2.3% → 3.2% |   3 → 4 | `line_begins`                      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `line`                             | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/range.rb`                                  |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `callbacks_needed`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                      |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `on_new_investigation`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`                      |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                              |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `range_with_surrounding_space`     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                          |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `percent_literal?`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/percent_literal.rb`                     |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `line`                             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                                      |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in traverse`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                      |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `loc_is?`                          | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                  |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `compile`                          | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/subcompiler.rb`     |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `next_token`                       | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rex.rb`                |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<class:BaseParser>`               | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/parsers/baseparser.rb`                           |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<top (required)>`                 | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/transport.rb` |

##### Unknown

| Change | Delta |           % | Samples | Function           | Location    |
| -----: | ----: | ----------: | ------: | ------------------ | ----------- |
| +40.0% |    +2 | 3.9% → 5.6% |   5 → 7 | `require`          | `<unknown>` |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in load`    | `<unknown>` |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `assignment_type?` | `<unknown>` |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `if_type?`         | `<unknown>` |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `numblock_type?`   | `<unknown>` |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `on_args`          | `<unknown>` |

##### Standard library

| Change | Delta |           % | Samples | Function                    | Location                                                         |
| -----: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in make_switch`      | `../../lib/ruby/3.1.0/optparse.rb`                               |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `scalar`                    | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                     |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `<top (required)>`          | `../../lib/ruby/vendor_ruby/rubygems/resolver.rb`                |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in <module:DryRun>`  | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `scan`                      | `../../lib/ruby/3.1.0/erb.rb`                                    |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in <module:NoWrite>` | `../../lib/ruby/3.1.0/fileutils.rb`                              |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `tokenize`                  | `../../lib/ruby/3.1.0/psych/scalar_scanner.rb`                   |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `set_start_location`        | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                     |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `include?`                  | `../../lib/ruby/3.1.0/set.rb`                                    |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `<top (required)>`          | `../../lib/ruby/3.1.0/uri/common.rb`                             |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `open_file`                 | `../../lib/ruby/vendor_ruby/rubygems.rb`                         |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                      | Location                                                                                               |
| ------: | ----: | ----------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
|  -50.0% |    -2 | 3.1% → 1.6% |   4 → 2 | `<module:Interface>`                          | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
|  -25.0% |    -2 | 6.2% → 4.8% |   8 → 6 | `slice`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| removed |    -2 | 1.6% → 0.0% |   2 → 0 | `block (2 levels) in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                              |
| removed |    -2 | 1.6% → 0.0% |   2 → 0 | `previous_token`                              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_inside_reference_brackets.rb`    |
| removed |    -2 | 1.6% → 0.0% |   2 → 0 | `visit_descendants_of_types`                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
| removed |    -2 | 1.6% → 0.0% |   2 → 0 | `emit`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rb`                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `add_put_cmd`                                 | `../../lib/ruby/3.1.0/erb.rb`                                                                          |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `result`                                      | `../../lib/ruby/3.1.0/erb.rb`                                                                          |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<main>`                                      | `<unknown>`                                                                                            |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                            | `../../lib/ruby/3.1.0/net/http.rb`                                                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block in visit`                              | `../../lib/ruby/3.1.0/optparse.rb`                                                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                            | `../../lib/ruby/3.1.0/psych/visitors.rb`                                                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `parse_stream`                                | `../../lib/ruby/3.1.0/psych.rb`                                                                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `do_with_enum`                                | `../../lib/ruby/3.1.0/set.rb`                                                                          |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                            | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/element.rb`                                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                            | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/xpath_parser.rb`                                 |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `initialize`                                  | `../../lib/ruby/vendor_ruby/rubygems/requirement.rb`                                                   |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                            | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo.rb`                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<class:Vendor>`                              | `../../lib/ruby/vendor_ruby/rubygems/source/vendor.rb`                                                 |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<module:Source>`                             | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                               |

##### Third-party

|  Change | Delta |           % | Samples | Function                                      | Location                                                                                               |
| ------: | ----: | ----------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
|  -50.0% |    -2 | 3.1% → 1.6% |   4 → 2 | `<module:Interface>`                          | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
|  -25.0% |    -2 | 6.2% → 4.8% |   8 → 6 | `slice`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| removed |    -2 | 1.6% → 0.0% |   2 → 0 | `block (2 levels) in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                              |
| removed |    -2 | 1.6% → 0.0% |   2 → 0 | `previous_token`                              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_inside_reference_brackets.rb`    |
| removed |    -2 | 1.6% → 0.0% |   2 → 0 | `visit_descendants_of_types`                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
| removed |    -2 | 1.6% → 0.0% |   2 → 0 | `emit`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rb`                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                            | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/element.rb`                                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                            | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/xpath_parser.rb`                                 |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<module:Source>`                             | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `assign`                                      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/builders/default.rb`                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `n`                                           | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/builder.rb`                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `advance`                                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb`                                 |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `declared?`                                   | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/static_environment.rb`                            |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `bsearch`                                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `wrap`                                        | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/tree_rewriter.rb`                          |
|  -50.0% |    -1 | 1.6% → 0.8% |   2 → 1 | `<top (required)>`                            | `/var/lib/gems/3.1.0/gems/prism-1.9.0/lib/prism.rb`                                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `department_of`                               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config.rb`                                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `for`                                         | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/badge.rb`                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block in callbacks_needed`                   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `check_assignment`                            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/end_alignment.rb`                      |

##### Unknown

|  Change | Delta |           % | Samples | Function               | Location    |
| ------: | ----: | ----------: | ------: | ---------------------- | ----------- |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<main>`               | `<unknown>` |
|  -33.3% |    -1 | 2.3% → 1.6% |   3 → 2 | `do_parse`             | `<unknown>` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `class_constructor?`   | `<unknown>` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `module_definition?`   | `<unknown>` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `op_asgn_type?`        | `<unknown>` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `control_op_condition` | `<unknown>` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `symbol_proc?`         | `<unknown>` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `on_block`             | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function           | Location                                                                  |
| ------: | ----: | ----------: | ------: | ------------------ | ------------------------------------------------------------------------- |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `add_put_cmd`      | `../../lib/ruby/3.1.0/erb.rb`                                             |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `result`           | `../../lib/ruby/3.1.0/erb.rb`                                             |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>` | `../../lib/ruby/3.1.0/net/http.rb`                                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block in visit`   | `../../lib/ruby/3.1.0/optparse.rb`                                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>` | `../../lib/ruby/3.1.0/psych/visitors.rb`                                  |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `parse_stream`     | `../../lib/ruby/3.1.0/psych.rb`                                           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `do_with_enum`     | `../../lib/ruby/3.1.0/set.rb`                                             |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `initialize`       | `../../lib/ruby/vendor_ruby/rubygems/requirement.rb`                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>` | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo.rb` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<class:Vendor>`   | `../../lib/ruby/vendor_ruby/rubygems/source/vendor.rb`                    |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                   | Location                                                                                               |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------ |
|     new |    +3 |   0.0% → 2.4% |   0 → 3 | `on_send`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb`    |
| +200.0% |    +2 |   0.8% → 2.4% |   1 → 3 | `scalar`                   | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                                                           |
| +200.0% |    +2 |   0.8% → 2.4% |   1 → 3 | `emit`                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
| +200.0% |    +2 |   0.8% → 2.4% |   1 → 3 | `tok`                      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `visit_depth_last`         | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/abc_size_calculator.rb`         |
| +200.0% |    +2 |   0.8% → 2.4% |   1 → 3 | `block in each_child_node` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
| +100.0% |    +2 |   1.6% → 3.2% |   2 → 4 | `def_node_matcher`         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`           |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `compile_as_node_pattern`  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler.rb`                 |
| +100.0% |    +2 |   1.6% → 3.2% |   2 → 4 | `def_helper`               | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`           |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `on_send`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_before_first_arg.rb`             |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `block in calculate`       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/abc_size_calculator.rb`         |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `calculate_node`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/repeated_attribute_discount.rb` |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `calculate_node`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/abc_size_calculator.rb`         |
|  +50.0% |    +1 |   1.6% → 2.4% |   2 → 3 | `parse`                    | `../../lib/ruby/3.1.0/psych.rb`                                                                        |
|  +50.0% |    +1 |   1.6% → 2.4% |   2 → 3 | `parse_stream`             | `../../lib/ruby/3.1.0/psych.rb`                                                                        |
|  +50.0% |    +1 |   1.6% → 2.4% |   2 → 3 | `safe_load`                | `../../lib/ruby/3.1.0/psych.rb`                                                                        |
|   +4.2% |    +1 | 18.6% → 19.8% | 24 → 25 | `require`                  | `<unknown>`                                                                                            |
| +100.0% |    +1 |   0.8% → 1.6% |   1 → 2 | `load`                     | `../../lib/ruby/vendor_ruby/rubygems/specification.rb`                                                 |
|  +50.0% |    +1 |   1.6% → 2.4% |   2 → 3 | `initialize`               | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`                                                   |
|   +6.7% |    +1 | 11.6% → 12.7% | 15 → 16 | `parse`                    | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`                                          |

##### Third-party

|  Change | Delta |             % | Samples | Function                   | Location                                                                                               |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------ |
|     new |    +3 |   0.0% → 2.4% |   0 → 3 | `on_send`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb`    |
| +200.0% |    +2 |   0.8% → 2.4% |   1 → 3 | `emit`                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
| +200.0% |    +2 |   0.8% → 2.4% |   1 → 3 | `tok`                      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `visit_depth_last`         | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/abc_size_calculator.rb`         |
| +200.0% |    +2 |   0.8% → 2.4% |   1 → 3 | `block in each_child_node` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
| +100.0% |    +2 |   1.6% → 3.2% |   2 → 4 | `def_node_matcher`         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`           |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `compile_as_node_pattern`  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler.rb`                 |
| +100.0% |    +2 |   1.6% → 3.2% |   2 → 4 | `def_helper`               | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`           |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `on_send`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_before_first_arg.rb`             |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `block in calculate`       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/abc_size_calculator.rb`         |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `calculate_node`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/repeated_attribute_discount.rb` |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `calculate_node`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/abc_size_calculator.rb`         |
|  +50.0% |    +1 |   1.6% → 2.4% |   2 → 3 | `initialize`               | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`                                                   |
|   +6.7% |    +1 | 11.6% → 12.7% | 15 → 16 | `parse`                    | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`                                          |
|   +6.7% |    +1 | 11.6% → 12.7% | 15 → 16 | `tokenize`                 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`                                          |
|  +50.0% |    +1 |   1.6% → 2.4% |   2 → 3 | `emit_table`               | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
|  +33.3% |    +1 |   2.3% → 3.2% |   3 → 4 | `line_begins`              | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| +100.0% |    +1 |   0.8% → 1.6% |   1 → 2 | `is?`                      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/range.rb`                                  |
|  +33.3% |    +1 |   2.3% → 3.2% |   3 → 4 | `running?`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server.rb`                                        |
| +100.0% |    +1 |   0.8% → 1.6% |   1 → 2 | `check_duplication`        | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb`                                 |

##### Unknown

|  Change | Delta |             % | Samples | Function         | Location    |
| ------: | ----: | ------------: | ------: | ---------------- | ----------- |
|   +4.2% |    +1 | 18.6% → 19.8% | 24 → 25 | `require`        | `<unknown>` |
|  +25.0% |    +1 |   3.1% → 4.0% |   4 → 5 | `on_block`       | `<unknown>` |
| +100.0% |    +1 |   0.8% → 1.6% |   1 → 2 | `on_module`      | `<unknown>` |
|   +7.7% |    +1 | 10.1% → 11.1% | 13 → 14 | `on_send`        | `<unknown>` |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `on_or`          | `<unknown>` |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `if_type?`       | `<unknown>` |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `numblock_type?` | `<unknown>` |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `tap`            | `<unknown>` |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `emit_capture`   | `<unknown>` |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `on_gvar`        | `<unknown>` |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `on_args`        | `<unknown>` |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `on_array`       | `<unknown>` |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `on_until`       | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                                         |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------------------------------- |
| +200.0% |    +2 | 0.8% → 2.4% |   1 → 3 | `scalar`                    | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                     |
|  +50.0% |    +1 | 1.6% → 2.4% |   2 → 3 | `parse`                     | `../../lib/ruby/3.1.0/psych.rb`                                  |
|  +50.0% |    +1 | 1.6% → 2.4% |   2 → 3 | `parse_stream`              | `../../lib/ruby/3.1.0/psych.rb`                                  |
|  +50.0% |    +1 | 1.6% → 2.4% |   2 → 3 | `safe_load`                 | `../../lib/ruby/3.1.0/psych.rb`                                  |
| +100.0% |    +1 | 0.8% → 1.6% |   1 → 2 | `load`                      | `../../lib/ruby/vendor_ruby/rubygems/specification.rb`           |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<top (required)>`          | `../../lib/ruby/3.1.0/bundler.rb`                                |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<top (required)>`          | `../../lib/ruby/3.1.0/bundler/vendored_fileutils.rb`             |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<module:DryRun>`           | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in <module:DryRun>`  | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<module:FileUtils>`        | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<top (required)>`          | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `scan`                      | `../../lib/ruby/3.1.0/erb.rb`                                    |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<module:FileUtils>`        | `../../lib/ruby/3.1.0/fileutils.rb`                              |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<module:NoWrite>`          | `../../lib/ruby/3.1.0/fileutils.rb`                              |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `block in <module:NoWrite>` | `../../lib/ruby/3.1.0/fileutils.rb`                              |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `<top (required)>`          | `../../lib/ruby/3.1.0/fileutils.rb`                              |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `mkpath`                    | `../../lib/ruby/3.1.0/pathname.rb`                               |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `tokenize`                  | `../../lib/ruby/3.1.0/psych/scalar_scanner.rb`                   |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `set_location`              | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                     |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `set_start_location`        | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                     |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                    | Location                                                                                               |
| ------: | ----: | ------------: | --------: | --------------------------- | ------------------------------------------------------------------------------------------------------ |
|  -45.5% |    -5 |   8.5% → 4.8% |    11 → 6 | `initialize`                | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                          |
|  -30.8% |    -4 |  10.1% → 7.1% |    13 → 9 | `def_node_matcher`          | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                          |
| removed |    -3 |   2.3% → 0.0% |     3 → 0 | `each_node`                 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
|   -2.4% |    -3 |         98.4% | 127 → 124 | `<main>`                    | `rubocop`                                                                                              |
|   -2.4% |    -3 | 96.9% → 96.8% | 125 → 122 | `<top (required)>`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                                                  |
|  -75.0% |    -3 |   3.1% → 0.8% |     4 → 1 | `advance`                   | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb`                                 |
|   -6.0% |    -3 | 38.8% → 37.3% |   50 → 47 | `with_cop_error_handling`   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                              |
|   -5.7% |    -3 | 41.1% → 39.7% |   53 → 50 | `investigate`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                      |
|   -5.7% |    -3 | 41.1% → 39.7% |   53 → 50 | `block in inspect_file`     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                        |
|   -2.6% |    -2 | 60.5% → 60.3% |   78 → 76 | `realtime`                  | `../../lib/ruby/3.1.0/benchmark.rb`                                                                    |
|   -2.6% |    -2 | 60.5% → 60.3% |   78 → 76 | `block in <top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                                                  |
| removed |    -2 |   1.6% → 0.0% |     2 → 0 | `result`                    | `../../lib/ruby/3.1.0/erb.rb`                                                                          |
| removed |    -2 |   1.6% → 0.0% |     2 → 0 | `do_with_enum`              | `../../lib/ruby/3.1.0/set.rb`                                                                          |
| removed |    -2 |   1.6% → 0.0% |     2 → 0 | `initialize`                | `../../lib/ruby/3.1.0/set.rb`                                                                          |
| removed |    -2 |   1.6% → 0.0% |     2 → 0 | `to_set`                    | `../../lib/ruby/3.1.0/set.rb`                                                                          |
|  -50.0% |    -2 |   3.1% → 1.6% |     4 → 2 | `<top (required)>`          | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
|  -50.0% |    -2 |   3.1% → 1.6% |     4 → 2 | `<module:Interface>`        | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
|  -50.0% |    -2 |   3.1% → 1.6% |     4 → 2 | `<module:LanguageServer>`   | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
|  -50.0% |    -2 |   3.1% → 1.6% |     4 → 2 | `<module:Protocol>`         | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
| removed |    -2 |   1.6% → 0.0% |     2 → 0 | `ident`                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/builders/default.rb`                              |

##### Third-party

|  Change | Delta |             % |   Samples | Function                    | Location                                                                                               |
| ------: | ----: | ------------: | --------: | --------------------------- | ------------------------------------------------------------------------------------------------------ |
|  -45.5% |    -5 |   8.5% → 4.8% |    11 → 6 | `initialize`                | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                          |
|  -30.8% |    -4 |  10.1% → 7.1% |    13 → 9 | `def_node_matcher`          | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                          |
| removed |    -3 |   2.3% → 0.0% |     3 → 0 | `each_node`                 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
|   -2.4% |    -3 | 96.9% → 96.8% | 125 → 122 | `<top (required)>`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                                                  |
|  -75.0% |    -3 |   3.1% → 0.8% |     4 → 1 | `advance`                   | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb`                                 |
|   -6.0% |    -3 | 38.8% → 37.3% |   50 → 47 | `with_cop_error_handling`   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                              |
|   -5.7% |    -3 | 41.1% → 39.7% |   53 → 50 | `investigate`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                      |
|   -5.7% |    -3 | 41.1% → 39.7% |   53 → 50 | `block in inspect_file`     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                        |
|   -2.6% |    -2 | 60.5% → 60.3% |   78 → 76 | `block in <top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                                                  |
|  -50.0% |    -2 |   3.1% → 1.6% |     4 → 2 | `<top (required)>`          | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
|  -50.0% |    -2 |   3.1% → 1.6% |     4 → 2 | `<module:Interface>`        | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
|  -50.0% |    -2 |   3.1% → 1.6% |     4 → 2 | `<module:LanguageServer>`   | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
|  -50.0% |    -2 |   3.1% → 1.6% |     4 → 2 | `<module:Protocol>`         | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
| removed |    -2 |   1.6% → 0.0% |     2 → 0 | `ident`                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/builders/default.rb`                              |
|  -25.0% |    -2 |   6.2% → 4.8% |     8 → 6 | `slice`                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| removed |    -2 |   1.6% → 0.0% |     2 → 0 | `extend_string_slice_end`   | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb`                                 |
| removed |    -2 |   1.6% → 0.0% |     2 → 0 | `_reduce_588`               | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb`                                        |
|   -2.6% |    -2 | 60.5% → 60.3% |   78 → 76 | `run`                       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                                           |
|   -8.7% |    -2 | 17.8% → 16.7% |   23 → 21 | `<top (required)>`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                               |
|   -2.6% |    -2 | 59.7% → 59.5% |   77 → 75 | `block in run`              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                                           |

##### Unknown

|  Change | Delta |             % | Samples | Function               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------- | ----------- |
|  -66.7% |    -2 |   2.3% → 0.8% |   3 → 1 | `block in on_dstr`     | `<unknown>` |
| removed |    -2 |   1.6% → 0.0% |   2 → 0 | `on_casgn`             | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<main>`               | `<unknown>` |
|   -4.8% |    -1 | 16.3% → 15.9% | 21 → 20 | `do_parse`             | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `class_constructor?`   | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `module_definition?`   | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `op_asgn_type?`        | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `control_op_condition` | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `symbol_proc?`         | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `emit_list`            | `<unknown>` |
|  -50.0% |    -1 |   1.6% → 0.8% |   2 → 1 | `on_begin`             | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `on_and`               | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `on_class`             | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `on_sym`               | `<unknown>` |
|  -50.0% |    -1 |   1.6% → 0.8% |   2 → 1 | `next_token`           | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `on_ensure`            | `<unknown>` |

##### Standard library

|  Change | Delta |             % | Samples | Function              | Location                                                    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------------------------------------------------------- |
|   -2.6% |    -2 | 60.5% → 60.3% | 78 → 76 | `realtime`            | `../../lib/ruby/3.1.0/benchmark.rb`                         |
| removed |    -2 |   1.6% → 0.0% |   2 → 0 | `result`              | `../../lib/ruby/3.1.0/erb.rb`                               |
| removed |    -2 |   1.6% → 0.0% |   2 → 0 | `do_with_enum`        | `../../lib/ruby/3.1.0/set.rb`                               |
| removed |    -2 |   1.6% → 0.0% |   2 → 0 | `initialize`          | `../../lib/ruby/3.1.0/set.rb`                               |
| removed |    -2 |   1.6% → 0.0% |   2 → 0 | `to_set`              | `../../lib/ruby/3.1.0/set.rb`                               |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `add_put_cmd`         | `../../lib/ruby/3.1.0/erb.rb`                               |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<top (required)>`    | `../../lib/ruby/3.1.0/net/http.rb`                          |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `search`              | `../../lib/ruby/3.1.0/optparse.rb`                          |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `block in visit`      | `../../lib/ruby/3.1.0/optparse.rb`                          |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `visit`               | `../../lib/ruby/3.1.0/optparse.rb`                          |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<top (required)>`    | `../../lib/ruby/3.1.0/psych.rb`                             |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<top (required)>`    | `../../lib/ruby/3.1.0/psych/visitors.rb`                    |
|  -50.0% |    -1 |   1.6% → 0.8% |   2 → 1 | `finish_resolve`      | `../../lib/ruby/vendor_ruby/rubygems.rb`                    |
|  -50.0% |    -1 |   1.6% → 0.8% |   2 → 1 | `resolve_current`     | `../../lib/ruby/vendor_ruby/rubygems/request_set.rb`        |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `resolve`             | `../../lib/ruby/vendor_ruby/rubygems/request_set.rb`        |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `resolve`             | `../../lib/ruby/vendor_ruby/rubygems/resolver.rb`           |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `initialize`          | `../../lib/ruby/vendor_ruby/rubygems/requirement.rb`        |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<class:Resolver>`    | `../../lib/ruby/vendor_ruby/rubygems/resolver.rb`           |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<top (required)>`    | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo.rb` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `block in search_for` | `../../lib/ruby/vendor_ruby/rubygems/resolver.rb`           |

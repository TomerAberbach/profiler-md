# Sampling profile

Collected 129 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 79.1% |     102 |
| Unknown          | 11.6% |      15 |
| Standard library |  9.3% |      12 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                      | Location                                                                                               |
| ---: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 8.5% |      11 | `<top (required)>`                            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                               |
| 6.2% |       8 | `slice`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| 3.9% |       5 | `require`                                     | `<unknown>`                                                                                            |
| 3.1% |       4 | `<module:Interface>`                          | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
| 2.3% |       3 | `advance`                                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
| 2.3% |       3 | `do_parse`                                    | `<unknown>`                                                                                            |
| 2.3% |       3 | `line_begins`                                 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| 2.3% |       3 | `before_semicolon?`                           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb`                  |
| 2.3% |       3 | `move_pos`                                    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                          |
| 1.6% |       2 | `initialize`                                  | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`                                                   |
| 1.6% |       2 | `<module:Parser>`                             | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                               |
| 1.6% |       2 | `<top (required)>`                            | `/var/lib/gems/3.1.0/gems/prism-1.9.0/lib/prism.rb`                                                    |
| 1.6% |       2 | `block (2 levels) in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                              |
| 1.6% |       2 | `previous_token`                              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_inside_reference_brackets.rb`    |
| 1.6% |       2 | `loc?`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                  |
| 1.6% |       2 | `type_in?`                                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                  |
| 1.6% |       2 | `visit_descendants_of_types`                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
| 1.6% |       2 | `emit`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rb`                    |
| 1.6% |       2 | `def_helper`                                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`           |
| 0.8% |       1 | `add_put_cmd`                                 | `../../lib/ruby/3.1.0/erb.rb`                                                                          |

#### Categories

##### Third-party

|    % | Samples | Function                                      | Location                                                                                               |
| ---: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 8.5% |      11 | `<top (required)>`                            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                               |
| 6.2% |       8 | `slice`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| 3.1% |       4 | `<module:Interface>`                          | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
| 2.3% |       3 | `advance`                                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
| 2.3% |       3 | `line_begins`                                 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| 2.3% |       3 | `before_semicolon?`                           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb`                  |
| 2.3% |       3 | `move_pos`                                    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                          |
| 1.6% |       2 | `initialize`                                  | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`                                                   |
| 1.6% |       2 | `<module:Parser>`                             | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                               |
| 1.6% |       2 | `<top (required)>`                            | `/var/lib/gems/3.1.0/gems/prism-1.9.0/lib/prism.rb`                                                    |
| 1.6% |       2 | `block (2 levels) in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                              |
| 1.6% |       2 | `previous_token`                              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_inside_reference_brackets.rb`    |
| 1.6% |       2 | `loc?`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                  |
| 1.6% |       2 | `type_in?`                                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                  |
| 1.6% |       2 | `visit_descendants_of_types`                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
| 1.6% |       2 | `emit`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rb`                    |
| 1.6% |       2 | `def_helper`                                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`           |
| 0.8% |       1 | `<top (required)>`                            | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/document.rb`                                     |
| 0.8% |       1 | `<top (required)>`                            | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/element.rb`                                      |
| 0.8% |       1 | `<top (required)>`                            | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/xpath_parser.rb`                                 |

##### Unknown

|    % | Samples | Function               | Location    |
| ---: | ------: | ---------------------- | ----------- |
| 3.9% |       5 | `require`              | `<unknown>` |
| 2.3% |       3 | `do_parse`             | `<unknown>` |
| 0.8% |       1 | `<main>`               | `<unknown>` |
| 0.8% |       1 | `class_constructor?`   | `<unknown>` |
| 0.8% |       1 | `module_definition?`   | `<unknown>` |
| 0.8% |       1 | `op_asgn_type?`        | `<unknown>` |
| 0.8% |       1 | `control_op_condition` | `<unknown>` |
| 0.8% |       1 | `symbol_proc?`         | `<unknown>` |
| 0.8% |       1 | `on_block`             | `<unknown>` |

##### Standard library

|    % | Samples | Function           | Location                                                                  |
| ---: | ------: | ------------------ | ------------------------------------------------------------------------- |
| 0.8% |       1 | `add_put_cmd`      | `../../lib/ruby/3.1.0/erb.rb`                                             |
| 0.8% |       1 | `result`           | `../../lib/ruby/3.1.0/erb.rb`                                             |
| 0.8% |       1 | `<top (required)>` | `../../lib/ruby/3.1.0/net/http.rb`                                        |
| 0.8% |       1 | `block in visit`   | `../../lib/ruby/3.1.0/optparse.rb`                                        |
| 0.8% |       1 | `<top (required)>` | `../../lib/ruby/3.1.0/psych/visitors.rb`                                  |
| 0.8% |       1 | `parse_stream`     | `../../lib/ruby/3.1.0/psych.rb`                                           |
| 0.8% |       1 | `initialize`       | `../../lib/ruby/3.1.0/psych/nodes/scalar.rb`                              |
| 0.8% |       1 | `do_with_enum`     | `../../lib/ruby/3.1.0/set.rb`                                             |
| 0.8% |       1 | `<top (required)>` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb`                    |
| 0.8% |       1 | `initialize`       | `../../lib/ruby/vendor_ruby/rubygems/requirement.rb`                      |
| 0.8% |       1 | `<top (required)>` | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo.rb` |
| 0.8% |       1 | `<class:Vendor>`   | `../../lib/ruby/vendor_ruby/rubygems/source/vendor.rb`                    |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |      11 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb:780` |

##### `slice` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       8 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb:214` |

##### `require` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       5 | 170      |

##### `<module:Interface>` (`/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |       4 | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb:657` |

##### `advance` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       3 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb:14654` |

##### `do_parse` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       3 | 4        |

##### `line_begins` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       3 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb:341` |

##### `before_semicolon?` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb`)

|      % | Samples | Location                                                                                 |
| -----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% |       3 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb:36` |

##### `move_pos` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       3 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb:121` |

##### `initialize` (`/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb:80` |

##### `<module:Parser>` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb:91` |

##### `<top (required)>` (`/var/lib/gems/3.1.0/gems/prism-1.9.0/lib/prism.rb`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/prism-1.9.0/lib/prism.rb:97` |

##### `block (2 levels) in trigger_responding_cops` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`)

|      % | Samples | Location                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb:108` |

##### `previous_token` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_inside_reference_brackets.rb`)

|      % | Samples | Location                                                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_inside_reference_brackets.rb:135` |

##### `loc?` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb:593` |

##### `type_in?` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb:193` |

##### `visit_descendants_of_types` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb:131` |

##### `emit` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rb`)

|      % | Samples | Location                                                                               |
| -----: | ------: | -------------------------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rb:46` |

##### `def_helper` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb:61` |

##### `add_put_cmd` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/erb.rb:576` |

##### `<top (required)>` (`../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/document.rb`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/document.rb:16` |

##### `<top (required)>` (`../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/element.rb`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/element.rb:9` |

##### `<top (required)>` (`../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/xpath_parser.rb`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/xpath_parser.rb:49` |

##### `<main>` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 5747     |

##### `class_constructor?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 650      |

##### `module_definition?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 70       |

##### `op_asgn_type?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 200      |

##### `control_op_condition` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 85       |

##### `symbol_proc?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 186      |

##### `on_block` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 171      |

##### `result` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/erb.rb:906` |

##### `<top (required)>` (`../../lib/ruby/3.1.0/net/http.rb`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/net/http.rb:1724` |

##### `block in visit` (`../../lib/ruby/3.1.0/optparse.rb`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/optparse.rb:1744` |

##### `<top (required)>` (`../../lib/ruby/3.1.0/psych/visitors.rb`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `../../lib/ruby/3.1.0/psych/visitors.rb:7` |

##### `parse_stream` (`../../lib/ruby/3.1.0/psych.rb`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/psych.rb:461` |

##### `initialize` (`../../lib/ruby/3.1.0/psych/nodes/scalar.rb`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/psych/nodes/scalar.rb:65` |

##### `do_with_enum` (`../../lib/ruby/3.1.0/set.rb`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/set.rb:282` |

##### `<top (required)>` (`../../lib/ruby/vendor_ruby/rubygems/specification.rb`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/vendor_ruby/rubygems/specification.rb:37` |

##### `initialize` (`../../lib/ruby/vendor_ruby/rubygems/requirement.rb`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/vendor_ruby/rubygems/requirement.rb:140` |

##### `<top (required)>` (`../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo.rb`)

|      % | Samples | Location                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo.rb:10` |

##### `<class:Vendor>` (`../../lib/ruby/vendor_ruby/rubygems/source/vendor.rb`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/vendor_ruby/rubygems/source/vendor.rb:25` |

### Total samples

Functions ranked by total samples taken in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

|     % | Samples | Function                       | Location                                                                            |
| ----: | ------: | ------------------------------ | ----------------------------------------------------------------------------------- |
| 98.4% |     127 | `<main>`                       | `rubocop`                                                                           |
| 96.9% |     125 | `<top (required)>`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                               |
| 60.5% |      78 | `realtime`                     | `../../lib/ruby/3.1.0/benchmark.rb`                                                 |
| 60.5% |      78 | `block in <top (required)>`    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                               |
| 60.5% |      78 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.7% |      77 | `block in run`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.7% |      77 | `profile_if_needed`            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.8% |      72 | `execute_runners`              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.8% |      72 | `run_command`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.8% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 55.8% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 55.8% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.8% |      72 | `block in execute_runner`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.8% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.8% |      72 | `execute_runner`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.8% |      72 | `with_redirect`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.8% |      72 | `inspect_files`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.0% |      71 | `block in each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.0% |      71 | `process_file`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.0% |      71 | `each_inspected_file`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |

#### Categories

##### Third-party

|     % | Samples | Function                       | Location                                                                            |
| ----: | ------: | ------------------------------ | ----------------------------------------------------------------------------------- |
| 96.9% |     125 | `<top (required)>`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                               |
| 60.5% |      78 | `block in <top (required)>`    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                               |
| 60.5% |      78 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.7% |      77 | `block in run`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.7% |      77 | `profile_if_needed`            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.8% |      72 | `execute_runners`              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.8% |      72 | `run_command`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.8% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 55.8% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 55.8% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.8% |      72 | `block in execute_runner`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.8% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.8% |      72 | `execute_runner`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.8% |      72 | `with_redirect`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.8% |      72 | `inspect_files`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.0% |      71 | `block in each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.0% |      71 | `process_file`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.0% |      71 | `each_inspected_file`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.0% |      71 | `file_offense_cache`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.0% |      71 | `file_offenses`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |

##### Unknown

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 18.6% |      24 | `require`                | `<unknown>` |
| 16.3% |      21 | `do_parse`               | `<unknown>` |
| 10.1% |      13 | `on_send`                | `<unknown>` |
|  3.9% |       5 | `on_def`                 | `<unknown>` |
|  3.1% |       4 | `on_block`               | `<unknown>` |
|  2.3% |       3 | `block in on_dstr`       | `<unknown>` |
|  2.3% |       3 | `on_if`                  | `<unknown>` |
|  1.6% |       2 | `on_begin`               | `<unknown>` |
|  1.6% |       2 | `<internal:gem_prelude>` | `<unknown>` |
|  1.6% |       2 | `on_casgn`               | `<unknown>` |
|  1.6% |       2 | `next_token`             | `<unknown>` |
|  0.8% |       1 | `<main>`                 | `<unknown>` |
|  0.8% |       1 | `block in load`          | `<unknown>` |
|  0.8% |       1 | `load`                   | `<unknown>` |
|  0.8% |       1 | `class_constructor?`     | `<unknown>` |
|  0.8% |       1 | `module_definition?`     | `<unknown>` |
|  0.8% |       1 | `op_asgn_type?`          | `<unknown>` |
|  0.8% |       1 | `assignment_type?`       | `<unknown>` |
|  0.8% |       1 | `control_op_condition`   | `<unknown>` |
|  0.8% |       1 | `symbol_proc?`           | `<unknown>` |

##### Standard library

|     % | Samples | Function                     | Location                                             |
| ----: | ------: | ---------------------------- | ---------------------------------------------------- |
| 60.5% |      78 | `realtime`                   | `../../lib/ruby/3.1.0/benchmark.rb`                  |
|  1.6% |       2 | `result`                     | `../../lib/ruby/3.1.0/erb.rb`                        |
|  1.6% |       2 | `parse`                      | `../../lib/ruby/3.1.0/psych.rb`                      |
|  1.6% |       2 | `parse_stream`               | `../../lib/ruby/3.1.0/psych.rb`                      |
|  1.6% |       2 | `safe_load`                  | `../../lib/ruby/3.1.0/psych.rb`                      |
|  1.6% |       2 | `do_with_enum`               | `../../lib/ruby/3.1.0/set.rb`                        |
|  1.6% |       2 | `initialize`                 | `../../lib/ruby/3.1.0/set.rb`                        |
|  1.6% |       2 | `to_set`                     | `../../lib/ruby/3.1.0/set.rb`                        |
|  1.6% |       2 | `<top (required)>`           | `../../lib/ruby/vendor_ruby/rubygems.rb`             |
|  1.6% |       2 | `activate_bin_path`          | `../../lib/ruby/vendor_ruby/rubygems.rb`             |
|  1.6% |       2 | `block in activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`             |
|  1.6% |       2 | `finish_resolve`             | `../../lib/ruby/vendor_ruby/rubygems.rb`             |
|  1.6% |       2 | `resolve_current`            | `../../lib/ruby/vendor_ruby/rubygems/request_set.rb` |
|  0.8% |       1 | `add_put_cmd`                | `../../lib/ruby/3.1.0/erb.rb`                        |
|  0.8% |       1 | `compile`                    | `../../lib/ruby/3.1.0/erb.rb`                        |
|  0.8% |       1 | `initialize`                 | `../../lib/ruby/3.1.0/erb.rb`                        |
|  0.8% |       1 | `<top (required)>`           | `../../lib/ruby/3.1.0/net/http.rb`                   |
|  0.8% |       1 | `block in make_switch`       | `../../lib/ruby/3.1.0/optparse.rb`                   |
|  0.8% |       1 | `search`                     | `../../lib/ruby/3.1.0/optparse.rb`                   |
|  0.8% |       1 | `block in visit`             | `../../lib/ruby/3.1.0/optparse.rb`                   |

#### Callers

Callers ranked by the samples taken in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Caller   | Location  |
| -----: | ------: | ----: | -------- | --------- |
| 100.0% |     125 |     1 | `<main>` | `rubocop` |

##### `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)

|      % | Samples | Calls | Caller             | Location                                              |
| -----: | ------: | ----: | ------------------ | ----------------------------------------------------- |
| 100.0% |      78 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |

##### `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Caller     | Location                            |
| -----: | ------: | ----: | ---------- | ----------------------------------- |
| 100.0% |      78 |     1 | `realtime` | `../../lib/ruby/3.1.0/benchmark.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller                      | Location                                              |
| -----: | ------: | ----: | --------------------------- | ----------------------------------------------------- |
| 100.0% |      78 |     1 | `block in <top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |

##### `block in run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller              | Location                                                     |
| -----: | ------: | ----: | ------------------- | ------------------------------------------------------------ |
| 100.0% |      77 |     1 | `profile_if_needed` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `profile_if_needed` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller | Location                                                     |
| -----: | ------: | ----: | ------ | ------------------------------------------------------------ |
| 100.0% |      77 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `execute_runners` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller         | Location                                                     |
| -----: | ------: | ----: | -------------- | ------------------------------------------------------------ |
| 100.0% |      72 |     1 | `block in run` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller            | Location                                                     |
| -----: | ------: | ----: | ----------------- | ------------------------------------------------------------ |
| 100.0% |      72 |     1 | `execute_runners` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Calls | Caller        | Location                                                     |
| -----: | ------: | ----: | ------------- | ------------------------------------------------------------ |
| 100.0% |      72 |     1 | `run_command` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|      % | Samples | Calls | Caller | Location                                                                 |
| -----: | ------: | ----: | ------ | ------------------------------------------------------------------------ |
| 100.0% |      72 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller | Location                                                             |
| -----: | ------: | ----: | ------ | -------------------------------------------------------------------- |
| 100.0% |      72 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller          | Location                                                                            |
| -----: | ------: | ----: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      72 |     1 | `with_redirect` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                    | Location                                                                            |
| -----: | ------: | ----: | ------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      72 |     1 | `block in execute_runner` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller | Location                                                                            |
| -----: | ------: | ----: | ------ | ----------------------------------------------------------------------------------- |
| 100.0% |      72 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `with_redirect` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller           | Location                                                                            |
| -----: | ------: | ----: | ---------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      72 |     1 | `execute_runner` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `inspect_files` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller | Location                                                        |
| -----: | ------: | ----: | ------ | --------------------------------------------------------------- |
| 100.0% |      72 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `block in each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                | Location                                                        |
| -----: | ------: | ----: | --------------------- | --------------------------------------------------------------- |
| 100.0% |      71 |     1 | `each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `process_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                         | Location                                                        |
| -----: | ------: | ----: | ------------------------------ | --------------------------------------------------------------- |
| 100.0% |      71 |     1 | `block in each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller          | Location                                                        |
| -----: | ------: | ----: | --------------- | --------------------------------------------------------------- |
| 100.0% |      71 |     1 | `inspect_files` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `file_offense_cache` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller          | Location                                                        |
| -----: | ------: | ----: | --------------- | --------------------------------------------------------------- |
| 100.0% |      71 |     1 | `file_offenses` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `file_offenses` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller         | Location                                                        |
| -----: | ------: | ----: | -------------- | --------------------------------------------------------------- |
| 100.0% |      71 |     1 | `process_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `require` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location                                                                           |
| -----: | ------: | ----: | ------------------ | ---------------------------------------------------------------------------------- |
| 183.3% |      44 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                              |
|  41.7% |      10 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                           |
|  25.0% |       6 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast.rb`                   |
|  16.7% |       4 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/lsp/server.rb`                |
|  12.5% |       3 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter/junit_formatter.rb` |

##### `do_parse` (`<unknown>`)

|     % | Samples | Calls | Caller  | Location                                                                             |
| ----: | ------: | ----: | ------- | ------------------------------------------------------------------------------------ |
| 71.4% |      15 |     1 | `parse` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`                        |
| 28.6% |       6 |     6 | `parse` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.rb` |

##### `on_send` (`<unknown>`)

|     % | Samples | Calls | Caller             | Location    |
| ----: | ------: | ----: | ------------------ | ----------- |
| 69.2% |       9 |     8 | `block in on_dstr` | `<unknown>` |
| 30.8% |       4 |     4 | `on_block`         | `<unknown>` |
| 30.8% |       4 |     4 | `block in on_send` | `<unknown>` |
| 15.4% |       2 |     2 | `on_if`            | `<unknown>` |
|  7.7% |       1 |     1 | `on_lvasgn`        | `<unknown>` |

##### `on_def` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location    |
| -----: | ------: | ----: | ------------------ | ----------- |
| 540.0% |      27 |     8 | `block in on_dstr` | `<unknown>` |

##### `on_block` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location    |
| -----: | ------: | ----: | ------------------ | ----------- |
| 150.0% |       6 |     6 | `block in on_dstr` | `<unknown>` |
|  75.0% |       3 |     2 | `on_def`           | `<unknown>` |
|  50.0% |       2 |     2 | `block in on_send` | `<unknown>` |
|  25.0% |       1 |     1 | `on_defs`          | `<unknown>` |
|  25.0% |       1 |     1 | `on_lvasgn`        | `<unknown>` |

##### `block in on_dstr` (`<unknown>`)

|       % | Samples | Calls | Caller    | Location    |
| ------: | ------: | ----: | --------- | ----------- |
| 4833.3% |     145 |    34 | `on_dstr` | `<unknown>` |

##### `on_if` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location    |
| -----: | ------: | ----: | ------------------ | ----------- |
| 333.3% |      10 |     9 | `block in on_dstr` | `<unknown>` |
|  33.3% |       1 |     1 | `on_def`           | `<unknown>` |

##### `on_begin` (`<unknown>`)

|       % | Samples | Calls | Caller     | Location                                                                   |
| ------: | ------: | ----: | ---------- | -------------------------------------------------------------------------- |
| 2800.0% |      56 |     4 | `on_while` | `<unknown>`                                                                |
| 1800.0% |      36 |     1 | `walk`     | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb` |
| 1250.0% |      25 |     3 | `on_class` | `<unknown>`                                                                |
|  700.0% |      14 |    10 | `on_def`   | `<unknown>`                                                                |
|  250.0% |       5 |     5 | `on_block` | `<unknown>`                                                                |

##### `on_casgn` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location    |
| -----: | ------: | ----: | ------------------ | ----------- |
| 100.0% |       2 |     2 | `block in on_dstr` | `<unknown>` |

##### `next_token` (`<unknown>`)

|      % | Samples | Calls | Caller     | Location    |
| -----: | ------: | ----: | ---------- | ----------- |
| 100.0% |       2 |     2 | `do_parse` | `<unknown>` |

##### `result` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Caller                             | Location                                                               |
| -----: | ------: | ----: | ---------------------------------- | ---------------------------------------------------------------------- |
| 100.0% |       2 |     1 | `block in load_yaml_configuration` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb` |

##### `parse` (`../../lib/ruby/3.1.0/psych.rb`)

|      % | Samples | Calls | Caller      | Location                        |
| -----: | ------: | ----: | ----------- | ------------------------------- |
| 100.0% |       2 |     2 | `safe_load` | `../../lib/ruby/3.1.0/psych.rb` |

##### `parse_stream` (`../../lib/ruby/3.1.0/psych.rb`)

|      % | Samples | Calls | Caller  | Location                        |
| -----: | ------: | ----: | ------- | ------------------------------- |
| 100.0% |       2 |     2 | `parse` | `../../lib/ruby/3.1.0/psych.rb` |

##### `safe_load` (`../../lib/ruby/3.1.0/psych.rb`)

|     % | Samples | Calls | Caller                                | Location                                                               |
| ----: | ------: | ----: | ------------------------------------- | ---------------------------------------------------------------------- |
| 50.0% |       1 |     1 | `block in cache_root_dir_from_config` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb`  |
| 50.0% |       1 |     1 | `yaml_safe_load!`                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb` |

##### `do_with_enum` (`../../lib/ruby/3.1.0/set.rb`)

|      % | Samples | Calls | Caller       | Location                      |
| -----: | ------: | ----: | ------------ | ----------------------------- |
| 100.0% |       2 |     2 | `initialize` | `../../lib/ruby/3.1.0/set.rb` |

##### `initialize` (`../../lib/ruby/3.1.0/set.rb`)

|      % | Samples | Calls | Caller   | Location                      |
| -----: | ------: | ----: | -------- | ----------------------------- |
| 100.0% |       2 |     2 | `to_set` | `../../lib/ruby/3.1.0/set.rb` |

##### `to_set` (`../../lib/ruby/3.1.0/set.rb`)

|     % | Samples | Calls | Caller                 | Location                                                                                                |
| ----: | ------: | ----: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 50.0% |       1 |     1 | `remove_optarg_equals` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/preceding_following_alignment.rb`        |
| 50.0% |       1 |     1 | `visit_set`            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/atom_subcompiler.rb` |

##### `<top (required)>` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       2 |     1 | `<internal:gem_prelude>` | `<unknown>` |

##### `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Calls | Caller   | Location  |
| -----: | ------: | ----: | -------- | --------- |
| 100.0% |       2 |     1 | `<main>` | `rubocop` |

##### `block in activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Calls | Caller              | Location                                 |
| -----: | ------: | ----: | ------------------- | ---------------------------------------- |
| 100.0% |       2 |     1 | `activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `finish_resolve` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Calls | Caller                       | Location                                 |
| -----: | ------: | ----: | ---------------------------- | ---------------------------------------- |
| 100.0% |       2 |     1 | `block in activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `resolve_current` (`../../lib/ruby/vendor_ruby/rubygems/request_set.rb`)

|      % | Samples | Calls | Caller           | Location                                 |
| -----: | ------: | ----: | ---------------- | ---------------------------------------- |
| 100.0% |       2 |     1 | `finish_resolve` | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `<main>` (`<unknown>`)

|      % | Samples | Calls | Caller   | Location                      |
| -----: | ------: | ----: | -------- | ----------------------------- |
| 100.0% |       1 |     1 | `result` | `../../lib/ruby/3.1.0/erb.rb` |

##### `block in load` (`<unknown>`)

|      % | Samples | Calls | Caller       | Location                                               |
| -----: | ------: | ----: | ------------ | ------------------------------------------------------ |
| 100.0% |       1 |     1 | `initialize` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |

##### `load` (`<unknown>`)

|      % | Samples | Calls | Caller | Location                                               |
| -----: | ------: | ----: | ------ | ------------------------------------------------------ |
| 100.0% |       1 |     1 | `load` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |

##### `class_constructor?` (`<unknown>`)

|      % | Samples | Calls | Caller       | Location                                                                                  |
| -----: | ------: | ----: | ------------ | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `eval_call?` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/useless_access_modifier.rb` |

##### `module_definition?` (`<unknown>`)

|      % | Samples | Calls | Caller     | Location                                                                           |
| -----: | ------: | ----: | ---------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `on_casgn` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/module_length.rb` |

##### `op_asgn_type?` (`<unknown>`)

|      % | Samples | Calls | Caller        | Location                                                                            |
| -----: | ------: | ----: | ------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `extract_rhs` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/check_assignment.rb` |

##### `assignment_type?` (`<unknown>`)

|      % | Samples | Calls | Caller    | Location                                                                                  |
| -----: | ------: | ----: | --------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `on_send` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb` |

##### `control_op_condition` (`<unknown>`)

|      % | Samples | Calls | Caller               | Location                                                                                        |
| -----: | ------: | ----: | -------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `process_control_op` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/parentheses_around_condition.rb` |

##### `symbol_proc?` (`<unknown>`)

|      % | Samples | Calls | Caller     | Location                                                                       |
| -----: | ------: | ----: | ---------- | ------------------------------------------------------------------------------ |
| 100.0% |       1 |     1 | `on_block` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/symbol_proc.rb` |

##### `add_put_cmd` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Caller    | Location                      |
| -----: | ------: | ----: | --------- | ----------------------------- |
| 100.0% |       1 |     1 | `compile` | `../../lib/ruby/3.1.0/erb.rb` |

##### `compile` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Caller       | Location                      |
| -----: | ------: | ----: | ------------ | ----------------------------- |
| 100.0% |       1 |     1 | `initialize` | `../../lib/ruby/3.1.0/erb.rb` |

##### `initialize` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Caller                                | Location                                                              |
| -----: | ------: | ----: | ------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in cache_root_dir_from_config` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb` |

##### `<top (required)>` (`../../lib/ruby/3.1.0/net/http.rb`)

|      % | Samples | Calls | Caller    | Location    |
| -----: | ------: | ----: | --------- | ----------- |
| 100.0% |       1 |     1 | `require` | `<unknown>` |

##### `block in make_switch` (`../../lib/ruby/3.1.0/optparse.rb`)

|      % | Samples | Calls | Caller        | Location                           |
| -----: | ------: | ----: | ------------- | ---------------------------------- |
| 100.0% |       1 |     1 | `make_switch` | `../../lib/ruby/3.1.0/optparse.rb` |

##### `search` (`../../lib/ruby/3.1.0/optparse.rb`)

|      % | Samples | Calls | Caller                 | Location                           |
| -----: | ------: | ----: | ---------------------- | ---------------------------------- |
| 100.0% |       1 |     1 | `block in make_switch` | `../../lib/ruby/3.1.0/optparse.rb` |

##### `block in visit` (`../../lib/ruby/3.1.0/optparse.rb`)

|      % | Samples | Calls | Caller  | Location                           |
| -----: | ------: | ----: | ------- | ---------------------------------- |
| 100.0% |       1 |     1 | `visit` | `../../lib/ruby/3.1.0/optparse.rb` |

#### Callees

Callees ranked by contribution to each function's total samples. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<main>` (`rubocop`)

|     % | Samples | Calls | Callee              | Location                                              |
| ----: | ------: | ----: | ------------------- | ----------------------------------------------------- |
| 98.4% |     125 |     1 | `<top (required)>`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |
|  1.6% |       2 |     1 | `activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`              |

##### `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|     % | Samples | Calls | Callee     | Location                                                        |
| ----: | ------: | ----: | ---------- | --------------------------------------------------------------- |
| 62.4% |      78 |     1 | `realtime` | `../../lib/ruby/3.1.0/benchmark.rb`                             |
| 35.2% |      44 |     1 | `require`  | `<unknown>`                                                     |
|  2.4% |       3 |     1 | `running?` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server.rb` |

##### `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)

|      % | Samples | Calls | Callee                      | Location                                              |
| -----: | ------: | ----: | --------------------------- | ----------------------------------------------------- |
| 100.0% |      78 |     1 | `block in <top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |

##### `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Callee | Location                                                     |
| -----: | ------: | ----: | ------ | ------------------------------------------------------------ |
| 100.0% |      78 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Callee              | Location                                                         |
| ----: | ------: | ----: | ------------------- | ---------------------------------------------------------------- |
| 98.7% |      77 |     1 | `profile_if_needed` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`     |
|  1.3% |       1 |     1 | `parse`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/options.rb` |

##### `block in run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Callee            | Location                                                     |
| ----: | ------: | ----: | ----------------- | ------------------------------------------------------------ |
| 93.5% |      72 |     1 | `execute_runners` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  6.5% |       5 |     1 | `act_on_options`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `profile_if_needed` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee         | Location                                                     |
| -----: | ------: | ----: | -------------- | ------------------------------------------------------------ |
| 100.0% |      77 |     1 | `block in run` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `execute_runners` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee        | Location                                                     |
| -----: | ------: | ----: | ------------- | ------------------------------------------------------------ |
| 100.0% |      72 |     1 | `run_command` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee | Location                                                                 |
| -----: | ------: | ----: | ------ | ------------------------------------------------------------------------ |
| 100.0% |      72 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Calls | Callee | Location                                                             |
| -----: | ------: | ----: | ------ | -------------------------------------------------------------------- |
| 100.0% |      72 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|      % | Samples | Calls | Callee | Location                                                                            |
| -----: | ------: | ----: | ------ | ----------------------------------------------------------------------------------- |
| 100.0% |      72 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee           | Location                                                                            |
| -----: | ------: | ----: | ---------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      72 |     1 | `execute_runner` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee | Location                                                        |
| -----: | ------: | ----: | ------ | --------------------------------------------------------------- |
| 100.0% |      72 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee          | Location                                                        |
| -----: | ------: | ----: | --------------- | --------------------------------------------------------------- |
| 100.0% |      72 |     1 | `inspect_files` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee          | Location                                                                            |
| -----: | ------: | ----: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      72 |     1 | `with_redirect` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `with_redirect` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee                    | Location                                                                            |
| -----: | ------: | ----: | ------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      72 |     1 | `block in execute_runner` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `inspect_files` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|     % | Samples | Calls | Callee                                     | Location                                                                         |
| ----: | ------: | ----: | ------------------------------------------ | -------------------------------------------------------------------------------- |
| 98.6% |      71 |     1 | `each_inspected_file`                      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                  |
|  1.4% |       1 |     1 | `block (2 levels) in <class:FormatterSet>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter/formatter_set.rb` |

##### `block in each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee         | Location                                                        |
| -----: | ------: | ----: | -------------- | --------------------------------------------------------------- |
| 100.0% |      71 |     1 | `process_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `process_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee          | Location                                                        |
| -----: | ------: | ----: | --------------- | --------------------------------------------------------------- |
| 100.0% |      71 |     1 | `file_offenses` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee                         | Location                                                        |
| -----: | ------: | ----: | ------------------------------ | --------------------------------------------------------------- |
| 100.0% |      71 |     1 | `block in each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `file_offense_cache` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|     % | Samples | Calls | Callee                   | Location                                                        |
| ----: | ------: | ----: | ------------------------ | --------------------------------------------------------------- |
| 98.6% |      70 |     1 | `block in file_offenses` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
|  1.4% |       1 |     1 | `standby_team`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `file_offenses` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee               | Location                                                        |
| -----: | ------: | ----: | -------------------- | --------------------------------------------------------------- |
| 100.0% |      71 |     1 | `file_offense_cache` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `require` (`<unknown>`)

|      % | Samples | Calls | Callee             | Location                                                                                     |
| -----: | ------: | ----: | ------------------ | -------------------------------------------------------------------------------------------- |
| 179.2% |      43 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                     |
|  37.5% |       9 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop-ast.rb`                             |
|  16.7% |       4 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server-protocol.rb` |
|  16.7% |       4 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                     |
|  12.5% |       3 |     1 | `<top (required)>` | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/document.rb`                           |

##### `do_parse` (`<unknown>`)

|     % | Samples | Calls | Callee        | Location                                                                                  |
| ----: | ------: | ----: | ------------- | ----------------------------------------------------------------------------------------- |
| 47.6% |      10 |     3 | `next_token`  | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`                             |
|  9.5% |       2 |     1 | `_reduce_588` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb`                           |
|  9.5% |       2 |     2 | `next_token`  | `<unknown>`                                                                               |
|  4.8% |       1 |     1 | `_reduce_201` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb`                           |
|  4.8% |       1 |     1 | `_reduce_11`  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.racc.rb` |

##### `on_send` (`<unknown>`)

|     % | Samples | Calls | Callee                    | Location                                                                  |
| ----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 76.9% |      10 |    10 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
| 53.8% |       7 |     7 | `block in on_send`        | `<unknown>`                                                               |
| 23.1% |       3 |     3 | `trigger_restricted_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `on_def` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 280.0% |      14 |    10 | `on_begin`                | `<unknown>`                                                               |
| 100.0% |       5 |     5 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
|  60.0% |       3 |     2 | `on_block`                | `<unknown>`                                                               |
|  40.0% |       2 |     1 | `on_ensure`               | `<unknown>`                                                               |
|  40.0% |       2 |     2 | `on_rescue`               | `<unknown>`                                                               |

##### `on_block` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 125.0% |       5 |     5 | `on_begin`                | `<unknown>`                                                               |
| 100.0% |       4 |     4 | `on_send`                 | `<unknown>`                                                               |
|  75.0% |       3 |     3 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `block in on_dstr` (`<unknown>`)

|       % | Samples | Calls | Callee      | Location    |
| ------: | ------: | ----: | ----------- | ----------- |
| 1566.7% |      47 |     3 | `on_module` | `<unknown>` |
|  900.0% |      27 |     8 | `on_def`    | `<unknown>` |
|  866.7% |      26 |     3 | `on_class`  | `<unknown>` |
|  333.3% |      10 |     9 | `on_if`     | `<unknown>` |
|  333.3% |      10 |     1 | `on_sclass` | `<unknown>` |

##### `on_if` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |       3 |     3 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
| 100.0% |       3 |     3 | `on_and`                  | `<unknown>`                                                               |
| 100.0% |       3 |     3 | `on_begin`                | `<unknown>`                                                               |
|  66.7% |       2 |     2 | `on_send`                 | `<unknown>`                                                               |

##### `on_begin` (`<unknown>`)

|       % | Samples | Calls | Callee                    | Location                                                                  |
| ------: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 7050.0% |     141 |    30 | `on_dstr`                 | `<unknown>`                                                               |
|  100.0% |       2 |     2 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `<internal:gem_prelude>` (`<unknown>`)

|      % | Samples | Calls | Callee             | Location                                 |
| -----: | ------: | ----: | ------------------ | ---------------------------------------- |
| 100.0% |       2 |     1 | `<top (required)>` | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `on_casgn` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `next_token` (`<unknown>`)

|      % | Samples | Calls | Callee       | Location                                                                                |
| -----: | ------: | ----: | ------------ | --------------------------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `next_token` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rex.rb` |

##### `result` (`../../lib/ruby/3.1.0/erb.rb`)

|     % | Samples | Calls | Callee   | Location    |
| ----: | ------: | ----: | -------- | ----------- |
| 50.0% |       1 |     1 | `<main>` | `<unknown>` |

##### `parse` (`../../lib/ruby/3.1.0/psych.rb`)

|      % | Samples | Calls | Callee         | Location                        |
| -----: | ------: | ----: | -------------- | ------------------------------- |
| 100.0% |       2 |     2 | `parse_stream` | `../../lib/ruby/3.1.0/psych.rb` |

##### `parse_stream` (`../../lib/ruby/3.1.0/psych.rb`)

|     % | Samples | Calls | Callee   | Location                                     |
| ----: | ------: | ----: | -------- | -------------------------------------------- |
| 50.0% |       1 |     1 | `scalar` | `../../lib/ruby/3.1.0/psych/tree_builder.rb` |

##### `safe_load` (`../../lib/ruby/3.1.0/psych.rb`)

|      % | Samples | Calls | Callee  | Location                        |
| -----: | ------: | ----: | ------- | ------------------------------- |
| 100.0% |       2 |     2 | `parse` | `../../lib/ruby/3.1.0/psych.rb` |

##### `do_with_enum` (`../../lib/ruby/3.1.0/set.rb`)

|     % | Samples | Calls | Callee      | Location                                                                                |
| ----: | ------: | ----: | ----------- | --------------------------------------------------------------------------------------- |
| 50.0% |       1 |     1 | `each_node` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `initialize` (`../../lib/ruby/3.1.0/set.rb`)

|      % | Samples | Calls | Callee         | Location                      |
| -----: | ------: | ----: | -------------- | ----------------------------- |
| 100.0% |       2 |     2 | `do_with_enum` | `../../lib/ruby/3.1.0/set.rb` |

##### `to_set` (`../../lib/ruby/3.1.0/set.rb`)

|      % | Samples | Calls | Callee       | Location                      |
| -----: | ------: | ----: | ------------ | ----------------------------- |
| 100.0% |       2 |     2 | `initialize` | `../../lib/ruby/3.1.0/set.rb` |

##### `<top (required)>` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|     % | Samples | Calls | Callee             | Location                                               |
| ----: | ------: | ----: | ------------------ | ------------------------------------------------------ |
| 50.0% |       1 |     1 | `<top (required)>` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |
| 50.0% |       1 |     1 | `load_defaults`    | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |

##### `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Calls | Callee                       | Location                                 |
| -----: | ------: | ----: | ---------------------------- | ---------------------------------------- |
| 100.0% |       2 |     1 | `block in activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `block in activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Calls | Callee           | Location                                 |
| -----: | ------: | ----: | ---------------- | ---------------------------------------- |
| 100.0% |       2 |     1 | `finish_resolve` | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `finish_resolve` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Calls | Callee            | Location                                             |
| -----: | ------: | ----: | ----------------- | ---------------------------------------------------- |
| 100.0% |       2 |     1 | `resolve_current` | `../../lib/ruby/vendor_ruby/rubygems/request_set.rb` |

##### `resolve_current` (`../../lib/ruby/vendor_ruby/rubygems/request_set.rb`)

|     % | Samples | Calls | Callee    | Location                                             |
| ----: | ------: | ----: | --------- | ---------------------------------------------------- |
| 50.0% |       1 |     1 | `resolve` | `../../lib/ruby/vendor_ruby/rubygems/request_set.rb` |
| 50.0% |       1 |     1 | `require` | `<unknown>`                                          |

##### `block in load` (`<unknown>`)

|      % | Samples | Calls | Callee       | Location                                             |
| -----: | ------: | ----: | ------------ | ---------------------------------------------------- |
| 100.0% |       1 |     1 | `initialize` | `../../lib/ruby/vendor_ruby/rubygems/requirement.rb` |

##### `load` (`<unknown>`)

|      % | Samples | Calls | Callee       | Location                                               |
| -----: | ------: | ----: | ------------ | ------------------------------------------------------ |
| 100.0% |       1 |     1 | `initialize` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |

##### `assignment_type?` (`<unknown>`)

|      % | Samples | Calls | Callee         | Location                                                                                  |
| -----: | ------: | ----: | -------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `end_with_eq?` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb` |

##### `compile` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Callee        | Location                      |
| -----: | ------: | ----: | ------------- | ----------------------------- |
| 100.0% |       1 |     1 | `add_put_cmd` | `../../lib/ruby/3.1.0/erb.rb` |

##### `initialize` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Callee    | Location                      |
| -----: | ------: | ----: | --------- | ----------------------------- |
| 100.0% |       1 |     1 | `compile` | `../../lib/ruby/3.1.0/erb.rb` |

##### `block in make_switch` (`../../lib/ruby/3.1.0/optparse.rb`)

|      % | Samples | Calls | Callee   | Location                           |
| -----: | ------: | ----: | -------- | ---------------------------------- |
| 100.0% |       1 |     1 | `search` | `../../lib/ruby/3.1.0/optparse.rb` |

##### `search` (`../../lib/ruby/3.1.0/optparse.rb`)

|      % | Samples | Calls | Callee  | Location                           |
| -----: | ------: | ----: | ------- | ---------------------------------- |
| 100.0% |       1 |     1 | `visit` | `../../lib/ruby/3.1.0/optparse.rb` |

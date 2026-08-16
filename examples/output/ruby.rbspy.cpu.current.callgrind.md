# Sampling profile

Collected 126 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 78.6% |      99 |
| Unknown          | 11.1% |      14 |
| Standard library | 10.3% |      13 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                    | Location                                                                                               |
| ---: | ------: | --------------------------- | ------------------------------------------------------------------------------------------------------ |
| 8.7% |      11 | `<top (required)>`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                               |
| 5.6% |       7 | `require`                   | `<unknown>`                                                                                            |
| 4.8% |       6 | `slice`                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| 3.2% |       4 | `line_begins`               | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| 3.2% |       4 | `def_helper`                | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`           |
| 2.4% |       3 | `initialize`                | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`                                                   |
| 2.4% |       3 | `<module:Parser>`           | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                               |
| 2.4% |       3 | `advance`                   | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
| 2.4% |       3 | `before_semicolon?`         | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb`                  |
| 2.4% |       3 | `move_pos`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                          |
| 2.4% |       3 | `block in each_child_node`  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
| 1.6% |       2 | `<module:Interface>`        | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
| 1.6% |       2 | `do_parse`                  | `<unknown>`                                                                                            |
| 1.6% |       2 | `emit`                      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
| 1.6% |       2 | `loc?`                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                  |
| 0.8% |       1 | `block in <module:DryRun>`  | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb`                                       |
| 0.8% |       1 | `scan`                      | `../../lib/ruby/3.1.0/erb.rb`                                                                          |
| 0.8% |       1 | `block in <module:NoWrite>` | `../../lib/ruby/3.1.0/fileutils.rb`                                                                    |
| 0.8% |       1 | `block in make_switch`      | `../../lib/ruby/3.1.0/optparse.rb`                                                                     |
| 0.8% |       1 | `scalar`                    | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                                                           |

#### Categories

##### Third-party

|    % | Samples | Function                   | Location                                                                                               |
| ---: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------ |
| 8.7% |      11 | `<top (required)>`         | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                               |
| 4.8% |       6 | `slice`                    | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| 3.2% |       4 | `line_begins`              | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
| 3.2% |       4 | `def_helper`               | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`           |
| 2.4% |       3 | `initialize`               | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`                                                   |
| 2.4% |       3 | `<module:Parser>`          | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                               |
| 2.4% |       3 | `advance`                  | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
| 2.4% |       3 | `before_semicolon?`        | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb`                  |
| 2.4% |       3 | `move_pos`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                          |
| 2.4% |       3 | `block in each_child_node` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                |
| 1.6% |       2 | `<module:Interface>`       | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb` |
| 1.6% |       2 | `emit`                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                      |
| 1.6% |       2 | `loc?`                     | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                  |
| 0.8% |       1 | `<top (required)>`         | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/document.rb`                                     |
| 0.8% |       1 | `<top (required)>`         | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/xpath.rb`                                        |
| 0.8% |       1 | `<class:BaseParser>`       | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/parsers/baseparser.rb`                           |
| 0.8% |       1 | `<top (required)>`         | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/transport.rb` |
| 0.8% |       1 | `<module:Builders>`        | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                               |
| 0.8% |       1 | `accessible`               | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/builders/default.rb`                              |
| 0.8% |       1 | `version`                  | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb`                                        |

##### Unknown

|    % | Samples | Function           | Location    |
| ---: | ------: | ------------------ | ----------- |
| 5.6% |       7 | `require`          | `<unknown>` |
| 1.6% |       2 | `do_parse`         | `<unknown>` |
| 0.8% |       1 | `block in load`    | `<unknown>` |
| 0.8% |       1 | `if_type?`         | `<unknown>` |
| 0.8% |       1 | `numblock_type?`   | `<unknown>` |
| 0.8% |       1 | `assignment_type?` | `<unknown>` |
| 0.8% |       1 | `on_args`          | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                                         |
| ---: | ------: | --------------------------- | ---------------------------------------------------------------- |
| 0.8% |       1 | `block in <module:DryRun>`  | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |
| 0.8% |       1 | `scan`                      | `../../lib/ruby/3.1.0/erb.rb`                                    |
| 0.8% |       1 | `block in <module:NoWrite>` | `../../lib/ruby/3.1.0/fileutils.rb`                              |
| 0.8% |       1 | `block in make_switch`      | `../../lib/ruby/3.1.0/optparse.rb`                               |
| 0.8% |       1 | `scalar`                    | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                     |
| 0.8% |       1 | `initialize`                | `../../lib/ruby/3.1.0/psych/nodes/scalar.rb`                     |
| 0.8% |       1 | `tokenize`                  | `../../lib/ruby/3.1.0/psych/scalar_scanner.rb`                   |
| 0.8% |       1 | `set_start_location`        | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                     |
| 0.8% |       1 | `include?`                  | `../../lib/ruby/3.1.0/set.rb`                                    |
| 0.8% |       1 | `<top (required)>`          | `../../lib/ruby/3.1.0/uri/common.rb`                             |
| 0.8% |       1 | `<top (required)>`          | `../../lib/ruby/vendor_ruby/rubygems/specification.rb`           |
| 0.8% |       1 | `open_file`                 | `../../lib/ruby/vendor_ruby/rubygems.rb`                         |
| 0.8% |       1 | `<top (required)>`          | `../../lib/ruby/vendor_ruby/rubygems/resolver.rb`                |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |      11 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb:780` |

##### `require` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       7 | 170      |

##### `slice` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       6 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb:214` |

##### `line_begins` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       4 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb:341` |

##### `def_helper` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |       4 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb:61` |

##### `initialize` (`/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       3 | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb:80` |

##### `<module:Parser>` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       3 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb:91` |

##### `advance` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       3 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb:14654` |

##### `before_semicolon?` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb`)

|      % | Samples | Location                                                                                 |
| -----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% |       3 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb:36` |

##### `move_pos` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       3 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb:121` |

##### `block in each_child_node` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |       3 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb:29` |

##### `<module:Interface>` (`/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/interface.rb:657` |

##### `do_parse` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 4        |

##### `emit` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb:14683` |

##### `loc?` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb:593` |

##### `block in <module:DryRun>` (`../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb:1756` |

##### `scan` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/erb.rb:513` |

##### `block in <module:NoWrite>` (`../../lib/ruby/3.1.0/fileutils.rb`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/fileutils.rb:1721` |

##### `block in make_switch` (`../../lib/ruby/3.1.0/optparse.rb`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/optparse.rb:1434` |

##### `scalar` (`../../lib/ruby/3.1.0/psych/tree_builder.rb`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `../../lib/ruby/3.1.0/psych/tree_builder.rb:101` |

##### `<top (required)>` (`../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/document.rb`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/document.rb:16` |

##### `<top (required)>` (`../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/xpath.rb`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/xpath.rb:5` |

##### `<class:BaseParser>` (`../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/parsers/baseparser.rb`)

|      % | Samples | Location                                                                         |
| -----: | ------: | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/parsers/baseparser.rb:672` |

##### `<top (required)>` (`/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/transport.rb`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server/protocol/transport.rb:2` |

##### `<module:Builders>` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb:80` |

##### `accessible` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/builders/default.rb`)

|      % | Samples | Location                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/builders/default.rb:684` |

##### `version` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb:19` |

##### `block in load` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 38       |

##### `if_type?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 200      |

##### `numblock_type?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 200      |

##### `assignment_type?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 238      |

##### `on_args` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 74       |

##### `initialize` (`../../lib/ruby/3.1.0/psych/nodes/scalar.rb`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/psych/nodes/scalar.rb:65` |

##### `tokenize` (`../../lib/ruby/3.1.0/psych/scalar_scanner.rb`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/psych/scalar_scanner.rb:98` |

##### `set_start_location` (`../../lib/ruby/3.1.0/psych/tree_builder.rb`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `../../lib/ruby/3.1.0/psych/tree_builder.rb:130` |

##### `include?` (`../../lib/ruby/3.1.0/set.rb`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/set.rb:405` |

##### `<top (required)>` (`../../lib/ruby/3.1.0/uri/common.rb`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/uri/common.rb:683` |

##### `<top (required)>` (`../../lib/ruby/vendor_ruby/rubygems/specification.rb`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/vendor_ruby/rubygems/specification.rb:37` |

##### `open_file` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/vendor_ruby/rubygems.rb:800` |

##### `<top (required)>` (`../../lib/ruby/vendor_ruby/rubygems/resolver.rb`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/vendor_ruby/rubygems/resolver.rb:347` |

### Total samples

Functions ranked by total samples taken in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

|     % | Samples | Function                       | Location                                                                            |
| ----: | ------: | ------------------------------ | ----------------------------------------------------------------------------------- |
| 98.4% |     124 | `<main>`                       | `rubocop`                                                                           |
| 96.8% |     122 | `<top (required)>`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                               |
| 60.3% |      76 | `realtime`                     | `../../lib/ruby/3.1.0/benchmark.rb`                                                 |
| 60.3% |      76 | `block in <top (required)>`    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                               |
| 60.3% |      76 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.5% |      75 | `block in run`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.5% |      75 | `profile_if_needed`            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.6% |      70 | `execute_runners`              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.6% |      70 | `run_command`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.6% |      70 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 55.6% |      70 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 55.6% |      70 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.6% |      70 | `block in execute_runner`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.6% |      70 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.6% |      70 | `execute_runner`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.6% |      70 | `with_redirect`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.6% |      70 | `block in each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.6% |      70 | `process_file`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.6% |      70 | `each_inspected_file`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.6% |      70 | `file_offense_cache`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |

#### Categories

##### Third-party

|     % | Samples | Function                       | Location                                                                            |
| ----: | ------: | ------------------------------ | ----------------------------------------------------------------------------------- |
| 96.8% |     122 | `<top (required)>`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                               |
| 60.3% |      76 | `block in <top (required)>`    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                               |
| 60.3% |      76 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.5% |      75 | `block in run`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.5% |      75 | `profile_if_needed`            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.6% |      70 | `execute_runners`              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.6% |      70 | `run_command`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.6% |      70 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 55.6% |      70 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 55.6% |      70 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.6% |      70 | `block in execute_runner`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.6% |      70 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.6% |      70 | `execute_runner`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.6% |      70 | `with_redirect`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 55.6% |      70 | `block in each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.6% |      70 | `process_file`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.6% |      70 | `each_inspected_file`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.6% |      70 | `file_offense_cache`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.6% |      70 | `file_offenses`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 55.6% |      70 | `inspect_files`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |

##### Unknown

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 19.8% |      25 | `require`                | `<unknown>` |
| 15.9% |      20 | `do_parse`               | `<unknown>` |
| 11.1% |      14 | `on_send`                | `<unknown>` |
|  4.0% |       5 | `on_block`               | `<unknown>` |
|  4.0% |       5 | `on_def`                 | `<unknown>` |
|  2.4% |       3 | `on_if`                  | `<unknown>` |
|  1.6% |       2 | `<internal:gem_prelude>` | `<unknown>` |
|  1.6% |       2 | `on_module`              | `<unknown>` |
|  0.8% |       1 | `block in load`          | `<unknown>` |
|  0.8% |       1 | `load`                   | `<unknown>` |
|  0.8% |       1 | `if_type?`               | `<unknown>` |
|  0.8% |       1 | `numblock_type?`         | `<unknown>` |
|  0.8% |       1 | `assignment_type?`       | `<unknown>` |
|  0.8% |       1 | `tap`                    | `<unknown>` |
|  0.8% |       1 | `emit_call`              | `<unknown>` |
|  0.8% |       1 | `emit_capture`           | `<unknown>` |
|  0.8% |       1 | `on_begin`               | `<unknown>` |
|  0.8% |       1 | `block in on_dstr`       | `<unknown>` |
|  0.8% |       1 | `on_ivasgn`              | `<unknown>` |
|  0.8% |       1 | `on_lvasgn`              | `<unknown>` |

##### Standard library

|     % | Samples | Function                     | Location                                                         |
| ----: | ------: | ---------------------------- | ---------------------------------------------------------------- |
| 60.3% |      76 | `realtime`                   | `../../lib/ruby/3.1.0/benchmark.rb`                              |
|  2.4% |       3 | `parse`                      | `../../lib/ruby/3.1.0/psych.rb`                                  |
|  2.4% |       3 | `parse_stream`               | `../../lib/ruby/3.1.0/psych.rb`                                  |
|  2.4% |       3 | `scalar`                     | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                     |
|  2.4% |       3 | `safe_load`                  | `../../lib/ruby/3.1.0/psych.rb`                                  |
|  1.6% |       2 | `<top (required)>`           | `../../lib/ruby/vendor_ruby/rubygems.rb`                         |
|  1.6% |       2 | `activate_bin_path`          | `../../lib/ruby/vendor_ruby/rubygems.rb`                         |
|  1.6% |       2 | `block in activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`                         |
|  1.6% |       2 | `load`                       | `../../lib/ruby/vendor_ruby/rubygems/specification.rb`           |
|  0.8% |       1 | `<top (required)>`           | `../../lib/ruby/3.1.0/bundler.rb`                                |
|  0.8% |       1 | `<top (required)>`           | `../../lib/ruby/3.1.0/bundler/vendored_fileutils.rb`             |
|  0.8% |       1 | `<module:DryRun>`            | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |
|  0.8% |       1 | `block in <module:DryRun>`   | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |
|  0.8% |       1 | `<module:FileUtils>`         | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |
|  0.8% |       1 | `<top (required)>`           | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |
|  0.8% |       1 | `compile`                    | `../../lib/ruby/3.1.0/erb.rb`                                    |
|  0.8% |       1 | `scan`                       | `../../lib/ruby/3.1.0/erb.rb`                                    |
|  0.8% |       1 | `initialize`                 | `../../lib/ruby/3.1.0/erb.rb`                                    |
|  0.8% |       1 | `<module:FileUtils>`         | `../../lib/ruby/3.1.0/fileutils.rb`                              |
|  0.8% |       1 | `<module:NoWrite>`           | `../../lib/ruby/3.1.0/fileutils.rb`                              |

#### Callers

Callers ranked by the samples taken in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Caller   | Location  |
| -----: | ------: | ----: | -------- | --------- |
| 100.0% |     122 |     1 | `<main>` | `rubocop` |

##### `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)

|      % | Samples | Calls | Caller             | Location                                              |
| -----: | ------: | ----: | ------------------ | ----------------------------------------------------- |
| 100.0% |      76 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |

##### `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Caller     | Location                            |
| -----: | ------: | ----: | ---------- | ----------------------------------- |
| 100.0% |      76 |     1 | `realtime` | `../../lib/ruby/3.1.0/benchmark.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller                      | Location                                              |
| -----: | ------: | ----: | --------------------------- | ----------------------------------------------------- |
| 100.0% |      76 |     1 | `block in <top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |

##### `block in run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller              | Location                                                     |
| -----: | ------: | ----: | ------------------- | ------------------------------------------------------------ |
| 100.0% |      75 |     1 | `profile_if_needed` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `profile_if_needed` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller | Location                                                     |
| -----: | ------: | ----: | ------ | ------------------------------------------------------------ |
| 100.0% |      75 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `execute_runners` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller         | Location                                                     |
| -----: | ------: | ----: | -------------- | ------------------------------------------------------------ |
| 100.0% |      70 |     1 | `block in run` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller            | Location                                                     |
| -----: | ------: | ----: | ----------------- | ------------------------------------------------------------ |
| 100.0% |      70 |     1 | `execute_runners` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Calls | Caller        | Location                                                     |
| -----: | ------: | ----: | ------------- | ------------------------------------------------------------ |
| 100.0% |      70 |     1 | `run_command` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|      % | Samples | Calls | Caller | Location                                                                 |
| -----: | ------: | ----: | ------ | ------------------------------------------------------------------------ |
| 100.0% |      70 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller | Location                                                             |
| -----: | ------: | ----: | ------ | -------------------------------------------------------------------- |
| 100.0% |      70 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller          | Location                                                                            |
| -----: | ------: | ----: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      70 |     1 | `with_redirect` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                    | Location                                                                            |
| -----: | ------: | ----: | ------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      70 |     1 | `block in execute_runner` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller | Location                                                                            |
| -----: | ------: | ----: | ------ | ----------------------------------------------------------------------------------- |
| 100.0% |      70 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `with_redirect` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller           | Location                                                                            |
| -----: | ------: | ----: | ---------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      70 |     1 | `execute_runner` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `block in each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                | Location                                                        |
| -----: | ------: | ----: | --------------------- | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `process_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                         | Location                                                        |
| -----: | ------: | ----: | ------------------------------ | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `block in each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller          | Location                                                        |
| -----: | ------: | ----: | --------------- | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `inspect_files` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `file_offense_cache` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller          | Location                                                        |
| -----: | ------: | ----: | --------------- | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `file_offenses` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `file_offenses` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller         | Location                                                        |
| -----: | ------: | ----: | -------------- | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `process_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `inspect_files` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller | Location                                                        |
| -----: | ------: | ----: | ------ | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `require` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location                                                                           |
| -----: | ------: | ----: | ------------------ | ---------------------------------------------------------------------------------- |
| 168.0% |      42 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                              |
|  40.0% |      10 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                           |
|  24.0% |       6 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast.rb`                   |
|  12.0% |       3 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/lsp/server.rb`                |
|  12.0% |       3 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter/junit_formatter.rb` |

##### `do_parse` (`<unknown>`)

|     % | Samples | Calls | Caller  | Location                                                                             |
| ----: | ------: | ----: | ------- | ------------------------------------------------------------------------------------ |
| 80.0% |      16 |     1 | `parse` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`                        |
| 20.0% |       4 |     4 | `parse` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.rb` |

##### `on_send` (`<unknown>`)

|     % | Samples | Calls | Caller             | Location    |
| ----: | ------: | ----: | ------------------ | ----------- |
| 78.6% |      11 |    10 | `block in on_dstr` | `<unknown>` |
| 57.1% |       8 |     8 | `block in on_send` | `<unknown>` |
| 21.4% |       3 |     3 | `on_if`            | `<unknown>` |
| 14.3% |       2 |     2 | `on_block`         | `<unknown>` |
| 14.3% |       2 |     2 | `on_lvasgn`        | `<unknown>` |

##### `on_block` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location    |
| -----: | ------: | ----: | ------------------ | ----------- |
| 120.0% |       6 |     5 | `block in on_dstr` | `<unknown>` |
|  40.0% |       2 |     2 | `on_def`           | `<unknown>` |
|  40.0% |       2 |     1 | `block in on_send` | `<unknown>` |
|  20.0% |       1 |     1 | `block in on_case` | `<unknown>` |
|  20.0% |       1 |     1 | `on_defs`          | `<unknown>` |

##### `on_def` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location    |
| -----: | ------: | ----: | ------------------ | ----------- |
| 540.0% |      27 |     5 | `block in on_dstr` | `<unknown>` |

##### `on_if` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location    |
| -----: | ------: | ----: | ------------------ | ----------- |
| 333.3% |      10 |     7 | `block in on_dstr` | `<unknown>` |
| 100.0% |       3 |     3 | `on_block`         | `<unknown>` |
|  33.3% |       1 |     1 | `on_def`           | `<unknown>` |
|  33.3% |       1 |     1 | `on_lvasgn`        | `<unknown>` |

##### `parse` (`../../lib/ruby/3.1.0/psych.rb`)

|     % | Samples | Calls | Caller      | Location                                                                          |
| ----: | ------: | ----: | ----------- | --------------------------------------------------------------------------------- |
| 66.7% |       2 |     2 | `safe_load` | `../../lib/ruby/3.1.0/psych.rb`                                                   |
| 33.3% |       1 |     1 | `check`     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb` |

##### `parse_stream` (`../../lib/ruby/3.1.0/psych.rb`)

|      % | Samples | Calls | Caller  | Location                        |
| -----: | ------: | ----: | ------- | ------------------------------- |
| 100.0% |       3 |     3 | `parse` | `../../lib/ruby/3.1.0/psych.rb` |

##### `scalar` (`../../lib/ruby/3.1.0/psych/tree_builder.rb`)

|      % | Samples | Calls | Caller         | Location                        |
| -----: | ------: | ----: | -------------- | ------------------------------- |
| 100.0% |       3 |     3 | `parse_stream` | `../../lib/ruby/3.1.0/psych.rb` |

##### `safe_load` (`../../lib/ruby/3.1.0/psych.rb`)

|     % | Samples | Calls | Caller                                | Location                                                               |
| ----: | ------: | ----: | ------------------------------------- | ---------------------------------------------------------------------- |
| 66.7% |       2 |     1 | `yaml_safe_load!`                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb` |
| 33.3% |       1 |     1 | `block in cache_root_dir_from_config` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb`  |

##### `on_module` (`<unknown>`)

|       % | Samples | Calls | Caller             | Location    |
| ------: | ------: | ----: | ------------------ | ----------- |
| 2250.0% |      45 |     3 | `block in on_dstr` | `<unknown>` |

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

##### `load` (`../../lib/ruby/vendor_ruby/rubygems/specification.rb`)

|     % | Samples | Calls | Caller               | Location                                                    |
| ----: | ------: | ----: | -------------------- | ----------------------------------------------------------- |
| 50.0% |       1 |     1 | `to_spec`            | `../../lib/ruby/vendor_ruby/rubygems/stub_specification.rb` |
| 50.0% |       1 |     1 | `block in each_spec` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb`      |

##### `block in load` (`<unknown>`)

|      % | Samples | Calls | Caller       | Location                                               |
| -----: | ------: | ----: | ------------ | ------------------------------------------------------ |
| 100.0% |       1 |     1 | `initialize` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |

##### `load` (`<unknown>`)

|      % | Samples | Calls | Caller | Location                                               |
| -----: | ------: | ----: | ------ | ------------------------------------------------------ |
| 100.0% |       1 |     1 | `load` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |

##### `if_type?` (`<unknown>`)

|      % | Samples | Calls | Caller    | Location                                                                              |
| -----: | ------: | ----: | --------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `on_send` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/require_parentheses.rb` |

##### `numblock_type?` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                            |
| -----: | ------: | ----: | -------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `same_collection_looping_block?` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/combinable_loops.rb` |

##### `assignment_type?` (`<unknown>`)

|      % | Samples | Calls | Caller    | Location                                                                                  |
| -----: | ------: | ----: | --------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `on_send` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb` |

##### `tap` (`<unknown>`)

|      % | Samples | Calls | Caller | Location                                                              |
| -----: | ------: | ----: | ------ | --------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `dir`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb` |

##### `emit_call` (`<unknown>`)

|      % | Samples | Calls | Caller       | Location                                                                                  |
| -----: | ------: | ----: | ------------ | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `_reduce_11` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.racc.rb` |

##### `emit_capture` (`<unknown>`)

|      % | Samples | Calls | Caller      | Location                                                                                  |
| -----: | ------: | ----: | ----------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `_reduce_8` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.racc.rb` |

##### `on_begin` (`<unknown>`)

|       % | Samples | Calls | Caller             | Location                                                                   |
| ------: | ------: | ----: | ------------------ | -------------------------------------------------------------------------- |
| 5300.0% |      53 |     4 | `on_while`         | `<unknown>`                                                                |
| 3400.0% |      34 |     1 | `walk`             | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb` |
| 2500.0% |      25 |     3 | `on_class`         | `<unknown>`                                                                |
| 1400.0% |      14 |     9 | `on_def`           | `<unknown>`                                                                |
|  400.0% |       4 |     3 | `block in on_case` | `<unknown>`                                                                |

##### `block in on_dstr` (`<unknown>`)

|        % | Samples | Calls | Caller    | Location    |
| -------: | ------: | ----: | --------- | ----------- |
| 14300.0% |     143 |    33 | `on_dstr` | `<unknown>` |

##### `on_ivasgn` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location    |
| -----: | ------: | ----: | ------------------ | ----------- |
| 100.0% |       1 |     1 | `block in on_dstr` | `<unknown>` |

##### `on_lvasgn` (`<unknown>`)

|      % | Samples | Calls | Caller             | Location    |
| -----: | ------: | ----: | ------------------ | ----------- |
| 500.0% |       5 |     5 | `block in on_dstr` | `<unknown>` |
| 100.0% |       1 |     1 | `on_if`            | `<unknown>` |

##### `<top (required)>` (`../../lib/ruby/3.1.0/bundler.rb`)

|      % | Samples | Calls | Caller    | Location    |
| -----: | ------: | ----: | --------- | ----------- |
| 100.0% |       1 |     1 | `require` | `<unknown>` |

##### `<top (required)>` (`../../lib/ruby/3.1.0/bundler/vendored_fileutils.rb`)

|      % | Samples | Calls | Caller             | Location                          |
| -----: | ------: | ----: | ------------------ | --------------------------------- |
| 100.0% |       1 |     1 | `<top (required)>` | `../../lib/ruby/3.1.0/bundler.rb` |

##### `<module:DryRun>` (`../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb`)

|      % | Samples | Calls | Caller               | Location                                                         |
| -----: | ------: | ----: | -------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 |     1 | `<module:FileUtils>` | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |

##### `block in <module:DryRun>` (`../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb`)

|      % | Samples | Calls | Caller            | Location                                                         |
| -----: | ------: | ----: | ----------------- | ---------------------------------------------------------------- |
| 100.0% |       1 |     1 | `<module:DryRun>` | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |

##### `<module:FileUtils>` (`../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb`)

|      % | Samples | Calls | Caller             | Location                                                         |
| -----: | ------: | ----: | ------------------ | ---------------------------------------------------------------- |
| 100.0% |       1 |     1 | `<top (required)>` | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |

##### `<top (required)>` (`../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb`)

|      % | Samples | Calls | Caller             | Location                                             |
| -----: | ------: | ----: | ------------------ | ---------------------------------------------------- |
| 100.0% |       1 |     1 | `<top (required)>` | `../../lib/ruby/3.1.0/bundler/vendored_fileutils.rb` |

##### `compile` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Caller       | Location                      |
| -----: | ------: | ----: | ------------ | ----------------------------- |
| 100.0% |       1 |     1 | `initialize` | `../../lib/ruby/3.1.0/erb.rb` |

##### `scan` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Caller    | Location                      |
| -----: | ------: | ----: | --------- | ----------------------------- |
| 100.0% |       1 |     1 | `compile` | `../../lib/ruby/3.1.0/erb.rb` |

##### `initialize` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Caller                             | Location                                                               |
| -----: | ------: | ----: | ---------------------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in load_yaml_configuration` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb` |

##### `<module:FileUtils>` (`../../lib/ruby/3.1.0/fileutils.rb`)

|      % | Samples | Calls | Caller             | Location                            |
| -----: | ------: | ----: | ------------------ | ----------------------------------- |
| 100.0% |       1 |     1 | `<top (required)>` | `../../lib/ruby/3.1.0/fileutils.rb` |

##### `<module:NoWrite>` (`../../lib/ruby/3.1.0/fileutils.rb`)

|      % | Samples | Calls | Caller               | Location                            |
| -----: | ------: | ----: | -------------------- | ----------------------------------- |
| 100.0% |       1 |     1 | `<module:FileUtils>` | `../../lib/ruby/3.1.0/fileutils.rb` |

#### Callees

Callees ranked by contribution to each function's total samples. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<main>` (`rubocop`)

|     % | Samples | Calls | Callee              | Location                                              |
| ----: | ------: | ----: | ------------------- | ----------------------------------------------------- |
| 98.4% |     122 |     1 | `<top (required)>`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |
|  1.6% |       2 |     1 | `activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`              |

##### `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|     % | Samples | Calls | Callee     | Location                                                        |
| ----: | ------: | ----: | ---------- | --------------------------------------------------------------- |
| 62.3% |      76 |     1 | `realtime` | `../../lib/ruby/3.1.0/benchmark.rb`                             |
| 34.4% |      42 |     1 | `require`  | `<unknown>`                                                     |
|  3.3% |       4 |     1 | `running?` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server.rb` |

##### `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)

|      % | Samples | Calls | Callee                      | Location                                              |
| -----: | ------: | ----: | --------------------------- | ----------------------------------------------------- |
| 100.0% |      76 |     1 | `block in <top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |

##### `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Callee | Location                                                     |
| -----: | ------: | ----: | ------ | ------------------------------------------------------------ |
| 100.0% |      76 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Callee              | Location                                                         |
| ----: | ------: | ----: | ------------------- | ---------------------------------------------------------------- |
| 98.7% |      75 |     1 | `profile_if_needed` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`     |
|  1.3% |       1 |     1 | `parse`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/options.rb` |

##### `block in run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Callee            | Location                                                     |
| ----: | ------: | ----: | ----------------- | ------------------------------------------------------------ |
| 93.3% |      70 |     1 | `execute_runners` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  6.7% |       5 |     1 | `act_on_options`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `profile_if_needed` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee         | Location                                                     |
| -----: | ------: | ----: | -------------- | ------------------------------------------------------------ |
| 100.0% |      75 |     1 | `block in run` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `execute_runners` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee        | Location                                                     |
| -----: | ------: | ----: | ------------- | ------------------------------------------------------------ |
| 100.0% |      70 |     1 | `run_command` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee | Location                                                                 |
| -----: | ------: | ----: | ------ | ------------------------------------------------------------------------ |
| 100.0% |      70 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Calls | Callee | Location                                                             |
| -----: | ------: | ----: | ------ | -------------------------------------------------------------------- |
| 100.0% |      70 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|      % | Samples | Calls | Callee | Location                                                                            |
| -----: | ------: | ----: | ------ | ----------------------------------------------------------------------------------- |
| 100.0% |      70 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee           | Location                                                                            |
| -----: | ------: | ----: | ---------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      70 |     1 | `execute_runner` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee | Location                                                        |
| -----: | ------: | ----: | ------ | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee          | Location                                                        |
| -----: | ------: | ----: | --------------- | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `inspect_files` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee          | Location                                                                            |
| -----: | ------: | ----: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      70 |     1 | `with_redirect` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `with_redirect` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee                    | Location                                                                            |
| -----: | ------: | ----: | ------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      70 |     1 | `block in execute_runner` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `block in each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee         | Location                                                        |
| -----: | ------: | ----: | -------------- | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `process_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `process_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee          | Location                                                        |
| -----: | ------: | ----: | --------------- | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `file_offenses` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee                         | Location                                                        |
| -----: | ------: | ----: | ------------------------------ | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `block in each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `file_offense_cache` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|     % | Samples | Calls | Callee                   | Location                                                        |
| ----: | ------: | ----: | ------------------------ | --------------------------------------------------------------- |
| 98.6% |      69 |     1 | `block in file_offenses` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
|  1.4% |       1 |     1 | `standby_team`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `file_offenses` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee               | Location                                                        |
| -----: | ------: | ----: | -------------------- | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `file_offense_cache` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `inspect_files` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee                | Location                                                        |
| -----: | ------: | ----: | --------------------- | --------------------------------------------------------------- |
| 100.0% |      70 |     1 | `each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `require` (`<unknown>`)

|      % | Samples | Calls | Callee             | Location                                                                                     |
| -----: | ------: | ----: | ------------------ | -------------------------------------------------------------------------------------------- |
| 168.0% |      42 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                     |
|  36.0% |       9 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop-ast.rb`                             |
|  16.0% |       4 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`                                     |
|  12.0% |       3 |     1 | `<top (required)>` | `../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/document.rb`                           |
|  12.0% |       3 |     1 | `<top (required)>` | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.6/lib/language_server-protocol.rb` |

##### `do_parse` (`<unknown>`)

|     % | Samples | Calls | Callee        | Location                                                        |
| ----: | ------: | ----: | ------------- | --------------------------------------------------------------- |
| 50.0% |      10 |     4 | `next_token`  | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`   |
|  5.0% |       1 |     1 | `_reduce_230` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb` |
|  5.0% |       1 |     1 | `_reduce_335` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb` |
|  5.0% |       1 |     1 | `_reduce_570` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb` |
|  5.0% |       1 |     1 | `_reduce_600` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb` |

##### `on_send` (`<unknown>`)

|     % | Samples | Calls | Callee                    | Location                                                                  |
| ----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 92.9% |      13 |    13 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
| 85.7% |      12 |    11 | `block in on_send`        | `<unknown>`                                                               |
|  7.1% |       1 |     1 | `trigger_restricted_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `on_block` (`<unknown>`)

|     % | Samples | Calls | Callee                    | Location                                                                  |
| ----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 80.0% |       4 |     4 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
| 60.0% |       3 |     2 | `on_begin`                | `<unknown>`                                                               |
| 60.0% |       3 |     3 | `on_if`                   | `<unknown>`                                                               |
| 40.0% |       2 |     2 | `on_send`                 | `<unknown>`                                                               |
| 20.0% |       1 |     1 | `on_until`                | `<unknown>`                                                               |

##### `on_def` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 280.0% |      14 |     9 | `on_begin`                | `<unknown>`                                                               |
|  80.0% |       4 |     4 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
|  40.0% |       2 |     2 | `on_block`                | `<unknown>`                                                               |
|  40.0% |       2 |     1 | `on_ensure`               | `<unknown>`                                                               |
|  40.0% |       2 |     2 | `on_rescue`               | `<unknown>`                                                               |

##### `on_if` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |       3 |     3 | `on_begin`                | `<unknown>`                                                               |
| 100.0% |       3 |     3 | `on_or`                   | `<unknown>`                                                               |
| 100.0% |       3 |     3 | `on_send`                 | `<unknown>`                                                               |
|  66.7% |       2 |     2 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
|  33.3% |       1 |     1 | `on_array`                | `<unknown>`                                                               |

##### `parse` (`../../lib/ruby/3.1.0/psych.rb`)

|      % | Samples | Calls | Callee         | Location                        |
| -----: | ------: | ----: | -------------- | ------------------------------- |
| 100.0% |       3 |     3 | `parse_stream` | `../../lib/ruby/3.1.0/psych.rb` |

##### `parse_stream` (`../../lib/ruby/3.1.0/psych.rb`)

|      % | Samples | Calls | Callee   | Location                                     |
| -----: | ------: | ----: | -------- | -------------------------------------------- |
| 100.0% |       3 |     3 | `scalar` | `../../lib/ruby/3.1.0/psych/tree_builder.rb` |

##### `scalar` (`../../lib/ruby/3.1.0/psych/tree_builder.rb`)

|     % | Samples | Calls | Callee         | Location                                     |
| ----: | ------: | ----: | -------------- | -------------------------------------------- |
| 33.3% |       1 |     1 | `initialize`   | `../../lib/ruby/3.1.0/psych/nodes/scalar.rb` |
| 33.3% |       1 |     1 | `set_location` | `../../lib/ruby/3.1.0/psych/tree_builder.rb` |

##### `safe_load` (`../../lib/ruby/3.1.0/psych.rb`)

|     % | Samples | Calls | Callee   | Location                                         |
| ----: | ------: | ----: | -------- | ------------------------------------------------ |
| 66.7% |       2 |     2 | `parse`  | `../../lib/ruby/3.1.0/psych.rb`                  |
| 33.3% |       1 |     1 | `accept` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |

##### `<internal:gem_prelude>` (`<unknown>`)

|      % | Samples | Calls | Callee             | Location                                 |
| -----: | ------: | ----: | ------------------ | ---------------------------------------- |
| 100.0% |       2 |     1 | `<top (required)>` | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `on_module` (`<unknown>`)

|       % | Samples | Calls | Callee                    | Location                                                                  |
| ------: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 2150.0% |      43 |     3 | `on_while`                | `<unknown>`                                                               |
|  100.0% |       2 |     2 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

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

|     % | Samples | Calls | Callee           | Location                                               |
| ----: | ------: | ----: | ---------------- | ------------------------------------------------------ |
| 50.0% |       1 |     1 | `finish_resolve` | `../../lib/ruby/vendor_ruby/rubygems.rb`               |
| 50.0% |       1 |     1 | `activate`       | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |

##### `load` (`../../lib/ruby/vendor_ruby/rubygems/specification.rb`)

|     % | Samples | Calls | Callee      | Location                                 |
| ----: | ------: | ----: | ----------- | ---------------------------------------- |
| 50.0% |       1 |     1 | `open_file` | `../../lib/ruby/vendor_ruby/rubygems.rb` |
| 50.0% |       1 |     1 | `load`      | `<unknown>`                              |

##### `load` (`<unknown>`)

|      % | Samples | Calls | Callee       | Location                                               |
| -----: | ------: | ----: | ------------ | ------------------------------------------------------ |
| 100.0% |       1 |     1 | `initialize` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |

##### `tap` (`<unknown>`)

|      % | Samples | Calls | Callee         | Location                                                              |
| -----: | ------: | ----: | -------------- | --------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in dir` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb` |

##### `emit_call` (`<unknown>`)

|      % | Samples | Calls | Callee      | Location                                                                              |
| -----: | ------: | ----: | ----------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `emit_call` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/builder.rb` |

##### `emit_capture` (`<unknown>`)

|      % | Samples | Calls | Callee         | Location                                                                              |
| -----: | ------: | ----: | -------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `emit_capture` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/builder.rb` |

##### `on_begin` (`<unknown>`)

|        % | Samples | Calls | Callee                    | Location                                                                  |
| -------: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 13700.0% |     137 |    27 | `on_dstr`                 | `<unknown>`                                                               |
|   100.0% |       1 |     1 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `block in on_dstr` (`<unknown>`)

|       % | Samples | Calls | Callee      | Location    |
| ------: | ------: | ----: | ----------- | ----------- |
| 4500.0% |      45 |     3 | `on_module` | `<unknown>` |
| 2700.0% |      27 |     5 | `on_def`    | `<unknown>` |
| 2500.0% |      25 |     3 | `on_class`  | `<unknown>` |
| 1100.0% |      11 |    10 | `on_send`   | `<unknown>` |
| 1000.0% |      10 |     7 | `on_if`     | `<unknown>` |

##### `on_ivasgn` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `on_lvasgn` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 200.0% |       2 |     2 | `on_send`                 | `<unknown>`                                                               |
| 100.0% |       1 |     1 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
| 100.0% |       1 |     1 | `on_begin`                | `<unknown>`                                                               |
| 100.0% |       1 |     1 | `on_if`                   | `<unknown>`                                                               |
| 100.0% |       1 |     1 | `on_or`                   | `<unknown>`                                                               |

##### `<top (required)>` (`../../lib/ruby/3.1.0/bundler.rb`)

|      % | Samples | Calls | Callee             | Location                                             |
| -----: | ------: | ----: | ------------------ | ---------------------------------------------------- |
| 100.0% |       1 |     1 | `<top (required)>` | `../../lib/ruby/3.1.0/bundler/vendored_fileutils.rb` |

##### `<top (required)>` (`../../lib/ruby/3.1.0/bundler/vendored_fileutils.rb`)

|      % | Samples | Calls | Callee             | Location                                                         |
| -----: | ------: | ----: | ------------------ | ---------------------------------------------------------------- |
| 100.0% |       1 |     1 | `<top (required)>` | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |

##### `<module:DryRun>` (`../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb`)

|      % | Samples | Calls | Callee                     | Location                                                         |
| -----: | ------: | ----: | -------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in <module:DryRun>` | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |

##### `<module:FileUtils>` (`../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb`)

|      % | Samples | Calls | Callee            | Location                                                         |
| -----: | ------: | ----: | ----------------- | ---------------------------------------------------------------- |
| 100.0% |       1 |     1 | `<module:DryRun>` | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |

##### `<top (required)>` (`../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb`)

|      % | Samples | Calls | Callee               | Location                                                         |
| -----: | ------: | ----: | -------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 |     1 | `<module:FileUtils>` | `../../lib/ruby/3.1.0/bundler/vendor/fileutils/lib/fileutils.rb` |

##### `compile` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Callee | Location                      |
| -----: | ------: | ----: | ------ | ----------------------------- |
| 100.0% |       1 |     1 | `scan` | `../../lib/ruby/3.1.0/erb.rb` |

##### `initialize` (`../../lib/ruby/3.1.0/erb.rb`)

|      % | Samples | Calls | Callee    | Location                      |
| -----: | ------: | ----: | --------- | ----------------------------- |
| 100.0% |       1 |     1 | `compile` | `../../lib/ruby/3.1.0/erb.rb` |

##### `<module:FileUtils>` (`../../lib/ruby/3.1.0/fileutils.rb`)

|      % | Samples | Calls | Callee             | Location                            |
| -----: | ------: | ----: | ------------------ | ----------------------------------- |
| 100.0% |       1 |     1 | `<module:NoWrite>` | `../../lib/ruby/3.1.0/fileutils.rb` |

##### `<module:NoWrite>` (`../../lib/ruby/3.1.0/fileutils.rb`)

|      % | Samples | Calls | Callee                      | Location                            |
| -----: | ------: | ----: | --------------------------- | ----------------------------------- |
| 100.0% |       1 |     1 | `block in <module:NoWrite>` | `../../lib/ruby/3.1.0/fileutils.rb` |

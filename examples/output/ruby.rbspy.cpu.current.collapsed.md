# Sampling profile

Collected 136 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 54.4% |      74 |
| Third-party      | 33.8% |      46 |
| Unknown          |  6.6% |       9 |
| Standard library |  5.1% |       7 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                      | Location                                                                      |
| ----: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 19.9% |      27 | `(unknown) [c function]`                                      | `<unknown>`                                                                   |
|  3.7% |       5 | `String#[] [c function]`                                      | `<unknown>`                                                                   |
|  2.9% |       4 | `String#encode [c function]`                                  | `<unknown>`                                                                   |
|  2.9% |       4 | `Module#class_eval [c function]`                              | `<unknown>`                                                                   |
|  2.9% |       4 | `Parser::Lexer#advance`                                       | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                       |
|  2.2% |       3 | `Kernel#require_relative [c function]`                        | `<unknown>`                                                                   |
|  2.2% |       3 | `Array#index [c function]`                                    | `<unknown>`                                                                   |
|  2.2% |       3 | `Parser::Source::Buffer#line_index_for_position`              | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                  |
|  1.5% |       2 | `Kernel#public_send [c function]`                             | `<unknown>`                                                                   |
|  1.5% |       2 | `block in on_send`                                            | `<unknown>`                                                                   |
|  1.5% |       2 | `RuboCop::AST::Descendence#visit_descendants_of_types`        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
|  1.5% |       2 | `Enumerable#map [c function]`                                 | `<unknown>`                                                                   |
|  1.5% |       2 | `String#index [c function]`                                   | `<unknown>`                                                                   |
|  1.5% |       2 | `Symbol#start_with? [c function]`                             | `<unknown>`                                                                   |
|  1.5% |       2 | `StringScanner#skip [c function]`                             | `<unknown>`                                                                   |
|  1.5% |       2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` | `<unknown>`                                                                   |
|  1.5% |       2 | `Module#append_features [c function]`                         | `<unknown>`                                                                   |
|  1.5% |       2 | `block (2 levels) in traverse`                                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`       |
|  0.7% |       1 | `Array#each [c function]`                                     | `<unknown>`                                                                   |
|  0.7% |       1 | `RuboCop::AST::Descendence#visit_all_descendants`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

#### Categories

##### Native

|     % | Samples | Function                               | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 19.9% |      27 | `(unknown) [c function]`               | `<unknown>` |
|  3.7% |       5 | `String#[] [c function]`               | `<unknown>` |
|  2.9% |       4 | `String#encode [c function]`           | `<unknown>` |
|  2.9% |       4 | `Module#class_eval [c function]`       | `<unknown>` |
|  2.2% |       3 | `Kernel#require_relative [c function]` | `<unknown>` |
|  2.2% |       3 | `Array#index [c function]`             | `<unknown>` |
|  1.5% |       2 | `Kernel#public_send [c function]`      | `<unknown>` |
|  1.5% |       2 | `Enumerable#map [c function]`          | `<unknown>` |
|  1.5% |       2 | `String#index [c function]`            | `<unknown>` |
|  1.5% |       2 | `Symbol#start_with? [c function]`      | `<unknown>` |
|  1.5% |       2 | `StringScanner#skip [c function]`      | `<unknown>` |
|  1.5% |       2 | `Module#append_features [c function]`  | `<unknown>` |
|  0.7% |       1 | `Array#each [c function]`              | `<unknown>` |
|  0.7% |       1 | `Kernel#require [c function]`          | `<unknown>` |
|  0.7% |       1 | `Array#<=> [c function]`               | `<unknown>` |
|  0.7% |       1 | `Symbol#=== [c function]`              | `<unknown>` |
|  0.7% |       1 | `Enumerator#each [c function]`         | `<unknown>` |
|  0.7% |       1 | `Enumerable#to_a [c function]`         | `<unknown>` |
|  0.7% |       1 | `Kernel#freeze [c function]`           | `<unknown>` |
|  0.7% |       1 | `Array#select [c function]`            | `<unknown>` |

##### Third-party

|    % | Samples | Function                                                                    | Location                                                                                          |
| ---: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 2.9% |       4 | `Parser::Lexer#advance`                                                     | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                           |
| 2.2% |       3 | `Parser::Source::Buffer#line_index_for_position`                            | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                                      |
| 1.5% |       2 | `RuboCop::AST::Descendence#visit_descendants_of_types`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                     |
| 1.5% |       2 | `block (2 levels) in traverse`                                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                           |
| 0.7% |       1 | `RuboCop::AST::Descendence#visit_all_descendants`                           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                     |
| 0.7% |       1 | `RuboCop::Cop::Layout::CommentIndentation#correct_indentation`              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`                     |
| 0.7% |       1 | `Parser::Source::Buffer#slice`                                              | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                                      |
| 0.7% |       1 | `RuboCop::AST::MethodIdentifierPredicates#negation_method?`                 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/method_identifier_predicates.rb`    |
| 0.7% |       1 | `RuboCop::Cop::MultilineExpressionIndentation#on_send`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb`         |
| 0.7% |       1 | `block in def_node_matcher`                                                 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`                |
| 0.7% |       1 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`                |
| 0.7% |       1 | `RuboCop::Cop::Util#line`                                                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                                           |
| 0.7% |       1 | `RuboCop::AST::Node#first_line`                                             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
| 0.7% |       1 | `AST::Node#initialize`                                                      | `../bundle/gems/ast-2.4.3/lib/ast/node.rb`                                                        |
| 0.7% |       1 | `RuboCop::Cop::Style::RedundantRegexpEscape#on_regexp`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_escape.rb`                  |
| 0.7% |       1 | `RuboCop::AST::NodePattern::Compiler::SequenceSubcompiler#visit_other_type` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
| 0.7% |       1 | `Parser::Lexer#emit_instance_var`                                           | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                           |
| 0.7% |       1 | `Parser::Builders::Default#prefix_string_map`                               | `../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb`                                   |
| 0.7% |       1 | `block in each_argument_node`                                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb`            |
| 0.7% |       1 | `block in contained_by_multiline_collection_that_could_be_broken_up?`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/check_line_breakable.rb`                     |

##### Unknown

|    % | Samples | Function                                                      | Location    |
| ---: | ------: | ------------------------------------------------------------- | ----------- |
| 1.5% |       2 | `block in on_send`                                            | `<unknown>` |
| 1.5% |       2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Commissioner#on_send`                          | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::Node#proc?`                                    | `<unknown>` |
| 0.7% |       1 | `block in private_class_methods`                              | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Style::NumericPredicate#comparison`            | `<unknown>` |
| 0.7% |       1 | `String#unpack`                                               | `<unknown>` |

##### Standard library

|    % | Samples | Function                                | Location                                      |
| ---: | ------: | --------------------------------------- | --------------------------------------------- |
| 0.7% |       1 | `Psych::Nodes::Node#initialize`         | `../lib/ruby/3.4.0/psych/nodes/node.rb`       |
| 0.7% |       1 | `Psych::TreeBuilder#set_start_location` | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
| 0.7% |       1 | `block in parse_in_order`               | `../lib/ruby/3.4.0/optparse.rb`               |
| 0.7% |       1 | `ERB::Compiler::Buffer#close`           | `../lib/ruby/3.4.0/erb/compiler.rb`           |
| 0.7% |       1 | `Psych::Visitors::ToRuby#accept`        | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 0.7% |       1 | `Psych::Visitors::ToRuby#resolve_class` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 0.7% |       1 | `block in merge`                        | `../lib/ruby/3.4.0/set.rb`                    |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       4 | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb:14654` |

##### `Parser::Source::Buffer#line_index_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       3 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb:350` |

##### `block in on_send` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 171      |

##### `RuboCop::AST::Descendence#visit_descendants_of_types` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb:131` |

##### `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 238      |

##### `block (2 levels) in traverse` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb:25` |

##### `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb:122` |

##### `RuboCop::Cop::Layout::CommentIndentation#correct_indentation` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb:154` |

##### `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb:214` |

##### `RuboCop::AST::MethodIdentifierPredicates#negation_method?` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/method_identifier_predicates.rb`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/method_identifier_predicates.rb:202` |

##### `RuboCop::Cop::MultilineExpressionIndentation#on_send` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb:22` |

##### `block in def_node_matcher` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`)

|      % | Samples | Location                                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb:18` |

##### `RuboCop::AST::NodePattern::MethodDefiner#def_helper` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`)

|      % | Samples | Location                                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb:61` |

##### `RuboCop::Cop::Util#line` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb:175` |

##### `RuboCop::AST::Node#first_line` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb:350` |

##### `AST::Node#initialize` (`../bundle/gems/ast-2.4.3/lib/ast/node.rb`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/ast-2.4.3/lib/ast/node.rb:80` |

##### `RuboCop::Cop::Style::RedundantRegexpEscape#on_regexp` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_escape.rb`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_escape.rb:56` |

##### `RuboCop::AST::NodePattern::Compiler::SequenceSubcompiler#visit_other_type` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb:76` |

##### `Parser::Lexer#emit_instance_var` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb:14798` |

##### `Parser::Builders::Default#prefix_string_map` (`../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb:1909` |

##### `block in each_argument_node` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb:23` |

##### `block in contained_by_multiline_collection_that_could_be_broken_up?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/check_line_breakable.rb`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/check_line_breakable.rb:181` |

##### `RuboCop::Cop::Commissioner#on_send` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 74       |

##### `RuboCop::AST::Node#proc?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 630      |

##### `block in private_class_methods` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 60       |

##### `RuboCop::Cop::Style::NumericPredicate#comparison` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 188      |

##### `String#unpack` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 26       |

##### `Psych::Nodes::Node#initialize` (`../lib/ruby/3.4.0/psych/nodes/node.rb`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/nodes/node.rb:34` |

##### `Psych::TreeBuilder#set_start_location` (`../lib/ruby/3.4.0/psych/tree_builder.rb`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/tree_builder.rb:130` |

##### `block in parse_in_order` (`../lib/ruby/3.4.0/optparse.rb`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `../lib/ruby/3.4.0/optparse.rb:1791` |

##### `ERB::Compiler::Buffer#close` (`../lib/ruby/3.4.0/erb/compiler.rb`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/erb/compiler.rb:302` |

##### `Psych::Visitors::ToRuby#accept` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb:49` |

##### `Psych::Visitors::ToRuby#resolve_class` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb:426` |

##### `block in merge` (`../lib/ruby/3.4.0/set.rb`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       1 | `../lib/ruby/3.4.0/set.rb:605` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(unknown) [c function]` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 74.1% |      20 | `Kernel#require_relative [c function]` | `<unknown>` |
| 22.2% |       6 | `Kernel#require [c function]`          | `<unknown>` |
|  3.7% |       1 | `Array#each [c function]`              | `<unknown>` |

##### `String#[] [c function]` (`<unknown>`)

|     % | Samples | Caller                             | Location                                                            |
| ----: | ------: | ---------------------------------- | ------------------------------------------------------------------- |
| 60.0% |       3 | `RuboCop::Cop::RangeHelp#move_pos` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb` |
| 40.0% |       2 | `Parser::Source::Buffer#slice`     | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`        |

##### `String#encode [c function]` (`<unknown>`)

|      % | Samples | Caller                         | Location                                                     |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% |       4 | `Parser::Source::Buffer#slice` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `Module#class_eval [c function]` (`<unknown>`)

|      % | Samples | Caller                                                | Location                                                                           |
| -----: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       4 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |

##### `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Caller                    | Location                                            |
| -----: | ------: | ------------------------- | --------------------------------------------------- |
| 100.0% |       4 | `Parser::Base#next_token` | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 66.7% |       2 | `Kernel#require [c function]`          | `<unknown>` |
| 33.3% |       1 | `Kernel#require_relative [c function]` | `<unknown>` |

##### `Array#index [c function]` (`<unknown>`)

|      % | Samples | Caller                                                    | Location                                                                    |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% |       3 | `RuboCop::Cop::Layout::SpaceAfterComma#before_semicolon?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb` |

##### `Parser::Source::Buffer#line_index_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Caller                                     | Location                                                     |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------------ |
| 100.0% |       3 | `Parser::Source::Buffer#line_for_position` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `Kernel#public_send [c function]` (`<unknown>`)

|      % | Samples | Caller                                        | Location                                                        |
| -----: | ------: | --------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       2 | `block (2 levels) in trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `block in on_send` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       2 | `(unknown) [c function]` | `<unknown>` |

##### `RuboCop::AST::Descendence#visit_descendants_of_types` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|     % | Samples | Caller                                        | Location                                                                      |
| ----: | ------: | --------------------------------------------- | ----------------------------------------------------------------------------- |
| 50.0% |       1 | `RuboCop::AST::Descendence#visit_descendants` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
| 50.0% |       1 | `block in visit_descendants_of_types`         | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `Enumerable#map [c function]` (`<unknown>`)

|     % | Samples | Caller                                                       | Location                                                                                              |
| ----: | ------: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 50.0% |       1 | `RuboCop::AST::NodePattern::MethodDefiner#emit_keyword_list` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`                    |
| 50.0% |       1 | `block in visit_union`                                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/node_pattern_subcompiler.rb` |

##### `String#index [c function]` (`<unknown>`)

|      % | Samples | Caller                               | Location                                                     |
| -----: | ------: | ------------------------------------ | ------------------------------------------------------------ |
| 100.0% |       2 | `Parser::Source::Buffer#line_begins` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `Symbol#start_with? [c function]` (`<unknown>`)

|      % | Samples | Caller                      | Location                                                |
| -----: | ------: | --------------------------- | ------------------------------------------------------- |
| 100.0% |       2 | `block in callbacks_needed` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb` |

##### `StringScanner#skip [c function]` (`<unknown>`)

|      % | Samples | Caller                                           | Location                                                                      |
| -----: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------- |
| 100.0% |       2 | `RuboCop::AST::NodePattern::LexerRex#next_token` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rex.rb` |

##### `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` (`<unknown>`)

|      % | Samples | Caller                                               | Location                                                                        |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       2 | `RuboCop::Cop::Style::ConditionalAssignment#on_send` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb` |

##### `Module#append_features [c function]` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       2 | `Module#include [c function]` | `<unknown>` |

##### `block (2 levels) in traverse` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       2 | `(unknown) [c function]` | `<unknown>` |

##### `Array#each [c function]` (`<unknown>`)

|      % | Samples | Caller                                            | Location                                                                      |
| -----: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::AST::Descendence#visit_all_descendants` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Caller                           | Location                                                                      |
| -----: | ------: | -------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `block in visit_all_descendants` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `Kernel#require [c function]` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       1 | `Kernel#require` | `<unknown>` |

##### `Array#<=> [c function]` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `Enumerable#sort_by [c function]` | `<unknown>` |

##### `Symbol#=== [c function]` (`<unknown>`)

|      % | Samples | Caller                                                               | Location                                                                        |
| -----: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Style::LineEndConcatenation#standard_string_literal?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb` |

##### `Enumerator#each [c function]` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `Enumerable#find [c function]` | `<unknown>` |

##### `Enumerable#to_a [c function]` (`<unknown>`)

|      % | Samples | Caller                         | Location                                                    |
| -----: | ------: | ------------------------------ | ----------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::AST::Node#ancestors` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb` |

##### `Kernel#freeze [c function]` (`<unknown>`)

|      % | Samples | Caller                      | Location                                                  |
| -----: | ------: | --------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `Parser::Source::Map#node=` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/map.rb` |

##### `Array#select [c function]` (`<unknown>`)

|      % | Samples | Caller                                | Location                                                |
| -----: | ------: | ------------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Base#callbacks_needed` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb` |

##### `RuboCop::Cop::Layout::CommentIndentation#correct_indentation` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`)

|      % | Samples | Caller                                           | Location                                                                      |
| -----: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Layout::CommentIndentation#check` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb` |

##### `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Caller                         | Location                                                    |
| -----: | ------: | ------------------------------ | ----------------------------------------------------------- |
| 100.0% |       1 | `Parser::Source::Range#source` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb` |

##### `RuboCop::AST::MethodIdentifierPredicates#negation_method?` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/method_identifier_predicates.rb`)

|      % | Samples | Caller                                                 | Location                                                                                       |
| -----: | ------: | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::AST::MethodIdentifierPredicates#prefix_not?` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/method_identifier_predicates.rb` |

##### `RuboCop::Cop::MultilineExpressionIndentation#on_send` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `Kernel#public_send [c function]` | `<unknown>` |

##### `block in def_node_matcher` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`)

|      % | Samples | Caller                                                | Location                                                                           |
| -----: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |

##### `RuboCop::AST::NodePattern::MethodDefiner#def_helper` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`)

|      % | Samples | Caller                                                      | Location                                                                           |
| -----: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::AST::NodePattern::MethodDefiner#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |

##### `RuboCop::Cop::Util#line` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`)

|      % | Samples | Caller                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Util#same_line?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb` |

##### `RuboCop::AST::Node#first_line` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `Array#map [c function]` | `<unknown>` |

##### `AST::Node#initialize` (`../bundle/gems/ast-2.4.3/lib/ast/node.rb`)

|      % | Samples | Caller                          | Location                                                    |
| -----: | ------: | ------------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::AST::Node#initialize` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb` |

##### `RuboCop::Cop::Style::RedundantRegexpEscape#on_regexp` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_escape.rb`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `Kernel#public_send [c function]` | `<unknown>` |

##### `RuboCop::AST::NodePattern::Compiler::SequenceSubcompiler#visit_other_type` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb`)

|      % | Samples | Caller                                                        | Location                                                                                 |
| -----: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::AST::NodePattern::Compiler::Subcompiler#do_compile` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/subcompiler.rb` |

##### `Parser::Lexer#emit_instance_var` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Caller                  | Location                                                |
| -----: | ------: | ----------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `Parser::Lexer#advance` | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb` |

##### `Parser::Builders::Default#prefix_string_map` (`../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb`)

|      % | Samples | Caller                             | Location                                                        |
| -----: | ------: | ---------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `Parser::Builders::Default#symbol` | `../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb` |

##### `block in each_argument_node` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       1 | `Array#each [c function]` | `<unknown>` |

##### `block in contained_by_multiline_collection_that_could_be_broken_up?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/check_line_breakable.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `(unknown) [c function]` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_send` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       1 | `block in on_send` | `<unknown>` |

##### `RuboCop::AST::Node#proc?` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `RuboCop::AST::Node#lambda_or_proc?` | `<unknown>` |

##### `block in private_class_methods` (`<unknown>`)

|      % | Samples | Caller                           | Location                                                                      |
| -----: | ------: | -------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `block in visit_all_descendants` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `RuboCop::Cop::Style::NumericPredicate#comparison` (`<unknown>`)

|      % | Samples | Caller                                        | Location                                                                   |
| -----: | ------: | --------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Style::NumericPredicate#check` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/numeric_predicate.rb` |

##### `String#unpack` (`<unknown>`)

|      % | Samples | Caller                         | Location                                                |
| -----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 100.0% |       1 | `Parser::Lexer#source_buffer=` | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb` |

##### `Psych::Nodes::Node#initialize` (`../lib/ruby/3.4.0/psych/nodes/node.rb`)

|      % | Samples | Caller                             | Location                                   |
| -----: | ------: | ---------------------------------- | ------------------------------------------ |
| 100.0% |       1 | `Psych::Nodes::Mapping#initialize` | `../lib/ruby/3.4.0/psych/nodes/mapping.rb` |

##### `Psych::TreeBuilder#set_start_location` (`../lib/ruby/3.4.0/psych/tree_builder.rb`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       1 | `Psych::TreeBuilder#start_sequence` | `<unknown>` |

##### `block in parse_in_order` (`../lib/ruby/3.4.0/optparse.rb`)

|      % | Samples | Caller                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |       1 | `Kernel#catch [c function]` | `<unknown>` |

##### `ERB::Compiler::Buffer#close` (`../lib/ruby/3.4.0/erb/compiler.rb`)

|      % | Samples | Caller                  | Location                            |
| -----: | ------: | ----------------------- | ----------------------------------- |
| 100.0% |       1 | `ERB::Compiler#compile` | `../lib/ruby/3.4.0/erb/compiler.rb` |

##### `Psych::Visitors::ToRuby#accept` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Caller                 | Location                                      |
| -----: | ------: | ---------------------- | --------------------------------------------- |
| 100.0% |       1 | `block in revive_hash` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::Visitors::ToRuby#resolve_class` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Caller                                               | Location                                      |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Sequence` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `block in merge` (`../lib/ruby/3.4.0/set.rb`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       1 | `Array#each [c function]` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                              | Location                                                       |
| ----: | ------: | ------------------------------------- | -------------------------------------------------------------- |
| 99.3% |     135 | `<main>`                              | `rubocop`                                                      |
| 97.1% |     132 | `Kernel#load [c function]`            | `<unknown>`                                                    |
| 81.6% |     111 | `(unknown) [c function]`              | `<unknown>`                                                    |
| 66.2% |      90 | `Array#each [c function]`             | `<unknown>`                                                    |
| 63.2% |      86 | `RuboCop::CLI#run`                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
| 63.2% |      86 | `block in <top (required)>`           | `../bundle/gems/rubocop-1.65.1/exe/rubocop`                    |
| 63.2% |      86 | `Benchmark.realtime`                  | `../lib/ruby/3.4.0/benchmark.rb`                               |
| 62.5% |      85 | `block in run`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
| 62.5% |      85 | `RuboCop::CLI#profile_if_needed`      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
| 58.8% |      80 | `RuboCop::CLI::Command.run`           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`     |
| 58.8% |      80 | `RuboCop::CLI::Environment#run`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |
| 58.8% |      80 | `RuboCop::CLI#run_command`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
| 58.8% |      80 | `RuboCop::CLI#execute_runners`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
| 58.1% |      79 | `RuboCop::Runner#file_offense_cache`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
| 58.1% |      79 | `RuboCop::Runner#file_offenses`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
| 58.1% |      79 | `RuboCop::Runner#process_file`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
| 58.1% |      79 | `block in each_inspected_file`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
| 58.1% |      79 | `Enumerable#reduce [c function]`      | `<unknown>`                                                    |
| 58.1% |      79 | `RuboCop::Runner#each_inspected_file` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
| 58.1% |      79 | `RuboCop::Runner#inspect_files`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |

#### Categories

##### Native

|     % | Samples | Function                                     | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 97.1% |     132 | `Kernel#load [c function]`                   | `<unknown>` |
| 81.6% |     111 | `(unknown) [c function]`                     | `<unknown>` |
| 66.2% |      90 | `Array#each [c function]`                    | `<unknown>` |
| 58.1% |      79 | `Enumerable#reduce [c function]`             | `<unknown>` |
| 44.1% |      60 | `Enumerable#flat_map [c function]`           | `<unknown>` |
| 35.3% |      48 | `Kernel#require [c function]`                | `<unknown>` |
| 32.4% |      44 | `Kernel#require_relative [c function]`       | `<unknown>` |
| 29.4% |      40 | `Kernel#public_send [c function]`            | `<unknown>` |
| 23.5% |      32 | `Class#new [c function]`                     | `<unknown>` |
| 14.7% |      20 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |
| 11.8% |      16 | `Enumerable#each_with_index [c function]`    | `<unknown>` |
|  5.9% |       8 | `Enumerator#each [c function]`               | `<unknown>` |
|  5.1% |       7 | `Enumerable#find [c function]`               | `<unknown>` |
|  4.4% |       6 | `Enumerable#each_cons [c function]`          | `<unknown>` |
|  3.7% |       5 | `String#[] [c function]`                     | `<unknown>` |
|  3.7% |       5 | `Array#select [c function]`                  | `<unknown>` |
|  2.9% |       4 | `String#encode [c function]`                 | `<unknown>` |
|  2.9% |       4 | `Module#class_eval [c function]`             | `<unknown>` |
|  2.9% |       4 | `Enumerable#each_slice [c function]`         | `<unknown>` |
|  2.2% |       3 | `Thread::Mutex#synchronize [c function]`     | `<unknown>` |

##### Third-party

|     % | Samples | Function                                              | Location                                                                  |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 63.2% |      86 | `RuboCop::CLI#run`                                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 63.2% |      86 | `block in <top (required)>`                           | `../bundle/gems/rubocop-1.65.1/exe/rubocop`                               |
| 62.5% |      85 | `block in run`                                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 62.5% |      85 | `RuboCop::CLI#profile_if_needed`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 58.8% |      80 | `RuboCop::CLI::Command.run`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 58.8% |      80 | `RuboCop::CLI::Environment#run`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 58.8% |      80 | `RuboCop::CLI#run_command`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 58.8% |      80 | `RuboCop::CLI#execute_runners`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 58.1% |      79 | `RuboCop::Runner#file_offense_cache`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `RuboCop::Runner#file_offenses`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `RuboCop::Runner#process_file`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `block in each_inspected_file`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `RuboCop::Runner#each_inspected_file`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `RuboCop::Runner#inspect_files`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `RuboCop::Runner#run`                                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `block in execute_runner`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `RuboCop::CLI::Command::ExecuteRunner#run`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 57.4% |      78 | `block in file_offenses`                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |

##### Unknown

|     % | Samples | Function                               | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 43.4% |      59 | `Kernel#loop`                          | `<unknown>` |
| 34.6% |      47 | `Kernel#require`                       | `<unknown>` |
| 30.1% |      41 | `block in on_dstr`                     | `<unknown>` |
| 30.1% |      41 | `RuboCop::AST::Traversal#on_dstr`      | `<unknown>` |
| 30.1% |      41 | `RuboCop::Cop::Commissioner#on_begin`  | `<unknown>` |
| 30.1% |      41 | `RuboCop::Cop::Commissioner#on_module` | `<unknown>` |
| 29.4% |      40 | `RuboCop::AST::Traversal#on_while`     | `<unknown>` |
| 25.0% |      34 | `RuboCop::Cop::Commissioner#on_def`    | `<unknown>` |
| 23.5% |      32 | `RuboCop::AST::Traversal#on_def`       | `<unknown>` |
| 22.1% |      30 | `RuboCop::Cop::Commissioner#on_class`  | `<unknown>` |
| 20.6% |      28 | `RuboCop::AST::Traversal#on_class`     | `<unknown>` |
| 16.2% |      22 | `RuboCop::Cop::Commissioner#on_send`   | `<unknown>` |
| 14.7% |      20 | `Racc::Parser#do_parse`                | `<unknown>` |
| 11.0% |      15 | `RuboCop::Cop::Commissioner#on_if`     | `<unknown>` |
|  9.6% |      13 | `block in on_send`                     | `<unknown>` |
|  9.6% |      13 | `RuboCop::AST::Traversal#on_send`      | `<unknown>` |
|  8.1% |      11 | `RuboCop::Cop::Commissioner#on_block`  | `<unknown>` |
|  8.1% |      11 | `RuboCop::Cop::Commissioner#on_sclass` | `<unknown>` |
|  8.1% |      11 | `RuboCop::AST::Traversal#on_if`        | `<unknown>` |
|  6.6% |       9 | `RuboCop::AST::Traversal#on_block`     | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                 | Location                                                                               |
| ----: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 63.2% |      86 | `Benchmark.realtime`                                     | `../lib/ruby/3.4.0/benchmark.rb`                                                       |
|  2.2% |       3 | `block in activate_bin_path`                             | `../lib/ruby/3.4.0/rubygems.rb`                                                        |
|  2.2% |       3 | `Gem.activate_bin_path`                                  | `../lib/ruby/3.4.0/rubygems.rb`                                                        |
|  2.2% |       3 | `Psych.safe_load`                                        | `../lib/ruby/3.4.0/psych.rb`                                                           |
|  1.5% |       2 | `Gem::RequestSet#resolve_current`                        | `../lib/ruby/3.4.0/rubygems/request_set.rb`                                            |
|  1.5% |       2 | `Gem.finish_resolve`                                     | `../lib/ruby/3.4.0/rubygems.rb`                                                        |
|  1.5% |       2 | `Psych::Parser#parse`                                    | `../lib/ruby/3.4.0/psych/parser.rb`                                                    |
|  1.5% |       2 | `Psych.parse_stream`                                     | `../lib/ruby/3.4.0/psych.rb`                                                           |
|  1.5% |       2 | `Psych.parse`                                            | `../lib/ruby/3.4.0/psych.rb`                                                           |
|  1.5% |       2 | `Set#initialize`                                         | `../lib/ruby/3.4.0/set.rb`                                                             |
|  1.5% |       2 | `Psych::Visitors::ToRuby#accept`                         | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                                          |
|  1.5% |       2 | `block in revive_hash`                                   | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                                          |
|  1.5% |       2 | `Psych::Visitors::ToRuby#revive_hash`                    | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                                          |
|  1.5% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Mapping`      | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                                          |
|  1.5% |       2 | `Psych::Visitors::Visitor#visit`                         | `../lib/ruby/3.4.0/psych/visitors/visitor.rb`                                          |
|  1.5% |       2 | `Psych::Visitors::Visitor#accept`                        | `../lib/ruby/3.4.0/psych/visitors/visitor.rb`                                          |
|  1.5% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Document`     | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                                          |
|  0.7% |       1 | `Gem::Molinillo::DependencyGraph::Vertex#new_vertex_set` | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb` |
|  0.7% |       1 | `Gem::Molinillo::DependencyGraph::Vertex#_path_to?`      | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb` |
|  0.7% |       1 | `Gem::Molinillo::DependencyGraph::Vertex#path_to?`       | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `<main>` (`rubocop`)

|     % | Samples | Callee                     | Location                        |
| ----: | ------: | -------------------------- | ------------------------------- |
| 97.8% |     132 | `Kernel#load [c function]` | `<unknown>`                     |
|  2.2% |       3 | `Gem.activate_bin_path`    | `../lib/ruby/3.4.0/rubygems.rb` |

##### `Kernel#load [c function]` (`<unknown>`)

|     % | Samples | Callee                     | Location                                              |
| ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 65.2% |      86 | `Benchmark.realtime`       | `../lib/ruby/3.4.0/benchmark.rb`                      |
| 32.6% |      43 | `Kernel#require`           | `<unknown>`                                           |
|  2.3% |       3 | `RuboCop::Server.running?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/server.rb` |

##### `(unknown) [c function]` (`<unknown>`)

|     % | Samples | Callee                          | Location                                                                         |
| ----: | ------: | ------------------------------- | -------------------------------------------------------------------------------- |
| 71.2% |      79 | `block in each_inspected_file`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
| 53.2% |      59 | `block in inspect_file`         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
| 11.7% |      13 | `block in on_send`              | `<unknown>`                                                                      |
|  2.7% |       3 | `block in on_new_investigation` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`    |
|  2.7% |       3 | `block in each_missing_space`   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/space_after_punctuation.rb` |

##### `Array#each [c function]` (`<unknown>`)

|     % | Samples | Callee                             | Location                                                                      |
| ----: | ------: | ---------------------------------- | ----------------------------------------------------------------------------- |
| 93.3% |      84 | `(unknown) [c function]`           | `<unknown>`                                                                   |
| 45.6% |      41 | `block in on_dstr`                 | `<unknown>`                                                                   |
| 41.1% |      37 | `block in trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
| 13.3% |      12 | `block in invoke`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
|  6.7% |       6 | `block in each_child_node`         | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `RuboCop::CLI#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Callee                           | Location                                               |
| ----: | ------: | -------------------------------- | ------------------------------------------------------ |
| 98.8% |      85 | `RuboCop::CLI#profile_if_needed` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`     |
|  1.2% |       1 | `RuboCop::Options#parse`         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/options.rb` |

##### `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Callee             | Location                                           |
| -----: | ------: | ------------------ | -------------------------------------------------- |
| 100.0% |      86 | `RuboCop::CLI#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)

|      % | Samples | Callee                      | Location                                    |
| -----: | ------: | --------------------------- | ------------------------------------------- |
| 100.0% |      86 | `block in <top (required)>` | `../bundle/gems/rubocop-1.65.1/exe/rubocop` |

##### `block in run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Callee                         | Location                                           |
| ----: | ------: | ------------------------------ | -------------------------------------------------- |
| 94.1% |      80 | `RuboCop::CLI#execute_runners` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  5.9% |       5 | `RuboCop::CLI#act_on_options`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#profile_if_needed` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Callee         | Location                                           |
| -----: | ------: | -------------- | -------------------------------------------------- |
| 100.0% |      85 | `block in run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|     % | Samples | Callee                                         | Location                                                                      |
| ----: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| 98.8% |      79 | `RuboCop::CLI::Command::ExecuteRunner#run`     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`     |
|  1.3% |       1 | `RuboCop::CLI::Command::SuggestExtensions#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/suggest_extensions.rb` |

##### `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Callee                      | Location                                                   |
| -----: | ------: | --------------------------- | ---------------------------------------------------------- |
| 100.0% |      80 | `RuboCop::CLI::Command.run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Callee                          | Location                                                       |
| -----: | ------: | ------------------------------- | -------------------------------------------------------------- |
| 100.0% |      80 | `RuboCop::CLI::Environment#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `RuboCop::CLI#execute_runners` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Callee                     | Location                                           |
| ----: | ------: | -------------------------- | -------------------------------------------------- |
| 98.8% |      79 | `RuboCop::CLI#run_command` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  1.3% |       1 | `Kernel#tap`               | `<unknown>`                                        |

##### `RuboCop::Runner#file_offense_cache` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|     % | Samples | Callee                         | Location                                              |
| ----: | ------: | ------------------------------ | ----------------------------------------------------- |
| 98.7% |      78 | `block in file_offenses`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
|  1.3% |       1 | `RuboCop::Runner#standby_team` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#file_offenses` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                               | Location                                              |
| -----: | ------: | ------------------------------------ | ----------------------------------------------------- |
| 100.0% |      79 | `RuboCop::Runner#file_offense_cache` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#process_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                          | Location                                              |
| -----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% |      79 | `RuboCop::Runner#file_offenses` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `block in each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                         | Location                                              |
| -----: | ------: | ------------------------------ | ----------------------------------------------------- |
| 100.0% |      79 | `RuboCop::Runner#process_file` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `Enumerable#reduce [c function]` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      79 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |      79 | `Enumerable#reduce [c function]` | `<unknown>` |

##### `RuboCop::Runner#inspect_files` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                                | Location                                              |
| -----: | ------: | ------------------------------------- | ----------------------------------------------------- |
| 100.0% |      79 | `RuboCop::Runner#each_inspected_file` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                          | Location                                              |
| -----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% |      79 | `RuboCop::Runner#inspect_files` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Callee                | Location                                              |
| -----: | ------: | --------------------- | ----------------------------------------------------- |
| 100.0% |      79 | `RuboCop::Runner#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#with_redirect` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Callee                    | Location                                                                  |
| -----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      79 | `block in execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Callee                                               | Location                                                                  |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      79 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Callee                                                | Location                                                                  |
| -----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      79 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `block in file_offenses` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|     % | Samples | Callee                               | Location                                              |
| ----: | ------: | ------------------------------------ | ----------------------------------------------------- |
| 98.7% |      77 | `RuboCop::Runner#do_inspection_loop` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
|  1.3% |       1 | `Array#sort [c function]`            | `<unknown>`                                           |

##### `Enumerable#flat_map [c function]` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      60 | `Array#each [c function]` | `<unknown>` |

##### `Kernel#loop` (`<unknown>`)

|      % | Samples | Callee                              | Location                                              |
| -----: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% |      59 | `block in iterate_until_no_changes` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `Kernel#require [c function]` (`<unknown>`)

|     % | Samples | Callee                                 | Location                                      |
| ----: | ------: | -------------------------------------- | --------------------------------------------- |
| 91.7% |      44 | `Kernel#require_relative [c function]` | `<unknown>`                                   |
| 22.9% |      11 | `Kernel#require`                       | `<unknown>`                                   |
| 12.5% |       6 | `(unknown) [c function]`               | `<unknown>`                                   |
|  2.1% |       1 | `Gem::Specification.load_defaults`     | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `Kernel#require` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |      47 | `Kernel#require [c function]` | `<unknown>` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                            |
| ----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------- |
| 45.5% |      20 | `(unknown) [c function]`                             | `<unknown>`                                                         |
| 34.1% |      15 | `Kernel#require`                                     | `<unknown>`                                                         |
| 29.5% |      13 | `RuboCop::AST::NodePattern::Macros#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb` |
| 20.5% |       9 | `Kernel#require_relative [c function]`               | `<unknown>`                                                         |
|  4.5% |       2 | `Module#include [c function]`                        | `<unknown>`                                                         |

##### `block in on_dstr` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      41 | `RuboCop::Cop::Commissioner#on_module` | `<unknown>` |
|  82.9% |      34 | `RuboCop::Cop::Commissioner#on_def`    | `<unknown>` |
|  73.2% |      30 | `RuboCop::Cop::Commissioner#on_class`  | `<unknown>` |
|  26.8% |      11 | `RuboCop::Cop::Commissioner#on_sclass` | `<unknown>` |
|  26.8% |      11 | `RuboCop::Cop::Commissioner#on_if`     | `<unknown>` |

##### `RuboCop::AST::Traversal#on_dstr` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      41 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_begin` (`<unknown>`)

|      % | Samples | Callee                                               | Location                                                        |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |      41 | `RuboCop::AST::Traversal#on_dstr`                    | `<unknown>`                                                     |
|   2.4% |       1 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `RuboCop::Cop::Commissioner#on_module` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 97.6% |      40 | `RuboCop::AST::Traversal#on_while`                   | `<unknown>`                                                     |
|  2.4% |       1 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `Kernel#public_send [c function]` (`<unknown>`)

|     % | Samples | Callee                                                         | Location                                                                                  |
| ----: | ------: | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 10.0% |       4 | `RuboCop::Cop::Style::IfUnlessModifier#on_if`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/if_unless_modifier.rb`               |
|  5.0% |       2 | `RuboCop::Cop::MultilineExpressionIndentation#on_send`         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb` |
|  5.0% |       2 | `RuboCop::Cop::Layout::SpaceAroundOperators#on_assignment`     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`          |
|  5.0% |       2 | `RuboCop::Cop::Lint::IneffectiveAccessModifier#on_class`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/ineffective_access_modifier.rb`       |
|  5.0% |       2 | `RuboCop::Cop::Layout::LineLength#on_potential_breakable_node` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/line_length.rb`                     |

##### `RuboCop::AST::Traversal#on_while` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |      40 | `RuboCop::Cop::Commissioner#on_begin` | `<unknown>` |
|   2.5% |       1 | `RuboCop::Cop::Commissioner#on_send`  | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_def` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 94.1% |      32 | `RuboCop::AST::Traversal#on_def`                     | `<unknown>`                                                     |
|  5.9% |       2 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `Class#new [c function]` (`<unknown>`)

|     % | Samples | Callee                                     | Location                                                                |
| ----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------- |
| 56.3% |      18 | `RuboCop::AST::ProcessedSource#initialize` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |
| 21.9% |       7 | `RuboCop::AST::NodePattern#initialize`     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`     |
|  9.4% |       3 | `RuboCop::AST::Node#initialize`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`             |
|  9.4% |       3 | `RuboCop::Cop::Commissioner#initialize`    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`         |
|  6.3% |       2 | `Set#initialize`                           | `../lib/ruby/3.4.0/set.rb`                                              |

##### `RuboCop::AST::Traversal#on_def` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 68.8% |      22 | `RuboCop::Cop::Commissioner#on_begin`  | `<unknown>` |
|  6.3% |       2 | `RuboCop::Cop::Commissioner#on_ensure` | `<unknown>` |
|  6.3% |       2 | `RuboCop::Cop::Commissioner#on_rescue` | `<unknown>` |
|  6.3% |       2 | `RuboCop::Cop::Commissioner#on_if`     | `<unknown>` |
|  6.3% |       2 | `RuboCop::Cop::Commissioner#on_block`  | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_class` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 93.3% |      28 | `RuboCop::AST::Traversal#on_class`                   | `<unknown>`                                                     |
|  6.7% |       2 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `RuboCop::AST::Traversal#on_class` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |      28 | `RuboCop::Cop::Commissioner#on_begin` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_send` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 59.1% |      13 | `RuboCop::AST::Traversal#on_send`                    | `<unknown>`                                                     |
| 54.5% |      12 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
|  4.5% |       1 | `RuboCop::Cop::Commissioner#trigger_restricted_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `Racc::Parser#_racc_do_parse_c [c function]` (`<unknown>`)

|     % | Samples | Callee                                         | Location                                              |
| ----: | ------: | ---------------------------------------------- | ----------------------------------------------------- |
| 55.0% |      11 | `Parser::Base#next_token`                      | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`   |
| 15.0% |       3 | `RuboCop::AST::NodePattern::Parser#next_token` | `<unknown>`                                           |
|  5.0% |       1 | `Parser::Ruby27#_reduce_662`                   | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |
|  5.0% |       1 | `Parser::Ruby27#_reduce_580`                   | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |
|  5.0% |       1 | `Parser::Ruby27#_reduce_600`                   | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |

##### `Racc::Parser#do_parse` (`<unknown>`)

|      % | Samples | Callee                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |      20 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |

##### `Enumerable#each_with_index [c function]` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      16 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_if` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 73.3% |      11 | `RuboCop::AST::Traversal#on_if`                      | `<unknown>`                                                     |
| 40.0% |       6 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `block in on_send` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 30.8% |       4 | `RuboCop::Cop::Commissioner#on_block` | `<unknown>` |
| 30.8% |       4 | `RuboCop::Cop::Commissioner#on_send`  | `<unknown>` |
|  7.7% |       1 | `RuboCop::Cop::Commissioner#on_dstr`  | `<unknown>` |
|  7.7% |       1 | `RuboCop::Cop::Commissioner#on_array` | `<unknown>` |
|  7.7% |       1 | `RuboCop::Cop::Commissioner#on_lvar`  | `<unknown>` |

##### `RuboCop::AST::Traversal#on_send` (`<unknown>`)

|      % | Samples | Callee                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |      13 | `Enumerable#each_with_index [c function]` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_block` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 81.8% |       9 | `RuboCop::AST::Traversal#on_block`                   | `<unknown>`                                                     |
| 27.3% |       3 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `RuboCop::Cop::Commissioner#on_sclass` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      11 | `RuboCop::AST::Traversal#on_while` | `<unknown>` |

##### `RuboCop::AST::Traversal#on_if` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 54.5% |       6 | `RuboCop::Cop::Commissioner#on_send`   | `<unknown>` |
| 27.3% |       3 | `RuboCop::Cop::Commissioner#on_begin`  | `<unknown>` |
| 18.2% |       2 | `RuboCop::Cop::Commissioner#on_if`     | `<unknown>` |
|  9.1% |       1 | `RuboCop::Cop::Commissioner#on_lvasgn` | `<unknown>` |

##### `RuboCop::AST::Traversal#on_block` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 44.4% |       4 | `RuboCop::Cop::Commissioner#on_send`  | `<unknown>` |
| 33.3% |       3 | `RuboCop::Cop::Commissioner#on_begin` | `<unknown>` |
| 11.1% |       1 | `RuboCop::Cop::Commissioner#on_and`   | `<unknown>` |
| 11.1% |       1 | `RuboCop::Cop::Commissioner#on_if`    | `<unknown>` |

##### `Enumerator#each [c function]` (`<unknown>`)

|     % | Samples | Callee                                                                | Location                                                                             |
| ----: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 25.0% |       2 | `RuboCop::AST::Node#each_ancestor`                                    | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                          |
| 25.0% |       2 | `RuboCop::Cop::Lint::IneffectiveAccessModifier#private_class_methods` | `<unknown>`                                                                          |
| 25.0% |       2 | `RuboCop::AST::NodePattern::Compiler::Binding#union_bind`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/binding.rb` |
| 25.0% |       2 | `RuboCop::AST::NodePattern::Compiler#enforce_same_captures`           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler.rb`         |
| 12.5% |       1 | `RuboCop::AST::Descendence#each_node`                                 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`        |

##### `Enumerable#find [c function]` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 71.4% |       5 | `Array#each [c function]`      | `<unknown>` |
| 28.6% |       2 | `Enumerator#each [c function]` | `<unknown>` |

##### `Enumerable#each_cons [c function]` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       6 | `Array#each [c function]` | `<unknown>` |

##### `Array#select [c function]` (`<unknown>`)

|     % | Samples | Callee                           | Location                                                |
| ----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 40.0% |       2 | `block in callbacks_needed`      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb` |
| 20.0% |       1 | `block in roundup_relevant_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb` |
| 20.0% |       1 | `Gem::StubSpecification#valid?`  | `../lib/ruby/3.4.0/rubygems/stub_specification.rb`      |

##### `Enumerable#each_slice [c function]` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       4 | `Array#each [c function]` | `<unknown>` |

##### `Thread::Mutex#synchronize [c function]` (`<unknown>`)

|      % | Samples | Callee                       | Location                        |
| -----: | ------: | ---------------------------- | ------------------------------- |
| 100.0% |       3 | `block in activate_bin_path` | `../lib/ruby/3.4.0/rubygems.rb` |

##### `block in activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)

|     % | Samples | Callee                        | Location                                      |
| ----: | ------: | ----------------------------- | --------------------------------------------- |
| 66.7% |       2 | `Gem.finish_resolve`          | `../lib/ruby/3.4.0/rubygems.rb`               |
| 33.3% |       1 | `Gem::Specification#activate` | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `Gem.activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Callee                                   | Location    |
| -----: | ------: | ---------------------------------------- | ----------- |
| 100.0% |       3 | `Thread::Mutex#synchronize [c function]` | `<unknown>` |

##### `Psych.safe_load` (`../lib/ruby/3.4.0/psych.rb`)

|     % | Samples | Callee                           | Location                                      |
| ----: | ------: | -------------------------------- | --------------------------------------------- |
| 66.7% |       2 | `Psych::Visitors::ToRuby#accept` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 33.3% |       1 | `Psych.parse`                    | `../lib/ruby/3.4.0/psych.rb`                  |

##### `Gem::RequestSet#resolve_current` (`../lib/ruby/3.4.0/rubygems/request_set.rb`)

|     % | Samples | Callee                    | Location                                    |
| ----: | ------: | ------------------------- | ------------------------------------------- |
| 50.0% |       1 | `Gem::RequestSet#resolve` | `../lib/ruby/3.4.0/rubygems/request_set.rb` |
| 50.0% |       1 | `Kernel#require`          | `<unknown>`                                 |

##### `Gem.finish_resolve` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Callee                            | Location                                    |
| -----: | ------: | --------------------------------- | ------------------------------------------- |
| 100.0% |       2 | `Gem::RequestSet#resolve_current` | `../lib/ruby/3.4.0/rubygems/request_set.rb` |

##### `Psych::Parser#parse` (`../lib/ruby/3.4.0/psych/parser.rb`)

|      % | Samples | Callee                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       2 | `Psych::Parser#_native_parse [c function]` | `<unknown>` |

##### `Psych.parse_stream` (`../lib/ruby/3.4.0/psych.rb`)

|      % | Samples | Callee                | Location                            |
| -----: | ------: | --------------------- | ----------------------------------- |
| 100.0% |       2 | `Psych::Parser#parse` | `../lib/ruby/3.4.0/psych/parser.rb` |

##### `Psych.parse` (`../lib/ruby/3.4.0/psych.rb`)

|      % | Samples | Callee               | Location                     |
| -----: | ------: | -------------------- | ---------------------------- |
| 100.0% |       2 | `Psych.parse_stream` | `../lib/ruby/3.4.0/psych.rb` |

##### `Set#initialize` (`../lib/ruby/3.4.0/set.rb`)

|     % | Samples | Callee             | Location                   |
| ----: | ------: | ------------------ | -------------------------- |
| 50.0% |       1 | `Set#do_with_enum` | `../lib/ruby/3.4.0/set.rb` |
| 50.0% |       1 | `Set#merge`        | `../lib/ruby/3.4.0/set.rb` |

##### `Psych::Visitors::ToRuby#accept` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                            | Location                                      |
| -----: | ------: | --------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::Visitor#accept` | `../lib/ruby/3.4.0/psych/visitors/visitor.rb` |

##### `block in revive_hash` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                           | Location                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::ToRuby#accept` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::Visitors::ToRuby#revive_hash` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       2 | `Enumerable#each_slice [c function]` | `<unknown>` |

##### `Psych::Visitors::ToRuby#visit_Psych_Nodes_Mapping` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                                | Location                                      |
| -----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::ToRuby#revive_hash` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::Visitors::Visitor#visit` (`../lib/ruby/3.4.0/psych/visitors/visitor.rb`)

|      % | Samples | Callee                                               | Location                                      |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Mapping`  | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 100.0% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Document` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|  50.0% |       1 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Sequence` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::Visitors::Visitor#accept` (`../lib/ruby/3.4.0/psych/visitors/visitor.rb`)

|      % | Samples | Callee                           | Location                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::Visitor#visit` | `../lib/ruby/3.4.0/psych/visitors/visitor.rb` |

##### `Psych::Visitors::ToRuby#visit_Psych_Nodes_Document` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                           | Location                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::ToRuby#accept` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Gem::Molinillo::DependencyGraph::Vertex#new_vertex_set` (`../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       1 | `Kernel#require` | `<unknown>` |

##### `Gem::Molinillo::DependencyGraph::Vertex#_path_to?` (`../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb`)

|      % | Samples | Callee                                                   | Location                                                                               |
| -----: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `Gem::Molinillo::DependencyGraph::Vertex#new_vertex_set` | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb` |

##### `Gem::Molinillo::DependencyGraph::Vertex#path_to?` (`../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb`)

|      % | Samples | Callee                                              | Location                                                                               |
| -----: | ------: | --------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `Gem::Molinillo::DependencyGraph::Vertex#_path_to?` | `../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `<main>` (`rubocop`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.9% |       8 | `(unknown) [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.7% |       5 | `(unknown) [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.9% |       4 | `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`) ← `Parser::Base#next_token` (`../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`) ← `Racc::Parser#_racc_do_parse_c [c function]` ← `Racc::Parser#do_parse` ← `Parser::Base#parse` (`../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`) ← `Parser::Base#tokenize` ← `RuboCop::AST::ProcessedSource#parse_and_lex` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`) ← `RuboCop::AST::ProcessedSource#tokenize` ← `RuboCop::AST::ProcessedSource#parse` ← `RuboCop::AST::ProcessedSource#initialize` ← `Class#new [c function]` ← `RuboCop::AST::ProcessedSource.from_file` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`) ← `RuboCop::Runner#get_processed_source` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% |       3 | `Array#index [c function]` ← `RuboCop::Cop::Layout::SpaceAfterComma#before_semicolon?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb`) ← `RuboCop::Cop::Layout::SpaceAfterComma#kind` ← `block in each_missing_space` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/space_after_punctuation.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#each_cons [c function]` ← `RuboCop::Cop::SpaceAfterPunctuation#each_missing_space` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/space_after_punctuation.rb`) ← `RuboCop::Cop::SpaceAfterPunctuation#on_new_investigation` ← `block (2 levels) in invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in invoke` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#investigate` ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.2% |       3 | `Module#class_eval [c function]` ← `RuboCop::AST::NodePattern::MethodDefiner#def_helper` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`) ← `RuboCop::AST::NodePattern::MethodDefiner#def_node_matcher` ← `RuboCop::AST::NodePattern::Macros#def_node_matcher` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`) ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.5% |       2 | `(unknown) [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#require_relative [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.5% |       2 | `String#index [c function]` ← `Parser::Source::Buffer#line_begins` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`) ← `Parser::Source::Buffer#line_index_for_position` ← `Parser::Source::Buffer#line_for_position` ← `Parser::Source::Range#line` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`) ← `Parser::Source::Map#line` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/map.rb`) ← `RuboCop::Cop::Layout::CommentIndentation#own_line_comment?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`) ← `RuboCop::Cop::Layout::CommentIndentation#check` ← `block in on_new_investigation` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#each_with_index [c function]` ← `RuboCop::Cop::Layout::CommentIndentation#on_new_investigation` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`) ← `block (2 levels) in invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in invoke` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#investigate` ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |       2 | `Symbol#start_with? [c function]` ← `block in callbacks_needed` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`) ← `Array#select [c function]` ← `RuboCop::Cop::Base#callbacks_needed` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`) ← `block in build_callbacks` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#build_callbacks` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#initialize_callbacks` ← `RuboCop::Cop::Commissioner#initialize` ← `Class#new [c function]` ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.5% |       2 | `StringScanner#skip [c function]` ← `RuboCop::AST::NodePattern::LexerRex#next_token` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rex.rb`) ← `RuboCop::AST::NodePattern::Parser#next_token` ← `Racc::Parser#_racc_do_parse_c [c function]` ← `Racc::Parser#do_parse` ← `RuboCop::AST::NodePattern::Parser#parse` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.rb`) ← `RuboCop::AST::NodePattern#initialize` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`) ← `Class#new [c function]` ← `RuboCop::AST::NodePattern::Macros#def_node_matcher` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`) ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |       2 | `block (2 levels) in traverse` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#find [c function]` ← `block in traverse` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#each_slice [c function]` ← `Enumerator#with_object [c function]` ← `RuboCop::YAMLDuplicationChecker.traverse` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`) ← `block in traverse` ← `Array#each [c function]` ← `RuboCop::YAMLDuplicationChecker.traverse` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`) ← `RuboCop::YAMLDuplicationChecker.check` ← `RuboCop::ConfigLoader.check_duplication` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb`) ← `RuboCop::ConfigLoader.load_yaml_configuration` ← `RuboCop::ConfigLoader.load_file` ← `RuboCop::ConfigLoader.default_configuration` ← `RuboCop::ConfigStore#force_default_config!` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/config_store.rb`) ← `RuboCop::CLI#act_on_options` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.5% |       2 | `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.7% |       1 | `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `RuboCop::AST::Descendence#visit_descendants` ← `RuboCop::AST::Descendence#each_descendant` ← `RuboCop::Cop::Style::RedundantSelf#add_scope` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`) ← `RuboCop::Cop::Style::RedundantSelf#on_def` ← `Kernel#public_send [c function]` ← `block (2 levels) in trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in trigger_responding_cops` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#on_def` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_class` ← `RuboCop::Cop::Commissioner#on_class` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#walk` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`) ← `RuboCop::Cop::Commissioner#investigate` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.7% |       1 | `Kernel#require [c function]` ← `Kernel#require` ← `Gem::Molinillo::DependencyGraph::Vertex#new_vertex_set` (`../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb`) ← `Gem::Molinillo::DependencyGraph::Vertex#_path_to?` ← `Gem::Molinillo::DependencyGraph::Vertex#path_to?` ← `Gem::Molinillo::DependencyGraph#add_edge` (`../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph.rb`) ← `block in add_child_vertex` ← `Array#each [c function]` ← `Gem::Molinillo::DependencyGraph#add_child_vertex` (`../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/dependency_graph.rb`) ← `block in require_nested_dependencies_for` (`../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/resolution.rb`) ← `Array#each [c function]` ← `Gem::Molinillo::Resolver::Resolution#require_nested_dependencies_for` (`../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/resolution.rb`) ← `Gem::Molinillo::Resolver::Resolution#activate_new_spec` ← `Gem::Molinillo::Resolver::Resolution#attempt_to_activate` ← `Gem::Molinillo::Resolver::Resolution#process_topmost_state` ← `Gem::Molinillo::Resolver::Resolution#resolve` ← `Gem::Molinillo::Resolver#resolve` (`../lib/ruby/3.4.0/rubygems/vendor/molinillo/lib/molinillo/resolver.rb`) ← `Gem::Resolver#resolve` (`../lib/ruby/3.4.0/rubygems/resolver.rb`) ← `Gem::RequestSet#resolve` (`../lib/ruby/3.4.0/rubygems/request_set.rb`) ← `Gem::RequestSet#resolve_current` ← `Gem.finish_resolve` (`../lib/ruby/3.4.0/rubygems.rb`) ← `block in activate_bin_path` ← `Thread::Mutex#synchronize [c function]` ← `Gem.activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% |       1 | `Kernel#public_send [c function]` ← `block (2 levels) in trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in trigger_responding_cops` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#on_block` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_def` ← `RuboCop::Cop::Commissioner#on_def` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_sclass` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_class` ← `RuboCop::Cop::Commissioner#on_class` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#walk` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`) ← `RuboCop::Cop::Commissioner#investigate` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.7% |       1 | `block in on_send` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#each_with_index [c function]` ← `RuboCop::AST::Traversal#on_send` ← `RuboCop::Cop::Commissioner#on_send` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_def` ← `RuboCop::Cop::Commissioner#on_def` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#walk` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`) ← `RuboCop::Cop::Commissioner#investigate` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.7% |       1 | `RuboCop::Cop::Layout::CommentIndentation#correct_indentation` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`) ← `RuboCop::Cop::Layout::CommentIndentation#check` ← `block in on_new_investigation` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#each_with_index [c function]` ← `RuboCop::Cop::Layout::CommentIndentation#on_new_investigation` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`) ← `block (2 levels) in invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in invoke` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#investigate` ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |       1 | `String#encode [c function]` ← `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`) ← `Parser::Source::Range#source` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`) ← `Parser::Source::Range#is?` ← `RuboCop::AST::Node#loc_is?` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`) ← `RuboCop::AST::ParameterizedNode#parenthesized?` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/parameterized_node.rb`) ← `RuboCop::Cop::Style::NestedParenthesizedCalls#on_send` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/nested_parenthesized_calls.rb`) ← `Kernel#public_send [c function]` ← `block (2 levels) in trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in trigger_responding_cops` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#on_send` ← `RuboCop::AST::Traversal#on_block` ← `RuboCop::Cop::Commissioner#on_block` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_and` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_or` ← `RuboCop::AST::Traversal#on_lvasgn` ← `RuboCop::Cop::Commissioner#on_lvasgn` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `block in on_case` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_case` ← `RuboCop::Cop::Commissioner#on_rescue` ← `block in on_case` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_case` ← `RuboCop::Cop::Commissioner#on_ensure` ← `RuboCop::AST::Traversal#on_def` ← `RuboCop::Cop::Commissioner#on_def` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_class` ← `RuboCop::Cop::Commissioner#on_class` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#walk` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`) ← `RuboCop::Cop::Commissioner#investigate` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]` |
| 0.7% |       1 | `(unknown) [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |       1 | `Array#<=> [c function]` ← `Enumerable#sort_by [c function]` ← `Enumerator#with_index [c function]` ← `RuboCop::AST::ProcessedSource#sorted_tokens` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`) ← `RuboCop::Cop::SpaceBeforePunctuation#on_new_investigation` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/space_before_punctuation.rb`) ← `block (2 levels) in invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in invoke` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#investigate` ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.7% |       1 | `RuboCop::AST::MethodIdentifierPredicates#negation_method?` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/method_identifier_predicates.rb`) ← `RuboCop::AST::MethodIdentifierPredicates#prefix_not?` ← `RuboCop::Cop::Layout::SpaceAroundKeyword#on_send` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_keyword.rb`) ← `Kernel#public_send [c function]` ← `block (2 levels) in trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in trigger_responding_cops` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#on_send` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_def` ← `RuboCop::Cop::Commissioner#on_def` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_class` ← `RuboCop::Cop::Commissioner#on_class` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#walk` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`) ← `RuboCop::Cop::Commissioner#investigate` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) ← `Kernel#load [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

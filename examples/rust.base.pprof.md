# CPU profile

Took 258.0ms over 89 samples (2.9ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| ours        | 64.3% | 166.0ms |      47 |
| stdlib      | 35.3% |  91.0ms |      41 |
| third-party |  0.4% |   1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Samples | Function                                                                             | Location                                                                             |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 12.8% | 33.0ms |       6 | `compiler::phases::frontend::parser::__parse__Module::__reduce`                      | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |
|  8.1% | 21.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce40`                    | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |
|  6.6% | 17.0ms |       2 | `compiler::phases::middle_end::name_resolution::resolve_statement`                   | web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
|  6.2% | 16.0ms |       4 | `compiler::phases::middle_end::type_checking::visit_statement`                       | web-lang/compiler/src/phases/middle_end/type_checking.rs                             |
|  4.3% | 11.0ms |       2 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement::{{closure}}` | web-lang/compiler/src/phases/backend/ir.rs                                           |
|  4.3% | 11.0ms |       1 | `compiler::phases::backend::code_gen::visit_statement`                               | web-lang/compiler/src/phases/backend/code_gen.rs                                     |
|  3.1% |  8.0ms |       1 | `hashbrown::raw::RawTable<T,A>::reserve`                                             | ../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs                                |
|  2.7% |  7.0ms |       5 | `compiler::phases::middle_end::name_resolution::resolve_expression`                  | web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
|  2.7% |  7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce78`                    | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |
|  2.3% |  6.0ms |       3 | `compiler::phases::backend::code_gen::generate_code`                                 | web-lang/compiler/src/phases/backend/code_gen.rs                                     |
|  2.3% |  6.0ms |       5 | `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>`                 | `<unknown>`                                                                          |
|  1.9% |  5.0ms |       3 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement`              | web-lang/compiler/src/phases/backend/ir.rs                                           |
|  1.6% |  4.0ms |       3 | `compiler::phases::backend::ir::expression_to_block`                                 | web-lang/compiler/src/phases/backend/ir.rs                                           |
|  1.6% |  4.0ms |       1 | `compiler::phases::middle_end::name_resolution::Context::add_and_rename`             | web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
|  1.2% |  3.0ms |       1 | `compiler::phases::backend::run_backend`                                             | web-lang/compiler/src/phases/backend/mod.rs                                          |
|  1.2% |  3.0ms |       3 | `compiler::phases::middle_end::type_checking::visit_expression`                      | web-lang/compiler/src/phases/middle_end/type_checking.rs                             |
|  0.8% |  2.0ms |       2 | `compiler::phases::middle_end::name_resolution::resolve_block`                       | web-lang/compiler/src/phases/middle_end/name_resolution.rs                           |
|  0.8% |  2.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_parameter`                       | web-lang/compiler/src/phases/middle_end/type_checking.rs                             |
|  0.8% |  2.0ms |       2 | `compiler::phases::middle_end::ir::Identifier::from_source`                          | web-lang/compiler/src/phases/middle_end/ir.rs                                        |
|  0.8% |  2.0ms |       2 | `compiler::phases::backend::code_gen::visit_expression`                              | web-lang/compiler/src/phases/backend/code_gen.rs                                     |

#### Lines

Lines ranked by contribution to each function's self time.

##### `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs)

|      % |   Time | Samples | Location                                                                                  |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 33.0ms |       6 | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs:2906 |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce40` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs)

|      % |   Time | Samples | Location                                                                                  |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 21.0ms |       1 | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs:4527 |

##### `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |   Time | Samples | Location                                                       |
| -----: | -----: | ------: | -------------------------------------------------------------- |
| 100.0% | 17.0ms |       2 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:347 |

##### `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|      % |   Time | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 16.0ms |       4 | web-lang/compiler/src/phases/middle_end/type_checking.rs:158 |

##### `compiler::phases::backend::ir::middle_statement_to_block_or_statement::{{closure}}` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |   Time | Samples | Location                                       |
| -----: | -----: | ------: | ---------------------------------------------- |
| 100.0% | 11.0ms |       2 | web-lang/compiler/src/phases/backend/ir.rs:166 |

##### `compiler::phases::backend::code_gen::visit_statement` (web-lang/compiler/src/phases/backend/code_gen.rs)

|      % |   Time | Samples | Location                                             |
| -----: | -----: | ------: | ---------------------------------------------------- |
| 100.0% | 11.0ms |       1 | web-lang/compiler/src/phases/backend/code_gen.rs:104 |

##### `hashbrown::raw::RawTable<T,A>::reserve` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs)

|      % |  Time | Samples | Location                                                  |
| -----: | ----: | ------: | --------------------------------------------------------- |
| 100.0% | 8.0ms |       1 | ../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs:962 |

##### `compiler::phases::middle_end::name_resolution::resolve_expression` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 7.0ms |       5 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:521 |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce78` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs)

|      % |  Time | Samples | Location                                                                                  |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 7.0ms |       1 | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs:5241 |

##### `compiler::phases::backend::code_gen::generate_code` (web-lang/compiler/src/phases/backend/code_gen.rs)

|      % |  Time | Samples | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 6.0ms |       3 | web-lang/compiler/src/phases/backend/code_gen.rs:25 |

##### `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 6.0ms |       5 | 0        |

##### `compiler::phases::backend::ir::middle_statement_to_block_or_statement` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |  Time | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 5.0ms |       3 | web-lang/compiler/src/phases/backend/ir.rs:124 |

##### `compiler::phases::backend::ir::expression_to_block` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |  Time | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 4.0ms |       3 | web-lang/compiler/src/phases/backend/ir.rs:337 |

##### `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 4.0ms |       1 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:123 |

##### `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 3.0ms |       1 | web-lang/compiler/src/phases/backend/mod.rs:9 |

##### `compiler::phases::middle_end::type_checking::visit_expression` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|      % |  Time | Samples | Location                                                     |
| -----: | ----: | ------: | ------------------------------------------------------------ |
| 100.0% | 3.0ms |       3 | web-lang/compiler/src/phases/middle_end/type_checking.rs:278 |

##### `compiler::phases::middle_end::name_resolution::resolve_block` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:626 |

##### `compiler::phases::middle_end::type_checking::visit_parameter` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|      % |  Time | Samples | Location                                                     |
| -----: | ----: | ------: | ------------------------------------------------------------ |
| 100.0% | 2.0ms |       2 | web-lang/compiler/src/phases/middle_end/type_checking.rs:237 |

##### `compiler::phases::middle_end::ir::Identifier::from_source` (web-lang/compiler/src/phases/middle_end/ir.rs)

|      % |  Time | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 2.0ms |       2 | web-lang/compiler/src/phases/middle_end/ir.rs:184 |

##### `compiler::phases::backend::code_gen::visit_expression` (web-lang/compiler/src/phases/backend/code_gen.rs)

|      % |  Time | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 2.0ms |       2 | web-lang/compiler/src/phases/backend/code_gen.rs:136 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs)

|      % |   Time | Samples | Caller                                                                                                                           | Location                                                                             |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 33.0ms |       6 | `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce40` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs)

|      % |   Time | Samples | Caller                                                          | Location                                                                             |
| -----: | -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 21.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|     % |   Time | Samples | Caller                                                               | Location                                                   |
| ----: | -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| 88.2% | 15.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_module_item` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |
| 11.8% |  2.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_block`       | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|     % |   Time | Samples | Caller                                                           | Location                                                 |
| ----: | -----: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------- |
| 68.8% | 11.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_module_item` | web-lang/compiler/src/phases/middle_end/type_checking.rs |
| 31.3% |  5.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_statement`   | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `hashbrown::raw::RawTable<T,A>::reserve` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs)

|      % |  Time | Samples | Caller                                                     | Location                                              |
| -----: | ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% | 8.0ms |       1 | `hashbrown::raw::RawTable<T,A>::find_or_find_insert_index` | ../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_expression` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|     % |  Time | Samples | Caller                                                                          | Location                                                   |
| ----: | ----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 71.4% | 5.0ms |       3 | `compiler::phases::middle_end::name_resolution::resolve_statement`              | web-lang/compiler/src/phases/middle_end/name_resolution.rs |
| 14.3% | 1.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_expression`             | web-lang/compiler/src/phases/middle_end/name_resolution.rs |
| 14.3% | 1.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_statement::{{closure}}` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce78` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs)

|      % |  Time | Samples | Caller                                                          | Location                                                                             |
| -----: | ----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |

##### `compiler::phases::backend::code_gen::generate_code` (web-lang/compiler/src/phases/backend/code_gen.rs)

|      % |  Time | Samples | Caller                                   | Location                                    |
| -----: | ----: | ------: | ---------------------------------------- | ------------------------------------------- |
| 100.0% | 6.0ms |       3 | `compiler::phases::backend::run_backend` | web-lang/compiler/src/phases/backend/mod.rs |

##### `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>` (`<unknown>`)

|     % |  Time | Samples | Caller                                                               | Location    |
| ----: | ----: | ------: | -------------------------------------------------------------------- | ----------- |
| 16.7% | 1.0ms |       1 | `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>` | `<unknown>` |

##### `compiler::phases::backend::ir::middle_statement_to_block_or_statement` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |  Time | Samples | Caller                                                                               | Location                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------ | ------------------------------------------ |
| 100.0% | 5.0ms |       3 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement::{{closure}}` | web-lang/compiler/src/phases/backend/ir.rs |

##### `compiler::phases::backend::ir::expression_to_block` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |  Time | Samples | Caller                                                                  | Location                                   |
| -----: | ----: | ------: | ----------------------------------------------------------------------- | ------------------------------------------ |
| 100.0% | 4.0ms |       3 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement` | web-lang/compiler/src/phases/backend/ir.rs |

##### `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Caller                                                             | Location                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| 100.0% | 4.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_statement` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)

|      % |  Time | Samples | Caller           | Location                      |
| -----: | ----: | ------: | ---------------- | ----------------------------- |
| 100.0% | 3.0ms |       1 | `compiler::main` | web-lang/compiler/src/main.rs |

##### `compiler::phases::middle_end::type_checking::visit_expression` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|     % |  Time | Samples | Caller                                                          | Location                                                 |
| ----: | ----: | ------: | --------------------------------------------------------------- | -------------------------------------------------------- |
| 66.7% | 2.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_expression` | web-lang/compiler/src/phases/middle_end/type_checking.rs |
| 33.3% | 1.0ms |       1 | `compiler::phases::middle_end::type_checking::visit_statement`  | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_block` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|     % |  Time | Samples | Caller                                                              | Location                                                   |
| ----: | ----: | ------: | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| 50.0% | 1.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_statement`  | web-lang/compiler/src/phases/middle_end/name_resolution.rs |
| 50.0% | 1.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_expression` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::middle_end::type_checking::visit_parameter` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|      % |  Time | Samples | Caller                                                                      | Location                                                 |
| -----: | ----: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_statement::{{closure}}` | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::middle_end::ir::Identifier::from_source` (web-lang/compiler/src/phases/middle_end/ir.rs)

|     % |  Time | Samples | Caller                                                                    | Location                                                   |
| ----: | ----: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 50.0% | 1.0ms |       1 | `compiler::phases::middle_end::name_resolution::Context::find_identifier` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |
| 50.0% | 1.0ms |       1 | `compiler::phases::middle_end::name_resolution::Context::add_and_rename`  | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::backend::code_gen::visit_expression` (web-lang/compiler/src/phases/backend/code_gen.rs)

|      % |  Time | Samples | Caller                                                 | Location                                         |
| -----: | ----: | ------: | ------------------------------------------------------ | ------------------------------------------------ |
| 100.0% | 2.0ms |       2 | `compiler::phases::backend::code_gen::visit_statement` | web-lang/compiler/src/phases/backend/code_gen.rs |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                                                                                                         | Location                                                                                                           |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 258.0ms |      89 | `compiler::main`                                                                                                                 | web-lang/compiler/src/main.rs                                                                                      |
|  37.6% |  97.0ms |      37 | `compiler::phases::middle_end::run_middle_end`                                                                                   | web-lang/compiler/src/phases/middle_end/mod.rs                                                                     |
|  32.2% |  83.0ms |      13 | `compiler::phases::frontend::Program::parse_module`                                                                              | web-lang/compiler/src/phases/frontend/mod.rs                                                                       |
|  32.2% |  83.0ms |      13 | `compiler::phases::frontend::Program::from_entry_point`                                                                          | web-lang/compiler/src/phases/frontend/mod.rs                                                                       |
|  32.2% |  83.0ms |      13 | `compiler::phases::frontend::run_frontend`                                                                                       | web-lang/compiler/src/phases/frontend/mod.rs                                                                       |
|  31.8% |  82.0ms |      12 | `lalrpop_util::state_machine::Parser<D,I>::drive`                                                                                | ../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs                |
|  31.8% |  82.0ms |      12 | `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse`                                                       | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs                               |
|  31.4% |  81.0ms |      11 | `compiler::phases::frontend::parser::__parse__Module::__reduce`                                                                  | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs                               |
|  31.4% |  81.0ms |      11 | `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs                               |
|  29.8% |  77.0ms |      38 | `compiler::phases::backend::run_backend`                                                                                         | web-lang/compiler/src/phases/backend/mod.rs                                                                        |
|  26.0% |  67.0ms |      23 | `compiler::phases::middle_end::name_resolution::resolve_statement`                                                               | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                         |
|  26.0% |  67.0ms |      23 | `compiler::phases::middle_end::name_resolution::resolve_module_item`                                                             | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                         |
|  26.0% |  67.0ms |      23 | `compiler::phases::middle_end::name_resolution::resolve_module`                                                                  | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                         |
|  26.0% |  67.0ms |      23 | `compiler::phases::middle_end::name_resolution::resolve_names`                                                                   | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                         |
|  18.6% |  48.0ms |      23 | `compiler::phases::backend::code_gen::generate_code`                                                                             | web-lang/compiler/src/phases/backend/code_gen.rs                                                                   |
|  17.8% |  46.0ms |      24 | `core::iter::traits::iterator::Iterator::collect`                                                                                | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/iter/traits/iterator.rs |
|  10.1% |  26.0ms |      14 | `compiler::phases::backend::ir::from_middle_end`                                                                                 | web-lang/compiler/src/phases/backend/ir.rs                                                                         |
|   9.7% |  25.0ms |      13 | `compiler::phases::backend::ir::module_item_to_block_or_statement`                                                               | web-lang/compiler/src/phases/backend/ir.rs                                                                         |
|   9.7% |  25.0ms |      13 | `compiler::phases::backend::ir::module_to_basic_block`                                                                           | web-lang/compiler/src/phases/backend/ir.rs                                                                         |
|   9.7% |  25.0ms |       8 | `<alloc::vec::Vec<T,A> as core::clone::Clone>::clone`                                                                            | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs             |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `compiler::main` (web-lang/compiler/src/main.rs)

|     % |   Time | Samples | Callee                                         | Location                                                                                        |
| ----: | -----: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 37.6% | 97.0ms |      37 | `compiler::phases::middle_end::run_middle_end` | web-lang/compiler/src/phases/middle_end/mod.rs                                                  |
| 32.2% | 83.0ms |      13 | `compiler::phases::frontend::run_frontend`     | web-lang/compiler/src/phases/frontend/mod.rs                                                    |
| 29.8% | 77.0ms |      38 | `compiler::phases::backend::run_backend`       | web-lang/compiler/src/phases/backend/mod.rs                                                     |
|  0.4% |  1.0ms |       1 | `std::fs::write`                               | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/fs.rs |

##### `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)

|     % |   Time | Samples | Callee                                                                 | Location                                                                                              |
| ----: | -----: | ------: | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 69.1% | 67.0ms |      23 | `compiler::phases::middle_end::name_resolution::resolve_names`         | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                            |
| 22.7% | 22.0ms |      10 | `compiler::phases::middle_end::type_checking::check_types`             | web-lang/compiler/src/phases/middle_end/type_checking.rs                                              |
|  6.2% |  6.0ms |       2 | `core::ptr::drop_in_place<compiler::phases::frontend::Program>`        | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs |
|  2.1% |  2.0ms |       2 | `core::ptr::drop_in_place<compiler::types::symbol_table::SymbolTable>` | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs |

##### `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs)

|     % |   Time | Samples | Callee                                                                     | Location                                                                                          |
| ----: | -----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 98.8% | 82.0ms |      12 | `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs              |
|  1.2% |  1.0ms |       1 | `<std::path::Path>::exists`                                                | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/path.rs |

##### `compiler::phases::frontend::Program::from_entry_point` (web-lang/compiler/src/phases/frontend/mod.rs)

|      % |   Time | Samples | Callee                                              | Location                                     |
| -----: | -----: | ------: | --------------------------------------------------- | -------------------------------------------- |
| 100.0% | 83.0ms |      13 | `compiler::phases::frontend::Program::parse_module` | web-lang/compiler/src/phases/frontend/mod.rs |

##### `compiler::phases::frontend::run_frontend` (web-lang/compiler/src/phases/frontend/mod.rs)

|      % |   Time | Samples | Callee                                                  | Location                                     |
| -----: | -----: | ------: | ------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 83.0ms |      13 | `compiler::phases::frontend::Program::from_entry_point` | web-lang/compiler/src/phases/frontend/mod.rs |

##### `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs)

|      % |   Time | Samples | Callee                                            | Location                                                                                            |
| -----: | -----: | ------: | ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% | 82.0ms |      12 | `lalrpop_util::state_machine::Parser<D,I>::drive` | ../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs)

|     % |   Time | Samples | Callee                                                             | Location                                                                             |
| ----: | -----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 25.9% | 21.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce40`  | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |
| 23.5% | 19.0ms |       2 | `compiler::phases::frontend::parser::__parse__Module::__reduce153` | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |
|  8.6% |  7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce78`  | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |
|  1.2% |  1.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce111` | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |

##### `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs)

|      % |   Time | Samples | Callee                                                          | Location                                                                             |
| -----: | -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 81.0ms |      11 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs |

##### `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)

|     % |   Time | Samples | Callee                                               | Location                                         |
| ----: | -----: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 62.3% | 48.0ms |      23 | `compiler::phases::backend::code_gen::generate_code` | web-lang/compiler/src/phases/backend/code_gen.rs |
| 33.8% | 26.0ms |      14 | `compiler::phases::backend::ir::from_middle_end`     | web-lang/compiler/src/phases/backend/ir.rs       |

##### `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|     % |   Time | Samples | Callee                                                                   | Location                                                                                               |
| ----: | -----: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 37.3% | 25.0ms |       8 | `<alloc::vec::Vec<T,A> as core::clone::Clone>::clone`                    | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs |
| 35.8% | 24.0ms |      11 | `compiler::phases::middle_end::name_resolution::resolve_block`           | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |
| 20.9% | 14.0ms |       4 | `compiler::phases::middle_end::name_resolution::Context::add_and_rename` | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |
| 13.4% |  9.0ms |       7 | `compiler::phases::middle_end::name_resolution::resolve_expression`      | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |
|  3.0% |  2.0ms |       2 | `compiler::phases::middle_end::name_resolution::resolve_statement`       | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |

##### `compiler::phases::middle_end::name_resolution::resolve_module_item` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |   Time | Samples | Callee                                                             | Location                                                   |
| -----: | -----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| 100.0% | 67.0ms |      23 | `compiler::phases::middle_end::name_resolution::resolve_statement` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_module` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |   Time | Samples | Callee                                                               | Location                                                   |
| -----: | -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 67.0ms |      23 | `compiler::phases::middle_end::name_resolution::resolve_module_item` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_names` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |   Time | Samples | Callee                                                          | Location                                                   |
| -----: | -----: | ------: | --------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 67.0ms |      23 | `compiler::phases::middle_end::name_resolution::resolve_module` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::backend::code_gen::generate_code` (web-lang/compiler/src/phases/backend/code_gen.rs)

|     % |   Time | Samples | Callee                                                               | Location                                                                                              |
| ----: | -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 41.7% | 20.0ms |       8 | `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>` | `<unknown>`                                                                                           |
| 39.6% | 19.0ms |       9 | `compiler::phases::backend::code_gen::visit_statement`               | web-lang/compiler/src/phases/backend/code_gen.rs                                                      |
|  4.2% |  2.0ms |       2 | `<alloc::string::String>::push_str`                                  | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/string.rs |
|  2.1% |  1.0ms |       1 | `alloc::fmt::format`                                                 | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/fmt.rs    |

##### `compiler::phases::backend::ir::from_middle_end` (web-lang/compiler/src/phases/backend/ir.rs)

|     % |   Time | Samples | Callee                                                 | Location                                                                                                           |
| ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 96.2% | 25.0ms |      13 | `compiler::phases::backend::ir::module_to_basic_block` | web-lang/compiler/src/phases/backend/ir.rs                                                                         |
|  3.8% |  1.0ms |       1 | `core::iter::traits::iterator::Iterator::collect`      | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/iter/traits/iterator.rs |

##### `compiler::phases::backend::ir::module_item_to_block_or_statement` (web-lang/compiler/src/phases/backend/ir.rs)

|     % |   Time | Samples | Callee                                                                  | Location                                   |
| ----: | -----: | ------: | ----------------------------------------------------------------------- | ------------------------------------------ |
| 96.0% | 24.0ms |      12 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement` | web-lang/compiler/src/phases/backend/ir.rs |

##### `compiler::phases::backend::ir::module_to_basic_block` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |   Time | Samples | Callee                                                             | Location                                   |
| -----: | -----: | ------: | ------------------------------------------------------------------ | ------------------------------------------ |
| 100.0% | 25.0ms |      13 | `compiler::phases::backend::ir::module_item_to_block_or_statement` | web-lang/compiler/src/phases/backend/ir.rs |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `compiler::main` (web-lang/compiler/src/main.rs)

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12.8% | 33.0ms |       6 | `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs) ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::drive` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  8.1% | 21.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce40` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::drive` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                             |
|  7.4% | 19.0ms |       2 | `alloc::vec::Vec<T,A>::push` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs) ← `compiler::phases::frontend::parser::__action123` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce153` ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::drive` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                |
|  6.6% | 17.0ms |       3 | `<alloc::vec::Vec<T,A> as core::clone::Clone>::clone` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  5.8% | 15.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  4.7% | 12.0ms |       2 | `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>` ← `compiler::phases::backend::code_gen::generate_code` (web-lang/compiler/src/phases/backend/code_gen.rs) ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  4.3% | 11.0ms |       1 | `compiler::phases::backend::code_gen::visit_statement` (web-lang/compiler/src/phases/backend/code_gen.rs) ← `core::iter::traits::iterator::Iterator::collect` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/iter/traits/iterator.rs) ← `compiler::phases::backend::code_gen::visit_statement` (web-lang/compiler/src/phases/backend/code_gen.rs) ← `compiler::phases::backend::code_gen::generate_code` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  4.3% | 11.0ms |       2 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement::{{closure}}` (web-lang/compiler/src/phases/backend/ir.rs) ← `core::option::Option<T>::map` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/option.rs) ← `core::iter::traits::iterator::Iterator::collect` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/iter/traits/iterator.rs) ← `compiler::phases::backend::ir::middle_statement_to_block_or_statement` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::module_item_to_block_or_statement` ← `compiler::phases::backend::ir::module_to_basic_block` ← `compiler::phases::backend::ir::from_middle_end` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.3% | 11.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs) ← `compiler::phases::middle_end::type_checking::visit_module_item` ← `compiler::phases::middle_end::type_checking::visit_module` ← `compiler::phases::middle_end::type_checking::check_types` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.1% |  8.0ms |       1 | `hashbrown::raw::RawTable<T,A>::reserve` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs) ← `hashbrown::raw::RawTable<T,A>::find_or_find_insert_index` ← `hashbrown::map::HashMap<K,V,S,A>::find_or_find_insert_index` (../../../../rust/deps/hashbrown-0.16.1/src/map.rs) ← `hashbrown::map::HashMap<K,V,S,A>::insert` ← `std::collections::hash::map::HashMap<K,V,S,A>::insert` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs) ← `compiler::types::symbol_table::SymbolTable::set_value` (web-lang/compiler/src/types/symbol_table.rs) ← `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_block` ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs) |
|  2.7% |  7.0ms |       5 | `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>` ← `core::ptr::drop_in_place<compiler::phases::backend::ir::Statement>` ← `compiler::phases::backend::code_gen::generate_code` (web-lang/compiler/src/phases/backend/code_gen.rs) ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.7% |  7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce78` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::drive` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-969fc0c9ab6adc6a/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                             |
|  2.3% |  6.0ms |       2 | `core::ptr::mut_ptr::<impl *mut T>::drop_in_place` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mut_ptr.rs) ← `hashbrown::raw::Bucket<T>::drop` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs) ← `hashbrown::raw::RawTableInner::drop_elements` ← `hashbrown::raw::RawTableInner::drop_inner_table` ← `<hashbrown::raw::RawTable<T,A> as core::ops::drop::Drop>::drop` ← `core::ptr::drop_in_place<compiler::phases::frontend::Program>` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs) ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.3% |  6.0ms |       3 | `compiler::phases::backend::code_gen::generate_code` (web-lang/compiler/src/phases/backend/code_gen.rs) ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.9% |  5.0ms |       3 | `compiler::phases::backend::ir::middle_statement_to_block_or_statement` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::middle_statement_to_block_or_statement::{{closure}}` ← `core::option::Option<T>::map` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/option.rs) ← `core::iter::traits::iterator::Iterator::collect` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/iter/traits/iterator.rs) ← `compiler::phases::backend::ir::middle_statement_to_block_or_statement` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::module_item_to_block_or_statement` ← `compiler::phases::backend::ir::module_to_basic_block` ← `compiler::phases::backend::ir::from_middle_end` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                       |
|  1.9% |  5.0ms |       2 | `<alloc::boxed::Box<T,A> as core::clone::Clone>::clone` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/boxed.rs) ← `<compiler::phases::middle_end::ir::ExpressionKind as core::clone::Clone>::clone` (web-lang/compiler/src/phases/middle_end/ir.rs) ← `<compiler::phases::middle_end::ir::Expression as core::clone::Clone>::clone` ← `<alloc::vec::Vec<T,A> as core::clone::Clone>::clone` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                   |
|  1.9% |  5.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs) ← `compiler::phases::middle_end::type_checking::visit_statement` ← `compiler::phases::middle_end::type_checking::visit_module_item` ← `compiler::phases::middle_end::type_checking::visit_module` ← `compiler::phases::middle_end::type_checking::check_types` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.6% |  4.0ms |       3 | `compiler::phases::backend::ir::expression_to_block` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::middle_statement_to_block_or_statement` ← `compiler::phases::backend::ir::middle_statement_to_block_or_statement::{{closure}}` ← `core::option::Option<T>::map` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/option.rs) ← `core::iter::traits::iterator::Iterator::collect` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/iter/traits/iterator.rs) ← `compiler::phases::backend::ir::middle_statement_to_block_or_statement` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::module_item_to_block_or_statement` ← `compiler::phases::backend::ir::module_to_basic_block` ← `compiler::phases::backend::ir::from_middle_end` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                |
|  1.6% |  4.0ms |       1 | `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_block` ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.2% |  3.0ms |       3 | `core::iter::traits::iterator::Iterator::collect` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/iter/traits/iterator.rs) ← `compiler::phases::backend::ir::middle_statement_to_block_or_statement` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::module_item_to_block_or_statement` ← `compiler::phases::backend::ir::module_to_basic_block` ← `compiler::phases::backend::ir::from_middle_end` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

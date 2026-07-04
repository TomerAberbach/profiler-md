# CPU profile

Took 176.0ms over 68 samples (2.6ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| ours     | 65.9% | 116.0ms |      46 |
| stdlib   | 34.1% |  60.0ms |      22 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Samples | Function                                                                 | Location                                                                                                          |
| ----: | -----: | ------: | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 18.8% | 33.0ms |       8 | `compiler::phases::frontend::parser::__parse__Module::__reduce`          | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                              |
|  8.5% | 15.0ms |       2 | `compiler::phases::frontend::parser::__parse__Module::__reduce40`        | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                              |
|  8.5% | 15.0ms |       3 | `compiler::phases::middle_end::type_checking::visit_statement`           | web-lang/compiler/src/phases/middle_end/type_checking.rs                                                          |
|  5.7% | 10.0ms |       6 | `compiler::phases::backend::ir::middle_statement_to_statements`          | web-lang/compiler/src/phases/backend/ir.rs                                                                        |
|  4.0% |  7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce78`        | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                              |
|  2.8% |  5.0ms |       3 | `compiler::phases::middle_end::name_resolution::resolve_statement`       | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                        |
|  2.8% |  5.0ms |       3 | `compiler::phases::backend::code_gen::write_statement`                   | web-lang/compiler/src/phases/backend/code_gen.rs                                                                  |
|  2.8% |  5.0ms |       4 | `compiler::phases::middle_end::name_resolution::resolve_expression`      | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                        |
|  2.3% |  4.0ms |       2 | `std::collections::hash::map::HashMap<K,V,S,A>::insert`                  | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs |
|  1.7% |  3.0ms |       3 | `compiler::phases::backend::ir::expression_to_value`                     | web-lang/compiler/src/phases/backend/ir.rs                                                                        |
|  1.7% |  3.0ms |       1 | `hashbrown::raw::RawTable<T,A>::reserve`                                 | ../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs                                                             |
|  1.1% |  2.0ms |       1 | `compiler::phases::backend::run_backend`                                 | web-lang/compiler/src/phases/backend/mod.rs                                                                       |
|  1.1% |  2.0ms |       2 | `compiler::phases::middle_end::name_resolution::Context::add_and_rename` | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                        |
|  1.1% |  2.0ms |       1 | `<compiler::phases::shared::Type as core::clone::Clone>::clone`          | `<unknown>`                                                                                                       |
|  1.1% |  2.0ms |       2 | `compiler::phases::backend::code_gen::write_expression`                  | web-lang/compiler/src/phases/backend/code_gen.rs                                                                  |
|  1.1% |  2.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce43`        | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                              |
|  1.1% |  2.0ms |       1 | `compiler::phases::frontend::parser::__action271`                        | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                              |
|  0.6% |  1.0ms |       1 | `compiler::phases::backend::ir::module_item_to_statements`               | web-lang/compiler/src/phases/backend/ir.rs                                                                        |
|  0.6% |  1.0ms |       1 | `compiler::phases::middle_end::type_checking::visit_module_item`         | web-lang/compiler/src/phases/middle_end/type_checking.rs                                                          |
|  0.6% |  1.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_block`           | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                                        |

#### Lines

Lines ranked by contribution to each function's self time.

##### `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Location                                                                                  |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 33.0ms |       8 | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs:2906 |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce40` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Location                                                                                  |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 15.0ms |       2 | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs:4527 |

##### `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|      % |   Time | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 15.0ms |       3 | web-lang/compiler/src/phases/middle_end/type_checking.rs:173 |

##### `compiler::phases::backend::ir::middle_statement_to_statements` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |   Time | Samples | Location                                      |
| -----: | -----: | ------: | --------------------------------------------- |
| 100.0% | 10.0ms |       6 | web-lang/compiler/src/phases/backend/ir.rs:86 |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce78` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |  Time | Samples | Location                                                                                  |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 7.0ms |       1 | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs:5241 |

##### `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 5.0ms |       3 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:309 |

##### `compiler::phases::backend::code_gen::write_statement` (web-lang/compiler/src/phases/backend/code_gen.rs)

|      % |  Time | Samples | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 5.0ms |       3 | web-lang/compiler/src/phases/backend/code_gen.rs:99 |

##### `compiler::phases::middle_end::name_resolution::resolve_expression` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 5.0ms |       4 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:454 |

##### `std::collections::hash::map::HashMap<K,V,S,A>::insert` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs)

|      % |  Time | Samples | Location                                                                                                               |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.0ms |       2 | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs:1296 |

##### `compiler::phases::backend::ir::expression_to_value` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |  Time | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 3.0ms |       3 | web-lang/compiler/src/phases/backend/ir.rs:214 |

##### `hashbrown::raw::RawTable<T,A>::reserve` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs)

|      % |  Time | Samples | Location                                                  |
| -----: | ----: | ------: | --------------------------------------------------------- |
| 100.0% | 3.0ms |       1 | ../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs:962 |

##### `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 2.0ms |       1 | web-lang/compiler/src/phases/backend/mod.rs:9 |

##### `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:118 |

##### `<compiler::phases::shared::Type as core::clone::Clone>::clone` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.0ms |       1 | 0        |

##### `compiler::phases::backend::code_gen::write_expression` (web-lang/compiler/src/phases/backend/code_gen.rs)

|      % |  Time | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 2.0ms |       2 | web-lang/compiler/src/phases/backend/code_gen.rs:203 |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce43` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |  Time | Samples | Location                                                                                  |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 2.0ms |       1 | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs:4587 |

##### `compiler::phases::frontend::parser::__action271` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |  Time | Samples | Location                                                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 2.0ms |       1 | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs:13863 |

##### `compiler::phases::backend::ir::module_item_to_statements` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | web-lang/compiler/src/phases/backend/ir.rs:37 |

##### `compiler::phases::middle_end::type_checking::visit_module_item` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|      % |  Time | Samples | Location                                                    |
| -----: | ----: | ------: | ----------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | web-lang/compiler/src/phases/middle_end/type_checking.rs:95 |

##### `compiler::phases::middle_end::name_resolution::resolve_block` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | web-lang/compiler/src/phases/middle_end/name_resolution.rs:540 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Caller                                                                                                                           | Location                                                                             |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 33.0ms |       8 | `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce40` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Caller                                                          | Location                                                                             |
| -----: | -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 15.0ms |       2 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|     % |  Time | Samples | Caller                                                           | Location                                                 |
| ----: | ----: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------- |
| 53.3% | 8.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_module_item` | web-lang/compiler/src/phases/middle_end/type_checking.rs |
| 46.7% | 7.0ms |       1 | `compiler::phases::middle_end::type_checking::visit_statement`   | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::backend::ir::middle_statement_to_statements` (web-lang/compiler/src/phases/backend/ir.rs)

|     % |  Time | Samples | Caller                                                          | Location                                   |
| ----: | ----: | ------: | --------------------------------------------------------------- | ------------------------------------------ |
| 70.0% | 7.0ms |       4 | `compiler::phases::backend::ir::middle_statement_to_statements` | web-lang/compiler/src/phases/backend/ir.rs |
| 30.0% | 3.0ms |       2 | `compiler::phases::backend::ir::module_item_to_statements`      | web-lang/compiler/src/phases/backend/ir.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce78` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |  Time | Samples | Caller                                                          | Location                                                                             |
| -----: | ----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|     % |  Time | Samples | Caller                                                             | Location                                                   |
| ----: | ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| 80.0% | 4.0ms |       2 | `compiler::phases::middle_end::name_resolution::resolve_block`     | web-lang/compiler/src/phases/middle_end/name_resolution.rs |
| 20.0% | 1.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_statement` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::backend::code_gen::write_statement` (web-lang/compiler/src/phases/backend/code_gen.rs)

|     % |  Time | Samples | Caller                                                 | Location                                         |
| ----: | ----: | ------: | ------------------------------------------------------ | ------------------------------------------------ |
| 80.0% | 4.0ms |       2 | `compiler::phases::backend::code_gen::generate_code`   | web-lang/compiler/src/phases/backend/code_gen.rs |
| 20.0% | 1.0ms |       1 | `compiler::phases::backend::code_gen::write_statement` | web-lang/compiler/src/phases/backend/code_gen.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_expression` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Caller                                                             | Location                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| 100.0% | 5.0ms |       4 | `compiler::phases::middle_end::name_resolution::resolve_statement` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `std::collections::hash::map::HashMap<K,V,S,A>::insert` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs)

|      % |  Time | Samples | Caller                                                  | Location                                    |
| -----: | ----: | ------: | ------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 4.0ms |       2 | `compiler::types::symbol_table::SymbolTable::set_value` | web-lang/compiler/src/types/symbol_table.rs |

##### `compiler::phases::backend::ir::expression_to_value` (web-lang/compiler/src/phases/backend/ir.rs)

|     % |  Time | Samples | Caller                                                          | Location                                   |
| ----: | ----: | ------: | --------------------------------------------------------------- | ------------------------------------------ |
| 66.7% | 2.0ms |       2 | `compiler::phases::backend::ir::middle_statement_to_statements` | web-lang/compiler/src/phases/backend/ir.rs |
| 33.3% | 1.0ms |       1 | `compiler::phases::backend::ir::expression_to_value`            | web-lang/compiler/src/phases/backend/ir.rs |

##### `hashbrown::raw::RawTable<T,A>::reserve` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs)

|      % |  Time | Samples | Caller                                                     | Location                                              |
| -----: | ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% | 3.0ms |       1 | `hashbrown::raw::RawTable<T,A>::find_or_find_insert_index` | ../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs |

##### `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)

|      % |  Time | Samples | Caller           | Location                      |
| -----: | ----: | ------: | ---------------- | ----------------------------- |
| 100.0% | 2.0ms |       1 | `compiler::main` | web-lang/compiler/src/main.rs |

##### `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Caller                                                             | Location                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `compiler::phases::middle_end::name_resolution::resolve_statement` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `<compiler::phases::shared::Type as core::clone::Clone>::clone` (`<unknown>`)

|      % |  Time | Samples | Caller                                                         | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.0ms |       1 | `compiler::phases::middle_end::type_checking::visit_statement` | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::backend::code_gen::write_expression` (web-lang/compiler/src/phases/backend/code_gen.rs)

|     % |  Time | Samples | Caller                                                  | Location                                         |
| ----: | ----: | ------: | ------------------------------------------------------- | ------------------------------------------------ |
| 50.0% | 1.0ms |       1 | `compiler::phases::backend::code_gen::write_statement`  | web-lang/compiler/src/phases/backend/code_gen.rs |
| 50.0% | 1.0ms |       1 | `compiler::phases::backend::code_gen::write_expression` | web-lang/compiler/src/phases/backend/code_gen.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce43` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |  Time | Samples | Caller                                                          | Location                                                                             |
| -----: | ----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 2.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `compiler::phases::frontend::parser::__action271` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |  Time | Samples | Caller                                            | Location                                                                             |
| -----: | ----: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 2.0ms |       1 | `compiler::phases::frontend::parser::__action300` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `compiler::phases::backend::ir::module_item_to_statements` (web-lang/compiler/src/phases/backend/ir.rs)

|      % |  Time | Samples | Caller                                                | Location                                   |
| -----: | ----: | ------: | ----------------------------------------------------- | ------------------------------------------ |
| 100.0% | 1.0ms |       1 | `compiler::phases::backend::ir::module_to_statements` | web-lang/compiler/src/phases/backend/ir.rs |

##### `compiler::phases::middle_end::type_checking::visit_module_item` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|      % |  Time | Samples | Caller                                                      | Location                                                 |
| -----: | ----: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `compiler::phases::middle_end::type_checking::visit_module` | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_block` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |  Time | Samples | Caller                                                             | Location                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `compiler::phases::middle_end::name_resolution::resolve_statement` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                                                                                                         | Location                                                                                               |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 176.0ms |      68 | `compiler::main`                                                                                                                 | web-lang/compiler/src/main.rs                                                                          |
|  44.9% |  79.0ms |      15 | `compiler::phases::frontend::parser::__parse__Module::__reduce`                                                                  | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                   |
|  44.9% |  79.0ms |      15 | `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                   |
|  44.9% |  79.0ms |      15 | `lalrpop_util::state_machine::Parser<D,I>::drive`                                                                                | ../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs    |
|  44.9% |  79.0ms |      15 | `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse`                                                       | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                   |
|  44.9% |  79.0ms |      15 | `compiler::phases::frontend::Program::parse_module`                                                                              | web-lang/compiler/src/phases/frontend/mod.rs                                                           |
|  44.9% |  79.0ms |      15 | `compiler::phases::frontend::Program::from_entry_point`                                                                          | web-lang/compiler/src/phases/frontend/mod.rs                                                           |
|  44.9% |  79.0ms |      15 | `compiler::phases::frontend::run_frontend`                                                                                       | web-lang/compiler/src/phases/frontend/mod.rs                                                           |
|  35.8% |  63.0ms |      28 | `compiler::phases::middle_end::run_middle_end`                                                                                   | web-lang/compiler/src/phases/middle_end/mod.rs                                                         |
|  19.9% |  35.0ms |       6 | `alloc::vec::Vec<T,A>::push`                                                                                                     | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs |
|  18.8% |  33.0ms |      24 | `compiler::phases::backend::run_backend`                                                                                         | web-lang/compiler/src/phases/backend/mod.rs                                                            |
|  18.8% |  33.0ms |      17 | `compiler::phases::middle_end::name_resolution::resolve_statement`                                                               | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |
|  18.8% |  33.0ms |      17 | `compiler::phases::middle_end::name_resolution::resolve_module_item`                                                             | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |
|  18.8% |  33.0ms |      17 | `compiler::phases::middle_end::name_resolution::resolve_module`                                                                  | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |
|  18.8% |  33.0ms |      17 | `compiler::phases::middle_end::name_resolution::resolve_names`                                                                   | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |
|  12.5% |  22.0ms |       7 | `compiler::phases::middle_end::type_checking::visit_module_item`                                                                 | web-lang/compiler/src/phases/middle_end/type_checking.rs                                               |
|  12.5% |  22.0ms |       7 | `compiler::phases::middle_end::type_checking::visit_module`                                                                      | web-lang/compiler/src/phases/middle_end/type_checking.rs                                               |
|  12.5% |  22.0ms |       7 | `compiler::phases::middle_end::type_checking::check_types`                                                                       | web-lang/compiler/src/phases/middle_end/type_checking.rs                                               |
|  11.9% |  21.0ms |       6 | `compiler::phases::middle_end::type_checking::visit_statement`                                                                   | web-lang/compiler/src/phases/middle_end/type_checking.rs                                               |
|  10.8% |  19.0ms |       1 | `compiler::phases::frontend::parser::__action123`                                                                                | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs                   |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `compiler::main` (web-lang/compiler/src/main.rs)

|     % |   Time | Samples | Callee                                         | Location                                                                                        |
| ----: | -----: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 44.9% | 79.0ms |      15 | `compiler::phases::frontend::run_frontend`     | web-lang/compiler/src/phases/frontend/mod.rs                                                    |
| 35.8% | 63.0ms |      28 | `compiler::phases::middle_end::run_middle_end` | web-lang/compiler/src/phases/middle_end/mod.rs                                                  |
| 18.8% | 33.0ms |      24 | `compiler::phases::backend::run_backend`       | web-lang/compiler/src/phases/backend/mod.rs                                                     |
|  0.6% |  1.0ms |       1 | `std::fs::write`                               | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/fs.rs |

##### `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|     % |   Time | Samples | Callee                                                             | Location                                                                             |
| ----: | -----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 24.1% | 19.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce153` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
| 19.0% | 15.0ms |       2 | `compiler::phases::frontend::parser::__parse__Module::__reduce40`  | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
|  8.9% |  7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce78`  | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
|  2.5% |  2.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce43`  | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |
|  2.5% |  2.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce82`  | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Callee                                                          | Location                                                                             |
| -----: | -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 79.0ms |      15 | `compiler::phases::frontend::parser::__parse__Module::__reduce` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Callee                                            | Location                                                                                            |
| -----: | -----: | ------: | ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% | 79.0ms |      15 | `lalrpop_util::state_machine::Parser<D,I>::drive` | ../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs |

##### `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs)

|      % |   Time | Samples | Callee                                                                     | Location                                                                             |
| -----: | -----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 79.0ms |      15 | `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` | web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs |

##### `compiler::phases::frontend::Program::from_entry_point` (web-lang/compiler/src/phases/frontend/mod.rs)

|      % |   Time | Samples | Callee                                              | Location                                     |
| -----: | -----: | ------: | --------------------------------------------------- | -------------------------------------------- |
| 100.0% | 79.0ms |      15 | `compiler::phases::frontend::Program::parse_module` | web-lang/compiler/src/phases/frontend/mod.rs |

##### `compiler::phases::frontend::run_frontend` (web-lang/compiler/src/phases/frontend/mod.rs)

|      % |   Time | Samples | Callee                                                  | Location                                     |
| -----: | -----: | ------: | ------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 79.0ms |      15 | `compiler::phases::frontend::Program::from_entry_point` | web-lang/compiler/src/phases/frontend/mod.rs |

##### `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)

|     % |   Time | Samples | Callee                                                                 | Location                                                                                              |
| ----: | -----: | ------: | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 52.4% | 33.0ms |      17 | `compiler::phases::middle_end::name_resolution::resolve_names`         | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                            |
| 34.9% | 22.0ms |       7 | `compiler::phases::middle_end::type_checking::check_types`             | web-lang/compiler/src/phases/middle_end/type_checking.rs                                              |
| 11.1% |  7.0ms |       3 | `core::ptr::drop_in_place<compiler::phases::frontend::Program>`        | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs |
|  1.6% |  1.0ms |       1 | `core::ptr::drop_in_place<compiler::types::symbol_table::SymbolTable>` | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs |

##### `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)

|     % |   Time | Samples | Callee                                               | Location                                         |
| ----: | -----: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 48.5% | 16.0ms |      12 | `compiler::phases::backend::code_gen::generate_code` | web-lang/compiler/src/phases/backend/code_gen.rs |
| 45.5% | 15.0ms |      11 | `compiler::phases::backend::ir::from_middle_end`     | web-lang/compiler/src/phases/backend/ir.rs       |

##### `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|     % |   Time | Samples | Callee                                                                   | Location                                                                                               |
| ----: | -----: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 54.5% | 18.0ms |      13 | `compiler::phases::middle_end::name_resolution::resolve_block`           | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |
| 36.4% | 12.0ms |       1 | `alloc::vec::Vec<T,A>::push`                                             | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs |
| 27.3% |  9.0ms |       7 | `compiler::phases::middle_end::name_resolution::Context::add_and_rename` | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |
| 18.2% |  6.0ms |       5 | `compiler::phases::middle_end::name_resolution::resolve_expression`      | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |
|  6.1% |  2.0ms |       2 | `compiler::phases::middle_end::name_resolution::resolve_statement`       | web-lang/compiler/src/phases/middle_end/name_resolution.rs                                             |

##### `compiler::phases::middle_end::name_resolution::resolve_module_item` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |   Time | Samples | Callee                                                             | Location                                                   |
| -----: | -----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| 100.0% | 33.0ms |      17 | `compiler::phases::middle_end::name_resolution::resolve_statement` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_module` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |   Time | Samples | Callee                                                               | Location                                                   |
| -----: | -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 33.0ms |      17 | `compiler::phases::middle_end::name_resolution::resolve_module_item` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::middle_end::name_resolution::resolve_names` (web-lang/compiler/src/phases/middle_end/name_resolution.rs)

|      % |   Time | Samples | Callee                                                          | Location                                                   |
| -----: | -----: | ------: | --------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 33.0ms |      17 | `compiler::phases::middle_end::name_resolution::resolve_module` | web-lang/compiler/src/phases/middle_end/name_resolution.rs |

##### `compiler::phases::middle_end::type_checking::visit_module_item` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|     % |   Time | Samples | Callee                                                         | Location                                                 |
| ----: | -----: | ------: | -------------------------------------------------------------- | -------------------------------------------------------- |
| 95.5% | 21.0ms |       6 | `compiler::phases::middle_end::type_checking::visit_statement` | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::middle_end::type_checking::visit_module` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|      % |   Time | Samples | Callee                                                           | Location                                                 |
| -----: | -----: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 22.0ms |       7 | `compiler::phases::middle_end::type_checking::visit_module_item` | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::middle_end::type_checking::check_types` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|      % |   Time | Samples | Callee                                                      | Location                                                 |
| -----: | -----: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 22.0ms |       7 | `compiler::phases::middle_end::type_checking::visit_module` | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs)

|     % |   Time | Samples | Callee                                                          | Location                                                 |
| ----: | -----: | ------: | --------------------------------------------------------------- | -------------------------------------------------------- |
| 52.4% | 11.0ms |       3 | `compiler::phases::middle_end::type_checking::visit_statement`  | web-lang/compiler/src/phases/middle_end/type_checking.rs |
| 14.3% |  3.0ms |       1 | `compiler::types::symbol_table::SymbolTable::set_value`         | web-lang/compiler/src/types/symbol_table.rs              |
|  9.5% |  2.0ms |       1 | `<compiler::phases::shared::Type as core::clone::Clone>::clone` | `<unknown>`                                              |
|  4.8% |  1.0ms |       1 | `compiler::phases::middle_end::type_checking::visit_expression` | web-lang/compiler/src/phases/middle_end/type_checking.rs |

##### `compiler::phases::frontend::parser::__action123` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs)

|      % |   Time | Samples | Callee                       | Location                                                                                               |
| -----: | -----: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 19.0ms |       1 | `alloc::vec::Vec<T,A>::push` | ../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `compiler::main` (web-lang/compiler/src/main.rs)

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.8% | 33.0ms |       8 | `compiler::phases::frontend::parser::__parse__Module::__reduce` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::drive` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 10.8% | 19.0ms |       1 | `alloc::vec::Vec<T,A>::push` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs) ← `compiler::phases::frontend::parser::__action123` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce153` ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::drive` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                |
|  8.5% | 15.0ms |       2 | `compiler::phases::frontend::parser::__parse__Module::__reduce40` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::drive` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                             |
|  6.8% | 12.0ms |       1 | `alloc::vec::Vec<T,A>::push` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/alloc/src/vec/mod.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.5% |  8.0ms |       2 | `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs) ← `compiler::phases::middle_end::type_checking::visit_module_item` ← `compiler::phases::middle_end::type_checking::visit_module` ← `compiler::phases::middle_end::type_checking::check_types` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.0% |  7.0ms |       1 | `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs) ← `compiler::phases::middle_end::type_checking::visit_statement` ← `compiler::phases::middle_end::type_checking::visit_module_item` ← `compiler::phases::middle_end::type_checking::visit_module` ← `compiler::phases::middle_end::type_checking::check_types` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.0% |  7.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce78` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::drive` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                             |
|  4.0% |  7.0ms |       4 | `compiler::phases::backend::ir::middle_statement_to_statements` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::middle_statement_to_statements` ← `compiler::phases::backend::ir::module_item_to_statements` ← `compiler::phases::backend::ir::module_to_statements` ← `compiler::phases::backend::ir::from_middle_end` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.8% |  5.0ms |       4 | `compiler::phases::middle_end::name_resolution::resolve_expression` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_block` ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.3% |  4.0ms |       2 | `compiler::phases::backend::code_gen::write_statement` (web-lang/compiler/src/phases/backend/code_gen.rs) ← `compiler::phases::backend::code_gen::generate_code` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.3% |  4.0ms |       2 | `compiler::phases::middle_end::name_resolution::resolve_statement` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_block` ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.3% |  4.0ms |       1 | `core::ptr::mut_ptr::<impl *mut T>::drop_in_place` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mut_ptr.rs) ← `hashbrown::raw::Bucket<T>::drop` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs) ← `hashbrown::raw::RawTableInner::drop_elements` ← `hashbrown::raw::RawTableInner::drop_inner_table` ← `<hashbrown::raw::RawTable<T,A> as core::ops::drop::Drop>::drop` ← `core::ptr::drop_in_place<compiler::phases::frontend::Program>` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs) ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.7% |  3.0ms |       2 | `compiler::phases::backend::ir::middle_statement_to_statements` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::module_item_to_statements` ← `compiler::phases::backend::ir::module_to_statements` ← `compiler::phases::backend::ir::from_middle_end` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.7% |  3.0ms |       1 | `core::ptr::drop_in_place<alloc::vec::Vec<compiler::phases::backend::ir::Statement>>` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/core/src/ptr/mod.rs) ← `compiler::phases::backend::code_gen::generate_code` (web-lang/compiler/src/phases/backend/code_gen.rs) ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.7% |  3.0ms |       1 | `std::collections::hash::map::HashMap<K,V,S,A>::insert` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs) ← `compiler::types::symbol_table::SymbolTable::set_value` (web-lang/compiler/src/types/symbol_table.rs) ← `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs) ← `compiler::phases::middle_end::type_checking::visit_statement` ← `compiler::phases::middle_end::type_checking::visit_module_item` ← `compiler::phases::middle_end::type_checking::visit_module` ← `compiler::phases::middle_end::type_checking::check_types` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.7% |  3.0ms |       1 | `hashbrown::raw::RawTable<T,A>::reserve` (../../../../rust/deps/hashbrown-0.16.1/src/raw/mod.rs) ← `hashbrown::raw::RawTable<T,A>::find_or_find_insert_index` ← `hashbrown::map::HashMap<K,V,S,A>::find_or_find_insert_index` (../../../../rust/deps/hashbrown-0.16.1/src/map.rs) ← `hashbrown::map::HashMap<K,V,S,A>::insert` ← `std::collections::hash::map::HashMap<K,V,S,A>::insert` (../../.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/src/rust/library/std/src/collections/hash/map.rs) ← `compiler::types::symbol_table::SymbolTable::set_value` (web-lang/compiler/src/types/symbol_table.rs) ← `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_block` ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs) |
|  1.1% |  2.0ms |       1 | `<compiler::phases::shared::Type as core::clone::Clone>::clone` ← `compiler::phases::middle_end::type_checking::visit_statement` (web-lang/compiler/src/phases/middle_end/type_checking.rs) ← `compiler::phases::middle_end::type_checking::visit_module_item` ← `compiler::phases::middle_end::type_checking::visit_module` ← `compiler::phases::middle_end::type_checking::check_types` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.1% |  2.0ms |       2 | `compiler::phases::backend::ir::expression_to_value` (web-lang/compiler/src/phases/backend/ir.rs) ← `compiler::phases::backend::ir::middle_statement_to_statements` ← `compiler::phases::backend::ir::middle_statement_to_statements` ← `compiler::phases::backend::ir::module_item_to_statements` ← `compiler::phases::backend::ir::module_to_statements` ← `compiler::phases::backend::ir::from_middle_end` ← `compiler::phases::backend::run_backend` (web-lang/compiler/src/phases/backend/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.1% |  2.0ms |       2 | `compiler::phases::middle_end::name_resolution::Context::add_and_rename` (web-lang/compiler/src/phases/middle_end/name_resolution.rs) ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_block` ← `compiler::phases::middle_end::name_resolution::resolve_statement` ← `compiler::phases::middle_end::name_resolution::resolve_module_item` ← `compiler::phases::middle_end::name_resolution::resolve_module` ← `compiler::phases::middle_end::name_resolution::resolve_names` ← `compiler::phases::middle_end::run_middle_end` (web-lang/compiler/src/phases/middle_end/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.1% |  2.0ms |       1 | `compiler::phases::frontend::parser::__parse__Module::__reduce43` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::parser::__parse__Module::__reduce` ← `<compiler::phases::frontend::parser::__parse__Module::__StateMachine as lalrpop_util::state_machine::ParserDefinition>::reduce` ← `lalrpop_util::state_machine::Parser<D,I>::drive` (../../.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lalrpop-util-0.20.2/src/state_machine.rs) ← `compiler::phases::frontend::parser::__parse__Module::ModuleParser::parse` (web-lang/compiler/target/profiling/build/web-compiler-274140d43750284c/out/parser.rs) ← `compiler::phases::frontend::Program::parse_module` (web-lang/compiler/src/phases/frontend/mod.rs) ← `compiler::phases::frontend::Program::from_entry_point` ← `compiler::phases::frontend::run_frontend`                                                                                                                                                                                                                                                                                                                                                                             |

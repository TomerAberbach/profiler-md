# Sampling profile

Collected 1,551 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 60.9% |     944 |
| Third-party      | 35.5% |     551 |
| Unknown          |  3.0% |      47 |
| Standard library |  0.6% |       9 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                 | Location                                                                                     |
| ---: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 7.6% |     118 | `Class#new [c function]`                                                 | `<unknown>`                                                                                  |
| 7.2% |     111 | `Module#extend_object [c function]`                                      | `<unknown>`                                                                                  |
| 6.6% |     102 | `Digest::Base#<< [c function]`                                           | `<unknown>`                                                                                  |
| 3.5% |      54 | `I18n::Backend::Fallbacks#extract_non_symbol_default!`                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                      |
| 3.4% |      53 | `Nokogiri::Gumbo.fragment [c function]`                                  | `<unknown>`                                                                                  |
| 2.7% |      42 | `Nokogiri::HTML4::Document.new [c function]`                             | `<unknown>`                                                                                  |
| 2.5% |      38 | `Nokogiri::XML::Node#html_standard_serialize [c function]`               | `<unknown>`                                                                                  |
| 2.3% |      35 | `Nokogiri::XML::Node#children [c function]`                              | `<unknown>`                                                                                  |
| 1.9% |      30 | `block in decorate`                                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
| 1.9% |      29 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>`                                                                                  |
| 1.8% |      28 | `Nokogiri::XML::Document#decorators`                                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
| 1.8% |      28 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                      | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                           |
| 1.7% |      26 | `Kernel.require [c function]`                                            | `<unknown>`                                                                                  |
| 1.6% |      25 | `String#gsub [c function]`                                               | `<unknown>`                                                                                  |
| 1.5% |      24 | `Hash#each [c function]`                                                 | `<unknown>`                                                                                  |
| 1.4% |      21 | `Hash#except [c function]`                                               | `<unknown>`                                                                                  |
| 1.4% |      21 | `Kernel#extend [c function]`                                             | `<unknown>`                                                                                  |
| 1.4% |      21 | `Nokogiri::XML::Node#node_name [c function]`                             | `<unknown>`                                                                                  |
| 1.2% |      18 | `Nokogiri::XML::NodeSet#each`                                            | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
| 1.2% |      18 | `ActionView::OutputBuffer#<<`                                            | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                  |

#### Categories

##### Native

|    % | Samples | Function                                                   | Location    |
| ---: | ------: | ---------------------------------------------------------- | ----------- |
| 7.6% |     118 | `Class#new [c function]`                                   | `<unknown>` |
| 7.2% |     111 | `Module#extend_object [c function]`                        | `<unknown>` |
| 6.6% |     102 | `Digest::Base#<< [c function]`                             | `<unknown>` |
| 3.4% |      53 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| 2.7% |      42 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
| 2.5% |      38 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 2.3% |      35 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
| 1.7% |      26 | `Kernel.require [c function]`                              | `<unknown>` |
| 1.6% |      25 | `String#gsub [c function]`                                 | `<unknown>` |
| 1.5% |      24 | `Hash#each [c function]`                                   | `<unknown>` |
| 1.4% |      21 | `Hash#except [c function]`                                 | `<unknown>` |
| 1.4% |      21 | `Kernel#extend [c function]`                               | `<unknown>` |
| 1.4% |      21 | `Nokogiri::XML::Node#node_name [c function]`               | `<unknown>` |
| 1.1% |      17 | `Regexp#match? [c function]`                               | `<unknown>` |
| 1.0% |      15 | `Hash#merge [c function]`                                  | `<unknown>` |
| 1.0% |      15 | `String#gsub! [c function]`                                | `<unknown>` |
| 0.9% |      14 | `String#encode [c function]`                               | `<unknown>` |
| 0.9% |      14 | `String.new [c function]`                                  | `<unknown>` |
| 0.8% |      13 | `Kernel#dup [c function]`                                  | `<unknown>` |
| 0.8% |      12 | `String#split [c function]`                                | `<unknown>` |

##### Third-party

|    % | Samples | Function                                               | Location                                                                                                                        |
| ---: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 3.5% |      54 | `I18n::Backend::Fallbacks#extract_non_symbol_default!` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
| 1.9% |      30 | `block in decorate`                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                    |
| 1.8% |      28 | `Nokogiri::XML::Document#decorators`                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                    |
| 1.8% |      28 | `Loofah::Scrubber#traverse_conditionally_bottom_up`    | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                              |
| 1.2% |      18 | `Nokogiri::XML::NodeSet#each`                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
| 1.2% |      18 | `ActionView::OutputBuffer#<<`                          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                                                     |
| 0.8% |      13 | `Loofah::ScrubBehavior::Node#scrub!`                   | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                              |
| 0.8% |      12 | `Nokogiri::XML::DocumentFragment.new`                  | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`                           |
| 0.7% |      11 | `Rails::HTML::Sanitizer#properly_encode`               | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                            |
| 0.6% |      10 | `block in each`                                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
| 0.5% |       8 | `Nokogiri::XML::DocumentFragment#to_html`              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`                           |
| 0.5% |       7 | `block (2 levels) in translate`                        | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
| 0.5% |       7 | `Nokogiri::XML::Document#decorate`                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                    |
| 0.5% |       7 | `ActionView::OutputBuffer#safe_concat`                 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                                                     |
| 0.5% |       7 | `Concurrent::Collection::NonConcurrentMapBackend#[]`   | `../../usr/local/bundle/gems/concurrent-ruby-1.3.8/lib/concurrent-ruby/concurrent/collection/map/non_concurrent_map_backend.rb` |
| 0.5% |       7 | `I18n::Config#available_locales_set`                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb`                                                                    |
| 0.5% |       7 | `Nokogiri::HTML5::DocumentFragment#initialize`         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`                         |
| 0.5% |       7 | `Nokogiri::HTML5::Node#write_to`                       | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`                                      |
| 0.5% |       7 | `Nokogiri::XML::NodeSet#to_html`                       | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
| 0.5% |       7 | `Rails::HTML::PermitScrubber#skip_node?`               | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                            |

##### Unknown

|    % | Samples | Function                                                                                | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 1.9% |      29 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112`                | `<unknown>` |
| 0.7% |      11 | `Array#each`                                                                            | `<unknown>` |
| 0.1% |       2 | `StatusesController#_layout`                                                            | `<unknown>` |
| 0.1% |       1 | `Time#initialize`                                                                       | `<unknown>` |
| 0.1% |       1 | `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>` |
| 0.1% |       1 | `Array#map`                                                                             | `<unknown>` |
| 0.1% |       1 | `ActionController::Base::HelperMethods#protect_against_forgery?`                        | `<unknown>` |
| 0.1% |       1 | `String#unpack`                                                                         | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `I18n::Backend::Fallbacks#extract_non_symbol_default!` (`../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`)

|      % | Samples | Location                                                                    |
| -----: | ------: | --------------------------------------------------------------------------- |
| 100.0% |      54 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb:104` |

##### `block in decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      30 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:417` |

##### `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |      29 | 29       |

##### `Nokogiri::XML::Document#decorators` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      28 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:372` |

##### `Loofah::Scrubber#traverse_conditionally_bottom_up` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |      28 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb:138` |

##### `Nokogiri::XML::NodeSet#each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      18 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:240` |

##### `ActionView::OutputBuffer#<<` (`../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`)

|      % | Samples | Location                                                                       |
| -----: | ------: | ------------------------------------------------------------------------------ |
| 100.0% |      18 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb:52` |

##### `Loofah::ScrubBehavior::Node#scrub!` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |      13 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb:48` |

##### `Nokogiri::XML::DocumentFragment.new` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      12 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:46` |

##### `Rails::HTML::Sanitizer#properly_encode` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |      11 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb:34` |

##### `Array#each` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |      11 | 231      |

##### `block in each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      10 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:238` |

##### `Nokogiri::XML::DocumentFragment#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |       8 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:145` |

##### `block (2 levels) in translate` (`../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       7 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb:63` |

##### `Nokogiri::XML::Document#decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |       7 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:418` |

##### `ActionView::OutputBuffer#safe_concat` (`../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`)

|      % | Samples | Location                                                                       |
| -----: | ------: | ------------------------------------------------------------------------------ |
| 100.0% |       7 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb:59` |

##### `Concurrent::Collection::NonConcurrentMapBackend#[]` (`../../usr/local/bundle/gems/concurrent-ruby-1.3.8/lib/concurrent-ruby/concurrent/collection/map/non_concurrent_map_backend.rb`)

|      % | Samples | Location                                                                                                                           |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       7 | `../../usr/local/bundle/gems/concurrent-ruby-1.3.8/lib/concurrent-ruby/concurrent/collection/map/non_concurrent_map_backend.rb:23` |

##### `I18n::Config#available_locales_set` (`../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       7 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb:88` |

##### `Nokogiri::HTML5::DocumentFragment#initialize` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`)

|      % | Samples | Location                                                                                                    |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------- |
| 100.0% |       7 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb:167` |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |       7 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb:68` |

##### `Nokogiri::XML::NodeSet#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |       7 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:356` |

##### `Rails::HTML::PermitScrubber#skip_node?` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |       7 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:89` |

##### `StatusesController#_layout` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 334      |

##### `Time#initialize` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 453      |

##### `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 33       |

##### `Array#map` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 251      |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 110      |

##### `String#unpack` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 26       |

### Total samples

Functions ranked by total samples taken in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

|     % | Samples | Function                               | Location                                                                                            |
| ----: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 99.9% |   1,550 | `<main>`                               | `profile.rb`                                                                                        |
| 95.2% |   1,477 | `Rails::Engine#call`                   | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`                                  |
| 95.2% |   1,477 | `ActionDispatch::AssumeSSL#call`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`       |
| 95.2% |   1,477 | `ActionDispatch::SSL#call`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`              |
| 94.8% |   1,471 | `Rack::Sendfile#call`                  | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                       |
| 94.8% |   1,471 | `ActionDispatch::Static#call`          | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`           |
| 94.3% |   1,463 | `ActionDispatch::Executor#call`        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`         |
| 94.2% |   1,461 | `Rack::Runtime#call`                   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                        |
| 94.1% |   1,459 | `ActionDispatch::RequestId#call`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`       |
| 94.1% |   1,459 | `Rack::MethodOverride#call`            | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`                                |
| 94.0% |   1,458 | `ActionDispatch::RemoteIp#call`        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`        |
| 94.0% |   1,458 | `Rails::Rack::SilenceRequest#call`     | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`                    |
| 94.0% |   1,458 | `Rails::Rack::Logger#call`             | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                             |
| 93.9% |   1,457 | `Rails::Rack::Logger#call_app`         | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                             |
| 93.7% |   1,453 | `ActionDispatch::Callbacks#call`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`        |
| 93.7% |   1,453 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb` |
| 93.7% |   1,453 | `ActionDispatch::ShowExceptions#call`  | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`  |
| 12.4% |     193 | `Array#each`                           | `<unknown>`                                                                                         |
|  8.9% |     138 | `Class#new [c function]`               | `<unknown>`                                                                                         |
|  8.9% |     138 | `block (2 levels) in decorate`         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`        |

#### Categories

##### Native

|    % | Samples | Function                                                   | Location    |
| ---: | ------: | ---------------------------------------------------------- | ----------- |
| 8.9% |     138 | `Class#new [c function]`                                   | `<unknown>` |
| 8.6% |     133 | `Kernel#extend [c function]`                               | `<unknown>` |
| 7.2% |     111 | `Module#extend_object [c function]`                        | `<unknown>` |
| 6.6% |     102 | `Digest::Base#<< [c function]`                             | `<unknown>` |
| 4.8% |      75 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
| 3.4% |      53 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| 2.5% |      38 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 2.3% |      35 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
| 1.9% |      30 | `Hash#each [c function]`                                   | `<unknown>` |
| 1.9% |      29 | `String#gsub [c function]`                                 | `<unknown>` |
| 1.8% |      28 | `Kernel.require [c function]`                              | `<unknown>` |
| 1.4% |      21 | `Hash#except [c function]`                                 | `<unknown>` |
| 1.4% |      21 | `Nokogiri::XML::Node#node_name [c function]`               | `<unknown>` |
| 1.3% |      20 | `Kernel#dup [c function]`                                  | `<unknown>` |
| 1.2% |      19 | `String.new [c function]`                                  | `<unknown>` |
| 1.1% |      17 | `Regexp#match? [c function]`                               | `<unknown>` |
| 1.0% |      15 | `Hash#merge [c function]`                                  | `<unknown>` |
| 1.0% |      15 | `String#gsub! [c function]`                                | `<unknown>` |
| 0.9% |      14 | `String#encode [c function]`                               | `<unknown>` |
| 0.8% |      12 | `Hash#each_pair [c function]`                              | `<unknown>` |

##### Third-party

|     % | Samples | Function                                           | Location                                                                                            |
| ----: | ------: | -------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 95.2% |   1,477 | `Rails::Engine#call`                               | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`                                  |
| 95.2% |   1,477 | `ActionDispatch::AssumeSSL#call`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`       |
| 95.2% |   1,477 | `ActionDispatch::SSL#call`                         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`              |
| 94.8% |   1,471 | `Rack::Sendfile#call`                              | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                       |
| 94.8% |   1,471 | `ActionDispatch::Static#call`                      | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`           |
| 94.3% |   1,463 | `ActionDispatch::Executor#call`                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`         |
| 94.2% |   1,461 | `Rack::Runtime#call`                               | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                        |
| 94.1% |   1,459 | `ActionDispatch::RequestId#call`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`       |
| 94.1% |   1,459 | `Rack::MethodOverride#call`                        | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`                                |
| 94.0% |   1,458 | `ActionDispatch::RemoteIp#call`                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`        |
| 94.0% |   1,458 | `Rails::Rack::SilenceRequest#call`                 | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`                    |
| 94.0% |   1,458 | `Rails::Rack::Logger#call`                         | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                             |
| 93.9% |   1,457 | `Rails::Rack::Logger#call_app`                     | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                             |
| 93.7% |   1,453 | `ActionDispatch::Callbacks#call`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`        |
| 93.7% |   1,453 | `ActionDispatch::DebugExceptions#call`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb` |
| 93.7% |   1,453 | `ActionDispatch::ShowExceptions#call`              | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`  |
|  8.9% |     138 | `block (2 levels) in decorate`                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`        |
|  6.6% |     102 | `block in digest_body`                             | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                           |
|  5.0% |      78 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                  |
|  4.7% |      73 | `Nokogiri::HTML5::Node#write_to`                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`          |

##### Unknown

|     % | Samples | Function                                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------- | ----------- |
| 12.4% |     193 | `Array#each`                                                                                | `<unknown>` |
|  5.8% |      90 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112`                    | `<unknown>` |
|  0.6% |      10 | `Array#map`                                                                                 | `<unknown>` |
|  0.5% |       8 | `#<Class:0xffff8e3458d0>#_app_views_layouts_application_html_erb__3919319499024941682_3144` | `<unknown>` |
|  0.5% |       7 | `Kernel#tap`                                                                                | `<unknown>` |
|  0.3% |       4 | `Integer#times`                                                                             | `<unknown>` |
|  0.2% |       3 | `block (2 levels) in _app_views_statuses_index_html_erb___2193380913002583348_3112`         | `<unknown>` |
|  0.1% |       2 | `StatusesController#_layout`                                                                | `<unknown>` |
|  0.1% |       2 | `I18n::Base#default_separator`                                                              | `<unknown>` |
|  0.1% |       2 | `ActiveSupport::BroadcastLogger#info`                                                       | `<unknown>` |
|  0.1% |       1 | `Time#initialize`                                                                           | `<unknown>` |
|  0.1% |       1 | `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112`     | `<unknown>` |
|  0.1% |       1 | `ActionController::Base.logger`                                                             | `<unknown>` |
|  0.1% |       1 | `ActionController::Metal#content_type=`                                                     | `<unknown>` |
|  0.1% |       1 | `ActionController::Base::HelperMethods#protect_against_forgery?`                            | `<unknown>` |
|  0.1% |       1 | `ActiveSupport::TaggedLogging#pop_tags`                                                     | `<unknown>` |
|  0.1% |       1 | `ActiveSupport::NumberHelper::NumberConverter#namespace`                                    | `<unknown>` |
|  0.1% |       1 | `String#unpack`                                                                             | `<unknown>` |
|  0.1% |       1 | `ActiveSupport::NumberHelper::NumberConverter.namespace`                                    | `<unknown>` |

#### Callers

Callers ranked by the samples taken in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `Rails::Engine#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`)

|      % | Samples | Calls | Caller   | Location     |
| -----: | ------: | ----: | -------- | ------------ |
| 100.0% |   1,477 |     5 | `<main>` | `profile.rb` |

##### `ActionDispatch::AssumeSSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`)

|      % | Samples | Calls | Caller               | Location                                                           |
| -----: | ------: | ----: | -------------------- | ------------------------------------------------------------------ |
| 100.0% |   1,477 |     5 | `Rails::Engine#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb` |

##### `ActionDispatch::SSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`)

|      % | Samples | Calls | Caller                           | Location                                                                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,477 |     5 | `ActionDispatch::AssumeSSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb` |

##### `Rack::Sendfile#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`)

|      % | Samples | Calls | Caller                     | Location                                                                               |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |   1,471 |    11 | `ActionDispatch::SSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionDispatch::Static#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`)

|      % | Samples | Calls | Caller                | Location                                                      |
| -----: | ------: | ----: | --------------------- | ------------------------------------------------------------- |
| 100.0% |   1,471 |    11 | `Rack::Sendfile#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb` |

##### `ActionDispatch::Executor#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`)

|      % | Samples | Calls | Caller                        | Location                                                                                  |
| -----: | ------: | ----: | ----------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |   1,463 |    19 | `ActionDispatch::Static#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb` |

##### `Rack::Runtime#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                    |
| -----: | ------: | ----: | ------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,461 |    21 | `ActionDispatch::Executor#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb` |

##### `ActionDispatch::RequestId#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`)

|      % | Samples | Calls | Caller                      | Location                                                             |
| -----: | ------: | ----: | --------------------------- | -------------------------------------------------------------------- |
| 100.0% |   1,459 |    23 | `Rack::MethodOverride#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb` |

##### `Rack::MethodOverride#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`)

|      % | Samples | Calls | Caller               | Location                                                     |
| -----: | ------: | ----: | -------------------- | ------------------------------------------------------------ |
| 100.0% |   1,459 |    23 | `Rack::Runtime#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb` |

##### `ActionDispatch::RemoteIp#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`)

|      % | Samples | Calls | Caller                           | Location                                                                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,458 |    24 | `ActionDispatch::RequestId#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb` |

##### `Rails::Rack::SilenceRequest#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,458 |    24 | `ActionDispatch::RemoteIp#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb` |

##### `Rails::Rack::Logger#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|      % | Samples | Calls | Caller                             | Location                                                                         |
| -----: | ------: | ----: | ---------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |   1,458 |    24 | `Rails::Rack::SilenceRequest#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb` |

##### `Rails::Rack::Logger#call_app` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|      % | Samples | Calls | Caller                     | Location                                                                |
| -----: | ------: | ----: | -------------------------- | ----------------------------------------------------------------------- |
| 100.0% |   1,457 |    24 | `Rails::Rack::Logger#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `ActionDispatch::Callbacks#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`)

|      % | Samples | Calls | Caller                                 | Location                                                                                            |
| -----: | ------: | ----: | -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |   1,453 |    28 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb` |

##### `ActionDispatch::DebugExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb`)

|      % | Samples | Calls | Caller                                | Location                                                                                           |
| -----: | ------: | ----: | ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   1,453 |    28 | `ActionDispatch::ShowExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb` |

##### `ActionDispatch::ShowExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`)

|      % | Samples | Calls | Caller                         | Location                                                                |
| -----: | ------: | ----: | ------------------------------ | ----------------------------------------------------------------------- |
| 100.0% |   1,453 |    28 | `Rails::Rack::Logger#call_app` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `Array#each` (`<unknown>`)

|      % | Samples | Calls | Caller                                                                                  | Location                                                                                     |
| -----: | ------: | ----: | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 685.5% |   1,323 |   124 | `ActionDispatch::Journey::Router#recognize`                                             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router.rb`       |
| 591.2% |   1,141 |   213 | `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>`                                                                                  |
|  73.6% |     142 |   113 | `block in decorate`                                                                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  53.4% |     103 |    83 | `Rack::ETag#digest_body`                                                                | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |
|  45.1% |      87 |    81 | `Rails::HTML::PermitScrubber#scrub_attributes`                                          | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |

##### `Class#new [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                       | Location                                                                                                   |
| ----: | ------: | ----: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| 73.9% |     102 |    70 | `ActionDispatch::Response.create`                            | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/response.rb`                      |
|  8.0% |      11 |    11 | `ActionDispatch::Cookies::ChainedCookieJars#encrypted`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`                 |
|  5.1% |       7 |     7 | `ActiveSupport::NumberHelper::NumberConverter.convert`       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`   |
|  2.9% |       4 |     4 | `ActionController::RequestForgeryProtection#csrf_token_hmac` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |
|  2.2% |       3 |     3 | `OpenSSL::HMAC.digest`                                       | `../../usr/local/lib/ruby/3.4.0/openssl/hmac.rb`                                                           |

##### `block (2 levels) in decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Calls | Caller       | Location    |
| -----: | ------: | ----: | ------------ | ----------- |
| 100.0% |     138 |   110 | `Array#each` | `<unknown>` |

##### `Kernel#extend [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                         | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |     133 |   105 | `block (2 levels) in decorate` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Module#extend_object [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                       | Location    |
| -----: | ------: | ----: | ---------------------------- | ----------- |
| 100.0% |     111 |    99 | `Kernel#extend [c function]` | `<unknown>` |

##### `Digest::Base#<< [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                 | Location                                                  |
| -----: | ------: | ----: | ---------------------- | --------------------------------------------------------- |
| 100.0% |     102 |    82 | `block in digest_body` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb` |

##### `block in digest_body` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

|      % | Samples | Calls | Caller       | Location    |
| -----: | ------: | ----: | ------------ | ----------- |
| 101.0% |     103 |    83 | `Array#each` | `<unknown>` |

##### `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` (`<unknown>`)

|       % | Samples | Calls | Caller       | Location    |
| ------: | ------: | ----: | ------------ | ----------- |
| 1267.8% |   1,141 |   213 | `Array#each` | `<unknown>` |

##### `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

|      % | Samples | Calls | Caller                  | Location                                                  |
| -----: | ------: | ----: | ----------------------- | --------------------------------------------------------- |
| 259.0% |     202 |   158 | `Loofah.html5_fragment` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                             | Location                                                           |
| -----: | ------: | ----: | -------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |      75 |    57 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                 |
| -----: | ------: | ----: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 102.7% |      75 |    70 | `Nokogiri::XML::Node#serialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                         | Location                                                                                                |
| -----: | ------: | ----: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 126.4% |      67 |    62 | `Nokogiri::HTML5::DocumentFragment#initialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb` |

##### `Nokogiri::XML::Node#html_standard_serialize [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                                   |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |      38 |    38 | `Nokogiri::HTML5::Node#write_to` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                              | Location                                                                                              |
| -----: | ------: | ----: | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 322.9% |     113 |    71 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                    |
|  91.4% |      32 |    32 | `Loofah::ScrubBehavior::Node#scrub!`                | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                    |
|  34.3% |      12 |    12 | `Nokogiri::XML::DocumentFragment#to_html`           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `Hash#each [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                     | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 663.3% |     199 |   158 | `Nokogiri::XML::Document#decorate`         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|   6.7% |       2 |     2 | `Enumerable#map [c function]`              | `<unknown>`                                                                                  |
|   6.7% |       2 |     1 | `block in eager_load`                      | `../../usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/loader/eager_load.rb`               |
|   6.7% |       2 |     2 | `ActionDispatch::Cookies::CookieJar#write` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`   |
|   3.3% |       1 |     1 | `I18n::Railtie.initialize_i18n`            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/i18n_railtie.rb`       |

##### `String#gsub [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                              | Location                                                                                     |
| ----: | ------: | ----: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 31.0% |       9 |     9 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape`         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb` |
| 27.6% |       8 |     8 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb` |
| 27.6% |       8 |     8 | `Loofah::HTML5::Scrub.allowed_uri?`                                 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                        |
|  6.9% |       2 |     2 | `Loofah::HTML5::Scrub.decode_numeric_character_references`          | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                        |
|  3.4% |       1 |     1 | `block in <module:Utils>`                                           | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                   |

##### `Kernel.require [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                | Location                                         |
| -----: | ------: | ----: | ------------------------------------- | ------------------------------------------------ |
| 721.4% |     202 |    70 | `block (2 levels) in replace_require` | `../../usr/local/lib/ruby/3.4.0/bundled_gems.rb` |

##### `Hash#except [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller               | Location                                                    |
| -----: | ------: | ----: | -------------------- | ----------------------------------------------------------- |
| 100.0% |      21 |    20 | `I18n::Utils.except` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/utils.rb` |

##### `Nokogiri::XML::Node#node_name [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                        | Location                                                                                 |
| ----: | ------: | ----: | --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 52.4% |      11 |    11 | `Rails::HTML::PermitScrubber#scrub_attribute` | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
| 19.0% |       4 |     2 | `block in scrub_attributes`                   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
| 14.3% |       3 |     3 | `Rails::HTML::PermitScrubber#allowed_node?`   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
|  9.5% |       2 |     2 | `block in force_correct_attribute_escaping!`  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |
|  4.8% |       1 |     1 | `block in attributes`                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                | Location                                                                                                 |
| ----: | ------: | ----: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 55.0% |      11 |    10 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 30.0% |       6 |     6 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 10.0% |       2 |     2 | `ActionDispatch::Journey::Format#evaluate`                            | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/visitors.rb`                 |
|  5.0% |       1 |     1 | `ActionController::UrlFor#url_options`                                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/url_for.rb`                  |

##### `String.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                          | Location                                                                                                |
| ----: | ------: | ----: | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 73.7% |      14 |    14 | `String#html_safe`              | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/string/output_safety.rb` |
| 26.3% |       5 |     5 | `Nokogiri::XML::Node#serialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                |

##### `Regexp#match? [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                       | Location                                                                                        |
| ----: | ------: | ----: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 41.2% |       7 |     7 | `String#blank?`                                              | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/object/blank.rb` |
| 35.3% |       6 |     6 | `ActionView::Helpers::TagHelper#ensure_valid_html5_tag_name` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb`          |
| 11.8% |       2 |     2 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                   | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                           |
|  5.9% |       1 |     1 | `block in value_for_key`                                     | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/parameter_filter.rb`      |
|  5.9% |       1 |     1 | `ActionView::Helpers::AssetUrlHelper#asset_path`             | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_url_helper.rb`    |

##### `Hash#merge [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                                        | Location                                                                                                 |
| ----: | ------: | ----: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 73.3% |      11 |    11 | `I18n::Backend::Fallbacks#translate`                                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
| 20.0% |       3 |     3 | `ActiveSupport::NumberHelper::NumberConverter#options`                                        | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
|  6.7% |       1 |     1 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`                |

##### `String#gsub! [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                          | Location                                                                                                              |
| ----: | ------: | ----: | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 80.0% |      12 |    12 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                      | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
| 20.0% |       3 |     3 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |

##### `String#encode [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                                   |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |      14 |    14 | `Nokogiri::HTML5::Node#write_to` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Hash#each_pair [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                                   | Location                                                                               |
| -----: | ------: | ----: | -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |      12 |    12 | `ActionView::Helpers::TagHelper::TagBuilder#tag_options` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb` |

##### `Array#map` (`<unknown>`)

|     % | Samples | Calls | Caller                                                    | Location                                                                                     |
| ----: | ------: | ----: | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 30.0% |       3 |     3 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |
| 20.0% |       2 |     2 | `Rack::Response::Helpers#set_cookie`                      | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/response.rb`                                |
| 20.0% |       2 |     2 | `ActiveSupport::BroadcastLogger#dispatch`                 | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/broadcast_logger.rb`   |
| 10.0% |       1 |     1 | `ActionDispatch::SSL#flag_cookies_as_secure!`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`       |
| 10.0% |       1 |     1 | `ActionView::FileSystemResolver#_find_all`                | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/template/resolver.rb`        |

##### `#<Class:0xffff8e3458d0>#_app_views_layouts_application_html_erb__3919319499024941682_3144` (`<unknown>`)

|      % | Samples | Calls | Caller                            | Location    |
| -----: | ------: | ----: | --------------------------------- | ----------- |
| 437.5% |      35 |    34 | `Kernel#public_send [c function]` | `<unknown>` |

##### `Kernel#tap` (`<unknown>`)

|     % | Samples | Calls | Caller                                 | Location                                                                                    |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| 85.7% |       6 |     6 | `ActionDispatch::SSL#call`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`      |
| 14.3% |       1 |     1 | `ActiveSupport::ExecutionWrapper.run!` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/execution_wrapper.rb` |

##### `Integer#times` (`<unknown>`)

|      % | Samples | Calls | Caller                                                                                                     | Location                                                                                  |
| -----: | ------: | ----: | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 175.0% |       7 |     5 | `Enumerator#each [c function]`                                                                             | `<unknown>`                                                                               |
|  75.0% |       3 |     3 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#parameterize_args` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb` |
|  25.0% |       1 |     1 | `Kernel#require_relative [c function]`                                                                     | `<unknown>`                                                                               |

##### `block (2 levels) in _app_views_statuses_index_html_erb___2193380913002583348_3112` (`<unknown>`)

|      % | Samples | Calls | Caller       | Location    |
| -----: | ------: | ----: | ------------ | ----------- |
| 433.3% |      13 |    13 | `Array#each` | `<unknown>` |

##### `StatusesController#_layout` (`<unknown>`)

|      % | Samples | Calls | Caller                                | Location                                                                    |
| -----: | ------: | ----: | ------------------------------------- | --------------------------------------------------------------------------- |
| 150.0% |       3 |     3 | `ActionView::Layouts#_default_layout` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/layouts.rb` |

##### `I18n::Base#default_separator` (`<unknown>`)

|      % | Samples | Calls | Caller                      | Location                                              |
| -----: | ------: | ----: | --------------------------- | ----------------------------------------------------- |
| 100.0% |       2 |     2 | `I18n::Base#normalize_keys` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |

##### `ActiveSupport::BroadcastLogger#info` (`<unknown>`)

|      % | Samples | Calls | Caller                         | Location                                                                |
| -----: | ------: | ----: | ------------------------------ | ----------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `Rails::Rack::Logger#call_app` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `Time#initialize` (`<unknown>`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       1 |     1 | `Class#new [c function]` | `<unknown>` |

##### `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` (`<unknown>`)

|         % | Samples | Calls | Caller                            | Location    |
| --------: | ------: | ----: | --------------------------------- | ----------- |
| 114200.0% |   1,142 |   213 | `Kernel#public_send [c function]` | `<unknown>` |

##### `ActionController::Base.logger` (`<unknown>`)

|      % | Samples | Calls | Caller                                   | Location                                                                                 |
| -----: | ------: | ----: | ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionController::LogSubscriber#logger` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/log_subscriber.rb` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

|      % | Samples | Calls | Caller                                                   | Location                                                                                  |
| -----: | ------: | ----: | -------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionController::Rendering#_set_rendered_content_type` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb` |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

|      % | Samples | Calls | Caller                                           | Location                                                                                |
| -----: | ------: | ----: | ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csrf_helper.rb` |

##### `ActiveSupport::TaggedLogging#pop_tags` (`<unknown>`)

|      % | Samples | Calls | Caller                                          | Location                                                                                   |
| -----: | ------: | ----: | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 |     1 | `ActiveSupport::BroadcastLogger#method_missing` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/broadcast_logger.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#namespace` (`<unknown>`)

|      % | Samples | Calls | Caller                                                             | Location                                                                                                 |
| -----: | ------: | ----: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |

##### `String#unpack` (`<unknown>`)

|      % | Samples | Calls | Caller           | Location                                                                              |
| -----: | ------: | ----: | ---------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in parse` | `../../usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter.namespace` (`<unknown>`)

|      % | Samples | Calls | Caller                                                   | Location    |
| -----: | ------: | ----: | -------------------------------------------------------- | ----------- |
| 100.0% |       1 |     1 | `ActiveSupport::NumberHelper::NumberConverter#namespace` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<main>` (`profile.rb`)

|     % | Samples | Calls | Callee                                 | Location                                                           |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------ |
| 95.3% |   1,477 |     5 | `Rails::Engine#call`                   | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb` |
|  4.5% |      69 |     1 | `Kernel#require_relative [c function]` | `<unknown>`                                                        |
|  0.3% |       4 |     4 | `Rack::BodyProxy#close`                | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/body_proxy.rb`    |

##### `Rails::Engine#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`)

|      % | Samples | Calls | Callee                           | Location                                                                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,477 |     5 | `ActionDispatch::AssumeSSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb` |

##### `ActionDispatch::AssumeSSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`)

|      % | Samples | Calls | Callee                     | Location                                                                               |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |   1,477 |     5 | `ActionDispatch::SSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionDispatch::SSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`)

|     % | Samples | Calls | Callee                | Location                                                      |
| ----: | ------: | ----: | --------------------- | ------------------------------------------------------------- |
| 99.6% |   1,471 |    11 | `Rack::Sendfile#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb` |
|  0.4% |       6 |     6 | `Kernel#tap`          | `<unknown>`                                                   |

##### `Rack::Sendfile#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`)

|      % | Samples | Calls | Callee                        | Location                                                                                  |
| -----: | ------: | ----: | ----------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |   1,471 |    11 | `ActionDispatch::Static#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb` |

##### `ActionDispatch::Static#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`)

|     % | Samples | Calls | Callee                                | Location                                                                                    |
| ----: | ------: | ----: | ------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.5% |   1,463 |    19 | `ActionDispatch::Executor#call`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb` |
|  0.5% |       8 |     8 | `ActionDispatch::FileHandler#attempt` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`   |

##### `ActionDispatch::Executor#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`)

|     % | Samples | Calls | Callee                                 | Location                                                                                    |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.9% |   1,461 |    21 | `Rack::Runtime#call`                   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                |
|  0.1% |       1 |     1 | `ActiveSupport::ExecutionWrapper.run!` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/execution_wrapper.rb` |

##### `Rack::Runtime#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`)

|     % | Samples | Calls | Callee                      | Location                                                             |
| ----: | ------: | ----: | --------------------------- | -------------------------------------------------------------------- |
| 99.9% |   1,459 |    23 | `Rack::MethodOverride#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb` |
|  0.1% |       2 |     2 | `String#% [c function]`     | `<unknown>`                                                          |

##### `ActionDispatch::RequestId#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`)

|     % | Samples | Calls | Callee                                      | Location                                                                                      |
| ----: | ------: | ----: | ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 99.9% |   1,458 |    24 | `ActionDispatch::RemoteIp#call`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`  |
|  0.1% |       1 |     1 | `ActionDispatch::RequestId#make_request_id` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb` |

##### `Rack::MethodOverride#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`)

|      % | Samples | Calls | Callee                           | Location                                                                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,459 |    23 | `ActionDispatch::RequestId#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb` |

##### `ActionDispatch::RemoteIp#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`)

|      % | Samples | Calls | Callee                             | Location                                                                         |
| -----: | ------: | ----: | ---------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |   1,458 |    24 | `Rails::Rack::SilenceRequest#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb` |

##### `Rails::Rack::SilenceRequest#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`)

|      % | Samples | Calls | Callee                     | Location                                                                |
| -----: | ------: | ----: | -------------------------- | ----------------------------------------------------------------------- |
| 100.0% |   1,458 |    24 | `Rails::Rack::Logger#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `Rails::Rack::Logger#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|     % | Samples | Calls | Callee                             | Location                                                                |
| ----: | ------: | ----: | ---------------------------------- | ----------------------------------------------------------------------- |
| 99.9% |   1,457 |    24 | `Rails::Rack::Logger#call_app`     | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |
|  0.1% |       1 |     1 | `Rails::Rack::Logger#compute_tags` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `Rails::Rack::Logger#call_app` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|     % | Samples | Calls | Callee                                      | Location                                                                                           |
| ----: | ------: | ----: | ------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.7% |   1,453 |    28 | `ActionDispatch::ShowExceptions#call`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb` |
|  0.1% |       2 |     2 | `ActiveSupport::Notifications.instrumenter` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`            |
|  0.1% |       2 |     2 | `ActiveSupport::BroadcastLogger#info`       | `<unknown>`                                                                                        |

##### `ActionDispatch::Callbacks#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`)

|     % | Samples | Calls | Callee                                   | Location                                                                            |
| ----: | ------: | ----: | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| 99.9% |   1,452 |    28 | `ActiveSupport::Callbacks#run_callbacks` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/callbacks.rb` |

##### `ActionDispatch::DebugExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb`)

|      % | Samples | Calls | Callee                           | Location                                                                                     |
| -----: | ------: | ----: | -------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,453 |    28 | `ActionDispatch::Callbacks#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb` |

##### `ActionDispatch::ShowExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`)

|      % | Samples | Calls | Callee                                 | Location                                                                                            |
| -----: | ------: | ----: | -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |   1,453 |    28 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb` |

##### `Array#each` (`<unknown>`)

|      % | Samples | Calls | Callee                                                                   | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 685.5% |   1,323 |   124 | `block in recognize`                                                     | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router.rb`       |
| 591.2% |   1,141 |   213 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>`                                                                                  |
|  71.5% |     138 |   110 | `block (2 levels) in decorate`                                           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  53.4% |     103 |    83 | `block in digest_body`                                                   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |
|  44.6% |      86 |    80 | `block in scrub_attributes`                                              | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |

##### `Class#new [c function]` (`<unknown>`)

|    % | Samples | Calls | Callee                                                              | Location                                                                                   |
| ---: | ------: | ----: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 8.0% |      11 |    11 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb` |
| 2.9% |       4 |     4 | `ActiveSupport::Messages::Rotator#initialize`                       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/messages/rotator.rb` |
| 2.9% |       4 |     4 | `block (3 levels) in <class:Digest>`                                | `../../usr/local/lib/ruby/3.4.0/openssl/digest.rb`                                         |
| 2.2% |       3 |     3 | `OpenSSL::HMAC#initialize [c function]`                             | `<unknown>`                                                                                |
| 1.4% |       2 |     2 | `ActionView::OutputBuffer#initialize`                               | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                |

##### `block (2 levels) in decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|     % | Samples | Calls | Callee                       | Location    |
| ----: | ------: | ----: | ---------------------------- | ----------- |
| 96.4% |     133 |   105 | `Kernel#extend [c function]` | `<unknown>` |

##### `Kernel#extend [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                              | Location    |
| ----: | ------: | ----: | ----------------------------------- | ----------- |
| 83.5% |     111 |    99 | `Module#extend_object [c function]` | `<unknown>` |
|  0.8% |       1 |     1 | `Module#extended [c function]`      | `<unknown>` |

##### `block in digest_body` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

|      % | Samples | Calls | Callee                         | Location    |
| -----: | ------: | ----: | ------------------------------ | ----------- |
| 100.0% |     102 |    82 | `Digest::Base#<< [c function]` | `<unknown>` |
|   1.0% |       1 |     1 | `Class#new [c function]`       | `<unknown>` |

##### `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` (`<unknown>`)

|      % | Samples | Calls | Callee                                                    | Location                                                                                    |
| -----: | ------: | ----: | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 850.0% |     765 |   328 | `ActionView::Helpers::SanitizeHelper#sanitize`            | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/sanitize_helper.rb` |
| 270.0% |     243 |   199 | `ActionView::Helpers::NumberHelper#number_with_delimiter` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb`   |
|  34.4% |      31 |    31 | `ActionView::Helpers::UrlHelper#link_to`                  | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/url_helper.rb`      |
|  33.3% |      30 |    30 | `block in define_url_helper`                              | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`   |
|  24.4% |      22 |    22 | `ActionView::OutputBuffer#<<`                             | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                 |

##### `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

|      % | Samples | Calls | Callee                                           | Location                                                                                              |
| -----: | ------: | ----: | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 159.0% |     124 |   108 | `Nokogiri::XML::DocumentFragment.new`            | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |
|  96.2% |      75 |    57 | `Nokogiri::HTML4::Document.new [c function]`     | `<unknown>`                                                                                           |
|   2.6% |       2 |     2 | `Nokogiri::XML::Document#encoding= [c function]` | `<unknown>`                                                                                           |
|   1.3% |       1 |     1 | `Encoding#name [c function]`                     | `<unknown>`                                                                                           |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                 | Location                                                           |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------ |
| 44.0% |      33 |    19 | `Loofah::DocumentDecorator#initialize` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|     % | Samples | Calls | Callee                                                     | Location    |
| ----: | ------: | ----: | ---------------------------------------------------------- | ----------- |
| 52.1% |      38 |    38 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 19.2% |      14 |    14 | `String#encode [c function]`                               | `<unknown>` |
|  9.6% |       7 |     7 | `IO::generic_writable#<< [c function]`                     | `<unknown>` |
|  6.8% |       5 |     5 | `Kernel#lambda [c function]`                               | `<unknown>` |
|  2.7% |       2 |     2 | `Class#new [c function]`                                   | `<unknown>` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                             | Location    |
| ----: | ------: | ----: | -------------------------------------------------- | ----------- |
| 26.4% |      14 |    14 | `Nokogiri::XML::Node#internal_subset [c function]` | `<unknown>` |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                             | Location                                                                                     |
| -----: | ------: | ----: | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| 348.6% |     122 |    84 | `Nokogiri::XML::Document#decorate` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Hash#each [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                           | Location                                                                                       |
| -----: | ------: | ----: | -------------------------------- | ---------------------------------------------------------------------------------------------- |
| 583.3% |     175 |   145 | `block in decorate`              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`   |
|   6.7% |       2 |     2 | `block in write`                 | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`     |
|   6.7% |       2 |     1 | `block (2 levels) in eager_load` | `../../usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/loader/eager_load.rb`                 |
|   3.3% |       1 |     1 | `block in initialize_i18n`       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/i18n_railtie.rb`         |
|   3.3% |       1 |     1 | `block in build_handle`          | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications/fanout.rb` |

##### `String#gsub [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee            | Location                                                                                     |
| ----: | ------: | ----: | ----------------- | -------------------------------------------------------------------------------------------- |
| 13.8% |       4 |     4 | `block in escape` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb` |

##### `Kernel.require [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                 | Location                                                                                                      |
| -----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 432.1% |     121 |    33 | `block (2 levels) in replace_require`  | `../../usr/local/lib/ruby/3.4.0/bundled_gems.rb`                                                              |
|  96.4% |      27 |    17 | `Kernel#require`                       | `../../usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/core_ext/kernel.rb`                                  |
|  78.6% |      22 |     9 | `Kernel#require_relative [c function]` | `<unknown>`                                                                                                   |
|   3.6% |       1 |     1 | `Module#include [c function]`          | `<unknown>`                                                                                                   |
|   3.6% |       1 |     1 | `Module#mattr_accessor`                | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/module/attribute_accessors.rb` |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                               | Location    |
| ----: | ------: | ----: | ------------------------------------ | ----------- |
| 35.0% |       7 |     7 | `Kernel#initialize_dup [c function]` | `<unknown>` |

##### `String.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                 | Location                                                                                                |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 26.3% |       5 |     5 | `ActiveSupport::SafeBuffer#initialize` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/string/output_safety.rb` |

##### `Hash#each_pair [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                 | Location                                                                               |
| ----: | ------: | ----: | ---------------------- | -------------------------------------------------------------------------------------- |
| 83.3% |      10 |    10 | `block in tag_options` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb` |

##### `Array#map` (`<unknown>`)

|     % | Samples | Calls | Callee                         | Location                                                                                     |
| ----: | ------: | ----: | ------------------------------ | -------------------------------------------------------------------------------------------- |
| 30.0% |       3 |     3 | `block in stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |
| 20.0% |       2 |     2 | `block in dispatch`            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/broadcast_logger.rb`   |
| 20.0% |       2 |     2 | `block in set_cookie_header`   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                   |
| 10.0% |       1 |     1 | `block in _find_all`           | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/template/resolver.rb`        |
| 10.0% |       1 |     1 | `block in compute_tags`        | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                      |

##### `#<Class:0xffff8e3458d0>#_app_views_layouts_application_html_erb__3919319499024941682_3144` (`<unknown>`)

|      % | Samples | Calls | Callee                                                    | Location                                                                                       |
| -----: | ------: | ----: | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 337.5% |      27 |    27 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csrf_helper.rb`        |
|  62.5% |       5 |     5 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb`   |
|  25.0% |       2 |     2 | `ActionView::OutputBuffer#<<`                             | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                    |
|  12.5% |       1 |     1 | `block (2 levels) in render_with_layout`                  | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb` |

##### `Kernel#tap` (`<unknown>`)

|     % | Samples | Calls | Callee          | Location                                                                                    |
| ----: | ------: | ----: | --------------- | ------------------------------------------------------------------------------------------- |
| 85.7% |       6 |     6 | `block in call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`      |
| 14.3% |       1 |     1 | `block in run!` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/execution_wrapper.rb` |

##### `Integer#times` (`<unknown>`)

|      % | Samples | Calls | Callee                       | Location                                                                                  |
| -----: | ------: | ----: | ---------------------------- | ----------------------------------------------------------------------------------------- |
| 175.0% |       7 |     5 | `block in parse`             | `../../usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`     |
|  75.0% |       3 |     3 | `block in parameterize_args` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb` |
|  25.0% |       1 |     1 | `block in <module:URI>`      | `../../usr/local/lib/ruby/3.4.0/rubygems/vendor/uri/lib/uri/common.rb`                    |

##### `block (2 levels) in _app_views_statuses_index_html_erb___2193380913002583348_3112` (`<unknown>`)

|      % | Samples | Calls | Callee                                   | Location                                                                                  |
| -----: | ------: | ----: | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| 333.3% |      10 |    10 | `block in define_url_helper`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb` |
| 100.0% |       3 |     3 | `ActionView::Helpers::UrlHelper#link_to` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/url_helper.rb`    |

##### `StatusesController#_layout` (`<unknown>`)

|     % | Samples | Calls | Callee                          | Location    |
| ----: | ------: | ----: | ------------------------------- | ----------- |
| 50.0% |       1 |     1 | `ApplicationController#_layout` | `<unknown>` |

##### `I18n::Base#default_separator` (`<unknown>`)

|     % | Samples | Calls | Callee                           | Location                                                     |
| ----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------ |
| 50.0% |       1 |     1 | `I18n::Base#config`              | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`        |
| 50.0% |       1 |     1 | `I18n::Config#default_separator` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb` |

##### `ActiveSupport::BroadcastLogger#info` (`<unknown>`)

|      % | Samples | Calls | Callee                                    | Location                                                                                   |
| -----: | ------: | ----: | ----------------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       2 |     2 | `ActiveSupport::BroadcastLogger#dispatch` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/broadcast_logger.rb` |

##### `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` (`<unknown>`)

|         % | Samples | Calls | Callee       | Location    |
| --------: | ------: | ----: | ------------ | ----------- |
| 114100.0% |   1,141 |   213 | `Array#each` | `<unknown>` |

##### `ActionController::Base.logger` (`<unknown>`)

|      % | Samples | Calls | Callee                                         | Location                                                                                  |
| -----: | ------: | ----: | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActiveSupport::OrderedOptions#method_missing` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

|      % | Samples | Calls | Callee                                   | Location                                                                              |
| -----: | ------: | ----: | ---------------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionDispatch::Response#content_type=` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/response.rb` |

##### `ActiveSupport::TaggedLogging#pop_tags` (`<unknown>`)

|      % | Samples | Calls | Callee                                             | Location                                                                                 |
| -----: | ------: | ----: | -------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActiveSupport::TaggedLogging::Formatter#pop_tags` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/tagged_logging.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#namespace` (`<unknown>`)

|      % | Samples | Calls | Callee                                                   | Location    |
| -----: | ------: | ----: | -------------------------------------------------------- | ----------- |
| 100.0% |       1 |     1 | `ActiveSupport::NumberHelper::NumberConverter.namespace` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter.namespace` (`<unknown>`)

|      % | Samples | Calls | Callee                                                                             | Location    |
| -----: | ------: | ----: | ---------------------------------------------------------------------------------- | ----------- |
| 100.0% |       1 |     1 | `ActiveSupport::NumberHelper::NumberConverter.__class_attr_namespace [c function]` | `<unknown>` |

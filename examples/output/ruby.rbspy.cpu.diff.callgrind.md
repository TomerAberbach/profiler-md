# Sampling profile diff

Collected 1,551 samples.

| Category         |  Change | Delta |             % |   Samples |
| ---------------- | ------: | ----: | ------------: | --------: |
| Native           |   +1.8% |   +17 | 59.8% → 60.9% | 927 → 944 |
| Third-party      |   +0.7% |    +4 | 35.3% → 35.5% | 547 → 551 |
| Unknown          |  -30.9% |   -21 |   4.4% → 3.0% |   68 → 47 |
| Standard library |  +12.5% |    +1 |   0.5% → 0.6% |     8 → 9 |
| Ours             | removed |    -1 |   0.1% → 0.0% |     1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % |  Samples | Function                                               | Location                                                                                     |
| ------: | ----: | ----------: | -------: | ------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| +742.9% |  +104 | 0.9% → 7.6% | 14 → 118 | `Class#new [c function]`                               | `<unknown>`                                                                                  |
| +800.0% |   +48 | 0.4% → 3.5% |   6 → 54 | `I18n::Backend::Fallbacks#extract_non_symbol_default!` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                      |
|  +36.0% |   +27 | 4.8% → 6.6% | 75 → 102 | `Digest::Base#<< [c function]`                         | `<unknown>`                                                                                  |
| +320.0% |   +16 | 0.3% → 1.4% |   5 → 21 | `Kernel#extend [c function]`                           | `<unknown>`                                                                                  |
| +133.3% |   +16 | 0.8% → 1.8% |  12 → 28 | `Nokogiri::XML::Document#decorators`                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
| +100.0% |   +14 | 0.9% → 1.8% |  14 → 28 | `Loofah::Scrubber#traverse_conditionally_bottom_up`    | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                           |
| +118.2% |   +13 | 0.7% → 1.5% |  11 → 24 | `Hash#each [c function]`                               | `<unknown>`                                                                                  |
| +133.3% |   +12 | 0.6% → 1.4% |   9 → 21 | `Hash#except [c function]`                             | `<unknown>`                                                                                  |
|     new |   +10 | 0.0% → 0.6% |   0 → 10 | `Array#flatten [c function]`                           | `<unknown>`                                                                                  |
|  +75.0% |    +9 | 0.8% → 1.4% |  12 → 21 | `Nokogiri::XML::Node#node_name [c function]`           | `<unknown>`                                                                                  |
|  +25.0% |    +7 | 1.8% → 2.3% |  28 → 35 | `Nokogiri::XML::Node#children [c function]`            | `<unknown>`                                                                                  |
|  +63.6% |    +7 | 0.7% → 1.2% |  11 → 18 | `ActionView::OutputBuffer#<<`                          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                  |
|  +50.0% |    +6 | 0.8% → 1.2% |  12 → 18 | `Nokogiri::XML::NodeSet#each`                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
|  +41.7% |    +5 | 0.8% → 1.1% |  12 → 17 | `Regexp#match? [c function]`                           | `<unknown>`                                                                                  |
| +500.0% |    +5 | 0.1% → 0.4% |    1 → 6 | `Nokogiri::XML::Node#to_format`                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`     |
|     new |    +4 | 0.0% → 0.3% |    0 → 4 | `Kernel#require [c function]`                          | `<unknown>`                                                                                  |
| +400.0% |    +4 | 0.1% → 0.3% |    1 → 5 | `block (2 levels) in decorate`                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  +75.0% |    +3 | 0.3% → 0.5% |    4 → 7 | `StringIO#write [c function]`                          | `<unknown>`                                                                                  |
|  +42.9% |    +3 | 0.5% → 0.6% |   7 → 10 | `block in each`                                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
|  +50.0% |    +3 | 0.4% → 0.6% |    6 → 9 | `Kernel#require_relative [c function]`                 | `<unknown>`                                                                                  |

##### Native

|  Change | Delta |           % |  Samples | Function                                     | Location    |
| ------: | ----: | ----------: | -------: | -------------------------------------------- | ----------- |
| +742.9% |  +104 | 0.9% → 7.6% | 14 → 118 | `Class#new [c function]`                     | `<unknown>` |
|  +36.0% |   +27 | 4.8% → 6.6% | 75 → 102 | `Digest::Base#<< [c function]`               | `<unknown>` |
| +320.0% |   +16 | 0.3% → 1.4% |   5 → 21 | `Kernel#extend [c function]`                 | `<unknown>` |
| +118.2% |   +13 | 0.7% → 1.5% |  11 → 24 | `Hash#each [c function]`                     | `<unknown>` |
| +133.3% |   +12 | 0.6% → 1.4% |   9 → 21 | `Hash#except [c function]`                   | `<unknown>` |
|     new |   +10 | 0.0% → 0.6% |   0 → 10 | `Array#flatten [c function]`                 | `<unknown>` |
|  +75.0% |    +9 | 0.8% → 1.4% |  12 → 21 | `Nokogiri::XML::Node#node_name [c function]` | `<unknown>` |
|  +25.0% |    +7 | 1.8% → 2.3% |  28 → 35 | `Nokogiri::XML::Node#children [c function]`  | `<unknown>` |
|  +41.7% |    +5 | 0.8% → 1.1% |  12 → 17 | `Regexp#match? [c function]`                 | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |    0 → 4 | `Kernel#require [c function]`                | `<unknown>` |
|  +75.0% |    +3 | 0.3% → 0.5% |    4 → 7 | `StringIO#write [c function]`                | `<unknown>` |
|  +50.0% |    +3 | 0.4% → 0.6% |    6 → 9 | `Kernel#require_relative [c function]`       | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |    1 → 4 | `Nokogiri::XML::Attr#value= [c function]`    | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |    1 → 3 | `Class#allocate [c function]`                | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |    1 → 3 | `OpenSSL::HMAC#initialize [c function]`      | `<unknown>` |
|  +50.0% |    +2 | 0.3% → 0.4% |    4 → 6 | `Integer#upto [c function]`                  | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |    1 → 3 | `Fiber.[] [c function]`                      | `<unknown>` |
|  +66.7% |    +2 | 0.2% → 0.3% |    3 → 5 | `File.file? [c function]`                    | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |    0 → 2 | `Hash#each_pair [c function]`                | `<unknown>` |
|  +50.0% |    +2 | 0.3% → 0.4% |    4 → 6 | `Kernel#initialize_dup [c function]`         | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                               | Location                                                                                                                        |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| +800.0% |   +48 | 0.4% → 3.5% |  6 → 54 | `I18n::Backend::Fallbacks#extract_non_symbol_default!` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
| +133.3% |   +16 | 0.8% → 1.8% | 12 → 28 | `Nokogiri::XML::Document#decorators`                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                    |
| +100.0% |   +14 | 0.9% → 1.8% | 14 → 28 | `Loofah::Scrubber#traverse_conditionally_bottom_up`    | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                              |
|  +63.6% |    +7 | 0.7% → 1.2% | 11 → 18 | `ActionView::OutputBuffer#<<`                          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                                                     |
|  +50.0% |    +6 | 0.8% → 1.2% | 12 → 18 | `Nokogiri::XML::NodeSet#each`                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Nokogiri::XML::Node#to_format`                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                        |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `block (2 levels) in decorate`                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                    |
|  +42.9% |    +3 | 0.5% → 0.6% |  7 → 10 | `block in each`                                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `Concurrent::Collection::NonConcurrentMapBackend#[]`   | `../../usr/local/bundle/gems/concurrent-ruby-1.3.8/lib/concurrent-ruby/concurrent/collection/map/non_concurrent_map_backend.rb` |
|  +30.0% |    +3 | 0.6% → 0.8% | 10 → 13 | `Loofah::ScrubBehavior::Node#scrub!`                   | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                              |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `I18n.fallbacks`                                       | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
|  +40.0% |    +2 | 0.3% → 0.5% |   5 → 7 | `ActionView::OutputBuffer#safe_concat`                 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                                                     |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `Rails::HTML::Concern::ComposedSanitize#sanitize`      | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `ActiveSupport::Notifications.instrumenter`            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`                                         |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#execute` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`                        |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `I18n::Base#translate`                                 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                                           |
|  +40.0% |    +2 | 0.3% → 0.5% |   5 → 7 | `I18n::Config#available_locales_set`                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb`                                                                    |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `I18n::Backend::Fallbacks#translate`                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `I18n::Backend::Simple::Implementation#lookup`         | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                                                            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `I18n::Utils.except`                                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/utils.rb`                                                                     |

##### Unknown

| Change | Delta |           % | Samples | Function                                                                                | Location    |
| -----: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `StatusesController#_layout`                                                            | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `Array#map`                                                                             | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionController::Base::HelperMethods#protect_against_forgery?`                        | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `String#unpack`                                                                         | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % |   Samples | Function                                                                 | Location                                                                                                 |
| ------: | ----: | ----------: | --------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|  -61.8% |   -21 | 2.2% → 0.8% |   34 → 13 | `Kernel#dup [c function]`                                                | `<unknown>`                                                                                              |
|  -54.5% |   -18 | 2.1% → 1.0% |   33 → 15 | `String#gsub! [c function]`                                              | `<unknown>`                                                                                              |
|  -51.6% |   -16 | 2.0% → 1.0% |   31 → 15 | `Hash#merge [c function]`                                                | `<unknown>`                                                                                              |
|  -80.0% |   -16 | 1.3% → 0.3% |    20 → 4 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
|  -45.5% |   -10 | 1.4% → 0.8% |   22 → 12 | `String#split [c function]`                                              | `<unknown>`                                                                                              |
|  -47.6% |   -10 | 1.4% → 0.7% |   21 → 11 | `Array#each`                                                             | `<unknown>`                                                                                              |
|  -20.8% |   -10 | 3.1% → 2.5% |   48 → 38 | `Nokogiri::XML::Node#html_standard_serialize [c function]`               | `<unknown>`                                                                                              |
|  -75.0% |    -9 | 0.8% → 0.2% |    12 → 3 | `String#initialize [c function]`                                         | `<unknown>`                                                                                              |
|   -6.7% |    -8 | 7.7% → 7.2% | 119 → 111 | `Module#extend_object [c function]`                                      | `<unknown>`                                                                                              |
|  -16.0% |    -8 | 3.2% → 2.7% |   50 → 42 | `Nokogiri::HTML4::Document.new [c function]`                             | `<unknown>`                                                                                              |
|  -36.4% |    -8 | 1.4% → 0.9% |   22 → 14 | `String#encode [c function]`                                             | `<unknown>`                                                                                              |
|  -61.5% |    -8 | 0.8% → 0.3% |    13 → 5 | `I18n::Backend::Base#translate`                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                       |
|  -53.3% |    -8 | 1.0% → 0.5% |    15 → 7 | `Nokogiri::HTML5::Node#write_to`                                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`               |
|  -21.6% |    -8 | 2.4% → 1.9% |   37 → 29 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>`                                                                                              |
|  -58.3% |    -7 | 0.8% → 0.3% |    12 → 5 | `Kernel#lambda [c function]`                                             | `<unknown>`                                                                                              |
|  -11.7% |    -7 | 3.9% → 3.4% |   60 → 53 | `Nokogiri::Gumbo.fragment [c function]`                                  | `<unknown>`                                                                                              |
| removed |    -7 | 0.5% → 0.0% |     7 → 0 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                             | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
| removed |    -7 | 0.5% → 0.0% |     7 → 0 | `Rails::HTML::Concern::Scrubber::SafeList#scrub`                         | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                     |
|  -50.0% |    -6 | 0.8% → 0.4% |    12 → 6 | `Array#join [c function]`                                                | `<unknown>`                                                                                              |
|  -54.5% |    -6 | 0.7% → 0.3% |    11 → 5 | `ERB::Util.html_escape [c function]`                                     | `<unknown>`                                                                                              |

##### Native

|  Change | Delta |           % |   Samples | Function                                                   | Location    |
| ------: | ----: | ----------: | --------: | ---------------------------------------------------------- | ----------- |
|  -61.8% |   -21 | 2.2% → 0.8% |   34 → 13 | `Kernel#dup [c function]`                                  | `<unknown>` |
|  -54.5% |   -18 | 2.1% → 1.0% |   33 → 15 | `String#gsub! [c function]`                                | `<unknown>` |
|  -51.6% |   -16 | 2.0% → 1.0% |   31 → 15 | `Hash#merge [c function]`                                  | `<unknown>` |
|  -45.5% |   -10 | 1.4% → 0.8% |   22 → 12 | `String#split [c function]`                                | `<unknown>` |
|  -20.8% |   -10 | 3.1% → 2.5% |   48 → 38 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
|  -75.0% |    -9 | 0.8% → 0.2% |    12 → 3 | `String#initialize [c function]`                           | `<unknown>` |
|   -6.7% |    -8 | 7.7% → 7.2% | 119 → 111 | `Module#extend_object [c function]`                        | `<unknown>` |
|  -16.0% |    -8 | 3.2% → 2.7% |   50 → 42 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
|  -36.4% |    -8 | 1.4% → 0.9% |   22 → 14 | `String#encode [c function]`                               | `<unknown>` |
|  -58.3% |    -7 | 0.8% → 0.3% |    12 → 5 | `Kernel#lambda [c function]`                               | `<unknown>` |
|  -11.7% |    -7 | 3.9% → 3.4% |   60 → 53 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
|  -50.0% |    -6 | 0.8% → 0.4% |    12 → 6 | `Array#join [c function]`                                  | `<unknown>` |
|  -54.5% |    -6 | 0.7% → 0.3% |    11 → 5 | `ERB::Util.html_escape [c function]`                       | `<unknown>` |
|  -75.0% |    -6 | 0.5% → 0.1% |     8 → 2 | `Enumerable#detect [c function]`                           | `<unknown>` |
| removed |    -6 | 0.4% → 0.0% |     6 → 0 | `Hash#delete [c function]`                                 | `<unknown>` |
|  -85.7% |    -6 | 0.5% → 0.1% |     7 → 1 | `Kernel#BigDecimal [c function]`                           | `<unknown>` |
|  -30.0% |    -6 | 1.3% → 0.9% |   20 → 14 | `String.new [c function]`                                  | `<unknown>` |
|  -45.5% |    -5 | 0.7% → 0.4% |    11 → 6 | `Enumerable#map [c function]`                              | `<unknown>` |
|  -62.5% |    -5 | 0.5% → 0.2% |     8 → 3 | `Hash#merge! [c function]`                                 | `<unknown>` |
|  -50.0% |    -5 | 0.6% → 0.3% |    10 → 5 | `Hash#transform_keys [c function]`                         | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                                           | Location                                                                                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|  -80.0% |   -16 | 1.3% → 0.3% |  20 → 4 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
|  -61.5% |    -8 | 0.8% → 0.3% |  13 → 5 | `I18n::Backend::Base#translate`                                    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                       |
|  -53.3% |    -8 | 1.0% → 0.5% |  15 → 7 | `Nokogiri::HTML5::Node#write_to`                                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`               |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `Rails::HTML::Concern::Scrubber::SafeList#scrub`                   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                     |
|  -16.7% |    -6 | 2.3% → 1.9% | 36 → 30 | `block in decorate`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|  -46.2% |    -6 | 0.8% → 0.5% |  13 → 7 | `block (2 levels) in translate`                                    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
|  -60.0% |    -6 | 0.6% → 0.3% |  10 → 4 | `block in force_correct_attribute_escaping!`                       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
|  -46.2% |    -6 | 0.8% → 0.5% |  13 → 7 | `Nokogiri::HTML5::DocumentFragment#initialize`                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`  |
|  -55.6% |    -5 | 0.6% → 0.3% |   9 → 4 | `ActionView::Helpers::NumberHelper#number_with_delimiter`          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb`                |
|  -62.5% |    -5 | 0.5% → 0.2% |   8 → 3 | `block in scrub!`                                                  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
|  -62.5% |    -5 | 0.5% → 0.2% |   8 → 3 | `Nokogiri::XML::Node#cdata?`                                       | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `I18n::Base#normalize_key`                                         | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                    |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `I18n::Config#default_separator`                                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb`                                             |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `Loofah::ScrubBehavior::NodeSet#scrub!`                            | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `Nokogiri::XML::Document#initialize`                               | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|  -44.4% |    -4 | 0.6% → 0.3% |   9 → 5 | `Nokogiri::XML::Node#to_html`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |
|  -36.4% |    -4 | 0.7% → 0.5% |  11 → 7 | `Rails::HTML::PermitScrubber#skip_node?`                           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                     |
|  -30.0% |    -3 | 0.6% → 0.5% |  10 → 7 | `Nokogiri::XML::Document#decorate`                                 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I18n::Base#normalize_keys`                                        | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                    |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------ | ----------- |
|  -47.6% |   -10 | 1.4% → 0.7% | 21 → 11 | `Array#each`                                                             | `<unknown>` |
|  -21.6% |    -8 | 2.4% → 1.9% | 37 → 29 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Hash#initialize`                                                        | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Metal#session`                                        | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionDispatch::ParamBuilder.from_pairs`                                | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base::HelperMethods#form_authenticity_token`          | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionView::Base.default_formats`                                       | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base#__callbacks`                                     | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Dir.[]`                                                                 | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Dir.glob`                                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`            | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|    Change | Delta |            % |   Samples | Function                                                                 | Location                                                                                                |
| --------: | ----: | -----------: | --------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| +13700.0% |  +137 |  0.1% → 8.9% |   1 → 138 | `block (2 levels) in decorate`                                           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`            |
|   +253.8% |   +99 |  2.5% → 8.9% |  39 → 138 | `Class#new [c function]`                                                 | `<unknown>`                                                                                             |
|    +44.0% |   +59 | 8.6% → 12.4% | 134 → 193 | `Array#each`                                                             | `<unknown>`                                                                                             |
|   +712.5% |   +57 |  0.5% → 4.2% |    8 → 65 | `I18n::Backend::Fallbacks#extract_non_symbol_default!`                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                 |
|   +750.0% |   +30 |  0.3% → 2.2% |    4 → 34 | `ActionView::Helpers::UrlHelper#link_to`                                 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/url_helper.rb`                  |
|    +36.0% |   +27 |  4.8% → 6.6% |  75 → 102 | `Digest::Base#<< [c function]`                                           | `<unknown>`                                                                                             |
|    +36.0% |   +27 |  4.8% → 6.6% |  75 → 102 | `block in digest_body`                                                   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                               |
|    +36.4% |   +24 |  4.3% → 5.8% |   66 → 90 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>`                                                                                             |
|   +133.3% |   +16 |  0.8% → 1.8% |   12 → 28 | `Nokogiri::XML::Document#decorators`                                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`            |
|   +155.6% |   +14 |  0.6% → 1.5% |    9 → 23 | `I18n::Utils.except`                                                     | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/utils.rb`                                             |
|   +100.0% |   +14 |  0.9% → 1.8% |   14 → 28 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                      | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                      |
|    +76.5% |   +13 |  1.1% → 1.9% |   17 → 30 | `Hash#each [c function]`                                                 | `<unknown>`                                                                                             |
|   +133.3% |   +12 |  0.6% → 1.4% |    9 → 21 | `Hash#except [c function]`                                               | `<unknown>`                                                                                             |
|       new |   +10 |  0.0% → 0.6% |    0 → 10 | `Array#flatten [c function]`                                             | `<unknown>`                                                                                             |
|     +7.3% |    +9 |  8.0% → 8.6% | 124 → 133 | `Kernel#extend [c function]`                                             | `<unknown>`                                                                                             |
|    +37.5% |    +9 |  1.5% → 2.1% |   24 → 33 | `Loofah::DocumentDecorator#initialize`                                   | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                      |
|    +75.0% |    +9 |  0.8% → 1.4% |   12 → 21 | `Nokogiri::XML::Node#node_name [c function]`                             | `<unknown>`                                                                                             |
|    +61.5% |    +8 |  0.8% → 1.4% |   13 → 21 | `Nokogiri::XML::NodeSet#each`                                            | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`            |
|       new |    +8 |  0.0% → 0.5% |     0 → 8 | `ActionDispatch::Session::CookieStore#set_cookie`                        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/session/cookie_store.rb` |
|    +25.0% |    +7 |  1.8% → 2.3% |   28 → 35 | `Nokogiri::XML::Node#children [c function]`                              | `<unknown>`                                                                                             |

##### Native

|  Change | Delta |           % |   Samples | Function                                     | Location    |
| ------: | ----: | ----------: | --------: | -------------------------------------------- | ----------- |
| +253.8% |   +99 | 2.5% → 8.9% |  39 → 138 | `Class#new [c function]`                     | `<unknown>` |
|  +36.0% |   +27 | 4.8% → 6.6% |  75 → 102 | `Digest::Base#<< [c function]`               | `<unknown>` |
|  +76.5% |   +13 | 1.1% → 1.9% |   17 → 30 | `Hash#each [c function]`                     | `<unknown>` |
| +133.3% |   +12 | 0.6% → 1.4% |    9 → 21 | `Hash#except [c function]`                   | `<unknown>` |
|     new |   +10 | 0.0% → 0.6% |    0 → 10 | `Array#flatten [c function]`                 | `<unknown>` |
|   +7.3% |    +9 | 8.0% → 8.6% | 124 → 133 | `Kernel#extend [c function]`                 | `<unknown>` |
|  +75.0% |    +9 | 0.8% → 1.4% |   12 → 21 | `Nokogiri::XML::Node#node_name [c function]` | `<unknown>` |
|  +25.0% |    +7 | 1.8% → 2.3% |   28 → 35 | `Nokogiri::XML::Node#children [c function]`  | `<unknown>` |
|  +41.7% |    +5 | 0.8% → 1.1% |   12 → 17 | `Regexp#match? [c function]`                 | `<unknown>` |
|     new |    +4 | 0.0% → 0.3% |     0 → 4 | `Kernel#require [c function]`                | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |     1 → 4 | `Array#any? [c function]`                    | `<unknown>` |
|  +75.0% |    +3 | 0.3% → 0.5% |     4 → 7 | `IO::generic_writable#<< [c function]`       | `<unknown>` |
|  +75.0% |    +3 | 0.3% → 0.5% |     4 → 7 | `StringIO#write [c function]`                | `<unknown>` |
|  +42.9% |    +3 | 0.5% → 0.6% |    7 → 10 | `Kernel#require_relative [c function]`       | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |     1 → 4 | `Nokogiri::XML::Attr#value= [c function]`    | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |     1 → 3 | `Class#allocate [c function]`                | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |     1 → 3 | `OpenSSL::HMAC#initialize [c function]`      | `<unknown>` |
|  +50.0% |    +2 | 0.3% → 0.4% |     4 → 6 | `Integer#upto [c function]`                  | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |     1 → 3 | `Fiber.[] [c function]`                      | `<unknown>` |
|  +66.7% |    +2 | 0.2% → 0.3% |     3 → 5 | `File.file? [c function]`                    | `<unknown>` |

##### Third-party

|    Change | Delta |             % |       Samples | Function                                                            | Location                                                                                                |
| --------: | ----: | ------------: | ------------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +13700.0% |  +137 |   0.1% → 8.9% |       1 → 138 | `block (2 levels) in decorate`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`            |
|   +712.5% |   +57 |   0.5% → 4.2% |        8 → 65 | `I18n::Backend::Fallbacks#extract_non_symbol_default!`              | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                 |
|   +750.0% |   +30 |   0.3% → 2.2% |        4 → 34 | `ActionView::Helpers::UrlHelper#link_to`                            | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/url_helper.rb`                  |
|    +36.0% |   +27 |   4.8% → 6.6% |      75 → 102 | `block in digest_body`                                              | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                               |
|   +133.3% |   +16 |   0.8% → 1.8% |       12 → 28 | `Nokogiri::XML::Document#decorators`                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`            |
|   +155.6% |   +14 |   0.6% → 1.5% |        9 → 23 | `I18n::Utils.except`                                                | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/utils.rb`                                             |
|   +100.0% |   +14 |   0.9% → 1.8% |       14 → 28 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                      |
|    +37.5% |    +9 |   1.5% → 2.1% |       24 → 33 | `Loofah::DocumentDecorator#initialize`                              | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                      |
|    +61.5% |    +8 |   0.8% → 1.4% |       13 → 21 | `Nokogiri::XML::NodeSet#each`                                       | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`            |
|       new |    +8 |   0.0% → 0.5% |         0 → 8 | `ActionDispatch::Session::CookieStore#set_cookie`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/session/cookie_store.rb` |
|   +700.0% |    +7 |   0.1% → 0.5% |         1 → 8 | `ActionDispatch::Cookies::AbstractCookieJar#[]=`                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`              |
|    +31.8% |    +7 |   1.4% → 1.9% |       22 → 29 | `I18n::Backend::Base#translate`                                     | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                      |
|    +54.5% |    +6 |   0.7% → 1.1% |       11 → 17 | `ActionDispatch::Journey::Router::Utils.escape_segment`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb`            |
|    +54.5% |    +6 |   0.7% → 1.1% |       11 → 17 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb`            |
|    +54.5% |    +6 |   0.7% → 1.1% |       11 → 17 | `block in <class:Format>`                                           | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/visitors.rb`                |
|       new |    +6 |   0.0% → 0.4% |         0 → 6 | `ActiveSupport::MessageEncryptor#encrypt_and_sign`                  | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/message_encryptor.rb`             |
|   +500.0% |    +5 |   0.1% → 0.4% |         1 → 6 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`              |
|    +71.4% |    +5 |   0.5% → 0.8% |        7 → 12 | `block in each`                                                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`            |
|     +0.3% |    +5 | 94.9% → 95.2% | 1,472 → 1,477 | `ActionDispatch::AssumeSSL#call`                                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`           |
|     +0.3% |    +5 | 94.9% → 95.2% | 1,472 → 1,477 | `ActionDispatch::SSL#call`                                          | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`                  |

##### Unknown

|  Change | Delta |            % |   Samples | Function                                                                                    | Location    |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------- | ----------- |
|  +44.0% |   +59 | 8.6% → 12.4% | 134 → 193 | `Array#each`                                                                                | `<unknown>` |
|  +36.4% |   +24 |  4.3% → 5.8% |   66 → 90 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112`                    | `<unknown>` |
| +300.0% |    +6 |  0.1% → 0.5% |     2 → 8 | `#<Class:0xffff8e3458d0>#_app_views_layouts_application_html_erb__3919319499024941682_3144` | `<unknown>` |
| +600.0% |    +6 |  0.1% → 0.5% |     1 → 7 | `Kernel#tap`                                                                                | `<unknown>` |
|     new |    +4 |  0.0% → 0.3% |     0 → 4 | `Integer#times`                                                                             | `<unknown>` |
|  +66.7% |    +4 |  0.4% → 0.6% |    6 → 10 | `Array#map`                                                                                 | `<unknown>` |
|     new |    +3 |  0.0% → 0.2% |     0 → 3 | `block (2 levels) in _app_views_statuses_index_html_erb___2193380913002583348_3112`         | `<unknown>` |
|     new |    +2 |  0.0% → 0.1% |     0 → 2 | `StatusesController#_layout`                                                                | `<unknown>` |
| +100.0% |    +1 |         0.1% |     1 → 2 | `ActiveSupport::BroadcastLogger#info`                                                       | `<unknown>` |
|     new |    +1 |  0.0% → 0.1% |     0 → 1 | `ActionController::Base.logger`                                                             | `<unknown>` |
|     new |    +1 |  0.0% → 0.1% |     0 → 1 | `ActiveSupport::TaggedLogging#pop_tags`                                                     | `<unknown>` |
|     new |    +1 |  0.0% → 0.1% |     0 → 1 | `ActiveSupport::NumberHelper::NumberConverter#namespace`                                    | `<unknown>` |
|     new |    +1 |  0.0% → 0.1% |     0 → 1 | `String#unpack`                                                                             | `<unknown>` |
|     new |    +1 |  0.0% → 0.1% |     0 → 1 | `ActiveSupport::NumberHelper::NumberConverter.namespace`                                    | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |           % |  Samples | Function                                                                                      | Location                                                                                                              |
| -----: | ----: | ----------: | -------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| -29.1% |   -30 | 6.6% → 4.7% | 103 → 73 | `Nokogiri::HTML5::Node#write_to`                                                              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`                            |
| -75.9% |   -22 | 1.9% → 0.5% |   29 → 7 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`                               | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -51.2% |   -21 | 2.6% → 1.3% |  41 → 20 | `Kernel#dup [c function]`                                                                     | `<unknown>`                                                                                                           |
| -65.6% |   -21 | 2.1% → 0.7% |  32 → 11 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`                            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`              |
| -54.5% |   -18 | 2.1% → 1.0% |  33 → 15 | `String#gsub! [c function]`                                                                   | `<unknown>`                                                                                                           |
| -64.3% |   -18 | 1.8% → 0.6% |  28 → 10 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`                             |
| -51.6% |   -16 | 2.0% → 1.0% |  31 → 15 | `Hash#merge [c function]`                                                                     | `<unknown>`                                                                                                           |
| -44.1% |   -15 | 2.2% → 1.2% |  34 → 19 | `String.new [c function]`                                                                     | `<unknown>`                                                                                                           |
| -24.1% |   -13 | 3.5% → 2.6% |  54 → 41 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                                                    | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
| -86.7% |   -13 | 1.0% → 0.1% |   15 → 2 | `Rails::HTML::Concern::Scrubber::SafeList#scrub`                                              | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                  |
| -61.1% |   -11 | 1.2% → 0.5% |   18 → 7 | `I18n::Base#normalize_keys`                                                                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                                 |
| -31.4% |   -11 | 2.3% → 1.5% |  35 → 24 | `Rails::HTML::PermitScrubber#scrub`                                                           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                  |
| -57.9% |   -11 | 1.2% → 0.5% |   19 → 8 | `Nokogiri::XML::NodeSet#to_html`                                                              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                          |
| -45.5% |   -10 | 1.4% → 0.8% |  22 → 12 | `String#split [c function]`                                                                   | `<unknown>`                                                                                                           |
| -20.8% |   -10 | 3.1% → 2.5% |  48 → 38 | `Nokogiri::XML::Node#html_standard_serialize [c function]`                                    | `<unknown>`                                                                                                           |
| -41.7% |   -10 | 1.5% → 0.9% |  24 → 14 | `String#html_safe`                                                                            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/string/output_safety.rb`               |
| -62.5% |   -10 | 1.0% → 0.4% |   16 → 6 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                                                  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
| -58.8% |   -10 | 1.1% → 0.5% |   17 → 7 | `Nokogiri::HTML5::DocumentFragment#initialize`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`               |
| -14.9% |   -10 | 4.3% → 3.7% |  67 → 57 | `Rails::HTML::PermitScrubber#scrub_attribute`                                                 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                  |
| -75.0% |    -9 | 0.8% → 0.2% |   12 → 3 | `String#initialize [c function]`                                                              | `<unknown>`                                                                                                           |

##### Native

|  Change | Delta |           % |   Samples | Function                                                   | Location    |
| ------: | ----: | ----------: | --------: | ---------------------------------------------------------- | ----------- |
|  -51.2% |   -21 | 2.6% → 1.3% |   41 → 20 | `Kernel#dup [c function]`                                  | `<unknown>` |
|  -54.5% |   -18 | 2.1% → 1.0% |   33 → 15 | `String#gsub! [c function]`                                | `<unknown>` |
|  -51.6% |   -16 | 2.0% → 1.0% |   31 → 15 | `Hash#merge [c function]`                                  | `<unknown>` |
|  -44.1% |   -15 | 2.2% → 1.2% |   34 → 19 | `String.new [c function]`                                  | `<unknown>` |
|  -45.5% |   -10 | 1.4% → 0.8% |   22 → 12 | `String#split [c function]`                                | `<unknown>` |
|  -20.8% |   -10 | 3.1% → 2.5% |   48 → 38 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
|  -75.0% |    -9 | 0.8% → 0.2% |    12 → 3 | `String#initialize [c function]`                           | `<unknown>` |
|   -6.7% |    -8 | 7.7% → 7.2% | 119 → 111 | `Module#extend_object [c function]`                        | `<unknown>` |
|  -36.4% |    -8 | 1.4% → 0.9% |   22 → 14 | `String#encode [c function]`                               | `<unknown>` |
|  -58.3% |    -7 | 0.8% → 0.3% |    12 → 5 | `Kernel#lambda [c function]`                               | `<unknown>` |
|  -11.7% |    -7 | 3.9% → 3.4% |   60 → 53 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
|  -50.0% |    -6 | 0.8% → 0.4% |    12 → 6 | `Array#join [c function]`                                  | `<unknown>` |
|  -54.5% |    -6 | 0.7% → 0.3% |    11 → 5 | `ERB::Util.html_escape [c function]`                       | `<unknown>` |
|  -75.0% |    -6 | 0.5% → 0.1% |     8 → 2 | `Enumerable#detect [c function]`                           | `<unknown>` |
| removed |    -6 | 0.4% → 0.0% |     6 → 0 | `Hash#delete [c function]`                                 | `<unknown>` |
|  -85.7% |    -6 | 0.5% → 0.1% |     7 → 1 | `Kernel#BigDecimal [c function]`                           | `<unknown>` |
|  -45.5% |    -5 | 0.7% → 0.4% |    11 → 6 | `Enumerable#map [c function]`                              | `<unknown>` |
|  -62.5% |    -5 | 0.5% → 0.2% |     8 → 3 | `Hash#merge! [c function]`                                 | `<unknown>` |
|  -50.0% |    -5 | 0.6% → 0.3% |    10 → 5 | `Hash#transform_keys [c function]`                         | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |     4 → 0 | `Integer#to_s [c function]`                                | `<unknown>` |

##### Third-party

| Change | Delta |             % |       Samples | Function                                                                                      | Location                                                                                                              |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| -29.1% |   -30 |   6.6% → 4.7% |      103 → 73 | `Nokogiri::HTML5::Node#write_to`                                                              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`                            |
| -75.9% |   -22 |   1.9% → 0.5% |        29 → 7 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`                               | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -65.6% |   -21 |   2.1% → 0.7% |       32 → 11 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`                            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`              |
| -64.3% |   -18 |   1.8% → 0.6% |       28 → 10 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`                             |
| -24.1% |   -13 |   3.5% → 2.6% |       54 → 41 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                                                    | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
| -86.7% |   -13 |   1.0% → 0.1% |        15 → 2 | `Rails::HTML::Concern::Scrubber::SafeList#scrub`                                              | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                  |
| -61.1% |   -11 |   1.2% → 0.5% |        18 → 7 | `I18n::Base#normalize_keys`                                                                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                                 |
| -31.4% |   -11 |   2.3% → 1.5% |       35 → 24 | `Rails::HTML::PermitScrubber#scrub`                                                           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                  |
| -57.9% |   -11 |   1.2% → 0.5% |        19 → 8 | `Nokogiri::XML::NodeSet#to_html`                                                              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                          |
| -41.7% |   -10 |   1.5% → 0.9% |       24 → 14 | `String#html_safe`                                                                            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/string/output_safety.rb`               |
| -62.5% |   -10 |   1.0% → 0.4% |        16 → 6 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                                                  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
| -58.8% |   -10 |   1.1% → 0.5% |        17 → 7 | `Nokogiri::HTML5::DocumentFragment#initialize`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`               |
| -14.9% |   -10 |   4.3% → 3.7% |       67 → 57 | `Rails::HTML::PermitScrubber#scrub_attribute`                                                 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                  |
| -64.3% |    -9 |   0.9% → 0.3% |        14 → 5 | `ActiveSupport::SafeBuffer#initialize`                                                        | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/string/output_safety.rb`               |
|  -0.6% |    -9 | 94.3% → 93.7% | 1,462 → 1,453 | `ActionDispatch::Callbacks#call`                                                              | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`                          |
|  -0.6% |    -9 | 94.3% → 93.7% | 1,462 → 1,453 | `ActionDispatch::DebugExceptions#call`                                                        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb`                   |
|  -0.6% |    -9 | 94.3% → 93.7% | 1,462 → 1,453 | `ActionDispatch::ShowExceptions#call`                                                         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`                    |
| -27.3% |    -9 |   2.1% → 1.5% |       33 → 24 | `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string`                               | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb`                                |
| -50.0% |    -9 |   1.2% → 0.6% |        18 → 9 | `I18n::Backend::Simple::Implementation#lookup`                                                | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                                                  |
| -40.9% |    -9 |   1.4% → 0.8% |       22 → 13 | `block in force_correct_attribute_escaping!`                                                  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                        | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------- | ----------- |
|  -66.7% |    -4 | 0.4% → 0.1% |   6 → 2 | `I18n::Base#default_separator`                                  | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?`  | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `ActiveSupport::NumberHelper::NumberConverter#validate_float`   | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`   | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Hash#initialize`                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Metal#session`                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionDispatch::ParamBuilder.from_pairs`                       | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base::HelperMethods#form_authenticity_token` | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionView::Base.default_formats`                              | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActiveSupport::TaggedLogging#push_tags`                        | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Array#select`                                                  | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base#__callbacks`                            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Dir.[]`                                                        | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Dir.glob`                                                      | `<unknown>` |

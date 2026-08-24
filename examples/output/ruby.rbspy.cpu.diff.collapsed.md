# Sampling profile diff

Collected 1,551 samples.

| Category         |  Change | Delta |             % |   Samples |
| ---------------- | ------: | ----: | ------------: | --------: |
| Native           |   +0.9% |    +8 | 60.5% → 61.1% | 939 → 947 |
| Third-party      |   +0.9% |    +5 | 35.2% → 35.5% | 546 → 551 |
| Unknown          |  -22.8% |   -13 |   3.7% → 2.8% |   57 → 44 |
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
| +500.0% |    +5 | 0.1% → 0.4% |    1 → 6 | `Nokogiri::XML::Node#to_format`                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`     |
|  +41.7% |    +5 | 0.8% → 1.1% |  12 → 17 | `Regexp#match? [c function]`                           | `<unknown>`                                                                                  |
|  +66.7% |    +4 | 0.4% → 0.6% |   6 → 10 | `block in each`                                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
| +400.0% |    +4 | 0.1% → 0.3% |    1 → 5 | `block (2 levels) in decorate`                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  +30.0% |    +3 | 0.6% → 0.8% |  10 → 13 | `Loofah::ScrubBehavior::Node#scrub!`                   | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                           |
|  +75.0% |    +3 | 0.3% → 0.5% |    4 → 7 | `StringIO#write [c function]`                          | `<unknown>`                                                                                  |
| +300.0% |    +3 | 0.1% → 0.3% |    1 → 4 | `Nokogiri::XML::Attr#value= [c function]`              | `<unknown>`                                                                                  |

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
|  +75.0% |    +3 | 0.3% → 0.5% |    4 → 7 | `StringIO#write [c function]`                | `<unknown>` |
| +300.0% |    +3 | 0.1% → 0.3% |    1 → 4 | `Nokogiri::XML::Attr#value= [c function]`    | `<unknown>` |
|  +50.0% |    +2 | 0.3% → 0.4% |    4 → 6 | `Integer#upto [c function]`                  | `<unknown>` |
|   +5.9% |    +2 | 2.2% → 2.3% |  34 → 36 | `(unknown) [c function]`                     | `<unknown>` |
|  +50.0% |    +2 | 0.3% → 0.4% |    4 → 6 | `Kernel#initialize_dup [c function]`         | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |    0 → 2 | `Hash#each_pair [c function]`                | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |    1 → 3 | `Fiber.[] [c function]`                      | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |    1 → 3 | `Class#allocate [c function]`                | `<unknown>` |
|  +66.7% |    +2 | 0.2% → 0.3% |    3 → 5 | `File.file? [c function]`                    | `<unknown>` |
| +200.0% |    +2 | 0.1% → 0.2% |    1 → 3 | `OpenSSL::HMAC#initialize [c function]`      | `<unknown>` |
|     new |    +2 | 0.0% → 0.1% |    0 → 2 | `Nokogiri::XML::NodeSet#[] [c function]`     | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                                 | Location                                                                                                                        |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| +800.0% |   +48 | 0.4% → 3.5% |  6 → 54 | `I18n::Backend::Fallbacks#extract_non_symbol_default!`   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
| +133.3% |   +16 | 0.8% → 1.8% | 12 → 28 | `Nokogiri::XML::Document#decorators`                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                    |
| +100.0% |   +14 | 0.9% → 1.8% | 14 → 28 | `Loofah::Scrubber#traverse_conditionally_bottom_up`      | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                              |
|  +63.6% |    +7 | 0.7% → 1.2% | 11 → 18 | `ActionView::OutputBuffer#<<`                            | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                                                     |
|  +50.0% |    +6 | 0.8% → 1.2% | 12 → 18 | `Nokogiri::XML::NodeSet#each`                            | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Nokogiri::XML::Node#to_format`                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                        |
|  +66.7% |    +4 | 0.4% → 0.6% |  6 → 10 | `block in each`                                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `block (2 levels) in decorate`                           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                    |
|  +30.0% |    +3 | 0.6% → 0.8% | 10 → 13 | `Loofah::ScrubBehavior::Node#scrub!`                     | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                              |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `Concurrent::Collection::NonConcurrentMapBackend#[]`     | `../../usr/local/bundle/gems/concurrent-ruby-1.3.8/lib/concurrent-ruby/concurrent/collection/map/non_concurrent_map_backend.rb` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `I18n.fallbacks`                                         | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#execute`   | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`                        |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `Rails::HTML::Concern::ComposedSanitize#sanitize`        | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                            |
|  +20.0% |    +2 | 0.6% → 0.8% | 10 → 12 | `Nokogiri::XML::DocumentFragment.new`                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`                           |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `Loofah.html5_fragment`                                  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`                                                                       |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `Loofah::HTML5::Scrub.force_correct_attribute_escaping!` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                           |
|  +40.0% |    +2 | 0.3% → 0.5% |   5 → 7 | `ActionView::OutputBuffer#safe_concat`                   | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                                                     |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `I18n::Backend::Simple::Implementation#lookup`           | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                                                            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `I18n::Backend::Fallbacks#translate`                     | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `I18n::Base#translate`                                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                                           |

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
|  -80.0% |   -16 | 1.3% → 0.3% |    20 → 4 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
|  -51.6% |   -16 | 2.0% → 1.0% |   31 → 15 | `Hash#merge [c function]`                                                | `<unknown>`                                                                                              |
|  -20.8% |   -10 | 3.1% → 2.5% |   48 → 38 | `Nokogiri::XML::Node#html_standard_serialize [c function]`               | `<unknown>`                                                                                              |
|  -45.5% |   -10 | 1.4% → 0.8% |   22 → 12 | `String#split [c function]`                                              | `<unknown>`                                                                                              |
|  -75.0% |    -9 | 0.8% → 0.2% |    12 → 3 | `String#initialize [c function]`                                         | `<unknown>`                                                                                              |
|  -21.6% |    -8 | 2.4% → 1.9% |   37 → 29 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>`                                                                                              |
|  -16.0% |    -8 | 3.2% → 2.7% |   50 → 42 | `Nokogiri::HTML4::Document.new [c function]`                             | `<unknown>`                                                                                              |
|  -61.5% |    -8 | 0.8% → 0.3% |    13 → 5 | `I18n::Backend::Base#translate`                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                       |
|   -6.7% |    -8 | 7.7% → 7.2% | 119 → 111 | `Module#extend_object [c function]`                                      | `<unknown>`                                                                                              |
|  -53.3% |    -8 | 1.0% → 0.5% |    15 → 7 | `Nokogiri::HTML5::Node#write_to`                                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`               |
|  -36.4% |    -8 | 1.4% → 0.9% |   22 → 14 | `String#encode [c function]`                                             | `<unknown>`                                                                                              |
| removed |    -7 | 0.5% → 0.0% |     7 → 0 | `Rails::HTML::Concern::Scrubber::SafeList#scrub`                         | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                     |
|  -11.7% |    -7 | 3.9% → 3.4% |   60 → 53 | `Nokogiri::Gumbo.fragment [c function]`                                  | `<unknown>`                                                                                              |
| removed |    -7 | 0.5% → 0.0% |     7 → 0 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                             | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
|  -58.3% |    -7 | 0.8% → 0.3% |    12 → 5 | `Kernel#lambda [c function]`                                             | `<unknown>`                                                                                              |
|  -16.7% |    -6 | 2.3% → 1.9% |   36 → 30 | `block in decorate`                                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|  -85.7% |    -6 | 0.5% → 0.1% |     7 → 1 | `Kernel#BigDecimal [c function]`                                         | `<unknown>`                                                                                              |
|  -60.0% |    -6 | 0.6% → 0.3% |    10 → 4 | `block in force_correct_attribute_escaping!`                             | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |

##### Native

|  Change | Delta |           % |   Samples | Function                                                   | Location    |
| ------: | ----: | ----------: | --------: | ---------------------------------------------------------- | ----------- |
|  -61.8% |   -21 | 2.2% → 0.8% |   34 → 13 | `Kernel#dup [c function]`                                  | `<unknown>` |
|  -54.5% |   -18 | 2.1% → 1.0% |   33 → 15 | `String#gsub! [c function]`                                | `<unknown>` |
|  -51.6% |   -16 | 2.0% → 1.0% |   31 → 15 | `Hash#merge [c function]`                                  | `<unknown>` |
|  -20.8% |   -10 | 3.1% → 2.5% |   48 → 38 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
|  -45.5% |   -10 | 1.4% → 0.8% |   22 → 12 | `String#split [c function]`                                | `<unknown>` |
|  -75.0% |    -9 | 0.8% → 0.2% |    12 → 3 | `String#initialize [c function]`                           | `<unknown>` |
|  -16.0% |    -8 | 3.2% → 2.7% |   50 → 42 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
|   -6.7% |    -8 | 7.7% → 7.2% | 119 → 111 | `Module#extend_object [c function]`                        | `<unknown>` |
|  -36.4% |    -8 | 1.4% → 0.9% |   22 → 14 | `String#encode [c function]`                               | `<unknown>` |
|  -11.7% |    -7 | 3.9% → 3.4% |   60 → 53 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
|  -58.3% |    -7 | 0.8% → 0.3% |    12 → 5 | `Kernel#lambda [c function]`                               | `<unknown>` |
|  -85.7% |    -6 | 0.5% → 0.1% |     7 → 1 | `Kernel#BigDecimal [c function]`                           | `<unknown>` |
|  -30.0% |    -6 | 1.3% → 0.9% |   20 → 14 | `String.new [c function]`                                  | `<unknown>` |
|  -50.0% |    -6 | 0.8% → 0.4% |    12 → 6 | `Array#join [c function]`                                  | `<unknown>` |
|  -75.0% |    -6 | 0.5% → 0.1% |     8 → 2 | `Enumerable#detect [c function]`                           | `<unknown>` |
| removed |    -6 | 0.4% → 0.0% |     6 → 0 | `Hash#delete [c function]`                                 | `<unknown>` |
|  -54.5% |    -6 | 0.7% → 0.3% |    11 → 5 | `ERB::Util.html_escape [c function]`                       | `<unknown>` |
|  -16.7% |    -5 | 1.9% → 1.6% |   30 → 25 | `String#gsub [c function]`                                 | `<unknown>` |
|  -50.0% |    -5 | 0.6% → 0.3% |    10 → 5 | `Kernel.require [c function]`                              | `<unknown>` |
|  -45.5% |    -5 | 0.7% → 0.4% |    11 → 6 | `Enumerable#map [c function]`                              | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                                           | Location                                                                                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|  -80.0% |   -16 | 1.3% → 0.3% |  20 → 4 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
|  -61.5% |    -8 | 0.8% → 0.3% |  13 → 5 | `I18n::Backend::Base#translate`                                    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                       |
|  -53.3% |    -8 | 1.0% → 0.5% |  15 → 7 | `Nokogiri::HTML5::Node#write_to`                                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`               |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `Rails::HTML::Concern::Scrubber::SafeList#scrub`                   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                     |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
|  -16.7% |    -6 | 2.3% → 1.9% | 36 → 30 | `block in decorate`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|  -60.0% |    -6 | 0.6% → 0.3% |  10 → 4 | `block in force_correct_attribute_escaping!`                       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
|  -46.2% |    -6 | 0.8% → 0.5% |  13 → 7 | `block (2 levels) in translate`                                    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
|  -46.2% |    -6 | 0.8% → 0.5% |  13 → 7 | `Nokogiri::HTML5::DocumentFragment#initialize`                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`  |
|  -55.6% |    -5 | 0.6% → 0.3% |   9 → 4 | `ActionView::Helpers::NumberHelper#number_with_delimiter`          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb`                |
|  -62.5% |    -5 | 0.5% → 0.2% |   8 → 3 | `block in scrub!`                                                  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
|  -62.5% |    -5 | 0.5% → 0.2% |   8 → 3 | `Nokogiri::XML::Node#cdata?`                                       | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `Loofah::ScrubBehavior::NodeSet#scrub!`                            | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `Nokogiri::XML::Document#initialize`                               | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|  -44.4% |    -4 | 0.6% → 0.3% |   9 → 5 | `Nokogiri::XML::Node#to_html`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `I18n::Base#normalize_key`                                         | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                    |
|  -36.4% |    -4 | 0.7% → 0.5% |  11 → 7 | `Rails::HTML::PermitScrubber#skip_node?`                           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                     |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `I18n::Config#default_separator`                                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb`                                             |
|  -30.0% |    -3 | 0.6% → 0.5% |  10 → 7 | `Nokogiri::XML::Document#decorate`                                 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Rails::HTML::PermitScrubber#scrub_attributes`                     | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                     |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------ | ----------- |
|  -21.6% |    -8 | 2.4% → 1.9% | 37 → 29 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>` |
|  -20.0% |    -2 | 0.6% → 0.5% |  10 → 8 | `Array#each`                                                             | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionView::Base.default_formats`                                       | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base::HelperMethods#form_authenticity_token`          | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Metal#session`                                        | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base#__callbacks`                                     | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Dir.[]`                                                                 | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Hash#initialize`                                                        | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Dir.glob`                                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionDispatch::ParamBuilder.from_pairs`                                | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                        | Location                                                                                        |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +230.4% |  +106 |   3.0% → 9.8% |  46 → 152 | `Class#new [c function]`                                        | `<unknown>`                                                                                     |
|     new |  +102 |   0.0% → 6.6% |   0 → 102 | `ActionDispatch::Response.create`                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/response.rb`           |
|     new |  +102 |   0.0% → 6.6% |   0 → 102 | `ActionController::DefaultHeaders::ClassMethods#make_response!` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/default_headers.rb` |
| +180.0% |   +45 |   1.6% → 4.5% |   25 → 70 | `I18n::Backend::Fallbacks#extract_non_symbol_default!`          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                         |
|  +12.8% |   +39 | 19.6% → 22.1% | 304 → 343 | `Loofah::ScrubBehavior::NodeSet#scrub!`                         | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                              |
|  +13.2% |   +37 | 18.1% → 20.5% | 281 → 318 | `Loofah::Scrubber#traverse_conditionally_bottom_up`             | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                              |
|  +13.2% |   +37 | 18.1% → 20.5% | 281 → 318 | `Loofah::Scrubber#traverse`                                     | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                              |
|  +26.3% |   +36 |  8.8% → 11.2% | 137 → 173 | `I18n::Base#translate`                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                           |
|  +29.2% |   +33 |   7.3% → 9.4% | 113 → 146 | `block in translate_key`                                        | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                           |
|  +28.9% |   +33 |   7.4% → 9.5% | 114 → 147 | `I18n::Base#translate_key`                                      | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                           |
|  +11.0% |   +32 | 18.8% → 20.9% | 292 → 324 | `block in scrub!`                                               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                              |
|  +27.4% |   +32 |   7.5% → 9.6% | 117 → 149 | `Kernel#catch [c function]`                                     | `<unknown>`                                                                                     |
|  +28.3% |   +32 |   7.3% → 9.3% | 113 → 145 | `I18n::Backend::Fallbacks#translate`                            | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                         |
|  +23.6% |   +30 |  8.2% → 10.1% | 127 → 157 | `Nokogiri::XML::Node#children [c function]`                     | `<unknown>`                                                                                     |
|  +38.7% |   +29 |   4.8% → 6.7% |  75 → 104 | `Rack::ETag#digest_body`                                        | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                       |
|  +37.3% |   +28 |   4.8% → 6.6% |  75 → 103 | `block in digest_body`                                          | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                       |
|  +36.0% |   +27 |   4.8% → 6.6% |  75 → 102 | `Digest::Base#<< [c function]`                                  | `<unknown>`                                                                                     |
|  +65.8% |   +25 |   2.5% → 4.1% |   38 → 63 | `block in traverse_conditionally_bottom_up`                     | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                              |
|  +11.2% |   +21 | 12.1% → 13.4% | 187 → 208 | `Hash#each [c function]`                                        | `<unknown>`                                                                                     |
|   +5.4% |   +20 | 23.7% → 25.0% | 367 → 387 | `Loofah::ScrubBehavior::Node#scrub!`                            | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                              |

##### Native

|  Change | Delta |             % |   Samples | Function                                           | Location    |
| ------: | ----: | ------------: | --------: | -------------------------------------------------- | ----------- |
| +230.4% |  +106 |   3.0% → 9.8% |  46 → 152 | `Class#new [c function]`                           | `<unknown>` |
|  +27.4% |   +32 |   7.5% → 9.6% | 117 → 149 | `Kernel#catch [c function]`                        | `<unknown>` |
|  +23.6% |   +30 |  8.2% → 10.1% | 127 → 157 | `Nokogiri::XML::Node#children [c function]`        | `<unknown>` |
|  +36.0% |   +27 |   4.8% → 6.6% |  75 → 102 | `Digest::Base#<< [c function]`                     | `<unknown>` |
|  +11.2% |   +21 | 12.1% → 13.4% | 187 → 208 | `Hash#each [c function]`                           | `<unknown>` |
| +120.0% |   +12 |   0.6% → 1.4% |   10 → 22 | `Hash#fetch [c function]`                          | `<unknown>` |
| +133.3% |   +12 |   0.6% → 1.4% |    9 → 21 | `Hash#except [c function]`                         | `<unknown>` |
|     new |   +10 |   0.0% → 0.6% |    0 → 10 | `Array#flatten [c function]`                       | `<unknown>` |
|  +75.0% |    +9 |   0.8% → 1.4% |   12 → 21 | `Nokogiri::XML::Node#node_name [c function]`       | `<unknown>` |
|   +6.4% |    +8 |   8.1% → 8.6% | 125 → 133 | `Kernel#extend [c function]`                       | `<unknown>` |
|  +41.7% |    +5 |   0.8% → 1.1% |   12 → 17 | `Regexp#match? [c function]`                       | `<unknown>` |
|  +75.0% |    +3 |   0.3% → 0.5% |     4 → 7 | `StringIO#write [c function]`                      | `<unknown>` |
|  +75.0% |    +3 |   0.3% → 0.5% |     4 → 7 | `IO::generic_writable#<< [c function]`             | `<unknown>` |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `Nokogiri::XML::Attr#value= [c function]`          | `<unknown>` |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `Array#any? [c function]`                          | `<unknown>` |
|   +4.8% |    +2 |   2.7% → 2.8% |   42 → 44 | `Nokogiri::XML::Node#attribute_nodes [c function]` | `<unknown>` |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `Fiber.[] [c function]`                            | `<unknown>` |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `String#each_byte [c function]`                    | `<unknown>` |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `Class#allocate [c function]`                      | `<unknown>` |
|  +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `File.file? [c function]`                          | `<unknown>` |

##### Third-party

|  Change | Delta |             % |   Samples | Function                                                           | Location                                                                                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|     new |  +102 |   0.0% → 6.6% |   0 → 102 | `ActionDispatch::Response.create`                                  | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/response.rb`                    |
|     new |  +102 |   0.0% → 6.6% |   0 → 102 | `ActionController::DefaultHeaders::ClassMethods#make_response!`    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/default_headers.rb`          |
| +180.0% |   +45 |   1.6% → 4.5% |   25 → 70 | `I18n::Backend::Fallbacks#extract_non_symbol_default!`             | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
|  +12.8% |   +39 | 19.6% → 22.1% | 304 → 343 | `Loofah::ScrubBehavior::NodeSet#scrub!`                            | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
|  +13.2% |   +37 | 18.1% → 20.5% | 281 → 318 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                       |
|  +13.2% |   +37 | 18.1% → 20.5% | 281 → 318 | `Loofah::Scrubber#traverse`                                        | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                       |
|  +26.3% |   +36 |  8.8% → 11.2% | 137 → 173 | `I18n::Base#translate`                                             | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                    |
|  +29.2% |   +33 |   7.3% → 9.4% | 113 → 146 | `block in translate_key`                                           | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                    |
|  +28.9% |   +33 |   7.4% → 9.5% | 114 → 147 | `I18n::Base#translate_key`                                         | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                    |
|  +11.0% |   +32 | 18.8% → 20.9% | 292 → 324 | `block in scrub!`                                                  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
|  +28.3% |   +32 |   7.3% → 9.3% | 113 → 145 | `I18n::Backend::Fallbacks#translate`                               | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
|  +38.7% |   +29 |   4.8% → 6.7% |  75 → 104 | `Rack::ETag#digest_body`                                           | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                |
|  +37.3% |   +28 |   4.8% → 6.6% |  75 → 103 | `block in digest_body`                                             | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                |
|  +65.8% |   +25 |   2.5% → 4.1% |   38 → 63 | `block in traverse_conditionally_bottom_up`                        | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                       |
|   +5.4% |   +20 | 23.7% → 25.0% | 367 → 387 | `Loofah::ScrubBehavior::Node#scrub!`                               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
|   +9.6% |   +18 | 12.1% → 13.3% | 188 → 206 | `Nokogiri::XML::Document#decorate`                                 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
| +133.3% |   +16 |   0.8% → 1.8% |   12 → 28 | `Nokogiri::XML::Document#decorators`                               | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|   +8.9% |   +15 | 10.9% → 11.9% | 169 → 184 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| +155.6% |   +14 |   0.6% → 1.5% |    9 → 23 | `I18n::Utils.except`                                               | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/utils.rb`                                              |
|  +10.4% |   +13 |   8.1% → 8.9% | 125 → 138 | `block (2 levels) in decorate`                                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                                                    | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------- | ----------- |
|  +40.0% |   +10 | 1.6% → 2.3% | 25 → 35 | `#<Class:0xffff8e3458d0>#_app_views_layouts_application_html_erb__3919319499024941682_3144` | `<unknown>` |
|  +60.0% |    +9 | 1.0% → 1.5% | 15 → 24 | `ActionController::Base::HelperMethods#form_authenticity_token`                             | `<unknown>` |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `Kernel#tap`                                                                                | `<unknown>` |
|  +83.3% |    +5 | 0.4% → 0.7% |  6 → 11 | `Integer#times`                                                                             | `<unknown>` |
|  +66.7% |    +4 | 0.4% → 0.6% |  6 → 10 | `Array#map`                                                                                 | `<unknown>` |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `StatusesController#_layout`                                                                | `<unknown>` |
| +100.0% |    +1 |        0.1% |   1 → 2 | `ActiveSupport::BroadcastLogger#info`                                                       | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `String#unpack`                                                                             | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionController::Base.logger`                                                             | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActiveSupport::TaggedLogging#pop_tags`                                                     | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActiveSupport::NumberHelper::NumberConverter.namespace`                                    | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActiveSupport::NumberHelper::NumberConverter#namespace`                                    | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I18n::Base#load_path=`                                                                     | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                                                | Location                                                                                              |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| -11.7% |  -152 | 83.4% → 73.6% | 1,294 → 1,142 | `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>`                                                                                           |
| -11.7% |  -151 | 83.3% → 73.6% | 1,292 → 1,141 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112`                | `<unknown>`                                                                                           |
| -11.6% |  -151 | 83.7% → 74.0% | 1,298 → 1,147 | `block in render_template`                                                              | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`        |
| -11.6% |  -150 | 83.5% → 73.8% | 1,295 → 1,145 | `block (2 levels) in render_template`                                                   | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`        |
| -10.8% |  -145 | 86.9% → 77.6% | 1,348 → 1,203 | `AbstractController::Base#process_action`                                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/base.rb`                      |
| -10.8% |  -145 | 86.9% → 77.6% | 1,348 → 1,203 | `ActionController::Rendering#process_action`                                            | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`             |
| -10.8% |  -145 | 86.9% → 77.6% | 1,348 → 1,203 | `block in process_action`                                                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`                 |
| -10.7% |  -144 | 86.8% → 77.6% | 1,347 → 1,203 | `ActionController::ImplicitRender#default_render`                                       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/implicit_render.rb`       |
| -10.7% |  -144 | 86.8% → 77.6% | 1,347 → 1,203 | `ActionController::BasicImplicitRender#send_action`                                     | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/basic_implicit_render.rb` |
| -10.6% |  -143 | 87.2% → 77.9% | 1,352 → 1,209 | `ActiveSupport::Notifications.instrument`                                               | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`               |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `AbstractController::Rendering#render`                                                  | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/rendering.rb`                 |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `ActionController::Rendering#render`                                                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`             |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `block (2 levels) in render`                                                            | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `ActiveSupport::Benchmark.realtime`                                                     | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/benchmark.rb`                   |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `block in render`                                                                       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `ActionController::Instrumentation#cleanup_view_runtime`                                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `ActionController::Instrumentation#render`                                              | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
| -10.6% |  -143 | 87.0% → 77.8% | 1,350 → 1,207 | `AbstractController::Callbacks#process_action`                                          | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`                 |
| -10.6% |  -143 | 87.0% → 77.8% | 1,350 → 1,207 | `ActionController::Rescue#process_action`                                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rescue.rb`                |
| -10.6% |  -143 | 87.0% → 77.8% | 1,350 → 1,207 | `block in process_action`                                                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |

##### Native

|  Change | Delta |             % |       Samples | Function                                                   | Location    |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------- | ----------- |
|  -10.8% |  -142 | 85.0% → 75.9% | 1,319 → 1,177 | `Kernel#public_send [c function]`                          | `<unknown>` |
|  -19.1% |   -39 | 13.2% → 10.6% |     204 → 165 | `(unknown) [c function]`                                   | `<unknown>` |
|  -22.2% |   -37 |  10.8% → 8.4% |     167 → 130 | `Enumerable#map [c function]`                              | `<unknown>` |
|  -51.2% |   -21 |   2.6% → 1.3% |       41 → 20 | `Kernel#dup [c function]`                                  | `<unknown>` |
|  -21.2% |   -18 |   5.5% → 4.3% |       85 → 67 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
|  -54.5% |   -18 |   2.1% → 1.0% |       33 → 15 | `String#gsub! [c function]`                                | `<unknown>` |
|  -51.6% |   -16 |   2.0% → 1.0% |       31 → 15 | `Hash#merge [c function]`                                  | `<unknown>` |
|  -44.1% |   -15 |   2.2% → 1.2% |       34 → 19 | `String.new [c function]`                                  | `<unknown>` |
|  -70.6% |   -12 |   1.1% → 0.3% |        17 → 5 | `Enumerable#detect [c function]`                           | `<unknown>` |
|  -44.0% |   -11 |   1.6% → 0.9% |       25 → 14 | `Nokogiri::XML::Node#internal_subset [c function]`         | `<unknown>` |
|  -20.8% |   -10 |   3.1% → 2.5% |       48 → 38 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
|  -45.5% |   -10 |   1.4% → 0.8% |       22 → 12 | `String#split [c function]`                                | `<unknown>` |
|  -75.0% |    -9 |   0.8% → 0.2% |        12 → 3 | `String#initialize [c function]`                           | `<unknown>` |
|   -6.7% |    -8 |   7.7% → 7.2% |     119 → 111 | `Module#extend_object [c function]`                        | `<unknown>` |
|  -36.4% |    -8 |   1.4% → 0.9% |       22 → 14 | `String#encode [c function]`                               | `<unknown>` |
|  -58.3% |    -7 |   0.8% → 0.3% |        12 → 5 | `Kernel#lambda [c function]`                               | `<unknown>` |
|  -85.7% |    -6 |   0.5% → 0.1% |         7 → 1 | `Kernel#BigDecimal [c function]`                           | `<unknown>` |
|  -50.0% |    -6 |   0.8% → 0.4% |        12 → 6 | `Array#join [c function]`                                  | `<unknown>` |
|  -50.0% |    -6 |   0.8% → 0.4% |        12 → 6 | `Enumerable#each_with_object [c function]`                 | `<unknown>` |
| removed |    -6 |   0.4% → 0.0% |         6 → 0 | `Hash#delete [c function]`                                 | `<unknown>` |

##### Third-party

| Change | Delta |             % |       Samples | Function                                                 | Location                                                                                              |
| -----: | ----: | ------------: | ------------: | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| -11.6% |  -151 | 83.7% → 74.0% | 1,298 → 1,147 | `block in render_template`                               | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`        |
| -11.6% |  -150 | 83.5% → 73.8% | 1,295 → 1,145 | `block (2 levels) in render_template`                    | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`        |
| -10.8% |  -145 | 86.9% → 77.6% | 1,348 → 1,203 | `AbstractController::Base#process_action`                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/base.rb`                      |
| -10.8% |  -145 | 86.9% → 77.6% | 1,348 → 1,203 | `ActionController::Rendering#process_action`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`             |
| -10.8% |  -145 | 86.9% → 77.6% | 1,348 → 1,203 | `block in process_action`                                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`                 |
| -10.7% |  -144 | 86.8% → 77.6% | 1,347 → 1,203 | `ActionController::ImplicitRender#default_render`        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/implicit_render.rb`       |
| -10.7% |  -144 | 86.8% → 77.6% | 1,347 → 1,203 | `ActionController::BasicImplicitRender#send_action`      | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/basic_implicit_render.rb` |
| -10.6% |  -143 | 87.2% → 77.9% | 1,352 → 1,209 | `ActiveSupport::Notifications.instrument`                | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`               |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `AbstractController::Rendering#render`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/rendering.rb`                 |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `ActionController::Rendering#render`                     | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`             |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `block (2 levels) in render`                             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `ActiveSupport::Benchmark.realtime`                      | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/benchmark.rb`                   |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `block in render`                                        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `ActionController::Instrumentation#cleanup_view_runtime` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
| -10.6% |  -143 | 86.7% → 77.4% | 1,344 → 1,201 | `ActionController::Instrumentation#render`               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
| -10.6% |  -143 | 87.0% → 77.8% | 1,350 → 1,207 | `AbstractController::Callbacks#process_action`           | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`                 |
| -10.6% |  -143 | 87.0% → 77.8% | 1,350 → 1,207 | `ActionController::Rescue#process_action`                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rescue.rb`                |
| -10.6% |  -143 | 87.0% → 77.8% | 1,350 → 1,207 | `block in process_action`                                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
| -10.8% |  -142 | 85.0% → 75.9% | 1,319 → 1,177 | `ActionView::Base#_run`                                  | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/base.rb`                              |
| -10.4% |  -141 | 87.6% → 78.5% | 1,359 → 1,218 | `ActionController::Metal#dispatch`                       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal.rb`                       |

##### Unknown

|  Change | Delta |             % |       Samples | Function                                                                                | Location    |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------- | ----------- |
|  -11.7% |  -152 | 83.4% → 73.6% | 1,294 → 1,142 | `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` | `<unknown>` |
|  -11.7% |  -151 | 83.3% → 73.6% | 1,292 → 1,141 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112`                | `<unknown>` |
|   -1.0% |   -15 | 93.4% → 92.4% | 1,448 → 1,433 | `Array#each`                                                                            | `<unknown>` |
|  -66.7% |    -4 |   0.4% → 0.1% |         6 → 2 | `I18n::Base#default_separator`                                                          | `<unknown>` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`                           | `<unknown>` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `ActiveSupport::NumberHelper::NumberConverter#validate_float`                           | `<unknown>` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?`                          | `<unknown>` |
|  -16.7% |    -1 |   0.4% → 0.3% |         6 → 5 | `Rails::Railtie.config`                                                                 | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `ActionView::Base.default_formats`                                                      | `<unknown>` |
|  -33.3% |    -1 |   0.2% → 0.1% |         3 → 2 | `ActionView::ViewPaths#template_exists?`                                                | `<unknown>` |
|  -14.3% |    -1 |   0.5% → 0.4% |         7 → 6 | `Kernel#require`                                                                        | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `Array#select`                                                                          | `<unknown>` |
|   -7.1% |    -1 |   0.9% → 0.8% |       14 → 13 | `block (2 levels) in _app_views_statuses_index_html_erb___2193380913002583348_3112`     | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `ActionController::Metal#session`                                                       | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `ActionController::Base#__callbacks`                                                    | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `Dir.[]`                                                                                | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `Hash#initialize`                                                                       | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `Dir.glob`                                                                              | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `ActiveSupport::TaggedLogging#push_tags`                                                | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `ActionDispatch::ParamBuilder.from_pairs`                                               | `<unknown>` |

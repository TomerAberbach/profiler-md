# Sampling profile diff

Took 15.71s → 15.69s (-12.48ms, -0.1%) over 1,551 samples (10.1ms per sample).

| Category         | Change |    Delta |             % |              Time |   Samples |
| ---------------- | -----: | -------: | ------------: | ----------------: | --------: |
| Native           |  +0.8% | +78.46ms | 60.6% → 61.2% |     9.52s → 9.60s | 939 → 947 |
| Third-party      |  +0.3% | +18.23ms | 35.5% → 35.7% |     5.58s → 5.60s | 552 → 554 |
| Ours             | -25.4% | -98.98ms |   2.5% → 1.9% | 390.0ms → 291.0ms |   38 → 30 |
| Standard library |  -4.8% | -10.18ms |          1.3% | 211.4ms → 201.2ms |   22 → 20 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |     Delta |           % |              Time |   Samples | Function                                               | Location                                                                                                                        |
| ------: | --------: | ----------: | ----------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| +678.4% | +989.72ms | 0.9% → 7.2% |   145.9ms → 1.13s |  14 → 118 | `Class#new [c function]`                               | `<unknown>`                                                                                                                     |
| +799.3% | +492.36ms | 0.4% → 3.5% |  61.6ms → 554.0ms |    6 → 54 | `I18n::Backend::Fallbacks#extract_non_symbol_default!` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
|  +35.3% | +252.11ms | 4.5% → 6.2% | 713.9ms → 966.0ms |  75 → 102 | `Digest::Base#<< [c function]`                         | `<unknown>`                                                                                                                     |
|  +16.9% | +209.45ms | 7.9% → 9.2% |     1.24s → 1.45s | 119 → 111 | `Module#extend_object [c function]`                    | `<unknown>`                                                                                                                     |
| +134.7% | +130.96ms | 0.6% → 1.5% |  97.3ms → 228.2ms |    9 → 21 | `Hash#except [c function]`                             | `<unknown>`                                                                                                                     |
| +105.9% | +128.21ms | 0.8% → 1.6% | 121.1ms → 249.3ms |   12 → 28 | `Nokogiri::XML::Document#decorators`                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                    |
|     new |  +98.71ms | 0.0% → 0.6% |      0ms → 98.7ms |    0 → 10 | `Array#flatten [c function]`                           | `<unknown>`                                                                                                                     |
|  +69.5% |  +85.58ms | 0.8% → 1.3% | 123.2ms → 208.8ms |   12 → 21 | `Nokogiri::XML::Node#node_name [c function]`           | `<unknown>`                                                                                                                     |
|  +57.2% |  +80.83ms | 0.9% → 1.4% | 141.2ms → 222.0ms |   14 → 28 | `Loofah::Scrubber#traverse_conditionally_bottom_up`    | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                              |
|  +62.1% |  +69.49ms | 0.7% → 1.2% | 111.9ms → 181.3ms |   11 → 18 | `ActionView::OutputBuffer#<<`                          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                                                     |
|  +49.1% |  +61.32ms | 0.8% → 1.2% | 124.9ms → 186.3ms |   12 → 18 | `Nokogiri::XML::NodeSet#each`                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
| +686.7% |  +54.20ms | 0.1% → 0.4% |    7.9ms → 62.1ms |     1 → 6 | `Nokogiri::XML::Node#to_format`                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                        |
|  +47.0% |  +53.48ms | 0.7% → 1.1% | 113.7ms → 167.2ms |   11 → 24 | `Hash#each [c function]`                               | `<unknown>`                                                                                                                     |
|  +18.3% |  +50.01ms | 1.7% → 2.1% | 273.9ms → 323.9ms |   28 → 35 | `Nokogiri::XML::Node#children [c function]`            | `<unknown>`                                                                                                                     |
|  +37.2% |  +45.60ms | 0.8% → 1.1% | 122.5ms → 168.1ms |   12 → 17 | `Regexp#match? [c function]`                           | `<unknown>`                                                                                                                     |
|  +74.3% |  +45.11ms | 0.4% → 0.7% |  60.7ms → 105.8ms |    6 → 10 | `block in each`                                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
| +169.1% |  +44.43ms | 0.2% → 0.5% |   26.3ms → 70.7ms |         3 | `Loofah::DocumentDecorator#initialize`                 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                              |
| +339.9% |  +34.31ms | 0.1% → 0.3% |   10.1ms → 44.4ms |     1 → 4 | `Nokogiri::XML::Attr#value= [c function]`              | `<unknown>`                                                                                                                     |
|  +89.0% |  +34.09ms | 0.2% → 0.5% |   38.3ms → 72.4ms |     4 → 7 | `Concurrent::Collection::NonConcurrentMapBackend#[]`   | `../../usr/local/bundle/gems/concurrent-ruby-1.3.8/lib/concurrent-ruby/concurrent/collection/map/non_concurrent_map_backend.rb` |
|  +86.0% |  +33.93ms | 0.3% → 0.5% |   39.5ms → 73.4ms |     4 → 7 | `StringIO#write [c function]`                          | `<unknown>`                                                                                                                     |

##### Native

|  Change |     Delta |           % |              Time |   Samples | Function                                     | Location    |
| ------: | --------: | ----------: | ----------------: | --------: | -------------------------------------------- | ----------- |
| +678.4% | +989.72ms | 0.9% → 7.2% |   145.9ms → 1.13s |  14 → 118 | `Class#new [c function]`                     | `<unknown>` |
|  +35.3% | +252.11ms | 4.5% → 6.2% | 713.9ms → 966.0ms |  75 → 102 | `Digest::Base#<< [c function]`               | `<unknown>` |
|  +16.9% | +209.45ms | 7.9% → 9.2% |     1.24s → 1.45s | 119 → 111 | `Module#extend_object [c function]`          | `<unknown>` |
| +134.7% | +130.96ms | 0.6% → 1.5% |  97.3ms → 228.2ms |    9 → 21 | `Hash#except [c function]`                   | `<unknown>` |
|     new |  +98.71ms | 0.0% → 0.6% |      0ms → 98.7ms |    0 → 10 | `Array#flatten [c function]`                 | `<unknown>` |
|  +69.5% |  +85.58ms | 0.8% → 1.3% | 123.2ms → 208.8ms |   12 → 21 | `Nokogiri::XML::Node#node_name [c function]` | `<unknown>` |
|  +47.0% |  +53.48ms | 0.7% → 1.1% | 113.7ms → 167.2ms |   11 → 24 | `Hash#each [c function]`                     | `<unknown>` |
|  +18.3% |  +50.01ms | 1.7% → 2.1% | 273.9ms → 323.9ms |   28 → 35 | `Nokogiri::XML::Node#children [c function]`  | `<unknown>` |
|  +37.2% |  +45.60ms | 0.8% → 1.1% | 122.5ms → 168.1ms |   12 → 17 | `Regexp#match? [c function]`                 | `<unknown>` |
| +339.9% |  +34.31ms | 0.1% → 0.3% |   10.1ms → 44.4ms |     1 → 4 | `Nokogiri::XML::Attr#value= [c function]`    | `<unknown>` |
|  +86.0% |  +33.93ms | 0.3% → 0.5% |   39.5ms → 73.4ms |     4 → 7 | `StringIO#write [c function]`                | `<unknown>` |
|  +54.9% |  +29.50ms | 0.3% → 0.5% |   53.8ms → 83.2ms |    5 → 21 | `Kernel#extend [c function]`                 | `<unknown>` |
|  +70.3% |  +25.94ms | 0.2% → 0.4% |   36.9ms → 62.8ms |     4 → 6 | `Integer#upto [c function]`                  | `<unknown>` |
|   +7.3% |  +25.88ms | 2.2% → 2.4% | 352.9ms → 378.8ms |   34 → 36 | `(unknown) [c function]`                     | `<unknown>` |
|  +63.9% |  +24.90ms | 0.2% → 0.4% |   39.0ms → 63.9ms |     4 → 6 | `Kernel#initialize_dup [c function]`         | `<unknown>` |
|     new |  +24.53ms | 0.0% → 0.2% |      0ms → 24.5ms |     0 → 2 | `Hash#each_pair [c function]`                | `<unknown>` |
| +187.4% |  +20.74ms | 0.1% → 0.2% |   11.1ms → 31.8ms |     1 → 3 | `Fiber.[] [c function]`                      | `<unknown>` |
|     new |  +20.17ms | 0.0% → 0.1% |      0ms → 20.2ms |     0 → 2 | `Nokogiri::XML::NodeSet#[] [c function]`     | `<unknown>` |
| +181.7% |  +20.10ms | 0.1% → 0.2% |   11.1ms → 31.2ms |     1 → 3 | `OpenSSL::HMAC#initialize [c function]`      | `<unknown>` |
| +203.0% |  +19.57ms | 0.1% → 0.2% |    9.6ms → 29.2ms |     1 → 3 | `Class#allocate [c function]`                | `<unknown>` |

##### Third-party

|  Change |     Delta |           % |              Time | Samples | Function                                                  | Location                                                                                                                        |
| ------: | --------: | ----------: | ----------------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| +799.3% | +492.36ms | 0.4% → 3.5% |  61.6ms → 554.0ms |  6 → 54 | `I18n::Backend::Fallbacks#extract_non_symbol_default!`    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
| +105.9% | +128.21ms | 0.8% → 1.6% | 121.1ms → 249.3ms | 12 → 28 | `Nokogiri::XML::Document#decorators`                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                    |
|  +57.2% |  +80.83ms | 0.9% → 1.4% | 141.2ms → 222.0ms | 14 → 28 | `Loofah::Scrubber#traverse_conditionally_bottom_up`       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                              |
|  +62.1% |  +69.49ms | 0.7% → 1.2% | 111.9ms → 181.3ms | 11 → 18 | `ActionView::OutputBuffer#<<`                             | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                                                     |
|  +49.1% |  +61.32ms | 0.8% → 1.2% | 124.9ms → 186.3ms | 12 → 18 | `Nokogiri::XML::NodeSet#each`                             | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
| +686.7% |  +54.20ms | 0.1% → 0.4% |    7.9ms → 62.1ms |   1 → 6 | `Nokogiri::XML::Node#to_format`                           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                        |
|  +74.3% |  +45.11ms | 0.4% → 0.7% |  60.7ms → 105.8ms |  6 → 10 | `block in each`                                           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                    |
| +169.1% |  +44.43ms | 0.2% → 0.5% |   26.3ms → 70.7ms |       3 | `Loofah::DocumentDecorator#initialize`                    | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                              |
|  +89.0% |  +34.09ms | 0.2% → 0.5% |   38.3ms → 72.4ms |   4 → 7 | `Concurrent::Collection::NonConcurrentMapBackend#[]`      | `../../usr/local/bundle/gems/concurrent-ruby-1.3.8/lib/concurrent-ruby/concurrent/collection/map/non_concurrent_map_backend.rb` |
| +150.5% |  +32.73ms | 0.1% → 0.3% |   21.7ms → 54.5ms |   1 → 5 | `block (2 levels) in decorate`                            | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                    |
|     new |  +30.32ms | 0.0% → 0.2% |      0ms → 30.3ms |   0 → 3 | `I18n.fallbacks`                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
|  +57.8% |  +28.58ms | 0.3% → 0.5% |   49.5ms → 78.1ms |   5 → 7 | `I18n::Config#available_locales_set`                      | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb`                                                                    |
|     new |  +25.33ms | 0.0% → 0.2% |      0ms → 25.3ms |   0 → 2 | `I18n::Backend::Fallbacks#translate`                      | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
|     new |  +22.16ms | 0.0% → 0.1% |      0ms → 22.2ms |   0 → 2 | `Loofah::HTML5::Scrub.force_correct_attribute_escaping!`  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                           |
|  +43.5% |  +22.03ms | 0.3% → 0.5% |   50.7ms → 72.7ms |   5 → 7 | `ActionView::OutputBuffer#safe_concat`                    | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                                                     |
|     new |  +21.72ms | 0.0% → 0.1% |      0ms → 21.7ms |   0 → 2 | `I18n::Backend::Simple::Implementation#lookup`            | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                                                            |
|     new |  +21.53ms | 0.0% → 0.1% |      0ms → 21.5ms |   0 → 2 | `ActionView::Helpers::NumberHelper#escape_unsafe_options` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb`                                       |
|  +19.9% |  +20.84ms | 0.7% → 0.8% | 104.7ms → 125.5ms | 10 → 13 | `Loofah::ScrubBehavior::Node#scrub!`                      | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                              |
|     new |  +20.81ms | 0.0% → 0.1% |      0ms → 20.8ms |   0 → 2 | `I18n::Utils.except`                                      | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/utils.rb`                                                                     |
|     new |  +20.78ms | 0.0% → 0.1% |      0ms → 20.8ms |   0 → 1 | `ActiveSupport::Messages::Rotator#initialize`             | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/messages/rotator.rb`                                      |

##### Ours

| Change |   Delta |           % |        Time | Samples | Function                                                                                | Location                            |
| -----: | ------: | ----------: | ----------: | ------: | --------------------------------------------------------------------------------------- | ----------------------------------- |
|    new | +8.67ms | 0.0% → 0.1% | 0ms → 8.7ms |   0 → 1 | `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` | `app/views/statuses/index.html.erb` |

##### Standard library

|  Change |    Delta |            % |           Time | Samples | Function                                    | Location                                             |
| ------: | -------: | -----------: | -------------: | ------: | ------------------------------------------- | ---------------------------------------------------- |
| +185.5% | +18.24ms |  0.1% → 0.2% | 9.8ms → 28.1ms |   1 → 3 | `Singleton::SingletonClassMethods#instance` | `../../usr/local/lib/ruby/3.4.0/singleton.rb`        |
|     new | +16.02ms |  0.0% → 0.1% |   0ms → 16.0ms |   0 → 2 | `Gem::Version.new`                          | `../../usr/local/lib/ruby/3.4.0/rubygems/version.rb` |
|     new |  +9.62ms |  0.0% → 0.1% |    0ms → 9.6ms |   0 → 1 | `Array#map`                                 | `<internal:array>`                                   |
|     new |  +8.94ms |  0.0% → 0.1% |    0ms → 8.9ms |   0 → 1 | `String#unpack`                             | `<internal:pack>`                                    |
|     new |  +6.09ms | 0.0% → <0.1% |    0ms → 6.1ms |   0 → 1 | `Random::Formatter#random_bytes`            | `../../usr/local/lib/ruby/3.4.0/random/formatter.rb` |
|  +56.7% |  +5.15ms |         0.1% | 9.1ms → 14.2ms |       1 | `Time#initialize`                           | `<internal:timev>`                                   |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |           % |              Time | Samples | Function                                                                 | Location                                                                                                 |
| ------: | --------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|  -59.9% | -206.37ms | 2.2% → 0.9% | 344.3ms → 137.9ms | 34 → 13 | `Kernel#dup [c function]`                                                | `<unknown>`                                                                                              |
|  -56.7% | -192.19ms | 2.2% → 0.9% | 339.0ms → 146.9ms | 33 → 15 | `String#gsub! [c function]`                                              | `<unknown>`                                                                                              |
|  -50.8% | -159.80ms | 2.0% → 1.0% | 314.4ms → 154.6ms | 31 → 15 | `Hash#merge [c function]`                                                | `<unknown>`                                                                                              |
|  -77.2% | -144.19ms | 1.2% → 0.3% |  186.8ms → 42.6ms |  20 → 4 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
|  -46.3% | -104.89ms | 1.4% → 0.8% | 226.4ms → 121.5ms | 22 → 12 | `String#split [c function]`                                              | `<unknown>`                                                                                              |
|  -26.4% | -101.03ms | 2.4% → 1.8% | 383.3ms → 282.3ms | 37 → 29 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` | `app/views/statuses/index.html.erb`                                                                      |
|  -19.9% |  -97.71ms | 3.1% → 2.5% | 490.3ms → 392.6ms | 48 → 38 | `Nokogiri::XML::Node#html_standard_serialize [c function]`               | `<unknown>`                                                                                              |
|  -72.6% |  -88.36ms | 0.8% → 0.2% |  121.6ms → 33.3ms |  12 → 3 | `String#initialize [c function]`                                         | `<unknown>`                                                                                              |
|  -53.3% |  -82.95ms | 1.0% → 0.5% |  155.6ms → 72.6ms |  15 → 7 | `Nokogiri::HTML5::Node#write_to`                                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`               |
|  -60.7% |  -80.77ms | 0.8% → 0.3% |  133.0ms → 52.3ms |  13 → 5 | `I18n::Backend::Base#translate`                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                       |
|  -34.8% |  -78.03ms | 1.4% → 0.9% | 224.5ms → 146.5ms | 22 → 14 | `String#encode [c function]`                                             | `<unknown>`                                                                                              |
| removed |  -74.38ms | 0.5% → 0.0% |      74.4ms → 0ms |   7 → 0 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                             | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
|  -14.3% |  -71.91ms | 3.2% → 2.7% | 502.8ms → 430.9ms | 50 → 42 | `Nokogiri::HTML4::Document.new [c function]`                             | `<unknown>`                                                                                              |
|  -58.9% |  -71.51ms | 0.8% → 0.3% |  121.5ms → 50.0ms |  12 → 5 | `Kernel#lambda [c function]`                                             | `<unknown>`                                                                                              |
|  -51.9% |  -70.34ms | 0.9% → 0.4% |  135.4ms → 65.1ms |  13 → 7 | `Nokogiri::HTML5::DocumentFragment#initialize`                           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`  |
|  -61.0% |  -69.80ms | 0.7% → 0.3% |  114.4ms → 44.6ms |  11 → 5 | `ERB::Util.html_escape [c function]`                                     | `<unknown>`                                                                                              |
|  -53.1% |  -64.69ms | 0.8% → 0.4% |  121.9ms → 57.2ms |  11 → 6 | `Enumerable#map [c function]`                                            | `<unknown>`                                                                                              |
| removed |  -64.59ms | 0.4% → 0.0% |      64.6ms → 0ms |   7 → 0 | `Rails::HTML::Concern::Scrubber::SafeList#scrub`                         | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                     |
|  -85.6% |  -63.34ms | 0.5% → 0.1% |   74.0ms → 10.7ms |   7 → 1 | `Kernel#BigDecimal [c function]`                                         | `<unknown>`                                                                                              |
|  -77.5% |  -62.39ms | 0.5% → 0.1% |   80.5ms → 18.1ms |   8 → 2 | `Enumerable#detect [c function]`                                         | `<unknown>`                                                                                              |

##### Native

|  Change |     Delta |           % |              Time | Samples | Function                                                   | Location    |
| ------: | --------: | ----------: | ----------------: | ------: | ---------------------------------------------------------- | ----------- |
|  -59.9% | -206.37ms | 2.2% → 0.9% | 344.3ms → 137.9ms | 34 → 13 | `Kernel#dup [c function]`                                  | `<unknown>` |
|  -56.7% | -192.19ms | 2.2% → 0.9% | 339.0ms → 146.9ms | 33 → 15 | `String#gsub! [c function]`                                | `<unknown>` |
|  -50.8% | -159.80ms | 2.0% → 1.0% | 314.4ms → 154.6ms | 31 → 15 | `Hash#merge [c function]`                                  | `<unknown>` |
|  -46.3% | -104.89ms | 1.4% → 0.8% | 226.4ms → 121.5ms | 22 → 12 | `String#split [c function]`                                | `<unknown>` |
|  -19.9% |  -97.71ms | 3.1% → 2.5% | 490.3ms → 392.6ms | 48 → 38 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
|  -72.6% |  -88.36ms | 0.8% → 0.2% |  121.6ms → 33.3ms |  12 → 3 | `String#initialize [c function]`                           | `<unknown>` |
|  -34.8% |  -78.03ms | 1.4% → 0.9% | 224.5ms → 146.5ms | 22 → 14 | `String#encode [c function]`                               | `<unknown>` |
|  -14.3% |  -71.91ms | 3.2% → 2.7% | 502.8ms → 430.9ms | 50 → 42 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
|  -58.9% |  -71.51ms | 0.8% → 0.3% |  121.5ms → 50.0ms |  12 → 5 | `Kernel#lambda [c function]`                               | `<unknown>` |
|  -61.0% |  -69.80ms | 0.7% → 0.3% |  114.4ms → 44.6ms |  11 → 5 | `ERB::Util.html_escape [c function]`                       | `<unknown>` |
|  -53.1% |  -64.69ms | 0.8% → 0.4% |  121.9ms → 57.2ms |  11 → 6 | `Enumerable#map [c function]`                              | `<unknown>` |
|  -85.6% |  -63.34ms | 0.5% → 0.1% |   74.0ms → 10.7ms |   7 → 1 | `Kernel#BigDecimal [c function]`                           | `<unknown>` |
|  -77.5% |  -62.39ms | 0.5% → 0.1% |   80.5ms → 18.1ms |   8 → 2 | `Enumerable#detect [c function]`                           | `<unknown>` |
|  -47.9% |  -58.12ms | 0.8% → 0.4% |  121.3ms → 63.1ms |  12 → 6 | `Array#join [c function]`                                  | `<unknown>` |
| removed |  -56.65ms | 0.4% → 0.0% |      56.6ms → 0ms |   6 → 0 | `Hash#delete [c function]`                                 | `<unknown>` |
|  -64.6% |  -54.28ms | 0.5% → 0.2% |   84.1ms → 29.8ms |   8 → 3 | `Hash#merge! [c function]`                                 | `<unknown>` |
|  -17.1% |  -53.59ms | 2.0% → 1.7% | 313.6ms → 260.0ms | 30 → 25 | `String#gsub [c function]`                                 | `<unknown>` |
|  -26.2% |  -52.45ms | 1.3% → 0.9% | 200.1ms → 147.7ms | 20 → 14 | `String.new [c function]`                                  | `<unknown>` |
|  -49.5% |  -51.20ms | 0.7% → 0.3% |  103.5ms → 52.3ms |  10 → 5 | `Hash#transform_keys [c function]`                         | `<unknown>` |
|  -50.8% |  -44.72ms | 0.6% → 0.3% |   87.9ms → 43.2ms |  10 → 5 | `Kernel.require [c function]`                              | `<unknown>` |

##### Third-party

|  Change |     Delta |           % |              Time | Samples | Function                                                           | Location                                                                                                 |
| ------: | --------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|  -77.2% | -144.19ms | 1.2% → 0.3% |  186.8ms → 42.6ms |  20 → 4 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
|  -53.3% |  -82.95ms | 1.0% → 0.5% |  155.6ms → 72.6ms |  15 → 7 | `Nokogiri::HTML5::Node#write_to`                                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`               |
|  -60.7% |  -80.77ms | 0.8% → 0.3% |  133.0ms → 52.3ms |  13 → 5 | `I18n::Backend::Base#translate`                                    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                       |
| removed |  -74.38ms | 0.5% → 0.0% |      74.4ms → 0ms |   7 → 0 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
|  -51.9% |  -70.34ms | 0.9% → 0.4% |  135.4ms → 65.1ms |  13 → 7 | `Nokogiri::HTML5::DocumentFragment#initialize`                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`  |
| removed |  -64.59ms | 0.4% → 0.0% |      64.6ms → 0ms |   7 → 0 | `Rails::HTML::Concern::Scrubber::SafeList#scrub`                   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                     |
|  -59.3% |  -61.84ms | 0.7% → 0.3% |  104.3ms → 42.5ms |  10 → 4 | `block in force_correct_attribute_escaping!`                       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
|  -16.4% |  -60.70ms | 2.4% → 2.0% | 370.7ms → 310.0ms | 36 → 30 | `block in decorate`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|  -43.0% |  -55.89ms | 0.8% → 0.5% |  129.9ms → 74.0ms |  13 → 7 | `block (2 levels) in translate`                                    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
|  -56.4% |  -52.79ms | 0.6% → 0.3% |   93.6ms → 40.8ms |   9 → 4 | `ActionView::Helpers::NumberHelper#number_with_delimiter`          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb`                |
|  -59.5% |  -48.44ms | 0.5% → 0.2% |   81.4ms → 32.9ms |   8 → 3 | `Nokogiri::XML::Node#cdata?`                                       | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |
|  -59.2% |  -44.88ms | 0.5% → 0.2% |   75.9ms → 31.0ms |   8 → 3 | `block in scrub!`                                                  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
| removed |  -44.10ms | 0.3% → 0.0% |      44.1ms → 0ms |   4 → 0 | `I18n::Base#normalize_key`                                         | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                    |
|  -58.7% |  -44.02ms | 0.5% → 0.2% |   75.0ms → 31.0ms |   7 → 3 | `Loofah::ScrubBehavior::NodeSet#scrub!`                            | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
|  -78.5% |  -42.26ms | 0.3% → 0.1% |   53.9ms → 11.6ms |   5 → 1 | `I18n::Config#default_separator`                                   | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb`                                             |
|  -32.1% |  -35.64ms | 0.7% → 0.5% |  111.1ms → 75.4ms |  11 → 7 | `Rails::HTML::PermitScrubber#skip_node?`                           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                     |
|  -78.6% |  -35.33ms | 0.3% → 0.1% |    45.0ms → 9.6ms |   5 → 1 | `Nokogiri::XML::Document#initialize`                               | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|  -39.4% |  -33.89ms | 0.5% → 0.3% |   86.0ms → 52.1ms |   9 → 5 | `Nokogiri::XML::Node#to_html`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |
|  -60.5% |  -33.78ms | 0.4% → 0.1% |   55.9ms → 22.1ms |   5 → 2 | `Loofah::HTML5::Scrub.scrub_css_attribute`                         | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
|  -77.5% |  -33.15ms | 0.3% → 0.1% |    42.8ms → 9.6ms |   4 → 1 | `Nokogiri::HTML5::Document#initialize`                             | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`           |

##### Ours

|  Change |     Delta |            % |              Time | Samples | Function                                                                 | Location                            |
| ------: | --------: | -----------: | ----------------: | ------: | ------------------------------------------------------------------------ | ----------------------------------- |
|  -26.4% | -101.03ms |  2.4% → 1.8% | 383.3ms → 282.3ms | 37 → 29 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112` | `app/views/statuses/index.html.erb` |
| removed |   -6.63ms | <0.1% → 0.0% |       6.6ms → 0ms |   1 → 0 | `<main>`                                                                 | `profile.rb`                        |

##### Standard library

|  Change |    Delta |           % |            Time | Samples | Function                                    | Location                                           |
| ------: | -------: | ----------: | --------------: | ------: | ------------------------------------------- | -------------------------------------------------- |
| removed | -14.57ms | 0.1% → 0.0% |    14.6ms → 0ms |   1 → 0 | `Hash#initialize`                           | `<internal:hash>`                                  |
|  -30.3% | -14.26ms | 0.3% → 0.2% | 47.1ms → 32.9ms |   5 → 3 | `Set#include?`                              | `../../usr/local/lib/ruby/3.4.0/set.rb`            |
| removed | -11.02ms | 0.1% → 0.0% |    11.0ms → 0ms |   1 → 0 | `MonitorMixin::ConditionVariable#broadcast` | `../../usr/local/lib/ruby/3.4.0/monitor.rb`        |
| removed | -10.97ms | 0.1% → 0.0% |    11.0ms → 0ms |   1 → 0 | `Dir.glob`                                  | `<internal:dir>`                                   |
| removed |  -9.91ms | 0.1% → 0.0% |     9.9ms → 0ms |   1 → 0 | `Dir.[]`                                    | `<internal:dir>`                                   |
| removed |  -8.70ms | 0.1% → 0.0% |     8.7ms → 0ms |   1 → 0 | `block (3 levels) in <class:Digest>`        | `../../usr/local/lib/ruby/3.4.0/openssl/digest.rb` |
|   -5.4% |  -4.83ms | 0.6% → 0.5% | 90.2ms → 85.3ms |  10 → 8 | `Array#each`                                | `<internal:array>`                                 |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |   Samples | Function                                                        | Location                                                                                        |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +217.5% |   +1.025s |   3.0% → 9.5% |   471.5ms → 1.49s |  46 → 152 | `Class#new [c function]`                                        | `<unknown>`                                                                                     |
|     new | +979.13ms |   0.0% → 6.2% |     0ms → 979.1ms |   0 → 102 | `ActionDispatch::Response.create`                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/response.rb`           |
|     new | +979.13ms |   0.0% → 6.2% |     0ms → 979.1ms |   0 → 102 | `ActionController::DefaultHeaders::ClassMethods#make_response!` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/default_headers.rb` |
| +179.0% | +457.54ms |   1.6% → 4.5% | 255.6ms → 713.1ms |   25 → 70 | `I18n::Backend::Fallbacks#extract_non_symbol_default!`          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                         |
|  +28.9% | +406.78ms |  9.0% → 11.6% |     1.40s → 1.81s | 137 → 173 | `I18n::Base#translate`                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                           |
|  +30.2% | +356.36ms |   7.5% → 9.8% |     1.17s → 1.53s | 114 → 147 | `I18n::Base#translate_key`                                      | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                           |
|  +30.4% | +355.36ms |   7.4% → 9.7% |     1.16s → 1.52s | 113 → 146 | `block in translate_key`                                        | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                           |
|  +11.0% | +348.54ms | 20.1% → 22.4% |     3.16s → 3.51s | 304 → 343 | `Loofah::ScrubBehavior::NodeSet#scrub!`                         | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                              |
|  +26.2% | +347.68ms |  8.4% → 10.7% |     1.32s → 1.67s | 127 → 157 | `Nokogiri::XML::Node#children [c function]`                     | `<unknown>`                                                                                     |
|  +29.7% | +346.58ms |   7.4% → 9.6% |     1.16s → 1.51s | 113 → 145 | `I18n::Backend::Fallbacks#translate`                            | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                         |
|  +28.7% | +345.44ms |   7.7% → 9.9% |     1.20s → 1.54s | 117 → 149 | `Kernel#catch [c function]`                                     | `<unknown>`                                                                                     |
|  +11.0% | +323.32ms | 18.7% → 20.7% |     2.93s → 3.25s | 281 → 318 | `Loofah::Scrubber#traverse_conditionally_bottom_up`             | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                              |
|  +11.0% | +323.32ms | 18.7% → 20.7% |     2.93s → 3.25s | 281 → 318 | `Loofah::Scrubber#traverse`                                     | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                              |
|  +21.3% | +280.38ms |  8.4% → 10.2% |     1.31s → 1.59s | 125 → 138 | `block (2 levels) in decorate`                                  | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`    |
|   +9.1% | +277.20ms | 19.3% → 21.1% |     3.03s → 3.31s | 292 → 324 | `block in scrub!`                                               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                              |
|  +14.2% | +276.78ms | 12.4% → 14.2% |     1.95s → 2.23s | 187 → 208 | `Hash#each [c function]`                                        | `<unknown>`                                                                                     |
|  +37.6% | +268.36ms |   4.5% → 6.3% | 713.9ms → 982.2ms |  75 → 104 | `Rack::ETag#digest_body`                                        | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                       |
|  +13.3% | +260.93ms | 12.5% → 14.2% |     1.96s → 2.22s | 188 → 206 | `Nokogiri::XML::Document#decorate`                              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`    |
|  +36.5% | +260.23ms |   4.5% → 6.2% | 713.9ms → 974.1ms |  75 → 103 | `block in digest_body`                                          | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                       |
|  +35.3% | +252.11ms |   4.5% → 6.2% | 713.9ms → 966.0ms |  75 → 102 | `Digest::Base#<< [c function]`                                  | `<unknown>`                                                                                     |

##### Native

|  Change |     Delta |             % |              Time |   Samples | Function                                           | Location    |
| ------: | --------: | ------------: | ----------------: | --------: | -------------------------------------------------- | ----------- |
| +217.5% |   +1.025s |   3.0% → 9.5% |   471.5ms → 1.49s |  46 → 152 | `Class#new [c function]`                           | `<unknown>` |
|  +26.2% | +347.68ms |  8.4% → 10.7% |     1.32s → 1.67s | 127 → 157 | `Nokogiri::XML::Node#children [c function]`        | `<unknown>` |
|  +28.7% | +345.44ms |   7.7% → 9.9% |     1.20s → 1.54s | 117 → 149 | `Kernel#catch [c function]`                        | `<unknown>` |
|  +14.2% | +276.78ms | 12.4% → 14.2% |     1.95s → 2.23s | 187 → 208 | `Hash#each [c function]`                           | `<unknown>` |
|  +35.3% | +252.11ms |   4.5% → 6.2% | 713.9ms → 966.0ms |  75 → 102 | `Digest::Base#<< [c function]`                     | `<unknown>` |
|  +18.3% | +239.25ms |   8.3% → 9.8% |     1.30s → 1.54s | 125 → 133 | `Kernel#extend [c function]`                       | `<unknown>` |
|  +16.9% | +209.45ms |   7.9% → 9.2% |     1.24s → 1.45s | 119 → 111 | `Module#extend_object [c function]`                | `<unknown>` |
| +134.7% | +130.96ms |   0.6% → 1.5% |  97.3ms → 228.2ms |    9 → 21 | `Hash#except [c function]`                         | `<unknown>` |
| +111.6% | +123.18ms |   0.7% → 1.5% | 110.4ms → 233.6ms |   10 → 22 | `Hash#fetch [c function]`                          | `<unknown>` |
|     new |  +98.71ms |   0.0% → 0.6% |      0ms → 98.7ms |    0 → 10 | `Array#flatten [c function]`                       | `<unknown>` |
|  +69.5% |  +85.58ms |   0.8% → 1.3% | 123.2ms → 208.8ms |   12 → 21 | `Nokogiri::XML::Node#node_name [c function]`       | `<unknown>` |
|  +37.2% |  +45.60ms |   0.8% → 1.1% | 122.5ms → 168.1ms |   12 → 17 | `Regexp#match? [c function]`                       | `<unknown>` |
| +339.9% |  +34.31ms |   0.1% → 0.3% |   10.1ms → 44.4ms |     1 → 4 | `Nokogiri::XML::Attr#value= [c function]`          | `<unknown>` |
|  +86.0% |  +33.93ms |   0.3% → 0.5% |   39.5ms → 73.4ms |     4 → 7 | `StringIO#write [c function]`                      | `<unknown>` |
|  +86.0% |  +33.93ms |   0.3% → 0.5% |   39.5ms → 73.4ms |     4 → 7 | `IO::generic_writable#<< [c function]`             | `<unknown>` |
|   +4.4% |  +32.26ms |   4.7% → 4.9% | 737.9ms → 770.2ms |   74 → 75 | `Nokogiri::HTML4::Document.new [c function]`       | `<unknown>` |
|   +5.3% |  +23.39ms |   2.8% → 2.9% | 438.6ms → 462.0ms |   42 → 44 | `Nokogiri::XML::Node#attribute_nodes [c function]` | `<unknown>` |
| +187.4% |  +20.74ms |   0.1% → 0.2% |   11.1ms → 31.8ms |     1 → 3 | `Fiber.[] [c function]`                            | `<unknown>` |
|     new |  +20.17ms |   0.0% → 0.1% |      0ms → 20.2ms |     0 → 2 | `Nokogiri::XML::NodeSet#[] [c function]`           | `<unknown>` |
| +181.7% |  +20.10ms |   0.1% → 0.2% |   11.1ms → 31.2ms |     1 → 3 | `OpenSSL::HMAC#initialize [c function]`            | `<unknown>` |

##### Third-party

|  Change |     Delta |             % |              Time |   Samples | Function                                                           | Location                                                                                                 |
| ------: | --------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|     new | +979.13ms |   0.0% → 6.2% |     0ms → 979.1ms |   0 → 102 | `ActionDispatch::Response.create`                                  | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/response.rb`                    |
|     new | +979.13ms |   0.0% → 6.2% |     0ms → 979.1ms |   0 → 102 | `ActionController::DefaultHeaders::ClassMethods#make_response!`    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/default_headers.rb`          |
| +179.0% | +457.54ms |   1.6% → 4.5% | 255.6ms → 713.1ms |   25 → 70 | `I18n::Backend::Fallbacks#extract_non_symbol_default!`             | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
|  +28.9% | +406.78ms |  9.0% → 11.6% |     1.40s → 1.81s | 137 → 173 | `I18n::Base#translate`                                             | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                    |
|  +30.2% | +356.36ms |   7.5% → 9.8% |     1.17s → 1.53s | 114 → 147 | `I18n::Base#translate_key`                                         | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                    |
|  +30.4% | +355.36ms |   7.4% → 9.7% |     1.16s → 1.52s | 113 → 146 | `block in translate_key`                                           | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                    |
|  +11.0% | +348.54ms | 20.1% → 22.4% |     3.16s → 3.51s | 304 → 343 | `Loofah::ScrubBehavior::NodeSet#scrub!`                            | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
|  +29.7% | +346.58ms |   7.4% → 9.6% |     1.16s → 1.51s | 113 → 145 | `I18n::Backend::Fallbacks#translate`                               | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
|  +11.0% | +323.32ms | 18.7% → 20.7% |     2.93s → 3.25s | 281 → 318 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                       |
|  +11.0% | +323.32ms | 18.7% → 20.7% |     2.93s → 3.25s | 281 → 318 | `Loofah::Scrubber#traverse`                                        | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                       |
|  +21.3% | +280.38ms |  8.4% → 10.2% |     1.31s → 1.59s | 125 → 138 | `block (2 levels) in decorate`                                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|   +9.1% | +277.20ms | 19.3% → 21.1% |     3.03s → 3.31s | 292 → 324 | `block in scrub!`                                                  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
|  +37.6% | +268.36ms |   4.5% → 6.3% | 713.9ms → 982.2ms |  75 → 104 | `Rack::ETag#digest_body`                                           | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                |
|  +13.3% | +260.93ms | 12.5% → 14.2% |     1.96s → 2.22s | 188 → 206 | `Nokogiri::XML::Document#decorate`                                 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|  +36.5% | +260.23ms |   4.5% → 6.2% | 713.9ms → 974.1ms |  75 → 103 | `block in digest_body`                                             | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                |
|  +13.6% | +237.42ms | 11.1% → 12.6% |     1.74s → 1.98s | 167 → 175 | `block in decorate`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
|  +12.8% | +219.23ms | 10.9% → 12.3% |     1.71s → 1.93s | 169 → 184 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
|   +9.2% | +175.21ms | 12.1% → 13.3% |     1.90s → 2.08s | 188 → 198 | `ActiveSupport::NumberHelper::NumberConverter#format_options`      | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
|   +4.3% | +164.80ms | 24.3% → 25.3% |     3.81s → 3.97s | 367 → 387 | `Loofah::ScrubBehavior::Node#scrub!`                               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
| +156.1% | +151.77ms |   0.6% → 1.6% |  97.3ms → 249.0ms |    9 → 23 | `I18n::Utils.except`                                               | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/utils.rb`                                              |

##### Ours

| Change |     Delta |           % |              Time | Samples | Function                                                                                    | Location                                 |
| -----: | --------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------- |
| +37.7% | +100.55ms | 1.7% → 2.3% | 266.7ms → 367.2ms | 25 → 35 | `#<Class:0xffff8e3458d0>#_app_views_layouts_application_html_erb__3919319499024941682_3144` | `app/views/layouts/application.html.erb` |
|    new |  +12.32ms | 0.0% → 0.1% |      0ms → 12.3ms |   0 → 1 | `block in <top (required)>`                                                                 | `config/environments/production.rb`      |

##### Standard library

|  Change |    Delta |            % |              Time | Samples | Function                                                     | Location                                                               |
| ------: | -------: | -----------: | ----------------: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| +617.6% | +47.49ms | <0.1% → 0.4% |    7.7ms → 55.2ms |   1 → 7 | `Kernel#tap`                                                 | `<internal:kernel>`                                                    |
|  +71.4% | +46.80ms |  0.4% → 0.7% |  65.6ms → 112.4ms |  6 → 11 | `Integer#times`                                              | `<internal:numeric>`                                                   |
|     new | +30.59ms |  0.0% → 0.2% |      0ms → 30.6ms |   0 → 3 | `Random::Formatter#urlsafe_base64`                           | `../../usr/local/lib/ruby/3.4.0/random/formatter.rb`                   |
|  +46.1% | +27.87ms |  0.4% → 0.6% |   60.5ms → 88.3ms |  6 → 10 | `Array#map`                                                  | `<internal:array>`                                                     |
| +181.7% | +20.10ms |  0.1% → 0.2% |   11.1ms → 31.2ms |   1 → 3 | `OpenSSL::HMAC.digest`                                       | `../../usr/local/lib/ruby/3.4.0/openssl/hmac.rb`                       |
| +185.5% | +18.24ms |  0.1% → 0.2% |    9.8ms → 28.1ms |   1 → 3 | `Singleton::SingletonClassMethods#instance`                  | `../../usr/local/lib/ruby/3.4.0/singleton.rb`                          |
|  +83.1% | +16.70ms |  0.1% → 0.2% |   20.1ms → 36.8ms |   2 → 4 | `Random::Formatter#random_bytes`                             | `../../usr/local/lib/ruby/3.4.0/random/formatter.rb`                   |
|   +3.9% | +14.33ms |  2.4% → 2.5% | 370.7ms → 385.0ms | 37 → 38 | `block (2 levels) in replace_require`                        | `../../usr/local/lib/ruby/3.4.0/bundled_gems.rb`                       |
|     new | +12.07ms |  0.0% → 0.1% |      0ms → 12.1ms |   0 → 1 | `Bundler::SelfManager#lockfile_version`                      | `../../usr/local/lib/ruby/3.4.0/bundler/self_manager.rb`               |
|     new | +12.07ms |  0.0% → 0.1% |      0ms → 12.1ms |   0 → 1 | `Bundler::SelfManager#autoswitching_applies?`                | `../../usr/local/lib/ruby/3.4.0/bundler/self_manager.rb`               |
|     new | +12.07ms |  0.0% → 0.1% |      0ms → 12.1ms |   0 → 1 | `Bundler::SelfManager#needs_switching?`                      | `../../usr/local/lib/ruby/3.4.0/bundler/self_manager.rb`               |
|     new | +12.07ms |  0.0% → 0.1% |      0ms → 12.1ms |   0 → 1 | `Bundler::SelfManager#restart_with_locked_bundler_if_needed` | `../../usr/local/lib/ruby/3.4.0/bundler/self_manager.rb`               |
|     new | +12.07ms |  0.0% → 0.1% |      0ms → 12.1ms |   0 → 1 | `Bundler.auto_switch`                                        | `../../usr/local/lib/ruby/3.4.0/bundler.rb`                            |
|     new | +10.46ms |  0.0% → 0.1% |      0ms → 10.5ms |   0 → 1 | `block in <module:URI>`                                      | `../../usr/local/lib/ruby/3.4.0/rubygems/vendor/uri/lib/uri/common.rb` |
|     new |  +9.99ms |  0.0% → 0.1% |      0ms → 10.0ms |   0 → 1 | `Bundler.load`                                               | `../../usr/local/lib/ruby/3.4.0/bundler.rb`                            |
|     new |  +9.50ms |  0.0% → 0.1% |       0ms → 9.5ms |   0 → 1 | `Bundler::UI::Shell#initialize`                              | `../../usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb`                   |
|     new |  +8.94ms |  0.0% → 0.1% |       0ms → 8.9ms |   0 → 1 | `String#unpack`                                              | `<internal:pack>`                                                      |
| +105.5% |  +8.23ms | <0.1% → 0.1% |    7.8ms → 16.0ms |   1 → 2 | `Gem::Version.new`                                           | `../../usr/local/lib/ruby/3.4.0/rubygems/version.rb`                   |
|     new |  +7.39ms | 0.0% → <0.1% |       0ms → 7.4ms |   0 → 1 | `Bundler::LazySpecification#choose_compatible`               | `../../usr/local/lib/ruby/3.4.0/bundler/lazy_specification.rb`         |
|     new |  +7.39ms | 0.0% → <0.1% |       0ms → 7.4ms |   0 → 1 | `block in materialize_for_installation`                      | `../../usr/local/lib/ruby/3.4.0/bundler/lazy_specification.rb`         |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |   Delta |             % |            Time |       Samples | Function                                                                                | Location                                                                                              |
| -----: | ------: | ------------: | --------------: | ------------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| -10.9% | -1.443s | 84.0% → 74.9% | 13.20s → 11.76s | 1,294 → 1,142 | `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` | `app/views/statuses/index.html.erb`                                                                   |
| -10.9% | -1.440s | 84.3% → 75.2% | 13.24s → 11.80s | 1,298 → 1,147 | `block in render_template`                                                              | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`        |
| -10.8% | -1.429s | 83.9% → 74.9% | 13.18s → 11.75s | 1,292 → 1,141 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112`                | `app/views/statuses/index.html.erb`                                                                   |
| -10.8% | -1.427s | 84.1% → 75.1% | 13.21s → 11.78s | 1,295 → 1,145 | `block (2 levels) in render_template`                                                   | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`        |
|  -9.9% | -1.362s | 87.6% → 79.0% | 13.75s → 12.39s | 1,348 → 1,203 | `AbstractController::Base#process_action`                                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/base.rb`                      |
|  -9.9% | -1.362s | 87.6% → 79.0% | 13.75s → 12.39s | 1,348 → 1,203 | `ActionController::Rendering#process_action`                                            | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`             |
|  -9.9% | -1.362s | 87.6% → 79.0% | 13.75s → 12.39s | 1,348 → 1,203 | `block in process_action`                                                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`                 |
|  -9.8% | -1.355s | 87.8% → 79.3% | 13.79s → 12.44s | 1,352 → 1,209 | `ActiveSupport::Notifications.instrument`                                               | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`               |
|  -9.8% | -1.351s | 87.5% → 79.0% | 13.74s → 12.39s | 1,347 → 1,203 | `ActionController::ImplicitRender#default_render`                                       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/implicit_render.rb`       |
|  -9.8% | -1.351s | 87.5% → 79.0% | 13.74s → 12.39s | 1,347 → 1,203 | `ActionController::BasicImplicitRender#send_action`                                     | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/basic_implicit_render.rb` |
|  -9.8% | -1.349s | 87.7% → 79.2% | 13.77s → 12.42s | 1,350 → 1,207 | `AbstractController::Callbacks#process_action`                                          | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`                 |
|  -9.8% | -1.349s | 87.7% → 79.2% | 13.77s → 12.42s | 1,350 → 1,207 | `ActionController::Rescue#process_action`                                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rescue.rb`                |
|  -9.8% | -1.349s | 87.7% → 79.2% | 13.77s → 12.42s | 1,350 → 1,207 | `block in process_action`                                                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
|  -9.7% | -1.345s | 88.3% → 79.8% | 13.86s → 12.52s | 1,359 → 1,218 | `ActionController::Metal#dispatch`                                                      | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal.rb`                       |
|  -9.7% | -1.344s | 88.3% → 79.8% | 13.87s → 12.53s | 1,360 → 1,219 | `ActionController::Metal.dispatch`                                                      | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal.rb`                       |
|  -9.7% | -1.344s | 88.3% → 79.8% | 13.87s → 12.53s | 1,360 → 1,219 | `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch`                                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`             |
| -10.0% | -1.342s | 85.7% → 77.3% | 13.47s → 12.12s | 1,319 → 1,177 | `Kernel#public_send [c function]`                                                       | `<unknown>`                                                                                           |
| -10.0% | -1.342s | 85.7% → 77.3% | 13.47s → 12.12s | 1,319 → 1,177 | `ActionView::Base#_run`                                                                 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/base.rb`                              |
|  -9.8% | -1.338s | 87.3% → 78.8% | 13.71s → 12.37s | 1,344 → 1,201 | `AbstractController::Rendering#render`                                                  | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/rendering.rb`                 |
|  -9.8% | -1.338s | 87.3% → 78.8% | 13.71s → 12.37s | 1,344 → 1,201 | `ActionController::Rendering#render`                                                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`             |

##### Native

|  Change |     Delta |             % |              Time |       Samples | Function                                                   | Location    |
| ------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------------------------- | ----------- |
|  -10.0% |   -1.342s | 85.7% → 77.3% |   13.47s → 12.12s | 1,319 → 1,177 | `Kernel#public_send [c function]`                          | `<unknown>` |
|  -22.6% | -389.71ms |  11.0% → 8.5% |     1.72s → 1.33s |     167 → 130 | `Enumerable#map [c function]`                              | `<unknown>` |
|  -17.8% | -369.63ms | 13.2% → 10.9% |     2.07s → 1.70s |     204 → 165 | `(unknown) [c function]`                                   | `<unknown>` |
|  -49.3% | -205.13ms |   2.6% → 1.3% | 415.9ms → 210.7ms |       41 → 20 | `Kernel#dup [c function]`                                  | `<unknown>` |
|  -56.7% | -192.19ms |   2.2% → 0.9% | 339.0ms → 146.9ms |       33 → 15 | `String#gsub! [c function]`                                | `<unknown>` |
|  -50.8% | -159.80ms |   2.0% → 1.0% | 314.4ms → 154.6ms |       31 → 15 | `Hash#merge [c function]`                                  | `<unknown>` |
|  -40.4% | -137.26ms |   2.2% → 1.3% | 339.5ms → 202.3ms |       34 → 19 | `String.new [c function]`                                  | `<unknown>` |
|  -15.2% | -127.05ms |   5.3% → 4.5% | 834.4ms → 707.3ms |       85 → 67 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
|  -70.3% | -122.21ms |   1.1% → 0.3% |  173.8ms → 51.6ms |        17 → 5 | `Enumerable#detect [c function]`                           | `<unknown>` |
|  -46.3% | -104.89ms |   1.4% → 0.8% | 226.4ms → 121.5ms |       22 → 12 | `String#split [c function]`                                | `<unknown>` |
|  -42.2% | -104.24ms |   1.6% → 0.9% | 247.1ms → 142.9ms |       25 → 14 | `Nokogiri::XML::Node#internal_subset [c function]`         | `<unknown>` |
|  -19.9% |  -97.71ms |   3.1% → 2.5% | 490.3ms → 392.6ms |       48 → 38 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
|  -72.6% |  -88.36ms |   0.8% → 0.2% |  121.6ms → 33.3ms |        12 → 3 | `String#initialize [c function]`                           | `<unknown>` |
|  -34.8% |  -78.03ms |   1.4% → 0.9% | 224.5ms → 146.5ms |       22 → 14 | `String#encode [c function]`                               | `<unknown>` |
|  -58.9% |  -71.51ms |   0.8% → 0.3% |  121.5ms → 50.0ms |        12 → 5 | `Kernel#lambda [c function]`                               | `<unknown>` |
|  -61.0% |  -69.80ms |   0.7% → 0.3% |  114.4ms → 44.6ms |        11 → 5 | `ERB::Util.html_escape [c function]`                       | `<unknown>` |
|  -85.6% |  -63.34ms |   0.5% → 0.1% |   74.0ms → 10.7ms |         7 → 1 | `Kernel#BigDecimal [c function]`                           | `<unknown>` |
|  -47.9% |  -58.12ms |   0.8% → 0.4% |  121.3ms → 63.1ms |        12 → 6 | `Array#join [c function]`                                  | `<unknown>` |
| removed |  -56.65ms |   0.4% → 0.0% |      56.6ms → 0ms |         6 → 0 | `Hash#delete [c function]`                                 | `<unknown>` |
|  -49.7% |  -55.26ms |   0.7% → 0.4% |  111.2ms → 56.0ms |        12 → 6 | `Enumerable#each_with_object [c function]`                 | `<unknown>` |

##### Third-party

| Change |   Delta |             % |            Time |       Samples | Function                                                 | Location                                                                                              |
| -----: | ------: | ------------: | --------------: | ------------: | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| -10.9% | -1.440s | 84.3% → 75.2% | 13.24s → 11.80s | 1,298 → 1,147 | `block in render_template`                               | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`        |
| -10.8% | -1.427s | 84.1% → 75.1% | 13.21s → 11.78s | 1,295 → 1,145 | `block (2 levels) in render_template`                    | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`        |
|  -9.9% | -1.362s | 87.6% → 79.0% | 13.75s → 12.39s | 1,348 → 1,203 | `AbstractController::Base#process_action`                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/base.rb`                      |
|  -9.9% | -1.362s | 87.6% → 79.0% | 13.75s → 12.39s | 1,348 → 1,203 | `ActionController::Rendering#process_action`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`             |
|  -9.9% | -1.362s | 87.6% → 79.0% | 13.75s → 12.39s | 1,348 → 1,203 | `block in process_action`                                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`                 |
|  -9.8% | -1.355s | 87.8% → 79.3% | 13.79s → 12.44s | 1,352 → 1,209 | `ActiveSupport::Notifications.instrument`                | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`               |
|  -9.8% | -1.351s | 87.5% → 79.0% | 13.74s → 12.39s | 1,347 → 1,203 | `ActionController::ImplicitRender#default_render`        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/implicit_render.rb`       |
|  -9.8% | -1.351s | 87.5% → 79.0% | 13.74s → 12.39s | 1,347 → 1,203 | `ActionController::BasicImplicitRender#send_action`      | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/basic_implicit_render.rb` |
|  -9.8% | -1.349s | 87.7% → 79.2% | 13.77s → 12.42s | 1,350 → 1,207 | `AbstractController::Callbacks#process_action`           | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`                 |
|  -9.8% | -1.349s | 87.7% → 79.2% | 13.77s → 12.42s | 1,350 → 1,207 | `ActionController::Rescue#process_action`                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rescue.rb`                |
|  -9.8% | -1.349s | 87.7% → 79.2% | 13.77s → 12.42s | 1,350 → 1,207 | `block in process_action`                                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
|  -9.7% | -1.345s | 88.3% → 79.8% | 13.86s → 12.52s | 1,359 → 1,218 | `ActionController::Metal#dispatch`                       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal.rb`                       |
|  -9.7% | -1.344s | 88.3% → 79.8% | 13.87s → 12.53s | 1,360 → 1,219 | `ActionController::Metal.dispatch`                       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal.rb`                       |
|  -9.7% | -1.344s | 88.3% → 79.8% | 13.87s → 12.53s | 1,360 → 1,219 | `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`             |
| -10.0% | -1.342s | 85.7% → 77.3% | 13.47s → 12.12s | 1,319 → 1,177 | `ActionView::Base#_run`                                  | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/base.rb`                              |
|  -9.8% | -1.338s | 87.3% → 78.8% | 13.71s → 12.37s | 1,344 → 1,201 | `AbstractController::Rendering#render`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/rendering.rb`                 |
|  -9.8% | -1.338s | 87.3% → 78.8% | 13.71s → 12.37s | 1,344 → 1,201 | `ActionController::Rendering#render`                     | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`             |
|  -9.8% | -1.338s | 87.3% → 78.8% | 13.71s → 12.37s | 1,344 → 1,201 | `block (2 levels) in render`                             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |
|  -9.8% | -1.338s | 87.3% → 78.8% | 13.71s → 12.37s | 1,344 → 1,201 | `ActiveSupport::Benchmark.realtime`                      | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/benchmark.rb`                   |
|  -9.8% | -1.338s | 87.3% → 78.8% | 13.71s → 12.37s | 1,344 → 1,201 | `block in render`                                        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`       |

##### Ours

| Change |    Delta |             % |              Time |       Samples | Function                                                                                | Location                            |
| -----: | -------: | ------------: | ----------------: | ------------: | --------------------------------------------------------------------------------------- | ----------------------------------- |
| -10.9% |  -1.443s | 84.0% → 74.9% |   13.20s → 11.76s | 1,294 → 1,142 | `#<Class:0xffff8e3458d0>#_app_views_statuses_index_html_erb___2193380913002583348_3112` | `app/views/statuses/index.html.erb` |
| -10.8% |  -1.429s | 83.9% → 74.9% |   13.18s → 11.75s | 1,292 → 1,141 | `block in _app_views_statuses_index_html_erb___2193380913002583348_3112`                | `app/views/statuses/index.html.erb` |
| -13.8% | -20.37ms |   0.9% → 0.8% | 147.6ms → 127.2ms |       14 → 13 | `block (2 levels) in _app_views_statuses_index_html_erb___2193380913002583348_3112`     | `app/views/statuses/index.html.erb` |
|  -0.1% | -12.48ms |        100.0% |   15.71s → 15.69s |         1,550 | `<main>`                                                                                | `profile.rb`                        |
| -14.8% |  -1.82ms |          0.1% |   12.3ms → 10.5ms |             1 | `<compiled>`                                                                            | `Gemfile`                           |

##### Standard library

|  Change |     Delta |             % |            Time |       Samples | Function                                     | Location                                                                       |
| ------: | --------: | ------------: | --------------: | ------------: | -------------------------------------------- | ------------------------------------------------------------------------------ |
|   -1.0% | -141.79ms | 93.6% → 92.8% | 14.70s → 14.56s | 1,448 → 1,433 | `Array#each`                                 | `<internal:array>`                                                             |
| removed |  -14.57ms |   0.1% → 0.0% |    14.6ms → 0ms |         1 → 0 | `Hash#initialize`                            | `<internal:hash>`                                                              |
| removed |  -14.57ms |   0.1% → 0.0% |    14.6ms → 0ms |         1 → 0 | `Bundler::Plugin.reset!`                     | `../../usr/local/lib/ruby/3.4.0/bundler/plugin.rb`                             |
|  -30.3% |  -14.26ms |   0.3% → 0.2% | 47.1ms → 32.9ms |         5 → 3 | `Set#include?`                               | `../../usr/local/lib/ruby/3.4.0/set.rb`                                        |
| removed |  -13.97ms |   0.1% → 0.0% |    14.0ms → 0ms |         1 → 0 | `Forwardable._compile_method`                | `../../usr/local/lib/ruby/3.4.0/forwardable/impl.rb`                           |
| removed |  -13.97ms |   0.1% → 0.0% |    14.0ms → 0ms |         1 → 0 | `Forwardable._delegator_method`              | `../../usr/local/lib/ruby/3.4.0/forwardable.rb`                                |
| removed |  -13.97ms |   0.1% → 0.0% |    14.0ms → 0ms |         1 → 0 | `Forwardable#def_instance_delegator`         | `../../usr/local/lib/ruby/3.4.0/forwardable.rb`                                |
| removed |  -13.97ms |   0.1% → 0.0% |    14.0ms → 0ms |         1 → 0 | `block in def_instance_delegators`           | `../../usr/local/lib/ruby/3.4.0/forwardable.rb`                                |
|  -32.7% |  -13.53ms |   0.3% → 0.2% | 41.4ms → 27.8ms |         4 → 3 | `Bundler.setup`                              | `../../usr/local/lib/ruby/3.4.0/bundler.rb`                                    |
|  -32.7% |  -13.53ms |   0.3% → 0.2% | 41.4ms → 27.8ms |         4 → 3 | `block in <top (required)>`                  | `../../usr/local/lib/ruby/3.4.0/bundler/setup.rb`                              |
|  -32.7% |  -13.53ms |   0.3% → 0.2% | 41.4ms → 27.8ms |         4 → 3 | `Bundler::UI::Shell#with_level`              | `../../usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb`                           |
|  -32.7% |  -13.53ms |   0.3% → 0.2% | 41.4ms → 27.8ms |         4 → 3 | `Bundler::UI::Shell#silence`                 | `../../usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb`                           |
|  -64.6% |  -13.48ms |  0.1% → <0.1% |  20.9ms → 7.4ms |         2 → 1 | `Bundler::Runtime#setup`                     | `../../usr/local/lib/ruby/3.4.0/bundler/runtime.rb`                            |
|  -17.2% |  -12.65ms |   0.5% → 0.4% | 73.7ms → 61.1ms |         7 → 6 | `Kernel#require`                             | `<internal:/usr/local/lib/ruby/3.4.0/rubygems/core_ext/kernel_require.rb>`     |
| removed |  -12.28ms |   0.1% → 0.0% |    12.3ms → 0ms |         1 → 0 | `Gem::URI::RFC2396_Parser#initialize_regexp` | `../../usr/local/lib/ruby/3.4.0/rubygems/vendor/uri/lib/uri/rfc2396_parser.rb` |
| removed |  -12.28ms |   0.1% → 0.0% |    12.3ms → 0ms |         1 → 0 | `Gem::URI::RFC2396_Parser#initialize`        | `../../usr/local/lib/ruby/3.4.0/rubygems/vendor/uri/lib/uri/rfc2396_parser.rb` |
| removed |  -11.31ms |   0.1% → 0.0% |    11.3ms → 0ms |         1 → 0 | `Array#select`                               | `<internal:array>`                                                             |
| removed |  -11.02ms |   0.1% → 0.0% |    11.0ms → 0ms |         1 → 0 | `MonitorMixin::ConditionVariable#broadcast`  | `../../usr/local/lib/ruby/3.4.0/monitor.rb`                                    |
| removed |  -10.99ms |   0.1% → 0.0% |    11.0ms → 0ms |         1 → 0 | `Random::Formatter#uuid`                     | `../../usr/local/lib/ruby/3.4.0/random/formatter.rb`                           |
| removed |  -10.97ms |   0.1% → 0.0% |    11.0ms → 0ms |         1 → 0 | `Dir.glob`                                   | `<internal:dir>`                                                               |

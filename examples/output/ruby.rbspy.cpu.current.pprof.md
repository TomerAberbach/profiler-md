# Wall time profile

Took 15.77s over 1,555 samples (10.1ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Native           | 61.4% |   9.68s |     956 |
| Third-party      | 34.7% |   5.47s |     540 |
| Ours             |  2.1% | 339.0ms |      34 |
| Standard library |  1.7% | 269.2ms |      25 |

Paths starting with `./` or `../` are relative to `/src/app/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 15.75s (99.9%) <main> at profile.rb
    ├── … 14.91s (94.6%) ActionDispatch::Static#call at /usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb
    │   ├── … 14.78s (93.8%) ActiveSupport::Callbacks#run_callbacks at /usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb
    │   │   ├── … 13.65s (86.6%) ActionView::Rendering#render_to_body at /usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb
    │   │   │   └── … 13.56s (86.0%) ActiveSupport::Notifications.instrument at /usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb
    │   │   │       └── … 13.48s (85.5%) Kernel#public_send [c function]
    │   │   │           ├── 10.50s (66.6%) #<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128 at ./app/views/statuses/index.html.erb
    │   │   │           │   └── 10.48s (66.5%) Array#each at <internal:array>
    │   │   │           │       ├── 7.58s (48.1%, self 2.1%) block in _app_views_statuses_index_html_erb__328993190567029661_3128 at ./app/views/statuses/index.html.erb
    │   │   │           │       │   ├── 5.84s (37.1%) ActionView::Helpers::SanitizeHelper#sanitize at /usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb
    │   │   │           │       │   │   └── 5.79s (36.7%) Rails::HTML::Concern::ComposedSanitize#sanitize at /usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb
    │   │   │           │       │   │       ├── … 1.85s (11.8%) Loofah::HtmlFragmentBehavior::ClassMethods#parse at /usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb
    │   │   │           │       │   │       │   ├── 1.22s (7.8%, self 0.6%) Nokogiri::XML::DocumentFragment.new at /usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb
    │   │   │           │       │   │       │   │   ├── 993.4ms (6.3%, self 0.7%) Nokogiri::HTML5::DocumentFragment#initialize at /usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb
    │   │   │           │       │   │       │   │   │   └── 864.5ms (5.5%, self 4.8%) Nokogiri::Gumbo.fragment [c function]
    │   │   │           │       │   │       │   │   │       └── 102.0ms (0.6%) Nokogiri::XML::Node#internal_subset [c function] …
    │   │   │           │       │   │       │   │   └── … 72.9ms (0.5%, self 1.4% globally) block in decorate at /usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb
    │   │   │           │       │   │       │   └── 593.6ms (3.8%, self 2.5%) Nokogiri::HTML4::Document.new [c function]
    │   │   │           │       │   │       │       └── 192.3ms (1.2%) Loofah::DocumentDecorator#initialize at /usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb …
    │   │   │           │       │   │       └── 3.91s (24.8%) 2 more callees, led by (13.8%) Rails::HTML::Concern::Serializer::UTF8Encode#serialize
    │   │   │           │       │   └── 1.40s (8.9%) 6 more callees, led by (2.8%) block in define_url_helper at /usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb
    │   │   │           │       ├── … 1.28s (8.1%) Module#extend_object [c function]
    │   │   │           │       ├── … 979.2ms (6.2%, self 0.5%) block in scrub_attributes at /usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb
    │   │   │           │       │   └── 838.1ms (5.3%, self 0.5%) Rails::HTML::PermitScrubber#scrub_attribute
    │   │   │           │       │       ├── 592.1ms (3.8%) Loofah::HTML5::Scrub.scrub_uri_attribute at /usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb
    │   │   │           │       │       │   ├── 180.1ms (1.1%) Loofah::HTML5::Scrub.allowed_uri?
    │   │   │           │       │       │   │   └── 180.1ms (1.1%, self 2.1% globally) String#gsub [c function]
    │   │   │           │       │       │   └── 391.6ms (2.5%) 10 more callees, led by (1.0%) String#gsub! [c function]
    │   │   │           │       │       └── 164.6ms (1.0%) 4 more callees, led by (0.5%) Loofah::HTML5::Scrub.force_correct_attribute_escaping! at /usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb
    │   │   │           │       └── 518.4ms (3.3%) 4 more callees, led by (1.5%) block in force_correct_attribute_escaping! at /usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb
    │   │   │           ├── … 2.53s (16.0%) ActiveSupport::NumberHelper#number_to_delimited at /usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb
    │   │   │           │   └── 2.52s (16.0%) ActiveSupport::NumberHelper::NumberConverter.convert at /usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb …
    │   │   │           └── 411.7ms (2.6%) #<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160 at ./app/views/layouts/application.html.erb …
    │   │   └── … 968.0ms (6.1%) Rack::Session::Abstract::Persisted#context at /usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb
    │   │       ├── … 835.3ms (5.3%) Rack::ETag#call at /usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb
    │   │       │   ├── … 604.7ms (3.8%) Digest::Base#<< [c function]
    │   │       │   └── 230.6ms (1.5%) 3 more callees, led by (1.3%) Rack::TempfileReaper#call at /usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb
    │   │       └── 106.4ms (0.7%) ActionDispatch::Session::SessionObject#commit_session at /usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/abstract_store.rb …
    │   └── 80.9ms (0.5%) ActionDispatch::FileHandler#attempt
    └── 781.0ms (5.0%) 3 more callees, led by (4.8%) Kernel#require_relative [c function]
```

## Hottest functions

### Self time

Functions with the most wall time spent within the function body, excluding callees.

|    % |    Time | Samples | Function                                                               | Location                                                                                                       |
| ---: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 8.2% |   1.29s |     126 | `Module#extend_object [c function]`                                    | `<unknown>`                                                                                                    |
| 4.8% | 762.5ms |      74 | `Nokogiri::Gumbo.fragment [c function]`                                | `<unknown>`                                                                                                    |
| 3.8% | 604.7ms |      67 | `Digest::Base#<< [c function]`                                         | `<unknown>`                                                                                                    |
| 2.7% | 427.4ms |      41 | `Nokogiri::XML::Node#html_standard_serialize [c function]`             | `<unknown>`                                                                                                    |
| 2.5% | 401.3ms |      39 | `Nokogiri::HTML4::Document.new [c function]`                           | `<unknown>`                                                                                                    |
| 2.4% | 378.3ms |      37 | `(unknown) [c function]`                                               | `<unknown>`                                                                                                    |
| 2.2% | 341.6ms |      34 | `Hash#merge [c function]`                                              | `<unknown>`                                                                                                    |
| 2.1% | 339.0ms |      34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `./app/views/statuses/index.html.erb`                                                                          |
| 2.1% | 332.9ms |      33 | `String#gsub [c function]`                                             | `<unknown>`                                                                                                    |
| 1.8% | 284.6ms |      28 | `String#encode [c function]`                                           | `<unknown>`                                                                                                    |
| 1.7% | 261.5ms |      26 | `String.new [c function]`                                              | `<unknown>`                                                                                                    |
| 1.6% | 257.2ms |      25 | `Kernel#dup [c function]`                                              | `<unknown>`                                                                                                    |
| 1.4% | 219.6ms |      22 | `Nokogiri::XML::Node#children [c function]`                            | `<unknown>`                                                                                                    |
| 1.4% | 218.2ms |      22 | `Nokogiri::XML::NodeSet#each`                                          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
| 1.4% | 216.8ms |      21 | `block in decorate`                                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
| 1.3% | 203.8ms |      20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`     | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| 1.3% | 199.2ms |      19 | `Nokogiri::XML::Node#node_name [c function]`                           | `<unknown>`                                                                                                    |
| 1.2% | 194.7ms |      19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`        | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| 1.2% | 190.2ms |      19 | `Regexp#match? [c function]`                                           | `<unknown>`                                                                                                    |
| 1.2% | 182.6ms |      18 | `String#gsub! [c function]`                                            | `<unknown>`                                                                                                    |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Native

|    % |    Time | Samples | Function                                                   | Location    |
| ---: | ------: | ------: | ---------------------------------------------------------- | ----------- |
| 8.2% |   1.29s |     126 | `Module#extend_object [c function]`                        | `<unknown>` |
| 4.8% | 762.5ms |      74 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| 3.8% | 604.7ms |      67 | `Digest::Base#<< [c function]`                             | `<unknown>` |
| 2.7% | 427.4ms |      41 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 2.5% | 401.3ms |      39 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
| 2.4% | 378.3ms |      37 | `(unknown) [c function]`                                   | `<unknown>` |
| 2.2% | 341.6ms |      34 | `Hash#merge [c function]`                                  | `<unknown>` |
| 2.1% | 332.9ms |      33 | `String#gsub [c function]`                                 | `<unknown>` |
| 1.8% | 284.6ms |      28 | `String#encode [c function]`                               | `<unknown>` |
| 1.7% | 261.5ms |      26 | `String.new [c function]`                                  | `<unknown>` |
| 1.6% | 257.2ms |      25 | `Kernel#dup [c function]`                                  | `<unknown>` |
| 1.4% | 219.6ms |      22 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
| 1.3% | 199.2ms |      19 | `Nokogiri::XML::Node#node_name [c function]`               | `<unknown>` |
| 1.2% | 190.2ms |      19 | `Regexp#match? [c function]`                               | `<unknown>` |
| 1.2% | 182.6ms |      18 | `String#gsub! [c function]`                                | `<unknown>` |
| 1.1% | 174.2ms |      17 | `Hash#transform_keys [c function]`                         | `<unknown>` |
| 1.1% | 170.9ms |      17 | `Array#join [c function]`                                  | `<unknown>` |
| 0.9% | 137.1ms |      14 | `Class#new [c function]`                                   | `<unknown>` |
| 0.8% | 132.6ms |      13 | `Kernel.require [c function]`                              | `<unknown>` |
| 0.7% | 111.4ms |      11 | `Hash#each [c function]`                                   | `<unknown>` |

##### Third-party

|    % |    Time | Samples | Function                                                           | Location                                                                                                       |
| ---: | ------: | ------: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| 1.4% | 218.2ms |      22 | `Nokogiri::XML::NodeSet#each`                                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
| 1.4% | 216.8ms |      21 | `block in decorate`                                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
| 1.3% | 203.8ms |      20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| 1.2% | 194.7ms |      19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| 1.0% | 160.4ms |      16 | `ActionView::OutputBuffer#<<`                                      | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                                           |
| 1.0% | 152.3ms |      16 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                  |
| 0.8% | 123.7ms |      12 | `Nokogiri::XML::Document#decorate`                                 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
| 0.8% | 123.3ms |      12 | `Nokogiri::HTML5::Node#write_to`                                   | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`                          |
| 0.7% | 118.3ms |      11 | `Nokogiri::HTML5::DocumentFragment#initialize`                     | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`             |
| 0.7% | 105.2ms |      10 | `ActionView::Helpers::NumberHelper#number_with_delimiter`          | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| 0.6% | 101.6ms |      10 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                       | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |
| 0.6% |  97.4ms |      10 | `Nokogiri::XML::Document#decorators`                               | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
| 0.6% |  92.0ms |       9 | `Nokogiri::XML::DocumentFragment.new`                              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`               |
| 0.6% |  90.0ms |       9 | `Rails::HTML::PermitScrubber#skip_node?`                           | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                |
| 0.5% |  81.5ms |       8 | `Rails::HTML::PermitScrubber#scrub_attribute`                      | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                |
| 0.5% |  80.1ms |       8 | `block in scrub_attributes`                                        | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                |
| 0.5% |  79.5ms |       8 | `block in force_correct_attribute_escaping!`                       | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |
| 0.5% |  78.1ms |       7 | `block (2 levels) in translate`                                    | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                             |
| 0.5% |  76.6ms |       8 | `Nokogiri::XML::DocumentFragment#to_html`                          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`               |
| 0.5% |  75.2ms |       7 | `I18n::Backend::Base#translate`                                    | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                                  |

##### Ours

|    % |    Time | Samples | Function                                                               | Location                              |
| ---: | ------: | ------: | ---------------------------------------------------------------------- | ------------------------------------- |
| 2.1% | 339.0ms |      34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `./app/views/statuses/index.html.erb` |

##### Standard library

|    % |    Time | Samples | Function                                     | Location                                               |
| ---: | ------: | ------: | -------------------------------------------- | ------------------------------------------------------ |
| 0.7% | 112.5ms |      11 | `Array#each`                                 | `<internal:array>`                                     |
| 0.1% |  20.5ms |       2 | `Set#include?`                               | `/usr/local/lib/ruby/3.4.0/set.rb`                     |
| 0.1% |  20.4ms |       2 | `Time#initialize`                            | `<internal:timev>`                                     |
| 0.1% |  19.7ms |       1 | `Array#map`                                  | `<internal:array>`                                     |
| 0.1% |  19.7ms |       1 | `Bundler::Settings.key_to_s`                 | `/usr/local/lib/ruby/3.4.0/bundler/settings.rb`        |
| 0.1% |  19.6ms |       2 | `Singleton::SingletonClassMethods#instance`  | `/usr/local/lib/ruby/3.4.0/singleton.rb`               |
| 0.1% |  10.9ms |       1 | `block (2 levels) in <class:CurrentRuby>`    | `/usr/local/lib/ruby/3.4.0/bundler/current_ruby.rb`    |
| 0.1% |  10.0ms |       1 | `Gem::Version#<=>`                           | `/usr/local/lib/ruby/3.4.0/rubygems/version.rb`        |
| 0.1% |   9.2ms |       1 | `MonitorMixin::ConditionVariable#initialize` | `/usr/local/lib/ruby/3.4.0/monitor.rb`                 |
| 0.1% |   9.1ms |       1 | `Bundler::Materialization#initialize`        | `/usr/local/lib/ruby/3.4.0/bundler/materialization.rb` |
| 0.1% |   9.0ms |       1 | `Random::Formatter#urlsafe_base64`           | `/usr/local/lib/ruby/3.4.0/random/formatter.rb`        |
| 0.1% |   8.6ms |       1 | `Gem::Version.new`                           | `/usr/local/lib/ruby/3.4.0/rubygems/version.rb`        |

#### Lines

Lines with the largest contribution to each function's self time.

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`)

|      % |    Time | Samples | Location                                 |
| -----: | ------: | ------: | ---------------------------------------- |
| 100.0% | 339.0ms |      34 | `./app/views/statuses/index.html.erb:29` |

##### `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % |    Time | Samples | Location                                                                                    |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 218.2ms |      22 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:240` |

##### `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % |    Time | Samples | Location                                                                                    |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 216.8ms |      21 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:417` |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

|      % |    Time | Samples | Location                                                                                              |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 203.8ms |      20 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb:167` |

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

|      % |    Time | Samples | Location                                                                                                          |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 194.7ms |      19 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb:37` |

##### `ActionView::OutputBuffer#<<` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`)

|      % |    Time | Samples | Location                                                                |
| -----: | ------: | ------: | ----------------------------------------------------------------------- |
| 100.0% | 160.4ms |      16 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb:52` |

##### `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`)

|      % |    Time | Samples | Location                                                          |
| -----: | ------: | ------: | ----------------------------------------------------------------- |
| 100.0% | 152.3ms |      16 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb:138` |

##### `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % |    Time | Samples | Location                                                                                    |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 123.7ms |      12 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:418` |

##### `Nokogiri::HTML5::Node#write_to` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|      % |    Time | Samples | Location                                                                                 |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 123.3ms |      12 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb:68` |

##### `Nokogiri::HTML5::DocumentFragment#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`)

|      % |    Time | Samples | Location                                                                                               |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 118.3ms |      11 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb:167` |

##### `Array#each` (`<internal:array>`)

|      % |    Time | Samples | Location               |
| -----: | ------: | ------: | ---------------------- |
| 100.0% | 112.5ms |      11 | `<internal:array>:231` |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 105.2ms |      10 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb:85` |

##### `Loofah::HTML5::Scrub.cdata_needs_escaping?` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|      % |    Time | Samples | Location                                                             |
| -----: | ------: | ------: | -------------------------------------------------------------------- |
| 100.0% | 101.6ms |      10 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:264` |

##### `Nokogiri::XML::Document#decorators` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % |   Time | Samples | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 97.4ms |      10 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:372` |

##### `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % |   Time | Samples | Location                                                                                            |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% | 92.0ms |       9 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:46` |

##### `Rails::HTML::PermitScrubber#skip_node?` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % |   Time | Samples | Location                                                                           |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:89` |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % |   Time | Samples | Location                                                                            |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% | 81.5ms |       8 | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:182` |

##### `block in scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % |   Time | Samples | Location                                                                            |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% | 80.1ms |       8 | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:120` |

##### `block in force_correct_attribute_escaping!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|      % |   Time | Samples | Location                                                             |
| -----: | -----: | ------: | -------------------------------------------------------------------- |
| 100.0% | 79.5ms |       8 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:258` |

##### `block (2 levels) in translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`)

|      % |   Time | Samples | Location                                                              |
| -----: | -----: | ------: | --------------------------------------------------------------------- |
| 100.0% | 78.1ms |       7 | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb:63` |

##### `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % |   Time | Samples | Location                                                                                             |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 76.6ms |       8 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:145` |

##### `I18n::Backend::Base#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`)

|      % |   Time | Samples | Location                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------- |
| 100.0% | 75.2ms |       7 | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb:69` |

##### `Set#include?` (`/usr/local/lib/ruby/3.4.0/set.rb`)

|      % |   Time | Samples | Location                               |
| -----: | -----: | ------: | -------------------------------------- |
| 100.0% | 20.5ms |       2 | `/usr/local/lib/ruby/3.4.0/set.rb:398` |

##### `Time#initialize` (`<internal:timev>`)

|      % |   Time | Samples | Location               |
| -----: | -----: | ------: | ---------------------- |
| 100.0% | 20.4ms |       2 | `<internal:timev>:453` |

##### `Array#map` (`<internal:array>`)

|      % |   Time | Samples | Location               |
| -----: | -----: | ------: | ---------------------- |
| 100.0% | 19.7ms |       1 | `<internal:array>:251` |

##### `Bundler::Settings.key_to_s` (`/usr/local/lib/ruby/3.4.0/bundler/settings.rb`)

|      % |   Time | Samples | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 19.7ms |       1 | `/usr/local/lib/ruby/3.4.0/bundler/settings.rb:583` |

##### `Singleton::SingletonClassMethods#instance` (`/usr/local/lib/ruby/3.4.0/singleton.rb`)

|      % |   Time | Samples | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- |
| 100.0% | 19.6ms |       2 | `/usr/local/lib/ruby/3.4.0/singleton.rb:128` |

##### `block (2 levels) in <class:CurrentRuby>` (`/usr/local/lib/ruby/3.4.0/bundler/current_ruby.rb`)

|      % |   Time | Samples | Location                                               |
| -----: | -----: | ------: | ------------------------------------------------------ |
| 100.0% | 10.9ms |       1 | `/usr/local/lib/ruby/3.4.0/bundler/current_ruby.rb:79` |

##### `Gem::Version#<=>` (`/usr/local/lib/ruby/3.4.0/rubygems/version.rb`)

|      % |   Time | Samples | Location                                            |
| -----: | -----: | ------: | --------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `/usr/local/lib/ruby/3.4.0/rubygems/version.rb:406` |

##### `MonitorMixin::ConditionVariable#initialize` (`/usr/local/lib/ruby/3.4.0/monitor.rb`)

|      % |  Time | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 9.2ms |       1 | `/usr/local/lib/ruby/3.4.0/monitor.rb:149` |

##### `Bundler::Materialization#initialize` (`/usr/local/lib/ruby/3.4.0/bundler/materialization.rb`)

|      % |  Time | Samples | Location                                                  |
| -----: | ----: | ------: | --------------------------------------------------------- |
| 100.0% | 9.1ms |       1 | `/usr/local/lib/ruby/3.4.0/bundler/materialization.rb:15` |

##### `Random::Formatter#urlsafe_base64` (`/usr/local/lib/ruby/3.4.0/random/formatter.rb`)

|      % |  Time | Samples | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 9.0ms |       1 | `/usr/local/lib/ruby/3.4.0/random/formatter.rb:151` |

##### `Gem::Version.new` (`/usr/local/lib/ruby/3.4.0/rubygems/version.rb`)

|      % |  Time | Samples | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 8.6ms |       1 | `/usr/local/lib/ruby/3.4.0/rubygems/version.rb:207` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Module#extend_object [c function]` (`<unknown>`)

|      % |  Time | Samples | Caller                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 1.29s |     126 | `Kernel#extend [c function]` | `<unknown>` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                                         | Location                                                                                           |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 762.5ms |      74 | `Nokogiri::HTML5::DocumentFragment#initialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb` |

##### `Digest::Base#<< [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                 | Location                                             |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 604.7ms |      67 | `block in digest_body` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb` |

##### `Nokogiri::XML::Node#html_standard_serialize [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                           | Location                                                                              |
| -----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 427.4ms |      41 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                                             | Location                                                      |
| -----: | ------: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 401.3ms |      39 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `(unknown) [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                 | Location                                                                                |
| ----: | ------: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------- |
| 44.6% | 168.6ms |      17 | `Kernel.require [c function]`          | `<unknown>`                                                                             |
| 26.2% |  99.1ms |       9 | `Array#each`                           | `<internal:array>`                                                                      |
| 21.4% |  80.8ms |       8 | `Kernel#require_relative [c function]` | `<unknown>`                                                                             |
|  5.2% |  19.5ms |       2 | `Kernel#require [c function]`          | `<unknown>`                                                                             |
|  2.7% |  10.3ms |       1 | `block in each`                        | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |

##### `Hash#merge [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                                                                        | Location                                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 65.4% | 223.5ms |      22 | `I18n::Backend::Fallbacks#translate`                                                          | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                |
| 20.6% |  70.3ms |       7 | `ActiveSupport::NumberHelper::NumberConverter#options`                                        | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 14.0% |  47.7ms |       5 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`                |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`)

|      % |    Time | Samples | Caller       | Location           |
| -----: | ------: | ------: | ------------ | ------------------ |
| 100.0% | 339.0ms |      34 | `Array#each` | `<internal:array>` |

##### `String#gsub [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                                              | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 54.1% | 180.1ms |      18 | `Loofah::HTML5::Scrub.allowed_uri?`                                 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |
| 20.9% |  69.6ms |       7 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape`         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |
|  6.6% |  22.0ms |       2 | `Loofah::HTML5::Scrub.decode_numeric_character_references`          | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |
|  6.2% |  20.5ms |       2 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |
|  5.8% |  19.3ms |       2 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                          | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |

##### `String#encode [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                           | Location                                                                              |
| -----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 284.6ms |      28 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `String.new [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                          | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| 61.5% | 160.9ms |      16 | `Nokogiri::XML::Node#serialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`              |
| 38.5% | 100.6ms |      10 | `String#html_safe`              | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb` |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % |   Time | Samples | Caller                                                                | Location                                                                                          |
| ----: | -----: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 29.5% | 76.0ms |       7 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 27.7% | 71.2ms |       7 | `ActionController::UrlFor#url_options`                                | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`                  |
| 23.4% | 60.3ms |       6 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 11.9% | 30.6ms |       3 | `Rails::HTML::PermitScrubber#tags=`                                   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                   |
|  7.5% | 19.2ms |       2 | `ActionDispatch::Journey::Format#evaluate`                            | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                 |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                              | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 50.3% | 110.5ms |      11 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                    |
| 27.6% |  60.6ms |       6 | `Nokogiri::XML::DocumentFragment#to_html`           | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |
| 22.0% |  48.4ms |       5 | `Loofah::ScrubBehavior::Node#scrub!`                | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                    |

##### `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|     % |   Time | Samples | Caller                                              | Location                                                      |
| ----: | -----: | ------: | --------------------------------------------------- | ------------------------------------------------------------- |
| 41.5% | 90.7ms |       9 | `Loofah::ScrubBehavior::NodeSet#scrub!`             | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |
| 40.5% | 88.3ms |       9 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb` |
| 18.0% | 39.3ms |       4 | `Enumerable#map [c function]`                       | `<unknown>`                                                   |

##### `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % |    Time | Samples | Caller                   | Location    |
| -----: | ------: | ------: | ------------------------ | ----------- |
| 100.0% | 216.8ms |      21 | `Hash#each [c function]` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

|      % |    Time | Samples | Caller                                                        | Location                                                                                          |
| -----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 203.8ms |      20 | `ActiveSupport::NumberHelper::NumberConverter#format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `Nokogiri::XML::Node#node_name [c function]` (`<unknown>`)

|     % |   Time | Samples | Caller                                        | Location                                                                            |
| ----: | -----: | ------: | --------------------------------------------- | ----------------------------------------------------------------------------------- |
| 32.3% | 64.4ms |       6 | `Rails::HTML::PermitScrubber#scrub_attribute` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
| 20.5% | 40.8ms |       4 | `block in scrub_attributes`                   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
| 16.3% | 32.4ms |       3 | `Rails::HTML::PermitScrubber#allowed_node?`   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
| 15.7% | 31.3ms |       3 | `block in attributes`                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |
| 15.3% | 30.4ms |       3 | `block in force_correct_attribute_escaping!`  | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

|      % |    Time | Samples | Caller                                                            | Location                                                                                                       |
| -----: | ------: | ------: | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 194.7ms |      19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |

##### `Regexp#match? [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                                       | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 57.2% | 108.7ms |      11 | `String#blank?`                                              | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/object/blank.rb` |
| 27.4% |  52.2ms |       5 | `ActionView::Helpers::TagHelper#ensure_valid_html5_tag_name` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`          |
| 10.8% |  20.6ms |       2 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                   | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                         |
|  4.6% |   8.7ms |       1 | `ActionDispatch::FileHandler#compressible?`                  | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`       |

##### `String#gsub! [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                     | Location                                                         |
| ----: | ------: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
| 90.3% | 164.9ms |      16 | `Loofah::HTML5::Scrub.scrub_uri_attribute` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
|  9.7% |  17.7ms |       2 | `URI.encode_www_form_component`            | `/usr/local/bundle/gems/uri-1.1.1/lib/uri/common.rb`             |

##### `Hash#transform_keys [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                | Location                                                                              |
| -----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 174.2ms |      17 | `Hash#symbolize_keys` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb` |

##### `Array#join [c function]` (`<unknown>`)

|     % |   Time | Samples | Caller                                                            | Location                                                                                                       |
| ----: | -----: | ------: | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 30.2% | 51.6ms |       5 | `Nokogiri::XML::NodeSet#to_html`                                  | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
| 24.2% | 41.4ms |       4 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`   | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| 23.5% | 40.2ms |       4 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| 11.4% | 19.4ms |       2 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`                  | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb`                               |
| 10.7% | 18.3ms |       2 | `ActionDispatch::Journey::Format#evaluate`                        | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                              |

##### `ActionView::OutputBuffer#<<` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`)

|     % |    Time | Samples | Caller                                                                                       | Location                                   |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 71.8% | 115.1ms |      12 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                       | `./app/views/statuses/index.html.erb`      |
| 28.2% |  45.3ms |       4 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `./app/views/layouts/application.html.erb` |

##### `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`)

|     % |    Time | Samples | Caller                                      | Location                                                      |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------------------- |
| 68.1% | 103.8ms |      10 | `Loofah::Scrubber#traverse`                 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb` |
| 31.9% |  48.6ms |       6 | `block in traverse_conditionally_bottom_up` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb` |

##### `Class#new [c function]` (`<unknown>`)

|     % |   Time | Samples | Caller                                                 | Location                                                                                          |
| ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| 22.1% | 30.3ms |       3 | `ActiveSupport::NumberHelper::NumberConverter.convert` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|  8.5% | 11.6ms |       1 | `block in recognize`                                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`                   |
|  7.5% | 10.2ms |       1 | `ActiveSupport::InheritableOptions#inheritable_copy`   | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/ordered_options.rb`                |
|  7.4% | 10.1ms |       1 | `TZInfo::DayOfMonthTransitionRule#get_day`             | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/transition_rule.rb`                               |
|  7.4% | 10.1ms |       1 | `ActionView::AbstractRenderer#build_rendered_template` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/abstract_renderer.rb`           |

##### `Kernel.require [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                                | Location                                    |
| -----: | ------: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 132.6ms |      13 | `block (2 levels) in replace_require` | `/usr/local/lib/ruby/3.4.0/bundled_gems.rb` |

##### `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|     % |   Time | Samples | Caller                                                    | Location    |
| ----: | -----: | ------: | --------------------------------------------------------- | ----------- |
| 58.5% | 72.4ms |       7 | `Nokogiri::XML::Node#children [c function]`               | `<unknown>` |
| 16.8% | 20.7ms |       2 | `Nokogiri::XML::DocumentFragment.native_new [c function]` | `<unknown>` |
| 16.4% | 20.3ms |       2 | `Nokogiri::XML::Node#internal_subset [c function]`        | `<unknown>` |
|  8.3% | 10.2ms |       1 | `Nokogiri::XML::Node#attribute_nodes [c function]`        | `<unknown>` |

##### `Nokogiri::HTML5::Node#write_to` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|      % |    Time | Samples | Caller                          | Location                                                                            |
| -----: | ------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 123.3ms |      12 | `Nokogiri::XML::Node#serialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Nokogiri::HTML5::DocumentFragment#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`)

|      % |    Time | Samples | Caller                                | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 118.3ms |      11 | `Nokogiri::XML::DocumentFragment.new` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `Array#each` (`<internal:array>`)

|     % |   Time | Samples | Caller                                     | Location                                                                                |
| ----: | -----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------- |
| 27.6% | 31.1ms |       3 | `block in decorate`                        | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
| 19.6% | 22.1ms |       2 | `Enumerable#inject [c function]`           | `<unknown>`                                                                             |
|  9.8% | 11.1ms |       1 | `Enumerable#detect [c function]`           | `<unknown>`                                                                             |
|  9.1% | 10.3ms |       1 | `I18n::Backend::Fallbacks#translate`       | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                      |
|  8.7% |  9.8ms |       1 | `ActionDispatch::Journey::Format#evaluate` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`       |

##### `Hash#each [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                             | Location                                                                                |
| -----: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 111.4ms |      11 | `Nokogiri::XML::Document#decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

|      % |    Time | Samples | Caller                                                                 | Location                              |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | ------------------------------------- |
| 100.0% | 105.2ms |      10 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `./app/views/statuses/index.html.erb` |

##### `Loofah::HTML5::Scrub.cdata_needs_escaping?` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|      % |    Time | Samples | Caller                              | Location                                                                        |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 101.6ms |      10 | `Rails::HTML::PermitScrubber#scrub` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `Nokogiri::XML::Document#decorators` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % |   Time | Samples | Caller                                 | Location                                                      |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 97.4ms |      10 | `Loofah::DocumentDecorator#initialize` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % |   Time | Samples | Caller                                             | Location                                                      |
| -----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 92.0ms |       9 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Rails::HTML::PermitScrubber#skip_node?` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % |   Time | Samples | Caller                              | Location                                                                        |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `Rails::HTML::PermitScrubber#scrub` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % |   Time | Samples | Caller                      | Location                                                                        |
| -----: | -----: | ------: | --------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 81.5ms |       8 | `block in scrub_attributes` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `block in scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % |   Time | Samples | Caller       | Location           |
| -----: | -----: | ------: | ------------ | ------------------ |
| 100.0% | 80.1ms |       8 | `Array#each` | `<internal:array>` |

##### `block in force_correct_attribute_escaping!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|      % |   Time | Samples | Caller       | Location           |
| -----: | -----: | ------: | ------------ | ------------------ |
| 100.0% | 79.5ms |       8 | `Array#each` | `<internal:array>` |

##### `block (2 levels) in translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`)

|      % |   Time | Samples | Caller                      | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% | 78.1ms |       7 | `Kernel#catch [c function]` | `<unknown>` |

##### `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % |   Time | Samples | Caller                                   | Location                                                                        |
| -----: | -----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 76.6ms |       8 | `Rails::HTML::Sanitizer#properly_encode` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb` |

##### `I18n::Backend::Base#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`)

|      % |   Time | Samples | Caller                          | Location                                                           |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------ |
| 100.0% | 75.2ms |       7 | `block (2 levels) in translate` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb` |

##### `Set#include?` (`/usr/local/lib/ruby/3.4.0/set.rb`)

|     % |   Time | Samples | Caller                                        | Location                                                                        |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 50.1% | 10.3ms |       1 | `Rails::HTML::PermitScrubber#scrub_attribute` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |
| 49.9% | 10.2ms |       1 | `Loofah::HTML5::Scrub.scrub_uri_attribute`    | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                |

##### `Time#initialize` (`<internal:timev>`)

|      % |   Time | Samples | Caller                   | Location    |
| -----: | -----: | ------: | ------------------------ | ----------- |
| 100.0% | 20.4ms |       2 | `Class#new [c function]` | `<unknown>` |

##### `Array#map` (`<internal:array>`)

|      % |   Time | Samples | Caller                                        | Location                                                                        |
| -----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 19.7ms |       1 | `ActionDispatch::SSL#flag_cookies_as_secure!` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb` |

##### `Bundler::Settings.key_to_s` (`/usr/local/lib/ruby/3.4.0/bundler/settings.rb`)

|      % |   Time | Samples | Caller                      | Location                                        |
| -----: | -----: | ------: | --------------------------- | ----------------------------------------------- |
| 100.0% | 19.7ms |       1 | `Bundler::Settings.key_for` | `/usr/local/lib/ruby/3.4.0/bundler/settings.rb` |

##### `Singleton::SingletonClassMethods#instance` (`/usr/local/lib/ruby/3.4.0/singleton.rb`)

|     % |   Time | Samples | Caller                                                   | Location                                                                                |
| ----: | -----: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 51.9% | 10.2ms |       1 | `Loofah::HTML5::Scrub.force_correct_attribute_escaping!` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                        |
| 48.1% |  9.4ms |       1 | `Nokogiri.jruby?`                                        | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/version/info.rb` |

##### `block (2 levels) in <class:CurrentRuby>` (`/usr/local/lib/ruby/3.4.0/bundler/current_ruby.rb`)

|      % |   Time | Samples | Caller                    | Location    |
| -----: | -----: | ------: | ------------------------- | ----------- |
| 100.0% | 10.9ms |       1 | `Array#each [c function]` | `<unknown>` |

##### `Gem::Version#<=>` (`/usr/local/lib/ruby/3.4.0/rubygems/version.rb`)

|      % |   Time | Samples | Caller                      | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% | 10.0ms |       1 | `Comparable#< [c function]` | `<unknown>` |

##### `MonitorMixin::ConditionVariable#initialize` (`/usr/local/lib/ruby/3.4.0/monitor.rb`)

|      % |  Time | Samples | Caller                   | Location    |
| -----: | ----: | ------: | ------------------------ | ----------- |
| 100.0% | 9.2ms |       1 | `Class#new [c function]` | `<unknown>` |

##### `Bundler::Materialization#initialize` (`/usr/local/lib/ruby/3.4.0/bundler/materialization.rb`)

|      % |  Time | Samples | Caller                   | Location    |
| -----: | ----: | ------: | ------------------------ | ----------- |
| 100.0% | 9.1ms |       1 | `Class#new [c function]` | `<unknown>` |

##### `Random::Formatter#urlsafe_base64` (`/usr/local/lib/ruby/3.4.0/random/formatter.rb`)

|      % |  Time | Samples | Caller                                                           | Location                                                                                            |
| -----: | ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% | 9.0ms |       1 | `ActionController::RequestForgeryProtection#generate_csrf_token` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `Gem::Version.new` (`/usr/local/lib/ruby/3.4.0/rubygems/version.rb`)

|      % |  Time | Samples | Caller                                        | Location                                                                        |
| -----: | ----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 8.6ms |       1 | `ActionDispatch::SSL#flag_cookies_as_secure!` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb` |

### Total time

Functions with the most wall time spent within the function and its callees.

|     % |   Time | Samples | Function                                 | Location                                                                                     |
| ----: | -----: | ------: | ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| 99.9% | 15.75s |   1,553 | `<main>`                                 | `profile.rb`                                                                                 |
| 95.0% | 14.97s |   1,477 | `Rails::Engine#call`                     | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`                                  |
| 94.8% | 14.95s |   1,474 | `ActionDispatch::SSL#call`               | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`              |
| 94.8% | 14.95s |   1,474 | `ActionDispatch::AssumeSSL#call`         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`       |
| 94.6% | 14.91s |   1,471 | `ActionDispatch::Static#call`            | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`           |
| 94.6% | 14.91s |   1,471 | `Rack::Sendfile#call`                    | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                     |
| 94.0% | 14.82s |   1,460 | `Rack::Runtime#call`                     | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                      |
| 94.0% | 14.82s |   1,460 | `ActionDispatch::Executor#call`          | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`         |
| 93.9% | 14.81s |   1,459 | `Rails::Rack::Logger#call`               | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                             |
| 93.9% | 14.81s |   1,459 | `Rails::Rack::SilenceRequest#call`       | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`                    |
| 93.9% | 14.81s |   1,459 | `ActionDispatch::RemoteIp#call`          | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`        |
| 93.9% | 14.81s |   1,459 | `ActionDispatch::RequestId#call`         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`       |
| 93.9% | 14.81s |   1,459 | `Rack::MethodOverride#call`              | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`                              |
| 93.9% | 14.80s |   1,458 | `Rails::Rack::Logger#call_app`           | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                             |
| 93.8% | 14.78s |   1,456 | `ActiveSupport::Callbacks#run_callbacks` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`                 |
| 93.8% | 14.78s |   1,456 | `ActionDispatch::Callbacks#call`         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`        |
| 93.8% | 14.78s |   1,456 | `ActionDispatch::DebugExceptions#call`   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb` |
| 93.8% | 14.78s |   1,456 | `ActionDispatch::ShowExceptions#call`    | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`  |
| 93.7% | 14.77s |   1,455 | `ActionDispatch::Cookies#call`           | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`          |
| 93.7% | 14.77s |   1,455 | `block in call`                          | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Native

|     % |    Time | Samples | Function                                                   | Location    |
| ----: | ------: | ------: | ---------------------------------------------------------- | ----------- |
| 85.5% |  13.48s |   1,316 | `Kernel#public_send [c function]`                          | `<unknown>` |
| 31.1% |   4.90s |     477 | `Integer#upto [c function]`                                | `<unknown>` |
| 14.0% |   2.20s |     215 | `(unknown) [c function]`                                   | `<unknown>` |
| 11.6% |   1.83s |     178 | `Hash#each [c function]`                                   | `<unknown>` |
| 11.5% |   1.81s |     177 | `Enumerable#map [c function]`                              | `<unknown>` |
|  8.6% |   1.35s |     131 | `Kernel#extend [c function]`                               | `<unknown>` |
|  8.2% |   1.29s |     126 | `Module#extend_object [c function]`                        | `<unknown>` |
|  7.5% |   1.18s |     116 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
|  6.6% |   1.03s |     100 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
|  6.2% | 975.7ms |      92 | `Kernel#catch [c function]`                                | `<unknown>` |
|  4.9% | 769.8ms |      74 | `Kernel#require_relative [c function]`                     | `<unknown>` |
|  3.8% | 604.7ms |      67 | `Digest::Base#<< [c function]`                             | `<unknown>` |
|  3.8% | 593.6ms |      58 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
|  3.2% | 511.5ms |      50 | `Class#new [c function]`                                   | `<unknown>` |
|  2.9% | 452.6ms |      44 | `Kernel.require [c function]`                              | `<unknown>` |
|  2.7% | 427.4ms |      41 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
|  2.6% | 403.1ms |      40 | `BasicObject#instance_exec [c function]`                   | `<unknown>` |
|  2.5% | 397.1ms |      39 | `Nokogiri::XML::DocumentFragment.native_new [c function]`  | `<unknown>` |
|  2.5% | 392.7ms |      38 | `Kernel#dup [c function]`                                  | `<unknown>` |
|  2.4% | 386.2ms |      37 | `Nokogiri::XML::Node#attribute_nodes [c function]`         | `<unknown>` |

##### Third-party

|     % |   Time | Samples | Function                                     | Location                                                                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 95.0% | 14.97s |   1,477 | `Rails::Engine#call`                         | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`                                  |
| 94.8% | 14.95s |   1,474 | `ActionDispatch::SSL#call`                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`              |
| 94.8% | 14.95s |   1,474 | `ActionDispatch::AssumeSSL#call`             | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`       |
| 94.6% | 14.91s |   1,471 | `ActionDispatch::Static#call`                | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`           |
| 94.6% | 14.91s |   1,471 | `Rack::Sendfile#call`                        | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                     |
| 94.0% | 14.82s |   1,460 | `Rack::Runtime#call`                         | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                      |
| 94.0% | 14.82s |   1,460 | `ActionDispatch::Executor#call`              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`         |
| 93.9% | 14.81s |   1,459 | `Rails::Rack::Logger#call`                   | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                             |
| 93.9% | 14.81s |   1,459 | `Rails::Rack::SilenceRequest#call`           | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`                    |
| 93.9% | 14.81s |   1,459 | `ActionDispatch::RemoteIp#call`              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`        |
| 93.9% | 14.81s |   1,459 | `ActionDispatch::RequestId#call`             | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`       |
| 93.9% | 14.81s |   1,459 | `Rack::MethodOverride#call`                  | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`                              |
| 93.9% | 14.80s |   1,458 | `Rails::Rack::Logger#call_app`               | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                             |
| 93.8% | 14.78s |   1,456 | `ActiveSupport::Callbacks#run_callbacks`     | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`                 |
| 93.8% | 14.78s |   1,456 | `ActionDispatch::Callbacks#call`             | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`        |
| 93.8% | 14.78s |   1,456 | `ActionDispatch::DebugExceptions#call`       | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb` |
| 93.8% | 14.78s |   1,456 | `ActionDispatch::ShowExceptions#call`        | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`  |
| 93.7% | 14.77s |   1,455 | `ActionDispatch::Cookies#call`               | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`          |
| 93.7% | 14.77s |   1,455 | `block in call`                              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`        |
| 93.5% | 14.74s |   1,452 | `Rack::Session::Abstract::Persisted#context` | `/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`                  |

##### Ours

|     % |    Time | Samples | Function                                                                                     | Location                                   |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 99.9% |  15.75s |   1,553 | `<main>`                                                                                     | `profile.rb`                               |
| 82.9% |  13.06s |   1,277 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128`        | `./app/views/statuses/index.html.erb`      |
| 82.7% |  13.04s |   1,275 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                       | `./app/views/statuses/index.html.erb`      |
|  2.6% | 411.7ms |      39 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `./app/views/layouts/application.html.erb` |
|  0.6% |  99.6ms |      10 | `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128`            | `./app/views/statuses/index.html.erb`      |
|  0.1% |  10.7ms |       1 | `<compiled>`                                                                                 | `./Gemfile`                                |

##### Standard library

|     % |    Time | Samples | Function                              | Location                                                                   |
| ----: | ------: | ------: | ------------------------------------- | -------------------------------------------------------------------------- |
| 92.8% |  14.64s |   1,442 | `Array#each`                          | `<internal:array>`                                                         |
|  2.9% | 452.6ms |      44 | `block (2 levels) in replace_require` | `/usr/local/lib/ruby/3.4.0/bundled_gems.rb`                                |
|  0.6% | 100.8ms |      10 | `Integer#times`                       | `<internal:numeric>`                                                       |
|  0.6% |  91.5ms |       8 | `Array#map`                           | `<internal:array>`                                                         |
|  0.5% |  83.2ms |       8 | `Kernel#require`                      | `<internal:/usr/local/lib/ruby/3.4.0/rubygems/core_ext/kernel_require.rb>` |
|  0.3% |  47.4ms |       4 | `Kernel#tap`                          | `<internal:kernel>`                                                        |
|  0.3% |  42.5ms |       4 | `Bundler.setup`                       | `/usr/local/lib/ruby/3.4.0/bundler.rb`                                     |
|  0.3% |  42.5ms |       4 | `block in <top (required)>`           | `/usr/local/lib/ruby/3.4.0/bundler/setup.rb`                               |
|  0.3% |  42.5ms |       4 | `Bundler::UI::Shell#with_level`       | `/usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb`                            |
|  0.3% |  42.5ms |       4 | `Bundler::UI::Shell#silence`          | `/usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb`                            |
|  0.2% |  30.1ms |       3 | `OpenSSL::HMAC.digest`                | `/usr/local/lib/ruby/3.4.0/openssl/hmac.rb`                                |
|  0.2% |  26.2ms |       3 | `OpenSSL::Cipher#random_iv`           | `/usr/local/lib/ruby/3.4.0/openssl/cipher.rb`                              |
|  0.1% |  23.4ms |       2 | `block (3 levels) in <class:Digest>`  | `/usr/local/lib/ruby/3.4.0/openssl/digest.rb`                              |
|  0.1% |  21.6ms |       2 | `Bundler::Definition.build`           | `/usr/local/lib/ruby/3.4.0/bundler/definition.rb`                          |
|  0.1% |  21.6ms |       2 | `Bundler.definition`                  | `/usr/local/lib/ruby/3.4.0/bundler.rb`                                     |
|  0.1% |  20.9ms |       2 | `Bundler::Runtime#setup`              | `/usr/local/lib/ruby/3.4.0/bundler/runtime.rb`                             |
|  0.1% |  20.5ms |       2 | `Set#include?`                        | `/usr/local/lib/ruby/3.4.0/set.rb`                                         |
|  0.1% |  20.4ms |       2 | `Time#initialize`                     | `<internal:timev>`                                                         |
|  0.1% |  19.7ms |       1 | `Bundler::Settings.key_to_s`          | `/usr/local/lib/ruby/3.4.0/bundler/settings.rb`                            |
|  0.1% |  19.7ms |       1 | `Bundler::Settings.key_for`           | `/usr/local/lib/ruby/3.4.0/bundler/settings.rb`                            |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Rails::Engine#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`)

|      % |   Time | Samples | Caller   | Location     |
| -----: | -----: | ------: | -------- | ------------ |
| 100.0% | 14.97s |   1,477 | `<main>` | `profile.rb` |

##### `ActionDispatch::SSL#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`)

|      % |   Time | Samples | Caller                           | Location                                                                               |
| -----: | -----: | ------: | -------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% | 14.95s |   1,474 | `ActionDispatch::AssumeSSL#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb` |

##### `ActionDispatch::AssumeSSL#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`)

|      % |   Time | Samples | Caller               | Location                                                    |
| -----: | -----: | ------: | -------------------- | ----------------------------------------------------------- |
| 100.0% | 14.95s |   1,474 | `Rails::Engine#call` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb` |

##### `ActionDispatch::Static#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`)

|      % |   Time | Samples | Caller                | Location                                                 |
| -----: | -----: | ------: | --------------------- | -------------------------------------------------------- |
| 100.0% | 14.91s |   1,471 | `Rack::Sendfile#call` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb` |

##### `Rack::Sendfile#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`)

|      % |   Time | Samples | Caller                     | Location                                                                        |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.91s |   1,471 | `ActionDispatch::SSL#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb` |

##### `Rack::Runtime#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`)

|      % |   Time | Samples | Caller                          | Location                                                                             |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 14.82s |   1,460 | `ActionDispatch::Executor#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb` |

##### `ActionDispatch::Executor#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`)

|      % |   Time | Samples | Caller                        | Location                                                                           |
| -----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% | 14.82s |   1,460 | `ActionDispatch::Static#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb` |

##### `Rails::Rack::Logger#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`)

|      % |   Time | Samples | Caller                             | Location                                                                  |
| -----: | -----: | ------: | ---------------------------------- | ------------------------------------------------------------------------- |
| 100.0% | 14.81s |   1,459 | `Rails::Rack::SilenceRequest#call` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb` |

##### `Rails::Rack::SilenceRequest#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`)

|      % |   Time | Samples | Caller                          | Location                                                                              |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 14.81s |   1,459 | `ActionDispatch::RemoteIp#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb` |

##### `ActionDispatch::RemoteIp#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`)

|      % |   Time | Samples | Caller                           | Location                                                                               |
| -----: | -----: | ------: | -------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% | 14.81s |   1,459 | `ActionDispatch::RequestId#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb` |

##### `ActionDispatch::RequestId#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`)

|      % |   Time | Samples | Caller                      | Location                                                        |
| -----: | -----: | ------: | --------------------------- | --------------------------------------------------------------- |
| 100.0% | 14.81s |   1,459 | `Rack::MethodOverride#call` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb` |

##### `Rack::MethodOverride#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`)

|      % |   Time | Samples | Caller               | Location                                                |
| -----: | -----: | ------: | -------------------- | ------------------------------------------------------- |
| 100.0% | 14.81s |   1,459 | `Rack::Runtime#call` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb` |

##### `Rails::Rack::Logger#call_app` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`)

|      % |   Time | Samples | Caller                     | Location                                                         |
| -----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------- |
| 100.0% | 14.80s |   1,458 | `Rails::Rack::Logger#call` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb` |

##### `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`)

|      % |   Time | Samples | Caller                                         | Location                                                                              |
| -----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 14.78s |   1,456 | `ActionDispatch::Callbacks#call`               | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb` |
|  93.2% | 13.77s |   1,347 | `AbstractController::Callbacks#process_action` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`        |

##### `ActionDispatch::Callbacks#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`)

|      % |   Time | Samples | Caller                                 | Location                                                                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 14.78s |   1,456 | `ActionDispatch::DebugExceptions#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb` |

##### `ActionDispatch::DebugExceptions#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb`)

|      % |   Time | Samples | Caller                                | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 14.78s |   1,456 | `ActionDispatch::ShowExceptions#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb` |

##### `ActionDispatch::ShowExceptions#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`)

|      % |   Time | Samples | Caller                         | Location                                                         |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------------------------------------- |
| 100.0% | 14.78s |   1,456 | `Rails::Rack::Logger#call_app` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb` |

##### `ActionDispatch::Cookies#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`)

|      % |   Time | Samples | Caller          | Location                                                                              |
| -----: | -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 14.77s |   1,455 | `block in call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb` |

##### `block in call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`)

|      % |   Time | Samples | Caller                                   | Location                                                                     |
| -----: | -----: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 14.77s |   1,455 | `ActiveSupport::Callbacks#run_callbacks` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb` |

##### `Rack::Session::Abstract::Persisted#context` (`/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`)

|      % |   Time | Samples | Caller                                    | Location                                                                    |
| -----: | -----: | ------: | ----------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% | 14.74s |   1,452 | `Rack::Session::Abstract::Persisted#call` | `/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb` |

##### `Array#each` (`<internal:array>`)

|     % |    Time | Samples | Caller                                                                                | Location                                                                                |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 95.5% |  13.98s |   1,368 | `ActionDispatch::Journey::Router#recognize`                                           | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`         |
| 89.1% |  13.04s |   1,275 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` | `./app/views/statuses/index.html.erb`                                                   |
|  9.5% |   1.38s |     134 | `block in decorate`                                                                   | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  8.3% |   1.21s |     119 | `Rails::HTML::PermitScrubber#scrub_attributes`                                        | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
|  4.1% | 604.7ms |      67 | `Rack::ETag#digest_body`                                                              | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |

##### `Kernel#public_send [c function]` (`<unknown>`)

|      % |   Time | Samples | Caller                                   | Location                                                                           |
| -----: | -----: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% | 13.48s |   1,316 | `ActionView::Base#_run`                  | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`                  |
|  19.0% |  2.56s |     246 | `block in delegate_number_helper_method` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb` |

##### `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`)

|      % |   Time | Samples | Caller                            | Location    |
| -----: | -----: | ------: | --------------------------------- | ----------- |
| 100.0% | 13.06s |   1,277 | `Kernel#public_send [c function]` | `<unknown>` |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`)

|      % |   Time | Samples | Caller       | Location           |
| -----: | -----: | ------: | ------------ | ------------------ |
| 100.0% | 13.04s |   1,275 | `Array#each` | `<internal:array>` |

##### `Integer#upto [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                         | Location                                                                                |
| ----: | ------: | ------: | ------------------------------ | --------------------------------------------------------------------------------------- |
| 97.7% |   4.78s |     466 | `Nokogiri::XML::NodeSet#each`  | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
|  2.3% | 111.0ms |      11 | `Enumerator#each [c function]` | `<unknown>`                                                                             |

##### `(unknown) [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                        | Location                                                                                |
| ----: | ------: | ------: | ----------------------------- | --------------------------------------------------------------------------------------- |
| 70.0% |   1.54s |     150 | `block in each`               | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
|  7.8% | 171.8ms |      16 | `Array#each`                  | `<internal:array>`                                                                      |
|  7.7% | 168.6ms |      17 | `Kernel.require [c function]` | `<unknown>`                                                                             |
|  5.0% | 111.0ms |      11 | `Integer#upto [c function]`   | `<unknown>`                                                                             |
|  4.1% |  91.0ms |       9 | `Integer#times`               | `<internal:numeric>`                                                                    |

##### `Hash#each [c function]` (`<unknown>`)

|     % |   Time | Samples | Caller                                     | Location                                                                                |
| ----: | -----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------- |
| 95.3% |  1.74s |     169 | `Nokogiri::XML::Document#decorate`         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  1.7% | 31.0ms |       3 | `block in eager_load`                      | `/usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/loader/eager_load.rb`               |
|  1.5% | 27.5ms |       3 | `ActionDispatch::Cookies::CookieJar#write` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`     |
|  1.0% | 18.3ms |       2 | `Enumerable#map [c function]`              | `<unknown>`                                                                             |
|  0.5% |  9.6ms |       1 | `ActionView::Base#assign`                  | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`                       |

##### `Enumerable#map [c function]` (`<unknown>`)

|     % |   Time | Samples | Caller                                              | Location                                                                                |
| ----: | -----: | ------: | --------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 94.0% |  1.70s |     166 | `Nokogiri::XML::NodeSet#to_html`                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
|  5.0% | 91.0ms |       9 | `TZInfo::DataSources::ZoneinfoReader#parse`         | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`        |
|  0.5% |  9.9ms |       1 | `Kernel#require_relative [c function]`              | `<unknown>`                                                                             |
|  0.5% |  8.4ms |       1 | `ActiveSupport::Notifications::Fanout#build_handle` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/fanout.rb` |

##### `Kernel#extend [c function]` (`<unknown>`)

|     % |   Time | Samples | Caller                         | Location                                                                                |
| ----: | -----: | ------: | ------------------------------ | --------------------------------------------------------------------------------------- |
| 98.4% |  1.33s |     129 | `block (2 levels) in decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  1.6% | 21.3ms |       2 | `Kernel.require [c function]`  | `<unknown>`                                                                             |

##### `Module#extend_object [c function]` (`<unknown>`)

|      % |  Time | Samples | Caller                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 1.29s |     126 | `Kernel#extend [c function]` | `<unknown>` |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                              | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 50.1% | 593.8ms |      56 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                    |
| 36.2% | 428.8ms |      43 | `Loofah::ScrubBehavior::Node#scrub!`                | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                    |
| 13.8% | 163.5ms |      17 | `Nokogiri::XML::DocumentFragment#to_html`           | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|      % |  Time | Samples | Caller                                         | Location                                                                                           |
| -----: | ----: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 1.03s |     100 | `Nokogiri::HTML5::DocumentFragment#initialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb` |

##### `Kernel#catch [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                                   | Location                                                           |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------------------------ |
| 100.0% | 975.7ms |      92 | `I18n::Base#translate_key`               | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                   |
|  44.2% | 431.7ms |      40 | `block in translate`                     | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb` |
|   3.1% |  30.4ms |       3 | `I18n::Backend::Fallbacks#resolve_entry` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                    | Location                                               |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------------ |
| 98.5% | 758.4ms |      73 | `<main>`                                  | `profile.rb`                                           |
| 52.7% | 405.7ms |      38 | `Kernel#require_relative [c function]`    | `<unknown>`                                            |
| 26.5% | 203.7ms |      19 | `Kernel.require [c function]`             | `<unknown>`                                            |
|  5.6% |  42.8ms |       4 | `Kernel#require [c function]`             | `<unknown>`                                            |
|  1.4% |  10.7ms |       1 | `Bundler::Source::Rubygems#normalize_uri` | `/usr/local/lib/ruby/3.4.0/bundler/source/rubygems.rb` |

##### `Digest::Base#<< [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                 | Location                                             |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 604.7ms |      67 | `block in digest_body` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                                             | Location                                                      |
| -----: | ------: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 593.6ms |      58 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Class#new [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                                       | Location                                                                                            |
| ----: | ------: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 28.2% | 144.0ms |      14 | `ActiveSupport::NumberHelper::NumberConverter.convert`       | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`   |
| 10.3% |  52.8ms |       5 | `ActionDispatch::Cookies::ChainedCookieJars#encrypted`       | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`                 |
|  9.1% |  46.3ms |       5 | `ActionDispatch::Response.create`                            | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb`                      |
|  5.9% |  30.1ms |       3 | `OpenSSL::HMAC.digest`                                       | `/usr/local/lib/ruby/3.4.0/openssl/hmac.rb`                                                         |
|  4.6% |  23.4ms |       2 | `ActionController::RequestForgeryProtection#csrf_token_hmac` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `Kernel.require [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                                | Location                                    |
| -----: | ------: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 452.6ms |      44 | `block (2 levels) in replace_require` | `/usr/local/lib/ruby/3.4.0/bundled_gems.rb` |

##### `block (2 levels) in replace_require` (`/usr/local/lib/ruby/3.4.0/bundled_gems.rb`)

|     % |    Time | Samples | Caller                                 | Location                                                                |
| ----: | ------: | ------: | -------------------------------------- | ----------------------------------------------------------------------- |
| 53.6% | 242.6ms |      23 | `Kernel.require [c function]`          | `<unknown>`                                                             |
| 53.6% | 242.6ms |      23 | `Kernel#require_relative [c function]` | `<unknown>`                                                             |
| 46.4% | 209.9ms |      21 | `Kernel#require`                       | `/usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/core_ext/kernel.rb` |
|  9.4% |  42.6ms |       3 | `ActionView.render_tracker=`           | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view.rb`            |

##### `Nokogiri::XML::Node#html_standard_serialize [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                           | Location                                                                              |
| -----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 427.4ms |      41 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`./app/views/layouts/application.html.erb`)

|      % |    Time | Samples | Caller                            | Location    |
| -----: | ------: | ------: | --------------------------------- | ----------- |
| 100.0% | 411.7ms |      39 | `Kernel#public_send [c function]` | `<unknown>` |

##### `BasicObject#instance_exec [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                  | Location                                                                     |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------------------------------------------------------- |
| 90.3% | 364.1ms |      36 | `Rails::Initializable::Initializer#run` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/initializable.rb`           |
|  9.7% |  39.0ms |       4 | `block in make_lambda`                  | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb` |

##### `Nokogiri::XML::DocumentFragment.native_new [c function]` (`<unknown>`)

|      % |    Time | Samples | Caller                                | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 397.1ms |      39 | `Nokogiri::XML::DocumentFragment.new` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                                                | Location                                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 29.1% | 114.2ms |      11 | `ActionController::UrlFor#url_options`                                | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`                  |
| 27.2% | 106.9ms |      10 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 23.6% |  92.7ms |       9 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 12.3% |  48.4ms |       5 | `ActionDispatch::Journey::Format#evaluate`                            | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                 |
|  7.8% |  30.6ms |       3 | `Rails::HTML::PermitScrubber#tags=`                                   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                   |

##### `Nokogiri::XML::Node#attribute_nodes [c function]` (`<unknown>`)

|     % |    Time | Samples | Caller                                                   | Location                                                                            |
| ----: | ------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 80.8% | 311.9ms |      30 | `Rails::HTML::PermitScrubber#scrub_attributes`           | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
| 10.7% |  41.2ms |       4 | `Loofah::HTML5::Scrub.force_correct_attribute_escaping!` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |
|  8.6% |  33.0ms |       3 | `Nokogiri::XML::Node#attributes`                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Integer#times` (`<internal:numeric>`)

|     % |   Time | Samples | Caller                                                                                                     | Location                                                                           |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 90.3% | 91.0ms |       9 | `Enumerator#each [c function]`                                                                             | `<unknown>`                                                                        |
|  9.7% |  9.7ms |       1 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#parameterize_args` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |

##### `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`)

|      % |   Time | Samples | Caller       | Location           |
| -----: | -----: | ------: | ------------ | ------------------ |
| 100.0% | 99.6ms |      10 | `Array#each` | `<internal:array>` |

##### `Array#map` (`<internal:array>`)

|     % |   Time | Samples | Caller                                                    | Location                                                                              |
| ----: | -----: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 49.5% | 45.3ms |       4 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| 21.6% | 19.7ms |       1 | `ActionDispatch::SSL#flag_cookies_as_secure!`             | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`       |
| 19.4% | 17.7ms |       2 | `Rack::Response::Helpers#set_cookie`                      | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/response.rb`                              |
|  9.5% |  8.7ms |       1 | `ActiveSupport::BroadcastLogger#dispatch`                 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb`   |

##### `Kernel#require` (`<internal:/usr/local/lib/ruby/3.4.0/rubygems/core_ext/kernel_require.rb>`)

|     % |   Time | Samples | Caller                                 | Location                                          |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------- |
| 86.3% | 71.8ms |       7 | `Kernel#require_relative [c function]` | `<unknown>`                                       |
| 13.1% | 10.9ms |       1 | `Bundler::Definition.build`            | `/usr/local/lib/ruby/3.4.0/bundler/definition.rb` |
| 10.4% |  8.6ms |       1 | `Bundler.ui`                           | `/usr/local/lib/ruby/3.4.0/bundler.rb`            |

##### `Kernel#tap` (`<internal:kernel>`)

|     % |   Time | Samples | Caller                                                       | Location                                                                            |
| ----: | -----: | ------: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| 80.9% | 38.4ms |       3 | `ActionDispatch::SSL#call`                                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`     |
| 19.1% |  9.0ms |       1 | `ActionDispatch::Cookies::AbstractCookieJar#cookie_metadata` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `Bundler.setup` (`/usr/local/lib/ruby/3.4.0/bundler.rb`)

|      % |   Time | Samples | Caller                      | Location                                     |
| -----: | -----: | ------: | --------------------------- | -------------------------------------------- |
| 100.0% | 42.5ms |       4 | `block in <top (required)>` | `/usr/local/lib/ruby/3.4.0/bundler/setup.rb` |

##### `block in <top (required)>` (`/usr/local/lib/ruby/3.4.0/bundler/setup.rb`)

|      % |   Time | Samples | Caller                          | Location                                        |
| -----: | -----: | ------: | ------------------------------- | ----------------------------------------------- |
| 100.0% | 42.5ms |       4 | `Bundler::UI::Shell#with_level` | `/usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb` |

##### `Bundler::UI::Shell#with_level` (`/usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb`)

|      % |   Time | Samples | Caller                       | Location                                        |
| -----: | -----: | ------: | ---------------------------- | ----------------------------------------------- |
| 100.0% | 42.5ms |       4 | `Bundler::UI::Shell#silence` | `/usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb` |

##### `Bundler::UI::Shell#silence` (`/usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb`)

|      % |   Time | Samples | Caller                        | Location    |
| -----: | -----: | ------: | ----------------------------- | ----------- |
| 100.0% | 42.5ms |       4 | `Kernel#require [c function]` | `<unknown>` |

##### `OpenSSL::HMAC.digest` (`/usr/local/lib/ruby/3.4.0/openssl/hmac.rb`)

|      % |   Time | Samples | Caller                                                       | Location                                                                                            |
| -----: | -----: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 100.0% | 30.1ms |       3 | `ActionController::RequestForgeryProtection#csrf_token_hmac` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `OpenSSL::Cipher#random_iv` (`/usr/local/lib/ruby/3.4.0/openssl/cipher.rb`)

|      % |   Time | Samples | Caller                                    | Location                                                                             |
| -----: | -----: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 26.2ms |       3 | `ActiveSupport::MessageEncryptor#encrypt` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/message_encryptor.rb` |

##### `block (3 levels) in <class:Digest>` (`/usr/local/lib/ruby/3.4.0/openssl/digest.rb`)

|      % |   Time | Samples | Caller                   | Location    |
| -----: | -----: | ------: | ------------------------ | ----------- |
| 100.0% | 23.4ms |       2 | `Class#new [c function]` | `<unknown>` |

##### `Bundler::Definition.build` (`/usr/local/lib/ruby/3.4.0/bundler/definition.rb`)

|      % |   Time | Samples | Caller               | Location                               |
| -----: | -----: | ------: | -------------------- | -------------------------------------- |
| 100.0% | 21.6ms |       2 | `Bundler.definition` | `/usr/local/lib/ruby/3.4.0/bundler.rb` |

##### `Bundler.definition` (`/usr/local/lib/ruby/3.4.0/bundler.rb`)

|      % |   Time | Samples | Caller          | Location                               |
| -----: | -----: | ------: | --------------- | -------------------------------------- |
| 100.0% | 21.6ms |       2 | `Bundler.setup` | `/usr/local/lib/ruby/3.4.0/bundler.rb` |

##### `Bundler::Runtime#setup` (`/usr/local/lib/ruby/3.4.0/bundler/runtime.rb`)

|      % |   Time | Samples | Caller          | Location                               |
| -----: | -----: | ------: | --------------- | -------------------------------------- |
| 100.0% | 20.9ms |       2 | `Bundler.setup` | `/usr/local/lib/ruby/3.4.0/bundler.rb` |

##### `Set#include?` (`/usr/local/lib/ruby/3.4.0/set.rb`)

|     % |   Time | Samples | Caller                                        | Location                                                                        |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 50.1% | 10.3ms |       1 | `Rails::HTML::PermitScrubber#scrub_attribute` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |
| 49.9% | 10.2ms |       1 | `Loofah::HTML5::Scrub.scrub_uri_attribute`    | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                |

##### `Time#initialize` (`<internal:timev>`)

|      % |   Time | Samples | Caller                   | Location    |
| -----: | -----: | ------: | ------------------------ | ----------- |
| 100.0% | 20.4ms |       2 | `Class#new [c function]` | `<unknown>` |

##### `Bundler::Settings.key_to_s` (`/usr/local/lib/ruby/3.4.0/bundler/settings.rb`)

|      % |   Time | Samples | Caller                      | Location                                        |
| -----: | -----: | ------: | --------------------------- | ----------------------------------------------- |
| 100.0% | 19.7ms |       1 | `Bundler::Settings.key_for` | `/usr/local/lib/ruby/3.4.0/bundler/settings.rb` |

##### `Bundler::Settings.key_for` (`/usr/local/lib/ruby/3.4.0/bundler/settings.rb`)

|      % |   Time | Samples | Caller                      | Location                                        |
| -----: | -----: | ------: | --------------------------- | ----------------------------------------------- |
| 100.0% | 19.7ms |       1 | `Bundler::Settings#key_for` | `/usr/local/lib/ruby/3.4.0/bundler/settings.rb` |

##### `<compiled>` (`./Gemfile`)

|      % |   Time | Samples | Caller                                   | Location    |
| -----: | -----: | ------: | ---------------------------------------- | ----------- |
| 100.0% | 10.7ms |       1 | `BasicObject#instance_eval [c function]` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `<main>` (`profile.rb`)

|     % |    Time | Samples | Callee                                 | Location                                                    |
| ----: | ------: | ------: | -------------------------------------- | ----------------------------------------------------------- |
| 95.0% |  14.97s |   1,477 | `Rails::Engine#call`                   | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb` |
|  4.8% | 758.4ms |      73 | `Kernel#require_relative [c function]` | `<unknown>`                                                 |
|  0.1% |  14.9ms |       2 | `Rack::BodyProxy#close`                | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/body_proxy.rb`  |
| <0.1% |   7.7ms |       1 | `Comparable#< [c function]`            | `<unknown>`                                                 |

##### `Rails::Engine#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`)

|     % |   Time | Samples | Callee                             | Location                                                                               |
| ----: | -----: | ------: | ---------------------------------- | -------------------------------------------------------------------------------------- |
| 99.8% | 14.95s |   1,474 | `ActionDispatch::AssumeSSL#call`   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb` |
|  0.1% | 17.3ms |       2 | `Rails::Application#build_request` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/application.rb`                       |

##### `ActionDispatch::SSL#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`)

|     % |   Time | Samples | Callee                | Location                                                 |
| ----: | -----: | ------: | --------------------- | -------------------------------------------------------- |
| 99.7% | 14.91s |   1,471 | `Rack::Sendfile#call` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb` |
|  0.3% | 38.4ms |       3 | `Kernel#tap`          | `<internal:kernel>`                                      |

##### `ActionDispatch::AssumeSSL#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`)

|      % |   Time | Samples | Callee                     | Location                                                                        |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.95s |   1,474 | `ActionDispatch::SSL#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionDispatch::Static#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`)

|     % |   Time | Samples | Callee                                | Location                                                                             |
| ----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------ |
| 99.4% | 14.82s |   1,460 | `ActionDispatch::Executor#call`       | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb` |
|  0.5% | 80.9ms |      10 | `ActionDispatch::FileHandler#attempt` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`   |

##### `Rack::Sendfile#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`)

|      % |   Time | Samples | Callee                        | Location                                                                           |
| -----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% | 14.91s |   1,471 | `ActionDispatch::Static#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb` |

##### `Rack::Runtime#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`)

|     % |   Time | Samples | Callee                      | Location                                                        |
| ----: | -----: | ------: | --------------------------- | --------------------------------------------------------------- |
| 99.9% | 14.81s |   1,459 | `Rack::MethodOverride#call` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb` |
|  0.1% |  8.6ms |       1 | `String#% [c function]`     | `<unknown>`                                                     |

##### `ActionDispatch::Executor#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`)

|      % |   Time | Samples | Callee               | Location                                                |
| -----: | -----: | ------: | -------------------- | ------------------------------------------------------- |
| 100.0% | 14.82s |   1,460 | `Rack::Runtime#call` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb` |

##### `Rails::Rack::Logger#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`)

|     % |   Time | Samples | Callee                                          | Location                                                                            |
| ----: | -----: | ------: | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| 99.9% | 14.80s |   1,458 | `Rails::Rack::Logger#call_app`                  | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                    |
|  0.1% |  9.0ms |       1 | `ActiveSupport::BroadcastLogger#method_missing` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb` |

##### `Rails::Rack::SilenceRequest#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`)

|      % |   Time | Samples | Callee                     | Location                                                         |
| -----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------- |
| 100.0% | 14.81s |   1,459 | `Rails::Rack::Logger#call` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb` |

##### `ActionDispatch::RemoteIp#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`)

|      % |   Time | Samples | Callee                             | Location                                                                  |
| -----: | -----: | ------: | ---------------------------------- | ------------------------------------------------------------------------- |
| 100.0% | 14.81s |   1,459 | `Rails::Rack::SilenceRequest#call` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb` |

##### `ActionDispatch::RequestId#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`)

|      % |   Time | Samples | Callee                          | Location                                                                              |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 14.81s |   1,459 | `ActionDispatch::RemoteIp#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb` |

##### `Rack::MethodOverride#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`)

|      % |   Time | Samples | Callee                           | Location                                                                               |
| -----: | -----: | ------: | -------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% | 14.81s |   1,459 | `ActionDispatch::RequestId#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb` |

##### `Rails::Rack::Logger#call_app` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`)

|     % |   Time | Samples | Callee                                                    | Location                                                                                      |
| ----: | -----: | ------: | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 99.9% | 14.78s |   1,456 | `ActionDispatch::ShowExceptions#call`                     | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`   |
|  0.1% | 11.4ms |       1 | `ActiveSupport::Notifications::Instrumenter#build_handle` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb` |
|  0.1% |  8.7ms |       1 | `ActiveSupport::BroadcastLogger#info`                     | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb`           |

##### `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`)

|     % |   Time | Samples | Callee                                                     | Location                                                                              |
| ----: | -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 99.9% | 14.77s |   1,455 | `block in call`                                            | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb` |
| 92.8% | 13.72s |   1,341 | `block in process_action`                                  | `/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`        |
|  0.3% | 48.8ms |       5 | `ActiveSupport::Callbacks::CallbackSequence#invoke_before` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`          |

##### `ActionDispatch::Callbacks#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`)

|      % |   Time | Samples | Callee                                   | Location                                                                     |
| -----: | -----: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 14.78s |   1,456 | `ActiveSupport::Callbacks#run_callbacks` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb` |

##### `ActionDispatch::DebugExceptions#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb`)

|      % |   Time | Samples | Callee                           | Location                                                                              |
| -----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 14.78s |   1,456 | `ActionDispatch::Callbacks#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb` |

##### `ActionDispatch::ShowExceptions#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`)

|      % |   Time | Samples | Callee                                 | Location                                                                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 14.78s |   1,456 | `ActionDispatch::DebugExceptions#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb` |

##### `ActionDispatch::Cookies#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`)

|     % |   Time | Samples | Callee                                     | Location                                                                            |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------- |
| 99.8% | 14.74s |   1,452 | `Rack::Session::Abstract::Persisted#call`  | `/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`         |
|  0.2% | 27.5ms |       3 | `ActionDispatch::Cookies::CookieJar#write` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `block in call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`)

|      % |   Time | Samples | Callee                         | Location                                                                            |
| -----: | -----: | ------: | ------------------------------ | ----------------------------------------------------------------------------------- |
| 100.0% | 14.77s |   1,455 | `ActionDispatch::Cookies#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `Rack::Session::Abstract::Persisted#context` (`/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`)

|     % |    Time | Samples | Callee                                                   | Location                                                                                           |
| ----: | ------: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.3% |  14.64s |   1,440 | `ActionDispatch::ContentSecurityPolicy::Middleware#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/content_security_policy.rb`      |
|  0.7% | 106.4ms |      12 | `ActionDispatch::Session::SessionObject#commit_session`  | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/abstract_store.rb` |

##### `Array#each` (`<internal:array>`)

|     % |    Time | Samples | Callee                                                                 | Location                                                                                |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 95.5% |  13.98s |   1,368 | `block in recognize`                                                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`         |
| 89.1% |  13.04s |   1,275 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `./app/views/statuses/index.html.erb`                                                   |
|  9.3% |   1.35s |     131 | `block (2 levels) in decorate`                                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  8.3% |   1.21s |     119 | `block in scrub_attributes`                                            | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
|  4.1% | 604.7ms |      67 | `block in digest_body`                                                 | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |

##### `Kernel#public_send [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                                                                                       | Location                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 96.9% |  13.06s |   1,277 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128`        | `./app/views/statuses/index.html.erb`                                            |
| 18.8% |   2.53s |     242 | `ActiveSupport::NumberHelper#number_to_delimited`                                            | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb` |
|  3.1% | 411.7ms |      39 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `./app/views/layouts/application.html.erb`                                       |

##### `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`)

|     % |   Time | Samples | Callee                                      | Location                                                                         |
| ----: | -----: | ------: | ------------------------------------------- | -------------------------------------------------------------------------------- |
| 99.9% | 13.04s |   1,275 | `Array#each`                                | `<internal:array>`                                                               |
|  0.1% | 19.5ms |       2 | `ActionView::Helpers::TextHelper#pluralize` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/text_helper.rb` |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`)

|     % |    Time | Samples | Callee                                                    | Location                                                                             |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 65.5% |   8.54s |     835 | `ActionView::Helpers::SanitizeHelper#sanitize`            | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb` |
| 21.8% |   2.84s |     273 | `ActionView::Helpers::NumberHelper#number_with_delimiter` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`   |
|  4.2% | 549.3ms |      55 | `block in define_url_helper`                              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`   |
|  3.1% | 407.8ms |      41 | `ActionView::Helpers::UrlHelper#link_to`                  | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`      |
|  1.4% | 187.4ms |      19 | `ActionView::OutputBuffer#<<`                             | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                 |

##### `Integer#upto [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                   | Location                                                                                |
| ----: | ------: | ------: | ------------------------ | --------------------------------------------------------------------------------------- |
| 97.5% |   4.77s |     465 | `block in each`          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
|  2.3% | 111.0ms |      11 | `(unknown) [c function]` | `<unknown>`                                                                             |

##### `(unknown) [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                                  | Location                                                                                |
| ----: | ------: | ------: | --------------------------------------- | --------------------------------------------------------------------------------------- |
| 69.5% |   1.53s |     149 | `block in to_html`                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
|  5.0% | 111.0ms |      11 | `block in apply_rules_with_transitions` | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`        |
|  4.1% |  91.0ms |       9 | `block in parse`                        | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`        |
|  3.3% |  72.8ms |       7 | `block in attributes`                   | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`     |
|  0.4% |   9.9ms |       1 | `block in <module:Utils>`               | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                   |

##### `Hash#each [c function]` (`<unknown>`)

|     % |   Time | Samples | Callee                           | Location                                                                                |
| ----: | -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------- |
| 89.2% |  1.63s |     158 | `block in decorate`              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  1.7% | 31.0ms |       3 | `block (2 levels) in eager_load` | `/usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/loader/eager_load.rb`               |
|  1.5% | 27.5ms |       3 | `block in write`                 | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`     |
|  1.0% | 18.3ms |       2 | `(unknown) [c function]`         | `<unknown>`                                                                             |
|  0.5% |  9.6ms |       1 | `block in assign`                | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`                       |

##### `Enumerable#map [c function]` (`<unknown>`)

|     % |   Time | Samples | Callee                         | Location                                                                                |
| ----: | -----: | ------: | ------------------------------ | --------------------------------------------------------------------------------------- |
| 89.4% |  1.62s |     158 | `Nokogiri::XML::NodeSet#each`  | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
|  5.0% | 91.0ms |       9 | `Enumerator#each [c function]` | `<unknown>`                                                                             |
|  1.0% | 18.3ms |       2 | `Hash#each [c function]`       | `<unknown>`                                                                             |

##### `Kernel#extend [c function]` (`<unknown>`)

|     % |  Time | Samples | Callee                              | Location    |
| ----: | ----: | ------: | ----------------------------------- | ----------- |
| 95.4% | 1.29s |     126 | `Module#extend_object [c function]` | `<unknown>` |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                             | Location                                                                                |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------- |
| 81.5% | 966.5ms |      94 | `Nokogiri::XML::Document#decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                                             | Location    |
| ----: | ------: | ------: | -------------------------------------------------- | ----------- |
| 26.5% | 274.5ms |      26 | `Nokogiri::XML::Node#internal_subset [c function]` | `<unknown>` |

##### `Kernel#catch [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                          | Location                                                           |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------ |
| 99.0% | 965.6ms |      91 | `block in translate_key`        | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                   |
| 43.2% | 421.2ms |      39 | `block (2 levels) in translate` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb` |
|  3.1% |  30.4ms |       3 | `block in resolve_entry`        | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                                 | Location                                                                   |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------------------------------------- |
| 52.7% | 405.7ms |      38 | `Kernel#require_relative [c function]` | `<unknown>`                                                                |
| 47.3% | 364.1ms |      36 | `Rails::Application#initialize!`       | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/application.rb`           |
| 31.5% | 242.6ms |      23 | `block (2 levels) in replace_require`  | `/usr/local/lib/ruby/3.4.0/bundled_gems.rb`                                |
| 10.5% |  80.8ms |       8 | `(unknown) [c function]`               | `<unknown>`                                                                |
|  9.3% |  71.8ms |       7 | `Kernel#require`                       | `<internal:/usr/local/lib/ruby/3.4.0/rubygems/core_ext/kernel_require.rb>` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                                 | Location                                                      |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------------------------- |
| 32.4% | 192.3ms |      19 | `Loofah::DocumentDecorator#initialize` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Class#new [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                                                              | Location                                                                                          |
| ----: | ------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 22.2% | 113.7ms |      11 | `ActiveSupport::NumberHelper::NumberConverter#initialize`           | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 10.3% |  52.8ms |       5 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`               |
|  9.1% |  46.3ms |       5 | `ActionDispatch::Response#initialize`                               | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb`                    |
|  5.9% |  30.1ms |       3 | `OpenSSL::HMAC#initialize [c function]`                             | `<unknown>`                                                                                       |
|  4.6% |  23.4ms |       2 | `block (3 levels) in <class:Digest>`                                | `/usr/local/lib/ruby/3.4.0/openssl/digest.rb`                                                     |

##### `Kernel.require [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                                 | Location                                                                |
| ----: | ------: | ------: | -------------------------------------- | ----------------------------------------------------------------------- |
| 53.6% | 242.6ms |      23 | `block (2 levels) in replace_require`  | `/usr/local/lib/ruby/3.4.0/bundled_gems.rb`                             |
| 45.0% | 203.7ms |      19 | `Kernel#require_relative [c function]` | `<unknown>`                                                             |
| 37.3% | 168.6ms |      17 | `(unknown) [c function]`               | `<unknown>`                                                             |
| 36.2% | 163.7ms |      16 | `Kernel#require`                       | `/usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/core_ext/kernel.rb` |
|  9.4% |  42.6ms |       3 | `ActionView.render_tracker=`           | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view.rb`            |

##### `block (2 levels) in replace_require` (`/usr/local/lib/ruby/3.4.0/bundled_gems.rb`)

|      % |    Time | Samples | Callee                        | Location    |
| -----: | ------: | ------: | ----------------------------- | ----------- |
| 100.0% | 452.6ms |      44 | `Kernel.require [c function]` | `<unknown>` |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`./app/views/layouts/application.html.erb`)

|     % |    Time | Samples | Callee                                                    | Location                                                                              |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 70.1% | 288.7ms |      28 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`          | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb`      |
| 16.4% |  67.4ms |       6 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| 11.0% |  45.3ms |       4 | `ActionView::OutputBuffer#<<`                             | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                  |
|  2.5% |  10.3ms |       1 | `ActionView::Helpers::CspHelper#csp_meta_tag`             | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csp_helper.rb`       |

##### `BasicObject#instance_exec [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                        | Location                                                                               |
| ----: | ------: | ------: | ----------------------------- | -------------------------------------------------------------------------------------- |
| 78.0% | 314.3ms |      31 | `block in <module:Finisher>`  | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/application/finisher.rb`              |
|  9.7% |  39.0ms |       4 | `block in allow_browser`      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/allow_browser.rb` |
|  5.3% |  21.5ms |       2 | `block in <class:Railtie>`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/railtie.rb`             |
|  2.4% |   9.6ms |       1 | `block in <class:Railtie>`    | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/railtie.rb`               |
|  2.3% |   9.4ms |       1 | `block in <module:Bootstrap>` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/application/bootstrap.rb`             |

##### `Nokogiri::XML::DocumentFragment.native_new [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                             | Location                                                                                |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------- |
| 89.7% | 356.2ms |      35 | `Nokogiri::XML::Document#decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                               | Location    |
| ----: | ------: | ------: | ------------------------------------ | ----------- |
| 34.5% | 135.5ms |      13 | `Kernel#initialize_dup [c function]` | `<unknown>` |

##### `Nokogiri::XML::Node#attribute_nodes [c function]` (`<unknown>`)

|     % |    Time | Samples | Callee                             | Location                                                                                |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------- |
| 72.6% | 280.3ms |      27 | `Nokogiri::XML::Document#decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Integer#times` (`<internal:numeric>`)

|     % |   Time | Samples | Callee                       | Location                                                                           |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------- |
| 90.3% | 91.0ms |       9 | `(unknown) [c function]`     | `<unknown>`                                                                        |
|  9.7% |  9.7ms |       1 | `block in parameterize_args` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |

##### `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`)

|     % |   Time | Samples | Callee                                   | Location                                                                           |
| ----: | -----: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| 89.9% | 89.6ms |       9 | `block in define_url_helper`             | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |
| 10.1% | 10.0ms |       1 | `ActionView::Helpers::UrlHelper#link_to` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`    |

##### `Array#map` (`<internal:array>`)

|     % |   Time | Samples | Callee                         | Location                                                                              |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------------------------------------------------------- |
| 49.5% | 45.3ms |       4 | `block in stylesheet_link_tag` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| 19.4% | 17.7ms |       2 | `block in set_cookie_header`   | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                 |
|  9.5% |  8.7ms |       1 | `block in dispatch`            | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb`   |

##### `Kernel#require` (`<internal:/usr/local/lib/ruby/3.4.0/rubygems/core_ext/kernel_require.rb>`)

|      % |   Time | Samples | Callee                        | Location    |
| -----: | -----: | ------: | ----------------------------- | ----------- |
| 100.0% | 83.2ms |       8 | `Kernel#require [c function]` | `<unknown>` |

##### `Kernel#tap` (`<internal:kernel>`)

|     % |   Time | Samples | Callee                     | Location                                                                            |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------------------------------------------- |
| 80.9% | 38.4ms |       3 | `block in call`            | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`     |
| 19.1% |  9.0ms |       1 | `block in cookie_metadata` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `Bundler.setup` (`/usr/local/lib/ruby/3.4.0/bundler.rb`)

|     % |   Time | Samples | Callee                   | Location                                       |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------- |
| 50.9% | 21.6ms |       2 | `Bundler.definition`     | `/usr/local/lib/ruby/3.4.0/bundler.rb`         |
| 49.1% | 20.9ms |       2 | `Bundler::Runtime#setup` | `/usr/local/lib/ruby/3.4.0/bundler/runtime.rb` |

##### `block in <top (required)>` (`/usr/local/lib/ruby/3.4.0/bundler/setup.rb`)

|      % |   Time | Samples | Callee          | Location                               |
| -----: | -----: | ------: | --------------- | -------------------------------------- |
| 100.0% | 42.5ms |       4 | `Bundler.setup` | `/usr/local/lib/ruby/3.4.0/bundler.rb` |

##### `Bundler::UI::Shell#with_level` (`/usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb`)

|      % |   Time | Samples | Callee                      | Location                                     |
| -----: | -----: | ------: | --------------------------- | -------------------------------------------- |
| 100.0% | 42.5ms |       4 | `block in <top (required)>` | `/usr/local/lib/ruby/3.4.0/bundler/setup.rb` |

##### `Bundler::UI::Shell#silence` (`/usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb`)

|      % |   Time | Samples | Callee                          | Location                                        |
| -----: | -----: | ------: | ------------------------------- | ----------------------------------------------- |
| 100.0% | 42.5ms |       4 | `Bundler::UI::Shell#with_level` | `/usr/local/lib/ruby/3.4.0/bundler/ui/shell.rb` |

##### `OpenSSL::HMAC.digest` (`/usr/local/lib/ruby/3.4.0/openssl/hmac.rb`)

|      % |   Time | Samples | Callee                   | Location    |
| -----: | -----: | ------: | ------------------------ | ----------- |
| 100.0% | 30.1ms |       3 | `Class#new [c function]` | `<unknown>` |

##### `OpenSSL::Cipher#random_iv` (`/usr/local/lib/ruby/3.4.0/openssl/cipher.rb`)

|      % |   Time | Samples | Callee                                      | Location    |
| -----: | -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 26.2ms |       3 | `OpenSSL::Random.random_bytes [c function]` | `<unknown>` |

##### `block (3 levels) in <class:Digest>` (`/usr/local/lib/ruby/3.4.0/openssl/digest.rb`)

|      % |   Time | Samples | Callee                                    | Location    |
| -----: | -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% | 23.4ms |       2 | `OpenSSL::Digest#initialize [c function]` | `<unknown>` |

##### `Bundler::Definition.build` (`/usr/local/lib/ruby/3.4.0/bundler/definition.rb`)

|     % |   Time | Samples | Callee                  | Location                                                                   |
| ----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------- |
| 50.5% | 10.9ms |       1 | `Kernel#require`        | `<internal:/usr/local/lib/ruby/3.4.0/rubygems/core_ext/kernel_require.rb>` |
| 49.5% | 10.7ms |       1 | `Bundler::Dsl.evaluate` | `/usr/local/lib/ruby/3.4.0/bundler/dsl.rb`                                 |

##### `Bundler.definition` (`/usr/local/lib/ruby/3.4.0/bundler.rb`)

|      % |   Time | Samples | Callee                      | Location                                          |
| -----: | -----: | ------: | --------------------------- | ------------------------------------------------- |
| 100.0% | 21.6ms |       2 | `Bundler::Definition.build` | `/usr/local/lib/ruby/3.4.0/bundler/definition.rb` |

##### `Bundler::Runtime#setup` (`/usr/local/lib/ruby/3.4.0/bundler/runtime.rb`)

|     % |   Time | Samples | Callee                                             | Location                                                    |
| ----: | -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------- |
| 56.5% | 11.8ms |       1 | `Bundler::RubygemsIntegration#replace_entrypoints` | `/usr/local/lib/ruby/3.4.0/bundler/rubygems_integration.rb` |
| 43.5% |  9.1ms |       1 | `Bundler::Definition#specs_for`                    | `/usr/local/lib/ruby/3.4.0/bundler/definition.rb`           |

##### `Bundler::Settings.key_for` (`/usr/local/lib/ruby/3.4.0/bundler/settings.rb`)

|      % |   Time | Samples | Callee                       | Location                                        |
| -----: | -----: | ------: | ---------------------------- | ----------------------------------------------- |
| 100.0% | 19.7ms |       1 | `Bundler::Settings.key_to_s` | `/usr/local/lib/ruby/3.4.0/bundler/settings.rb` |

##### `<compiled>` (`./Gemfile`)

|      % |   Time | Samples | Callee                | Location                                   |
| -----: | -----: | ------: | --------------------- | ------------------------------------------ |
| 100.0% | 10.7ms |       1 | `Bundler::Dsl#source` | `/usr/local/lib/ruby/3.4.0/bundler/dsl.rb` |

## Hottest call stacks

Call stacks with the most wall time spent in their leaf frame.

Common call stack: `Rack::ETag#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`) ← `Rack::ConditionalGet#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/conditional_get.rb`) ← `Rack::Head#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/head.rb`) ← `ActionDispatch::ContentSecurityPolicy::Middleware#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/content_security_policy.rb`) ← `Rack::Session::Abstract::Persisted#context` (`/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`) ← `Rack::Session::Abstract::Persisted#call` ← `ActionDispatch::Cookies#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`) ← `block in call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `ActionDispatch::Callbacks#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`) ← `ActionDispatch::DebugExceptions#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb`) ← `ActionDispatch::ShowExceptions#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`) ← `Rails::Rack::Logger#call_app` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`) ← `Rails::Rack::Logger#call` ← `Rails::Rack::SilenceRequest#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`) ← `ActionDispatch::RemoteIp#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`) ← `ActionDispatch::RequestId#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`) ← `Rack::MethodOverride#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`) ← `Rack::Runtime#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`) ← `ActionDispatch::Executor#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`) ← `ActionDispatch::Static#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`) ← `Rack::Sendfile#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`) ← `ActionDispatch::SSL#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`) ← `ActionDispatch::AssumeSSL#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`) ← `Rails::Engine#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`) ← `<main>` (`profile.rb`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.8% | 762.5ms |      74 | `Nokogiri::Gumbo.fragment [c function]` ← `Nokogiri::HTML5::DocumentFragment#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`) ← `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3.8% | 604.7ms |      67 | `Digest::Base#<< [c function]` ← `block in digest_body` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`) ← `Array#each` (`<internal:array>`) ← `Rack::ETag#digest_body` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.7% | 427.4ms |      41 | `Nokogiri::XML::Node#html_standard_serialize [c function]` ← `Nokogiri::HTML5::Node#write_to` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`) ← `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`) ← `Nokogiri::XML::Node#to_format` ← `Nokogiri::XML::Node#to_html` ← `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `(unknown) [c function]` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Enumerable#map [c function]` ← `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Rails::HTML::Sanitizer#properly_encode` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                  |
| 2.5% | 401.3ms |      39 | `Nokogiri::HTML4::Document.new [c function]` ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.1% | 339.0ms |      34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.8% | 289.9ms |      29 | `Module#extend_object [c function]` ← `Kernel#extend [c function]` ← `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Array#each` (`<internal:array>`) ← `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#children [c function]` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% | 285.8ms |      27 | `Module#extend_object [c function]` ← `Kernel#extend [c function]` ← `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Array#each` (`<internal:array>`) ← `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#children [c function]` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                 |
| 1.8% | 284.6ms |      28 | `String#encode [c function]` ← `Nokogiri::HTML5::Node#write_to` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`) ← `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`) ← `Nokogiri::XML::Node#to_format` ← `Nokogiri::XML::Node#to_html` ← `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `(unknown) [c function]` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Enumerable#map [c function]` ← `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Rails::HTML::Sanitizer#properly_encode` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                |
| 1.5% | 233.1ms |      23 | `Module#extend_object [c function]` ← `Kernel#extend [c function]` ← `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Array#each` (`<internal:array>`) ← `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::DocumentFragment.native_new [c function]` ← `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.4% | 223.5ms |      22 | `Hash#merge [c function]` ← `I18n::Backend::Fallbacks#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`) ← `block in translate_key` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`) ← `Kernel#catch [c function]` ← `I18n::Base#translate_key` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`) ← `I18n::Base#translate` ← `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter#format_options` ← `ActiveSupport::NumberHelper::NumberConverter#options` ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`) ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` ← `ActiveSupport::NumberHelper::NumberConverter#execute` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter.convert` ← `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`) ← `Kernel#public_send [c function]` ← `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`) ← `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` ← `ActionView::Helpers::NumberHelper#delegate_number_helper_method` ← `ActionView::Helpers::NumberHelper#number_with_delimiter` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                      |
| 1.3% | 203.8ms |      20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter#format_options` ← `ActiveSupport::NumberHelper::NumberConverter#options` ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`) ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` ← `ActiveSupport::NumberHelper::NumberConverter#execute` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter.convert` ← `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`) ← `Kernel#public_send [c function]` ← `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`) ← `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` ← `ActionView::Helpers::NumberHelper#delegate_number_helper_method` ← `ActionView::Helpers::NumberHelper#number_with_delimiter` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.2% | 194.7ms |      19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`) ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` ← `ActiveSupport::NumberHelper::NumberConverter#execute` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter.convert` ← `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`) ← `Kernel#public_send [c function]` ← `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`) ← `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` ← `ActionView::Helpers::NumberHelper#delegate_number_helper_method` ← `ActionView::Helpers::NumberHelper#number_with_delimiter` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% | 180.1ms |      18 | `String#gsub [c function]` ← `Loofah::HTML5::Scrub.allowed_uri?` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`) ← `Loofah::HTML5::Scrub.scrub_uri_attribute` ← `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `block in scrub_attributes` ← `Array#each` (`<internal:array>`) ← `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `Rails::HTML::PermitScrubber#scrub` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                             |
| 1.0% | 165.2ms |      16 | `Module#extend_object [c function]` ← `Kernel#extend [c function]` ← `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Array#each` (`<internal:array>`) ← `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#attribute_nodes [c function]` ← `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `Rails::HTML::PermitScrubber#scrub` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`) |
| 1.0% | 164.9ms |      16 | `String#gsub! [c function]` ← `Loofah::HTML5::Scrub.scrub_uri_attribute` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`) ← `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `block in scrub_attributes` ← `Array#each` (`<internal:array>`) ← `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `Rails::HTML::PermitScrubber#scrub` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                  |
| 1.0% | 163.5ms |      15 | `Module#extend_object [c function]` ← `Kernel#extend [c function]` ← `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Array#each` (`<internal:array>`) ← `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#internal_subset [c function]` ← `Nokogiri::Gumbo.fragment [c function]` ← `Nokogiri::HTML5::DocumentFragment#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`) ← `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                         |
| 1.0% | 160.9ms |      16 | `String.new [c function]` ← `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`) ← `Nokogiri::XML::Node#to_format` ← `Nokogiri::XML::Node#to_html` ← `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `(unknown) [c function]` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Enumerable#map [c function]` ← `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Rails::HTML::Sanitizer#properly_encode` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% | 123.3ms |      12 | `Nokogiri::HTML5::Node#write_to` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`) ← `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`) ← `Nokogiri::XML::Node#to_format` ← `Nokogiri::XML::Node#to_html` ← `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `(unknown) [c function]` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Enumerable#map [c function]` ← `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Rails::HTML::Sanitizer#properly_encode` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                               |
| 0.7% | 118.3ms |      11 | `Nokogiri::HTML5::DocumentFragment#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`) ← `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% | 115.1ms |      12 | `ActionView::OutputBuffer#<<` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Array#each` (`<internal:array>`) ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`./app/views/statuses/index.html.erb`) ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` (`<internal:array>`) ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

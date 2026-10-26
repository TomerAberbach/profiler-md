# Sampling profile diff

Took 3.92s → 3.69s (-224.00ms, -5.7%) over 3,124 samples → 3,134 samples (1.3ms → 1.2ms per sample).

| Category    | Change |     Delta |             % |              Time |       Samples |
| ----------- | -----: | --------: | ------------: | ----------------: | ------------: |
| Third-party |  -5.9% | -212.00ms | 91.4% → 91.2% |     3.58s → 3.37s | 2,996 → 2,981 |
| Ours        |  -3.5% |  -12.00ms |   8.6% → 8.8% | 339.0ms → 327.0ms |     128 → 153 |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

Call stacks missing their outermost callers account for 23.0% → 22.5% of the time spent.

`truncated` stands for missing outermost callers.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |   Samples | Function                                                                   | Location                                                                       |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|   +5.1% | +32.00ms | 16.1% → 17.9% | 630.0ms → 662.0ms | 630 → 662 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                    | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  +17.2% | +23.00ms |   3.4% → 4.2% | 134.0ms → 157.0ms | 134 → 157 | `Composer\Pcre\Preg::isMatchStrictGroups`                                  | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
|  +12.7% | +20.00ms |   4.0% → 4.8% | 157.0ms → 177.0ms | 157 → 177 | `Composer\Pcre\Preg::matchAll`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
|  +34.4% | +11.00ms |   0.8% → 1.2% |   32.0ms → 43.0ms |   32 → 43 | `Composer\Util\Filesystem::normalizePath`                                  | `./composer/src/Composer/Util/Filesystem.php`                                  |
| +183.3% | +11.00ms |   0.2% → 0.5% |    6.0ms → 17.0ms |    6 → 17 | `Composer\Autoload\AutoloadGenerator::getPathCode`                         | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                       |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |    0 → 10 | `(anonymous)`                                                              | `./composer/src/Composer/Console/Application.php:349`                          |
|   +6.1% |  +9.00ms |   3.8% → 4.2% | 148.0ms → 157.0ms | 148 → 157 | `Composer\Pcre\Preg::match`                                                | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
| +100.0% |  +9.00ms |   0.2% → 0.5% |    9.0ms → 18.0ms |    9 → 18 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`              | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|   +0.9% |  +4.00ms | 10.8% → 11.5% | 423.0ms → 427.0ms | 423 → 427 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                         | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
| +200.0% |  +4.00ms |   0.1% → 0.2% |     2.0ms → 6.0ms |     2 → 6 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::accept` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  +57.1% |  +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms |    7 → 11 | `(anonymous)`                                                              | `./vendor/composer/autoload_classmap.php`                                      |
|   +2.1% |  +3.00ms |   3.6% → 3.9% | 142.0ms → 145.0ms | 142 → 145 | `Composer\Pcre\Preg::matchStrictGroups`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 4 | `Symfony\Component\Finder\SplFileInfo::__construct`                        | `./composer/vendor/symfony/finder/SplFileInfo.php`                             |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |     0 → 3 | `Composer\Util\Filesystem::filesAreEqual`                                  | `./composer/src/Composer/Util/Filesystem.php`                                  |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |     0 → 3 | `Composer\Util\Platform::getCwd`                                           | `./composer/src/Composer/Util/Platform.php`                                    |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |     1 → 3 | `Composer\Factory::createComposer`                                         | `./composer/src/Composer/Factory.php`                                          |
| +100.0% |  +2.00ms |          0.1% |     2.0ms → 4.0ms |     2 → 4 | `JsonSchema\SchemaStorage::expandRefs`                                     | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php` |
|  +22.2% |  +2.00ms |   0.2% → 0.3% |    9.0ms → 11.0ms |    9 → 11 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                 | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
| +100.0% |  +2.00ms |          0.1% |     2.0ms → 4.0ms |     2 → 4 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`    | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
|   +6.3% |  +1.00ms |   0.4% → 0.5% |   16.0ms → 17.0ms |   16 → 17 | `Composer\Autoload\ClassLoader::loadClass`                                 | `./composer/vendor/composer/ClassLoader.php`                                   |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function                                                                        | Location                                                                                    |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|   +5.1% | +32.00ms | 16.1% → 17.9% | 630.0ms → 662.0ms | 630 → 662 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`                      |
|  +17.2% | +23.00ms |   3.4% → 4.2% | 134.0ms → 157.0ms | 134 → 157 | `Composer\Pcre\Preg::isMatchStrictGroups`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                                              |
|  +12.7% | +20.00ms |   4.0% → 4.8% | 157.0ms → 177.0ms | 157 → 177 | `Composer\Pcre\Preg::matchAll`                                                  | `./composer/vendor/composer/pcre/src/Preg.php`                                              |
|   +6.1% |  +9.00ms |   3.8% → 4.2% | 148.0ms → 157.0ms | 148 → 157 | `Composer\Pcre\Preg::match`                                                     | `./composer/vendor/composer/pcre/src/Preg.php`                                              |
| +100.0% |  +9.00ms |   0.2% → 0.5% |    9.0ms → 18.0ms |    9 → 18 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`                  |
|   +0.9% |  +4.00ms | 10.8% → 11.5% | 423.0ms → 427.0ms | 423 → 427 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                              | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`                     |
| +200.0% |  +4.00ms |   0.1% → 0.2% |     2.0ms → 6.0ms |     2 → 6 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::accept`      | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`              |
|  +57.1% |  +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms |    7 → 11 | `(anonymous)`                                                                   | `./vendor/composer/autoload_classmap.php`                                                   |
|   +2.1% |  +3.00ms |   3.6% → 3.9% | 142.0ms → 145.0ms | 142 → 145 | `Composer\Pcre\Preg::matchStrictGroups`                                         | `./composer/vendor/composer/pcre/src/Preg.php`                                              |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 4 | `Symfony\Component\Finder\SplFileInfo::__construct`                             | `./composer/vendor/symfony/finder/SplFileInfo.php`                                          |
| +100.0% |  +2.00ms |          0.1% |     2.0ms → 4.0ms |     2 → 4 | `JsonSchema\SchemaStorage::expandRefs`                                          | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php`              |
|  +22.2% |  +2.00ms |   0.2% → 0.3% |    9.0ms → 11.0ms |    9 → 11 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                      | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`                     |
| +100.0% |  +2.00ms |          0.1% |     2.0ms → 4.0ms |     2 → 4 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`                  |
|   +6.3% |  +1.00ms |   0.4% → 0.5% |   16.0ms → 17.0ms |   16 → 17 | `Composer\Autoload\ClassLoader::loadClass`                                      | `./composer/vendor/composer/ClassLoader.php`                                                |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `JsonSchema\Constraints\BaseConstraint::__construct`                            | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/BaseConstraint.php` |
| +100.0% |  +1.00ms |  <0.1% → 0.1% |     1.0ms → 2.0ms |     1 → 2 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`              |
|   +0.7% |  +1.00ms |   3.5% → 3.8% | 139.0ms → 140.0ms | 139 → 140 | `Composer\Pcre\Preg::enforceNonNullMatches`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                                              |
| +100.0% |  +1.00ms |  <0.1% → 0.1% |     1.0ms → 2.0ms |     1 → 2 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`                        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`                     |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`              |
| +100.0% |  +1.00ms |  <0.1% → 0.1% |     1.0ms → 2.0ms |     1 → 2 | `Composer\Pcre\Preg::checkSetOrder`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                                              |

##### Ours

|  Change |    Delta |            % |            Time | Samples | Function                                                  | Location                                                  |
| ------: | -------: | -----------: | --------------: | ------: | --------------------------------------------------------- | --------------------------------------------------------- |
|  +34.4% | +11.00ms |  0.8% → 1.2% | 32.0ms → 43.0ms | 32 → 43 | `Composer\Util\Filesystem::normalizePath`                 | `./composer/src/Composer/Util/Filesystem.php`             |
| +183.3% | +11.00ms |  0.2% → 0.5% |  6.0ms → 17.0ms |  6 → 17 | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php`  |
|     new | +10.00ms |  0.0% → 0.3% |    0ms → 10.0ms |  0 → 10 | `(anonymous)`                                             | `./composer/src/Composer/Console/Application.php:349`     |
|     new |  +3.00ms |  0.0% → 0.1% |     0ms → 3.0ms |   0 → 3 | `Composer\Util\Filesystem::filesAreEqual`                 | `./composer/src/Composer/Util/Filesystem.php`             |
|     new |  +3.00ms |  0.0% → 0.1% |     0ms → 3.0ms |   0 → 3 | `Composer\Util\Platform::getCwd`                          | `./composer/src/Composer/Util/Platform.php`               |
| +200.0% |  +2.00ms | <0.1% → 0.1% |   1.0ms → 3.0ms |   1 → 3 | `Composer\Factory::createComposer`                        | `./composer/src/Composer/Factory.php`                     |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                                             | `./composer/src/Composer/Command/InitCommand.php`         |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\IO\ConsoleIO::doWrite`                          | `./composer/src/Composer/IO/ConsoleIO.php`                |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\IO\ConsoleIO::writeError`                       | `./composer/src/Composer/IO/ConsoleIO.php`                |
| +100.0% |  +1.00ms | <0.1% → 0.1% |   1.0ms → 2.0ms |   1 → 2 | `Composer\Util\ErrorHandler::handle`                      | `./composer/src/Composer/Util/ErrorHandler.php`           |
|  +50.0% |  +1.00ms |         0.1% |   2.0ms → 3.0ms |   2 → 3 | `Composer\Util\Silencer::suppress`                        | `./composer/src/Composer/Util/Silencer.php`               |
| +100.0% |  +1.00ms | <0.1% → 0.1% |   1.0ms → 2.0ms |   1 → 2 | `Composer\Factory::createConfig`                          | `./composer/src/Composer/Factory.php`                     |
| +100.0% |  +1.00ms | <0.1% → 0.1% |   1.0ms → 2.0ms |   1 → 2 | `Composer\Util\StreamContextFactory::getTlsDefaults`      | `./composer/src/Composer/Util/StreamContextFactory.php`   |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                                             | `./composer/src/Composer/Package/CompletePackage.php`     |
|  +33.3% |  +1.00ms |         0.1% |   3.0ms → 4.0ms |   3 → 4 | `Composer\Autoload\AutoloadGenerator::dump`               | `./composer/src/Composer/Autoload/AutoloadGenerator.php`  |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Command\DumpAutoloadCommand::execute`           | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |
|  +50.0% |  +1.00ms |         0.1% |   2.0ms → 3.0ms |   2 → 3 | `Composer\Util\Filesystem::isReadable`                    | `./composer/src/Composer/Util/Filesystem.php`             |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Console\Application::getDefaultInputDefinition` | `./composer/src/Composer/Console/Application.php`         |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Package\Loader\ArrayLoader::configureObject`    | `./composer/src/Composer/Package/Loader/ArrayLoader.php`  |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                                             | `./composer/src/Composer/Command/RequireCommand.php`      |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |   Samples | Function                                                                    | Location                                                                   |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -92.5% | -161.00ms |   4.4% → 0.4% |  174.0ms → 13.0ms |     2 → 3 | `Symfony\Component\Console\Terminal::readFromProcess`                       | `./composer/vendor/symfony/console/Terminal.php`                           |
|  -14.6% |  -34.00ms |   5.9% → 5.4% | 233.0ms → 199.0ms |   23 → 25 | `Composer\Util\Silencer::call`                                              | `./composer/src/Composer/Util/Silencer.php`                                |
|   -9.8% |  -28.00ms |   7.3% → 7.0% | 287.0ms → 259.0ms | 287 → 259 | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|   -3.5% |  -20.00ms | 14.7% → 15.0% | 576.0ms → 556.0ms | 163 → 176 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
|   -9.7% |  -19.00ms |   5.0% → 4.8% | 196.0ms → 177.0ms | 196 → 177 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  -50.0% |  -18.00ms |   0.9% → 0.5% |   36.0ms → 18.0ms |   36 → 18 | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  -23.6% |  -13.00ms |   1.4% → 1.1% |   55.0ms → 42.0ms |   55 → 42 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  -68.4% |  -13.00ms |   0.5% → 0.2% |    19.0ms → 6.0ms |    19 → 6 | `Composer\Pcre\Preg::replaceCallback`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| removed |  -10.00ms |   0.3% → 0.0% |      10.0ms → 0ms |    10 → 0 | `(anonymous)`                                                               | `./composer/src/Composer/Console/Application.php:353`                      |
|  -57.1% |   -8.00ms |   0.4% → 0.2% |    14.0ms → 6.0ms |    14 → 6 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`        | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|   -7.1% |   -7.00ms |          2.5% |   99.0ms → 92.0ms |   99 → 92 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  -75.0% |   -6.00ms |   0.2% → 0.1% |     8.0ms → 2.0ms |     8 → 2 | `Composer\Pcre\Preg::replace`                                               | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|   -7.8% |   -5.00ms |          1.6% |   64.0ms → 59.0ms |   64 → 59 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|   -9.1% |   -4.00ms |          1.1% |   44.0ms → 40.0ms |   44 → 40 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  -22.2% |   -4.00ms |   0.5% → 0.4% |   18.0ms → 14.0ms |   18 → 14 | `Composer\Util\Filesystem::findShortestPath`                                | `./composer/src/Composer/Util/Filesystem.php`                              |
|  -80.0% |   -4.00ms |  0.1% → <0.1% |     5.0ms → 1.0ms |     5 → 1 | `Symfony\Component\Process\Process::getDefaultEnv`                          | `./composer/vendor/symfony/process/Process.php`                            |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     2 → 0 | `Symfony\Component\Process\Process::wait`                                   | `./composer/vendor/symfony/process/Process.php`                            |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Composer\Pcre\Preg::matchAllStrictGroups`                                  | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|   -3.1% |   -3.00ms |   2.4% → 2.5% |   96.0ms → 93.0ms |   96 → 93 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| removed |   -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     1 → 0 | `(anonymous)`                                                               | `./composer/vendor/autoload.php`                                           |

##### Third-party

|  Change |     Delta |             % |              Time |   Samples | Function                                                                    | Location                                                                          |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
|  -92.5% | -161.00ms |   4.4% → 0.4% |  174.0ms → 13.0ms |     2 → 3 | `Symfony\Component\Console\Terminal::readFromProcess`                       | `./composer/vendor/symfony/console/Terminal.php`                                  |
|   -9.8% |  -28.00ms |   7.3% → 7.0% | 287.0ms → 259.0ms | 287 → 259 | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|   -3.5% |  -20.00ms | 14.7% → 15.0% | 576.0ms → 556.0ms | 163 → 176 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                           |
|   -9.7% |  -19.00ms |   5.0% → 4.8% | 196.0ms → 177.0ms | 196 → 177 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  -50.0% |  -18.00ms |   0.9% → 0.5% |   36.0ms → 18.0ms |   36 → 18 | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                                   |
|  -23.6% |  -13.00ms |   1.4% → 1.1% |   55.0ms → 42.0ms |   55 → 42 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  -68.4% |  -13.00ms |   0.5% → 0.2% |    19.0ms → 6.0ms |    19 → 6 | `Composer\Pcre\Preg::replaceCallback`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|  -57.1% |   -8.00ms |   0.4% → 0.2% |    14.0ms → 6.0ms |    14 → 6 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`        | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|   -7.1% |   -7.00ms |          2.5% |   99.0ms → 92.0ms |   99 → 92 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  -75.0% |   -6.00ms |   0.2% → 0.1% |     8.0ms → 2.0ms |     8 → 2 | `Composer\Pcre\Preg::replace`                                               | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|   -7.8% |   -5.00ms |          1.6% |   64.0ms → 59.0ms |   64 → 59 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`        |
|   -9.1% |   -4.00ms |          1.1% |   44.0ms → 40.0ms |   44 → 40 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  -80.0% |   -4.00ms |  0.1% → <0.1% |     5.0ms → 1.0ms |     5 → 1 | `Symfony\Component\Process\Process::getDefaultEnv`                          | `./composer/vendor/symfony/process/Process.php`                                   |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     2 → 0 | `Symfony\Component\Process\Process::wait`                                   | `./composer/vendor/symfony/process/Process.php`                                   |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Composer\Pcre\Preg::matchAllStrictGroups`                                  | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|   -3.1% |   -3.00ms |   2.4% → 2.5% |   96.0ms → 93.0ms |   96 → 93 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
| removed |   -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     1 → 0 | `(anonymous)`                                                               | `./composer/vendor/autoload.php`                                                  |
| removed |   -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Composer\ClassMapGenerator\ClassMapGenerator::getCwd`                      | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`        |
|  -40.0% |   -2.00ms |          0.1% |     5.0ms → 3.0ms |     5 → 3 | `JsonSchema\Uri\UriRetriever::loadSchema`                                   | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
| removed |   -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `(anonymous)`                                                               | `./vendor/composer/autoload_namespaces.php`                                       |

##### Ours

|  Change |    Delta |            % |              Time | Samples | Function                                                 | Location                                                      |
| ------: | -------: | -----------: | ----------------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------- |
|  -14.6% | -34.00ms |  5.9% → 5.4% | 233.0ms → 199.0ms | 23 → 25 | `Composer\Util\Silencer::call`                           | `./composer/src/Composer/Util/Silencer.php`                   |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |  10 → 0 | `(anonymous)`                                            | `./composer/src/Composer/Console/Application.php:353`         |
|  -22.2% |  -4.00ms |  0.5% → 0.4% |   18.0ms → 14.0ms | 18 → 14 | `Composer\Util\Filesystem::findShortestPath`             | `./composer/src/Composer/Util/Filesystem.php`                 |
| removed |  -2.00ms |  0.1% → 0.0% |       2.0ms → 0ms |   2 → 0 | `Composer\EventDispatcher\EventDispatcher::getListeners` | `./composer/src/Composer/EventDispatcher/EventDispatcher.php` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                            | `./composer/src/Composer/Console/Application.php`             |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                            | `./composer/src/Composer/Command/CreateProjectCommand.php`    |
|  -50.0% |  -1.00ms | 0.1% → <0.1% |     2.0ms → 1.0ms |       1 | `(anonymous)`                                            | `./composer/src/Composer/Command/ShowCommand.php`             |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                            | `./composer/src/Composer/Command/ArchiveCommand.php`          |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                            | `./composer/src/Composer/Package/Version/VersionParser.php`   |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                            | `./composer/src/Composer/Repository/FilesystemRepository.php` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                            | `./composer/src/Composer/Installer/MetapackageInstaller.php`  |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Util\Filesystem::filePutContentsIfModified`    | `./composer/src/Composer/Util/Filesystem.php`                 |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Factory::getLockFile`                          | `./composer/src/Composer/Factory.php`                         |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Util\Http\CurlDownloader::__construct`         | `./composer/src/Composer/Util/Http/CurlDownloader.php`        |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Config::get`                                   | `./composer/src/Composer/Config.php`                          |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Config::setSourceOfConfigValue`                | `./composer/src/Composer/Config.php`                          |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Package\Package::__construct`                  | `./composer/src/Composer/Package/Package.php`                 |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Util\Filesystem::safeCopy`                     | `./composer/src/Composer/Util/Filesystem.php`                 |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\IO\ConsoleIO::isVerbose`                       | `./composer/src/Composer/IO/ConsoleIO.php`                    |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Package\CompletePackage::setDescription`       | `./composer/src/Composer/Package/CompletePackage.php`         |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                                    | Location                                                                   |
| -----: | -------: | -----: | ----------------: | --------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +5.1% | +32.00ms | 100.0% | 630.0ms → 662.0ms | 630 → 662 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                                        | Location                                                                   |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +17.6% | +23.00ms | 97.8% → 98.1% | 131.0ms → 154.0ms | 131 → 154 | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  -50.0% |  -1.00ms |   1.5% → 0.6% |     2.0ms → 1.0ms |     2 → 1 | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
| +100.0% |  +1.00ms |   0.7% → 1.3% |     1.0ms → 2.0ms |     1 → 2 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time |   Samples | Caller                                                  | Location                                                               |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| +11.3% | +13.00ms | 73.2% → 72.3% | 115.0ms → 128.0ms | 115 → 128 | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| +16.7% |  +7.00ms | 26.8% → 27.7% |   42.0ms → 49.0ms |   42 → 49 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |    Delta |             % |            Time | Samples | Caller                                             | Location                                                 |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
| +110.0% | +11.00ms | 31.3% → 48.8% | 10.0ms → 21.0ms | 10 → 21 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|   -9.5% |  -2.00ms | 65.6% → 44.2% | 21.0ms → 19.0ms | 21 → 19 | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |
| +200.0% |  +2.00ms |   3.1% → 7.0% |   1.0ms → 3.0ms |   1 → 3 | `Composer\Util\Filesystem::findShortestPathCode`   | `./composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|  Change |    Delta |      % |           Time | Samples | Caller                                      | Location                                                 |
| ------: | -------: | -----: | -------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| +183.3% | +11.00ms | 100.0% | 6.0ms → 17.0ms |  6 → 17 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:349`)

| Change |    Delta |             % |         Time | Samples | Caller                         | Location                                    |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------ | ------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time |   Samples | Caller                                  | Location                                       |
| -----: | -------: | ------------: | ----------------: | --------: | --------------------------------------- | ---------------------------------------------- |
|  +7.9% | +11.00ms | 94.6% → 96.2% | 140.0ms → 151.0ms | 140 → 151 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
| -25.0% |  -2.00ms |   5.4% → 3.8% |     8.0ms → 6.0ms |     8 → 6 | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|  Change |   Delta |      % |           Time | Samples | Caller                                                    | Location                                                                   |
| ------: | ------: | -----: | -------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| +100.0% | +9.00ms | 100.0% | 9.0ms → 18.0ms |  9 → 18 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |      % |              Time |   Samples | Caller                                                  | Location                                                               |
| -----: | ------: | -----: | ----------------: | --------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +0.9% | +4.00ms | 100.0% | 423.0ms → 427.0ms | 423 → 427 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::accept` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                                    | Location                                                                   |
| ------: | ------: | -----: | ------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| +200.0% | +4.00ms | 100.0% | 2.0ms → 6.0ms |   2 → 6 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `(anonymous)` (`./vendor/composer/autoload_classmap.php`)

| Change |   Delta |      % |           Time | Samples | Caller                                               | Location                                                 |
| -----: | ------: | -----: | -------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| +57.1% | +4.00ms | 100.0% | 7.0ms → 11.0ms |  7 → 11 | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |   Delta |      % |              Time |   Samples | Caller                                    | Location                                       |
| -----: | ------: | -----: | ----------------: | --------: | ----------------------------------------- | ---------------------------------------------- |
|  +2.1% | +3.00ms | 100.0% | 142.0ms → 145.0ms | 142 → 145 | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Finder\SplFileInfo::__construct` (`./composer/vendor/symfony/finder/SplFileInfo.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                                                  | Location                                                                   |
| ------: | ------: | -----: | ------------: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +300.0% | +3.00ms | 100.0% | 1.0ms → 4.0ms |   1 → 4 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |

##### `Composer\Util\Filesystem::filesAreEqual` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |             % |        Time | Samples | Caller                               | Location                                      |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ | --------------------------------------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `Composer\Util\Filesystem::safeCopy` | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Util\Platform::getCwd` (`./composer/src/Composer/Util/Platform.php`)

| Change |   Delta |            % |        Time | Samples | Caller                                | Location                                          |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------- | ------------------------------------------------- |
|    new | +2.00ms | 0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `Composer\Factory::createComposer`    | `./composer/src/Composer/Factory.php`             |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                     | Location                              |
| ------: | ------: | -----: | ------------: | ------: | -------------------------- | ------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `JsonSchema\SchemaStorage::expandRefs` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                 | Location                                                                       |
| ------: | ------: | -----: | ------------: | ------: | -------------------------------------- | ------------------------------------------------------------------------------ |
| +100.0% | +2.00ms | 100.0% | 2.0ms → 4.0ms |   2 → 4 | `JsonSchema\SchemaStorage::expandRefs` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |      % |           Time | Samples | Caller                                                   | Location                                                                |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| +22.2% | +2.00ms | 100.0% | 9.0ms → 11.0ms |  9 → 11 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                                    | Location                                                                   |
| ------: | ------: | -----: | ------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| +100.0% | +2.00ms | 100.0% | 2.0ms → 4.0ms |   2 → 4 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Autoload\ClassLoader::loadClass` (`./composer/vendor/composer/ClassLoader.php`)

|  Change |   Delta |             % |          Time | Samples | Caller                                             | Location                                             |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------------------------------- | ---------------------------------------------------- |
|  +50.0% | +1.00ms | 12.5% → 17.6% | 2.0ms → 3.0ms |   2 → 3 | `Composer\Console\Application::doRun`              | `./composer/src/Composer/Console/Application.php`    |
| removed | -1.00ms |   6.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                      | `./composer/src/Composer/Command/AboutCommand.php`   |
|  +50.0% | +1.00ms | 12.5% → 17.6% | 2.0ms → 3.0ms |   2 → 3 | `Composer\Console\Application::getDefaultCommands` | `./composer/src/Composer/Console/Application.php`    |
| removed | -1.00ms |   6.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                      | `./composer/src/Composer/Command/DependsCommand.php` |
| removed | -1.00ms |   6.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `(anonymous)`                                      | `./composer/src/Composer/Command/InitCommand.php`    |

##### `JsonSchema\Constraints\BaseConstraint::__construct` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/BaseConstraint.php`)

| Change |   Delta |             % |        Time | Samples | Caller                                              | Location                                                                             |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- | ------------------------------------------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `JsonSchema\Constraints\Factory::createInstanceFor` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/Factory.php` |

##### `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                                    | Location                                                                   |
| ------: | ------: | -----: | ------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |   Delta |      % |              Time |   Samples | Caller                                  | Location                                       |
| -----: | ------: | -----: | ----------------: | --------: | --------------------------------------- | ---------------------------------------------- |
|  +0.7% | +1.00ms | 100.0% | 139.0ms → 140.0ms | 139 → 140 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                             | Location                                                                |
| ------: | ------: | -----: | ------------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`)

| Change |   Delta |             % |        Time | Samples | Caller                                                    | Location                                                                   |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::checkSetOrder` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                         | Location                                       |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------ | ---------------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `Composer\Pcre\Preg::matchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `(anonymous)` (`./composer/src/Composer/Command/InitCommand.php`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                         |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\IO\ConsoleIO::doWrite` (`./composer/src/Composer/IO/ConsoleIO.php`)

| Change |   Delta |             % |        Time | Samples | Caller                              | Location                                   |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Composer\IO\ConsoleIO::writeError` | `./composer/src/Composer/IO/ConsoleIO.php` |

##### `Composer\IO\ConsoleIO::writeError` (`./composer/src/Composer/IO/ConsoleIO.php`)

| Change |   Delta |             % |        Time | Samples | Caller                               | Location                                        |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Composer\Util\ErrorHandler::handle` | `./composer/src/Composer/Util/ErrorHandler.php` |

##### `Composer\Util\ErrorHandler::handle` (`./composer/src/Composer/Util/ErrorHandler.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                             | Location                                    |
| ------: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Util\Silencer::suppress` (`./composer/src/Composer/Util/Silencer.php`)

| Change |   Delta |      % |          Time | Samples | Caller                         | Location                                    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | ------------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms |   2 → 3 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Factory::createConfig` (`./composer/src/Composer/Factory.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                             | Location                              |
| ------: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Util\StreamContextFactory::getTlsDefaults` (`./composer/src/Composer/Util/StreamContextFactory.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                      | Location                                          |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `Composer\Util\HttpDownloader::__construct` | `./composer/src/Composer/Util/HttpDownloader.php` |

##### `(anonymous)` (`./composer/src/Composer/Package/CompletePackage.php`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                         |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

| Change |   Delta |      % |          Time | Samples | Caller                                          | Location                                                  |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------------------- | --------------------------------------------------------- |
| +33.3% | +1.00ms | 100.0% | 3.0ms → 4.0ms |   3 → 4 | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

| Change |   Delta |             % |        Time | Samples | Caller                                           | Location                                                |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Util\Filesystem::isReadable` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |              % |          Time | Samples | Caller                                               | Location                                                 |
| -----: | ------: | -------------: | ------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| -50.0% | -1.00ms | 100.0% → 33.3% | 2.0ms → 1.0ms |   2 → 1 | `Composer\Util\StreamContextFactory::getTlsDefaults` | `./composer/src/Composer/Util/StreamContextFactory.php`  |
|    new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `Composer\Autoload\AutoloadGenerator::dump`          | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|    new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `Composer\Console\Application::doRun`                | `./composer/src/Composer/Console/Application.php`        |

##### `Composer\Console\Application::getDefaultInputDefinition` (`./composer/src/Composer/Console/Application.php`)

| Change |   Delta |             % |        Time | Samples | Caller                                                 | Location                                            |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------ | --------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Symfony\Component\Console\Application::getDefinition` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Package\Loader\ArrayLoader::configureObject` (`./composer/src/Composer/Package/Loader/ArrayLoader.php`)

| Change |   Delta |             % |        Time | Samples | Caller                                      | Location                                                 |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `Composer\Package\Loader\ArrayLoader::load` | `./composer/src/Composer/Package/Loader/ArrayLoader.php` |

##### `(anonymous)` (`./composer/src/Composer/Command/RequireCommand.php`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                         |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Samples | Caller                                               | Location                                         |
| -----: | --------: | -----: | ---------------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| -92.5% | -161.00ms | 100.0% | 174.0ms → 13.0ms |   2 → 3 | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|  Change |    Delta |             % |              Time | Samples | Caller                                                | Location                                          |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
|  -16.4% | -38.00ms | 99.6% → 97.5% | 232.0ms → 194.0ms | 22 → 20 | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
| +400.0% |  +4.00ms |   0.4% → 2.5% |     1.0ms → 5.0ms |   1 → 5 | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                      | Location                                       |
| -----: | -------: | -----: | ----------------: | --------: | --------------------------- | ---------------------------------------------- |
|  -9.8% | -28.00ms | 100.0% | 287.0ms → 259.0ms | 287 → 259 | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                         | Location                                        |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------------------- | ----------------------------------------------- |
|  -3.5% | -20.00ms | 100.0% | 576.0ms → 556.0ms | 163 → 176 | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                             | Location                                                                |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
|  -9.7% | -19.00ms | 100.0% | 196.0ms → 177.0ms | 196 → 177 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

| Change |    Delta |      % |            Time | Samples | Caller                                   | Location                                        |
| -----: | -------: | -----: | --------------: | ------: | ---------------------------------------- | ----------------------------------------------- |
| -50.0% | -18.00ms | 100.0% | 36.0ms → 18.0ms | 36 → 18 | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

| Change |    Delta |             % |            Time | Samples | Caller                                                                      | Location                                                                   |
| -----: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| -21.2% | -11.00ms | 94.5% → 97.6% | 52.0ms → 41.0ms | 52 → 41 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
| -66.7% |  -2.00ms |   5.5% → 2.4% |   3.0ms → 1.0ms |   3 → 1 | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `./composer/vendor/symfony/finder/Finder.php`                              |

##### `Composer\Pcre\Preg::replaceCallback` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |    Delta |             % |           Time | Samples | Caller                                    | Location                                      |
| ------: | -------: | ------------: | -------------: | ------: | ----------------------------------------- | --------------------------------------------- |
|  -75.0% | -12.00ms | 84.2% → 66.7% | 16.0ms → 4.0ms |  16 → 4 | `Composer\Util\Filesystem::normalizePath` | `./composer/src/Composer/Util/Filesystem.php` |
| removed |  -1.00ms |   5.3% → 0.0% |    1.0ms → 0ms |   1 → 0 | `Composer\Util\Platform::expandPath`      | `./composer/src/Composer/Util/Platform.php`   |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:353`)

|  Change |    Delta |             % |         Time | Samples | Caller                         | Location                                    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ | ------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

| Change |   Delta |      % |           Time | Samples | Caller                                                    | Location                                                                   |
| -----: | ------: | -----: | -------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| -57.1% | -8.00ms | 100.0% | 14.0ms → 6.0ms |  14 → 6 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |              % |            Time | Samples | Caller                                                   | Location                                                                |
| -----: | ------: | -------------: | --------------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
|  -8.1% | -8.00ms | 100.0% → 98.9% | 99.0ms → 91.0ms | 99 → 91 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|    new | +1.00ms |    0.0% → 1.1% |     0ms → 1.0ms |   0 → 1 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::replace` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |   Delta |      % |          Time | Samples | Caller                                               | Location                                                 |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| -75.0% | -6.00ms | 100.0% | 8.0ms → 2.0ms |   8 → 2 | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |   Delta |      % |            Time | Samples | Caller                                      | Location                                                 |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|  -7.8% | -5.00ms | 100.0% | 64.0ms → 59.0ms | 64 → 59 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

| Change |   Delta |      % |            Time | Samples | Caller                                                                          | Location                                                                       |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -9.1% | -4.00ms | 100.0% | 44.0ms → 40.0ms | 44 → 40 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |      % |            Time | Samples | Caller                                             | Location                                                 |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
| -22.2% | -4.00ms | 100.0% | 18.0ms → 14.0ms | 18 → 14 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Process\Process::getDefaultEnv` (`./composer/vendor/symfony/process/Process.php`)

| Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                        |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | ----------------------------------------------- |
| -80.0% | -4.00ms | 100.0% | 5.0ms → 1.0ms |   5 → 1 | `Symfony\Component\Process\Process::start` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                   | Location                                        |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------- | ----------------------------------------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   2 → 0 | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                  | Location                                                               |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |   Delta |             % |            Time | Samples | Caller                      | Location                                       |
| -----: | ------: | ------------: | --------------: | ------: | --------------------------- | ---------------------------------------------- |
|  -3.2% | -3.00ms | 99.0% → 98.9% | 95.0ms → 92.0ms | 95 → 92 | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `(anonymous)` (`./composer/vendor/autoload.php`)

|  Change |   Delta |             % |        Time | Samples | Caller            | Location                       |
| ------: | ------: | ------------: | ----------: | ------: | ----------------- | ------------------------------ |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   1 → 0 | `includeIfExists` | `./composer/src/bootstrap.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::getCwd` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                    | Location                                                                   |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `JsonSchema\Uri\UriRetriever::loadSchema` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php`)

| Change |   Delta |      % |          Time | Samples | Caller                                  | Location                                                                          |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------- | --------------------------------------------------------------------------------- |
| -40.0% | -2.00ms | 100.0% | 5.0ms → 3.0ms |   5 → 3 | `JsonSchema\Uri\UriRetriever::retrieve` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |

##### `(anonymous)` (`./vendor/composer/autoload_namespaces.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                               | Location                                                 |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\EventDispatcher\EventDispatcher::getListeners` (`./composer/src/Composer/EventDispatcher/EventDispatcher.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                 | Location                                                      |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `Composer\EventDispatcher\EventDispatcher::doDispatch` | `./composer/src/Composer/EventDispatcher/EventDispatcher.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`./composer/src/Composer/Command/CreateProjectCommand.php`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`./composer/src/Composer/Command/ShowCommand.php`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location                                         |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ------------------------------------------------ |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |       1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`./composer/src/Composer/Command/ArchiveCommand.php`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`./composer/src/Composer/Package/Version/VersionParser.php`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`./composer/src/Composer/Repository/FilesystemRepository.php`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`./composer/src/Composer/Installer/MetapackageInstaller.php`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\Filesystem::filePutContentsIfModified` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                      | Location                                                 |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Factory::getLockFile` (`./composer/src/Composer/Factory.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                             | Location                              |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------- | ------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Util\Http\CurlDownloader::__construct` (`./composer/src/Composer/Util/Http/CurlDownloader.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                      | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\Util\HttpDownloader::__construct` | `./composer/src/Composer/Util/HttpDownloader.php` |

##### `Composer\Config::get` (`./composer/src/Composer/Config.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                      | Location                                                 |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Config::setSourceOfConfigValue` (`./composer/src/Composer/Config.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                         | Location                             |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ | ------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\Config::__construct` | `./composer/src/Composer/Config.php` |

##### `Composer\Package\Package::__construct` (`./composer/src/Composer/Package/Package.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                              | Location                                                 |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- | -------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\Package\Loader\ArrayLoader::createObject` | `./composer/src/Composer/Package/Loader/ArrayLoader.php` |

##### `Composer\Util\Filesystem::safeCopy` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                      | Location                                                 |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\IO\ConsoleIO::isVerbose` (`./composer/src/Composer/IO/ConsoleIO.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                               | Location                                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\Util\ErrorHandler::handle` | `./composer/src/Composer/Util/ErrorHandler.php` |

##### `Composer\Package\CompletePackage::setDescription` (`./composer/src/Composer/Package/CompletePackage.php`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                 | Location                                                 |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------ | -------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\Package\Loader\ArrayLoader::configureObject` | `./composer/src/Composer/Package/Loader/ArrayLoader.php` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |       Samples | Function                                                                   | Location                                                                       |
| ------: | -------: | ------------: | ----------------: | ------------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|   +1.4% | +34.00ms | 61.9% → 66.6% |     2.42s → 2.46s | 2,428 → 2,462 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                    | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|   +0.9% | +25.00ms | 71.5% → 76.5% |     2.80s → 2.83s | 2,805 → 2,830 | `Composer\Command\DumpAutoloadCommand::execute`                            | `./composer/src/Composer/Command/DumpAutoloadCommand.php`                      |
|   +0.8% | +23.00ms | 71.5% → 76.5% |     2.80s → 2.82s | 2,805 → 2,828 | `Composer\Autoload\AutoloadGenerator::dump`                                | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                       |
|  +13.2% | +21.00ms |   4.1% → 4.9% | 159.0ms → 180.0ms |     159 → 180 | `Composer\Pcre\Preg::matchAll`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
|   +0.7% | +19.00ms | 67.8% → 72.4% |     2.66s → 2.67s | 2,660 → 2,679 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                  | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  +71.4% | +15.00ms |   0.5% → 1.0% |   21.0ms → 36.0ms |       21 → 36 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`              | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |        0 → 10 | `(anonymous)`                                                              | `./composer/src/Composer/Console/Application.php:349`                          |
|   +8.3% | +10.00ms |   3.1% → 3.5% | 121.0ms → 131.0ms |     121 → 131 | `Composer\Pcre\Preg::matchAllStrictGroups`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
|   +0.3% |  +9.00ms | 73.2% → 77.8% |     2.86s → 2.87s | 2,868 → 2,878 | `Symfony\Component\Console\Application::doRun`                             | `./composer/vendor/symfony/console/Application.php`                            |
|   +0.9% |  +8.00ms | 23.6% → 25.3% | 926.0ms → 934.0ms |     926 → 934 | `Composer\Pcre\Preg::isMatchStrictGroups`                                  | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
| +166.7% |  +5.00ms |   0.1% → 0.2% |     3.0ms → 8.0ms |         3 → 8 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`    | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
|  +36.4% |  +4.00ms |   0.3% → 0.4% |   11.0ms → 15.0ms |       11 → 15 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`                   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
| +200.0% |  +4.00ms |   0.1% → 0.2% |     2.0ms → 6.0ms |         2 → 6 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::accept` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  +57.1% |  +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms |        7 → 11 | `(anonymous)`                                                              | `./vendor/composer/autoload_classmap.php`                                      |
|  +50.0% |  +3.00ms |          0.2% |     6.0ms → 9.0ms |         6 → 9 | `Composer\Util\Silencer::suppress`                                         | `./composer/src/Composer/Util/Silencer.php`                                    |
|  +60.0% |  +3.00ms |   0.1% → 0.2% |     5.0ms → 8.0ms |         5 → 8 | `Composer\Util\Filesystem::filePutContentsIfModified`                      | `./composer/src/Composer/Util/Filesystem.php`                                  |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Symfony\Component\Finder\SplFileInfo::__construct`                        | `./composer/vendor/symfony/finder/SplFileInfo.php`                             |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `Composer\Util\Filesystem::filesAreEqual`                                  | `./composer/src/Composer/Util/Filesystem.php`                                  |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `Composer\Util\Platform::getCwd`                                           | `./composer/src/Composer/Util/Platform.php`                                    |
|  +50.0% |  +2.00ms |   0.1% → 0.2% |     4.0ms → 6.0ms |         4 → 6 | `Composer\Util\ErrorHandler::handle`                                       | `./composer/src/Composer/Util/ErrorHandler.php`                                |

##### Third-party

|  Change |    Delta |             % |              Time |       Samples | Function                                                                   | Location                                                                                |
| ------: | -------: | ------------: | ----------------: | ------------: | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|   +1.4% | +34.00ms | 61.9% → 66.6% |     2.42s → 2.46s | 2,428 → 2,462 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                    | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`                  |
|  +13.2% | +21.00ms |   4.1% → 4.9% | 159.0ms → 180.0ms |     159 → 180 | `Composer\Pcre\Preg::matchAll`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                                          |
|   +0.7% | +19.00ms | 67.8% → 72.4% |     2.66s → 2.67s | 2,660 → 2,679 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                  | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`              |
|  +71.4% | +15.00ms |   0.5% → 1.0% |   21.0ms → 36.0ms |       21 → 36 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`              | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`              |
|   +8.3% | +10.00ms |   3.1% → 3.5% | 121.0ms → 131.0ms |     121 → 131 | `Composer\Pcre\Preg::matchAllStrictGroups`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                                          |
|   +0.3% |  +9.00ms | 73.2% → 77.8% |     2.86s → 2.87s | 2,868 → 2,878 | `Symfony\Component\Console\Application::doRun`                             | `./composer/vendor/symfony/console/Application.php`                                     |
|   +0.9% |  +8.00ms | 23.6% → 25.3% | 926.0ms → 934.0ms |     926 → 934 | `Composer\Pcre\Preg::isMatchStrictGroups`                                  | `./composer/vendor/composer/pcre/src/Preg.php`                                          |
| +166.7% |  +5.00ms |   0.1% → 0.2% |     3.0ms → 8.0ms |         3 → 8 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`    | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`              |
|  +36.4% |  +4.00ms |   0.3% → 0.4% |   11.0ms → 15.0ms |       11 → 15 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`                   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`                 |
| +200.0% |  +4.00ms |   0.1% → 0.2% |     2.0ms → 6.0ms |         2 → 6 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::accept` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`          |
|  +57.1% |  +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms |        7 → 11 | `(anonymous)`                                                              | `./vendor/composer/autoload_classmap.php`                                               |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Symfony\Component\Finder\SplFileInfo::__construct`                        | `./composer/vendor/symfony/finder/SplFileInfo.php`                                      |
|  +22.2% |  +2.00ms |   0.2% → 0.3% |    9.0ms → 11.0ms |        9 → 11 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                 | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`                 |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `Symfony\Component\Console\Formatter\OutputFormatter::formatAndWrap`       | `./composer/vendor/symfony/console/Formatter/OutputFormatter.php`                       |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `JsonSchema\Constraints\Constraint::checkType`                             | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/Constraint.php` |
|  +20.0% |  +1.00ms |   0.1% → 0.2% |     5.0ms → 6.0ms |             1 | `Symfony\Component\Console\Terminal::getWidth`                             | `./composer/vendor/symfony/console/Terminal.php`                                        |
| +100.0% |  +1.00ms |  <0.1% → 0.1% |     1.0ms → 2.0ms |         1 → 2 | `Symfony\Component\Console\Formatter\OutputFormatter::format`              | `./composer/vendor/symfony/console/Formatter/OutputFormatter.php`                       |
|  +33.3% |  +1.00ms |          0.1% |     3.0ms → 4.0ms |         3 → 4 | `JsonSchema\SchemaStorage::expandRefs`                                     | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php`          |
|   +0.7% |  +1.00ms |   3.5% → 3.8% | 139.0ms → 140.0ms |     139 → 140 | `Composer\Pcre\Preg::enforceNonNullMatches`                                | `./composer/vendor/composer/pcre/src/Preg.php`                                          |
| +100.0% |  +1.00ms |  <0.1% → 0.1% |     1.0ms → 2.0ms |         1 → 2 | `Composer\Pcre\Preg::checkSetOrder`                                        | `./composer/vendor/composer/pcre/src/Preg.php`                                          |

##### Ours

|  Change |    Delta |             % |          Time |       Samples | Function                                                  | Location                                                  |
| ------: | -------: | ------------: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------------- |
|   +0.9% | +25.00ms | 71.5% → 76.5% | 2.80s → 2.83s | 2,805 → 2,830 | `Composer\Command\DumpAutoloadCommand::execute`           | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |
|   +0.8% | +23.00ms | 71.5% → 76.5% | 2.80s → 2.82s | 2,805 → 2,828 | `Composer\Autoload\AutoloadGenerator::dump`               | `./composer/src/Composer/Autoload/AutoloadGenerator.php`  |
|     new | +10.00ms |   0.0% → 0.3% |  0ms → 10.0ms |        0 → 10 | `(anonymous)`                                             | `./composer/src/Composer/Console/Application.php:349`     |
|  +50.0% |  +3.00ms |          0.2% | 6.0ms → 9.0ms |         6 → 9 | `Composer\Util\Silencer::suppress`                        | `./composer/src/Composer/Util/Silencer.php`               |
|  +60.0% |  +3.00ms |   0.1% → 0.2% | 5.0ms → 8.0ms |         5 → 8 | `Composer\Util\Filesystem::filePutContentsIfModified`     | `./composer/src/Composer/Util/Filesystem.php`             |
|     new |  +3.00ms |   0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `Composer\Util\Filesystem::filesAreEqual`                 | `./composer/src/Composer/Util/Filesystem.php`             |
|     new |  +3.00ms |   0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `Composer\Util\Platform::getCwd`                          | `./composer/src/Composer/Util/Platform.php`               |
|  +50.0% |  +2.00ms |   0.1% → 0.2% | 4.0ms → 6.0ms |         4 → 6 | `Composer\Util\ErrorHandler::handle`                      | `./composer/src/Composer/Util/ErrorHandler.php`           |
| +100.0% |  +2.00ms |          0.1% | 2.0ms → 4.0ms |         2 → 4 | `Composer\Factory::createConfig`                          | `./composer/src/Composer/Factory.php`                     |
|  +66.7% |  +2.00ms |          0.1% | 3.0ms → 5.0ms |         3 → 5 | `Composer\Console\Application::__construct`               | `./composer/src/Composer/Console/Application.php`         |
| +200.0% |  +2.00ms |  <0.1% → 0.1% | 1.0ms → 3.0ms |         1 → 3 | `Composer\Util\Filesystem::findShortestPathCode`          | `./composer/src/Composer/Util/Filesystem.php`             |
| +200.0% |  +2.00ms |  <0.1% → 0.1% | 1.0ms → 3.0ms |         1 → 3 | `Composer\Util\Filesystem::safeCopy`                      | `./composer/src/Composer/Util/Filesystem.php`             |
|     new |  +2.00ms |   0.0% → 0.1% |   0ms → 2.0ms |         0 → 2 | `Composer\Factory::getHomeDir`                            | `./composer/src/Composer/Factory.php`                     |
|     new |  +2.00ms |   0.0% → 0.1% |   0ms → 2.0ms |         0 → 2 | `Composer\Command\RequireCommand::configure`              | `./composer/src/Composer/Command/RequireCommand.php`      |
|  +50.0% |  +1.00ms |          0.1% | 2.0ms → 3.0ms |         2 → 3 | `Composer\IO\ConsoleIO::doWrite`                          | `./composer/src/Composer/IO/ConsoleIO.php`                |
|  +50.0% |  +1.00ms |          0.1% | 2.0ms → 3.0ms |         2 → 3 | `Composer\IO\ConsoleIO::writeError`                       | `./composer/src/Composer/IO/ConsoleIO.php`                |
|  +16.7% |  +1.00ms |          0.2% | 6.0ms → 7.0ms |         1 → 3 | `Composer\Util\Git::getVersion`                           | `./composer/src/Composer/Util/Git.php`                    |
|  +16.7% |  +1.00ms |          0.2% | 6.0ms → 7.0ms |         1 → 3 | `Composer\Util\Git::getNoShowSignatureFlag`               | `./composer/src/Composer/Util/Git.php`                    |
|  +50.0% |  +1.00ms |          0.1% | 2.0ms → 3.0ms |         2 → 3 | `Composer\Util\Filesystem::isReadable`                    | `./composer/src/Composer/Util/Filesystem.php`             |
| +100.0% |  +1.00ms |  <0.1% → 0.1% | 1.0ms → 2.0ms |         1 → 2 | `Composer\Console\Application::getDefaultInputDefinition` | `./composer/src/Composer/Console/Application.php`         |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time |       Samples | Function                                                      | Location                                                       |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------- | -------------------------------------------------------------- |
|  -5.4% | -177.00ms | 83.4% → 83.7% |     3.27s → 3.09s | 2,888 → 2,910 | `Symfony\Component\Console\Application::run`                  | `./composer/vendor/symfony/console/Application.php`            |
|  -5.4% | -177.00ms | 83.2% → 83.5% |     3.26s → 3.08s | 2,882 → 2,904 | `Composer\Console\Application::run`                           | `./composer/src/Composer/Console/Application.php`              |
| -95.9% | -162.00ms |   4.3% → 0.2% |   169.0ms → 7.0ms |         1 → 2 | `Symfony\Component\Console\Terminal::getHeight`               | `./composer/vendor/symfony/console/Terminal.php`               |
| -92.5% | -161.00ms |   4.4% → 0.4% |  174.0ms → 13.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::readFromProcess`         | `./composer/vendor/symfony/console/Terminal.php`               |
| -92.5% | -161.00ms |   4.4% → 0.4% |  174.0ms → 13.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::getSttyColumns`          | `./composer/vendor/symfony/console/Terminal.php`               |
| -92.5% | -161.00ms |   4.4% → 0.4% |  174.0ms → 13.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php`               |
| -92.5% | -161.00ms |   4.4% → 0.4% |  174.0ms → 13.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::initDimensions`          | `./composer/vendor/symfony/console/Terminal.php`               |
|  -5.1% | -154.00ms | 77.0% → 77.5% |     3.01s → 2.86s | 2,635 → 2,681 | `(anonymous)`                                                 | `./profile.php`                                                |
|  -7.6% |  -51.00ms | 17.1% → 16.7% | 670.0ms → 619.0ms |     256 → 239 | `Composer\Factory::createComposer`                            | `./composer/src/Composer/Factory.php`                          |
|  -7.7% |  -51.00ms | 17.0% → 16.6% | 666.0ms → 615.0ms |     252 → 235 | `Composer\Command\BaseCommand::tryComposer`                   | `./composer/src/Composer/Command/BaseCommand.php`              |
|  -7.5% |  -49.00ms | 16.6% → 16.3% | 653.0ms → 604.0ms |     244 → 228 | `Composer\Command\BaseCommand::initialize`                    | `./composer/src/Composer/Command/BaseCommand.php`              |
|  -7.2% |  -48.00ms | 17.0% → 16.7% | 667.0ms → 619.0ms |     253 → 239 | `Composer\Factory::create`                                    | `./composer/src/Composer/Factory.php`                          |
|  -7.6% |  -48.00ms | 16.1% → 15.8% | 633.0ms → 585.0ms |     219 → 205 | `Composer\Package\Loader\RootPackageLoader::load`             | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  -7.1% |  -47.00ms | 17.0% → 16.7% | 666.0ms → 619.0ms |     252 → 239 | `Composer\Console\Application::getComposer`                   | `./composer/src/Composer/Console/Application.php`              |
|  -7.5% |  -47.00ms | 16.0% → 15.7% | 628.0ms → 581.0ms |     214 → 201 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  -7.3% |  -46.00ms | 16.0% → 15.7% | 627.0ms → 581.0ms |     213 → 201 | `Composer\Util\ProcessExecutor::runProcess`                   | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|  -7.3% |  -46.00ms | 16.0% → 15.7% | 627.0ms → 581.0ms |     213 → 201 | `Composer\Util\ProcessExecutor::doExecute`                    | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|  -7.3% |  -46.00ms | 16.0% → 15.7% | 627.0ms → 581.0ms |     213 → 201 | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|  -7.4% |  -46.00ms | 15.9% → 15.6% | 624.0ms → 578.0ms |     210 → 198 | `Symfony\Component\Process\Process::run`                      | `./composer/vendor/symfony/process/Process.php`                |
| -12.4% |  -31.00ms |   6.3% → 5.9% | 249.0ms → 218.0ms |       39 → 44 | `Composer\Util\Silencer::call`                                | `./composer/src/Composer/Util/Silencer.php`                    |

##### Third-party

| Change |     Delta |             % |              Time |       Samples | Function                                                                        | Location                                                                       |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -5.4% | -177.00ms | 83.4% → 83.7% |     3.27s → 3.09s | 2,888 → 2,910 | `Symfony\Component\Console\Application::run`                                    | `./composer/vendor/symfony/console/Application.php`                            |
| -95.9% | -162.00ms |   4.3% → 0.2% |   169.0ms → 7.0ms |         1 → 2 | `Symfony\Component\Console\Terminal::getHeight`                                 | `./composer/vendor/symfony/console/Terminal.php`                               |
| -92.5% | -161.00ms |   4.4% → 0.4% |  174.0ms → 13.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::readFromProcess`                           | `./composer/vendor/symfony/console/Terminal.php`                               |
| -92.5% | -161.00ms |   4.4% → 0.4% |  174.0ms → 13.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::getSttyColumns`                            | `./composer/vendor/symfony/console/Terminal.php`                               |
| -92.5% | -161.00ms |   4.4% → 0.4% |  174.0ms → 13.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::initDimensionsUsingStty`                   | `./composer/vendor/symfony/console/Terminal.php`                               |
| -92.5% | -161.00ms |   4.4% → 0.4% |  174.0ms → 13.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::initDimensions`                            | `./composer/vendor/symfony/console/Terminal.php`                               |
|  -7.4% |  -46.00ms | 15.9% → 15.6% | 624.0ms → 578.0ms |     210 → 198 | `Symfony\Component\Process\Process::run`                                        | `./composer/vendor/symfony/process/Process.php`                                |
|  -9.8% |  -28.00ms |   7.3% → 7.0% | 287.0ms → 259.0ms |     287 → 259 | `Composer\Pcre\Preg::pregMatch`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
|  -4.0% |  -23.00ms | 14.8% → 15.1% | 580.0ms → 557.0ms |     166 → 177 | `Symfony\Component\Process\Process::wait`                                       | `./composer/vendor/symfony/process/Process.php`                                |
| -52.3% |  -23.00ms |   1.1% → 0.6% |   44.0ms → 21.0ms |       44 → 21 | `Symfony\Component\Process\Process::start`                                      | `./composer/vendor/symfony/process/Process.php`                                |
|  -3.8% |  -22.00ms | 14.8% → 15.1% | 579.0ms → 557.0ms |     166 → 177 | `Symfony\Component\Process\Process::readPipes`                                  | `./composer/vendor/symfony/process/Process.php`                                |
|  -4.2% |  -22.00ms | 13.5% → 13.7% | 530.0ms → 508.0ms |     530 → 508 | `Composer\Pcre\Preg::match`                                                     | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
|  -3.5% |  -20.00ms | 14.7% → 15.1% | 577.0ms → 557.0ms |     164 → 177 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                       | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                        |
| -10.2% |  -20.00ms |   5.0% → 4.8% | 197.0ms → 177.0ms |     197 → 177 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                         | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|  -1.0% |  -17.00ms | 41.7% → 43.8% |     1.63s → 1.61s | 1,635 → 1,618 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                              | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|  -0.5% |  -16.00ms | 84.8% → 89.5% |     3.32s → 3.31s | 3,019 → 3,031 | `Symfony\Component\Console\Command\Command::run`                                | `./composer/vendor/symfony/console/Command/Command.php`                        |
|  -1.9% |  -15.00ms | 20.2% → 21.0% | 792.0ms → 777.0ms |     792 → 777 | `Composer\Pcre\Preg::matchStrictGroups`                                         | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
| -23.6% |  -13.00ms |   1.4% → 1.1% |   55.0ms → 42.0ms |       55 → 42 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct`     | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
| -68.4% |  -13.00ms |   0.5% → 0.2% |    19.0ms → 6.0ms |        19 → 6 | `Composer\Pcre\Preg::replaceCallback`                                           | `./composer/vendor/composer/pcre/src/Preg.php`                                 |
| -21.8% |  -12.00ms |   1.4% → 1.2% |   55.0ms → 43.0ms |       55 → 43 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### Ours

|  Change |     Delta |             % |              Time |       Samples | Function                                                      | Location                                                       |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------- | -------------------------------------------------------------- |
|   -5.4% | -177.00ms | 83.2% → 83.5% |     3.26s → 3.08s | 2,882 → 2,904 | `Composer\Console\Application::run`                           | `./composer/src/Composer/Console/Application.php`              |
|   -5.1% | -154.00ms | 77.0% → 77.5% |     3.01s → 2.86s | 2,635 → 2,681 | `(anonymous)`                                                 | `./profile.php`                                                |
|   -7.6% |  -51.00ms | 17.1% → 16.7% | 670.0ms → 619.0ms |     256 → 239 | `Composer\Factory::createComposer`                            | `./composer/src/Composer/Factory.php`                          |
|   -7.7% |  -51.00ms | 17.0% → 16.6% | 666.0ms → 615.0ms |     252 → 235 | `Composer\Command\BaseCommand::tryComposer`                   | `./composer/src/Composer/Command/BaseCommand.php`              |
|   -7.5% |  -49.00ms | 16.6% → 16.3% | 653.0ms → 604.0ms |     244 → 228 | `Composer\Command\BaseCommand::initialize`                    | `./composer/src/Composer/Command/BaseCommand.php`              |
|   -7.2% |  -48.00ms | 17.0% → 16.7% | 667.0ms → 619.0ms |     253 → 239 | `Composer\Factory::create`                                    | `./composer/src/Composer/Factory.php`                          |
|   -7.6% |  -48.00ms | 16.1% → 15.8% | 633.0ms → 585.0ms |     219 → 205 | `Composer\Package\Loader\RootPackageLoader::load`             | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|   -7.1% |  -47.00ms | 17.0% → 16.7% | 666.0ms → 619.0ms |     252 → 239 | `Composer\Console\Application::getComposer`                   | `./composer/src/Composer/Console/Application.php`              |
|   -7.5% |  -47.00ms | 16.0% → 15.7% | 628.0ms → 581.0ms |     214 → 201 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   -7.3% |  -46.00ms | 16.0% → 15.7% | 627.0ms → 581.0ms |     213 → 201 | `Composer\Util\ProcessExecutor::runProcess`                   | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|   -7.3% |  -46.00ms | 16.0% → 15.7% | 627.0ms → 581.0ms |     213 → 201 | `Composer\Util\ProcessExecutor::doExecute`                    | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|   -7.3% |  -46.00ms | 16.0% → 15.7% | 627.0ms → 581.0ms |     213 → 201 | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|  -12.4% |  -31.00ms |   6.3% → 5.9% | 249.0ms → 218.0ms |       39 → 44 | `Composer\Util\Silencer::call`                                | `./composer/src/Composer/Util/Silencer.php`                    |
|   -5.8% |  -24.00ms | 10.6% → 10.5% | 414.0ms → 390.0ms |      100 → 95 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   -0.5% |  -15.00ms | 79.0% → 83.4% |     3.09s → 3.08s | 2,888 → 2,910 | `Composer\Console\Application::doRun`                         | `./composer/src/Composer/Console/Application.php`              |
|  -16.3% |  -13.00ms |   2.0% → 1.8% |   80.0ms → 67.0ms |       80 → 67 | `Composer\Util\Filesystem::findShortestPath`                  | `./composer/src/Composer/Util/Filesystem.php`                  |
| removed |  -10.00ms |   0.3% → 0.0% |      10.0ms → 0ms |        10 → 0 | `(anonymous)`                                                 | `./composer/src/Composer/Console/Application.php:353`          |
|   -6.7% |   -9.00ms |          3.4% | 134.0ms → 125.0ms |       33 → 29 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  -16.4% |   -9.00ms |   1.4% → 1.2% |   55.0ms → 46.0ms |       31 → 26 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  -14.3% |   -8.00ms |   1.4% → 1.3% |   56.0ms → 48.0ms |       30 → 24 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

| Change |    Delta |      % |          Time |       Samples | Caller                                                    | Location                                                                   |
| -----: | -------: | -----: | ------------: | ------------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +1.4% | +34.00ms | 100.0% | 2.42s → 2.46s | 2,428 → 2,462 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

| Change |    Delta |      % |          Time |       Samples | Caller                                           | Location                                                |
| -----: | -------: | -----: | ------------: | ------------: | ------------------------------------------------ | ------------------------------------------------------- |
|  +0.9% | +25.00ms | 100.0% | 2.80s → 2.83s | 2,805 → 2,830 | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

| Change |    Delta |      % |          Time |       Samples | Caller                                          | Location                                                  |
| -----: | -------: | -----: | ------------: | ------------: | ----------------------------------------------- | --------------------------------------------------------- |
|  +0.8% | +23.00ms | 100.0% | 2.80s → 2.82s | 2,805 → 2,828 | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time |   Samples | Caller                                                  | Location                                                               |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| +11.1% | +13.00ms | 73.6% → 72.2% | 117.0ms → 130.0ms | 117 → 130 | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| +19.0% |  +8.00ms | 26.4% → 27.8% |   42.0ms → 50.0ms |   42 → 50 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |    Delta |      % |          Time |       Samples | Caller                                      | Location                                                 |
| -----: | -------: | -----: | ------------: | ------------: | ------------------------------------------- | -------------------------------------------------------- |
|  +0.7% | +19.00ms | 100.0% | 2.66s → 2.67s | 2,660 → 2,679 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |    Delta |      % |            Time | Samples | Caller                                                    | Location                                                                   |
| -----: | -------: | -----: | --------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| +71.4% | +15.00ms | 100.0% | 21.0ms → 36.0ms | 21 → 36 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:349`)

| Change |    Delta |             % |         Time | Samples | Caller                         | Location                                    |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------ | ------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                                  | Location                                                               |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +8.3% | +10.00ms | 100.0% | 121.0ms → 131.0ms | 121 → 131 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

| Change |    Delta |             % |          Time |       Samples | Caller                                | Location                                          |
| -----: | -------: | ------------: | ------------: | ------------: | ------------------------------------- | ------------------------------------------------- |
|  +0.8% | +24.00ms | 98.8% → 99.4% | 2.83s → 2.86s | 2,836 → 2,860 | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |   Delta |             % |              Time |   Samples | Caller                                                        | Location                                                                   |
| -----: | ------: | ------------: | ----------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +0.7% | +6.00ms | 96.8% → 96.6% | 896.0ms → 902.0ms | 896 → 902 | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| +60.0% | +6.00ms |   1.1% → 1.7% |   10.0ms → 16.0ms |   10 → 16 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| -20.0% | -4.00ms |   2.2% → 1.7% |   20.0ms → 16.0ms |   20 → 16 | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                                    | Location                                                                   |
| ------: | ------: | -----: | ------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| +166.7% | +5.00ms | 100.0% | 3.0ms → 8.0ms |   3 → 8 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |      % |            Time | Samples | Caller                                             | Location                                                                |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| +36.4% | +4.00ms | 100.0% | 11.0ms → 15.0ms | 11 → 15 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::accept` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                                    | Location                                                                   |
| ------: | ------: | -----: | ------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| +200.0% | +4.00ms | 100.0% | 2.0ms → 6.0ms |   2 → 6 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `(anonymous)` (`./vendor/composer/autoload_classmap.php`)

| Change |   Delta |      % |           Time | Samples | Caller                                               | Location                                                 |
| -----: | ------: | -----: | -------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| +57.1% | +4.00ms | 100.0% | 7.0ms → 11.0ms |  7 → 11 | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Silencer::suppress` (`./composer/src/Composer/Util/Silencer.php`)

| Change |   Delta |      % |          Time | Samples | Caller                         | Location                                    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | ------------------------------------------- |
| +50.0% | +3.00ms | 100.0% | 6.0ms → 9.0ms |   6 → 9 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Util\Filesystem::filePutContentsIfModified` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |      % |          Time | Samples | Caller                                      | Location                                                 |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| +60.0% | +3.00ms | 100.0% | 5.0ms → 8.0ms |   5 → 8 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Finder\SplFileInfo::__construct` (`./composer/vendor/symfony/finder/SplFileInfo.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                                                  | Location                                                                   |
| ------: | ------: | -----: | ------------: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +300.0% | +3.00ms | 100.0% | 1.0ms → 4.0ms |   1 → 4 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |

##### `Composer\Util\Filesystem::filesAreEqual` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |             % |        Time | Samples | Caller                               | Location                                      |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ | --------------------------------------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `Composer\Util\Filesystem::safeCopy` | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Util\Platform::getCwd` (`./composer/src/Composer/Util/Platform.php`)

| Change |   Delta |            % |        Time | Samples | Caller                                | Location                                          |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------- | ------------------------------------------------- |
|    new | +2.00ms | 0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `Composer\Factory::createComposer`    | `./composer/src/Composer/Factory.php`             |

##### `Composer\Util\ErrorHandler::handle` (`./composer/src/Composer/Util/ErrorHandler.php`)

| Change |   Delta |      % |          Time | Samples | Caller                             | Location                                    |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------------------- |
| +50.0% | +2.00ms | 100.0% | 4.0ms → 6.0ms |   4 → 6 | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |      % |           Time | Samples | Caller                                                   | Location                                                                |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| +22.2% | +2.00ms | 100.0% | 9.0ms → 11.0ms |  9 → 11 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Console\Formatter\OutputFormatter::formatAndWrap` (`./composer/vendor/symfony/console/Formatter/OutputFormatter.php`)

| Change |   Delta |             % |        Time | Samples | Caller                                                        | Location                                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Symfony\Component\Console\Formatter\OutputFormatter::format` | `./composer/vendor/symfony/console/Formatter/OutputFormatter.php` |

##### `JsonSchema\Constraints\Constraint::checkType` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/Constraint.php`)

| Change |   Delta |             % |        Time | Samples | Caller                                                                 | Location                                                                                         |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `JsonSchema\Constraints\UndefinedConstraint::validateCommonProperties` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/UndefinedConstraint.php` |

##### `Symfony\Component\Console\Terminal::getWidth` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |   Delta |      % |          Time | Samples | Caller                                       | Location                                            |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------------------- | --------------------------------------------------- |
| +20.0% | +1.00ms | 100.0% | 5.0ms → 6.0ms |       1 | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Formatter\OutputFormatter::format` (`./composer/vendor/symfony/console/Formatter/OutputFormatter.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                           | Location                                              |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------------------ | ----------------------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `Symfony\Component\Console\Output\Output::write` | `./composer/vendor/symfony/console/Output/Output.php` |

##### `JsonSchema\SchemaStorage::expandRefs` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php`)

|  Change |   Delta |              % |          Time | Samples | Caller                                 | Location                                                                       |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------------------- | ------------------------------------------------------------------------------ |
| +100.0% | +2.00ms | 66.7% → 100.0% | 2.0ms → 4.0ms |   2 → 4 | `JsonSchema\SchemaStorage::expandRefs` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php` |
|  +33.3% | +1.00ms |         100.0% | 3.0ms → 4.0ms |   3 → 4 | `JsonSchema\SchemaStorage::addSchema`  | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |   Delta |      % |              Time |   Samples | Caller                                  | Location                                       |
| -----: | ------: | -----: | ----------------: | --------: | --------------------------------------- | ---------------------------------------------- |
|  +0.7% | +1.00ms | 100.0% | 139.0ms → 140.0ms | 139 → 140 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::checkSetOrder` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                         | Location                                       |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------ | ---------------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `Composer\Pcre\Preg::matchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createConfig` (`./composer/src/Composer/Factory.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                             | Location                              |
| ------: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------------- |
| +100.0% | +2.00ms | 100.0% | 2.0ms → 4.0ms |   2 → 4 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::__construct` (`./composer/src/Composer/Console/Application.php`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location        |
| -----: | ------: | -----: | ------------: | ------: | ------------- | --------------- |
| +66.7% | +2.00ms | 100.0% | 3.0ms → 5.0ms |   3 → 5 | `(anonymous)` | `./profile.php` |

##### `Composer\Util\Filesystem::findShortestPathCode` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |            % |        Time | Samples | Caller                                      | Location                                                 |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|    new | +2.00ms | 0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::safeCopy` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                      | Location                                                 |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Factory::getHomeDir` (`./composer/src/Composer/Factory.php`)

| Change |   Delta |             % |        Time | Samples | Caller                           | Location                              |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------- | ------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Composer\Factory::createConfig` | `./composer/src/Composer/Factory.php` |

##### `Composer\Command\RequireCommand::configure` (`./composer/src/Composer/Command/RequireCommand.php`)

| Change |   Delta |             % |        Time | Samples | Caller                                                   | Location                                                |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------------------- | ------------------------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Symfony\Component\Console\Command\Command::__construct` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\IO\ConsoleIO::doWrite` (`./composer/src/Composer/IO/ConsoleIO.php`)

| Change |   Delta |            % |        Time | Samples | Caller                         | Location                                   |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------ | ------------------------------------------ |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `Composer\IO\ConsoleIO::write` | `./composer/src/Composer/IO/ConsoleIO.php` |

##### `Composer\IO\ConsoleIO::writeError` (`./composer/src/Composer/IO/ConsoleIO.php`)

| Change |   Delta |      % |          Time | Samples | Caller                               | Location                                        |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ | ----------------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms |   2 → 3 | `Composer\Util\ErrorHandler::handle` | `./composer/src/Composer/Util/ErrorHandler.php` |

##### `Composer\Util\Git::getVersion` (`./composer/src/Composer/Util/Git.php`)

| Change |   Delta |      % |          Time | Samples | Caller                                      | Location                               |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------- | -------------------------------------- |
| +16.7% | +1.00ms | 100.0% | 6.0ms → 7.0ms |   1 → 3 | `Composer\Util\Git::getNoShowSignatureFlag` | `./composer/src/Composer/Util/Git.php` |

##### `Composer\Util\Git::getNoShowSignatureFlag` (`./composer/src/Composer/Util/Git.php`)

| Change |   Delta |      % |          Time | Samples | Caller                                                     | Location                                                     |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| +16.7% | +1.00ms | 100.0% | 6.0ms → 7.0ms |   1 → 3 | `Composer\Package\Version\VersionGuesser::guessGitVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\Filesystem::isReadable` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |              % |          Time | Samples | Caller                                               | Location                                                 |
| -----: | ------: | -------------: | ------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| -50.0% | -1.00ms | 100.0% → 33.3% | 2.0ms → 1.0ms |   2 → 1 | `Composer\Util\StreamContextFactory::getTlsDefaults` | `./composer/src/Composer/Util/StreamContextFactory.php`  |
|    new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `Composer\Autoload\AutoloadGenerator::dump`          | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|    new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `Composer\Console\Application::doRun`                | `./composer/src/Composer/Console/Application.php`        |

##### `Composer\Console\Application::getDefaultInputDefinition` (`./composer/src/Composer/Console/Application.php`)

|  Change |   Delta |      % |          Time | Samples | Caller                                                 | Location                                            |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------------------------ | --------------------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `Symfony\Component\Console\Application::getDefinition` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

| Change |     Delta |     % |          Time |       Samples | Caller                              | Location                                          |
| -----: | --------: | ----: | ------------: | ------------: | ----------------------------------- | ------------------------------------------------- |
|  -5.4% | -177.00ms | 99.8% | 3.26s → 3.08s | 2,882 → 2,904 | `Composer\Console\Application::run` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

| Change |     Delta |             % |          Time |       Samples | Caller        | Location        |
| -----: | --------: | ------------: | ------------: | ------------: | ------------- | --------------- |
|  -5.1% | -153.00ms | 92.2% → 92.6% | 3.01s → 2.85s | 2,628 → 2,674 | `(anonymous)` | `./profile.php` |

##### `Symfony\Component\Console\Terminal::getHeight` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |            Time | Samples | Caller                                       | Location                                            |
| -----: | --------: | -----: | --------------: | ------: | -------------------------------------------- | --------------------------------------------------- |
| -95.9% | -162.00ms | 100.0% | 169.0ms → 7.0ms |   1 → 2 | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Samples | Caller                                               | Location                                         |
| -----: | --------: | -----: | ---------------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| -92.5% | -161.00ms | 100.0% | 174.0ms → 13.0ms |   2 → 3 | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Samples | Caller                                                        | Location                                         |
| -----: | --------: | -----: | ---------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------ |
| -92.5% | -161.00ms | 100.0% | 174.0ms → 13.0ms |   2 → 3 | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensionsUsingStty` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Samples | Caller                                               | Location                                         |
| -----: | --------: | -----: | ---------------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| -92.5% | -161.00ms | 100.0% | 174.0ms → 13.0ms |   2 → 3 | `Symfony\Component\Console\Terminal::initDimensions` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensions` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |             % |            Time | Samples | Caller                                          | Location                                         |
| -----: | --------: | ------------: | --------------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| -95.9% | -162.00ms | 97.1% → 53.8% | 169.0ms → 7.0ms |   1 → 2 | `Symfony\Component\Console\Terminal::getHeight` | `./composer/vendor/symfony/console/Terminal.php` |
| +20.0% |   +1.00ms |  2.9% → 46.2% |   5.0ms → 6.0ms |       1 | `Symfony\Component\Console\Terminal::getWidth`  | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

| Change |    Delta |              % |              Time |   Samples | Caller                     | Location                              |
| -----: | -------: | -------------: | ----------------: | --------: | -------------------------- | ------------------------------------- |
|  -7.2% | -48.00ms | 99.6% → 100.0% | 667.0ms → 619.0ms | 253 → 239 | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

| Change |    Delta |             % |              Time |   Samples | Caller                                     | Location                                          |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------ | ------------------------------------------------- |
|  -7.5% | -49.00ms | 98.0% → 98.2% | 653.0ms → 604.0ms | 244 → 228 | `Composer\Command\BaseCommand::initialize` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

| Change |    Delta |             % |              Time |   Samples | Caller                                           | Location                                                |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------ | ------------------------------------------------------- |
|  -7.9% | -41.00ms | 79.9% → 79.6% | 522.0ms → 481.0ms | 214 → 201 | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

| Change |    Delta |              % |              Time |   Samples | Caller                                      | Location                                          |
| -----: | -------: | -------------: | ----------------: | --------: | ------------------------------------------- | ------------------------------------------------- |
|  -7.1% | -47.00ms | 99.9% → 100.0% | 666.0ms → 619.0ms | 252 → 239 | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                             | Location                              |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------- | ------------------------------------- |
|  -7.6% | -48.00ms | 100.0% | 633.0ms → 585.0ms | 219 → 205 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

| Change |    Delta |              % |              Time |   Samples | Caller                                      | Location                                          |
| -----: | -------: | -------------: | ----------------: | --------: | ------------------------------------------- | ------------------------------------------------- |
|  -7.7% | -51.00ms | 100.0% → 99.4% | 666.0ms → 615.0ms | 252 → 235 | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                            | Location                                                       |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------------- | -------------------------------------------------------------- |
|  -7.5% | -47.00ms | 100.0% | 628.0ms → 581.0ms | 214 → 201 | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                     | Location                                           |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------ | -------------------------------------------------- |
|  -7.3% | -46.00ms | 100.0% | 627.0ms → 581.0ms | 213 → 201 | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                   | Location                                           |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------------- | -------------------------------------------------- |
|  -7.3% | -46.00ms | 100.0% | 627.0ms → 581.0ms | 213 → 201 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

| Change |    Delta |             % |              Time | Samples | Caller                                                        | Location                                                     |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
|  -5.5% | -15.00ms | 43.5% → 44.4% | 273.0ms → 258.0ms | 65 → 63 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  -6.7% |  -9.00ms | 21.4% → 21.5% | 134.0ms → 125.0ms | 33 → 29 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| -16.4% |  -9.00ms |   8.8% → 7.9% |   55.0ms → 46.0ms | 31 → 26 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| -14.3% |  -8.00ms |   8.9% → 8.3% |   56.0ms → 48.0ms | 30 → 24 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  -5.8% |  -6.00ms | 16.4% → 16.7% |  103.0ms → 97.0ms | 53 → 56 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                      | Location                                           |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------- | -------------------------------------------------- |
|  -7.4% | -46.00ms | 100.0% | 624.0ms → 578.0ms | 210 → 198 | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|  Change |    Delta |             % |              Time | Samples | Caller                                                | Location                                          |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
|  -15.2% | -37.00ms | 97.6% → 94.5% | 243.0ms → 206.0ms | 33 → 32 | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
| +100.0% |  +4.00ms |   1.6% → 3.7% |     4.0ms → 8.0ms |   4 → 8 | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |
|     new |  +2.00ms |   0.0% → 0.9% |       0ms → 2.0ms |   0 → 2 | `Composer\Factory::getHomeDir`                        | `./composer/src/Composer/Factory.php`             |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                      | Location                                       |
| -----: | -------: | -----: | ----------------: | --------: | --------------------------- | ---------------------------------------------- |
|  -9.8% | -28.00ms | 100.0% | 287.0ms → 259.0ms | 287 → 259 | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                   | Location                                        |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------------- | ----------------------------------------------- |
|  -4.0% | -23.00ms | 100.0% | 580.0ms → 557.0ms | 166 → 177 | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

| Change |    Delta |      % |            Time | Samples | Caller                                   | Location                                        |
| -----: | -------: | -----: | --------------: | ------: | ---------------------------------------- | ----------------------------------------------- |
| -52.3% | -23.00ms | 100.0% | 44.0ms → 21.0ms | 44 → 21 | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

| Change |    Delta |             % |              Time |   Samples | Caller                                            | Location                                        |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------- | ----------------------------------------------- |
|  -3.5% | -20.00ms | 99.5% → 99.8% | 576.0ms → 556.0ms | 163 → 176 | `Symfony\Component\Process\Process::wait`         | `./composer/vendor/symfony/process/Process.php` |
| -66.7% |  -2.00ms |   0.5% → 0.2% |     3.0ms → 1.0ms |     3 → 1 | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time |   Samples | Caller                                  | Location                                       |
| -----: | -------: | ------------: | ----------------: | --------: | --------------------------------------- | ---------------------------------------------- |
|  -3.7% | -19.00ms | 96.4% → 96.9% | 511.0ms → 492.0ms | 511 → 492 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
| -15.8% |  -3.00ms |   3.6% → 3.1% |   19.0ms → 16.0ms |   19 → 16 | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                         | Location                                        |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------------------- | ----------------------------------------------- |
|  -3.5% | -20.00ms | 100.0% | 577.0ms → 557.0ms | 164 → 177 | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                             | Location                                                                |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| -10.2% | -20.00ms | 100.0% | 197.0ms → 177.0ms | 197 → 177 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |    Delta |      % |          Time |       Samples | Caller                                                  | Location                                                               |
| -----: | -------: | -----: | ------------: | ------------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -1.0% | -17.00ms | 100.0% | 1.63s → 1.61s | 1,635 → 1,618 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

| Change |   Delta |             % |  Time |       Samples | Caller                                                | Location                                            |
| -----: | ------: | ------------: | ----: | ------------: | ----------------------------------------------------- | --------------------------------------------------- |
|  -0.1% | -2.00ms | 86.7% → 87.0% | 2.88s | 2,882 → 2,881 | `Symfony\Component\Console\Application::doRunCommand` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |      % |              Time |   Samples | Caller                                    | Location                                       |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------------------------- | ---------------------------------------------- |
|  -1.9% | -15.00ms | 100.0% | 792.0ms → 777.0ms | 792 → 777 | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

| Change |    Delta |             % |            Time | Samples | Caller                                                                      | Location                                                                   |
| -----: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| -21.2% | -11.00ms | 94.5% → 97.6% | 52.0ms → 41.0ms | 52 → 41 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
| -66.7% |  -2.00ms |   5.5% → 2.4% |   3.0ms → 1.0ms |   3 → 1 | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `./composer/vendor/symfony/finder/Finder.php`                              |

##### `Composer\Pcre\Preg::replaceCallback` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |    Delta |             % |           Time | Samples | Caller                                    | Location                                      |
| ------: | -------: | ------------: | -------------: | ------: | ----------------------------------------- | --------------------------------------------- |
|  -75.0% | -12.00ms | 84.2% → 66.7% | 16.0ms → 4.0ms |  16 → 4 | `Composer\Util\Filesystem::normalizePath` | `./composer/src/Composer/Util/Filesystem.php` |
| removed |  -1.00ms |   5.3% → 0.0% |    1.0ms → 0ms |   1 → 0 | `Composer\Util\Platform::expandPath`      | `./composer/src/Composer/Util/Platform.php`   |

##### `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`)

| Change |    Delta |      % |            Time | Samples | Caller                                                    | Location                                                                   |
| -----: | -------: | -----: | --------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| -21.8% | -12.00ms | 100.0% | 55.0ms → 43.0ms | 55 → 43 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |    Delta |      % |              Time |  Samples | Caller                                                  | Location                                                     |
| -----: | -------: | -----: | ----------------: | -------: | ------------------------------------------------------- | ------------------------------------------------------------ |
|  -5.8% | -24.00ms | 100.0% | 414.0ms → 390.0ms | 100 → 95 | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

| Change |    Delta |     % |          Time |       Samples | Caller                                       | Location                                            |
| -----: | -------: | ----: | ------------: | ------------: | -------------------------------------------- | --------------------------------------------------- |
|  -0.5% | -16.00ms | 99.9% | 3.09s → 3.08s | 2,886 → 2,907 | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |    Delta |      % |            Time | Samples | Caller                                             | Location                                                 |
| -----: | -------: | -----: | --------------: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
| -16.3% | -13.00ms | 100.0% | 80.0ms → 67.0ms | 80 → 67 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:353`)

|  Change |    Delta |             % |         Time | Samples | Caller                         | Location                                    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ | ------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |   Delta |      % |              Time | Samples | Caller                                                     | Location                                                     |
| -----: | ------: | -----: | ----------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
|  -6.7% | -9.00ms | 100.0% | 134.0ms → 125.0ms | 33 → 29 | `Composer\Package\Version\VersionGuesser::guessGitVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Package\Version\VersionGuesser::guessSvnVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |   Delta |      % |            Time | Samples | Caller                                                  | Location                                                     |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| -16.4% | -9.00ms | 100.0% | 55.0ms → 46.0ms | 31 → 26 | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Package\Version\VersionGuesser::guessHgVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |   Delta |      % |            Time | Samples | Caller                                                  | Location                                                     |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| -14.3% | -8.00ms | 100.0% | 56.0ms → 48.0ms | 30 → 24 | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

| Change |    Delta |             % |              Time |       Samples | Callee                                                    | Location                                                                |
| -----: | -------: | ------------: | ----------------: | ------------: | --------------------------------------------------------- | ----------------------------------------------------------------------- |
|  -1.0% | -17.00ms | 67.3% → 65.7% |     1.63s → 1.61s | 1,635 → 1,618 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  +8.3% | +10.00ms |   5.0% → 5.3% | 121.0ms → 131.0ms |     121 → 131 | `Composer\Pcre\Preg::matchAllStrictGroups`                | `./composer/vendor/composer/pcre/src/Preg.php`                          |
| +19.0% |  +8.00ms |   1.7% → 2.0% |   42.0ms → 50.0ms |       42 → 50 | `Composer\Pcre\Preg::matchAll`                            | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|    new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `Composer\ClassMapGenerator\PhpFileParser::getExtraTypes` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`  |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

| Change |    Delta |              % |          Time |       Samples | Callee                                      | Location                                                 |
| -----: | -------: | -------------: | ------------: | ------------: | ------------------------------------------- | -------------------------------------------------------- |
|  +0.8% | +23.00ms | 100.0% → 99.9% | 2.80s → 2.82s | 2,805 → 2,828 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|    new |  +1.00ms |   0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `Composer\IO\ConsoleIO::write`              | `./composer/src/Composer/IO/ConsoleIO.php`               |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|  Change |    Delta |             % |            Time |       Samples | Callee                                                    | Location                                                                   |
| ------: | -------: | ------------: | --------------: | ------------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
|   +0.7% | +19.00ms | 94.8% → 94.7% |   2.66s → 2.67s | 2,660 → 2,679 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  -20.0% |  -4.00ms |   0.7% → 0.6% | 20.0ms → 16.0ms |       20 → 16 | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  +60.0% |  +3.00ms |   0.2% → 0.3% |   5.0ms → 8.0ms |         5 → 8 | `Composer\Util\Filesystem::filePutContentsIfModified`     | `./composer/src/Composer/Util/Filesystem.php`                              |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |   1.0ms → 3.0ms |         1 → 3 | `Composer\Util\Filesystem::safeCopy`                      | `./composer/src/Composer/Util/Filesystem.php`                              |
|     new |  +2.00ms |   0.0% → 0.1% |     0ms → 2.0ms |         0 → 2 | `Composer\Util\Filesystem::findShortestPathCode`          | `./composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |   Delta |           % |          Time | Samples | Callee                              | Location                                       |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------------- | ---------------------------------------------- |
| +100.0% | +1.00ms | 0.6% → 1.1% | 1.0ms → 2.0ms |   1 → 2 | `Composer\Pcre\Preg::checkSetOrder` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|  Change |    Delta |             % |            Time |       Samples | Callee                                                                          | Location                                                                       |
| ------: | -------: | ------------: | --------------: | ------------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|   +1.4% | +34.00ms | 91.3% → 91.9% |   2.42s → 2.46s | 2,428 → 2,462 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  +71.4% | +15.00ms |   0.8% → 1.3% | 21.0ms → 36.0ms |       21 → 36 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  -21.8% | -12.00ms |   2.1% → 1.6% | 55.0ms → 43.0ms |       55 → 43 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  -57.1% |  -8.00ms |   0.5% → 0.2% |  14.0ms → 6.0ms |        14 → 6 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`            | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
| +166.7% |  +5.00ms |   0.1% → 0.3% |   3.0ms → 8.0ms |         3 → 8 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |   Delta |             % |            Time | Samples | Callee                                    | Location                                       |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------- | ---------------------------------------------- |
| +60.0% | +6.00ms | 47.6% → 44.4% | 10.0ms → 16.0ms | 10 → 16 | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time |   Samples | Callee                         | Location                                       |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ---------------------------------------------- |
| +11.1% | +13.00ms | 96.7% → 99.2% | 117.0ms → 130.0ms | 117 → 130 | `Composer\Pcre\Preg::matchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|  Change |   Delta |            % |          Time |       Samples | Callee                                                 | Location                                            |
| ------: | ------: | -----------: | ------------: | ------------: | ------------------------------------------------------ | --------------------------------------------------- |
|   +0.3% | +8.00ms |        99.9% | 2.86s → 2.87s | 2,866 → 2,875 | `Symfony\Component\Console\Application::doRunCommand`  | `./composer/vendor/symfony/console/Application.php` |
| +100.0% | +1.00ms | <0.1% → 0.1% | 1.0ms → 2.0ms |         1 → 2 | `Symfony\Component\Console\Application::getDefinition` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time |   Samples | Callee                                  | Location                                       |
| -----: | -------: | ------------: | ----------------: | --------: | --------------------------------------- | ---------------------------------------------- |
|  -1.9% | -15.00ms | 85.5% → 83.2% | 792.0ms → 777.0ms | 792 → 777 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|  Change |   Delta |             % |          Time | Samples | Callee                                              | Location                                           |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------- | -------------------------------------------------- |
| +300.0% | +3.00ms | 33.3% → 50.0% | 1.0ms → 4.0ms |   1 → 4 | `Symfony\Component\Finder\SplFileInfo::__construct` | `./composer/vendor/symfony/finder/SplFileInfo.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|  Change |   Delta |             % |           Time | Samples | Callee                                                     | Location                                                                |
| ------: | ------: | ------------: | -------------: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------- |
|  +22.2% | +2.00ms | 81.8% → 73.3% | 9.0ms → 11.0ms |  9 → 11 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| +100.0% | +1.00ms |  9.1% → 13.3% |  1.0ms → 2.0ms |   1 → 2 | `Composer\ClassMapGenerator\PhpFileCleaner::match`         | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Util\Silencer::suppress` (`./composer/src/Composer/Util/Silencer.php`)

| Change |   Delta |     % |          Time | Samples | Callee                               | Location                                        |
| -----: | ------: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------------------- |
| +50.0% | +2.00ms | 66.7% | 4.0ms → 6.0ms |   4 → 6 | `Composer\Util\ErrorHandler::handle` | `./composer/src/Composer/Util/ErrorHandler.php` |

##### `Composer\Util\Filesystem::filePutContentsIfModified` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |              % |          Time | Samples | Callee                         | Location                                    |
| ------: | ------: | -------------: | ------------: | ------: | ------------------------------ | ------------------------------------------- |
| +100.0% | +4.00ms | 80.0% → 100.0% | 4.0ms → 8.0ms |   4 → 8 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Util\ErrorHandler::handle` (`./composer/src/Composer/Util/ErrorHandler.php`)

| Change |   Delta |     % |          Time | Samples | Callee                              | Location                                   |
| -----: | ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------ |
| +50.0% | +1.00ms | 50.0% | 2.0ms → 3.0ms |   2 → 3 | `Composer\IO\ConsoleIO::writeError` | `./composer/src/Composer/IO/ConsoleIO.php` |

##### `Symfony\Component\Console\Formatter\OutputFormatter::formatAndWrap` (`./composer/vendor/symfony/console/Formatter/OutputFormatter.php`)

| Change |   Delta |            % |        Time | Samples | Callee                                                               | Location                                                                    |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `Symfony\Component\Console\Formatter\OutputFormatterStyleStack::pop` | `./composer/vendor/symfony/console/Formatter/OutputFormatterStyleStack.php` |

##### `JsonSchema\Constraints\Constraint::checkType` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/Constraint.php`)

| Change |   Delta |            % |        Time | Samples | Callee                                              | Location                                                                                    |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `JsonSchema\Constraints\Factory::createInstanceFor` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/Factory.php`        |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `JsonSchema\Constraints\TypeConstraint::check`      | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/TypeConstraint.php` |

##### `Symfony\Component\Console\Terminal::getWidth` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |   Delta |      % |          Time | Samples | Callee                                               | Location                                         |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| +20.0% | +1.00ms | 100.0% | 5.0ms → 6.0ms |       1 | `Symfony\Component\Console\Terminal::initDimensions` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Formatter\OutputFormatter::format` (`./composer/vendor/symfony/console/Formatter/OutputFormatter.php`)

| Change |   Delta |             % |        Time | Samples | Callee                                                               | Location                                                          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Symfony\Component\Console\Formatter\OutputFormatter::formatAndWrap` | `./composer/vendor/symfony/console/Formatter/OutputFormatter.php` |

##### `JsonSchema\SchemaStorage::expandRefs` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php`)

|  Change |   Delta |              % |          Time | Samples | Callee                                 | Location                                                                         |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------------------- | -------------------------------------------------------------------------------- |
| +100.0% | +2.00ms | 66.7% → 100.0% | 2.0ms → 4.0ms |   2 → 4 | `JsonSchema\SchemaStorage::expandRefs` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php`   |
| removed | -1.00ms |   33.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `JsonSchema\Uri\UriResolver::resolve`  | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriResolver.php` |

##### `Composer\Factory::createConfig` (`./composer/src/Composer/Factory.php`)

|  Change |   Delta |            % |        Time | Samples | Callee                         | Location                              |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------ | ------------------------------------- |
|     new | +2.00ms | 0.0% → 50.0% | 0ms → 2.0ms |   0 → 2 | `Composer\Factory::getHomeDir` | `./composer/src/Composer/Factory.php` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\Config::__construct` | `./composer/src/Composer/Config.php`  |

##### `Composer\Console\Application::__construct` (`./composer/src/Composer/Console/Application.php`)

|  Change |   Delta |             % |          Time | Samples | Callee                                               | Location                                                      |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------- |
| +100.0% | +1.00ms | 33.3% → 40.0% | 1.0ms → 2.0ms |   1 → 2 | `Seld\Signal\SignalHandler::create`                  | `./composer/vendor/seld/signal-handler/src/SignalHandler.php` |
|     new | +1.00ms |  0.0% → 20.0% |   0ms → 1.0ms |   0 → 1 | `Symfony\Component\Console\Application::__construct` | `./composer/vendor/symfony/console/Application.php`           |

##### `Composer\Util\Filesystem::findShortestPathCode` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |      % |          Time | Samples | Callee                                    | Location                                      |
| ------: | ------: | -----: | ------------: | ------: | ----------------------------------------- | --------------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `Composer\Util\Filesystem::normalizePath` | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Util\Filesystem::safeCopy` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |             % |        Time | Samples | Callee                                    | Location                                      |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------- | --------------------------------------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `Composer\Util\Filesystem::filesAreEqual` | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Factory::getHomeDir` (`./composer/src/Composer/Factory.php`)

| Change |   Delta |             % |        Time | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------ | ------------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Command\RequireCommand::configure` (`./composer/src/Composer/Command/RequireCommand.php`)

| Change |   Delta |             % |        Time | Samples | Callee                                            | Location                                                |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `Composer\Console\Input\InputOption::__construct` | `./composer/src/Composer/Console/Input/InputOption.php` |

##### `Composer\Util\Git::getVersion` (`./composer/src/Composer/Util/Git.php`)

| Change |   Delta |      % |          Time | Samples | Callee                                   | Location                                           |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------- | -------------------------------------------------- |
| +16.7% | +1.00ms | 100.0% | 6.0ms → 7.0ms |   1 → 3 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\Git::getNoShowSignatureFlag` (`./composer/src/Composer/Util/Git.php`)

| Change |   Delta |      % |          Time | Samples | Callee                          | Location                               |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------- | -------------------------------------- |
| +16.7% | +1.00ms | 100.0% | 6.0ms → 7.0ms |   1 → 3 | `Composer\Util\Git::getVersion` | `./composer/src/Composer/Util/Git.php` |

##### `Composer\Console\Application::getDefaultInputDefinition` (`./composer/src/Composer/Console/Application.php`)

|  Change |   Delta |             % |        Time | Samples | Callee                                                     | Location                                                      |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Symfony\Component\Console\Input\InputOption::__construct` | `./composer/vendor/symfony/console/Input/InputOption.php`     |
|     new | +1.00ms |  0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `Seld\Signal\SignalHandler::__destruct`                    | `./composer/vendor/seld/signal-handler/src/SignalHandler.php` |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

| Change |     Delta |             % |            Time |       Samples | Callee                                          | Location                                          |
| -----: | --------: | ------------: | --------------: | ------------: | ----------------------------------------------- | ------------------------------------------------- |
| -95.9% | -162.00ms |   5.2% → 0.2% | 169.0ms → 7.0ms |         1 → 2 | `Symfony\Component\Console\Terminal::getHeight` | `./composer/vendor/symfony/console/Terminal.php`  |
|  -0.5% |  -16.00ms | 94.7% → 99.6% |   3.09s → 3.08s | 2,886 → 2,907 | `Composer\Console\Application::doRun`           | `./composer/src/Composer/Console/Application.php` |
| +20.0% |   +1.00ms |          0.2% |   5.0ms → 6.0ms |             1 | `Symfony\Component\Console\Terminal::getWidth`  | `./composer/vendor/symfony/console/Terminal.php`  |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

| Change |     Delta |      % |          Time |       Samples | Callee                                       | Location                                            |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------------------------- | --------------------------------------------------- |
|  -5.4% | -177.00ms | 100.0% | 3.26s → 3.08s | 2,882 → 2,904 | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Terminal::getHeight` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |            Time | Samples | Callee                                               | Location                                         |
| -----: | --------: | -----: | --------------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| -95.9% | -162.00ms | 100.0% | 169.0ms → 7.0ms |   1 → 2 | `Symfony\Component\Console\Terminal::initDimensions` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Samples | Callee                                                | Location                                         |
| -----: | --------: | -----: | ---------------: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| -92.5% | -161.00ms | 100.0% | 174.0ms → 13.0ms |   2 → 3 | `Symfony\Component\Console\Terminal::readFromProcess` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensionsUsingStty` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Samples | Callee                                               | Location                                         |
| -----: | --------: | -----: | ---------------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| -92.5% | -161.00ms | 100.0% | 174.0ms → 13.0ms |   2 → 3 | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensions` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Samples | Callee                                                        | Location                                         |
| -----: | --------: | -----: | ---------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------ |
| -92.5% | -161.00ms | 100.0% | 174.0ms → 13.0ms |   2 → 3 | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php` |

##### `(anonymous)` (`./profile.php`)

| Change |     Delta |             % |          Time |       Samples | Callee                                      | Location                                          |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------- | ------------------------------------------------- |
|  -5.1% | -153.00ms | 99.7% → 99.8% | 3.01s → 2.85s | 2,628 → 2,674 | `Composer\Console\Application::run`         | `./composer/src/Composer/Console/Application.php` |
| -66.7% |   -2.00ms |  0.1% → <0.1% | 3.0ms → 1.0ms |         3 → 1 | `Composer\Autoload\ClassLoader::loadClass`  | `./composer/vendor/composer/ClassLoader.php`      |
| +66.7% |   +2.00ms |   0.1% → 0.2% | 3.0ms → 5.0ms |         3 → 5 | `Composer\Console\Application::__construct` | `./composer/src/Composer/Console/Application.php` |
| -50.0% |   -1.00ms |  0.1% → <0.1% | 2.0ms → 1.0ms |             1 | `(anonymous)`                               | `./composer/src/bootstrap.php`                    |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|  Change |    Delta |           % |              Time |   Samples | Callee                                               | Location                                                       |
| ------: | -------: | ----------: | ----------------: | --------: | ---------------------------------------------------- | -------------------------------------------------------------- |
|   -7.6% | -48.00ms |       94.5% | 633.0ms → 585.0ms | 219 → 205 | `Composer\Package\Loader\RootPackageLoader::load`    | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  -18.8% |  -3.00ms | 2.4% → 2.1% |   16.0ms → 13.0ms |   16 → 13 | `Composer\Json\JsonFile::validateSchema`             | `./composer/src/Composer/Json/JsonFile.php`                    |
| +100.0% |  +2.00ms | 0.3% → 0.6% |     2.0ms → 4.0ms |     2 → 4 | `Composer\Factory::createConfig`                     | `./composer/src/Composer/Factory.php`                          |
| removed |  -2.00ms | 0.3% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Composer\EventDispatcher\EventDispatcher::dispatch` | `./composer/src/Composer/EventDispatcher/EventDispatcher.php`  |
|  -33.3% |  -1.00ms | 0.4% → 0.3% |     3.0ms → 2.0ms |     3 → 2 | `Composer\Autoload\ClassLoader::loadClass`           | `./composer/vendor/composer/ClassLoader.php`                   |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

| Change |    Delta |      % |              Time |   Samples | Callee                                      | Location                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------- | ------------------------------------------------- |
|  -7.7% | -51.00ms | 100.0% | 666.0ms → 615.0ms | 252 → 235 | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

| Change |    Delta |      % |              Time |   Samples | Callee                                      | Location                                          |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------- | ------------------------------------------------- |
|  -7.5% | -49.00ms | 100.0% | 653.0ms → 604.0ms | 244 → 228 | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

| Change |    Delta |      % |              Time |   Samples | Callee                             | Location                              |
| -----: | -------: | -----: | ----------------: | --------: | ---------------------------------- | ------------------------------------- |
|  -7.2% | -48.00ms | 100.0% | 667.0ms → 619.0ms | 253 → 239 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

| Change |    Delta |             % |              Time |   Samples | Callee                                                  | Location                                                     |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------- | ------------------------------------------------------------ |
|  -7.5% | -47.00ms | 99.2% → 99.3% | 628.0ms → 581.0ms | 214 → 201 | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| -33.3% |  -1.00ms |   0.5% → 0.3% |     3.0ms → 2.0ms |     3 → 2 | `Composer\Package\Loader\ArrayLoader::load`             | `./composer/src/Composer/Package/Loader/ArrayLoader.php`     |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

| Change |    Delta |      % |              Time |   Samples | Callee                     | Location                              |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------- |
|  -7.1% | -47.00ms | 100.0% | 666.0ms → 619.0ms | 252 → 239 | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |    Delta |             % |              Time |  Samples | Callee                                                        | Location                                                     |
| -----: | -------: | ------------: | ----------------: | -------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
|  -5.8% | -24.00ms | 65.9% → 67.1% | 414.0ms → 390.0ms | 100 → 95 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| -16.4% |  -9.00ms |   8.8% → 7.9% |   55.0ms → 46.0ms |  31 → 26 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| -14.3% |  -8.00ms |   8.9% → 8.3% |   56.0ms → 48.0ms |  30 → 24 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  -5.8% |  -6.00ms | 16.4% → 16.7% |  103.0ms → 97.0ms |  53 → 56 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|  Change |    Delta |           % |              Time |   Samples | Callee                                           | Location                                        |
| ------: | -------: | ----------: | ----------------: | --------: | ------------------------------------------------ | ----------------------------------------------- |
|   -7.4% | -46.00ms |       99.5% | 624.0ms → 578.0ms | 210 → 198 | `Symfony\Component\Process\Process::run`         | `./composer/vendor/symfony/process/Process.php` |
| removed |  -1.00ms | 0.2% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Symfony\Component\Process\Process::__construct` | `./composer/vendor/symfony/process/Process.php` |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `Composer\Autoload\ClassLoader::loadClass`       | `./composer/vendor/composer/ClassLoader.php`    |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

| Change |    Delta |      % |              Time |   Samples | Callee                                      | Location                                           |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------- | -------------------------------------------------- |
|  -7.3% | -46.00ms | 100.0% | 627.0ms → 581.0ms | 213 → 201 | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

| Change |    Delta |      % |              Time |   Samples | Callee                                     | Location                                           |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------------ | -------------------------------------------------- |
|  -7.3% | -46.00ms | 100.0% | 627.0ms → 581.0ms | 213 → 201 | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

| Change |    Delta |             % |              Time |   Samples | Callee                                     | Location                                        |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------ | ----------------------------------------------- |
|  -4.0% | -23.00ms | 92.9% → 96.4% | 580.0ms → 557.0ms | 166 → 177 | `Symfony\Component\Process\Process::wait`  | `./composer/vendor/symfony/process/Process.php` |
| -52.3% | -23.00ms |   7.1% → 3.6% |   44.0ms → 21.0ms |   44 → 21 | `Symfony\Component\Process\Process::start` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|  Change |    Delta |           % |          Time | Samples | Callee                             | Location                                              |
| ------: | -------: | ----------: | ------------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| removed | -10.00ms | 4.0% → 0.0% |  10.0ms → 0ms |  10 → 0 | `(anonymous)`                      | `./composer/src/Composer/Console/Application.php:353` |
|     new | +10.00ms | 0.0% → 4.6% |  0ms → 10.0ms |  0 → 10 | `(anonymous)`                      | `./composer/src/Composer/Console/Application.php:349` |
|  +50.0% |  +3.00ms | 2.4% → 4.1% | 6.0ms → 9.0ms |   6 → 9 | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php`           |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                            | Location                                        |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------- | ----------------------------------------------- |
|   -3.5% | -20.00ms | 99.3% → 99.8% | 576.0ms → 556.0ms | 163 → 176 | `Symfony\Component\Process\Process::readPipes`    | `./composer/vendor/symfony/process/Process.php` |
| removed |  -1.00ms |   0.2% → 0.0% |       1.0ms → 0ms |     1 → 0 | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |
|     new |  +1.00ms |   0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `Symfony\Component\Process\Process::isRunning`    | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

|  Change |   Delta |            % |          Time | Samples | Callee                                                   | Location                                        |
| ------: | ------: | -----------: | ------------: | ------: | -------------------------------------------------------- | ----------------------------------------------- |
|  -80.0% | -4.00ms | 11.4% → 4.8% | 5.0ms → 1.0ms |   5 → 1 | `Symfony\Component\Process\Process::getDefaultEnv`       | `./composer/vendor/symfony/process/Process.php` |
|  -50.0% | -1.00ms |  4.5% → 4.8% | 2.0ms → 1.0ms |   2 → 1 | `Symfony\Component\Process\Process::updateStatus`        | `./composer/vendor/symfony/process/Process.php` |
| removed | -1.00ms |  2.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `Symfony\Component\Process\Process::resetProcessData`    | `./composer/vendor/symfony/process/Process.php` |
|     new | +1.00ms |  0.0% → 4.8% |   0ms → 1.0ms |   0 → 1 | `Symfony\Component\Process\Process::replacePlaceholders` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|  Change |    Delta |              % |              Time |   Samples | Callee                                                    | Location                                                |
| ------: | -------: | -------------: | ----------------: | --------: | --------------------------------------------------------- | ------------------------------------------------------- |
|   -3.5% | -20.00ms | 99.7% → 100.0% | 577.0ms → 557.0ms | 164 → 177 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php` |
| removed |  -2.00ms |    0.3% → 0.0% |       2.0ms → 0ms |     2 → 0 | `(anonymous)`                                             | `./composer/vendor/symfony/process/Process.php:1324`    |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time |   Samples | Callee                                   | Location                                       |
| -----: | -------: | ------------: | ----------------: | --------: | ---------------------------------------- | ---------------------------------------------- |
|  -9.8% | -28.00ms | 54.2% → 51.0% | 287.0ms → 259.0ms | 287 → 259 | `Composer\Pcre\Preg::pregMatch`          | `./composer/vendor/composer/pcre/src/Preg.php` |
|  -3.2% |  -3.00ms | 17.9% → 18.1% |   95.0ms → 92.0ms |   95 → 92 | `Composer\Pcre\Preg::checkOffsetCapture` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|  Change |   Delta |           % |        Time | Samples | Callee                                                   | Location                                                    |
| ------: | ------: | ----------: | ----------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------- |
| removed | -1.00ms | 0.2% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Symfony\Component\Process\Pipes\AbstractPipes::write`   | `./composer/vendor/symfony/process/Pipes/AbstractPipes.php` |
|     new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `Symfony\Component\Process\Pipes\AbstractPipes::unblock` | `./composer/vendor/symfony/process/Pipes/AbstractPipes.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|  Change |   Delta |           % |        Time | Samples | Callee                                            | Location                                                                |
| ------: | ------: | ----------: | ----------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------- |
| removed | -1.00ms | 0.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Composer\ClassMapGenerator\PhpFileCleaner::peek` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |    Delta |             % |              Time |   Samples | Callee                                                   | Location                                                                |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| -10.2% | -20.00ms | 12.0% → 10.9% | 197.0ms → 177.0ms | 197 → 177 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| +36.4% |  +4.00ms |   0.7% → 0.9% |   11.0ms → 15.0ms |   11 → 15 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  -0.2% |  -2.00ms | 60.8% → 61.3% | 994.0ms → 992.0ms | 994 → 992 | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| -20.0% |  -1.00ms |   0.3% → 0.2% |     5.0ms → 4.0ms |     5 → 4 | `Composer\Pcre\Preg::isMatch`                            | `./composer/vendor/composer/pcre/src/Preg.php`                          |
| -25.0% |  -1.00ms |          0.2% |     4.0ms → 3.0ms |     4 → 3 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

| Change |    Delta |             % |              Time |       Samples | Callee                                          | Location                                                  |
| -----: | -------: | ------------: | ----------------: | ------------: | ----------------------------------------------- | --------------------------------------------------------- |
|  -7.9% | -41.00ms | 15.7% → 14.5% | 522.0ms → 481.0ms |     214 → 201 | `Composer\Command\BaseCommand::initialize`      | `./composer/src/Composer/Command/BaseCommand.php`         |
|  +0.9% | +25.00ms | 84.3% → 85.5% |     2.80s → 2.83s | 2,805 → 2,830 | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time |   Samples | Callee                                      | Location                                       |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------- | ---------------------------------------------- |
|  -3.7% | -19.00ms | 64.5% → 63.3% | 511.0ms → 492.0ms | 511 → 492 | `Composer\Pcre\Preg::match`                 | `./composer/vendor/composer/pcre/src/Preg.php` |
|  +0.7% |  +1.00ms | 17.6% → 18.0% | 139.0ms → 140.0ms | 139 → 140 | `Composer\Pcre\Preg::enforceNonNullMatches` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`)

|  Change |    Delta |             % |            Time | Samples | Callee                                                                          | Location                                                                       |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -20.8% | -11.00ms | 96.4% → 97.7% | 53.0ms → 42.0ms | 53 → 42 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren`     | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
| removed |  -2.00ms |   3.6% → 0.0% |     2.0ms → 0ms |   2 → 0 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|  Change |    Delta |             % |              Time | Samples | Callee                                                        | Location                                                     |
| ------: | -------: | ------------: | ----------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
|   -5.5% | -15.00ms | 65.9% → 66.2% | 273.0ms → 258.0ms | 65 → 63 | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`           |
|   -6.7% |  -9.00ms | 32.4% → 32.1% | 134.0ms → 125.0ms | 33 → 29 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| removed |  -1.00ms |   0.2% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Autoload\ClassLoader::loadClass`                    | `./composer/vendor/composer/ClassLoader.php`                 |
|  +16.7% |  +1.00ms |   1.4% → 1.8% |     6.0ms → 7.0ms |   1 → 3 | `Composer\Util\Git::getNoShowSignatureFlag`                   | `./composer/src/Composer/Util/Git.php`                       |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

| Change |    Delta |             % |              Time |       Samples | Callee                                         | Location                                            |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------- | --------------------------------------------------- |
| -15.2% | -37.00ms |   7.8% → 6.7% | 243.0ms → 206.0ms |       33 → 32 | `Composer\Util\Silencer::call`                 | `./composer/src/Composer/Util/Silencer.php`         |
|  +0.8% | +24.00ms | 91.5% → 92.7% |     2.83s → 2.86s | 2,836 → 2,860 | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |
| -35.3% |  -6.00ms |   0.5% → 0.4% |   17.0ms → 11.0ms |       16 → 11 | `Symfony\Component\Console\Application::find`  | `./composer/vendor/symfony/console/Application.php` |
|    new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `Composer\Util\Platform::getCwd`               | `./composer/src/Composer/Util/Platform.php`         |
| +50.0% |  +1.00ms |          0.1% |     2.0ms → 3.0ms |         2 → 3 | `Composer\Autoload\ClassLoader::loadClass`     | `./composer/vendor/composer/ClassLoader.php`        |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |    Delta |             % |            Time | Samples | Callee                                     | Location                                      |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------------------ | --------------------------------------------- |
| -26.2% | -11.00ms | 52.5% → 46.3% | 42.0ms → 31.0ms | 42 → 31 | `Composer\Util\Filesystem::normalizePath`  | `./composer/src/Composer/Util/Filesystem.php` |
|    new |  +2.00ms |   0.0% → 3.0% |     0ms → 2.0ms |   0 → 2 | `Composer\Util\Filesystem::isAbsolutePath` | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |   Delta |      % |              Time | Samples | Callee                                   | Location                                           |
| -----: | ------: | -----: | ----------------: | ------: | ---------------------------------------- | -------------------------------------------------- |
|  -6.7% | -9.00ms | 100.0% | 134.0ms → 125.0ms | 33 → 29 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Package\Version\VersionGuesser::guessSvnVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |   Delta |      % |            Time | Samples | Callee                                   | Location                                           |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------- | -------------------------------------------------- |
| -16.4% | -9.00ms | 100.0% | 55.0ms → 46.0ms | 31 → 26 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Package\Version\VersionGuesser::guessHgVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |   Delta |      % |            Time | Samples | Callee                                   | Location                                           |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------- | -------------------------------------------------- |
| -14.3% | -8.00ms | 100.0% | 56.0ms → 48.0ms | 30 → 24 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← `(anonymous)` (`./profile.php`)

|  Change |    Delta |             % |              Time |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +5.1% | +32.00ms | 16.1% → 17.9% | 630.0ms → 662.0ms | 630 → 662 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                          |
|  +17.6% | +23.00ms |   3.3% → 4.2% | 131.0ms → 154.0ms | 131 → 154 | `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                         |
|  +11.3% | +13.00ms |   2.9% → 3.5% | 115.0ms → 128.0ms | 115 → 128 | `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                           |
| +110.0% | +11.00ms |   0.3% → 0.6% |   10.0ms → 21.0ms |   10 → 21 | `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +183.3% | +11.00ms |   0.2% → 0.5% |    6.0ms → 17.0ms |    6 → 17 | `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   +7.4% | +10.00ms |   3.4% → 3.9% | 135.0ms → 145.0ms | 135 → 145 | `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |    0 → 10 | `(anonymous)` (`./composer/src/Composer/Console/Application.php:349`) ← `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +100.0% |  +9.00ms |   0.2% → 0.5% |    9.0ms → 18.0ms |    9 → 18 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +16.7% |  +7.00ms |   1.1% → 1.3% |   42.0ms → 49.0ms |   42 → 49 | `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                        |
|   +5.2% |  +7.00ms |   3.4% → 3.8% | 134.0ms → 141.0ms | 134 → 141 | `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                               |
|     new |  +5.00ms |   0.0% → 0.1% |       0ms → 5.0ms |     0 → 5 | `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                        |
|   +0.9% |  +4.00ms | 10.8% → 11.5% | 423.0ms → 427.0ms | 423 → 427 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                           |
| +200.0% |  +4.00ms |   0.1% → 0.2% |     2.0ms → 6.0ms |     2 → 6 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::accept` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                               |
|  +57.1% |  +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms |    7 → 11 | `(anonymous)` (`./vendor/composer/autoload_classmap.php`) ← `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +400.0% |  +4.00ms |  <0.1% → 0.1% |     1.0ms → 5.0ms |     1 → 5 | `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`) ← `Composer\Util\Filesystem::filePutContentsIfModified` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |  +4.00ms |   0.0% → 0.1% |       0ms → 4.0ms |     0 → 4 | `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::isMatch` ← `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                        |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 4 | `Symfony\Component\Finder\SplFileInfo::__construct` (`./composer/vendor/symfony/finder/SplFileInfo.php`) ← `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                           |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |     0 → 3 | `Composer\Util\Filesystem::filesAreEqual` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Util\Filesystem::safeCopy` ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +22.2% |  +2.00ms |   0.2% → 0.3% |    9.0ms → 11.0ms |    9 → 11 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                   |
| +100.0% |  +2.00ms |          0.1% |     2.0ms → 4.0ms |     2 → 4 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                      |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← `(anonymous)` (`./profile.php`)

|  Change |     Delta |           % |              Time |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------: | --------: | ----------: | ----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -95.9% | -162.00ms | 4.3% → 0.2% |   169.0ms → 7.0ms |     1 → 2 | `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`) ← `Symfony\Component\Console\Terminal::getSttyColumns` ← `Symfony\Component\Console\Terminal::initDimensionsUsingStty` ← `Symfony\Component\Console\Terminal::initDimensions` ← `Symfony\Component\Console\Terminal::getHeight`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -16.4% |  -38.00ms | 5.9% → 5.2% | 232.0ms → 194.0ms |   22 → 20 | `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`) ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   -9.7% |  -19.00ms | 5.0% → 4.8% | 196.0ms → 177.0ms | 196 → 177 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                              |
|   -6.5% |  -13.00ms |        5.1% | 201.0ms → 188.0ms | 201 → 188 | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← truncated |
|  -21.6% |  -11.00ms | 1.3% → 1.1% |   51.0ms → 40.0ms |   51 → 40 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← truncated                                                                                                                   |
|  -83.3% |  -10.00ms | 0.3% → 0.1% |    12.0ms → 2.0ms |    12 → 2 | `Composer\Pcre\Preg::replaceCallback` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Util\Filesystem::findShortestPath` ← `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |  -10.00ms | 0.3% → 0.0% |      10.0ms → 0ms |    10 → 0 | `(anonymous)` (`./composer/src/Composer/Console/Application.php:353`) ← `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`) ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -13.8% |   -9.00ms | 1.7% → 1.5% |   65.0ms → 56.0ms |   65 → 56 | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                            |
|   -8.1% |   -8.00ms |        2.5% |   99.0ms → 91.0ms |   99 → 91 | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -57.1% |   -8.00ms | 0.4% → 0.2% |    14.0ms → 6.0ms |    14 → 6 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   -2.7% |   -7.00ms | 6.5% → 6.7% | 256.0ms → 249.0ms |   48 → 54 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                        |
|   -7.7% |   -7.00ms |        2.3% |   91.0ms → 84.0ms |   91 → 84 | `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                   |
|  -75.0% |   -6.00ms | 0.2% → 0.1% |     8.0ms → 2.0ms |     8 → 2 | `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← truncated                                                                                                                                                                |
|  -75.0% |   -6.00ms | 0.2% → 0.1% |     8.0ms → 2.0ms |     8 → 2 | `Composer\Pcre\Preg::replace` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -50.0% |   -5.00ms | 0.3% → 0.1% |    10.0ms → 5.0ms |    10 → 5 | `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← truncated                                                                                                                                                                               |
|   -3.6% |   -5.00ms | 3.5% → 3.6% | 138.0ms → 133.0ms | 138 → 133 | `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                              |
|   -7.8% |   -5.00ms |        1.6% |   64.0ms → 59.0ms |   64 → 59 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |   -4.00ms | 0.1% → 0.0% |       4.0ms → 0ms |     4 → 0 | `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessHgVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← truncated                                                                                                                                                                                |
|   -4.3% |   -4.00ms |        2.4% |   93.0ms → 89.0ms |   43 → 48 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                     |
|   -9.1% |   -4.00ms |        1.1% |   44.0ms → 40.0ms |   44 → 40 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                            |

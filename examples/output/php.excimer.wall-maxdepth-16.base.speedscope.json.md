# Sampling profile

Took 3.92s over 3,124 samples (1.3ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| Third-party | 91.4% |   3.58s |   2,996 |
| Ours        |  8.6% | 339.0ms |     128 |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

Call stacks missing their outermost callers account for 23.0% of the time spent.

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                                                    | Location                                                                   |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 16.1% | 630.0ms |     630 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 14.7% | 576.0ms |     163 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.8% | 423.0ms |     423 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  7.3% | 287.0ms |     287 | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.9% | 233.0ms |      23 | `Composer\Util\Silencer::call`                                              | `./composer/src/Composer/Util/Silencer.php`                                |
|  5.0% | 196.0ms |     196 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.4% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::readFromProcess`                       | `./composer/vendor/symfony/console/Terminal.php`                           |
|  4.0% | 157.0ms |     157 | `Composer\Pcre\Preg::matchAll`                                              | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 148.0ms |     148 | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.6% | 142.0ms |     142 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.5% | 139.0ms |     139 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 134.0ms |     134 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.5% |  99.0ms |      99 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.4% |  96.0ms |      96 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  1.6% |  64.0ms |      64 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.4% |  55.0ms |      55 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  44.0ms |      44 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.9% |  36.0ms |      36 | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  0.8% |  32.0ms |      32 | `Composer\Util\Filesystem::normalizePath`                                   | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.5% |  19.0ms |      19 | `Composer\Pcre\Preg::replaceCallback`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                             |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Samples | Function                                                                    | Location                                                                   |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 16.1% | 630.0ms |     630 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 14.7% | 576.0ms |     163 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.8% | 423.0ms |     423 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  7.3% | 287.0ms |     287 | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.0% | 196.0ms |     196 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.4% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::readFromProcess`                       | `./composer/vendor/symfony/console/Terminal.php`                           |
|  4.0% | 157.0ms |     157 | `Composer\Pcre\Preg::matchAll`                                              | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 148.0ms |     148 | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.6% | 142.0ms |     142 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.5% | 139.0ms |     139 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 134.0ms |     134 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.5% |  99.0ms |      99 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.4% |  96.0ms |      96 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  1.6% |  64.0ms |      64 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.4% |  55.0ms |      55 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  44.0ms |      44 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.9% |  36.0ms |      36 | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  0.5% |  19.0ms |      19 | `Composer\Pcre\Preg::replaceCallback`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  0.4% |  16.0ms |      16 | `Composer\Autoload\ClassLoader::loadClass`                                  | `./composer/vendor/composer/ClassLoader.php`                               |
|  0.4% |  14.0ms |      14 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`        | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |

##### Ours

|     % |    Time | Samples | Function                                                 | Location                                                      |
| ----: | ------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------- |
|  5.9% | 233.0ms |      23 | `Composer\Util\Silencer::call`                           | `./composer/src/Composer/Util/Silencer.php`                   |
|  0.8% |  32.0ms |      32 | `Composer\Util\Filesystem::normalizePath`                | `./composer/src/Composer/Util/Filesystem.php`                 |
|  0.5% |  18.0ms |      18 | `Composer\Util\Filesystem::findShortestPath`             | `./composer/src/Composer/Util/Filesystem.php`                 |
|  0.3% |  10.0ms |      10 | `(anonymous)`                                            | `./composer/src/Composer/Console/Application.php:353`         |
|  0.2% |   6.0ms |       6 | `Composer\Autoload\AutoloadGenerator::getPathCode`       | `./composer/src/Composer/Autoload/AutoloadGenerator.php`      |
|  0.1% |   3.0ms |       3 | `Composer\Autoload\AutoloadGenerator::dump`              | `./composer/src/Composer/Autoload/AutoloadGenerator.php`      |
|  0.1% |   2.0ms |       1 | `(anonymous)`                                            | `./composer/src/Composer/Command/ShowCommand.php`             |
|  0.1% |   2.0ms |       2 | `Composer\Util\Silencer::suppress`                       | `./composer/src/Composer/Util/Silencer.php`                   |
|  0.1% |   2.0ms |       2 | `Composer\EventDispatcher\EventDispatcher::getListeners` | `./composer/src/Composer/EventDispatcher/EventDispatcher.php` |
|  0.1% |   2.0ms |       2 | `Composer\Autoload\AutoloadGenerator::getStaticFile`     | `./composer/src/Composer/Autoload/AutoloadGenerator.php`      |
|  0.1% |   2.0ms |       2 | `Composer\Util\Filesystem::isAbsolutePath`               | `./composer/src/Composer/Util/Filesystem.php`                 |
|  0.1% |   2.0ms |       2 | `Composer\Util\Filesystem::isReadable`                   | `./composer/src/Composer/Util/Filesystem.php`                 |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                            | `./composer/src/Composer/Console/Application.php`             |
| <0.1% |   1.0ms |       1 | `Composer\Console\Application::doRun`                    | `./composer/src/Composer/Console/Application.php`             |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                            | `./composer/src/Composer/Command/CreateProjectCommand.php`    |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                            | `./composer/src/Composer/Command/ArchiveCommand.php`          |
| <0.1% |   1.0ms |       1 | `Composer\Util\ErrorHandler::handle`                     | `./composer/src/Composer/Util/ErrorHandler.php`               |
| <0.1% |   1.0ms |       1 | `Composer\Factory::createComposer`                       | `./composer/src/Composer/Factory.php`                         |
| <0.1% |   1.0ms |       1 | `Composer\Factory::createConfig`                         | `./composer/src/Composer/Factory.php`                         |
| <0.1% |   1.0ms |       1 | `Composer\Util\StreamContextFactory::getTlsDefaults`     | `./composer/src/Composer/Util/StreamContextFactory.php`       |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |    Time | Samples | Caller                                                    | Location                                                                   |
| -----: | ------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 630.0ms |     630 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Samples | Caller                                         | Location                                        |
| -----: | ------: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 576.0ms |     163 | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                                  | Location                                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 423.0ms |     423 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                      | Location                                       |
| -----: | ------: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 287.0ms |     287 | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Samples | Caller                                                | Location                                          |
| ----: | ------: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 99.6% | 232.0ms |      22 | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  0.4% |   1.0ms |       1 | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                                |
| -----: | ------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 196.0ms |     196 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Samples | Caller                                               | Location                                         |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                  | Location                                                               |
| ----: | ------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 73.2% | 115.0ms |     115 | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| 26.8% |  42.0ms |      42 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                  | Location                                       |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------------------------- |
| 94.6% | 140.0ms |     140 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  5.4% |   8.0ms |       8 | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                    | Location                                       |
| -----: | ------: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 100.0% | 142.0ms |     142 | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                  | Location                                       |
| -----: | ------: | ------: | --------------------------------------- | ---------------------------------------------- |
| 100.0% | 139.0ms |     139 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                        | Location                                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 97.8% | 131.0ms |     131 | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  1.5% |   2.0ms |       2 | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.7% |   1.0ms |       1 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |   Time | Samples | Caller                                             | Location                                                                |
| -----: | -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 99.0ms |      99 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Samples | Caller                         | Location                                       |
| ----: | -----: | ------: | ------------------------------ | ---------------------------------------------- |
| 99.0% | 95.0ms |      95 | `Composer\Pcre\Preg::match`    | `./composer/vendor/composer/pcre/src/Preg.php` |
|  1.0% |  1.0ms |       1 | `Composer\Pcre\Preg::matchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                      | Location                                                 |
| -----: | -----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 64.0ms |      64 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|     % |   Time | Samples | Caller                                                                      | Location                                                                   |
| ----: | -----: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 94.5% | 52.0ms |      52 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  5.5% |  3.0ms |       3 | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `./composer/vendor/symfony/finder/Finder.php`                              |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Samples | Caller                                                                          | Location                                                                       |
| -----: | -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% | 44.0ms |      44 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

|      % |   Time | Samples | Caller                                   | Location                                        |
| -----: | -----: | ------: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% | 36.0ms |      36 | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`)

|     % |   Time | Samples | Caller                                             | Location                                                 |
| ----: | -----: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
| 65.6% | 21.0ms |      21 | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |
| 31.3% | 10.0ms |      10 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  3.1% |  1.0ms |       1 | `Composer\Util\Filesystem::findShortestPathCode`   | `./composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\Pcre\Preg::replaceCallback` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Samples | Caller                                                        | Location                                                                   |
| ----: | -----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 84.2% | 16.0ms |      16 | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
| 10.5% |  2.0ms |       2 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  5.3% |  1.0ms |       1 | `Composer\Util\Platform::expandPath`                          | `./composer/src/Composer/Util/Platform.php`                                |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |   Time | Samples | Caller                                             | Location                                                 |
| -----: | -----: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 18.0ms |      18 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Autoload\ClassLoader::loadClass` (`./composer/vendor/composer/ClassLoader.php`)

|     % |  Time | Samples | Caller                                             | Location                                                    |
| ----: | ----: | ------: | -------------------------------------------------- | ----------------------------------------------------------- |
| 12.5% | 2.0ms |       2 | `Composer\Console\Application::doRun`              | `./composer/src/Composer/Console/Application.php`           |
| 12.5% | 2.0ms |       2 | `Composer\Console\Application::getDefaultCommands` | `./composer/src/Composer/Console/Application.php`           |
| 12.5% | 2.0ms |       2 | `Composer\Factory::createComposer`                 | `./composer/src/Composer/Factory.php`                       |
| 12.5% | 2.0ms |       2 | `Composer\Util\HttpDownloader::__construct`        | `./composer/src/Composer/Util/HttpDownloader.php`           |
|  6.3% | 1.0ms |       1 | `(anonymous)`                                      | `./composer/vendor/symfony/console/Command/HelpCommand.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Samples | Caller                                                    | Location                                                                   |
| -----: | -----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 14.0ms |      14 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:353`)

|      % |   Time | Samples | Caller                         | Location                                    |
| -----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 10.0ms |      10 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                      | Location                                                 |
| -----: | ----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 6.0ms |       6 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                          | Location                                                  |
| -----: | ----: | ------: | ----------------------------------------------- | --------------------------------------------------------- |
| 100.0% | 3.0ms |       3 | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `(anonymous)` (`./composer/src/Composer/Command/ShowCommand.php`)

|      % |  Time | Samples | Caller        | Location                                         |
| -----: | ----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% | 2.0ms |       1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\Silencer::suppress` (`./composer/src/Composer/Util/Silencer.php`)

|      % |  Time | Samples | Caller                         | Location                                    |
| -----: | ----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\EventDispatcher\EventDispatcher::getListeners` (`./composer/src/Composer/EventDispatcher/EventDispatcher.php`)

|      % |  Time | Samples | Caller                                                 | Location                                                      |
| -----: | ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\EventDispatcher\EventDispatcher::doDispatch` | `./composer/src/Composer/EventDispatcher/EventDispatcher.php` |

##### `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                      | Location                                                 |
| -----: | ----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::isAbsolutePath` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Samples | Caller                                             | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::isReadable` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Samples | Caller                                               | Location                                                |
| -----: | ----: | ------: | ---------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Util\StreamContextFactory::getTlsDefaults` | `./composer/src/Composer/Util/StreamContextFactory.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Caller        | Location                                         |
| -----: | ----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Caller                                       | Location                                            |
| -----: | ----: | ------: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `(anonymous)` (`./composer/src/Composer/Command/CreateProjectCommand.php`)

|      % |  Time | Samples | Caller        | Location                                         |
| -----: | ----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`./composer/src/Composer/Command/ArchiveCommand.php`)

|      % |  Time | Samples | Caller        | Location                                         |
| -----: | ----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\ErrorHandler::handle` (`./composer/src/Composer/Util/ErrorHandler.php`)

|      % |  Time | Samples | Caller                             | Location                                    |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|      % |  Time | Samples | Caller                     | Location                              |
| -----: | ----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Factory::createConfig` (`./composer/src/Composer/Factory.php`)

|      % |  Time | Samples | Caller                             | Location                              |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Util\StreamContextFactory::getTlsDefaults` (`./composer/src/Composer/Util/StreamContextFactory.php`)

|      % |  Time | Samples | Caller                                      | Location                                          |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Util\HttpDownloader::__construct` | `./composer/src/Composer/Util/HttpDownloader.php` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function                                                  | Location                                                                   |
| ----: | ------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 84.8% |   3.32s |   3,019 | `Symfony\Component\Console\Command\Command::run`          | `./composer/vendor/symfony/console/Command/Command.php`                    |
| 83.4% |   3.27s |   2,888 | `Symfony\Component\Console\Application::run`              | `./composer/vendor/symfony/console/Application.php`                        |
| 83.2% |   3.26s |   2,882 | `Composer\Console\Application::run`                       | `./composer/src/Composer/Console/Application.php`                          |
| 79.0% |   3.09s |   2,888 | `Composer\Console\Application::doRun`                     | `./composer/src/Composer/Console/Application.php`                          |
| 77.0% |   3.01s |   2,635 | `(anonymous)`                                             | `./profile.php`                                                            |
| 73.5% |   2.88s |   2,882 | `Symfony\Component\Console\Application::doRunCommand`     | `./composer/vendor/symfony/console/Application.php`                        |
| 73.2% |   2.86s |   2,868 | `Symfony\Component\Console\Application::doRun`            | `./composer/vendor/symfony/console/Application.php`                        |
| 71.5% |   2.80s |   2,805 | `Composer\Autoload\AutoloadGenerator::dump`               | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
| 71.5% |   2.80s |   2,805 | `Composer\Command\DumpAutoloadCommand::execute`           | `./composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
| 67.8% |   2.66s |   2,660 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 61.9% |   2.42s |   2,428 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 41.7% |   1.63s |   1,635 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 25.4% | 995.0ms |     995 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 23.6% | 926.0ms |     926 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 20.2% | 792.0ms |     792 | `Composer\Pcre\Preg::matchStrictGroups`                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 17.1% | 670.0ms |     256 | `Composer\Factory::createComposer`                        | `./composer/src/Composer/Factory.php`                                      |
| 17.0% | 667.0ms |     253 | `Composer\Factory::create`                                | `./composer/src/Composer/Factory.php`                                      |
| 17.0% | 666.0ms |     252 | `Composer\Console\Application::getComposer`               | `./composer/src/Composer/Console/Application.php`                          |
| 17.0% | 666.0ms |     252 | `Composer\Command\BaseCommand::tryComposer`               | `./composer/src/Composer/Command/BaseCommand.php`                          |
| 16.6% | 653.0ms |     244 | `Composer\Command\BaseCommand::initialize`                | `./composer/src/Composer/Command/BaseCommand.php`                          |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Samples | Function                                                      | Location                                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 84.8% |   3.32s |   3,019 | `Symfony\Component\Console\Command\Command::run`              | `./composer/vendor/symfony/console/Command/Command.php`                    |
| 83.4% |   3.27s |   2,888 | `Symfony\Component\Console\Application::run`                  | `./composer/vendor/symfony/console/Application.php`                        |
| 73.5% |   2.88s |   2,882 | `Symfony\Component\Console\Application::doRunCommand`         | `./composer/vendor/symfony/console/Application.php`                        |
| 73.2% |   2.86s |   2,868 | `Symfony\Component\Console\Application::doRun`                | `./composer/vendor/symfony/console/Application.php`                        |
| 67.8% |   2.66s |   2,660 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`     | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 61.9% |   2.42s |   2,428 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`       | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 41.7% |   1.63s |   1,635 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 25.4% | 995.0ms |     995 | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 23.6% | 926.0ms |     926 | `Composer\Pcre\Preg::isMatchStrictGroups`                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 20.2% | 792.0ms |     792 | `Composer\Pcre\Preg::matchStrictGroups`                       | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 15.9% | 624.0ms |     210 | `Symfony\Component\Process\Process::run`                      | `./composer/vendor/symfony/process/Process.php`                            |
| 14.8% | 580.0ms |     166 | `Symfony\Component\Process\Process::wait`                     | `./composer/vendor/symfony/process/Process.php`                            |
| 14.8% | 579.0ms |     166 | `Symfony\Component\Process\Process::readPipes`                | `./composer/vendor/symfony/process/Process.php`                            |
| 14.7% | 577.0ms |     164 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`     | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 13.5% | 530.0ms |     530 | `Composer\Pcre\Preg::match`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  7.3% | 287.0ms |     287 | `Composer\Pcre\Preg::pregMatch`                               | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.0% | 197.0ms |     197 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.4% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::readFromProcess`         | `./composer/vendor/symfony/console/Terminal.php`                           |
|  4.4% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::getSttyColumns`          | `./composer/vendor/symfony/console/Terminal.php`                           |
|  4.4% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php`                           |

##### Ours

|     % |    Time | Samples | Function                                                      | Location                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------- |
| 83.2% |   3.26s |   2,882 | `Composer\Console\Application::run`                           | `./composer/src/Composer/Console/Application.php`              |
| 79.0% |   3.09s |   2,888 | `Composer\Console\Application::doRun`                         | `./composer/src/Composer/Console/Application.php`              |
| 77.0% |   3.01s |   2,635 | `(anonymous)`                                                 | `./profile.php`                                                |
| 71.5% |   2.80s |   2,805 | `Composer\Autoload\AutoloadGenerator::dump`                   | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
| 71.5% |   2.80s |   2,805 | `Composer\Command\DumpAutoloadCommand::execute`               | `./composer/src/Composer/Command/DumpAutoloadCommand.php`      |
| 17.1% | 670.0ms |     256 | `Composer\Factory::createComposer`                            | `./composer/src/Composer/Factory.php`                          |
| 17.0% | 667.0ms |     253 | `Composer\Factory::create`                                    | `./composer/src/Composer/Factory.php`                          |
| 17.0% | 666.0ms |     252 | `Composer\Console\Application::getComposer`                   | `./composer/src/Composer/Console/Application.php`              |
| 17.0% | 666.0ms |     252 | `Composer\Command\BaseCommand::tryComposer`                   | `./composer/src/Composer/Command/BaseCommand.php`              |
| 16.6% | 653.0ms |     244 | `Composer\Command\BaseCommand::initialize`                    | `./composer/src/Composer/Command/BaseCommand.php`              |
| 16.1% | 633.0ms |     219 | `Composer\Package\Loader\RootPackageLoader::load`             | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
| 16.0% | 628.0ms |     214 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
| 16.0% | 627.0ms |     213 | `Composer\Util\ProcessExecutor::runProcess`                   | `./composer/src/Composer/Util/ProcessExecutor.php`             |
| 16.0% | 627.0ms |     213 | `Composer\Util\ProcessExecutor::doExecute`                    | `./composer/src/Composer/Util/ProcessExecutor.php`             |
| 16.0% | 627.0ms |     213 | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`             |
| 10.6% | 414.0ms |     100 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  6.3% | 249.0ms |      39 | `Composer\Util\Silencer::call`                                | `./composer/src/Composer/Util/Silencer.php`                    |
|  3.4% | 134.0ms |      33 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  2.9% | 113.0ms |     113 | `Composer\Autoload\AutoloadGenerator::getPathCode`            | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  2.6% | 103.0ms |      53 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

|     % |  Time | Samples | Caller                                                | Location                                            |
| ----: | ----: | ------: | ----------------------------------------------------- | --------------------------------------------------- |
| 86.7% | 2.88s |   2,882 | `Symfony\Component\Console\Application::doRunCommand` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Caller                              | Location                                          |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 99.8% | 3.26s |   2,882 | `Composer\Console\Application::run` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

|     % |  Time | Samples | Caller        | Location        |
| ----: | ----: | ------: | ------------- | --------------- |
| 92.2% | 3.01s |   2,628 | `(anonymous)` | `./profile.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|     % |  Time | Samples | Caller                                       | Location                                            |
| ----: | ----: | ------: | -------------------------------------------- | --------------------------------------------------- |
| 99.9% | 3.09s |   2,886 | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Caller                                         | Location                                            |
| ----: | ----: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| 99.4% | 2.86s |   2,866 | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Caller                                | Location                                          |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------- |
| 98.8% | 2.83s |   2,836 | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                          | Location                                                  |
| -----: | ----: | ------: | ----------------------------------------------- | --------------------------------------------------------- |
| 100.0% | 2.80s |   2,805 | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Samples | Caller                                           | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 2.80s |   2,805 | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |  Time | Samples | Caller                                      | Location                                                 |
| -----: | ----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.66s |   2,660 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |  Time | Samples | Caller                                                    | Location                                                                   |
| -----: | ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 2.42s |   2,428 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |  Time | Samples | Caller                                                  | Location                                                               |
| -----: | ----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 1.63s |   1,635 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Caller                                                   | Location                                                                |
| ----: | ------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 99.9% | 994.0ms |     994 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.1% |   1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                        | Location                                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 96.8% | 896.0ms |     896 | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.2% |  20.0ms |      20 | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
|  1.1% |  10.0ms |      10 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                    | Location                                       |
| -----: | ------: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 100.0% | 792.0ms |     792 | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|     % |    Time | Samples | Caller                     | Location                              |
| ----: | ------: | ------: | -------------------------- | ------------------------------------- |
| 99.6% | 667.0ms |     253 | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

|     % |    Time | Samples | Caller                                      | Location                                          |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 99.9% | 666.0ms |     252 | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

|      % |    Time | Samples | Caller                                      | Location                                          |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 666.0ms |     252 | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

|     % |    Time | Samples | Caller                                     | Location                                          |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------- |
| 98.0% | 653.0ms |     244 | `Composer\Command\BaseCommand::initialize` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

|     % |    Time | Samples | Caller                                           | Location                                                |
| ----: | ------: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 79.9% | 522.0ms |     214 | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|      % |    Time | Samples | Caller                             | Location                              |
| -----: | ------: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 633.0ms |     219 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Caller                                            | Location                                                       |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 628.0ms |     214 | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Samples | Caller                                     | Location                                           |
| -----: | ------: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 627.0ms |     213 | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Samples | Caller                                   | Location                                           |
| -----: | ------: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 627.0ms |     213 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Caller                                                        | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 43.5% | 273.0ms |      65 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 21.4% | 134.0ms |      33 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 16.4% | 103.0ms |      53 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.9% |  56.0ms |      30 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.8% |  55.0ms |      31 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Samples | Caller                                      | Location                                           |
| -----: | ------: | ------: | ------------------------------------------- | -------------------------------------------------- |
| 100.0% | 624.0ms |     210 | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Samples | Caller                                   | Location                                        |
| -----: | ------: | ------: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% | 580.0ms |     166 | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Caller                                            | Location                                        |
| ----: | ------: | ------: | ------------------------------------------------- | ----------------------------------------------- |
| 99.5% | 576.0ms |     163 | `Symfony\Component\Process\Process::wait`         | `./composer/vendor/symfony/process/Process.php` |
|  0.5% |   3.0ms |       3 | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Samples | Caller                                         | Location                                        |
| -----: | ------: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 577.0ms |     164 | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                  | Location                                       |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------------------------- |
| 96.4% | 511.0ms |     511 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  3.6% |  19.0ms |      19 | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Caller                                                  | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 414.0ms |     100 | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                      | Location                                       |
| -----: | ------: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 287.0ms |     287 | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Samples | Caller                                                | Location                                          |
| ----: | ------: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 97.6% | 243.0ms |      33 | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  1.6% |   4.0ms |       4 | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |
|  0.8% |   2.0ms |       2 | `Composer\Console\Application::__construct`           | `./composer/src/Composer/Console/Application.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                                |
| -----: | ------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 197.0ms |     197 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Samples | Caller                                               | Location                                         |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Samples | Caller                                                        | Location                                         |
| -----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensionsUsingStty` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Samples | Caller                                               | Location                                         |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::initDimensions` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Caller                                                     | Location                                                     |
| -----: | ------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 134.0ms |      33 | `Composer\Package\Version\VersionGuesser::guessGitVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |    Time | Samples | Caller                                      | Location                                                 |
| -----: | ------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 113.0ms |     113 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Caller                                                  | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 103.0ms |      53 | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

|     % |    Time | Samples | Callee                                          | Location                                                  |
| ----: | ------: | ------: | ----------------------------------------------- | --------------------------------------------------------- |
| 84.3% |   2.80s |   2,805 | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |
| 15.7% | 522.0ms |     214 | `Composer\Command\BaseCommand::initialize`      | `./composer/src/Composer/Command/BaseCommand.php`         |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

|     % |    Time | Samples | Callee                                          | Location                                          |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| 94.7% |   3.09s |   2,886 | `Composer\Console\Application::doRun`           | `./composer/src/Composer/Console/Application.php` |
|  5.2% | 169.0ms |       1 | `Symfony\Component\Console\Terminal::getHeight` | `./composer/vendor/symfony/console/Terminal.php`  |
|  0.2% |   5.0ms |       1 | `Symfony\Component\Console\Terminal::getWidth`  | `./composer/vendor/symfony/console/Terminal.php`  |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Callee                                       | Location                                            |
| -----: | ----: | ------: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.26s |   2,882 | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|     % |    Time | Samples | Callee                                         | Location                                            |
| ----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| 91.5% |   2.83s |   2,836 | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |
|  7.8% | 243.0ms |      33 | `Composer\Util\Silencer::call`                 | `./composer/src/Composer/Util/Silencer.php`         |
|  0.5% |  17.0ms |      16 | `Symfony\Component\Console\Application::find`  | `./composer/vendor/symfony/console/Application.php` |
|  0.1% |   2.0ms |       2 | `Composer\Autoload\ClassLoader::loadClass`     | `./composer/vendor/composer/ClassLoader.php`        |

##### `(anonymous)` (`./profile.php`)

|     % |  Time | Samples | Callee                                      | Location                                          |
| ----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 99.7% | 3.01s |   2,628 | `Composer\Console\Application::run`         | `./composer/src/Composer/Console/Application.php` |
|  0.1% | 3.0ms |       3 | `Composer\Autoload\ClassLoader::loadClass`  | `./composer/vendor/composer/ClassLoader.php`      |
|  0.1% | 3.0ms |       3 | `Composer\Console\Application::__construct` | `./composer/src/Composer/Console/Application.php` |
|  0.1% | 2.0ms |       1 | `(anonymous)`                               | `./composer/src/bootstrap.php`                    |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Samples | Callee                                           | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 2.88s |   2,882 | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Callee                                                 | Location                                            |
| ----: | ----: | ------: | ------------------------------------------------------ | --------------------------------------------------- |
| 99.9% | 2.86s |   2,866 | `Symfony\Component\Console\Application::doRunCommand`  | `./composer/vendor/symfony/console/Application.php` |
| <0.1% | 1.0ms |       1 | `Symfony\Component\Console\Application::find`          | `./composer/vendor/symfony/console/Application.php` |
| <0.1% | 1.0ms |       1 | `Symfony\Component\Console\Application::getDefinition` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                                   |
| ----: | ------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 94.8% |   2.66s |   2,660 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  4.0% | 113.0ms |     113 | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.7% |  20.0ms |      20 | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.2% |   5.0ms |       5 | `Composer\Util\Filesystem::filePutContentsIfModified`     | `./composer/src/Composer/Util/Filesystem.php`                              |
| <0.1% |   1.0ms |       1 | `Composer\ClassMapGenerator\ClassMap::sort`               | `./composer/vendor/composer/class-map-generator/src/ClassMap.php`          |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Samples | Callee                                      | Location                                                 |
| -----: | ----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.80s |   2,805 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|     % |   Time | Samples | Callee                                                                          | Location                                                                       |
| ----: | -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 91.3% |  2.42s |   2,428 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  2.1% | 55.0ms |      55 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  1.7% | 45.0ms |      45 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  0.8% | 21.0ms |      21 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  0.5% | 14.0ms |      14 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`            | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|     % |    Time | Samples | Callee                                             | Location                                                                |
| ----: | ------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 67.3% |   1.63s |   1,635 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  5.0% | 121.0ms |     121 | `Composer\Pcre\Preg::matchAllStrictGroups`         | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|  1.7% |  42.0ms |      42 | `Composer\Pcre\Preg::matchAll`                     | `./composer/vendor/composer/pcre/src/Preg.php`                          |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                                   | Location                                                                |
| ----: | ------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 60.8% | 994.0ms |     994 | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| 12.0% | 197.0ms |     197 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.7% |  11.0ms |      11 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.3% |   5.0ms |       5 | `Composer\Pcre\Preg::isMatch`                            | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|  0.2% |   4.0ms |       4 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                    | Location                                       |
| ----: | ------: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 90.1% | 896.0ms |     896 | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                  | Location                                       |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------------------------- |
| 85.5% | 792.0ms |     792 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                      | Location                                       |
| ----: | ------: | ------: | ------------------------------------------- | ---------------------------------------------- |
| 64.5% | 511.0ms |     511 | `Composer\Pcre\Preg::match`                 | `./composer/vendor/composer/pcre/src/Preg.php` |
| 17.6% | 139.0ms |     139 | `Composer\Pcre\Preg::enforceNonNullMatches` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|     % |    Time | Samples | Callee                                            | Location                                                       |
| ----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| 94.5% | 633.0ms |     219 | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  2.4% |  16.0ms |      16 | `Composer\Json\JsonFile::validateSchema`          | `./composer/src/Composer/Json/JsonFile.php`                    |
|  1.0% |   7.0ms |       7 | `Composer\Factory::createHttpDownloader`          | `./composer/src/Composer/Factory.php`                          |
|  0.4% |   3.0ms |       3 | `Composer\Autoload\ClassLoader::loadClass`        | `./composer/vendor/composer/ClassLoader.php`                   |
|  0.3% |   2.0ms |       2 | `Composer\Factory::createConfig`                  | `./composer/src/Composer/Factory.php`                          |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Samples | Callee                             | Location                              |
| -----: | ------: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 667.0ms |     253 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

|      % |    Time | Samples | Callee                     | Location                              |
| -----: | ------: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 666.0ms |     252 | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                          |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 666.0ms |     252 | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                          |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 653.0ms |     244 | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|     % |    Time | Samples | Callee                                                  | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 99.2% | 628.0ms |     214 | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  0.5% |   3.0ms |       3 | `Composer\Package\Loader\ArrayLoader::load`             | `./composer/src/Composer/Package/Loader/ArrayLoader.php`     |
|  0.2% |   1.0ms |       1 | `Composer\Autoload\ClassLoader::loadClass`              | `./composer/vendor/composer/ClassLoader.php`                 |
|  0.2% |   1.0ms |       1 | `Composer\Repository\RepositoryFactory::defaultRepos`   | `./composer/src/Composer/Repository/RepositoryFactory.php`   |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 65.9% | 414.0ms |     100 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 16.4% | 103.0ms |      53 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.9% |  56.0ms |      30 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.8% |  55.0ms |      31 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                           | Location                                                      |
| ----: | ------: | ------: | ------------------------------------------------ | ------------------------------------------------------------- |
| 99.5% | 624.0ms |     210 | `Symfony\Component\Process\Process::run`         | `./composer/vendor/symfony/process/Process.php`               |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::__construct` | `./composer/vendor/symfony/process/Process.php`               |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::getOutput`   | `./composer/vendor/symfony/process/Process.php`               |
|  0.2% |   1.0ms |       1 | `Seld\Signal\SignalHandler::create`              | `./composer/vendor/seld/signal-handler/src/SignalHandler.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Samples | Callee                                      | Location                                           |
| -----: | ------: | ------: | ------------------------------------------- | -------------------------------------------------- |
| 100.0% | 627.0ms |     213 | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Samples | Callee                                     | Location                                           |
| -----: | ------: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 627.0ms |     213 | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                     | Location                                        |
| ----: | ------: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 92.9% | 580.0ms |     166 | `Symfony\Component\Process\Process::wait`  | `./composer/vendor/symfony/process/Process.php` |
|  7.1% |  44.0ms |      44 | `Symfony\Component\Process\Process::start` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                            | Location                                        |
| ----: | ------: | ------: | ------------------------------------------------- | ----------------------------------------------- |
| 99.3% | 576.0ms |     163 | `Symfony\Component\Process\Process::readPipes`    | `./composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% | 577.0ms |     164 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php` |
|  0.3% |   2.0ms |       2 | `(anonymous)`                                             | `./composer/vendor/symfony/process/Process.php:1324`    |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|    % |  Time | Samples | Callee                                                 | Location                                                    |
| ---: | ----: | ------: | ------------------------------------------------------ | ----------------------------------------------------------- |
| 0.2% | 1.0ms |       1 | `Symfony\Component\Process\Pipes\AbstractPipes::write` | `./composer/vendor/symfony/process/Pipes/AbstractPipes.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                   | Location                                       |
| ----: | ------: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 54.2% | 287.0ms |     287 | `Composer\Pcre\Preg::pregMatch`          | `./composer/vendor/composer/pcre/src/Preg.php` |
| 17.9% |  95.0ms |      95 | `Composer\Pcre\Preg::checkOffsetCapture` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 65.9% | 273.0ms |      65 | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`           |
| 32.4% | 134.0ms |      33 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  1.4% |   6.0ms |       1 | `Composer\Util\Git::getNoShowSignatureFlag`                   | `./composer/src/Composer/Util/Git.php`                       |
|  0.2% |   1.0ms |       1 | `Composer\Autoload\ClassLoader::loadClass`                    | `./composer/vendor/composer/ClassLoader.php`                 |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|    % |   Time | Samples | Callee                             | Location                                              |
| ---: | -----: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 4.0% | 10.0ms |      10 | `(anonymous)`                      | `./composer/src/Composer/Console/Application.php:353` |
| 2.4% |  6.0ms |       6 | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php`           |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|    % |  Time | Samples | Callee                                            | Location                                                                |
| ---: | ----: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------- |
| 0.5% | 1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileCleaner::peek` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Samples | Callee                                                | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::readFromProcess` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensionsUsingStty` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Samples | Callee                                               | Location                                         |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms |       2 | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                           |
| -----: | ------: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 134.0ms |      33 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |   Time | Samples | Callee                                       | Location                                      |
| ----: | -----: | ------: | -------------------------------------------- | --------------------------------------------- |
| 70.8% | 80.0ms |      80 | `Composer\Util\Filesystem::findShortestPath` | `./composer/src/Composer/Util/Filesystem.php` |
| 22.1% | 25.0ms |      25 | `Composer\Util\Filesystem::normalizePath`    | `./composer/src/Composer/Util/Filesystem.php` |
|  1.8% |  2.0ms |       2 | `Composer\Util\Filesystem::isAbsolutePath`   | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                           |
| -----: | ------: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 103.0ms |      53 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame. `truncated` stands for missing outermost callers.

Common call stack: `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← `(anonymous)` (`./profile.php`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 16.1% | 630.0ms |     630 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10.8% | 423.0ms |     423 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  6.5% | 256.0ms |      48 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                        |
|  5.9% | 232.0ms |      22 | `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`) ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.1% | 201.0ms |     201 | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← truncated |
|  5.0% | 196.0ms |     196 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                              |
|  4.3% | 169.0ms |       1 | `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`) ← `Symfony\Component\Console\Terminal::getSttyColumns` ← `Symfony\Component\Console\Terminal::initDimensionsUsingStty` ← `Symfony\Component\Console\Terminal::initDimensions` ← `Symfony\Component\Console\Terminal::getHeight`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.5% | 138.0ms |     138 | `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                              |
|  3.4% | 135.0ms |     135 | `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                              |
|  3.4% | 134.0ms |     134 | `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                            |
|  3.3% | 131.0ms |     131 | `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                      |
|  3.2% | 125.0ms |      24 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← truncated                                                                                                                                                                                                                     |
|  2.9% | 115.0ms |     115 | `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |  99.0ms |      99 | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.4% |  93.0ms |      43 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                     |
|  2.3% |  91.0ms |      91 | `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                   |
|  1.7% |  65.0ms |      65 | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                            |
|  1.6% |  64.0ms |      64 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.3% |  51.0ms |      51 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← truncated                                                                                                                   |
|  1.3% |  50.0ms |      24 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessHgVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                         |

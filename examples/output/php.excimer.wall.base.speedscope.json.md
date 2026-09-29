# Sampling profile

Took 4.16s over 3,261 samples (1.3ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| Third-party | 90.6% |   3.77s |   3,112 |
| Ours        |  9.4% | 393.0ms |     149 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 15.8% | 659.0ms |     655 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 15.5% | 645.0ms |     166 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.4% | 435.0ms |     435 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  6.6% | 276.0ms |     276 | `Composer\Pcre\Preg::pregMatch`                                             | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  6.5% | 269.0ms |      26 | `Composer\Util\Silencer::call`                                              | `composer/src/Composer/Util/Silencer.php`                                |
|  4.9% | 202.0ms |     202 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.5% | 187.0ms |     180 | `Composer\Pcre\Preg::matchAll`                                              | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.0% | 167.0ms |       2 | `Symfony\Component\Console\Terminal::readFromProcess`                       | `composer/vendor/symfony/console/Terminal.php`                           |
|  3.6% | 149.0ms |     149 | `Composer\Pcre\Preg::match`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 143.0ms |     143 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 142.0ms |     142 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 141.0ms |     141 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.6% | 107.0ms |     107 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.0% |  84.0ms |      80 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  1.8% |  77.0ms |      77 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.3% |  55.0ms |      55 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.3% |  54.0ms |      54 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.9% |  39.0ms |      39 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                            |
|  0.8% |  33.0ms |      33 | `Composer\Util\Filesystem::normalizePath`                                   | `composer/src/Composer/Util/Filesystem.php`                              |
|  0.5% |  20.0ms |      20 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 15.8% | 659.0ms |     655 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 15.5% | 645.0ms |     166 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.4% | 435.0ms |     435 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  6.6% | 276.0ms |     276 | `Composer\Pcre\Preg::pregMatch`                                             | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.9% | 202.0ms |     202 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.5% | 187.0ms |     180 | `Composer\Pcre\Preg::matchAll`                                              | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.0% | 167.0ms |       2 | `Symfony\Component\Console\Terminal::readFromProcess`                       | `composer/vendor/symfony/console/Terminal.php`                           |
|  3.6% | 149.0ms |     149 | `Composer\Pcre\Preg::match`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 143.0ms |     143 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 142.0ms |     142 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 141.0ms |     141 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.6% | 107.0ms |     107 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.0% |  84.0ms |      80 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  1.8% |  77.0ms |      77 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.3% |  55.0ms |      55 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.3% |  54.0ms |      54 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.9% |  39.0ms |      39 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                            |
|  0.5% |  20.0ms |      20 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  0.4% |  17.0ms |      17 | `Composer\Pcre\Preg::replaceCallback`                                       | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  0.4% |  16.0ms |      16 | `Composer\Pcre\Preg::isMatch`                                               | `composer/vendor/composer/pcre/src/Preg.php`                             |

##### Ours

|     % |    Time | Samples | Function                                             | Location                                                     |
| ----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------ |
|  6.5% | 269.0ms |      26 | `Composer\Util\Silencer::call`                       | `composer/src/Composer/Util/Silencer.php`                    |
|  0.8% |  33.0ms |      33 | `Composer\Util\Filesystem::normalizePath`            | `composer/src/Composer/Util/Filesystem.php`                  |
|  0.4% |  16.0ms |      16 | `Composer\Util\Filesystem::findShortestPath`         | `composer/src/Composer/Util/Filesystem.php`                  |
|  0.3% |  14.0ms |      13 | `(anonymous)`                                        | `composer/src/Composer/Console/Application.php:353`          |
|  0.2% |  10.0ms |      10 | `Composer\Autoload\AutoloadGenerator::getPathCode`   | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  0.1% |   6.0ms |       6 | `Composer\Autoload\AutoloadGenerator::dump`          | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  0.1% |   4.0ms |       4 | `Composer\Util\Filesystem::filesAreEqual`            | `composer/src/Composer/Util/Filesystem.php`                  |
|  0.1% |   3.0ms |       3 | `Composer\Util\Http\CurlDownloader::__construct`     | `composer/src/Composer/Util/Http/CurlDownloader.php`         |
|  0.1% |   3.0ms |       3 | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
| <0.1% |   2.0ms |       2 | `Composer\Json\JsonFile::validateSchema`             | `composer/src/Composer/Json/JsonFile.php`                    |
| <0.1% |   2.0ms |       2 | `Composer\Util\Filesystem::isReadable`               | `composer/src/Composer/Util/Filesystem.php`                  |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/IO/BaseIO.php`                        |
| <0.1% |   1.0ms |       1 | `Composer\Console\Application::doRun`                | `composer/src/Composer/Console/Application.php`              |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Command/InitCommand.php`              |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Command/SuggestsCommand.php`          |
| <0.1% |   1.0ms |       1 | `Composer\IO\ConsoleIO::isVerbose`                   | `composer/src/Composer/IO/ConsoleIO.php`                     |
| <0.1% |   1.0ms |       1 | `Composer\Util\ErrorHandler::handle`                 | `composer/src/Composer/Util/ErrorHandler.php`                |
| <0.1% |   1.0ms |       1 | `Composer\Util\Silencer::suppress`                   | `composer/src/Composer/Util/Silencer.php`                    |
| <0.1% |   1.0ms |       1 | `Composer\Factory::createConfig`                     | `composer/src/Composer/Factory.php`                          |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |    Time | Samples | Caller                                                    | Location                                                                 |
| -----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 659.0ms |     655 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Samples | Caller                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 645.0ms |     166 | `Symfony\Component\Process\Process::readPipes` | `composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                                  | Location                                                             |
| -----: | ------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% | 435.0ms |     435 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                      | Location                                     |
| -----: | ------: | ------: | --------------------------- | -------------------------------------------- |
| 100.0% | 276.0ms |     276 | `Composer\Pcre\Preg::match` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Samples | Caller                                                | Location                                        |
| ----: | ------: | ------: | ----------------------------------------------------- | ----------------------------------------------- |
| 97.8% | 263.0ms |      20 | `Composer\Console\Application::doRun`                 | `composer/src/Composer/Console/Application.php` |
|  1.1% |   3.0ms |       3 | `Composer\Util\Filesystem::filePutContentsIfModified` | `composer/src/Composer/Util/Filesystem.php`     |
|  0.7% |   2.0ms |       2 | `Composer\Factory::getHomeDir`                        | `composer/src/Composer/Factory.php`             |
|  0.4% |   1.0ms |       1 | `Composer\Console\Application::__construct`           | `composer/src/Composer/Console/Application.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                              |
| -----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 202.0ms |     202 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                  | Location                                                             |
| ----: | ------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------- |
| 81.8% | 153.0ms |     146 | `Composer\Pcre\Preg::matchAllStrictGroups`              | `composer/vendor/composer/pcre/src/Preg.php`                         |
| 18.2% |  34.0ms |      34 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Samples | Caller                                               | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------------- | ---------------------------------------------- |
| 100.0% | 167.0ms |       2 | `Symfony\Component\Console\Terminal::getSttyColumns` | `composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 97.3% | 145.0ms |     145 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |
|  2.7% |   4.0ms |       4 | `Composer\Pcre\Preg::isMatch`           | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                    | Location                                     |
| -----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 143.0ms |     143 | `Composer\Pcre\Preg::isMatchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                        | Location                                                                 |
| ----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 97.9% | 139.0ms |     139 | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  1.4% |   2.0ms |       2 | `Composer\Util\Filesystem::normalizePath`                     | `composer/src/Composer/Util/Filesystem.php`                              |
|  0.7% |   1.0ms |       1 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                  | Location                                     |
| -----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% | 141.0ms |     141 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                              |
| -----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 107.0ms |     107 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Samples | Caller                         | Location                                     |
| ----: | -----: | ------: | ------------------------------ | -------------------------------------------- |
| 91.7% | 77.0ms |      77 | `Composer\Pcre\Preg::match`    | `composer/vendor/composer/pcre/src/Preg.php` |
|  8.3% |  7.0ms |       3 | `Composer\Pcre\Preg::matchAll` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                      | Location                                               |
| -----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 77.0ms |      77 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Samples | Caller                                                                          | Location                                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 55.0ms |      55 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|     % |   Time | Samples | Caller                                                                      | Location                                                                 |
| ----: | -----: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 94.4% | 51.0ms |      51 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  5.6% |  3.0ms |       3 | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `composer/vendor/symfony/finder/Finder.php`                              |

##### `Symfony\Component\Process\Process::start` (`composer/vendor/symfony/process/Process.php`)

|      % |   Time | Samples | Caller                                   | Location                                      |
| -----: | -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 39.0ms |      39 | `Symfony\Component\Process\Process::run` | `composer/vendor/symfony/process/Process.php` |

##### `Composer\Util\Filesystem::normalizePath` (`composer/src/Composer/Util/Filesystem.php`)

|     % |   Time | Samples | Caller                                             | Location                                               |
| ----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 54.5% | 18.0ms |      18 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 42.4% | 14.0ms |      14 | `Composer\Util\Filesystem::findShortestPath`       | `composer/src/Composer/Util/Filesystem.php`            |
|  3.0% |  1.0ms |       1 | `Composer\Util\Filesystem::findShortestPathCode`   | `composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                                    | Location                                                                 |
| -----: | -----: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 20.0ms |      20 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::replaceCallback` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Samples | Caller                                                        | Location                                                                 |
| ----: | -----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 76.5% | 13.0ms |      13 | `Composer\Util\Filesystem::normalizePath`                     | `composer/src/Composer/Util/Filesystem.php`                              |
| 23.5% |  4.0ms |       4 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::isMatch` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Samples | Caller                                             | Location                                                              |
| ----: | -----: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 87.5% | 14.0ms |      14 | `Composer\Util\Filesystem::findShortestPath`       | `composer/src/Composer/Util/Filesystem.php`                           |
| 12.5% |  2.0ms |       2 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Util\Filesystem::findShortestPath` (`composer/src/Composer/Util/Filesystem.php`)

|      % |   Time | Samples | Caller                                             | Location                                               |
| -----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 16.0ms |      16 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `(anonymous)` (`composer/src/Composer/Console/Application.php:353`)

|      % |   Time | Samples | Caller                         | Location                                  |
| -----: | -----: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 14.0ms |      13 | `Composer\Util\Silencer::call` | `composer/src/Composer/Util/Silencer.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |   Time | Samples | Caller                                      | Location                                               |
| -----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 10.0ms |      10 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                          | Location                                                |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 6.0ms |       6 | `Composer\Command\DumpAutoloadCommand::execute` | `composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Util\Filesystem::filesAreEqual` (`composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Samples | Caller                               | Location                                    |
| -----: | ----: | ------: | ------------------------------------ | ------------------------------------------- |
| 100.0% | 4.0ms |       4 | `Composer\Util\Filesystem::safeCopy` | `composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Util\Http\CurlDownloader::__construct` (`composer/src/Composer/Util/Http/CurlDownloader.php`)

|      % |  Time | Samples | Caller                                      | Location                                        |
| -----: | ----: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 3.0ms |       3 | `Composer\Util\HttpDownloader::__construct` | `composer/src/Composer/Util/HttpDownloader.php` |

##### `Composer\Autoload\AutoloadGenerator::getStaticFile` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                      | Location                                               |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 3.0ms |       3 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Json\JsonFile::validateSchema` (`composer/src/Composer/Json/JsonFile.php`)

|      % |  Time | Samples | Caller                             | Location                            |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Factory::createComposer` | `composer/src/Composer/Factory.php` |

##### `Composer\Util\Filesystem::isReadable` (`composer/src/Composer/Util/Filesystem.php`)

|     % |  Time | Samples | Caller                                      | Location                                               |
| ----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 50.0% | 1.0ms |       1 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 50.0% | 1.0ms |       1 | `Composer\Json\JsonFile::read`              | `composer/src/Composer/Json/JsonFile.php`              |

##### `(anonymous)` (`composer/src/Composer/IO/BaseIO.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Caller                                       | Location                                          |
| -----: | ----: | ------: | -------------------------------------------- | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `Symfony\Component\Console\Application::run` | `composer/vendor/symfony/console/Application.php` |

##### `(anonymous)` (`composer/src/Composer/Command/InitCommand.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Command/SuggestsCommand.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\IO\ConsoleIO::isVerbose` (`composer/src/Composer/IO/ConsoleIO.php`)

|      % |  Time | Samples | Caller                               | Location                                      |
| -----: | ----: | ------: | ------------------------------------ | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Util\ErrorHandler::handle` | `composer/src/Composer/Util/ErrorHandler.php` |

##### `Composer\Util\ErrorHandler::handle` (`composer/src/Composer/Util/ErrorHandler.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\Silencer::suppress` (`composer/src/Composer/Util/Silencer.php`)

|      % |  Time | Samples | Caller                         | Location                                  |
| -----: | ----: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Util\Silencer::call` | `composer/src/Composer/Util/Silencer.php` |

##### `Composer\Factory::createConfig` (`composer/src/Composer/Factory.php`)

|      % |  Time | Samples | Caller                             | Location                            |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Factory::createComposer` | `composer/src/Composer/Factory.php` |

##### `(anonymous)` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                                  | Location                                                                 |
| -----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% |   4.16s |   3,261 | `(anonymous)`                                             | `profile.php`                                                            |
|  99.8% |   4.15s |   3,254 | `Symfony\Component\Console\Application::run`              | `composer/vendor/symfony/console/Application.php`                        |
|  99.8% |   4.15s |   3,254 | `Composer\Console\Application::run`                       | `composer/src/Composer/Console/Application.php`                          |
|  95.8% |   3.99s |   3,252 | `Composer\Console\Application::doRun`                     | `composer/src/Composer/Console/Application.php`                          |
|  88.7% |   3.69s |   3,200 | `Symfony\Component\Console\Application::doRun`            | `composer/vendor/symfony/console/Application.php`                        |
|  88.7% |   3.69s |   3,198 | `Symfony\Component\Console\Command\Command::run`          | `composer/vendor/symfony/console/Command/Command.php`                    |
|  88.7% |   3.69s |   3,198 | `Symfony\Component\Console\Application::doRunCommand`     | `composer/vendor/symfony/console/Application.php`                        |
|  70.7% |   2.94s |   2,929 | `Composer\Autoload\AutoloadGenerator::dump`               | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  70.7% |   2.94s |   2,929 | `Composer\Command\DumpAutoloadCommand::execute`           | `composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
|  66.9% |   2.78s |   2,769 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  60.5% |   2.52s |   2,505 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  39.9% |   1.66s |   1,660 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  23.8% | 989.0ms |     989 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  21.9% | 911.0ms |     911 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  18.5% | 769.0ms |     769 | `Composer\Pcre\Preg::matchStrictGroups`                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  18.0% | 748.0ms |     269 | `Composer\Factory::createComposer`                        | `composer/src/Composer/Factory.php`                                      |
|  18.0% | 748.0ms |     269 | `Composer\Factory::create`                                | `composer/src/Composer/Factory.php`                                      |
|  18.0% | 748.0ms |     269 | `Composer\Console\Application::getComposer`               | `composer/src/Composer/Console/Application.php`                          |
|  18.0% | 748.0ms |     269 | `Composer\Command\BaseCommand::tryComposer`               | `composer/src/Composer/Command/BaseCommand.php`                          |
|  18.0% | 748.0ms |     269 | `Composer\Command\BaseCommand::initialize`                | `composer/src/Composer/Command/BaseCommand.php`                          |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                                                  | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 99.8% |   4.15s |   3,254 | `Symfony\Component\Console\Application::run`              | `composer/vendor/symfony/console/Application.php`                        |
| 88.7% |   3.69s |   3,200 | `Symfony\Component\Console\Application::doRun`            | `composer/vendor/symfony/console/Application.php`                        |
| 88.7% |   3.69s |   3,198 | `Symfony\Component\Console\Command\Command::run`          | `composer/vendor/symfony/console/Command/Command.php`                    |
| 88.7% |   3.69s |   3,198 | `Symfony\Component\Console\Application::doRunCommand`     | `composer/vendor/symfony/console/Application.php`                        |
| 66.9% |   2.78s |   2,769 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 60.5% |   2.52s |   2,505 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 39.9% |   1.66s |   1,660 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 23.8% | 989.0ms |     989 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 21.9% | 911.0ms |     911 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
| 18.5% | 769.0ms |     769 | `Composer\Pcre\Preg::matchStrictGroups`                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
| 16.7% | 695.0ms |     216 | `Symfony\Component\Process\Process::run`                  | `composer/vendor/symfony/process/Process.php`                            |
| 15.6% | 650.0ms |     171 | `Symfony\Component\Process\Process::wait`                 | `composer/vendor/symfony/process/Process.php`                            |
| 15.5% | 646.0ms |     167 | `Symfony\Component\Process\Process::readPipes`            | `composer/vendor/symfony/process/Process.php`                            |
| 15.5% | 645.0ms |     166 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 12.1% | 502.0ms |     502 | `Composer\Pcre\Preg::match`                               | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  6.6% | 276.0ms |     276 | `Composer\Pcre\Preg::pregMatch`                           | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.9% | 203.0ms |     203 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`   | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.7% | 197.0ms |     186 | `Composer\Pcre\Preg::matchAll`                            | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.0% | 167.0ms |       2 | `Symfony\Component\Console\Terminal::readFromProcess`     | `composer/vendor/symfony/console/Terminal.php`                           |
|  4.0% | 167.0ms |       2 | `Symfony\Component\Console\Terminal::getSttyColumns`      | `composer/vendor/symfony/console/Terminal.php`                           |

##### Ours

|      % |    Time | Samples | Function                                                      | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |   4.16s |   3,261 | `(anonymous)`                                                 | `profile.php`                                                |
|  99.8% |   4.15s |   3,254 | `Composer\Console\Application::run`                           | `composer/src/Composer/Console/Application.php`              |
|  95.8% |   3.99s |   3,252 | `Composer\Console\Application::doRun`                         | `composer/src/Composer/Console/Application.php`              |
|  70.7% |   2.94s |   2,929 | `Composer\Autoload\AutoloadGenerator::dump`                   | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  70.7% |   2.94s |   2,929 | `Composer\Command\DumpAutoloadCommand::execute`               | `composer/src/Composer/Command/DumpAutoloadCommand.php`      |
|  18.0% | 748.0ms |     269 | `Composer\Factory::createComposer`                            | `composer/src/Composer/Factory.php`                          |
|  18.0% | 748.0ms |     269 | `Composer\Factory::create`                                    | `composer/src/Composer/Factory.php`                          |
|  18.0% | 748.0ms |     269 | `Composer\Console\Application::getComposer`                   | `composer/src/Composer/Console/Application.php`              |
|  18.0% | 748.0ms |     269 | `Composer\Command\BaseCommand::tryComposer`                   | `composer/src/Composer/Command/BaseCommand.php`              |
|  18.0% | 748.0ms |     269 | `Composer\Command\BaseCommand::initialize`                    | `composer/src/Composer/Command/BaseCommand.php`              |
|  17.1% | 710.0ms |     231 | `Composer\Package\Loader\RootPackageLoader::load`             | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  16.9% | 705.0ms |     226 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  16.9% | 703.0ms |     224 | `Composer\Util\ProcessExecutor::doExecute`                    | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  16.9% | 703.0ms |     224 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  16.8% | 701.0ms |     222 | `Composer\Util\ProcessExecutor::runProcess`                   | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  11.0% | 458.0ms |     110 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   6.9% | 287.0ms |      43 | `Composer\Util\Silencer::call`                                | `composer/src/Composer/Util/Silencer.php`                    |
|   3.5% | 147.0ms |      33 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   3.0% | 125.0ms |      63 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   2.7% | 112.0ms |     112 | `Composer\Autoload\AutoloadGenerator::getPathCode`            | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`profile.php`)

|     % |  Time | Samples | Callee                                                 | Location                                            |
| ----: | ----: | ------: | ------------------------------------------------------ | --------------------------------------------------- |
| 99.8% | 4.15s |   3,254 | `Composer\Console\Application::run`                    | `composer/src/Composer/Console/Application.php`     |
|  0.1% | 3.0ms |       3 | `Composer\Console\Application::__construct`            | `composer/src/Composer/Console/Application.php`     |
| <0.1% | 2.0ms |       2 | `Composer\Autoload\ClassLoader::loadClass`             | `composer/vendor/composer/ClassLoader.php`          |
| <0.1% | 1.0ms |       1 | `(anonymous)`                                          | `composer/src/bootstrap.php`                        |
| <0.1% | 1.0ms |       1 | `Symfony\Component\Console\Output\Output::__construct` | `composer/vendor/symfony/console/Output/Output.php` |

##### `Symfony\Component\Console\Application::run` (`composer/vendor/symfony/console/Application.php`)

|     % |    Time | Samples | Callee                                          | Location                                        |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------------------------------------- |
| 96.0% |   3.99s |   3,252 | `Composer\Console\Application::doRun`           | `composer/src/Composer/Console/Application.php` |
|  3.9% | 161.0ms |       1 | `Symfony\Component\Console\Terminal::getHeight` | `composer/vendor/symfony/console/Terminal.php`  |
|  0.1% |   6.0ms |       1 | `Symfony\Component\Console\Terminal::getWidth`  | `composer/vendor/symfony/console/Terminal.php`  |

##### `Composer\Console\Application::run` (`composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Callee                                       | Location                                          |
| -----: | ----: | ------: | -------------------------------------------- | ------------------------------------------------- |
| 100.0% | 4.15s |   3,254 | `Symfony\Component\Console\Application::run` | `composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)

|     % |    Time | Samples | Callee                                         | Location                                          |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 92.6% |   3.69s |   3,200 | `Symfony\Component\Console\Application::doRun` | `composer/vendor/symfony/console/Application.php` |
|  7.0% | 279.0ms |      35 | `Composer\Util\Silencer::call`                 | `composer/src/Composer/Util/Silencer.php`         |
|  0.3% |  13.0ms |      13 | `Symfony\Component\Console\Application::find`  | `composer/vendor/symfony/console/Application.php` |
|  0.1% |   3.0ms |       3 | `Composer\Autoload\ClassLoader::loadClass`     | `composer/vendor/composer/ClassLoader.php`        |

##### `Symfony\Component\Console\Application::doRun` (`composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Callee                                                 | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------------ | ------------------------------------------------- |
| 99.9% | 3.69s |   3,198 | `Symfony\Component\Console\Application::doRunCommand`  | `composer/vendor/symfony/console/Application.php` |
|  0.1% | 2.0ms |       2 | `Symfony\Component\Console\Application::getDefinition` | `composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`)

|     % |    Time | Samples | Callee                                          | Location                                                |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
| 79.7% |   2.94s |   2,929 | `Composer\Command\DumpAutoloadCommand::execute` | `composer/src/Composer/Command/DumpAutoloadCommand.php` |
| 20.3% | 748.0ms |     269 | `Composer\Command\BaseCommand::initialize`      | `composer/src/Composer/Command/BaseCommand.php`         |

##### `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`)

|      % |  Time | Samples | Callee                                           | Location                                              |
| -----: | ----: | ------: | ------------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 3.69s |   3,198 | `Symfony\Component\Console\Command\Command::run` | `composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 94.6% |   2.78s |   2,769 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  3.8% | 112.0ms |     112 | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.7% |  22.0ms |      22 | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.2% |   5.0ms |       5 | `Composer\Util\Filesystem::safeCopy`                      | `composer/src/Composer/Util/Filesystem.php`                              |
|  0.1% |   4.0ms |       4 | `Composer\Util\Filesystem::filePutContentsIfModified`     | `composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Samples | Callee                                      | Location                                               |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 2.94s |   2,929 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|     % |   Time | Samples | Callee                                                                          | Location                                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 90.5% |  2.52s |   2,505 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  2.0% | 55.0ms |      55 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  2.0% | 55.0ms |      55 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  1.3% | 36.0ms |      36 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  0.4% | 11.0ms |      11 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`            | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                              |
| ----: | ------: | ------: | --------------------------------------------------------- | --------------------------------------------------------------------- |
| 65.9% |   1.66s |   1,660 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  6.3% | 158.0ms |     151 | `Composer\Pcre\Preg::matchAllStrictGroups`                | `composer/vendor/composer/pcre/src/Preg.php`                          |
|  1.7% |  42.0ms |      38 | `Composer\Pcre\Preg::matchAll`                            | `composer/vendor/composer/pcre/src/Preg.php`                          |
| <0.1% |   1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileParser::getExtraTypes` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`  |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                                   | Location                                                              |
| ----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------- |
| 59.6% | 989.0ms |     989 | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| 12.2% | 203.0ms |     203 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  1.1% |  19.0ms |      19 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.5% |   9.0ms |       9 | `Composer\Pcre\Preg::isMatch`                            | `composer/vendor/composer/pcre/src/Preg.php`                          |
|  0.3% |   5.0ms |       5 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 89.2% | 882.0ms |     882 | `Composer\Pcre\Preg::isMatchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 84.4% | 769.0ms |     769 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                      | Location                                     |
| ----: | ------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 63.1% | 485.0ms |     485 | `Composer\Pcre\Preg::match`                 | `composer/vendor/composer/pcre/src/Preg.php` |
| 18.3% | 141.0ms |     141 | `Composer\Pcre\Preg::enforceNonNullMatches` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`)

|     % |    Time | Samples | Callee                                            | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------ |
| 94.9% | 710.0ms |     231 | `Composer\Package\Loader\RootPackageLoader::load` | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  2.4% |  18.0ms |      18 | `Composer\Json\JsonFile::validateSchema`          | `composer/src/Composer/Json/JsonFile.php`                    |
|  0.7% |   5.0ms |       5 | `Composer\Factory::createHttpDownloader`          | `composer/src/Composer/Factory.php`                          |
|  0.4% |   3.0ms |       3 | `Composer\Factory::createConfig`                  | `composer/src/Composer/Factory.php`                          |
|  0.3% |   2.0ms |       2 | `Composer\Autoload\ClassLoader::loadClass`        | `composer/vendor/composer/ClassLoader.php`                   |

##### `Composer\Factory::create` (`composer/src/Composer/Factory.php`)

|      % |    Time | Samples | Callee                             | Location                            |
| -----: | ------: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% | 748.0ms |     269 | `Composer\Factory::createComposer` | `composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`)

|      % |    Time | Samples | Callee                     | Location                            |
| -----: | ------: | ------: | -------------------------- | ----------------------------------- |
| 100.0% | 748.0ms |     269 | `Composer\Factory::create` | `composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                        |
| -----: | ------: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 748.0ms |     269 | `Composer\Console\Application::getComposer` | `composer/src/Composer/Console/Application.php` |

##### `Composer\Command\BaseCommand::initialize` (`composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                        |
| -----: | ------: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 748.0ms |     269 | `Composer\Command\BaseCommand::tryComposer` | `composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|     % |    Time | Samples | Callee                                                                 | Location                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.3% | 705.0ms |     226 | `Composer\Package\Version\VersionGuesser::guessVersion`                | `composer/src/Composer/Package/Version/VersionGuesser.php`       |
|  0.3% |   2.0ms |       2 | `Composer\Package\Loader\ValidatingArrayLoader::hasPackageNamingError` | `composer/src/Composer/Package/Loader/ValidatingArrayLoader.php` |
|  0.3% |   2.0ms |       2 | `Composer\Repository\RepositoryFactory::defaultRepos`                  | `composer/src/Composer/Repository/RepositoryFactory.php`         |
|  0.1% |   1.0ms |       1 | `Composer\Package\Loader\ArrayLoader::load`                            | `composer/src/Composer/Package/Loader/ArrayLoader.php`           |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
| 65.0% | 458.0ms |     110 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php` |
| 17.7% | 125.0ms |      63 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.9% |  63.0ms |      29 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.4% |  59.0ms |      24 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                            | Location                                         |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------ |
| 99.7% | 701.0ms |     222 | `Composer\Util\ProcessExecutor::runProcess`       | `composer/src/Composer/Util/ProcessExecutor.php` |
|  0.1% |   1.0ms |       1 | `Composer\Util\ProcessExecutor::outputCommandRun` | `composer/src/Composer/Util/ProcessExecutor.php` |
|  0.1% |   1.0ms |       1 | `Symfony\Component\Process\Process::__destruct`   | `composer/vendor/symfony/process/Process.php`    |

##### `Composer\Util\ProcessExecutor::execute` (`composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Samples | Callee                                     | Location                                         |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| 100.0% | 703.0ms |     224 | `Composer\Util\ProcessExecutor::doExecute` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                    |
| ----: | ------: | ------: | --------------------------------------------------------- | ----------------------------------------------------------- |
| 99.1% | 695.0ms |     216 | `Symfony\Component\Process\Process::run`                  | `composer/vendor/symfony/process/Process.php`               |
|  0.4% |   3.0ms |       3 | `Seld\Signal\SignalHandler::unregister`                   | `composer/vendor/seld/signal-handler/src/SignalHandler.php` |
|  0.1% |   1.0ms |       1 | `Composer\Autoload\ClassLoader::loadClass`                | `composer/vendor/composer/ClassLoader.php`                  |
|  0.1% |   1.0ms |       1 | `Symfony\Component\Process\Process::fromShellCommandline` | `composer/vendor/symfony/process/Process.php`               |

##### `Symfony\Component\Process\Process::run` (`composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                     | Location                                      |
| ----: | ------: | ------: | ------------------------------------------ | --------------------------------------------- |
| 93.5% | 650.0ms |     171 | `Symfony\Component\Process\Process::wait`  | `composer/vendor/symfony/process/Process.php` |
|  6.5% |  45.0ms |      45 | `Symfony\Component\Process\Process::start` | `composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::wait` (`composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                            | Location                                      |
| ----: | ------: | ------: | ------------------------------------------------- | --------------------------------------------- |
| 99.2% | 645.0ms |     166 | `Symfony\Component\Process\Process::readPipes`    | `composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::isRunning`    | `composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::updateStatus` | `composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::checkTimeout` | `composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                                    | Location                                              |
| ----: | ------: | ------: | --------------------------------------------------------- | ----------------------------------------------------- |
| 99.8% | 645.0ms |     166 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `composer/vendor/symfony/process/Pipes/UnixPipes.php` |
|  0.2% |   1.0ms |       1 | `(anonymous)`                                             | `composer/vendor/symfony/process/Process.php:1324`    |

##### `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                   | Location                                     |
| ----: | ------: | ------: | ---------------------------------------- | -------------------------------------------- |
| 55.0% | 276.0ms |     276 | `Composer\Pcre\Preg::pregMatch`          | `composer/vendor/composer/pcre/src/Preg.php` |
| 15.3% |  77.0ms |      77 | `Composer\Pcre\Preg::checkOffsetCapture` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
| 66.4% | 304.0ms |      75 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`           |
| 32.1% | 147.0ms |      33 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  1.3% |   6.0ms |       1 | `Composer\Util\Git::getNoShowSignatureFlag`                   | `composer/src/Composer/Util/Git.php`                       |
|  0.2% |   1.0ms |       1 | `Composer\Util\Git::cleanEnv`                                 | `composer/src/Composer/Util/Git.php`                       |

##### `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)

|    % |   Time | Samples | Callee                             | Location                                            |
| ---: | -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 4.9% | 14.0ms |      13 | `(anonymous)`                      | `composer/src/Composer/Console/Application.php:353` |
| 1.4% |  4.0ms |       4 | `Composer\Util\Silencer::suppress` | `composer/src/Composer/Util/Silencer.php`           |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|    % |  Time | Samples | Callee                                            | Location                                                              |
| ---: | ----: | ------: | ------------------------------------------------- | --------------------------------------------------------------------- |
| 0.5% | 1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileCleaner::peek` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`)

|    % |  Time | Samples | Callee                                   | Location                                     |
| ---: | ----: | ------: | ---------------------------------------- | -------------------------------------------- |
| 3.6% | 7.0ms |       3 | `Composer\Pcre\Preg::checkOffsetCapture` | `composer/vendor/composer/pcre/src/Preg.php` |
| 1.5% | 3.0ms |       3 | `Composer\Pcre\Preg::checkSetOrder`      | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Samples | Callee                                                | Location                                       |
| -----: | ------: | ------: | ----------------------------------------------------- | ---------------------------------------------- |
| 100.0% | 167.0ms |       2 | `Symfony\Component\Console\Terminal::readFromProcess` | `composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% | 147.0ms |      33 | `Composer\Util\ProcessExecutor::execute` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% | 125.0ms |      63 | `Composer\Util\ProcessExecutor::execute` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |   Time | Samples | Callee                                       | Location                                    |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------------------- |
| 58.9% | 66.0ms |      66 | `Composer\Util\Filesystem::findShortestPath` | `composer/src/Composer/Util/Filesystem.php` |
| 31.3% | 35.0ms |      35 | `Composer\Util\Filesystem::normalizePath`    | `composer/src/Composer/Util/Filesystem.php` |
|  0.9% |  1.0ms |       1 | `Composer\Util\Filesystem::isAbsolutePath`   | `composer/src/Composer/Util/Filesystem.php` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `Symfony\Component\Console\Application::run` (`composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`composer/src/Composer/Console/Application.php`) ← `(anonymous)` (`profile.php`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 15.8% | 659.0ms |     655 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10.4% | 435.0ms |     435 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  6.7% | 277.0ms |      48 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                 |
|  6.3% | 263.0ms |      20 | `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`) ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  6.1% | 252.0ms |     252 | `Composer\Pcre\Preg::pregMatch` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                |
|  4.9% | 202.0ms |     202 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.9% | 161.0ms |       1 | `Symfony\Component\Console\Terminal::readFromProcess` (`composer/vendor/symfony/console/Terminal.php`) ← `Symfony\Component\Console\Terminal::getSttyColumns` ← `Symfony\Component\Console\Terminal::initDimensionsUsingStty` ← `Symfony\Component\Console\Terminal::initDimensions` ← `Symfony\Component\Console\Terminal::getHeight`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.7% | 153.0ms |     146 | `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.4% | 142.0ms |      28 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`) |
|  3.4% | 140.0ms |     140 | `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.3% | 139.0ms |     139 | `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.3% | 138.0ms |     138 | `Composer\Pcre\Preg::enforceNonNullMatches` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                  |
|  3.3% | 138.0ms |     138 | `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.6% | 108.0ms |      46 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                              |
|  2.6% | 107.0ms |     107 | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.8% |  77.0ms |      77 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.8% |  75.0ms |      75 | `Composer\Pcre\Preg::checkOffsetCapture` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                       |
|  1.3% |  56.0ms |      21 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessSvnVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                 |
|  1.3% |  55.0ms |      21 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessHgVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                  |
|  1.3% |  55.0ms |      55 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` (`composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

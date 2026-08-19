# Sampling profile

Took 3.89s over 3,217 samples (1.2ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| Third-party | 91.4% |   3.55s |   3,073 |
| Ours        |  8.6% | 334.0ms |     144 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 16.9% | 657.0ms |     657 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 16.4% | 638.0ms |     163 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.6% | 411.0ms |     411 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  7.2% | 279.0ms |     279 | `Composer\Pcre\Preg::pregMatch`                                             | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.7% | 222.0ms |     222 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  5.5% | 215.0ms |      25 | `Composer\Util\Silencer::call`                                              | `composer/src/Composer/Util/Silencer.php`                                |
|  4.8% | 187.0ms |     187 | `Composer\Pcre\Preg::matchAll`                                              | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 149.0ms |     149 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 146.0ms |     146 | `Composer\Pcre\Preg::match`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.6% | 139.0ms |     139 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.2% | 124.0ms |     124 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.9% | 113.0ms |     113 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.2% |  84.0ms |      84 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  1.5% |  58.0ms |      58 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.3% |  52.0ms |      52 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.0% |  37.0ms |      37 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                            |
|  0.9% |  35.0ms |      35 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.7% |  29.0ms |      29 | `Composer\Util\Filesystem::normalizePath`                                   | `composer/src/Composer/Util/Filesystem.php`                              |
|  0.7% |  27.0ms |      27 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  0.5% |  21.0ms |      21 | `Composer\Pcre\Preg::isMatch`                                               | `composer/vendor/composer/pcre/src/Preg.php`                             |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 16.9% | 657.0ms |     657 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 16.4% | 638.0ms |     163 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.6% | 411.0ms |     411 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  7.2% | 279.0ms |     279 | `Composer\Pcre\Preg::pregMatch`                                             | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.7% | 222.0ms |     222 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.8% | 187.0ms |     187 | `Composer\Pcre\Preg::matchAll`                                              | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 149.0ms |     149 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 146.0ms |     146 | `Composer\Pcre\Preg::match`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.6% | 139.0ms |     139 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.2% | 124.0ms |     124 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.9% | 113.0ms |     113 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.2% |  84.0ms |      84 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  1.5% |  58.0ms |      58 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.3% |  52.0ms |      52 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.0% |  37.0ms |      37 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                            |
|  0.9% |  35.0ms |      35 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.7% |  27.0ms |      27 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  0.5% |  21.0ms |      21 | `Composer\Pcre\Preg::isMatch`                                               | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  0.4% |  17.0ms |      17 | `Composer\Autoload\ClassLoader::loadClass`                                  | `composer/vendor/composer/ClassLoader.php`                               |
|  0.4% |  15.0ms |      15 | `Composer\Pcre\Preg::replaceCallback`                                       | `composer/vendor/composer/pcre/src/Preg.php`                             |

##### Ours

|     % |    Time | Samples | Function                                             | Location                                               |
| ----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------------ |
|  5.5% | 215.0ms |      25 | `Composer\Util\Silencer::call`                       | `composer/src/Composer/Util/Silencer.php`              |
|  0.7% |  29.0ms |      29 | `Composer\Util\Filesystem::normalizePath`            | `composer/src/Composer/Util/Filesystem.php`            |
|  0.4% |  14.0ms |      14 | `Composer\Autoload\AutoloadGenerator::getPathCode`   | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  0.3% |  11.0ms |      11 | `(anonymous)`                                        | `composer/src/Composer/Console/Application.php:353`    |
|  0.2% |   9.0ms |       9 | `Composer\Util\Filesystem::findShortestPath`         | `composer/src/Composer/Util/Filesystem.php`            |
|  0.2% |   8.0ms |       8 | `Composer\Autoload\AutoloadGenerator::dump`          | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  0.1% |   5.0ms |       5 | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  0.1% |   5.0ms |       5 | `Composer\Util\Filesystem::isAbsolutePath`           | `composer/src/Composer/Util/Filesystem.php`            |
|  0.1% |   4.0ms |       4 | `Composer\Util\StreamContextFactory::getTlsDefaults` | `composer/src/Composer/Util/StreamContextFactory.php`  |
|  0.1% |   4.0ms |       4 | `Composer\Util\Filesystem::isReadable`               | `composer/src/Composer/Util/Filesystem.php`            |
|  0.1% |   3.0ms |       3 | `Composer\Util\ErrorHandler::handle`                 | `composer/src/Composer/Util/ErrorHandler.php`          |
|  0.1% |   3.0ms |       3 | `Composer\Util\Silencer::suppress`                   | `composer/src/Composer/Util/Silencer.php`              |
|  0.1% |   2.0ms |       2 | `Composer\Console\Application::__construct`          | `composer/src/Composer/Console/Application.php`        |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/IO/BaseIO.php`                  |
| <0.1% |   1.0ms |       1 | `Composer\Console\Application::doRun`                | `composer/src/Composer/Console/Application.php`        |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Command/UpdateCommand.php`      |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Command/ShowCommand.php`        |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Command/ArchiveCommand.php`     |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Command/RemoveCommand.php`      |
| <0.1% |   1.0ms |       1 | `Composer\Json\JsonFile::validateSchema`             | `composer/src/Composer/Json/JsonFile.php`              |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |    Time | Samples | Caller                                                    | Location                                                                 |
| -----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 657.0ms |     657 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Samples | Caller                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 638.0ms |     163 | `Symfony\Component\Process\Process::readPipes` | `composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                                  | Location                                                             |
| -----: | ------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% | 411.0ms |     411 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                      | Location                                     |
| -----: | ------: | ------: | --------------------------- | -------------------------------------------- |
| 100.0% | 279.0ms |     279 | `Composer\Pcre\Preg::match` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                              |
| -----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 222.0ms |     222 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Samples | Caller                                                | Location                                        |
| ----: | ------: | ------: | ----------------------------------------------------- | ----------------------------------------------- |
| 98.1% | 211.0ms |      21 | `Composer\Console\Application::doRun`                 | `composer/src/Composer/Console/Application.php` |
|  0.9% |   2.0ms |       2 | `Composer\Factory::getHomeDir`                        | `composer/src/Composer/Factory.php`             |
|  0.9% |   2.0ms |       2 | `Composer\Util\Filesystem::filePutContentsIfModified` | `composer/src/Composer/Util/Filesystem.php`     |

##### `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                  | Location                                                             |
| ----: | ------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------- |
| 76.5% | 143.0ms |     143 | `Composer\Pcre\Preg::matchAllStrictGroups`              | `composer/vendor/composer/pcre/src/Preg.php`                         |
| 23.5% |  44.0ms |      44 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                    | Location                                     |
| -----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 149.0ms |     149 | `Composer\Pcre\Preg::isMatchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 94.5% | 138.0ms |     138 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |
|  5.5% |   8.0ms |       8 | `Composer\Pcre\Preg::isMatch`           | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                             | Location                                                              |
| ----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 97.8% | 136.0ms |     136 | `Composer\ClassMapGenerator\PhpFileCleaner::match` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  2.2% |   3.0ms |       3 | `Composer\Util\Filesystem::normalizePath`          | `composer/src/Composer/Util/Filesystem.php`                           |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                  | Location                                     |
| -----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% | 124.0ms |     124 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Caller                                                   | Location                                                              |
| ----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------- |
| 99.1% | 112.0ms |     112 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`       | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.9% |   1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Samples | Caller                         | Location                                     |
| ----: | -----: | ------: | ------------------------------ | -------------------------------------------- |
| 97.6% | 82.0ms |      82 | `Composer\Pcre\Preg::match`    | `composer/vendor/composer/pcre/src/Preg.php` |
|  2.4% |  2.0ms |       2 | `Composer\Pcre\Preg::matchAll` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|     % |   Time | Samples | Caller                                                                      | Location                                                                 |
| ----: | -----: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 96.6% | 56.0ms |      56 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  3.4% |  2.0ms |       2 | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `composer/vendor/symfony/finder/Finder.php`                              |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                      | Location                                               |
| -----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 52.0ms |      52 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Process\Process::start` (`composer/vendor/symfony/process/Process.php`)

|      % |   Time | Samples | Caller                                   | Location                                      |
| -----: | -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 37.0ms |      37 | `Symfony\Component\Process\Process::run` | `composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Samples | Caller                                                                          | Location                                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 35.0ms |      35 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Composer\Util\Filesystem::normalizePath` (`composer/src/Composer/Util/Filesystem.php`)

|     % |   Time | Samples | Caller                                             | Location                                               |
| ----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 62.1% | 18.0ms |      18 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 37.9% | 11.0ms |      11 | `Composer\Util\Filesystem::findShortestPath`       | `composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                                    | Location                                                                 |
| -----: | -----: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 27.0ms |      27 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::isMatch` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Samples | Caller                                             | Location                                                              |
| ----: | -----: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 95.2% | 20.0ms |      20 | `Composer\Util\Filesystem::findShortestPath`       | `composer/src/Composer/Util/Filesystem.php`                           |
|  4.8% |  1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Autoload\ClassLoader::loadClass` (`composer/vendor/composer/ClassLoader.php`)

|     % |  Time | Samples | Caller                                             | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- | -------------------------------------------------- |
| 17.6% | 3.0ms |       3 | `Composer\Console\Application::doRun`              | `composer/src/Composer/Console/Application.php`    |
|  5.9% | 1.0ms |       1 | `(anonymous)`                                      | `composer/vendor/symfony/console/Input/Input.php`  |
|  5.9% | 1.0ms |       1 | `Composer\Console\Application::getDefaultCommands` | `composer/src/Composer/Console/Application.php`    |
|  5.9% | 1.0ms |       1 | `(anonymous)`                                      | `composer/src/Composer/Command/DependsCommand.php` |
|  5.9% | 1.0ms |       1 | `Composer\Command\InstallCommand::configure`       | `composer/src/Composer/Command/InstallCommand.php` |

##### `Composer\Pcre\Preg::replaceCallback` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |  Time | Samples | Caller                                                        | Location                                                                 |
| ----: | ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 60.0% | 9.0ms |       9 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 40.0% | 6.0ms |       6 | `Composer\Util\Filesystem::normalizePath`                     | `composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |   Time | Samples | Caller                                      | Location                                               |
| -----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 14.0ms |      14 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `(anonymous)` (`composer/src/Composer/Console/Application.php:353`)

|      % |   Time | Samples | Caller                         | Location                                  |
| -----: | -----: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 11.0ms |      11 | `Composer\Util\Silencer::call` | `composer/src/Composer/Util/Silencer.php` |

##### `Composer\Util\Filesystem::findShortestPath` (`composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Samples | Caller                                             | Location                                               |
| -----: | ----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 9.0ms |       9 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                          | Location                                                |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 8.0ms |       8 | `Composer\Command\DumpAutoloadCommand::execute` | `composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Autoload\AutoloadGenerator::getStaticFile` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                      | Location                                               |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 5.0ms |       5 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::isAbsolutePath` (`composer/src/Composer/Util/Filesystem.php`)

|     % |  Time | Samples | Caller                                             | Location                                               |
| ----: | ----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 80.0% | 4.0ms |       4 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 20.0% | 1.0ms |       1 | `Composer\Util\Filesystem::findShortestPath`       | `composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\Util\StreamContextFactory::getTlsDefaults` (`composer/src/Composer/Util/StreamContextFactory.php`)

|      % |  Time | Samples | Caller                                      | Location                                        |
| -----: | ----: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 4.0ms |       4 | `Composer\Util\HttpDownloader::__construct` | `composer/src/Composer/Util/HttpDownloader.php` |

##### `Composer\Util\Filesystem::isReadable` (`composer/src/Composer/Util/Filesystem.php`)

|     % |  Time | Samples | Caller                                               | Location                                               |
| ----: | ----: | ------: | ---------------------------------------------------- | ------------------------------------------------------ |
| 75.0% | 3.0ms |       3 | `Composer\Util\StreamContextFactory::getTlsDefaults` | `composer/src/Composer/Util/StreamContextFactory.php`  |
| 25.0% | 1.0ms |       1 | `Composer\Autoload\AutoloadGenerator::dump`          | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\ErrorHandler::handle` (`composer/src/Composer/Util/ErrorHandler.php`)

|     % |  Time | Samples | Caller                             | Location                                       |
| ----: | ----: | ------: | ---------------------------------- | ---------------------------------------------- |
| 66.7% | 2.0ms |       2 | `Composer\Util\Silencer::suppress` | `composer/src/Composer/Util/Silencer.php`      |
| 33.3% | 1.0ms |       1 | `(anonymous)`                      | `composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\Silencer::suppress` (`composer/src/Composer/Util/Silencer.php`)

|      % |  Time | Samples | Caller                         | Location                                  |
| -----: | ----: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 3.0ms |       3 | `Composer\Util\Silencer::call` | `composer/src/Composer/Util/Silencer.php` |

##### `Composer\Console\Application::__construct` (`composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Caller        | Location      |
| -----: | ----: | ------: | ------------- | ------------- |
| 100.0% | 2.0ms |       2 | `(anonymous)` | `profile.php` |

##### `(anonymous)` (`composer/src/Composer/IO/BaseIO.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Caller                                       | Location                                          |
| -----: | ----: | ------: | -------------------------------------------- | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `Symfony\Component\Console\Application::run` | `composer/vendor/symfony/console/Application.php` |

##### `(anonymous)` (`composer/src/Composer/Command/UpdateCommand.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Command/ShowCommand.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Command/ArchiveCommand.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Command/RemoveCommand.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Json\JsonFile::validateSchema` (`composer/src/Composer/Json/JsonFile.php`)

|      % |  Time | Samples | Caller                             | Location                            |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Factory::createComposer` | `composer/src/Composer/Factory.php` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                                  | Location                                                                 |
| -----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% |   3.89s |   3,217 | `(anonymous)`                                             | `profile.php`                                                            |
|  99.7% |   3.88s |   3,207 | `Symfony\Component\Console\Application::run`              | `composer/vendor/symfony/console/Application.php`                        |
|  99.7% |   3.88s |   3,207 | `Composer\Console\Application::run`                       | `composer/src/Composer/Console/Application.php`                          |
|  99.4% |   3.86s |   3,204 | `Composer\Console\Application::doRun`                     | `composer/src/Composer/Console/Application.php`                          |
|  93.0% |   3.61s |   3,143 | `Symfony\Component\Console\Application::doRun`            | `composer/vendor/symfony/console/Application.php`                        |
|  92.9% |   3.61s |   3,142 | `Symfony\Component\Console\Command\Command::run`          | `composer/vendor/symfony/console/Command/Command.php`                    |
|  92.9% |   3.61s |   3,142 | `Symfony\Component\Console\Application::doRunCommand`     | `composer/vendor/symfony/console/Application.php`                        |
|  73.8% |   2.87s |   2,872 | `Composer\Command\DumpAutoloadCommand::execute`           | `composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
|  73.7% |   2.87s |   2,870 | `Composer\Autoload\AutoloadGenerator::dump`               | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  69.9% |   2.72s |   2,721 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  64.2% |   2.49s |   2,498 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  42.4% |   1.64s |   1,649 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  25.6% | 995.0ms |     995 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  23.3% | 905.0ms |     905 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  19.7% | 766.0ms |     766 | `Composer\Pcre\Preg::matchStrictGroups`                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  19.1% | 745.0ms |     270 | `Composer\Command\BaseCommand::initialize`                | `composer/src/Composer/Command/BaseCommand.php`                          |
|  19.1% | 744.0ms |     269 | `Composer\Factory::createComposer`                        | `composer/src/Composer/Factory.php`                                      |
|  19.1% | 744.0ms |     269 | `Composer\Factory::create`                                | `composer/src/Composer/Factory.php`                                      |
|  19.1% | 744.0ms |     269 | `Composer\Console\Application::getComposer`               | `composer/src/Composer/Console/Application.php`                          |
|  19.1% | 744.0ms |     269 | `Composer\Command\BaseCommand::tryComposer`               | `composer/src/Composer/Command/BaseCommand.php`                          |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                                                  | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 99.7% |   3.88s |   3,207 | `Symfony\Component\Console\Application::run`              | `composer/vendor/symfony/console/Application.php`                        |
| 93.0% |   3.61s |   3,143 | `Symfony\Component\Console\Application::doRun`            | `composer/vendor/symfony/console/Application.php`                        |
| 92.9% |   3.61s |   3,142 | `Symfony\Component\Console\Command\Command::run`          | `composer/vendor/symfony/console/Command/Command.php`                    |
| 92.9% |   3.61s |   3,142 | `Symfony\Component\Console\Application::doRunCommand`     | `composer/vendor/symfony/console/Application.php`                        |
| 69.9% |   2.72s |   2,721 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 64.2% |   2.49s |   2,498 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 42.4% |   1.64s |   1,649 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 25.6% | 995.0ms |     995 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 23.3% | 905.0ms |     905 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
| 19.7% | 766.0ms |     766 | `Composer\Pcre\Preg::matchStrictGroups`                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
| 17.8% | 694.0ms |     219 | `Symfony\Component\Process\Process::run`                  | `composer/vendor/symfony/process/Process.php`                            |
| 16.5% | 642.0ms |     167 | `Symfony\Component\Process\Process::wait`                 | `composer/vendor/symfony/process/Process.php`                            |
| 16.4% | 639.0ms |     164 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 16.4% | 639.0ms |     164 | `Symfony\Component\Process\Process::readPipes`            | `composer/vendor/symfony/process/Process.php`                            |
| 13.0% | 507.0ms |     507 | `Composer\Pcre\Preg::match`                               | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  7.2% | 279.0ms |     279 | `Composer\Pcre\Preg::pregMatch`                           | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.7% | 222.0ms |     222 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`   | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.9% | 189.0ms |     189 | `Composer\Pcre\Preg::matchAll`                            | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 146.0ms |     146 | `Composer\Pcre\Preg::matchAllStrictGroups`                | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.2% | 124.0ms |     124 | `Composer\Pcre\Preg::enforceNonNullMatches`               | `composer/vendor/composer/pcre/src/Preg.php`                             |

##### Ours

|      % |    Time | Samples | Function                                                      | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |   3.89s |   3,217 | `(anonymous)`                                                 | `profile.php`                                                |
|  99.7% |   3.88s |   3,207 | `Composer\Console\Application::run`                           | `composer/src/Composer/Console/Application.php`              |
|  99.4% |   3.86s |   3,204 | `Composer\Console\Application::doRun`                         | `composer/src/Composer/Console/Application.php`              |
|  73.8% |   2.87s |   2,872 | `Composer\Command\DumpAutoloadCommand::execute`               | `composer/src/Composer/Command/DumpAutoloadCommand.php`      |
|  73.7% |   2.87s |   2,870 | `Composer\Autoload\AutoloadGenerator::dump`                   | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  19.1% | 745.0ms |     270 | `Composer\Command\BaseCommand::initialize`                    | `composer/src/Composer/Command/BaseCommand.php`              |
|  19.1% | 744.0ms |     269 | `Composer\Factory::createComposer`                            | `composer/src/Composer/Factory.php`                          |
|  19.1% | 744.0ms |     269 | `Composer\Factory::create`                                    | `composer/src/Composer/Factory.php`                          |
|  19.1% | 744.0ms |     269 | `Composer\Console\Application::getComposer`                   | `composer/src/Composer/Console/Application.php`              |
|  19.1% | 744.0ms |     269 | `Composer\Command\BaseCommand::tryComposer`                   | `composer/src/Composer/Command/BaseCommand.php`              |
|  18.1% | 703.0ms |     228 | `Composer\Package\Loader\RootPackageLoader::load`             | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  18.0% | 700.0ms |     225 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  18.0% | 700.0ms |     225 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  18.0% | 699.0ms |     224 | `Composer\Util\ProcessExecutor::doExecute`                    | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  17.9% | 698.0ms |     223 | `Composer\Util\ProcessExecutor::runProcess`                   | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  11.7% | 457.0ms |     101 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   6.0% | 232.0ms |      42 | `Composer\Util\Silencer::call`                                | `composer/src/Composer/Util/Silencer.php`                    |
|   3.9% | 150.0ms |      33 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   3.0% | 117.0ms |      55 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   2.8% | 110.0ms |     110 | `Composer\Autoload\AutoloadGenerator::getPathCode`            | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`profile.php`)

|     % |  Time | Samples | Callee                                                    | Location                                               |
| ----: | ----: | ------: | --------------------------------------------------------- | ------------------------------------------------------ |
| 99.7% | 3.88s |   3,207 | `Composer\Console\Application::run`                       | `composer/src/Composer/Console/Application.php`        |
|  0.1% | 5.0ms |       5 | `Composer\Console\Application::__construct`               | `composer/src/Composer/Console/Application.php`        |
|  0.1% | 2.0ms |       2 | `(anonymous)`                                             | `composer/src/bootstrap.php`                           |
|  0.1% | 2.0ms |       2 | `Composer\Autoload\ClassLoader::loadClass`                | `composer/vendor/composer/ClassLoader.php`             |
| <0.1% | 1.0ms |       1 | `Symfony\Component\Console\Input\ArrayInput::__construct` | `composer/vendor/symfony/console/Input/ArrayInput.php` |

##### `Symfony\Component\Console\Application::run` (`composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Callee                                          | Location                                        |
| ----: | ----: | ------: | ----------------------------------------------- | ----------------------------------------------- |
| 99.7% | 3.86s |   3,204 | `Composer\Console\Application::doRun`           | `composer/src/Composer/Console/Application.php` |
|  0.2% | 8.0ms |       2 | `Symfony\Component\Console\Terminal::getHeight` | `composer/vendor/symfony/console/Terminal.php`  |
|  0.1% | 5.0ms |       1 | `Symfony\Component\Console\Terminal::getWidth`  | `composer/vendor/symfony/console/Terminal.php`  |

##### `Composer\Console\Application::run` (`composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Callee                                       | Location                                          |
| -----: | ----: | ------: | -------------------------------------------- | ------------------------------------------------- |
| 100.0% | 3.88s |   3,207 | `Symfony\Component\Console\Application::run` | `composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)

|     % |    Time | Samples | Callee                                         | Location                                          |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 93.5% |   3.61s |   3,143 | `Symfony\Component\Console\Application::doRun` | `composer/vendor/symfony/console/Application.php` |
|  5.8% | 226.0ms |      36 | `Composer\Util\Silencer::call`                 | `composer/src/Composer/Util/Silencer.php`         |
|  0.5% |  20.0ms |      20 | `Symfony\Component\Console\Application::find`  | `composer/vendor/symfony/console/Application.php` |
|  0.1% |   4.0ms |       4 | `Composer\Autoload\ClassLoader::loadClass`     | `composer/vendor/composer/ClassLoader.php`        |

##### `Symfony\Component\Console\Application::doRun` (`composer/vendor/symfony/console/Application.php`)

|      % |  Time | Samples | Callee                                                | Location                                          |
| -----: | ----: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 100.0% | 3.61s |   3,142 | `Symfony\Component\Console\Application::doRunCommand` | `composer/vendor/symfony/console/Application.php` |
|  <0.1% | 1.0ms |       1 | `Symfony\Component\Console\Input\Input::bind`         | `composer/vendor/symfony/console/Input/Input.php` |

##### `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`)

|     % |    Time | Samples | Callee                                          | Location                                                |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
| 79.4% |   2.87s |   2,872 | `Composer\Command\DumpAutoloadCommand::execute` | `composer/src/Composer/Command/DumpAutoloadCommand.php` |
| 20.6% | 745.0ms |     270 | `Composer\Command\BaseCommand::initialize`      | `composer/src/Composer/Command/BaseCommand.php`         |

##### `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`)

|      % |  Time | Samples | Callee                                           | Location                                              |
| -----: | ----: | ------: | ------------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 3.61s |   3,142 | `Symfony\Component\Console\Command\Command::run` | `composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`)

|     % |  Time | Samples | Callee                                      | Location                                               |
| ----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 99.9% | 2.87s |   2,870 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
| <0.1% | 1.0ms |       1 | `Composer\IO\ConsoleIO::write`              | `composer/src/Composer/IO/ConsoleIO.php`               |

##### `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 94.8% |   2.72s |   2,721 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  3.8% | 110.0ms |     110 | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.7% |  21.0ms |      21 | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.1% |   2.0ms |       2 | `Composer\Util\Filesystem::filePutContentsIfModified`     | `composer/src/Composer/Util/Filesystem.php`                              |
|  0.1% |   2.0ms |       2 | `Composer\IO\ConsoleIO::writeError`                       | `composer/src/Composer/IO/ConsoleIO.php`                                 |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|     % |   Time | Samples | Callee                                                                          | Location                                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 91.8% |  2.49s |   2,498 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  2.1% | 56.0ms |      56 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  1.6% | 43.0ms |      43 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  1.3% | 35.0ms |      35 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  0.3% |  8.0ms |       8 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`            | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                              |
| ----: | ------: | ------: | --------------------------------------------------------- | --------------------------------------------------------------------- |
| 66.0% |   1.64s |   1,649 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  5.8% | 146.0ms |     146 | `Composer\Pcre\Preg::matchAllStrictGroups`                | `composer/vendor/composer/pcre/src/Preg.php`                          |
|  1.8% |  45.0ms |      45 | `Composer\Pcre\Preg::matchAll`                            | `composer/vendor/composer/pcre/src/Preg.php`                          |
| <0.1% |   1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileParser::getExtraTypes` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`  |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                                   | Location                                                              |
| ----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------- |
| 60.3% | 994.0ms |     994 | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| 13.5% | 222.0ms |     222 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.8% |  14.0ms |      14 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.2% |   3.0ms |       3 | `Composer\Pcre\Preg::isMatch`                            | `composer/vendor/composer/pcre/src/Preg.php`                          |
|  0.2% |   3.0ms |       3 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 88.6% | 882.0ms |     882 | `Composer\Pcre\Preg::isMatchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 84.6% | 766.0ms |     766 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                      | Location                                     |
| ----: | ------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 64.4% | 493.0ms |     493 | `Composer\Pcre\Preg::match`                 | `composer/vendor/composer/pcre/src/Preg.php` |
| 16.2% | 124.0ms |     124 | `Composer\Pcre\Preg::enforceNonNullMatches` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Command\BaseCommand::initialize` (`composer/src/Composer/Command/BaseCommand.php`)

|     % |    Time | Samples | Callee                                             | Location                                          |
| ----: | ------: | ------: | -------------------------------------------------- | ------------------------------------------------- |
| 99.9% | 744.0ms |     269 | `Composer\Command\BaseCommand::tryComposer`        | `composer/src/Composer/Command/BaseCommand.php`   |
|  0.1% |   1.0ms |       1 | `Symfony\Component\Console\Input\Input::getOption` | `composer/vendor/symfony/console/Input/Input.php` |

##### `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`)

|     % |    Time | Samples | Callee                                            | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------ |
| 94.5% | 703.0ms |     228 | `Composer\Package\Loader\RootPackageLoader::load` | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  2.2% |  16.0ms |      16 | `Composer\Json\JsonFile::validateSchema`          | `composer/src/Composer/Json/JsonFile.php`                    |
|  1.5% |  11.0ms |      11 | `Composer\Factory::createHttpDownloader`          | `composer/src/Composer/Factory.php`                          |
|  0.4% |   3.0ms |       3 | `Composer\Factory::createDownloadManager`         | `composer/src/Composer/Factory.php`                          |
|  0.3% |   2.0ms |       2 | `Composer\Factory::createConfig`                  | `composer/src/Composer/Factory.php`                          |

##### `Composer\Factory::create` (`composer/src/Composer/Factory.php`)

|      % |    Time | Samples | Callee                             | Location                            |
| -----: | ------: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% | 744.0ms |     269 | `Composer\Factory::createComposer` | `composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`)

|      % |    Time | Samples | Callee                     | Location                            |
| -----: | ------: | ------: | -------------------------- | ----------------------------------- |
| 100.0% | 744.0ms |     269 | `Composer\Factory::create` | `composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                        |
| -----: | ------: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 744.0ms |     269 | `Composer\Console\Application::getComposer` | `composer/src/Composer/Console/Application.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|     % |    Time | Samples | Callee                                                                 | Location                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.6% | 700.0ms |     225 | `Composer\Package\Version\VersionGuesser::guessVersion`                | `composer/src/Composer/Package/Version/VersionGuesser.php`       |
|  0.1% |   1.0ms |       1 | `Composer\Package\Loader\ValidatingArrayLoader::hasPackageNamingError` | `composer/src/Composer/Package/Loader/ValidatingArrayLoader.php` |
|  0.1% |   1.0ms |       1 | `Composer\Package\Loader\ArrayLoader::load`                            | `composer/src/Composer/Package/Loader/ArrayLoader.php`           |
|  0.1% |   1.0ms |       1 | `Composer\Repository\RepositoryFactory::defaultRepos`                  | `composer/src/Composer/Repository/RepositoryFactory.php`         |

##### `Composer\Util\ProcessExecutor::execute` (`composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                     | Location                                         |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| 99.9% | 699.0ms |     224 | `Composer\Util\ProcessExecutor::doExecute` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
| 65.3% | 457.0ms |     101 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php` |
| 16.7% | 117.0ms |      55 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  9.4% |  66.0ms |      37 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.6% |  60.0ms |      32 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                      | Location                                                    |
| ----: | ------: | ------: | ------------------------------------------- | ----------------------------------------------------------- |
| 99.9% | 698.0ms |     223 | `Composer\Util\ProcessExecutor::runProcess` | `composer/src/Composer/Util/ProcessExecutor.php`            |
|  0.1% |   1.0ms |       1 | `Seld\Signal\SignalHandler::__destruct`     | `composer/vendor/seld/signal-handler/src/SignalHandler.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                     | Location                                                    |
| ----: | ------: | ------: | ------------------------------------------ | ----------------------------------------------------------- |
| 99.4% | 694.0ms |     219 | `Symfony\Component\Process\Process::run`   | `composer/vendor/symfony/process/Process.php`               |
|  0.3% |   2.0ms |       2 | `Seld\Signal\SignalHandler::create`        | `composer/vendor/seld/signal-handler/src/SignalHandler.php` |
|  0.1% |   1.0ms |       1 | `Composer\Autoload\ClassLoader::loadClass` | `composer/vendor/composer/ClassLoader.php`                  |
|  0.1% |   1.0ms |       1 | `Seld\Signal\SignalHandler::unregister`    | `composer/vendor/seld/signal-handler/src/SignalHandler.php` |

##### `Symfony\Component\Process\Process::run` (`composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                     | Location                                      |
| ----: | ------: | ------: | ------------------------------------------ | --------------------------------------------- |
| 92.5% | 642.0ms |     167 | `Symfony\Component\Process\Process::wait`  | `composer/vendor/symfony/process/Process.php` |
|  7.5% |  52.0ms |      52 | `Symfony\Component\Process\Process::start` | `composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::wait` (`composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                            | Location                                      |
| ----: | ------: | ------: | ------------------------------------------------- | --------------------------------------------- |
| 99.4% | 638.0ms |     163 | `Symfony\Component\Process\Process::readPipes`    | `composer/vendor/symfony/process/Process.php` |
|  0.3% |   2.0ms |       2 | `Symfony\Component\Process\Process::isRunning`    | `composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::updateStatus` | `composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|    % |  Time | Samples | Callee                                                   | Location                                                  |
| ---: | ----: | ------: | -------------------------------------------------------- | --------------------------------------------------------- |
| 0.2% | 1.0ms |       1 | `Symfony\Component\Process\Pipes\AbstractPipes::unblock` | `composer/vendor/symfony/process/Pipes/AbstractPipes.php` |

##### `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`)

|      % |    Time | Samples | Callee                                                    | Location                                              |
| -----: | ------: | ------: | --------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% | 639.0ms |     164 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `composer/vendor/symfony/process/Pipes/UnixPipes.php` |

##### `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                   | Location                                     |
| ----: | ------: | ------: | ---------------------------------------- | -------------------------------------------- |
| 55.0% | 279.0ms |     279 | `Composer\Pcre\Preg::pregMatch`          | `composer/vendor/composer/pcre/src/Preg.php` |
| 16.2% |  82.0ms |      82 | `Composer\Pcre\Preg::checkOffsetCapture` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
| 65.6% | 300.0ms |      67 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`           |
| 32.8% | 150.0ms |      33 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  1.5% |   7.0ms |       1 | `Composer\Util\Git::getNoShowSignatureFlag`                   | `composer/src/Composer/Util/Git.php`                       |

##### `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)

|    % |   Time | Samples | Callee                             | Location                                            |
| ---: | -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 4.7% | 11.0ms |      11 | `(anonymous)`                      | `composer/src/Composer/Console/Application.php:353` |
| 2.2% |  5.0ms |       5 | `Composer\Util\Silencer::suppress` | `composer/src/Composer/Util/Silencer.php`           |
| 0.4% |  1.0ms |       1 | `Composer\Util\Silencer::restore`  | `composer/src/Composer/Util/Silencer.php`           |

##### `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`)

|    % |  Time | Samples | Callee                                   | Location                                     |
| ---: | ----: | ------: | ---------------------------------------- | -------------------------------------------- |
| 1.1% | 2.0ms |       2 | `Composer\Pcre\Preg::checkOffsetCapture` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% | 150.0ms |      33 | `Composer\Util\ProcessExecutor::execute` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                       | Location                                     |
| ----: | ------: | ------: | -------------------------------------------- | -------------------------------------------- |
| 98.6% | 144.0ms |     144 | `Composer\Pcre\Preg::matchAll`               | `composer/vendor/composer/pcre/src/Preg.php` |
|  0.7% |   1.0ms |       1 | `Composer\Pcre\Preg::enforceNonNullMatchAll` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% | 117.0ms |      55 | `Composer\Util\ProcessExecutor::execute` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |   Time | Samples | Callee                                       | Location                                    |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------------------- |
| 58.2% | 64.0ms |      64 | `Composer\Util\Filesystem::findShortestPath` | `composer/src/Composer/Util/Filesystem.php` |
| 25.5% | 28.0ms |      28 | `Composer\Util\Filesystem::normalizePath`    | `composer/src/Composer/Util/Filesystem.php` |
|  3.6% |  4.0ms |       4 | `Composer\Util\Filesystem::isAbsolutePath`   | `composer/src/Composer/Util/Filesystem.php` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`composer/src/Composer/Console/Application.php`) ← `(anonymous)` (`profile.php`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 16.9% | 657.0ms |     657 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10.6% | 411.0ms |     411 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  7.2% | 280.0ms |      47 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                 |
|  6.9% | 269.0ms |     269 | `Composer\Pcre\Preg::pregMatch` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                |
|  5.7% | 222.0ms |     222 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  5.4% | 211.0ms |      21 | `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.8% | 147.0ms |     147 | `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.7% | 143.0ms |     143 | `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.6% | 141.0ms |      24 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` |
|  3.5% | 136.0ms |     136 | `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.4% | 131.0ms |     131 | `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.1% | 122.0ms |     122 | `Composer\Pcre\Preg::enforceNonNullMatches` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                  |
|  2.9% | 112.0ms |     112 | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.7% | 106.0ms |      44 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                              |
|  2.0% |  77.0ms |      77 | `Composer\Pcre\Preg::checkOffsetCapture` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                       |
|  1.4% |  56.0ms |      56 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.4% |  54.0ms |      25 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessHgVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                  |
|  1.3% |  52.0ms |      52 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% |  50.0ms |      22 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessSvnVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                 |
|  1.1% |  44.0ms |      44 | `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

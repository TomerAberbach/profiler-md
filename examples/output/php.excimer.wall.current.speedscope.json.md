# Sampling profile

Took 3.89s over 3,219 samples (1.2ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| Third-party | 91.4% |   3.56s |   3,075 |
| Ours        |  8.6% | 334.0ms |     144 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 17.3% | 673.0ms |     672 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 16.1% | 626.0ms |     158 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.4% | 405.0ms |     405 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  7.3% | 284.0ms |     283 | `Composer\Pcre\Preg::pregMatch`                                             | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.5% | 215.0ms |      25 | `Composer\Util\Silencer::call`                                              | `composer/src/Composer/Util/Silencer.php`                                |
|  5.4% | 209.0ms |     209 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.9% | 190.0ms |     190 | `Composer\Pcre\Preg::matchAll`                                              | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 148.0ms |     148 | `Composer\Pcre\Preg::match`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 133.0ms |     133 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 127.0ms |     124 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 127.0ms |     127 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.7% | 107.0ms |     107 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.7% | 105.0ms |     105 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.0% |  79.0ms |      77 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.4% |  56.0ms |      56 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.2% |  45.0ms |      45 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  42.0ms |      42 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                            |
|  1.1% |  42.0ms |      42 | `Composer\Util\Filesystem::normalizePath`                                   | `composer/src/Composer/Util/Filesystem.php`                              |
|  0.4% |  17.0ms |      17 | `Composer\Autoload\ClassLoader::loadClass`                                  | `composer/vendor/composer/ClassLoader.php`                               |
|  0.4% |  15.0ms |      15 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 17.3% | 673.0ms |     672 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 16.1% | 626.0ms |     158 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.4% | 405.0ms |     405 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  7.3% | 284.0ms |     283 | `Composer\Pcre\Preg::pregMatch`                                             | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.4% | 209.0ms |     209 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.9% | 190.0ms |     190 | `Composer\Pcre\Preg::matchAll`                                              | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 148.0ms |     148 | `Composer\Pcre\Preg::match`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 133.0ms |     133 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 127.0ms |     124 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 127.0ms |     127 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.7% | 107.0ms |     107 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.7% | 105.0ms |     105 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.0% |  79.0ms |      77 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.4% |  56.0ms |      56 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.2% |  45.0ms |      45 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  42.0ms |      42 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                            |
|  0.4% |  17.0ms |      17 | `Composer\Autoload\ClassLoader::loadClass`                                  | `composer/vendor/composer/ClassLoader.php`                               |
|  0.4% |  15.0ms |      15 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  0.4% |  15.0ms |      15 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                  | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  0.3% |  12.0ms |       3 | `Symfony\Component\Console\Terminal::readFromProcess`                       | `composer/vendor/symfony/console/Terminal.php`                           |

##### Ours

|     % |    Time | Samples | Function                                             | Location                                               |
| ----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------------ |
|  5.5% | 215.0ms |      25 | `Composer\Util\Silencer::call`                       | `composer/src/Composer/Util/Silencer.php`              |
|  1.1% |  42.0ms |      42 | `Composer\Util\Filesystem::normalizePath`            | `composer/src/Composer/Util/Filesystem.php`            |
|  0.3% |  13.0ms |      13 | `Composer\Util\Filesystem::findShortestPath`         | `composer/src/Composer/Util/Filesystem.php`            |
|  0.3% |  12.0ms |      12 | `(anonymous)`                                        | `composer/src/Composer/Console/Application.php:353`    |
|  0.2% |   6.0ms |       6 | `Composer\Autoload\AutoloadGenerator::getPathCode`   | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  0.1% |   5.0ms |       5 | `Composer\Util\Filesystem::isAbsolutePath`           | `composer/src/Composer/Util/Filesystem.php`            |
|  0.1% |   4.0ms |       4 | `Composer\Util\Filesystem::filesAreEqual`            | `composer/src/Composer/Util/Filesystem.php`            |
|  0.1% |   3.0ms |       3 | `Composer\Console\Application::doRun`                | `composer/src/Composer/Console/Application.php`        |
|  0.1% |   3.0ms |       3 | `Composer\Autoload\AutoloadGenerator::dump`          | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  0.1% |   3.0ms |       3 | `Composer\Util\Filesystem::isReadable`               | `composer/src/Composer/Util/Filesystem.php`            |
|  0.1% |   3.0ms |       3 | `Composer\Json\JsonFile::read`                       | `composer/src/Composer/Json/JsonFile.php`              |
|  0.1% |   2.0ms |       2 | `Composer\Util\Platform::getCwd`                     | `composer/src/Composer/Util/Platform.php`              |
|  0.1% |   2.0ms |       2 | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  0.1% |   2.0ms |       2 | `Composer\Util\Http\CurlDownloader::__construct`     | `composer/src/Composer/Util/Http/CurlDownloader.php`   |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Console/Application.php`        |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Package/PackageInterface.php`   |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Command/ShowCommand.php`        |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Command/RequireCommand.php`     |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `composer/src/Composer/Command/ReinstallCommand.php`   |
| <0.1% |   1.0ms |       1 | `Composer\Factory::createComposer`                   | `composer/src/Composer/Factory.php`                    |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |    Time | Samples | Caller                                                    | Location                                                                 |
| -----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 673.0ms |     672 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Samples | Caller                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 626.0ms |     158 | `Symfony\Component\Process\Process::readPipes` | `composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                                  | Location                                                             |
| -----: | ------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% | 405.0ms |     405 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                      | Location                                     |
| -----: | ------: | ------: | --------------------------- | -------------------------------------------- |
| 100.0% | 284.0ms |     283 | `Composer\Pcre\Preg::match` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Samples | Caller                                                | Location                                        |
| ----: | ------: | ------: | ----------------------------------------------------- | ----------------------------------------------- |
| 97.7% | 210.0ms |      20 | `Composer\Console\Application::doRun`                 | `composer/src/Composer/Console/Application.php` |
|  2.3% |   5.0ms |       5 | `Composer\Util\Filesystem::filePutContentsIfModified` | `composer/src/Composer/Util/Filesystem.php`     |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                              |
| -----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 209.0ms |     209 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                  | Location                                                             |
| ----: | ------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------- |
| 74.2% | 141.0ms |     141 | `Composer\Pcre\Preg::matchAllStrictGroups`              | `composer/vendor/composer/pcre/src/Preg.php`                         |
| 25.8% |  49.0ms |      49 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 95.3% | 141.0ms |     141 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |
|  4.7% |   7.0ms |       7 | `Composer\Pcre\Preg::isMatch`           | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                             | Location                                                              |
| ----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 96.2% | 128.0ms |     128 | `Composer\ClassMapGenerator\PhpFileCleaner::match` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  3.8% |   5.0ms |       5 | `Composer\Util\Filesystem::normalizePath`          | `composer/src/Composer/Util/Filesystem.php`                           |

##### `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                    | Location                                     |
| -----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 127.0ms |     124 | `Composer\Pcre\Preg::isMatchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                  | Location                                     |
| -----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% | 127.0ms |     127 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                              |
| -----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 107.0ms |     107 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                         | Location                                     |
| ----: | ------: | ------: | ------------------------------ | -------------------------------------------- |
| 99.0% | 104.0ms |     104 | `Composer\Pcre\Preg::match`    | `composer/vendor/composer/pcre/src/Preg.php` |
|  1.0% |   1.0ms |       1 | `Composer\Pcre\Preg::matchAll` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                      | Location                                               |
| -----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 79.0ms |      77 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|     % |   Time | Samples | Caller                                                                      | Location                                                                 |
| ----: | -----: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 96.4% | 54.0ms |      54 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  3.6% |  2.0ms |       2 | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `composer/vendor/symfony/finder/Finder.php`                              |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Samples | Caller                                                                          | Location                                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 45.0ms |      45 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Symfony\Component\Process\Process::start` (`composer/vendor/symfony/process/Process.php`)

|      % |   Time | Samples | Caller                                   | Location                                      |
| -----: | -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 42.0ms |      42 | `Symfony\Component\Process\Process::run` | `composer/vendor/symfony/process/Process.php` |

##### `Composer\Util\Filesystem::normalizePath` (`composer/src/Composer/Util/Filesystem.php`)

|     % |   Time | Samples | Caller                                             | Location                                               |
| ----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 54.8% | 23.0ms |      23 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 45.2% | 19.0ms |      19 | `Composer\Util\Filesystem::findShortestPath`       | `composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\Autoload\ClassLoader::loadClass` (`composer/vendor/composer/ClassLoader.php`)

|     % |  Time | Samples | Caller                                                      | Location                                           |
| ----: | ----: | ------: | ----------------------------------------------------------- | -------------------------------------------------- |
| 11.8% | 2.0ms |       2 | `Composer\Console\Application::doRun`                       | `composer/src/Composer/Console/Application.php`    |
| 11.8% | 2.0ms |       2 | `Composer\Factory::createComposer`                          | `composer/src/Composer/Factory.php`                |
| 11.8% | 2.0ms |       2 | `Composer\Factory::createDownloadManager`                   | `composer/src/Composer/Factory.php`                |
|  5.9% | 1.0ms |       1 | `Symfony\Component\Console\Application::getDefaultCommands` | `composer/vendor/symfony/console/Application.php`  |
|  5.9% | 1.0ms |       1 | `(anonymous)`                                               | `composer/src/Composer/Command/DependsCommand.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                                    | Location                                                                 |
| -----: | -----: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 15.0ms |      15 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |   Time | Samples | Caller                                                   | Location                                                              |
| -----: | -----: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 15.0ms |      15 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Util\Filesystem::findShortestPath` (`composer/src/Composer/Util/Filesystem.php`)

|      % |   Time | Samples | Caller                                             | Location                                               |
| -----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 13.0ms |      13 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`composer/vendor/symfony/console/Terminal.php`)

|      % |   Time | Samples | Caller                                               | Location                                       |
| -----: | -----: | ------: | ---------------------------------------------------- | ---------------------------------------------- |
| 100.0% | 12.0ms |       3 | `Symfony\Component\Console\Terminal::getSttyColumns` | `composer/vendor/symfony/console/Terminal.php` |

##### `(anonymous)` (`composer/src/Composer/Console/Application.php:353`)

|      % |   Time | Samples | Caller                         | Location                                  |
| -----: | -----: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 12.0ms |      12 | `Composer\Util\Silencer::call` | `composer/src/Composer/Util/Silencer.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                      | Location                                               |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 6.0ms |       6 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::isAbsolutePath` (`composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Samples | Caller                                             | Location                                               |
| -----: | ----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 5.0ms |       5 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::filesAreEqual` (`composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Samples | Caller                               | Location                                    |
| -----: | ----: | ------: | ------------------------------------ | ------------------------------------------- |
| 100.0% | 4.0ms |       4 | `Composer\Util\Filesystem::safeCopy` | `composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Caller                                       | Location                                          |
| -----: | ----: | ------: | -------------------------------------------- | ------------------------------------------------- |
| 100.0% | 3.0ms |       3 | `Symfony\Component\Console\Application::run` | `composer/vendor/symfony/console/Application.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                          | Location                                                |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 3.0ms |       3 | `Composer\Command\DumpAutoloadCommand::execute` | `composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Util\Filesystem::isReadable` (`composer/src/Composer/Util/Filesystem.php`)

|     % |  Time | Samples | Caller                                               | Location                                              |
| ----: | ----: | ------: | ---------------------------------------------------- | ----------------------------------------------------- |
| 66.7% | 2.0ms |       2 | `Composer\Util\StreamContextFactory::getTlsDefaults` | `composer/src/Composer/Util/StreamContextFactory.php` |
| 33.3% | 1.0ms |       1 | `Composer\Json\JsonFile::validateSchema`             | `composer/src/Composer/Json/JsonFile.php`             |

##### `Composer\Json\JsonFile::read` (`composer/src/Composer/Json/JsonFile.php`)

|      % |  Time | Samples | Caller                             | Location                            |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% | 3.0ms |       3 | `Composer\Factory::createComposer` | `composer/src/Composer/Factory.php` |

##### `Composer\Util\Platform::getCwd` (`composer/src/Composer/Util/Platform.php`)

|      % |  Time | Samples | Caller                                | Location                                        |
| -----: | ----: | ------: | ------------------------------------- | ----------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Console\Application::doRun` | `composer/src/Composer/Console/Application.php` |

##### `Composer\Autoload\AutoloadGenerator::getStaticFile` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                      | Location                                               |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 2.0ms |       2 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Http\CurlDownloader::__construct` (`composer/src/Composer/Util/Http/CurlDownloader.php`)

|      % |  Time | Samples | Caller                                      | Location                                        |
| -----: | ----: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Util\HttpDownloader::__construct` | `composer/src/Composer/Util/HttpDownloader.php` |

##### `(anonymous)` (`composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Package/PackageInterface.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Command/ShowCommand.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Command/RequireCommand.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Command/ReinstallCommand.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`)

|      % |  Time | Samples | Caller                     | Location                            |
| -----: | ----: | ------: | -------------------------- | ----------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Factory::create` | `composer/src/Composer/Factory.php` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                                  | Location                                                                 |
| -----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% |   3.89s |   3,219 | `(anonymous)`                                             | `profile.php`                                                            |
|  99.9% |   3.89s |   3,215 | `Symfony\Component\Console\Application::run`              | `composer/vendor/symfony/console/Application.php`                        |
|  99.9% |   3.89s |   3,215 | `Composer\Console\Application::run`                       | `composer/src/Composer/Console/Application.php`                          |
|  99.6% |   3.88s |   3,212 | `Composer\Console\Application::doRun`                     | `composer/src/Composer/Console/Application.php`                          |
|  93.2% |   3.63s |   3,153 | `Symfony\Component\Console\Application::doRun`            | `composer/vendor/symfony/console/Application.php`                        |
|  93.1% |   3.62s |   3,151 | `Symfony\Component\Console\Command\Command::run`          | `composer/vendor/symfony/console/Command/Command.php`                    |
|  93.1% |   3.62s |   3,151 | `Symfony\Component\Console\Application::doRunCommand`     | `composer/vendor/symfony/console/Application.php`                        |
|  74.4% |   2.89s |   2,891 | `Composer\Autoload\AutoloadGenerator::dump`               | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  74.4% |   2.89s |   2,891 | `Composer\Command\DumpAutoloadCommand::execute`           | `composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
|  70.5% |   2.74s |   2,739 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  64.1% |   2.49s |   2,491 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  41.8% |   1.62s |   1,624 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  25.2% | 980.0ms |     976 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  23.2% | 905.0ms |     901 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  19.8% | 772.0ms |     768 | `Composer\Pcre\Preg::matchStrictGroups`                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  18.7% | 729.0ms |     259 | `Composer\Factory::createComposer`                        | `composer/src/Composer/Factory.php`                                      |
|  18.7% | 729.0ms |     259 | `Composer\Factory::create`                                | `composer/src/Composer/Factory.php`                                      |
|  18.7% | 729.0ms |     259 | `Composer\Console\Application::getComposer`               | `composer/src/Composer/Console/Application.php`                          |
|  18.7% | 729.0ms |     259 | `Composer\Command\BaseCommand::tryComposer`               | `composer/src/Composer/Command/BaseCommand.php`                          |
|  18.7% | 729.0ms |     259 | `Composer\Command\BaseCommand::initialize`                | `composer/src/Composer/Command/BaseCommand.php`                          |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                                                  | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 99.9% |   3.89s |   3,215 | `Symfony\Component\Console\Application::run`              | `composer/vendor/symfony/console/Application.php`                        |
| 93.2% |   3.63s |   3,153 | `Symfony\Component\Console\Application::doRun`            | `composer/vendor/symfony/console/Application.php`                        |
| 93.1% |   3.62s |   3,151 | `Symfony\Component\Console\Command\Command::run`          | `composer/vendor/symfony/console/Command/Command.php`                    |
| 93.1% |   3.62s |   3,151 | `Symfony\Component\Console\Application::doRunCommand`     | `composer/vendor/symfony/console/Application.php`                        |
| 70.5% |   2.74s |   2,739 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 64.1% |   2.49s |   2,491 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 41.8% |   1.62s |   1,624 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 25.2% | 980.0ms |     976 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 23.2% | 905.0ms |     901 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
| 19.8% | 772.0ms |     768 | `Composer\Pcre\Preg::matchStrictGroups`                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
| 17.5% | 681.0ms |     211 | `Symfony\Component\Process\Process::run`                  | `composer/vendor/symfony/process/Process.php`                            |
| 16.2% | 630.0ms |     160 | `Symfony\Component\Process\Process::wait`                 | `composer/vendor/symfony/process/Process.php`                            |
| 16.1% | 627.0ms |     159 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 16.1% | 627.0ms |     159 | `Symfony\Component\Process\Process::readPipes`            | `composer/vendor/symfony/process/Process.php`                            |
| 13.8% | 536.0ms |     535 | `Composer\Pcre\Preg::match`                               | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  7.3% | 284.0ms |     283 | `Composer\Pcre\Preg::pregMatch`                           | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.4% | 211.0ms |     211 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`   | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.9% | 192.0ms |     192 | `Composer\Pcre\Preg::matchAll`                            | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.7% | 144.0ms |     144 | `Composer\Pcre\Preg::matchAllStrictGroups`                | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 127.0ms |     127 | `Composer\Pcre\Preg::enforceNonNullMatches`               | `composer/vendor/composer/pcre/src/Preg.php`                             |

##### Ours

|      % |    Time | Samples | Function                                                      | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |   3.89s |   3,219 | `(anonymous)`                                                 | `profile.php`                                                |
|  99.9% |   3.89s |   3,215 | `Composer\Console\Application::run`                           | `composer/src/Composer/Console/Application.php`              |
|  99.6% |   3.88s |   3,212 | `Composer\Console\Application::doRun`                         | `composer/src/Composer/Console/Application.php`              |
|  74.4% |   2.89s |   2,891 | `Composer\Autoload\AutoloadGenerator::dump`                   | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  74.4% |   2.89s |   2,891 | `Composer\Command\DumpAutoloadCommand::execute`               | `composer/src/Composer/Command/DumpAutoloadCommand.php`      |
|  18.7% | 729.0ms |     259 | `Composer\Factory::createComposer`                            | `composer/src/Composer/Factory.php`                          |
|  18.7% | 729.0ms |     259 | `Composer\Factory::create`                                    | `composer/src/Composer/Factory.php`                          |
|  18.7% | 729.0ms |     259 | `Composer\Console\Application::getComposer`                   | `composer/src/Composer/Console/Application.php`              |
|  18.7% | 729.0ms |     259 | `Composer\Command\BaseCommand::tryComposer`                   | `composer/src/Composer/Command/BaseCommand.php`              |
|  18.7% | 729.0ms |     259 | `Composer\Command\BaseCommand::initialize`                    | `composer/src/Composer/Command/BaseCommand.php`              |
|  17.7% | 690.0ms |     220 | `Composer\Package\Loader\RootPackageLoader::load`             | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  17.6% | 686.0ms |     216 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  17.6% | 685.0ms |     215 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  17.6% | 684.0ms |     214 | `Composer\Util\ProcessExecutor::doExecute`                    | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  17.5% | 683.0ms |     213 | `Composer\Util\ProcessExecutor::runProcess`                   | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  11.5% | 449.0ms |      99 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   5.9% | 229.0ms |      39 | `Composer\Util\Silencer::call`                                | `composer/src/Composer/Util/Silencer.php`                    |
|   3.7% | 145.0ms |      31 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   3.0% | 118.0ms |     118 | `Composer\Autoload\AutoloadGenerator::getPathCode`            | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|   2.9% | 114.0ms |      57 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`profile.php`)

|     % |  Time | Samples | Callee                                     | Location                                        |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 99.9% | 3.89s |   3,215 | `Composer\Console\Application::run`        | `composer/src/Composer/Console/Application.php` |
|  0.1% | 3.0ms |       3 | `Composer\Autoload\ClassLoader::loadClass` | `composer/vendor/composer/ClassLoader.php`      |
| <0.1% | 1.0ms |       1 | `(anonymous)`                              | `composer/src/bootstrap.php`                    |

##### `Symfony\Component\Console\Application::run` (`composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Callee                                          | Location                                        |
| ----: | ----: | ------: | ----------------------------------------------- | ----------------------------------------------- |
| 99.7% | 3.88s |   3,212 | `Composer\Console\Application::doRun`           | `composer/src/Composer/Console/Application.php` |
|  0.2% | 7.0ms |       2 | `Symfony\Component\Console\Terminal::getHeight` | `composer/vendor/symfony/console/Terminal.php`  |
|  0.1% | 5.0ms |       1 | `Symfony\Component\Console\Terminal::getWidth`  | `composer/vendor/symfony/console/Terminal.php`  |

##### `Composer\Console\Application::run` (`composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Callee                                       | Location                                          |
| -----: | ----: | ------: | -------------------------------------------- | ------------------------------------------------- |
| 100.0% | 3.89s |   3,215 | `Symfony\Component\Console\Application::run` | `composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)

|     % |    Time | Samples | Callee                                         | Location                                          |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 93.6% |   3.63s |   3,153 | `Symfony\Component\Console\Application::doRun` | `composer/vendor/symfony/console/Application.php` |
|  5.7% | 223.0ms |      33 | `Composer\Util\Silencer::call`                 | `composer/src/Composer/Util/Silencer.php`         |
|  0.4% |  15.0ms |      15 | `Symfony\Component\Console\Application::find`  | `composer/vendor/symfony/console/Application.php` |
|  0.1% |   3.0ms |       3 | `Composer\Autoload\ClassLoader::loadClass`     | `composer/vendor/composer/ClassLoader.php`        |
|  0.1% |   2.0ms |       2 | `Composer\Util\Platform::getCwd`               | `composer/src/Composer/Util/Platform.php`         |

##### `Symfony\Component\Console\Application::doRun` (`composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Callee                                                 | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------------ | ------------------------------------------------- |
| 99.9% | 3.62s |   3,151 | `Symfony\Component\Console\Application::doRunCommand`  | `composer/vendor/symfony/console/Application.php` |
|  0.1% | 2.0ms |       2 | `Symfony\Component\Console\Application::getDefinition` | `composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`)

|     % |    Time | Samples | Callee                                            | Location                                                |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
| 79.9% |   2.89s |   2,891 | `Composer\Command\DumpAutoloadCommand::execute`   | `composer/src/Composer/Command/DumpAutoloadCommand.php` |
| 20.1% | 729.0ms |     259 | `Composer\Command\BaseCommand::initialize`        | `composer/src/Composer/Command/BaseCommand.php`         |
| <0.1% |   1.0ms |       1 | `Symfony\Component\Console\Input\Input::validate` | `composer/vendor/symfony/console/Input/Input.php`       |

##### `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`)

|      % |  Time | Samples | Callee                                           | Location                                              |
| -----: | ----: | ------: | ------------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 3.62s |   3,151 | `Symfony\Component\Console\Command\Command::run` | `composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 94.8% |   2.74s |   2,739 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  4.1% | 118.0ms |     118 | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.6% |  18.0ms |      18 | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.2% |   6.0ms |       6 | `Composer\Util\Filesystem::filePutContentsIfModified`     | `composer/src/Composer/Util/Filesystem.php`                              |
|  0.1% |   4.0ms |       4 | `Composer\Util\Filesystem::safeCopy`                      | `composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Samples | Callee                                      | Location                                               |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 2.89s |   2,891 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|     % |   Time | Samples | Callee                                                                          | Location                                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 90.9% |  2.49s |   2,491 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  2.0% | 56.0ms |      56 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  1.7% | 46.0ms |      46 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  0.9% | 26.0ms |      26 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  0.4% | 12.0ms |      11 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                              |
| ----: | ------: | ------: | --------------------------------------------------------- | --------------------------------------------------------------------- |
| 65.2% |   1.62s |   1,624 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  5.8% | 144.0ms |     144 | `Composer\Pcre\Preg::matchAllStrictGroups`                | `composer/vendor/composer/pcre/src/Preg.php`                          |
|  2.0% |  50.0ms |      50 | `Composer\Pcre\Preg::matchAll`                            | `composer/vendor/composer/pcre/src/Preg.php`                          |
| <0.1% |   1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileParser::getExtraTypes` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`  |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                                   | Location                                                              |
| ----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------- |
| 60.2% | 980.0ms |     976 | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| 13.0% | 211.0ms |     211 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  1.4% |  22.0ms |      22 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.2% |   4.0ms |       4 | `Composer\Pcre\Preg::isMatch`                            | `composer/vendor/composer/pcre/src/Preg.php`                          |
|  0.2% |   3.0ms |       3 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 89.1% | 873.0ms |     869 | `Composer\Pcre\Preg::isMatchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 85.3% | 772.0ms |     768 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                      | Location                                     |
| ----: | ------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 67.1% | 518.0ms |     517 | `Composer\Pcre\Preg::match`                 | `composer/vendor/composer/pcre/src/Preg.php` |
| 16.5% | 127.0ms |     127 | `Composer\Pcre\Preg::enforceNonNullMatches` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`)

|     % |    Time | Samples | Callee                                            | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------ |
| 94.7% | 690.0ms |     220 | `Composer\Package\Loader\RootPackageLoader::load` | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  2.3% |  17.0ms |      17 | `Composer\Json\JsonFile::validateSchema`          | `composer/src/Composer/Json/JsonFile.php`                    |
|  1.1% |   8.0ms |       8 | `Composer\Factory::createHttpDownloader`          | `composer/src/Composer/Factory.php`                          |
|  0.4% |   3.0ms |       3 | `Composer\Factory::createDownloadManager`         | `composer/src/Composer/Factory.php`                          |
|  0.4% |   3.0ms |       3 | `Composer\Json\JsonFile::read`                    | `composer/src/Composer/Json/JsonFile.php`                    |

##### `Composer\Factory::create` (`composer/src/Composer/Factory.php`)

|      % |    Time | Samples | Callee                             | Location                            |
| -----: | ------: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% | 729.0ms |     259 | `Composer\Factory::createComposer` | `composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`)

|      % |    Time | Samples | Callee                     | Location                            |
| -----: | ------: | ------: | -------------------------- | ----------------------------------- |
| 100.0% | 729.0ms |     259 | `Composer\Factory::create` | `composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                        |
| -----: | ------: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 729.0ms |     259 | `Composer\Console\Application::getComposer` | `composer/src/Composer/Console/Application.php` |

##### `Composer\Command\BaseCommand::initialize` (`composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                        |
| -----: | ------: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 729.0ms |     259 | `Composer\Command\BaseCommand::tryComposer` | `composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|     % |    Time | Samples | Callee                                                                 | Location                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.4% | 686.0ms |     216 | `Composer\Package\Version\VersionGuesser::guessVersion`                | `composer/src/Composer/Package/Version/VersionGuesser.php`       |
|  0.1% |   1.0ms |       1 | `Composer\Package\Loader\ValidatingArrayLoader::hasPackageNamingError` | `composer/src/Composer/Package/Loader/ValidatingArrayLoader.php` |
|  0.1% |   1.0ms |       1 | `Composer\Package\Loader\ArrayLoader::load`                            | `composer/src/Composer/Package/Loader/ArrayLoader.php`           |
|  0.1% |   1.0ms |       1 | `Composer\Repository\RepositoryFactory::defaultRepos`                  | `composer/src/Composer/Repository/RepositoryFactory.php`         |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
| 65.5% | 449.0ms |      99 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php` |
| 16.6% | 114.0ms |      57 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  9.0% |  62.0ms |      32 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.9% |  61.0ms |      28 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::execute` (`composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                     | Location                                         |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| 99.9% | 684.0ms |     214 | `Composer\Util\ProcessExecutor::doExecute` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                            | Location                                         |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------ |
| 99.9% | 683.0ms |     213 | `Composer\Util\ProcessExecutor::runProcess`       | `composer/src/Composer/Util/ProcessExecutor.php` |
|  0.1% |   1.0ms |       1 | `Composer\Util\ProcessExecutor::outputCommandRun` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                     | Location                                                    |
| ----: | ------: | ------: | ------------------------------------------ | ----------------------------------------------------------- |
| 99.7% | 681.0ms |     211 | `Symfony\Component\Process\Process::run`   | `composer/vendor/symfony/process/Process.php`               |
|  0.1% |   1.0ms |       1 | `Composer\Autoload\ClassLoader::loadClass` | `composer/vendor/composer/ClassLoader.php`                  |
|  0.1% |   1.0ms |       1 | `Seld\Signal\SignalHandler::create`        | `composer/vendor/seld/signal-handler/src/SignalHandler.php` |

##### `Symfony\Component\Process\Process::run` (`composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                     | Location                                      |
| ----: | ------: | ------: | ------------------------------------------ | --------------------------------------------- |
| 92.5% | 630.0ms |     160 | `Symfony\Component\Process\Process::wait`  | `composer/vendor/symfony/process/Process.php` |
|  7.3% |  50.0ms |      50 | `Symfony\Component\Process\Process::start` | `composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::wait` (`composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                         | Location                                      |
| ----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 99.4% | 626.0ms |     158 | `Symfony\Component\Process\Process::readPipes` | `composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|    % |  Time | Samples | Callee                                                   | Location                                                  |
| ---: | ----: | ------: | -------------------------------------------------------- | --------------------------------------------------------- |
| 0.2% | 1.0ms |       1 | `Symfony\Component\Process\Pipes\AbstractPipes::unblock` | `composer/vendor/symfony/process/Pipes/AbstractPipes.php` |

##### `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`)

|      % |    Time | Samples | Callee                                                    | Location                                              |
| -----: | ------: | ------: | --------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% | 627.0ms |     159 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `composer/vendor/symfony/process/Pipes/UnixPipes.php` |

##### `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                   | Location                                     |
| ----: | ------: | ------: | ---------------------------------------- | -------------------------------------------- |
| 53.0% | 284.0ms |     283 | `Composer\Pcre\Preg::pregMatch`          | `composer/vendor/composer/pcre/src/Preg.php` |
| 19.4% | 104.0ms |     104 | `Composer\Pcre\Preg::checkOffsetCapture` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
| 66.1% | 297.0ms |      66 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`           |
| 32.3% | 145.0ms |      31 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  1.6% |   7.0ms |       2 | `Composer\Util\Git::getNoShowSignatureFlag`                   | `composer/src/Composer/Util/Git.php`                       |

##### `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)

|    % |   Time | Samples | Callee                             | Location                                            |
| ---: | -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 5.2% | 12.0ms |      12 | `(anonymous)`                      | `composer/src/Composer/Console/Application.php:353` |
| 0.9% |  2.0ms |       2 | `Composer\Util\Silencer::suppress` | `composer/src/Composer/Util/Silencer.php`           |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|    % |  Time | Samples | Callee                                            | Location                                                              |
| ---: | ----: | ------: | ------------------------------------------------- | --------------------------------------------------------------------- |
| 0.9% | 2.0ms |       2 | `Composer\ClassMapGenerator\PhpFileCleaner::peek` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`)

|    % |  Time | Samples | Callee                                   | Location                                     |
| ---: | ----: | ------: | ---------------------------------------- | -------------------------------------------- |
| 0.5% | 1.0ms |       1 | `Composer\Pcre\Preg::checkSetOrder`      | `composer/vendor/composer/pcre/src/Preg.php` |
| 0.5% | 1.0ms |       1 | `Composer\Pcre\Preg::checkOffsetCapture` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% | 145.0ms |      31 | `Composer\Util\ProcessExecutor::execute` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                       | Location                                     |
| ----: | ------: | ------: | -------------------------------------------- | -------------------------------------------- |
| 98.6% | 142.0ms |     142 | `Composer\Pcre\Preg::matchAll`               | `composer/vendor/composer/pcre/src/Preg.php` |
|  0.7% |   1.0ms |       1 | `Composer\Pcre\Preg::enforceNonNullMatchAll` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |   Time | Samples | Callee                                       | Location                                    |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------------------- |
| 59.3% | 70.0ms |      70 | `Composer\Util\Filesystem::findShortestPath` | `composer/src/Composer/Util/Filesystem.php` |
| 31.4% | 37.0ms |      37 | `Composer\Util\Filesystem::normalizePath`    | `composer/src/Composer/Util/Filesystem.php` |
|  4.2% |  5.0ms |       5 | `Composer\Util\Filesystem::isAbsolutePath`   | `composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% | 114.0ms |      57 | `Composer\Util\ProcessExecutor::execute` | `composer/src/Composer/Util/ProcessExecutor.php` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`composer/src/Composer/Console/Application.php`) ← `(anonymous)` (`profile.php`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 17.3% | 673.0ms |     672 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10.4% | 405.0ms |     405 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  7.1% | 277.0ms |      46 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                 |
|  6.9% | 268.0ms |     267 | `Composer\Pcre\Preg::pregMatch` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                |
|  5.4% | 210.0ms |      20 | `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  5.4% | 209.0ms |     209 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.6% | 141.0ms |     141 | `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.5% | 138.0ms |     138 | `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.5% | 135.0ms |      21 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` |
|  3.3% | 128.0ms |     128 | `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.2% | 124.0ms |     121 | `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.1% | 120.0ms |     120 | `Composer\Pcre\Preg::enforceNonNullMatches` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                  |
|  2.7% | 107.0ms |     107 | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.6% | 101.0ms |      45 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                              |
|  2.4% |  95.0ms |      95 | `Composer\Pcre\Preg::checkOffsetCapture` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                       |
|  2.0% |  79.0ms |      77 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.4% |  54.0ms |      22 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessSvnVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                 |
|  1.4% |  54.0ms |      54 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.4% |  53.0ms |      23 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessHgVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                  |
|  1.3% |  49.0ms |      49 | `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

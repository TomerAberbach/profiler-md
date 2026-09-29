# Sampling profile

Took 3.94s over 3,250 samples (1.2ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| Third-party | 91.2% |   3.59s |   3,113 |
| Ours        |  8.8% | 347.0ms |     137 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 17.0% | 671.0ms |     671 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 15.9% | 629.0ms |     158 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.3% | 408.0ms |     408 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  6.7% | 264.0ms |     264 | `Composer\Pcre\Preg::pregMatch`                                             | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.9% | 234.0ms |      24 | `Composer\Util\Silencer::call`                                              | `composer/src/Composer/Util/Silencer.php`                                |
|  4.9% | 194.0ms |     194 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.5% | 179.0ms |     179 | `Composer\Pcre\Preg::matchAll`                                              | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.3% | 170.0ms |     170 | `Composer\Pcre\Preg::match`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.7% | 147.0ms |     147 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 132.0ms |     132 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 130.0ms |     130 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.9% | 116.0ms |     116 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.6% | 103.0ms |     103 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.1% |  82.0ms |      82 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.6% |  62.0ms |      62 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.4% |  55.0ms |      55 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  42.0ms |      42 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                            |
|  0.8% |  30.0ms |      30 | `Composer\Util\Filesystem::normalizePath`                                   | `composer/src/Composer/Util/Filesystem.php`                              |
|  0.5% |  19.0ms |      19 | `Composer\Autoload\ClassLoader::loadClass`                                  | `composer/vendor/composer/ClassLoader.php`                               |
|  0.5% |  18.0ms |      18 | `Composer\Util\Filesystem::findShortestPath`                                | `composer/src/Composer/Util/Filesystem.php`                              |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 17.0% | 671.0ms |     671 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 15.9% | 629.0ms |     158 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.3% | 408.0ms |     408 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  6.7% | 264.0ms |     264 | `Composer\Pcre\Preg::pregMatch`                                             | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.9% | 194.0ms |     194 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.5% | 179.0ms |     179 | `Composer\Pcre\Preg::matchAll`                                              | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.3% | 170.0ms |     170 | `Composer\Pcre\Preg::match`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.7% | 147.0ms |     147 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 132.0ms |     132 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 130.0ms |     130 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.9% | 116.0ms |     116 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.6% | 103.0ms |     103 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.1% |  82.0ms |      82 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.6% |  62.0ms |      62 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.4% |  55.0ms |      55 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  42.0ms |      42 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                            |
|  0.5% |  19.0ms |      19 | `Composer\Autoload\ClassLoader::loadClass`                                  | `composer/vendor/composer/ClassLoader.php`                               |
|  0.4% |  16.0ms |       3 | `Symfony\Component\Console\Terminal::readFromProcess`                       | `composer/vendor/symfony/console/Terminal.php`                           |
|  0.4% |  16.0ms |      16 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                  | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  0.4% |  15.0ms |      15 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### Ours

|     % |    Time | Samples | Function                                                  | Location                                                     |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------ |
|  5.9% | 234.0ms |      24 | `Composer\Util\Silencer::call`                            | `composer/src/Composer/Util/Silencer.php`                    |
|  0.8% |  30.0ms |      30 | `Composer\Util\Filesystem::normalizePath`                 | `composer/src/Composer/Util/Filesystem.php`                  |
|  0.5% |  18.0ms |      18 | `Composer\Util\Filesystem::findShortestPath`              | `composer/src/Composer/Util/Filesystem.php`                  |
|  0.4% |  15.0ms |      15 | `(anonymous)`                                             | `composer/src/Composer/Console/Application.php:349`          |
|  0.3% |  12.0ms |      12 | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  0.2% |   7.0ms |       7 | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  0.1% |   4.0ms |       4 | `Composer\Util\Filesystem::filesAreEqual`                 | `composer/src/Composer/Util/Filesystem.php`                  |
|  0.1% |   4.0ms |       4 | `Composer\Util\Filesystem::isAbsolutePath`                | `composer/src/Composer/Util/Filesystem.php`                  |
|  0.1% |   2.0ms |       2 | `Composer\Util\StreamContextFactory::getTlsDefaults`      | `composer/src/Composer/Util/StreamContextFactory.php`        |
|  0.1% |   2.0ms |       2 | `Composer\Autoload\AutoloadGenerator::dump`               | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                             | `composer/src/Composer/Command/InstallCommand.php`           |
| <0.1% |   1.0ms |       1 | `Composer\Factory::createComposer`                        | `composer/src/Composer/Factory.php`                          |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                             | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                             | `composer/src/Composer/Repository/PlatformRepository.php`    |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                             | `composer/src/Composer/Repository/ComposerRepository.php`    |
| <0.1% |   1.0ms |       1 | `Composer\Repository\RepositoryManager::createRepository` | `composer/src/Composer/Repository/RepositoryManager.php`     |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                             | `composer/src/Composer/Downloader/GitDownloader.php`         |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                             | `composer/src/Composer/Downloader/ArchiveDownloader.php`     |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                             | `composer/src/Composer/Package/Archiver/PharArchiver.php`    |
| <0.1% |   1.0ms |       1 | `Composer\Command\DumpAutoloadCommand::execute`           | `composer/src/Composer/Command/DumpAutoloadCommand.php`      |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |    Time | Samples | Caller                                                    | Location                                                                 |
| -----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 671.0ms |     671 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Samples | Caller                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 629.0ms |     158 | `Symfony\Component\Process\Process::readPipes` | `composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                                  | Location                                                             |
| -----: | ------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% | 408.0ms |     408 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                      | Location                                     |
| -----: | ------: | ------: | --------------------------- | -------------------------------------------- |
| 100.0% | 264.0ms |     264 | `Composer\Pcre\Preg::match` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Samples | Caller                                                | Location                                        |
| ----: | ------: | ------: | ----------------------------------------------------- | ----------------------------------------------- |
| 98.7% | 231.0ms |      21 | `Composer\Console\Application::doRun`                 | `composer/src/Composer/Console/Application.php` |
|  0.9% |   2.0ms |       2 | `Composer\Util\Filesystem::filePutContentsIfModified` | `composer/src/Composer/Util/Filesystem.php`     |
|  0.4% |   1.0ms |       1 | `Composer\Factory::getHomeDir`                        | `composer/src/Composer/Factory.php`             |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                              |
| -----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 194.0ms |     194 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                  | Location                                                             |
| ----: | ------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------- |
| 78.8% | 141.0ms |     141 | `Composer\Pcre\Preg::matchAllStrictGroups`              | `composer/vendor/composer/pcre/src/Preg.php`                         |
| 21.2% |  38.0ms |      38 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 97.6% | 166.0ms |     166 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |
|  2.4% |   4.0ms |       4 | `Composer\Pcre\Preg::isMatch`           | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                    | Location                                     |
| -----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 147.0ms |     147 | `Composer\Pcre\Preg::isMatchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                             | Location                                                              |
| ----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 96.2% | 127.0ms |     127 | `Composer\ClassMapGenerator\PhpFileCleaner::match` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  3.8% |   5.0ms |       5 | `Composer\Util\Filesystem::normalizePath`          | `composer/src/Composer/Util/Filesystem.php`                           |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                  | Location                                     |
| -----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% | 130.0ms |     130 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                              |
| -----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 116.0ms |     116 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                      | Location                                     |
| -----: | ------: | ------: | --------------------------- | -------------------------------------------- |
| 100.0% | 103.0ms |     103 | `Composer\Pcre\Preg::match` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|     % |   Time | Samples | Caller                                                                      | Location                                                                 |
| ----: | -----: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 93.9% | 77.0ms |      77 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  6.1% |  5.0ms |       5 | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `composer/vendor/symfony/finder/Finder.php`                              |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                      | Location                                               |
| -----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 62.0ms |      62 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Samples | Caller                                                                          | Location                                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 55.0ms |      55 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Symfony\Component\Process\Process::start` (`composer/vendor/symfony/process/Process.php`)

|      % |   Time | Samples | Caller                                   | Location                                      |
| -----: | -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 42.0ms |      42 | `Symfony\Component\Process\Process::run` | `composer/vendor/symfony/process/Process.php` |

##### `Composer\Util\Filesystem::normalizePath` (`composer/src/Composer/Util/Filesystem.php`)

|     % |   Time | Samples | Caller                                             | Location                                               |
| ----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 50.0% | 15.0ms |      15 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 50.0% | 15.0ms |      15 | `Composer\Util\Filesystem::findShortestPath`       | `composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\Autoload\ClassLoader::loadClass` (`composer/vendor/composer/ClassLoader.php`)

|     % |  Time | Samples | Caller                                               | Location                                                                           |
| ----: | ----: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 21.1% | 4.0ms |       4 | `Composer\Factory::createComposer`                   | `composer/src/Composer/Factory.php`                                                |
| 15.8% | 3.0ms |       3 | `Composer\Console\Application::getDefaultCommands`   | `composer/src/Composer/Console/Application.php`                                    |
| 10.5% | 2.0ms |       2 | `Composer\Console\Application::doRun`                | `composer/src/Composer/Console/Application.php`                                    |
| 10.5% | 2.0ms |       2 | `JsonSchema\Constraints\Factory::createInstanceFor`  | `composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/Factory.php` |
|  5.3% | 1.0ms |       1 | `Symfony\Component\Console\Application::__construct` | `composer/vendor/symfony/console/Application.php`                                  |

##### `Composer\Util\Filesystem::findShortestPath` (`composer/src/Composer/Util/Filesystem.php`)

|      % |   Time | Samples | Caller                                             | Location                                               |
| -----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 18.0ms |      18 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`composer/vendor/symfony/console/Terminal.php`)

|      % |   Time | Samples | Caller                                               | Location                                       |
| -----: | -----: | ------: | ---------------------------------------------------- | ---------------------------------------------- |
| 100.0% | 16.0ms |       3 | `Symfony\Component\Console\Terminal::getSttyColumns` | `composer/vendor/symfony/console/Terminal.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |   Time | Samples | Caller                                                   | Location                                                              |
| -----: | -----: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 16.0ms |      16 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                                    | Location                                                                 |
| -----: | -----: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 15.0ms |      15 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `(anonymous)` (`composer/src/Composer/Console/Application.php:349`)

|      % |   Time | Samples | Caller                         | Location                                  |
| -----: | -----: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 15.0ms |      15 | `Composer\Util\Silencer::call` | `composer/src/Composer/Util/Silencer.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |   Time | Samples | Caller                                      | Location                                               |
| -----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 12.0ms |      12 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Autoload\AutoloadGenerator::getStaticFile` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                      | Location                                               |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 7.0ms |       7 | `Composer\Autoload\AutoloadGenerator::dump` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::filesAreEqual` (`composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Samples | Caller                               | Location                                    |
| -----: | ----: | ------: | ------------------------------------ | ------------------------------------------- |
| 100.0% | 4.0ms |       4 | `Composer\Util\Filesystem::safeCopy` | `composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Util\Filesystem::isAbsolutePath` (`composer/src/Composer/Util/Filesystem.php`)

|     % |  Time | Samples | Caller                                             | Location                                               |
| ----: | ----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 50.0% | 2.0ms |       2 | `Composer\Util\Filesystem::findShortestPath`       | `composer/src/Composer/Util/Filesystem.php`            |
| 50.0% | 2.0ms |       2 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\StreamContextFactory::getTlsDefaults` (`composer/src/Composer/Util/StreamContextFactory.php`)

|      % |  Time | Samples | Caller                                      | Location                                        |
| -----: | ----: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Util\HttpDownloader::__construct` | `composer/src/Composer/Util/HttpDownloader.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                          | Location                                                |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Command\DumpAutoloadCommand::execute` | `composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `(anonymous)` (`composer/src/Composer/Command/InstallCommand.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`)

|      % |  Time | Samples | Caller                     | Location                            |
| -----: | ----: | ------: | -------------------------- | ----------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Factory::create` | `composer/src/Composer/Factory.php` |

##### `(anonymous)` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Repository/PlatformRepository.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Repository/ComposerRepository.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Repository\RepositoryManager::createRepository` (`composer/src/Composer/Repository/RepositoryManager.php`)

|      % |  Time | Samples | Caller                                               | Location                                                 |
| -----: | ----: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `Composer\Repository\RepositoryFactory::createRepos` | `composer/src/Composer/Repository/RepositoryFactory.php` |

##### `(anonymous)` (`composer/src/Composer/Downloader/GitDownloader.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Downloader/ArchiveDownloader.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`composer/src/Composer/Package/Archiver/PharArchiver.php`)

|      % |  Time | Samples | Caller        | Location                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Samples | Caller                                           | Location                                              |
| -----: | ----: | ------: | ------------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `Symfony\Component\Console\Command\Command::run` | `composer/vendor/symfony/console/Command/Command.php` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                                  | Location                                                                 |
| -----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% |   3.94s |   3,250 | `(anonymous)`                                             | `profile.php`                                                            |
|  99.9% |   3.94s |   3,246 | `Symfony\Component\Console\Application::run`              | `composer/vendor/symfony/console/Application.php`                        |
|  99.9% |   3.94s |   3,246 | `Composer\Console\Application::run`                       | `composer/src/Composer/Console/Application.php`                          |
|  99.5% |   3.92s |   3,242 | `Composer\Console\Application::doRun`                     | `composer/src/Composer/Console/Application.php`                          |
|  92.7% |   3.65s |   3,185 | `Symfony\Component\Console\Application::doRun`            | `composer/vendor/symfony/console/Application.php`                        |
|  92.6% |   3.65s |   3,183 | `Symfony\Component\Console\Command\Command::run`          | `composer/vendor/symfony/console/Command/Command.php`                    |
|  92.6% |   3.65s |   3,183 | `Symfony\Component\Console\Application::doRunCommand`     | `composer/vendor/symfony/console/Application.php`                        |
|  74.1% |   2.92s |   2,922 | `Composer\Command\DumpAutoloadCommand::execute`           | `composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
|  74.0% |   2.92s |   2,920 | `Composer\Autoload\AutoloadGenerator::dump`               | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  70.1% |   2.76s |   2,766 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  63.4% |   2.50s |   2,501 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  41.8% |   1.64s |   1,648 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  25.9% |   1.02s |   1,020 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  23.5% | 928.0ms |     928 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  20.2% | 796.0ms |     796 | `Composer\Pcre\Preg::matchStrictGroups`                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  18.6% | 732.0ms |     261 | `Composer\Factory::createComposer`                        | `composer/src/Composer/Factory.php`                                      |
|  18.6% | 732.0ms |     261 | `Composer\Factory::create`                                | `composer/src/Composer/Factory.php`                                      |
|  18.6% | 732.0ms |     261 | `Composer\Console\Application::getComposer`               | `composer/src/Composer/Console/Application.php`                          |
|  18.6% | 732.0ms |     261 | `Composer\Command\BaseCommand::tryComposer`               | `composer/src/Composer/Command/BaseCommand.php`                          |
|  18.6% | 732.0ms |     261 | `Composer\Command\BaseCommand::initialize`                | `composer/src/Composer/Command/BaseCommand.php`                          |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                                                  | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 99.9% |   3.94s |   3,246 | `Symfony\Component\Console\Application::run`              | `composer/vendor/symfony/console/Application.php`                        |
| 92.7% |   3.65s |   3,185 | `Symfony\Component\Console\Application::doRun`            | `composer/vendor/symfony/console/Application.php`                        |
| 92.6% |   3.65s |   3,183 | `Symfony\Component\Console\Command\Command::run`          | `composer/vendor/symfony/console/Command/Command.php`                    |
| 92.6% |   3.65s |   3,183 | `Symfony\Component\Console\Application::doRunCommand`     | `composer/vendor/symfony/console/Application.php`                        |
| 70.1% |   2.76s |   2,766 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 63.4% |   2.50s |   2,501 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 41.8% |   1.64s |   1,648 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 25.9% |   1.02s |   1,020 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 23.5% | 928.0ms |     928 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
| 20.2% | 796.0ms |     796 | `Composer\Pcre\Preg::matchStrictGroups`                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
| 17.4% | 687.0ms |     216 | `Symfony\Component\Process\Process::run`                  | `composer/vendor/symfony/process/Process.php`                            |
| 16.2% | 639.0ms |     168 | `Symfony\Component\Process\Process::wait`                 | `composer/vendor/symfony/process/Process.php`                            |
| 16.0% | 632.0ms |     161 | `Symfony\Component\Process\Process::readPipes`            | `composer/vendor/symfony/process/Process.php`                            |
| 16.0% | 631.0ms |     160 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 13.6% | 537.0ms |     537 | `Composer\Pcre\Preg::match`                               | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  6.7% | 264.0ms |     264 | `Composer\Pcre\Preg::pregMatch`                           | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.9% | 195.0ms |     195 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`   | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.5% | 179.0ms |     179 | `Composer\Pcre\Preg::matchAll`                            | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.7% | 144.0ms |     144 | `Composer\Pcre\Preg::matchAllStrictGroups`                | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.3% | 130.0ms |     130 | `Composer\Pcre\Preg::enforceNonNullMatches`               | `composer/vendor/composer/pcre/src/Preg.php`                             |

##### Ours

|      % |    Time | Samples | Function                                                      | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |   3.94s |   3,250 | `(anonymous)`                                                 | `profile.php`                                                |
|  99.9% |   3.94s |   3,246 | `Composer\Console\Application::run`                           | `composer/src/Composer/Console/Application.php`              |
|  99.5% |   3.92s |   3,242 | `Composer\Console\Application::doRun`                         | `composer/src/Composer/Console/Application.php`              |
|  74.1% |   2.92s |   2,922 | `Composer\Command\DumpAutoloadCommand::execute`               | `composer/src/Composer/Command/DumpAutoloadCommand.php`      |
|  74.0% |   2.92s |   2,920 | `Composer\Autoload\AutoloadGenerator::dump`                   | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  18.6% | 732.0ms |     261 | `Composer\Factory::createComposer`                            | `composer/src/Composer/Factory.php`                          |
|  18.6% | 732.0ms |     261 | `Composer\Factory::create`                                    | `composer/src/Composer/Factory.php`                          |
|  18.6% | 732.0ms |     261 | `Composer\Console\Application::getComposer`                   | `composer/src/Composer/Console/Application.php`              |
|  18.6% | 732.0ms |     261 | `Composer\Command\BaseCommand::tryComposer`                   | `composer/src/Composer/Command/BaseCommand.php`              |
|  18.6% | 732.0ms |     261 | `Composer\Command\BaseCommand::initialize`                    | `composer/src/Composer/Command/BaseCommand.php`              |
|  17.7% | 697.0ms |     226 | `Composer\Package\Loader\RootPackageLoader::load`             | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  17.5% | 692.0ms |     221 | `Composer\Util\ProcessExecutor::doExecute`                    | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  17.5% | 692.0ms |     221 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  17.5% | 692.0ms |     221 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  17.5% | 690.0ms |     219 | `Composer\Util\ProcessExecutor::runProcess`                   | `composer/src/Composer/Util/ProcessExecutor.php`             |
|  11.6% | 458.0ms |     106 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   6.3% | 249.0ms |      39 | `Composer\Util\Silencer::call`                                | `composer/src/Composer/Util/Silencer.php`                    |
|   3.7% | 145.0ms |      32 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   3.0% | 120.0ms |     120 | `Composer\Autoload\AutoloadGenerator::getPathCode`            | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|   3.0% | 118.0ms |      63 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`profile.php`)

|     % |  Time | Samples | Callee                                      | Location                                        |
| ----: | ----: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 99.9% | 3.94s |   3,246 | `Composer\Console\Application::run`         | `composer/src/Composer/Console/Application.php` |
|  0.1% | 2.0ms |       2 | `Composer\Console\Application::__construct` | `composer/src/Composer/Console/Application.php` |
| <0.1% | 1.0ms |       1 | `(anonymous)`                               | `composer/src/bootstrap.php`                    |
| <0.1% | 1.0ms |       1 | `Composer\Autoload\ClassLoader::loadClass`  | `composer/vendor/composer/ClassLoader.php`      |

##### `Symfony\Component\Console\Application::run` (`composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Callee                                               | Location                                          |
| ----: | ----: | ------: | ---------------------------------------------------- | ------------------------------------------------- |
| 99.6% | 3.92s |   3,242 | `Composer\Console\Application::doRun`                | `composer/src/Composer/Console/Application.php`   |
|  0.2% | 9.0ms |       2 | `Symfony\Component\Console\Terminal::getHeight`      | `composer/vendor/symfony/console/Terminal.php`    |
|  0.2% | 7.0ms |       1 | `Symfony\Component\Console\Terminal::getWidth`       | `composer/vendor/symfony/console/Terminal.php`    |
| <0.1% | 1.0ms |       1 | `Symfony\Component\Console\Application::configureIO` | `composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::run` (`composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Callee                                       | Location                                          |
| -----: | ----: | ------: | -------------------------------------------- | ------------------------------------------------- |
| 100.0% | 3.94s |   3,246 | `Symfony\Component\Console\Application::run` | `composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`)

|     % |    Time | Samples | Callee                                         | Location                                          |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 93.2% |   3.65s |   3,185 | `Symfony\Component\Console\Application::doRun` | `composer/vendor/symfony/console/Application.php` |
|  6.3% | 246.0ms |      36 | `Composer\Util\Silencer::call`                 | `composer/src/Composer/Util/Silencer.php`         |
|  0.4% |  16.0ms |      16 | `Symfony\Component\Console\Application::find`  | `composer/vendor/symfony/console/Application.php` |
|  0.1% |   2.0ms |       2 | `Composer\Autoload\ClassLoader::loadClass`     | `composer/vendor/composer/ClassLoader.php`        |
| <0.1% |   1.0ms |       1 | `Composer\Util\Filesystem::isReadable`         | `composer/src/Composer/Util/Filesystem.php`       |

##### `Symfony\Component\Console\Application::doRun` (`composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Callee                                                 | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------------ | ------------------------------------------------- |
| 99.9% | 3.65s |   3,183 | `Symfony\Component\Console\Application::doRunCommand`  | `composer/vendor/symfony/console/Application.php` |
|  0.1% | 2.0ms |       2 | `Symfony\Component\Console\Application::getDefinition` | `composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`)

|     % |    Time | Samples | Callee                                          | Location                                                |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
| 80.0% |   2.92s |   2,922 | `Composer\Command\DumpAutoloadCommand::execute` | `composer/src/Composer/Command/DumpAutoloadCommand.php` |
| 20.0% | 732.0ms |     261 | `Composer\Command\BaseCommand::initialize`      | `composer/src/Composer/Command/BaseCommand.php`         |

##### `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`)

|      % |  Time | Samples | Callee                                           | Location                                              |
| -----: | ----: | ------: | ------------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 3.65s |   3,183 | `Symfony\Component\Console\Command\Command::run` | `composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`)

|     % |  Time | Samples | Callee                                             | Location                                               |
| ----: | ----: | ------: | -------------------------------------------------- | ------------------------------------------------------ |
| 99.9% | 2.92s |   2,920 | `Composer\Autoload\AutoloadGenerator::dump`        | `composer/src/Composer/Autoload/AutoloadGenerator.php` |
| <0.1% | 1.0ms |       1 | `Symfony\Component\Console\Input\Input::getOption` | `composer/vendor/symfony/console/Input/Input.php`      |

##### `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| 94.7% |   2.76s |   2,766 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  4.1% | 120.0ms |     120 | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.7% |  20.0ms |      20 | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.1% |   4.0ms |       4 | `Composer\Util\Filesystem::safeCopy`                      | `composer/src/Composer/Util/Filesystem.php`                              |
|  0.1% |   3.0ms |       3 | `Composer\Util\Filesystem::filePutContentsIfModified`     | `composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|     % |   Time | Samples | Callee                                                                          | Location                                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 90.4% |  2.50s |   2,501 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  2.9% | 79.0ms |      79 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  2.0% | 55.0ms |      55 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  0.9% | 25.0ms |      25 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  0.4% | 11.0ms |      11 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|     % |    Time | Samples | Callee                                             | Location                                                              |
| ----: | ------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------- |
| 65.9% |   1.64s |   1,648 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  5.8% | 144.0ms |     144 | `Composer\Pcre\Preg::matchAllStrictGroups`         | `composer/vendor/composer/pcre/src/Preg.php`                          |
|  1.5% |  38.0ms |      38 | `Composer\Pcre\Preg::matchAll`                     | `composer/vendor/composer/pcre/src/Preg.php`                          |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                                   | Location                                                              |
| ----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------- |
| 61.8% |   1.01s |   1,018 | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| 11.8% | 195.0ms |     195 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  1.3% |  21.0ms |      21 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.2% |   4.0ms |       4 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.1% |   1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileCleaner::peek`        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 88.6% | 904.0ms |     904 | `Composer\Pcre\Preg::isMatchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 85.8% | 796.0ms |     796 | `Composer\Pcre\Preg::matchStrictGroups` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                      | Location                                     |
| ----: | ------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 65.2% | 519.0ms |     519 | `Composer\Pcre\Preg::match`                 | `composer/vendor/composer/pcre/src/Preg.php` |
| 16.3% | 130.0ms |     130 | `Composer\Pcre\Preg::enforceNonNullMatches` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`)

|     % |    Time | Samples | Callee                                            | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------ |
| 95.2% | 697.0ms |     226 | `Composer\Package\Loader\RootPackageLoader::load` | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  1.9% |  14.0ms |      14 | `Composer\Json\JsonFile::validateSchema`          | `composer/src/Composer/Json/JsonFile.php`                    |
|  0.7% |   5.0ms |       5 | `Composer\Factory::createHttpDownloader`          | `composer/src/Composer/Factory.php`                          |
|  0.5% |   4.0ms |       4 | `Composer\Autoload\ClassLoader::loadClass`        | `composer/vendor/composer/ClassLoader.php`                   |
|  0.3% |   2.0ms |       2 | `Composer\Factory::createDownloadManager`         | `composer/src/Composer/Factory.php`                          |

##### `Composer\Factory::create` (`composer/src/Composer/Factory.php`)

|      % |    Time | Samples | Callee                             | Location                            |
| -----: | ------: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% | 732.0ms |     261 | `Composer\Factory::createComposer` | `composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`)

|      % |    Time | Samples | Callee                     | Location                            |
| -----: | ------: | ------: | -------------------------- | ----------------------------------- |
| 100.0% | 732.0ms |     261 | `Composer\Factory::create` | `composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                        |
| -----: | ------: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 732.0ms |     261 | `Composer\Console\Application::getComposer` | `composer/src/Composer/Console/Application.php` |

##### `Composer\Command\BaseCommand::initialize` (`composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                        |
| -----: | ------: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 100.0% | 732.0ms |     261 | `Composer\Command\BaseCommand::tryComposer` | `composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|     % |    Time | Samples | Callee                                                                 | Location                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.3% | 692.0ms |     221 | `Composer\Package\Version\VersionGuesser::guessVersion`                | `composer/src/Composer/Package/Version/VersionGuesser.php`       |
|  0.4% |   3.0ms |       3 | `Composer\Repository\RepositoryFactory::defaultRepos`                  | `composer/src/Composer/Repository/RepositoryFactory.php`         |
|  0.1% |   1.0ms |       1 | `Composer\Package\Loader\ValidatingArrayLoader::hasPackageNamingError` | `composer/src/Composer/Package/Loader/ValidatingArrayLoader.php` |
|  0.1% |   1.0ms |       1 | `Composer\Package\Loader\ArrayLoader::load`                            | `composer/src/Composer/Package/Loader/ArrayLoader.php`           |

##### `Composer\Util\ProcessExecutor::doExecute` (`composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                                  | Location                                              |
| ----: | ------: | ------: | ------------------------------------------------------- | ----------------------------------------------------- |
| 99.7% | 690.0ms |     219 | `Composer\Util\ProcessExecutor::runProcess`             | `composer/src/Composer/Util/ProcessExecutor.php`      |
|  0.1% |   1.0ms |       1 | `Symfony\Component\Process\Pipes\UnixPipes::__destruct` | `composer/vendor/symfony/process/Pipes/UnixPipes.php` |
|  0.1% |   1.0ms |       1 | `Symfony\Component\Process\Process::__destruct`         | `composer/vendor/symfony/process/Process.php`         |

##### `Composer\Util\ProcessExecutor::execute` (`composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Samples | Callee                                     | Location                                         |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| 100.0% | 692.0ms |     221 | `Composer\Util\ProcessExecutor::doExecute` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
| 66.2% | 458.0ms |     106 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php` |
| 17.1% | 118.0ms |      63 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.7% |  60.0ms |      28 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.1% |  56.0ms |      24 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                     | Location                                                    |
| ----: | ------: | ------: | ------------------------------------------ | ----------------------------------------------------------- |
| 99.6% | 687.0ms |     216 | `Symfony\Component\Process\Process::run`   | `composer/vendor/symfony/process/Process.php`               |
|  0.3% |   2.0ms |       2 | `Seld\Signal\SignalHandler::create`        | `composer/vendor/seld/signal-handler/src/SignalHandler.php` |
|  0.1% |   1.0ms |       1 | `Composer\Autoload\ClassLoader::loadClass` | `composer/vendor/composer/ClassLoader.php`                  |

##### `Symfony\Component\Process\Process::run` (`composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                     | Location                                      |
| ----: | ------: | ------: | ------------------------------------------ | --------------------------------------------- |
| 93.0% | 639.0ms |     168 | `Symfony\Component\Process\Process::wait`  | `composer/vendor/symfony/process/Process.php` |
|  7.0% |  48.0ms |      48 | `Symfony\Component\Process\Process::start` | `composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::wait` (`composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                            | Location                                      |
| ----: | ------: | ------: | ------------------------------------------------- | --------------------------------------------- |
| 98.6% | 630.0ms |     159 | `Symfony\Component\Process\Process::readPipes`    | `composer/vendor/symfony/process/Process.php` |
|  0.5% |   3.0ms |       3 | `Symfony\Component\Process\Process::isRunning`    | `composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::checkTimeout` | `composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::updateStatus` | `composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                                    | Location                                              |
| ----: | ------: | ------: | --------------------------------------------------------- | ----------------------------------------------------- |
| 99.8% | 631.0ms |     160 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `composer/vendor/symfony/process/Pipes/UnixPipes.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|    % |  Time | Samples | Callee                                                   | Location                                                  |
| ---: | ----: | ------: | -------------------------------------------------------- | --------------------------------------------------------- |
| 0.2% | 1.0ms |       1 | `Symfony\Component\Process\Pipes\AbstractPipes::unblock` | `composer/vendor/symfony/process/Pipes/AbstractPipes.php` |
| 0.2% | 1.0ms |       1 | `Symfony\Component\Process\Pipes\AbstractPipes::write`   | `composer/vendor/symfony/process/Pipes/AbstractPipes.php` |

##### `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                   | Location                                     |
| ----: | ------: | ------: | ---------------------------------------- | -------------------------------------------- |
| 49.2% | 264.0ms |     264 | `Composer\Pcre\Preg::pregMatch`          | `composer/vendor/composer/pcre/src/Preg.php` |
| 19.2% | 103.0ms |     103 | `Composer\Pcre\Preg::checkOffsetCapture` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
| 66.8% | 306.0ms |      73 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`           |
| 31.7% | 145.0ms |      32 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `composer/src/Composer/Package/Version/VersionGuesser.php` |
|  1.5% |   7.0ms |       1 | `Composer\Util\Git::getNoShowSignatureFlag`                   | `composer/src/Composer/Util/Git.php`                       |

##### `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)

|    % |   Time | Samples | Callee        | Location                                            |
| ---: | -----: | ------: | ------------- | --------------------------------------------------- |
| 6.0% | 15.0ms |      15 | `(anonymous)` | `composer/src/Composer/Console/Application.php:349` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|    % |  Time | Samples | Callee                                            | Location                                                              |
| ---: | ----: | ------: | ------------------------------------------------- | --------------------------------------------------------------------- |
| 0.5% | 1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileCleaner::peek` | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% | 145.0ms |      32 | `Composer\Util\ProcessExecutor::execute` | `composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                       | Location                                     |
| ----: | ------: | ------: | -------------------------------------------- | -------------------------------------------- |
| 97.9% | 141.0ms |     141 | `Composer\Pcre\Preg::matchAll`               | `composer/vendor/composer/pcre/src/Preg.php` |
|  0.7% |   1.0ms |       1 | `Composer\Pcre\Preg::enforceNonNullMatchAll` | `composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |   Time | Samples | Callee                                       | Location                                    |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------------------- |
| 61.7% | 74.0ms |      74 | `Composer\Util\Filesystem::findShortestPath` | `composer/src/Composer/Util/Filesystem.php` |
| 26.7% | 32.0ms |      32 | `Composer\Util\Filesystem::normalizePath`    | `composer/src/Composer/Util/Filesystem.php` |
|  1.7% |  2.0ms |       2 | `Composer\Util\Filesystem::isAbsolutePath`   | `composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% | 118.0ms |      63 | `Composer\Util\ProcessExecutor::execute` | `composer/src/Composer/Util/ProcessExecutor.php` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `Composer\Console\Application::doRun` (`composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`composer/src/Composer/Console/Application.php`) ← `(anonymous)` (`profile.php`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 17.0% | 671.0ms |     671 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10.3% | 408.0ms |     408 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  7.1% | 279.0ms |      46 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                 |
|  6.3% | 248.0ms |     248 | `Composer\Pcre\Preg::pregMatch` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                |
|  5.9% | 231.0ms |      21 | `Composer\Util\Silencer::call` (`composer/src/Composer/Util/Silencer.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  4.9% | 194.0ms |     194 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  4.1% | 163.0ms |     163 | `Composer\Pcre\Preg::match` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.6% | 141.0ms |     141 | `Composer\Pcre\Preg::matchAll` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.5% | 140.0ms |     140 | `Composer\Pcre\Preg::matchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.5% | 138.0ms |      25 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` |
|  3.2% | 127.0ms |     127 | `Composer\Pcre\Preg::enforceNonNullMatches` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                  |
|  3.2% | 126.0ms |     126 | `Composer\Pcre\Preg::isMatchStrictGroups` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.9% | 116.0ms |     116 | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.5% |  98.0ms |      98 | `Composer\Pcre\Preg::checkOffsetCapture` (`composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                       |
|  2.5% |  97.0ms |      42 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                              |
|  2.0% |  77.0ms |      77 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.6% |  62.0ms |      62 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.4% |  55.0ms |      55 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` (`composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.4% |  54.0ms |      22 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessSvnVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                 |
|  1.3% |  53.0ms |      21 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessHgVersion` (`composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                  |

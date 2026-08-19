# Sampling profile diff

Took 3.89s (+4.00ms, +0.1%) over 3,217 samples → 3,219 samples (1.2ms per sample).

| Category    | Change |   Delta |     % |          Time |       Samples |
| ----------- | -----: | ------: | ----: | ------------: | ------------: |
| Third-party |  +0.1% | +4.00ms | 91.4% | 3.55s → 3.56s | 3,073 → 3,075 |
| Ours        |   0.0% |     0ms |  8.6% |       334.0ms |           144 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |   Samples | Function                                                                    | Location                                                                 |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  +51.9% | +27.00ms |   1.3% → 2.0% |   52.0ms → 79.0ms |   52 → 77 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  +25.0% | +21.00ms |   2.2% → 2.7% |  84.0ms → 105.0ms |  84 → 105 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                             |
|   +2.4% | +16.00ms | 16.9% → 17.3% | 657.0ms → 673.0ms | 657 → 672 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  +44.8% | +13.00ms |   0.7% → 1.1% |   29.0ms → 42.0ms |   29 → 42 | `Composer\Util\Filesystem::normalizePath`                                   | `composer/src/Composer/Util/Filesystem.php`                              |
|  +28.6% | +10.00ms |   0.9% → 1.2% |   35.0ms → 45.0ms |   35 → 45 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  +13.5% |  +5.00ms |   1.0% → 1.1% |   37.0ms → 42.0ms |   37 → 42 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                            |
|   +1.8% |  +5.00ms |   7.2% → 7.3% | 279.0ms → 284.0ms | 279 → 283 | `Composer\Pcre\Preg::pregMatch`                                             | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  +50.0% |  +5.00ms |   0.3% → 0.4% |   10.0ms → 15.0ms |   10 → 15 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                  | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  +44.4% |  +4.00ms |   0.2% → 0.3% |    9.0ms → 13.0ms |    9 → 13 | `Composer\Util\Filesystem::findShortestPath`                                | `composer/src/Composer/Util/Filesystem.php`                              |
| +133.3% |  +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms |     3 → 7 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`                    | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| +133.3% |  +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms |     3 → 6 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`     | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 2 | `Symfony\Component\Process\Process::wait`                                   | `composer/vendor/symfony/process/Process.php`                            |
|   +1.6% |  +3.00ms |   4.8% → 4.9% | 187.0ms → 190.0ms | 187 → 190 | `Composer\Pcre\Preg::matchAll`                                              | `composer/vendor/composer/pcre/src/Preg.php`                             |
|   +2.4% |  +3.00ms |   3.2% → 3.3% | 124.0ms → 127.0ms | 124 → 127 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 4 | `Composer\Util\Filesystem::filesAreEqual`                                   | `composer/src/Composer/Util/Filesystem.php`                              |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |    8 → 11 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`        | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
| +150.0% |  +3.00ms |          0.1% |     2.0ms → 5.0ms |     2 → 5 | `Composer\ClassMapGenerator\PhpFileCleaner::peek`                           | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |     0 → 3 | `Composer\ClassMapGenerator\FileList::add`                                  | `composer/vendor/composer/class-map-generator/src/FileList.php`          |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |     0 → 3 | `(anonymous)`                                                               | `vendor/composer/autoload_namespaces.php`                                |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |     1 → 3 | `Composer\Console\Application::doRun`                                       | `composer/src/Composer/Console/Application.php`                          |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function                                                                        | Location                                                                     |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  +51.9% | +27.00ms |   1.3% → 2.0% |   52.0ms → 79.0ms |   52 → 77 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                       | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  +25.0% | +21.00ms |   2.2% → 2.7% |  84.0ms → 105.0ms |  84 → 105 | `Composer\Pcre\Preg::checkOffsetCapture`                                        | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|   +2.4% | +16.00ms | 16.9% → 17.3% | 657.0ms → 673.0ms | 657 → 672 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  +28.6% | +10.00ms |   0.9% → 1.2% |   35.0ms → 45.0ms |   35 → 45 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren`     | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
|  +13.5% |  +5.00ms |   1.0% → 1.1% |   37.0ms → 42.0ms |   37 → 42 | `Symfony\Component\Process\Process::start`                                      | `composer/vendor/symfony/process/Process.php`                                |
|   +1.8% |  +5.00ms |   7.2% → 7.3% | 279.0ms → 284.0ms | 279 → 283 | `Composer\Pcre\Preg::pregMatch`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|  +50.0% |  +5.00ms |   0.3% → 0.4% |   10.0ms → 15.0ms |   10 → 15 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                      | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
| +133.3% |  +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms |     3 → 7 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`                        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
| +133.3% |  +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms |     3 → 6 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 2 | `Symfony\Component\Process\Process::wait`                                       | `composer/vendor/symfony/process/Process.php`                                |
|   +1.6% |  +3.00ms |   4.8% → 4.9% | 187.0ms → 190.0ms | 187 → 190 | `Composer\Pcre\Preg::matchAll`                                                  | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|   +2.4% |  +3.00ms |   3.2% → 3.3% | 124.0ms → 127.0ms | 124 → 127 | `Composer\Pcre\Preg::enforceNonNullMatches`                                     | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |    8 → 11 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`            | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
| +150.0% |  +3.00ms |          0.1% |     2.0ms → 5.0ms |     2 → 5 | `Composer\ClassMapGenerator\PhpFileCleaner::peek`                               | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |     0 → 3 | `Composer\ClassMapGenerator\FileList::add`                                      | `composer/vendor/composer/class-map-generator/src/FileList.php`              |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |     0 → 3 | `(anonymous)`                                                                   | `vendor/composer/autoload_namespaces.php`                                    |
|   +1.4% |  +2.00ms |          3.8% | 146.0ms → 148.0ms | 146 → 148 | `Composer\Pcre\Preg::match`                                                     | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |     0 → 2 | `Symfony\Component\Finder\Iterator\PathFilterIterator::accept`                  | `composer/vendor/symfony/finder/Iterator/PathFilterIterator.php`             |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |     0 → 2 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::__construct` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |     0 → 2 | `Composer\ClassMapGenerator\ClassMapGenerator::getCwd`                          | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |

##### Ours

|  Change |    Delta |            % |            Time | Samples | Function                                          | Location                                                     |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------ |
|  +44.8% | +13.00ms |  0.7% → 1.1% | 29.0ms → 42.0ms | 29 → 42 | `Composer\Util\Filesystem::normalizePath`         | `composer/src/Composer/Util/Filesystem.php`                  |
|  +44.4% |  +4.00ms |  0.2% → 0.3% |  9.0ms → 13.0ms |  9 → 13 | `Composer\Util\Filesystem::findShortestPath`      | `composer/src/Composer/Util/Filesystem.php`                  |
| +300.0% |  +3.00ms | <0.1% → 0.1% |   1.0ms → 4.0ms |   1 → 4 | `Composer\Util\Filesystem::filesAreEqual`         | `composer/src/Composer/Util/Filesystem.php`                  |
| +200.0% |  +2.00ms | <0.1% → 0.1% |   1.0ms → 3.0ms |   1 → 3 | `Composer\Console\Application::doRun`             | `composer/src/Composer/Console/Application.php`              |
|     new |  +2.00ms |  0.0% → 0.1% |     0ms → 2.0ms |   0 → 2 | `Composer\Util\Http\CurlDownloader::__construct`  | `composer/src/Composer/Util/Http/CurlDownloader.php`         |
| +200.0% |  +2.00ms | <0.1% → 0.1% |   1.0ms → 3.0ms |   1 → 3 | `Composer\Json\JsonFile::read`                    | `composer/src/Composer/Json/JsonFile.php`                    |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                                     | `composer/src/Composer/Console/Application.php`              |
|   +9.1% |  +1.00ms |         0.3% | 11.0ms → 12.0ms | 11 → 12 | `(anonymous)`                                     | `composer/src/Composer/Console/Application.php:353`          |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                                     | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Package\Loader\RootPackageLoader::load` | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\IO\ConsoleIO::doWrite`                  | `composer/src/Composer/IO/ConsoleIO.php`                     |
| +100.0% |  +1.00ms | <0.1% → 0.1% |   1.0ms → 2.0ms |   1 → 2 | `Composer\Util\Platform::getCwd`                  | `composer/src/Composer/Util/Platform.php`                    |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Downloader\FileDownloader::__construct` | `composer/src/Composer/Downloader/FileDownloader.php`        |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                                     | `composer/src/Composer/Package/PackageInterface.php`         |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                                     | `composer/src/Composer/Command/RequireCommand.php`           |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                                     | `composer/src/Composer/Command/ReinstallCommand.php`         |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Command\DependsCommand::configure`      | `composer/src/Composer/Command/DependsCommand.php`           |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Util\Platform::getEnv`                  | `composer/src/Composer/Util/Platform.php`                    |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Util\Platform::isTty`                   | `composer/src/Composer/Util/Platform.php`                    |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\IO\ConsoleIO::isDebug`                  | `composer/src/Composer/IO/ConsoleIO.php`                     |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |   Samples | Function                                                                   | Location                                                                     |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -14.8% | -22.00ms |   3.8% → 3.3% | 149.0ms → 127.0ms | 149 → 124 | `Composer\Pcre\Preg::matchStrictGroups`                                    | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|   -5.9% | -13.00ms |   5.7% → 5.4% | 222.0ms → 209.0ms | 222 → 209 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                    | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|  -61.9% | -13.00ms |   0.5% → 0.2% |    21.0ms → 8.0ms |    21 → 8 | `Composer\Pcre\Preg::isMatch`                                              | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|   -1.9% | -12.00ms | 16.4% → 16.1% | 638.0ms → 626.0ms | 163 → 158 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                  | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                        |
|  -44.4% | -12.00ms |   0.7% → 0.4% |   27.0ms → 15.0ms |   27 → 15 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`              | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  -61.5% |  -8.00ms |   0.3% → 0.1% |    13.0ms → 5.0ms |    13 → 5 | `Symfony\Component\Process\Process::getDefaultEnv`                         | `composer/vendor/symfony/process/Process.php`                                |
|  -57.1% |  -8.00ms |   0.4% → 0.2% |    14.0ms → 6.0ms |    14 → 6 | `Composer\Autoload\AutoloadGenerator::getPathCode`                         | `composer/src/Composer/Autoload/AutoloadGenerator.php`                       |
|   -1.5% |  -6.00ms | 10.6% → 10.4% | 411.0ms → 405.0ms | 411 → 405 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                         | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|   -4.3% |  -6.00ms |   3.6% → 3.4% | 139.0ms → 133.0ms | 139 → 133 | `Composer\Pcre\Preg::isMatchStrictGroups`                                  | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|   -5.3% |  -6.00ms |   2.9% → 2.7% | 113.0ms → 107.0ms | 113 → 107 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                         | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|  -62.5% |  -5.00ms |   0.2% → 0.1% |     8.0ms → 3.0ms |     8 → 3 | `Composer\Autoload\AutoloadGenerator::dump`                                | `composer/src/Composer/Autoload/AutoloadGenerator.php`                       |
|  -38.5% |  -5.00ms |   0.3% → 0.2% |    13.0ms → 8.0ms |    13 → 8 | `(anonymous)`                                                              | `vendor/composer/autoload_classmap.php`                                      |
|  -26.7% |  -4.00ms |   0.4% → 0.3% |   15.0ms → 11.0ms |   15 → 11 | `Composer\Pcre\Preg::replaceCallback`                                      | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|  -50.0% |  -4.00ms |   0.2% → 0.1% |     8.0ms → 4.0ms |     8 → 4 | `Symfony\Component\Finder\Iterator\MultiplePcreFilterIterator::isAccepted` | `composer/vendor/symfony/finder/Iterator/MultiplePcreFilterIterator.php`     |
|  -75.0% |  -3.00ms |  0.1% → <0.1% |     4.0ms → 1.0ms |     4 → 1 | `Composer\Util\StreamContextFactory::getTlsDefaults`                       | `composer/src/Composer/Util/StreamContextFactory.php`                        |
|  -60.0% |  -3.00ms |          0.1% |     5.0ms → 2.0ms |     5 → 2 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::accept` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  -60.0% |  -3.00ms |          0.1% |     5.0ms → 2.0ms |     5 → 2 | `Composer\Autoload\AutoloadGenerator::getStaticFile`                       | `composer/src/Composer/Autoload/AutoloadGenerator.php`                       |
| removed |  -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Symfony\Component\Process\Process::updateStatus`                          | `composer/vendor/symfony/process/Process.php`                                |
| removed |  -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Composer\Util\Silencer::suppress`                                         | `composer/src/Composer/Util/Silencer.php`                                    |
| removed |  -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Composer\Console\Application::__construct`                                | `composer/src/Composer/Console/Application.php`                              |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function                                                                    | Location                                                                     |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -14.8% | -22.00ms |   3.8% → 3.3% | 149.0ms → 127.0ms | 149 → 124 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|   -5.9% | -13.00ms |   5.7% → 5.4% | 222.0ms → 209.0ms | 222 → 209 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|  -61.9% | -13.00ms |   0.5% → 0.2% |    21.0ms → 8.0ms |    21 → 8 | `Composer\Pcre\Preg::isMatch`                                               | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|   -1.9% | -12.00ms | 16.4% → 16.1% | 638.0ms → 626.0ms | 163 → 158 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                        |
|  -44.4% | -12.00ms |   0.7% → 0.4% |   27.0ms → 15.0ms |   27 → 15 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  -61.5% |  -8.00ms |   0.3% → 0.1% |    13.0ms → 5.0ms |    13 → 5 | `Symfony\Component\Process\Process::getDefaultEnv`                          | `composer/vendor/symfony/process/Process.php`                                |
|   -1.5% |  -6.00ms | 10.6% → 10.4% | 411.0ms → 405.0ms | 411 → 405 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|   -4.3% |  -6.00ms |   3.6% → 3.4% | 139.0ms → 133.0ms | 139 → 133 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|   -5.3% |  -6.00ms |   2.9% → 2.7% | 113.0ms → 107.0ms | 113 → 107 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|  -38.5% |  -5.00ms |   0.3% → 0.2% |    13.0ms → 8.0ms |    13 → 8 | `(anonymous)`                                                               | `vendor/composer/autoload_classmap.php`                                      |
|  -26.7% |  -4.00ms |   0.4% → 0.3% |   15.0ms → 11.0ms |   15 → 11 | `Composer\Pcre\Preg::replaceCallback`                                       | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|  -50.0% |  -4.00ms |   0.2% → 0.1% |     8.0ms → 4.0ms |     8 → 4 | `Symfony\Component\Finder\Iterator\MultiplePcreFilterIterator::isAccepted`  | `composer/vendor/symfony/finder/Iterator/MultiplePcreFilterIterator.php`     |
|  -60.0% |  -3.00ms |          0.1% |     5.0ms → 2.0ms |     5 → 2 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::accept`  | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
| removed |  -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Symfony\Component\Process\Process::updateStatus`                           | `composer/vendor/symfony/process/Process.php`                                |
| removed |  -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Symfony\Component\Console\Command\Command::getDefaultName`                 | `composer/vendor/symfony/console/Command/Command.php`                        |
| removed |  -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Symfony\Component\Console\Command\Command::validateName`                   | `composer/vendor/symfony/console/Command/Command.php`                        |
|   -3.4% |  -2.00ms |   1.5% → 1.4% |   58.0ms → 56.0ms |   58 → 56 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
| removed |  -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Seld\Signal\SignalHandler::unregister`                                     | `composer/vendor/seld/signal-handler/src/SignalHandler.php`                  |
| removed |  -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Symfony\Component\Console\Input\InputDefinition::__construct`              | `composer/vendor/symfony/console/Input/InputDefinition.php`                  |
| removed |  -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Symfony\Component\Console\Formatter\OutputFormatter::formatAndWrap`        | `composer/vendor/symfony/console/Formatter/OutputFormatter.php`              |

##### Ours

|  Change |   Delta |            % |           Time | Samples | Function                                             | Location                                                  |
| ------: | ------: | -----------: | -------------: | ------: | ---------------------------------------------------- | --------------------------------------------------------- |
|  -57.1% | -8.00ms |  0.4% → 0.2% | 14.0ms → 6.0ms |  14 → 6 | `Composer\Autoload\AutoloadGenerator::getPathCode`   | `composer/src/Composer/Autoload/AutoloadGenerator.php`    |
|  -62.5% | -5.00ms |  0.2% → 0.1% |  8.0ms → 3.0ms |   8 → 3 | `Composer\Autoload\AutoloadGenerator::dump`          | `composer/src/Composer/Autoload/AutoloadGenerator.php`    |
|  -75.0% | -3.00ms | 0.1% → <0.1% |  4.0ms → 1.0ms |   4 → 1 | `Composer\Util\StreamContextFactory::getTlsDefaults` | `composer/src/Composer/Util/StreamContextFactory.php`     |
|  -60.0% | -3.00ms |         0.1% |  5.0ms → 2.0ms |   5 → 2 | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `composer/src/Composer/Autoload/AutoloadGenerator.php`    |
| removed | -3.00ms |  0.1% → 0.0% |    3.0ms → 0ms |   3 → 0 | `Composer\Util\Silencer::suppress`                   | `composer/src/Composer/Util/Silencer.php`                 |
| removed | -2.00ms |  0.1% → 0.0% |    2.0ms → 0ms |   2 → 0 | `Composer\Console\Application::__construct`          | `composer/src/Composer/Console/Application.php`           |
|  -66.7% | -2.00ms | 0.1% → <0.1% |  3.0ms → 1.0ms |   3 → 1 | `Composer\Util\ErrorHandler::handle`                 | `composer/src/Composer/Util/ErrorHandler.php`             |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `(anonymous)`                                        | `composer/src/Composer/IO/BaseIO.php`                     |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `(anonymous)`                                        | `composer/src/Composer/Command/UpdateCommand.php`         |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `(anonymous)`                                        | `composer/src/Composer/Command/ArchiveCommand.php`        |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `(anonymous)`                                        | `composer/src/Composer/Command/RemoveCommand.php`         |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `Composer\Json\JsonFile::validateSchema`             | `composer/src/Composer/Json/JsonFile.php`                 |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `(anonymous)`                                        | `composer/src/Composer/Package/Loader/ArrayLoader.php`    |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `(anonymous)`                                        | `composer/src/Composer/Downloader/PathDownloader.php`     |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `(anonymous)`                                        | `composer/src/Composer/Package/Archiver/PharArchiver.php` |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `Composer\Util\Filesystem::ensureDirectoryExists`    | `composer/src/Composer/Util/Filesystem.php`               |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `Composer\Command\DumpAutoloadCommand::execute`      | `composer/src/Composer/Command/DumpAutoloadCommand.php`   |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `Composer\Config::get`                               | `composer/src/Composer/Config.php`                        |
|  -25.0% | -1.00ms |         0.1% |  4.0ms → 3.0ms |   4 → 3 | `Composer\Util\Filesystem::isReadable`               | `composer/src/Composer/Util/Filesystem.php`               |
| removed | -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `Composer\Util\Silencer::restore`                    | `composer/src/Composer/Util/Silencer.php`                 |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |    Delta |             % |              Time |       Samples | Function                                                                        | Location                                                                     |
| -----: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  +1.0% | +29.00ms | 73.7% → 74.4% |     2.87s → 2.89s | 2,870 → 2,891 | `Composer\Autoload\AutoloadGenerator::dump`                                     | `composer/src/Composer/Autoload/AutoloadGenerator.php`                       |
|  +5.7% | +29.00ms | 13.0% → 13.8% | 507.0ms → 536.0ms |     507 → 535 | `Composer\Pcre\Preg::match`                                                     | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|  +0.9% | +27.00ms | 73.8% → 74.4% |     2.87s → 2.89s | 2,872 → 2,891 | `Composer\Command\DumpAutoloadCommand::execute`                                 | `composer/src/Composer/Command/DumpAutoloadCommand.php`                      |
|  +1.0% | +26.00ms | 69.9% → 70.5% |     2.72s → 2.74s | 2,721 → 2,739 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                       | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
| +45.1% | +23.00ms |   1.3% → 1.9% |   51.0ms → 74.0ms |       51 → 74 | `Composer\Util\Filesystem::normalizePath`                                       | `composer/src/Composer/Util/Filesystem.php`                                  |
| +25.0% | +21.00ms |   2.2% → 2.7% |  84.0ms → 105.0ms |      84 → 105 | `Composer\Pcre\Preg::checkOffsetCapture`                                        | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|  +0.4% | +13.00ms | 93.0% → 93.2% |     3.61s → 3.63s | 3,143 → 3,153 | `Symfony\Component\Console\Application::doRun`                                  | `composer/vendor/symfony/console/Application.php`                            |
|  +0.3% | +12.00ms | 92.9% → 93.1% |     3.61s → 3.62s | 3,142 → 3,151 | `Symfony\Component\Console\Command\Command::run`                                | `composer/vendor/symfony/console/Command/Command.php`                        |
|  +0.3% | +12.00ms | 92.9% → 93.1% |     3.61s → 3.62s | 3,142 → 3,151 | `Symfony\Component\Console\Application::doRunCommand`                           | `composer/vendor/symfony/console/Application.php`                            |
|  +0.3% | +11.00ms | 99.4% → 99.6% |     3.86s → 3.88s | 3,204 → 3,212 | `Composer\Console\Application::doRun`                                           | `composer/src/Composer/Console/Application.php`                              |
| +31.4% | +11.00ms |   0.9% → 1.2% |   35.0ms → 46.0ms |       35 → 46 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  +0.3% | +10.00ms | 99.7% → 99.9% |     3.88s → 3.89s | 3,207 → 3,215 | `Symfony\Component\Console\Application::run`                                    | `composer/vendor/symfony/console/Application.php`                            |
|  +0.3% | +10.00ms | 99.7% → 99.9% |     3.88s → 3.89s | 3,207 → 3,215 | `Composer\Console\Application::run`                                             | `composer/src/Composer/Console/Application.php`                              |
| +28.6% | +10.00ms |   0.9% → 1.2% |   35.0ms → 45.0ms |       35 → 45 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren`     | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
|  +7.3% |  +8.00ms |   2.8% → 3.0% | 110.0ms → 118.0ms |     110 → 118 | `Composer\Autoload\AutoloadGenerator::getPathCode`                              | `composer/src/Composer/Autoload/AutoloadGenerator.php`                       |
| +57.1% |  +8.00ms |   0.4% → 0.6% |   14.0ms → 22.0ms |       14 → 22 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`                        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|  +0.8% |  +6.00ms | 19.7% → 19.8% | 766.0ms → 772.0ms |     766 → 768 | `Composer\Pcre\Preg::matchStrictGroups`                                         | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|  +9.4% |  +6.00ms |   1.6% → 1.8% |   64.0ms → 70.0ms |       64 → 70 | `Composer\Util\Filesystem::findShortestPath`                                    | `composer/src/Composer/Util/Filesystem.php`                                  |
|  +1.8% |  +5.00ms |   7.2% → 7.3% | 279.0ms → 284.0ms |     279 → 283 | `Composer\Pcre\Preg::pregMatch`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                                 |
| +50.0% |  +5.00ms |   0.3% → 0.4% |   10.0ms → 15.0ms |       10 → 15 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                      | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |

##### Third-party

|  Change |    Delta |             % |              Time |       Samples | Function                                                                        | Location                                                                                       |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|   +5.7% | +29.00ms | 13.0% → 13.8% | 507.0ms → 536.0ms |     507 → 535 | `Composer\Pcre\Preg::match`                                                     | `composer/vendor/composer/pcre/src/Preg.php`                                                   |
|   +1.0% | +26.00ms | 69.9% → 70.5% |     2.72s → 2.74s | 2,721 → 2,739 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                       | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`                       |
|  +25.0% | +21.00ms |   2.2% → 2.7% |  84.0ms → 105.0ms |      84 → 105 | `Composer\Pcre\Preg::checkOffsetCapture`                                        | `composer/vendor/composer/pcre/src/Preg.php`                                                   |
|   +0.4% | +13.00ms | 93.0% → 93.2% |     3.61s → 3.63s | 3,143 → 3,153 | `Symfony\Component\Console\Application::doRun`                                  | `composer/vendor/symfony/console/Application.php`                                              |
|   +0.3% | +12.00ms | 92.9% → 93.1% |     3.61s → 3.62s | 3,142 → 3,151 | `Symfony\Component\Console\Command\Command::run`                                | `composer/vendor/symfony/console/Command/Command.php`                                          |
|   +0.3% | +12.00ms | 92.9% → 93.1% |     3.61s → 3.62s | 3,142 → 3,151 | `Symfony\Component\Console\Application::doRunCommand`                           | `composer/vendor/symfony/console/Application.php`                                              |
|  +31.4% | +11.00ms |   0.9% → 1.2% |   35.0ms → 46.0ms |       35 → 46 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`                   |
|   +0.3% | +10.00ms | 99.7% → 99.9% |     3.88s → 3.89s | 3,207 → 3,215 | `Symfony\Component\Console\Application::run`                                    | `composer/vendor/symfony/console/Application.php`                                              |
|  +28.6% | +10.00ms |   0.9% → 1.2% |   35.0ms → 45.0ms |       35 → 45 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren`     | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`                       |
|  +57.1% |  +8.00ms |   0.4% → 0.6% |   14.0ms → 22.0ms |       14 → 22 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`                        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`                          |
|   +0.8% |  +6.00ms | 19.7% → 19.8% | 766.0ms → 772.0ms |     766 → 768 | `Composer\Pcre\Preg::matchStrictGroups`                                         | `composer/vendor/composer/pcre/src/Preg.php`                                                   |
|   +1.8% |  +5.00ms |   7.2% → 7.3% | 279.0ms → 284.0ms |     279 → 283 | `Composer\Pcre\Preg::pregMatch`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                                                   |
|  +50.0% |  +5.00ms |   0.3% → 0.4% |   10.0ms → 15.0ms |       10 → 15 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                      | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`                          |
|  +50.0% |  +4.00ms |   0.2% → 0.3% |    8.0ms → 12.0ms |        8 → 11 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`                       |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `JsonSchema\Constraints\UndefinedConstraint::check`                             | `composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/UndefinedConstraint.php` |
|   +1.6% |  +3.00ms |          4.9% | 189.0ms → 192.0ms |     189 → 192 | `Composer\Pcre\Preg::matchAll`                                                  | `composer/vendor/composer/pcre/src/Preg.php`                                                   |
|   +2.4% |  +3.00ms |   3.2% → 3.3% | 124.0ms → 127.0ms |     124 → 127 | `Composer\Pcre\Preg::enforceNonNullMatches`                                     | `composer/vendor/composer/pcre/src/Preg.php`                                                   |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |        8 → 11 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`            | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`                       |
| +150.0% |  +3.00ms |          0.1% |     2.0ms → 5.0ms |         2 → 5 | `Composer\ClassMapGenerator\PhpFileCleaner::peek`                               | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`                          |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Symfony\Component\Console\Input\InputOption::__construct`                      | `composer/vendor/symfony/console/Input/InputOption.php`                                        |

##### Ours

|  Change |    Delta |             % |              Time |       Samples | Function                                                   | Location                                                   |
| ------: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------------------- | ---------------------------------------------------------- |
|   +1.0% | +29.00ms | 73.7% → 74.4% |     2.87s → 2.89s | 2,870 → 2,891 | `Composer\Autoload\AutoloadGenerator::dump`                | `composer/src/Composer/Autoload/AutoloadGenerator.php`     |
|   +0.9% | +27.00ms | 73.8% → 74.4% |     2.87s → 2.89s | 2,872 → 2,891 | `Composer\Command\DumpAutoloadCommand::execute`            | `composer/src/Composer/Command/DumpAutoloadCommand.php`    |
|  +45.1% | +23.00ms |   1.3% → 1.9% |   51.0ms → 74.0ms |       51 → 74 | `Composer\Util\Filesystem::normalizePath`                  | `composer/src/Composer/Util/Filesystem.php`                |
|   +0.3% | +11.00ms | 99.4% → 99.6% |     3.86s → 3.88s | 3,204 → 3,212 | `Composer\Console\Application::doRun`                      | `composer/src/Composer/Console/Application.php`            |
|   +0.3% | +10.00ms | 99.7% → 99.9% |     3.88s → 3.89s | 3,207 → 3,215 | `Composer\Console\Application::run`                        | `composer/src/Composer/Console/Application.php`            |
|   +7.3% |  +8.00ms |   2.8% → 3.0% | 110.0ms → 118.0ms |     110 → 118 | `Composer\Autoload\AutoloadGenerator::getPathCode`         | `composer/src/Composer/Autoload/AutoloadGenerator.php`     |
|   +9.4% |  +6.00ms |   1.6% → 1.8% |   64.0ms → 70.0ms |       64 → 70 | `Composer\Util\Filesystem::findShortestPath`               | `composer/src/Composer/Util/Filesystem.php`                |
|   +0.1% |  +4.00ms |        100.0% |             3.89s | 3,217 → 3,219 | `(anonymous)`                                              | `profile.php`                                              |
| +200.0% |  +4.00ms |   0.1% → 0.2% |     2.0ms → 6.0ms |         2 → 6 | `Composer\Util\Filesystem::filePutContentsIfModified`      | `composer/src/Composer/Util/Filesystem.php`                |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Composer\Util\Filesystem::filesAreEqual`                  | `composer/src/Composer/Util/Filesystem.php`                |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `Composer\Util\Filesystem::safeCopy`                       | `composer/src/Composer/Util/Filesystem.php`                |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |         1 → 3 | `Composer\Json\JsonFile::read`                             | `composer/src/Composer/Json/JsonFile.php`                  |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `Composer\Console\Application::getDefaultInputDefinition`  | `composer/src/Composer/Console/Application.php`            |
| +100.0% |  +1.00ms |  <0.1% → 0.1% |     1.0ms → 2.0ms |         1 → 2 | `(anonymous)`                                              | `composer/src/Composer/Console/Application.php`            |
|   +9.1% |  +1.00ms |          0.3% |   11.0ms → 12.0ms |       11 → 12 | `(anonymous)`                                              | `composer/src/Composer/Console/Application.php:353`        |
|   +6.7% |  +1.00ms |          0.4% |   15.0ms → 16.0ms |       15 → 16 | `Composer\Json\JsonFile::validateJsonSchema`               | `composer/src/Composer/Json/JsonFile.php`                  |
|   +6.3% |  +1.00ms |          0.4% |   16.0ms → 17.0ms |       16 → 17 | `Composer\Json\JsonFile::validateSchema`                   | `composer/src/Composer/Json/JsonFile.php`                  |
| +100.0% |  +1.00ms |  <0.1% → 0.1% |     1.0ms → 2.0ms |         1 → 2 | `Composer\Util\Http\CurlDownloader::__construct`           | `composer/src/Composer/Util/Http/CurlDownloader.php`       |
|   +1.7% |  +1.00ms |   1.5% → 1.6% |   60.0ms → 61.0ms |       32 → 28 | `Composer\Package\Version\VersionGuesser::guessSvnVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php` |
| +100.0% |  +1.00ms |  <0.1% → 0.1% |     1.0ms → 2.0ms |         1 → 2 | `Composer\Util\Platform::getCwd`                           | `composer/src/Composer/Util/Platform.php`                  |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |    Delta |             % |              Time |       Samples | Function                                                      | Location                                                                 |
| -----: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  -1.3% | -21.00ms | 42.4% → 41.8% |     1.64s → 1.62s | 1,649 → 1,624 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`            | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| -39.5% | -17.00ms |   1.1% → 0.7% |   43.0ms → 26.0ms |       43 → 26 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  -2.1% | -16.00ms | 19.1% → 18.7% | 745.0ms → 729.0ms |     270 → 259 | `Composer\Command\BaseCommand::initialize`                    | `composer/src/Composer/Command/BaseCommand.php`                          |
|  -2.0% | -15.00ms | 19.1% → 18.7% | 744.0ms → 729.0ms |     269 → 259 | `Composer\Factory::createComposer`                            | `composer/src/Composer/Factory.php`                                      |
|  -2.0% | -15.00ms | 19.1% → 18.7% | 744.0ms → 729.0ms |     269 → 259 | `Composer\Factory::create`                                    | `composer/src/Composer/Factory.php`                                      |
|  -2.0% | -15.00ms | 19.1% → 18.7% | 744.0ms → 729.0ms |     269 → 259 | `Composer\Console\Application::getComposer`                   | `composer/src/Composer/Console/Application.php`                          |
|  -2.0% | -15.00ms | 19.1% → 18.7% | 744.0ms → 729.0ms |     269 → 259 | `Composer\Command\BaseCommand::tryComposer`                   | `composer/src/Composer/Command/BaseCommand.php`                          |
|  -2.1% | -15.00ms | 17.9% → 17.5% | 698.0ms → 683.0ms |     223 → 213 | `Composer\Util\ProcessExecutor::runProcess`                   | `composer/src/Composer/Util/ProcessExecutor.php`                         |
|  -2.1% | -15.00ms | 18.0% → 17.6% | 699.0ms → 684.0ms |     224 → 214 | `Composer\Util\ProcessExecutor::doExecute`                    | `composer/src/Composer/Util/ProcessExecutor.php`                         |
|  -2.1% | -15.00ms | 18.0% → 17.6% | 700.0ms → 685.0ms |     225 → 215 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`                         |
|  -1.5% | -15.00ms | 25.6% → 25.2% | 995.0ms → 980.0ms |     995 → 976 | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  -2.0% | -14.00ms | 18.0% → 17.6% | 700.0ms → 686.0ms |     225 → 216 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `composer/src/Composer/Package/Version/VersionGuesser.php`               |
|  -1.8% | -13.00ms | 18.1% → 17.7% | 703.0ms → 690.0ms |     228 → 220 | `Composer\Package\Loader\RootPackageLoader::load`             | `composer/src/Composer/Package/Loader/RootPackageLoader.php`             |
|  -1.9% | -13.00ms | 17.8% → 17.5% | 694.0ms → 681.0ms |     219 → 211 | `Symfony\Component\Process\Process::run`                      | `composer/vendor/symfony/process/Process.php`                            |
|  -1.9% | -12.00ms | 16.4% → 16.1% | 639.0ms → 627.0ms |     164 → 159 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`     | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
|  -1.9% | -12.00ms | 16.4% → 16.1% | 639.0ms → 627.0ms |     164 → 159 | `Symfony\Component\Process\Process::readPipes`                | `composer/vendor/symfony/process/Process.php`                            |
|  -1.9% | -12.00ms | 16.5% → 16.2% | 642.0ms → 630.0ms |     167 → 160 | `Symfony\Component\Process\Process::wait`                     | `composer/vendor/symfony/process/Process.php`                            |
|  -5.0% | -11.00ms |   5.7% → 5.4% | 222.0ms → 211.0ms |     222 → 211 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`       | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| -25.7% |  -9.00ms |   0.9% → 0.7% |   35.0ms → 26.0ms |       35 → 26 | `Composer\Pcre\Preg::isMatch`                                 | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -1.8% |  -8.00ms | 11.7% → 11.5% | 457.0ms → 449.0ms |      101 → 99 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php`               |

##### Third-party

|  Change |    Delta |             % |              Time |       Samples | Function                                                                   | Location                                                                     |
| ------: | -------: | ------------: | ----------------: | ------------: | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|   -1.3% | -21.00ms | 42.4% → 41.8% |     1.64s → 1.62s | 1,649 → 1,624 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                         | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|  -39.5% | -17.00ms |   1.1% → 0.7% |   43.0ms → 26.0ms |       43 → 26 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`              | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|   -1.5% | -15.00ms | 25.6% → 25.2% | 995.0ms → 980.0ms |     995 → 976 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                         | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|   -1.9% | -13.00ms | 17.8% → 17.5% | 694.0ms → 681.0ms |     219 → 211 | `Symfony\Component\Process\Process::run`                                   | `composer/vendor/symfony/process/Process.php`                                |
|   -1.9% | -12.00ms | 16.4% → 16.1% | 639.0ms → 627.0ms |     164 → 159 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                  | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                        |
|   -1.9% | -12.00ms | 16.4% → 16.1% | 639.0ms → 627.0ms |     164 → 159 | `Symfony\Component\Process\Process::readPipes`                             | `composer/vendor/symfony/process/Process.php`                                |
|   -1.9% | -12.00ms | 16.5% → 16.2% | 642.0ms → 630.0ms |     167 → 160 | `Symfony\Component\Process\Process::wait`                                  | `composer/vendor/symfony/process/Process.php`                                |
|   -5.0% | -11.00ms |   5.7% → 5.4% | 222.0ms → 211.0ms |     222 → 211 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                    | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`        |
|  -25.7% |  -9.00ms |   0.9% → 0.7% |   35.0ms → 26.0ms |       35 → 26 | `Composer\Pcre\Preg::isMatch`                                              | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|  -61.5% |  -8.00ms |   0.3% → 0.1% |    13.0ms → 5.0ms |        13 → 5 | `Symfony\Component\Process\Process::getDefaultEnv`                         | `composer/vendor/symfony/process/Process.php`                                |
|  -25.0% |  -5.00ms |   0.5% → 0.4% |   20.0ms → 15.0ms |       20 → 15 | `Symfony\Component\Console\Application::init`                              | `composer/vendor/symfony/console/Application.php`                            |
|  -25.0% |  -5.00ms |   0.5% → 0.4% |   20.0ms → 15.0ms |       20 → 15 | `Symfony\Component\Console\Application::find`                              | `composer/vendor/symfony/console/Application.php`                            |
|  -38.5% |  -5.00ms |   0.3% → 0.2% |    13.0ms → 8.0ms |        13 → 8 | `(anonymous)`                                                              | `vendor/composer/autoload_classmap.php`                                      |
|  -26.7% |  -4.00ms |   0.4% → 0.3% |   15.0ms → 11.0ms |       15 → 11 | `Composer\Pcre\Preg::replaceCallback`                                      | `composer/vendor/composer/pcre/src/Preg.php`                                 |
|  -50.0% |  -4.00ms |   0.2% → 0.1% |     8.0ms → 4.0ms |         8 → 4 | `Symfony\Component\Finder\Iterator\MultiplePcreFilterIterator::isAccepted` | `composer/vendor/symfony/finder/Iterator/MultiplePcreFilterIterator.php`     |
|  -25.0% |  -3.00ms |   0.3% → 0.2% |    12.0ms → 9.0ms |        12 → 9 | `Symfony\Component\Console\Command\Command::__construct`                   | `composer/vendor/symfony/console/Command/Command.php`                        |
|  -60.0% |  -3.00ms |          0.1% |     5.0ms → 2.0ms |         5 → 2 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::accept` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  -75.0% |  -3.00ms |  0.1% → <0.1% |     4.0ms → 1.0ms |         4 → 1 | `Symfony\Component\Process\Process::updateStatus`                          | `composer/vendor/symfony/process/Process.php`                                |
| removed |  -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |         3 → 0 | `Symfony\Component\Console\Formatter\OutputFormatter::format`              | `composer/vendor/symfony/console/Formatter/OutputFormatter.php`              |
| removed |  -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |         3 → 0 | `Symfony\Component\Console\Output\Output::write`                           | `composer/vendor/symfony/console/Output/Output.php`                          |

##### Ours

|  Change |    Delta |             % |              Time |   Samples | Function                                                      | Location                                                     |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
|   -2.1% | -16.00ms | 19.1% → 18.7% | 745.0ms → 729.0ms | 270 → 259 | `Composer\Command\BaseCommand::initialize`                    | `composer/src/Composer/Command/BaseCommand.php`              |
|   -2.0% | -15.00ms | 19.1% → 18.7% | 744.0ms → 729.0ms | 269 → 259 | `Composer\Factory::createComposer`                            | `composer/src/Composer/Factory.php`                          |
|   -2.0% | -15.00ms | 19.1% → 18.7% | 744.0ms → 729.0ms | 269 → 259 | `Composer\Factory::create`                                    | `composer/src/Composer/Factory.php`                          |
|   -2.0% | -15.00ms | 19.1% → 18.7% | 744.0ms → 729.0ms | 269 → 259 | `Composer\Console\Application::getComposer`                   | `composer/src/Composer/Console/Application.php`              |
|   -2.0% | -15.00ms | 19.1% → 18.7% | 744.0ms → 729.0ms | 269 → 259 | `Composer\Command\BaseCommand::tryComposer`                   | `composer/src/Composer/Command/BaseCommand.php`              |
|   -2.1% | -15.00ms | 17.9% → 17.5% | 698.0ms → 683.0ms | 223 → 213 | `Composer\Util\ProcessExecutor::runProcess`                   | `composer/src/Composer/Util/ProcessExecutor.php`             |
|   -2.1% | -15.00ms | 18.0% → 17.6% | 699.0ms → 684.0ms | 224 → 214 | `Composer\Util\ProcessExecutor::doExecute`                    | `composer/src/Composer/Util/ProcessExecutor.php`             |
|   -2.1% | -15.00ms | 18.0% → 17.6% | 700.0ms → 685.0ms | 225 → 215 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`             |
|   -2.0% | -14.00ms | 18.0% → 17.6% | 700.0ms → 686.0ms | 225 → 216 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   -1.8% | -13.00ms | 18.1% → 17.7% | 703.0ms → 690.0ms | 228 → 220 | `Composer\Package\Loader\RootPackageLoader::load`             | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|   -1.8% |  -8.00ms | 11.7% → 11.5% | 457.0ms → 449.0ms |  101 → 99 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
| removed |  -5.00ms |   0.1% → 0.0% |       5.0ms → 0ms |     5 → 0 | `Composer\Console\Application::__construct`                   | `composer/src/Composer/Console/Application.php`              |
|   -3.3% |  -5.00ms |   3.9% → 3.7% | 150.0ms → 145.0ms |   33 → 31 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  -50.0% |  -4.00ms |   0.2% → 0.1% |     8.0ms → 4.0ms |     8 → 4 | `Composer\Util\StreamContextFactory::getTlsDefaults`          | `composer/src/Composer/Util/StreamContextFactory.php`        |
|   -6.1% |  -4.00ms |   1.7% → 1.6% |   66.0ms → 62.0ms |   37 → 32 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  -16.7% |  -3.00ms |   0.5% → 0.4% |   18.0ms → 15.0ms |   18 → 15 | `Composer\Console\Application::getDefaultCommands`            | `composer/src/Composer/Console/Application.php`              |
|   -1.3% |  -3.00ms |   6.0% → 5.9% | 232.0ms → 229.0ms |   42 → 39 | `Composer\Util\Silencer::call`                                | `composer/src/Composer/Util/Silencer.php`                    |
|  -27.3% |  -3.00ms |   0.3% → 0.2% |    11.0ms → 8.0ms |    11 → 8 | `Composer\Factory::createHttpDownloader`                      | `composer/src/Composer/Factory.php`                          |
|  -30.0% |  -3.00ms |   0.3% → 0.2% |    10.0ms → 7.0ms |    10 → 7 | `Composer\Util\HttpDownloader::__construct`                   | `composer/src/Composer/Util/HttpDownloader.php`              |
|   -2.6% |  -3.00ms |   3.0% → 2.9% | 117.0ms → 114.0ms |   55 → 57 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |

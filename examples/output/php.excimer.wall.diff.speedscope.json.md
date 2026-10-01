# Sampling profile diff

Took 4.16s → 3.94s (-220.00ms, -5.3%) over 3,261 samples → 3,250 samples (1.3ms → 1.2ms per sample).

| Category    | Change |     Delta |             % |              Time |       Samples |
| ----------- | -----: | --------: | ------------: | ----------------: | ------------: |
| Third-party |  -4.6% | -174.00ms | 90.6% → 91.2% |     3.77s → 3.59s | 3,112 → 3,113 |
| Ours        | -11.7% |  -46.00ms |   9.4% → 8.8% | 393.0ms → 347.0ms |     149 → 137 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |   Samples | Function                                                                    | Location                                                                        |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  +51.9% | +28.00ms |   1.3% → 2.1% |   54.0ms → 82.0ms |   54 → 82 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +14.1% | +21.00ms |   3.6% → 4.3% | 149.0ms → 170.0ms | 149 → 170 | `Composer\Pcre\Preg::match`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|  +22.6% | +19.00ms |   2.0% → 2.6% |  84.0ms → 103.0ms |  80 → 103 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +1.8% | +12.00ms | 15.8% → 17.0% | 659.0ms → 671.0ms | 655 → 671 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`            |
|   +8.4% |  +9.00ms |   2.6% → 2.9% | 107.0ms → 116.0ms | 107 → 116 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +35.7% |  +5.00ms |   0.3% → 0.5% |   14.0ms → 19.0ms |   14 → 19 | `Composer\Autoload\ClassLoader::loadClass`                                  | `composer/vendor/composer/ClassLoader.php`                                      |
| +125.0% |  +5.00ms |   0.1% → 0.2% |     4.0ms → 9.0ms |     4 → 9 | `JsonSchema\Uri\UriRetriever::loadSchema`                                   | `composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
|   +2.8% |  +4.00ms |   3.4% → 3.7% | 143.0ms → 147.0ms | 143 → 147 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                                    |
| +200.0% |  +4.00ms |  <0.1% → 0.2% |     2.0ms → 6.0ms |     2 → 6 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`     | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
| +133.3% |  +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms |     3 → 7 | `Composer\Autoload\AutoloadGenerator::getStaticFile`                        | `composer/src/Composer/Autoload/AutoloadGenerator.php`                          |
|   +7.7% |  +3.00ms |   0.9% → 1.1% |   39.0ms → 42.0ms |   39 → 42 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                                   |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |    8 → 11 | `(anonymous)`                                                               | `vendor/composer/autoload_classmap.php`                                         |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 4 | `Composer\Util\Filesystem::isAbsolutePath`                                  | `composer/src/Composer/Util/Filesystem.php`                                     |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |     0 → 2 | `Composer\Util\StreamContextFactory::getTlsDefaults`                        | `composer/src/Composer/Util/StreamContextFactory.php`                           |
| +100.0% |  +2.00ms |  <0.1% → 0.1% |     2.0ms → 4.0ms |     2 → 4 | `Symfony\Component\Process\Process::wait`                                   | `composer/vendor/symfony/process/Process.php`                                   |
|  +14.3% |  +2.00ms |   0.3% → 0.4% |   14.0ms → 16.0ms |   14 → 16 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                  | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +20.0% |  +2.00ms |   0.2% → 0.3% |   10.0ms → 12.0ms |   10 → 12 | `Composer\Autoload\AutoloadGenerator::getPathCode`                          | `composer/src/Composer/Autoload/AutoloadGenerator.php`                          |
|  +12.5% |  +2.00ms |   0.4% → 0.5% |   16.0ms → 18.0ms |   16 → 18 | `Composer\Util\Filesystem::findShortestPath`                                | `composer/src/Composer/Util/Filesystem.php`                                     |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |     1 → 3 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`                      | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |     0 → 2 | `Composer\ClassMapGenerator\ClassMapGenerator::getCwd`                      | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`        |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function                                                                    | Location                                                                        |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  +51.9% | +28.00ms |   1.3% → 2.1% |   54.0ms → 82.0ms |   54 → 82 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +14.1% | +21.00ms |   3.6% → 4.3% | 149.0ms → 170.0ms | 149 → 170 | `Composer\Pcre\Preg::match`                                                 | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|  +22.6% | +19.00ms |   2.0% → 2.6% |  84.0ms → 103.0ms |  80 → 103 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +1.8% | +12.00ms | 15.8% → 17.0% | 659.0ms → 671.0ms | 655 → 671 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`            |
|   +8.4% |  +9.00ms |   2.6% → 2.9% | 107.0ms → 116.0ms | 107 → 116 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +35.7% |  +5.00ms |   0.3% → 0.5% |   14.0ms → 19.0ms |   14 → 19 | `Composer\Autoload\ClassLoader::loadClass`                                  | `composer/vendor/composer/ClassLoader.php`                                      |
| +125.0% |  +5.00ms |   0.1% → 0.2% |     4.0ms → 9.0ms |     4 → 9 | `JsonSchema\Uri\UriRetriever::loadSchema`                                   | `composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
|   +2.8% |  +4.00ms |   3.4% → 3.7% | 143.0ms → 147.0ms | 143 → 147 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `composer/vendor/composer/pcre/src/Preg.php`                                    |
| +200.0% |  +4.00ms |  <0.1% → 0.2% |     2.0ms → 6.0ms |     2 → 6 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`     | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|   +7.7% |  +3.00ms |   0.9% → 1.1% |   39.0ms → 42.0ms |   39 → 42 | `Symfony\Component\Process\Process::start`                                  | `composer/vendor/symfony/process/Process.php`                                   |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |    8 → 11 | `(anonymous)`                                                               | `vendor/composer/autoload_classmap.php`                                         |
| +100.0% |  +2.00ms |  <0.1% → 0.1% |     2.0ms → 4.0ms |     2 → 4 | `Symfony\Component\Process\Process::wait`                                   | `composer/vendor/symfony/process/Process.php`                                   |
|  +14.3% |  +2.00ms |   0.3% → 0.4% |   14.0ms → 16.0ms |   14 → 16 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                  | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |     1 → 3 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`                      | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |     0 → 2 | `Composer\ClassMapGenerator\ClassMapGenerator::getCwd`                      | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`        |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |     0 → 2 | `Symfony\Component\Console\Input\ArrayInput::hasParameterOption`            | `composer/vendor/symfony/console/Input/ArrayInput.php`                          |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |     0 → 2 | `Symfony\Component\Finder\SplFileInfo::getRelativePathname`                 | `composer/vendor/symfony/finder/SplFileInfo.php`                                |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `Symfony\Component\Console\Application::init`                               | `composer/vendor/symfony/console/Application.php`                               |
|  +50.0% |  +1.00ms |  <0.1% → 0.1% |     2.0ms → 3.0ms |     2 → 3 | `Symfony\Component\Console\Input\InputOption::__construct`                  | `composer/vendor/symfony/console/Input/InputOption.php`                         |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `Symfony\Component\Process\Process::readPipes`                              | `composer/vendor/symfony/process/Process.php`                                   |

##### Ours

|  Change |   Delta |            % |            Time | Samples | Function                                                  | Location                                                  |
| ------: | ------: | -----------: | --------------: | ------: | --------------------------------------------------------- | --------------------------------------------------------- |
| +133.3% | +4.00ms |  0.1% → 0.2% |   3.0ms → 7.0ms |   3 → 7 | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `composer/src/Composer/Autoload/AutoloadGenerator.php`    |
| +300.0% | +3.00ms | <0.1% → 0.1% |   1.0ms → 4.0ms |   1 → 4 | `Composer\Util\Filesystem::isAbsolutePath`                | `composer/src/Composer/Util/Filesystem.php`               |
|     new | +2.00ms |  0.0% → 0.1% |     0ms → 2.0ms |   0 → 2 | `Composer\Util\StreamContextFactory::getTlsDefaults`      | `composer/src/Composer/Util/StreamContextFactory.php`     |
|  +20.0% | +2.00ms |  0.2% → 0.3% | 10.0ms → 12.0ms | 10 → 12 | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `composer/src/Composer/Autoload/AutoloadGenerator.php`    |
|  +12.5% | +2.00ms |  0.4% → 0.5% | 16.0ms → 18.0ms | 16 → 18 | `Composer\Util\Filesystem::findShortestPath`              | `composer/src/Composer/Util/Filesystem.php`               |
|   +7.1% | +1.00ms |  0.3% → 0.4% | 14.0ms → 15.0ms | 13 → 15 | `(anonymous)`                                             | `composer/src/Composer/Console/Application.php:353 → 349` |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Factory::createComposer`                        | `composer/src/Composer/Factory.php`                       |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Repository\RepositoryManager::createRepository` | `composer/src/Composer/Repository/RepositoryManager.php`  |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Command\DumpAutoloadCommand::execute`           | `composer/src/Composer/Command/DumpAutoloadCommand.php`   |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Util\Filesystem::filePutContentsIfModified`     | `composer/src/Composer/Util/Filesystem.php`               |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                                             | `composer/src/Composer/Command/InstallCommand.php`        |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `(anonymous)`                                             | `composer/src/Composer/Package/Archiver/PharArchiver.php` |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Package\Locker::__construct`                    | `composer/src/Composer/Package/Locker.php`                |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Repository\ArrayRepository::getPackages`        | `composer/src/Composer/Repository/ArrayRepository.php`    |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Command\DependsCommand::configure`              | `composer/src/Composer/Command/DependsCommand.php`        |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |   0 → 1 | `Composer\Autoload\AutoloadGenerator::getPlatformCheck`   | `composer/src/Composer/Autoload/AutoloadGenerator.php`    |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |             % |              Time |   Samples | Function                                                             | Location                                                                 |
| ------: | --------: | ------------: | ----------------: | --------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms |     2 → 3 | `Symfony\Component\Console\Terminal::readFromProcess`                | `composer/vendor/symfony/console/Terminal.php`                           |
|  -13.0% |  -35.00ms |   6.5% → 5.9% | 269.0ms → 234.0ms |   26 → 24 | `Composer\Util\Silencer::call`                                       | `composer/src/Composer/Util/Silencer.php`                                |
|   -6.2% |  -27.00ms | 10.4% → 10.3% | 435.0ms → 408.0ms | 435 → 408 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                   | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|   -2.5% |  -16.00ms | 15.5% → 15.9% | 645.0ms → 629.0ms | 166 → 158 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`            | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
|  -19.5% |  -15.00ms |   1.8% → 1.6% |   77.0ms → 62.0ms |   77 → 62 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`            | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|   -4.3% |  -12.00ms |   6.6% → 6.7% | 276.0ms → 264.0ms | 276 → 264 | `Composer\Pcre\Preg::pregMatch`                                      | `composer/vendor/composer/pcre/src/Preg.php`                             |
|   -7.8% |  -11.00ms |   3.4% → 3.3% | 141.0ms → 130.0ms | 141 → 130 | `Composer\Pcre\Preg::enforceNonNullMatches`                          | `composer/vendor/composer/pcre/src/Preg.php`                             |
|   -7.0% |  -10.00ms |   3.4% → 3.3% | 142.0ms → 132.0ms | 142 → 132 | `Composer\Pcre\Preg::isMatchStrictGroups`                            | `composer/vendor/composer/pcre/src/Preg.php`                             |
|   -4.0% |   -8.00ms |          4.9% | 202.0ms → 194.0ms | 202 → 194 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`              | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|   -4.3% |   -8.00ms |          4.5% | 187.0ms → 179.0ms | 180 → 179 | `Composer\Pcre\Preg::matchAll`                                       | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -85.7% |   -6.00ms |  0.2% → <0.1% |     7.0ms → 1.0ms |     7 → 1 | `Composer\Pcre\Preg::replace`                                        | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -25.0% |   -5.00ms |   0.5% → 0.4% |   20.0ms → 15.0ms |   20 → 15 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`        | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  -31.3% |   -5.00ms |   0.4% → 0.3% |   16.0ms → 11.0ms |   16 → 11 | `Composer\Pcre\Preg::isMatch`                                        | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -66.7% |   -4.00ms |          0.1% |     6.0ms → 2.0ms |     6 → 2 | `Composer\Autoload\AutoloadGenerator::dump`                          | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  -36.4% |   -4.00ms |   0.3% → 0.2% |    11.0ms → 7.0ms |    11 → 7 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  -17.6% |   -3.00ms |          0.4% |   17.0ms → 14.0ms |   17 → 14 | `Composer\Pcre\Preg::replaceCallback`                                | `composer/vendor/composer/pcre/src/Preg.php`                             |
|   -9.1% |   -3.00ms |          0.8% |   33.0ms → 30.0ms |   33 → 30 | `Composer\Util\Filesystem::normalizePath`                            | `composer/src/Composer/Util/Filesystem.php`                              |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Seld\Signal\SignalHandler::unregister`                              | `composer/vendor/seld/signal-handler/src/SignalHandler.php`              |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Composer\Pcre\Preg::checkSetOrder`                                  | `composer/vendor/composer/pcre/src/Preg.php`                             |
| removed |   -2.00ms |  <0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Symfony\Component\Console\Application::find`                        | `composer/vendor/symfony/console/Application.php`                        |

##### Third-party

|  Change |     Delta |             % |              Time |   Samples | Function                                                             | Location                                                                 |
| ------: | --------: | ------------: | ----------------: | --------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms |     2 → 3 | `Symfony\Component\Console\Terminal::readFromProcess`                | `composer/vendor/symfony/console/Terminal.php`                           |
|   -6.2% |  -27.00ms | 10.4% → 10.3% | 435.0ms → 408.0ms | 435 → 408 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                   | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|   -2.5% |  -16.00ms | 15.5% → 15.9% | 645.0ms → 629.0ms | 166 → 158 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`            | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
|  -19.5% |  -15.00ms |   1.8% → 1.6% |   77.0ms → 62.0ms |   77 → 62 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`            | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|   -4.3% |  -12.00ms |   6.6% → 6.7% | 276.0ms → 264.0ms | 276 → 264 | `Composer\Pcre\Preg::pregMatch`                                      | `composer/vendor/composer/pcre/src/Preg.php`                             |
|   -7.8% |  -11.00ms |   3.4% → 3.3% | 141.0ms → 130.0ms | 141 → 130 | `Composer\Pcre\Preg::enforceNonNullMatches`                          | `composer/vendor/composer/pcre/src/Preg.php`                             |
|   -7.0% |  -10.00ms |   3.4% → 3.3% | 142.0ms → 132.0ms | 142 → 132 | `Composer\Pcre\Preg::isMatchStrictGroups`                            | `composer/vendor/composer/pcre/src/Preg.php`                             |
|   -4.0% |   -8.00ms |          4.9% | 202.0ms → 194.0ms | 202 → 194 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`              | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|   -4.3% |   -8.00ms |          4.5% | 187.0ms → 179.0ms | 180 → 179 | `Composer\Pcre\Preg::matchAll`                                       | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -85.7% |   -6.00ms |  0.2% → <0.1% |     7.0ms → 1.0ms |     7 → 1 | `Composer\Pcre\Preg::replace`                                        | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -25.0% |   -5.00ms |   0.5% → 0.4% |   20.0ms → 15.0ms |   20 → 15 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`        | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  -31.3% |   -5.00ms |   0.4% → 0.3% |   16.0ms → 11.0ms |   16 → 11 | `Composer\Pcre\Preg::isMatch`                                        | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -36.4% |   -4.00ms |   0.3% → 0.2% |    11.0ms → 7.0ms |    11 → 7 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next` | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  -17.6% |   -3.00ms |          0.4% |   17.0ms → 14.0ms |   17 → 14 | `Composer\Pcre\Preg::replaceCallback`                                | `composer/vendor/composer/pcre/src/Preg.php`                             |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Seld\Signal\SignalHandler::unregister`                              | `composer/vendor/seld/signal-handler/src/SignalHandler.php`              |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `Composer\Pcre\Preg::checkSetOrder`                                  | `composer/vendor/composer/pcre/src/Preg.php`                             |
| removed |   -2.00ms |  <0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Symfony\Component\Console\Application::find`                        | `composer/vendor/symfony/console/Application.php`                        |
|  -40.0% |   -2.00ms |          0.1% |     5.0ms → 3.0ms |     5 → 3 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`             | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| removed |   -2.00ms |  <0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `Symfony\Component\Finder\Finder::normalizeDir`                      | `composer/vendor/symfony/finder/Finder.php`                              |
|  -66.7% |   -2.00ms |  0.1% → <0.1% |     3.0ms → 1.0ms |     3 → 1 | `(anonymous)`                                                        | `vendor/composer/autoload_namespaces.php`                                |

##### Ours

|  Change |    Delta |            % |              Time | Samples | Function                                                               | Location                                                         |
| ------: | -------: | -----------: | ----------------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  -13.0% | -35.00ms |  6.5% → 5.9% | 269.0ms → 234.0ms | 26 → 24 | `Composer\Util\Silencer::call`                                         | `composer/src/Composer/Util/Silencer.php`                        |
|  -66.7% |  -4.00ms |         0.1% |     6.0ms → 2.0ms |   6 → 2 | `Composer\Autoload\AutoloadGenerator::dump`                            | `composer/src/Composer/Autoload/AutoloadGenerator.php`           |
|   -9.1% |  -3.00ms |         0.8% |   33.0ms → 30.0ms | 33 → 30 | `Composer\Util\Filesystem::normalizePath`                              | `composer/src/Composer/Util/Filesystem.php`                      |
| removed |  -2.00ms | <0.1% → 0.0% |       2.0ms → 0ms |   2 → 0 | `Composer\Json\JsonFile::validateSchema`                               | `composer/src/Composer/Json/JsonFile.php`                        |
|  -66.7% |  -2.00ms | 0.1% → <0.1% |     3.0ms → 1.0ms |   3 → 1 | `Composer\Util\Http\CurlDownloader::__construct`                       | `composer/src/Composer/Util/Http/CurlDownloader.php`             |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                                          | `composer/src/Composer/IO/BaseIO.php`                            |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Console\Application::doRun`                                  | `composer/src/Composer/Console/Application.php`                  |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                                          | `composer/src/Composer/Command/InitCommand.php`                  |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                                          | `composer/src/Composer/Command/SuggestsCommand.php`              |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\IO\ConsoleIO::isVerbose`                                     | `composer/src/Composer/IO/ConsoleIO.php`                         |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Util\ErrorHandler::handle`                                   | `composer/src/Composer/Util/ErrorHandler.php`                    |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Util\Silencer::suppress`                                     | `composer/src/Composer/Util/Silencer.php`                        |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Package\Loader\ValidatingArrayLoader::hasPackageNamingError` | `composer/src/Composer/Package/Loader/ValidatingArrayLoader.php` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Util\ProcessExecutor::runProcess`                            | `composer/src/Composer/Util/ProcessExecutor.php`                 |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                                          | `composer/src/Composer/Repository/FilesystemRepository.php`      |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `(anonymous)`                                                          | `composer/src/Composer/Installer/LibraryInstaller.php`           |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Util\Filesystem::ensureDirectoryExists`                      | `composer/src/Composer/Util/Filesystem.php`                      |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Util\Filesystem::safeCopy`                                   | `composer/src/Composer/Util/Filesystem.php`                      |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Util\Git::cleanEnv`                                          | `composer/src/Composer/Util/Git.php`                             |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `Composer\Json\JsonFile::read`                                         | `composer/src/Composer/Json/JsonFile.php`                        |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |     Samples | Function                                                                        | Location                                                                        |
| ------: | -------: | ------------: | ----------------: | ----------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|   +7.0% | +35.00ms | 12.1% → 13.6% | 502.0ms → 537.0ms |   502 → 537 | `Composer\Pcre\Preg::match`                                                     | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +3.1% | +31.00ms | 23.8% → 25.9% |   989.0ms → 1.02s | 989 → 1,020 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                              | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +51.9% | +28.00ms |   1.3% → 2.1% |   54.0ms → 82.0ms |     54 → 82 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct`     | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|   +3.5% | +27.00ms | 18.5% → 20.2% | 769.0ms → 796.0ms |   769 → 796 | `Composer\Pcre\Preg::matchStrictGroups`                                         | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|  +49.1% | +26.00ms |   1.3% → 2.0% |   53.0ms → 79.0ms |     53 → 79 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren`     | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +43.6% | +24.00ms |   1.3% → 2.0% |   55.0ms → 79.0ms |     55 → 79 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`    |
|  +22.6% | +19.00ms |   2.0% → 2.6% |  84.0ms → 103.0ms |    80 → 103 | `Composer\Pcre\Preg::checkOffsetCapture`                                        | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +1.9% | +17.00ms | 21.9% → 23.5% | 911.0ms → 928.0ms |   911 → 928 | `Composer\Pcre\Preg::isMatchStrictGroups`                                       | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +7.1% |  +8.00ms |   2.7% → 3.0% | 112.0ms → 120.0ms |   112 → 120 | `Composer\Autoload\AutoloadGenerator::getPathCode`                              | `composer/src/Composer/Autoload/AutoloadGenerator.php`                          |
|  +12.1% |  +8.00ms |   1.6% → 1.9% |   66.0ms → 74.0ms |     66 → 74 | `Composer\Util\Filesystem::findShortestPath`                                    | `composer/src/Composer/Util/Filesystem.php`                                     |
| +150.0% |  +6.00ms |   0.1% → 0.3% |    4.0ms → 10.0ms |      4 → 10 | `JsonSchema\Uri\UriRetriever::loadSchema`                                       | `composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
|  +45.5% |  +5.00ms |   0.3% → 0.4% |   11.0ms → 16.0ms |     11 → 16 | `Symfony\Component\Console\Application::init`                                   | `composer/vendor/symfony/console/Application.php`                               |
|  +36.4% |  +4.00ms |   0.3% → 0.4% |   11.0ms → 15.0ms |     11 → 15 | `Composer\Console\Application::getDefaultCommands`                              | `composer/src/Composer/Console/Application.php`                                 |
|  +57.1% |  +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms |      7 → 11 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +60.0% |  +3.00ms |   0.1% → 0.2% |     5.0ms → 8.0ms |       5 → 8 | `Symfony\Component\Console\Command\Command::__construct`                        | `composer/vendor/symfony/console/Command/Command.php`                           |
|  +23.1% |  +3.00ms |   0.3% → 0.4% |   13.0ms → 16.0ms |     13 → 16 | `Symfony\Component\Console\Application::find`                                   | `composer/vendor/symfony/console/Application.php`                               |
|   +6.7% |  +3.00ms |   1.1% → 1.2% |   45.0ms → 48.0ms |     45 → 48 | `Symfony\Component\Process\Process::start`                                      | `composer/vendor/symfony/process/Process.php`                                   |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |      8 → 11 | `(anonymous)`                                                                   | `vendor/composer/autoload_classmap.php`                                         |
|  +42.9% |  +3.00ms |   0.2% → 0.3% |    7.0ms → 10.0ms |      7 → 10 | `JsonSchema\Uri\UriRetriever::retrieve`                                         | `composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms |       1 → 4 | `Composer\Util\Filesystem::isAbsolutePath`                                      | `composer/src/Composer/Util/Filesystem.php`                                     |

##### Third-party

|  Change |    Delta |             % |              Time |     Samples | Function                                                                        | Location                                                                        |
| ------: | -------: | ------------: | ----------------: | ----------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|   +7.0% | +35.00ms | 12.1% → 13.6% | 502.0ms → 537.0ms |   502 → 537 | `Composer\Pcre\Preg::match`                                                     | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +3.1% | +31.00ms | 23.8% → 25.9% |   989.0ms → 1.02s | 989 → 1,020 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                              | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +51.9% | +28.00ms |   1.3% → 2.1% |   54.0ms → 82.0ms |     54 → 82 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct`     | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|   +3.5% | +27.00ms | 18.5% → 20.2% | 769.0ms → 796.0ms |   769 → 796 | `Composer\Pcre\Preg::matchStrictGroups`                                         | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|  +49.1% | +26.00ms |   1.3% → 2.0% |   53.0ms → 79.0ms |     53 → 79 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren`     | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +43.6% | +24.00ms |   1.3% → 2.0% |   55.0ms → 79.0ms |     55 → 79 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`    |
|  +22.6% | +19.00ms |   2.0% → 2.6% |  84.0ms → 103.0ms |    80 → 103 | `Composer\Pcre\Preg::checkOffsetCapture`                                        | `composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +1.9% | +17.00ms | 21.9% → 23.5% | 911.0ms → 928.0ms |   911 → 928 | `Composer\Pcre\Preg::isMatchStrictGroups`                                       | `composer/vendor/composer/pcre/src/Preg.php`                                    |
| +150.0% |  +6.00ms |   0.1% → 0.3% |    4.0ms → 10.0ms |      4 → 10 | `JsonSchema\Uri\UriRetriever::loadSchema`                                       | `composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
|  +45.5% |  +5.00ms |   0.3% → 0.4% |   11.0ms → 16.0ms |     11 → 16 | `Symfony\Component\Console\Application::init`                                   | `composer/vendor/symfony/console/Application.php`                               |
|  +57.1% |  +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms |      7 → 11 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +60.0% |  +3.00ms |   0.1% → 0.2% |     5.0ms → 8.0ms |       5 → 8 | `Symfony\Component\Console\Command\Command::__construct`                        | `composer/vendor/symfony/console/Command/Command.php`                           |
|  +23.1% |  +3.00ms |   0.3% → 0.4% |   13.0ms → 16.0ms |     13 → 16 | `Symfony\Component\Console\Application::find`                                   | `composer/vendor/symfony/console/Application.php`                               |
|   +6.7% |  +3.00ms |   1.1% → 1.2% |   45.0ms → 48.0ms |     45 → 48 | `Symfony\Component\Process\Process::start`                                      | `composer/vendor/symfony/process/Process.php`                                   |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |      8 → 11 | `(anonymous)`                                                                   | `vendor/composer/autoload_classmap.php`                                         |
|  +42.9% |  +3.00ms |   0.2% → 0.3% |    7.0ms → 10.0ms |      7 → 10 | `JsonSchema\Uri\UriRetriever::retrieve`                                         | `composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |       0 → 3 | `Seld\Signal\SignalHandler::create`                                             | `composer/vendor/seld/signal-handler/src/SignalHandler.php`                     |
|  +66.7% |  +2.00ms |          0.1% |     3.0ms → 5.0ms |       3 → 5 | `Symfony\Component\Console\Input\InputOption::__construct`                      | `composer/vendor/symfony/console/Input/InputOption.php`                         |
|  +14.3% |  +2.00ms |   0.3% → 0.4% |   14.0ms → 16.0ms |     14 → 16 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                      | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +10.5% |  +2.00ms |          0.5% |   19.0ms → 21.0ms |     19 → 21 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`                        | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |

##### Ours

|  Change |   Delta |            % |              Time |   Samples | Function                                                  | Location                                                  |
| ------: | ------: | -----------: | ----------------: | --------: | --------------------------------------------------------- | --------------------------------------------------------- |
|   +7.1% | +8.00ms |  2.7% → 3.0% | 112.0ms → 120.0ms | 112 → 120 | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `composer/src/Composer/Autoload/AutoloadGenerator.php`    |
|  +12.1% | +8.00ms |  1.6% → 1.9% |   66.0ms → 74.0ms |   66 → 74 | `Composer\Util\Filesystem::findShortestPath`              | `composer/src/Composer/Util/Filesystem.php`               |
|  +36.4% | +4.00ms |  0.3% → 0.4% |   11.0ms → 15.0ms |   11 → 15 | `Composer\Console\Application::getDefaultCommands`        | `composer/src/Composer/Console/Application.php`           |
| +300.0% | +3.00ms | <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 4 | `Composer\Util\Filesystem::isAbsolutePath`                | `composer/src/Composer/Util/Filesystem.php`               |
| +200.0% | +2.00ms | <0.1% → 0.1% |     1.0ms → 3.0ms |     1 → 3 | `Composer\Util\StreamContextFactory::getTlsDefaults`      | `composer/src/Composer/Util/StreamContextFactory.php`     |
| +200.0% | +2.00ms | <0.1% → 0.1% |     1.0ms → 3.0ms |     1 → 3 | `Composer\Console\Input\InputOption::__construct`         | `composer/src/Composer/Console/Input/InputOption.php`     |
|   +7.1% | +1.00ms |  0.3% → 0.4% |   14.0ms → 15.0ms |   13 → 15 | `(anonymous)`                                             | `composer/src/Composer/Console/Application.php:353 → 349` |
|  +16.7% | +1.00ms |  0.1% → 0.2% |     6.0ms → 7.0ms |         1 | `Composer\Util\Git::getVersion`                           | `composer/src/Composer/Util/Git.php`                      |
|  +16.7% | +1.00ms |  0.1% → 0.2% |     6.0ms → 7.0ms |         1 | `Composer\Util\Git::getNoShowSignatureFlag`               | `composer/src/Composer/Util/Git.php`                      |
| +100.0% | +1.00ms | <0.1% → 0.1% |     1.0ms → 2.0ms |     1 → 2 | `(anonymous)`                                             | `composer/src/Composer/Repository/ComposerRepository.php` |
|  +50.0% | +1.00ms | <0.1% → 0.1% |     2.0ms → 3.0ms |     2 → 3 | `Composer\Repository\RepositoryManager::createRepository` | `composer/src/Composer/Repository/RepositoryManager.php`  |
|  +50.0% | +1.00ms | <0.1% → 0.1% |     2.0ms → 3.0ms |     2 → 3 | `Composer\Repository\RepositoryFactory::createRepos`      | `composer/src/Composer/Repository/RepositoryFactory.php`  |
|  +50.0% | +1.00ms | <0.1% → 0.1% |     2.0ms → 3.0ms |     2 → 3 | `Composer\Repository\RepositoryFactory::defaultRepos`     | `composer/src/Composer/Repository/RepositoryFactory.php`  |
| +100.0% | +1.00ms | <0.1% → 0.1% |     1.0ms → 2.0ms |     1 → 2 | `Composer\Plugin\PluginManager::loadRepository`           | `composer/src/Composer/Plugin/PluginManager.php`          |
| +100.0% | +1.00ms | <0.1% → 0.1% |     1.0ms → 2.0ms |     1 → 2 | `Composer\Plugin\PluginManager::loadInstalledPlugins`     | `composer/src/Composer/Plugin/PluginManager.php`          |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `(anonymous)`                                             | `composer/src/Composer/Command/AboutCommand.php`          |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `(anonymous)`                                             | `composer/src/Composer/Command/DependsCommand.php`        |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `(anonymous)`                                             | `composer/src/Composer/Command/InstallCommand.php`        |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `Composer\IO\BaseIO::loadConfiguration`                   | `composer/src/Composer/IO/BaseIO.php`                     |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `Composer\Factory::createInstallationManager`             | `composer/src/Composer/Factory.php`                       |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |     Delta |             % |              Time |       Samples | Function                                                      | Location                                                                 |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  -5.3% | -220.00ms |        100.0% |     4.16s → 3.94s | 3,261 → 3,250 | `(anonymous)`                                                 | `profile.php`                                                            |
|  -5.2% | -217.00ms | 99.8% → 99.9% |     4.15s → 3.94s | 3,254 → 3,246 | `Symfony\Component\Console\Application::run`                  | `composer/vendor/symfony/console/Application.php`                        |
|  -5.2% | -217.00ms | 99.8% → 99.9% |     4.15s → 3.94s | 3,254 → 3,246 | `Composer\Console\Application::run`                           | `composer/src/Composer/Console/Application.php`                          |
| -94.4% | -152.00ms |   3.9% → 0.2% |   161.0ms → 9.0ms |         1 → 2 | `Symfony\Component\Console\Terminal::getHeight`               | `composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::readFromProcess`         | `composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::getSttyColumns`          | `composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::initDimensions`          | `composer/vendor/symfony/console/Terminal.php`                           |
|  -1.7% |  -67.00ms | 95.8% → 99.5% |     3.99s → 3.92s | 3,252 → 3,242 | `Composer\Console\Application::doRun`                         | `composer/src/Composer/Console/Application.php`                          |
| -13.2% |  -38.00ms |   6.9% → 6.3% | 287.0ms → 249.0ms |       43 → 39 | `Composer\Util\Silencer::call`                                | `composer/src/Composer/Util/Silencer.php`                                |
|  -1.0% |  -38.00ms | 88.7% → 92.7% |     3.69s → 3.65s | 3,200 → 3,185 | `Symfony\Component\Console\Application::doRun`                | `composer/vendor/symfony/console/Application.php`                        |
|  -1.0% |  -38.00ms | 88.7% → 92.6% |     3.69s → 3.65s | 3,198 → 3,183 | `Symfony\Component\Console\Command\Command::run`              | `composer/vendor/symfony/console/Command/Command.php`                    |
|  -1.0% |  -38.00ms | 88.7% → 92.6% |     3.69s → 3.65s | 3,198 → 3,183 | `Symfony\Component\Console\Application::doRunCommand`         | `composer/vendor/symfony/console/Application.php`                        |
|  -0.8% |  -24.00ms | 70.7% → 74.0% |     2.94s → 2.92s | 2,929 → 2,920 | `Composer\Autoload\AutoloadGenerator::dump`                   | `composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  -0.7% |  -22.00ms | 70.7% → 74.1% |     2.94s → 2.92s | 2,929 → 2,922 | `Composer\Command\DumpAutoloadCommand::execute`               | `composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
|  -0.8% |  -19.00ms | 60.5% → 63.4% |     2.52s → 2.50s | 2,505 → 2,501 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`       | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  -0.6% |  -18.00ms | 66.9% → 70.1% |     2.78s → 2.76s | 2,769 → 2,766 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`     | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  -9.1% |  -18.00ms |   4.7% → 4.5% | 197.0ms → 179.0ms |     186 → 179 | `Composer\Pcre\Preg::matchAll`                                | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms |     269 → 261 | `Composer\Factory::createComposer`                            | `composer/src/Composer/Factory.php`                                      |
|  -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms |     269 → 261 | `Composer\Factory::create`                                    | `composer/src/Composer/Factory.php`                                      |

##### Third-party

| Change |     Delta |             % |              Time |       Samples | Function                                                      | Location                                                                 |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  -5.2% | -217.00ms | 99.8% → 99.9% |     4.15s → 3.94s | 3,254 → 3,246 | `Symfony\Component\Console\Application::run`                  | `composer/vendor/symfony/console/Application.php`                        |
| -94.4% | -152.00ms |   3.9% → 0.2% |   161.0ms → 9.0ms |         1 → 2 | `Symfony\Component\Console\Terminal::getHeight`               | `composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::readFromProcess`         | `composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::getSttyColumns`          | `composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms |         2 → 3 | `Symfony\Component\Console\Terminal::initDimensions`          | `composer/vendor/symfony/console/Terminal.php`                           |
|  -1.0% |  -38.00ms | 88.7% → 92.7% |     3.69s → 3.65s | 3,200 → 3,185 | `Symfony\Component\Console\Application::doRun`                | `composer/vendor/symfony/console/Application.php`                        |
|  -1.0% |  -38.00ms | 88.7% → 92.6% |     3.69s → 3.65s | 3,198 → 3,183 | `Symfony\Component\Console\Command\Command::run`              | `composer/vendor/symfony/console/Command/Command.php`                    |
|  -1.0% |  -38.00ms | 88.7% → 92.6% |     3.69s → 3.65s | 3,198 → 3,183 | `Symfony\Component\Console\Application::doRunCommand`         | `composer/vendor/symfony/console/Application.php`                        |
|  -0.8% |  -19.00ms | 60.5% → 63.4% |     2.52s → 2.50s | 2,505 → 2,501 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`       | `composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  -0.6% |  -18.00ms | 66.9% → 70.1% |     2.78s → 2.76s | 2,769 → 2,766 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`     | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  -9.1% |  -18.00ms |   4.7% → 4.5% | 197.0ms → 179.0ms |     186 → 179 | `Composer\Pcre\Preg::matchAll`                                | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -2.2% |  -14.00ms | 15.5% → 16.0% | 645.0ms → 631.0ms |     166 → 160 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`     | `composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
|  -2.2% |  -14.00ms | 15.5% → 16.0% | 646.0ms → 632.0ms |     167 → 161 | `Symfony\Component\Process\Process::readPipes`                | `composer/vendor/symfony/process/Process.php`                            |
|  -8.9% |  -14.00ms |   3.8% → 3.7% | 158.0ms → 144.0ms |     151 → 144 | `Composer\Pcre\Preg::matchAllStrictGroups`                    | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -0.7% |  -12.00ms | 39.9% → 41.8% |     1.66s → 1.64s | 1,660 → 1,648 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`            | `composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  -4.3% |  -12.00ms |   6.6% → 6.7% | 276.0ms → 264.0ms |     276 → 264 | `Composer\Pcre\Preg::pregMatch`                               | `composer/vendor/composer/pcre/src/Preg.php`                             |
|  -1.7% |  -11.00ms | 15.6% → 16.2% | 650.0ms → 639.0ms |     171 → 168 | `Symfony\Component\Process\Process::wait`                     | `composer/vendor/symfony/process/Process.php`                            |
|  -7.8% |  -11.00ms |   3.4% → 3.3% | 141.0ms → 130.0ms |     141 → 130 | `Composer\Pcre\Preg::enforceNonNullMatches`                   | `composer/vendor/composer/pcre/src/Preg.php`                             |
| -30.6% |  -11.00ms |   0.9% → 0.6% |   36.0ms → 25.0ms |       36 → 25 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### Ours

|  Change |     Delta |             % |              Time |       Samples | Function                                                      | Location                                                     |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
|   -5.3% | -220.00ms |        100.0% |     4.16s → 3.94s | 3,261 → 3,250 | `(anonymous)`                                                 | `profile.php`                                                |
|   -5.2% | -217.00ms | 99.8% → 99.9% |     4.15s → 3.94s | 3,254 → 3,246 | `Composer\Console\Application::run`                           | `composer/src/Composer/Console/Application.php`              |
|   -1.7% |  -67.00ms | 95.8% → 99.5% |     3.99s → 3.92s | 3,252 → 3,242 | `Composer\Console\Application::doRun`                         | `composer/src/Composer/Console/Application.php`              |
|  -13.2% |  -38.00ms |   6.9% → 6.3% | 287.0ms → 249.0ms |       43 → 39 | `Composer\Util\Silencer::call`                                | `composer/src/Composer/Util/Silencer.php`                    |
|   -0.8% |  -24.00ms | 70.7% → 74.0% |     2.94s → 2.92s | 2,929 → 2,920 | `Composer\Autoload\AutoloadGenerator::dump`                   | `composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|   -0.7% |  -22.00ms | 70.7% → 74.1% |     2.94s → 2.92s | 2,929 → 2,922 | `Composer\Command\DumpAutoloadCommand::execute`               | `composer/src/Composer/Command/DumpAutoloadCommand.php`      |
|   -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms |     269 → 261 | `Composer\Factory::createComposer`                            | `composer/src/Composer/Factory.php`                          |
|   -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms |     269 → 261 | `Composer\Factory::create`                                    | `composer/src/Composer/Factory.php`                          |
|   -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms |     269 → 261 | `Composer\Console\Application::getComposer`                   | `composer/src/Composer/Console/Application.php`              |
|   -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms |     269 → 261 | `Composer\Command\BaseCommand::tryComposer`                   | `composer/src/Composer/Command/BaseCommand.php`              |
|   -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms |     269 → 261 | `Composer\Command\BaseCommand::initialize`                    | `composer/src/Composer/Command/BaseCommand.php`              |
|   -1.8% |  -13.00ms | 17.1% → 17.7% | 710.0ms → 697.0ms |     231 → 226 | `Composer\Package\Loader\RootPackageLoader::load`             | `composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|   -1.8% |  -13.00ms | 16.9% → 17.5% | 705.0ms → 692.0ms |     226 → 221 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   -1.6% |  -11.00ms | 16.8% → 17.5% | 701.0ms → 690.0ms |     222 → 219 | `Composer\Util\ProcessExecutor::runProcess`                   | `composer/src/Composer/Util/ProcessExecutor.php`             |
|   -1.6% |  -11.00ms | 16.9% → 17.5% | 703.0ms → 692.0ms |     224 → 221 | `Composer\Util\ProcessExecutor::doExecute`                    | `composer/src/Composer/Util/ProcessExecutor.php`             |
|   -1.6% |  -11.00ms | 16.9% → 17.5% | 703.0ms → 692.0ms |     224 → 221 | `Composer\Util\ProcessExecutor::execute`                      | `composer/src/Composer/Util/ProcessExecutor.php`             |
|   -5.6% |   -7.00ms |          3.0% | 125.0ms → 118.0ms |            63 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   -7.9% |   -5.00ms |          1.5% |   63.0ms → 58.0ms |       63 → 58 | `Composer\Util\Filesystem::normalizePath`                     | `composer/src/Composer/Util/Filesystem.php`                  |
| removed |   -4.00ms |   0.1% → 0.0% |       4.0ms → 0ms |         4 → 0 | `Composer\Util\ErrorHandler::handle`                          | `composer/src/Composer/Util/ErrorHandler.php`                |
| removed |   -4.00ms |   0.1% → 0.0% |       4.0ms → 0ms |         4 → 0 | `Composer\Util\Silencer::suppress`                            | `composer/src/Composer/Util/Silencer.php`                    |

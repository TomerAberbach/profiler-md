# Sampling profile

Took 3.92s.

| Category    |     % |    Time |
| ----------- | ----: | ------: |
| Third-party | 91.4% |   3.58s |
| Ours        |  8.6% | 339.0ms |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

Call stacks missing their outermost callers account for 23.0% of the time spent.

`…` stands for omitted frames. `truncated` stands for missing outermost callers.

## Call tree

Call paths to the hottest functions.

```
├── … 3.01s (76.8%) Symfony\Component\Console\Application::run at ./composer/vendor/symfony/console/Application.php
│   ├── 2.84s (72.3%) Composer\Console\Application::doRun at ./composer/src/Composer/Console/Application.php
│   │   ├── … 2.57s (65.6%) Symfony\Component\Console\Command\Command::run at ./composer/vendor/symfony/console/Command/Command.php
│   │   │   ├── 2.55s (65.1%) Composer\Command\DumpAutoloadCommand::execute at ./composer/src/Composer/Command/DumpAutoloadCommand.php
│   │   │   │   └── 2.55s (65.1%) Composer\Autoload\AutoloadGenerator::dump at ./composer/src/Composer/Autoload/AutoloadGenerator.php
│   │   │   │       ├── 2.41s (61.4%, self 1.6%) Composer\ClassMapGenerator\ClassMapGenerator::scanPaths at ./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php
│   │   │   │       │   ├── 2.23s (56.8%, self 16.1%) Composer\ClassMapGenerator\PhpFileParser::findClasses at ./composer/vendor/composer/class-map-generator/src/PhpFileParser.php
│   │   │   │       │   │   ├── 1.43s (36.5%, self 10.8%) Composer\ClassMapGenerator\PhpFileCleaner::clean at ./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php
│   │   │   │       │   │   │   ├── 793.0ms (20.2%, self 2.5%) Composer\ClassMapGenerator\PhpFileCleaner::match
│   │   │   │       │   │   │   │   └── 694.0ms (17.7%, self 3.3%) Composer\Pcre\Preg::isMatchStrictGroups at ./composer/vendor/composer/pcre/src/Preg.php
│   │   │   │       │   │   │   │       └── 563.0ms (14.4%, self 3.4%) Composer\Pcre\Preg::matchStrictGroups
│   │   │   │       │   │   │   │           ├── 291.0ms (7.4%, self 3.4%) Composer\Pcre\Preg::match
│   │   │   │       │   │   │   │           │   ├── 91.0ms (2.3%) Composer\Pcre\Preg::checkOffsetCapture
│   │   │   │       │   │   │   │           │   └── 65.0ms (1.7%) Composer\Pcre\Preg::pregMatch
│   │   │   │       │   │   │   │           └── 138.0ms (3.5%) Composer\Pcre\Preg::enforceNonNullMatches
│   │   │   │       │   │   │   ├── 197.0ms (5.0%, self 5.0%) Composer\ClassMapGenerator\PhpFileCleaner::skipString
│   │   │   │       │   │   │   └── 4.0ms (0.1%) Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp
│   │   │   │       │   │   ├── 121.0ms (3.1%) Composer\Pcre\Preg::matchAllStrictGroups at ./composer/vendor/composer/pcre/src/Preg.php
│   │   │   │       │   │   │   └── 117.0ms (3.0%, self 2.9%, self 4.0% globally) Composer\Pcre\Preg::matchAll
│   │   │   │       │   │   └── 42.0ms (1.1%) Composer\Pcre\Preg::matchAll at ./composer/vendor/composer/pcre/src/Preg.php
│   │   │   │       │   ├── 45.0ms (1.1%) Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren at ./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php
│   │   │   │       │   │   └── 44.0ms (1.1%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
│   │   │   │       │   ├── 14.0ms (0.4%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
│   │   │   │       │   └── 58.0ms (1.5%) 14 more callees, led by (0.5%) Composer\ClassMapGenerator\ClassMapGenerator::normalizePath
│   │   │   │       └── 142.0ms (3.6%) 7 more callees, led by (2.9%) Composer\Autoload\AutoloadGenerator::getPathCode
│   │   │   └── 20.0ms (0.5%) Composer\Command\BaseCommand::initialize at ./composer/src/Composer/Command/BaseCommand.php …
│   │   ├── 243.0ms (6.2%, self 5.9%) Composer\Util\Silencer::call at ./composer/src/Composer/Util/Silencer.php
│   │   └── … 9.0ms (0.2%) Composer\Autoload\ClassLoader::loadClass at ./composer/vendor/composer/ClassLoader.php
│   └── … 169.0ms (4.3%) Symfony\Component\Console\Terminal::readFromProcess at ./composer/vendor/symfony/console/Terminal.php
└── 903.0ms (23.0%) truncated
    ├── … 444.0ms (11.3%) Composer\Package\Version\VersionGuesser::guessVersion at ./composer/src/Composer/Package/Version/VersionGuesser.php
    │   ├── … 256.0ms (6.5%, self 14.7% globally) Symfony\Component\Process\Pipes\UnixPipes::readAndWrite at ./composer/vendor/symfony/process/Pipes/UnixPipes.php
    │   └── 187.0ms (4.8%) 3 more callees, led by (2.4%) Composer\Package\Version\VersionGuesser::guessFossilVersion
    ├── … 253.0ms (6.5%) Composer\ClassMapGenerator\ClassMapGenerator::scanPaths at ./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php
    │   ├── … 201.0ms (5.1%, self 7.3% globally) Composer\Pcre\Preg::pregMatch at ./composer/vendor/composer/pcre/src/Preg.php
    │   └── … 51.0ms (1.3%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
    ├── … 32.0ms (0.8%) Composer\Package\Version\VersionGuesser::guessVersion at ./composer/src/Composer/Package/Version/VersionGuesser.php
    │   ├── … 10.0ms (0.3%, self 0.9% globally) Symfony\Component\Process\Process::start at ./composer/vendor/symfony/process/Process.php
    │   └── 8.0ms (0.2%) Composer\Package\Version\VersionGuesser::guessFossilVersion
    └── 172.0ms (4.4%) 7 more root frames, led by (3.3%) Composer\Command\BaseCommand::initialize at ./composer/src/Composer/Command/BaseCommand.php
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Function                                                                    | Location                                                                   |
| ----: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 16.1% | 630.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 14.7% | 576.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.8% | 423.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  7.3% | 287.0ms | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.9% | 233.0ms | `Composer\Util\Silencer::call`                                              | `./composer/src/Composer/Util/Silencer.php`                                |
|  5.0% | 196.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.4% | 174.0ms | `Symfony\Component\Console\Terminal::readFromProcess`                       | `./composer/vendor/symfony/console/Terminal.php`                           |
|  4.0% | 157.0ms | `Composer\Pcre\Preg::matchAll`                                              | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 148.0ms | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.6% | 142.0ms | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.5% | 139.0ms | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 134.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.5% |  99.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.4% |  96.0ms | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  1.6% |  64.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.4% |  55.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  44.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.9% |  36.0ms | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  0.8% |  32.0ms | `Composer\Util\Filesystem::normalizePath`                                   | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.5% |  19.0ms | `Composer\Pcre\Preg::replaceCallback`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                             |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Function                                                                    | Location                                                                   |
| ----: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 16.1% | 630.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 14.7% | 576.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.8% | 423.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  7.3% | 287.0ms | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.0% | 196.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.4% | 174.0ms | `Symfony\Component\Console\Terminal::readFromProcess`                       | `./composer/vendor/symfony/console/Terminal.php`                           |
|  4.0% | 157.0ms | `Composer\Pcre\Preg::matchAll`                                              | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 148.0ms | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.6% | 142.0ms | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.5% | 139.0ms | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 134.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.5% |  99.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.4% |  96.0ms | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  1.6% |  64.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.4% |  55.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  44.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.9% |  36.0ms | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  0.5% |  19.0ms | `Composer\Pcre\Preg::replaceCallback`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  0.4% |  16.0ms | `Composer\Autoload\ClassLoader::loadClass`                                  | `./composer/vendor/composer/ClassLoader.php`                               |
|  0.4% |  14.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`        | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |

##### Ours

|     % |    Time | Function                                                 | Location                                                      |
| ----: | ------: | -------------------------------------------------------- | ------------------------------------------------------------- |
|  5.9% | 233.0ms | `Composer\Util\Silencer::call`                           | `./composer/src/Composer/Util/Silencer.php`                   |
|  0.8% |  32.0ms | `Composer\Util\Filesystem::normalizePath`                | `./composer/src/Composer/Util/Filesystem.php`                 |
|  0.5% |  18.0ms | `Composer\Util\Filesystem::findShortestPath`             | `./composer/src/Composer/Util/Filesystem.php`                 |
|  0.3% |  10.0ms | `(anonymous)`                                            | `./composer/src/Composer/Console/Application.php:353`         |
|  0.2% |   6.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`       | `./composer/src/Composer/Autoload/AutoloadGenerator.php`      |
|  0.1% |   3.0ms | `Composer\Autoload\AutoloadGenerator::dump`              | `./composer/src/Composer/Autoload/AutoloadGenerator.php`      |
|  0.1% |   2.0ms | `(file scope)`                                           | `./composer/src/Composer/Command/ShowCommand.php`             |
|  0.1% |   2.0ms | `Composer\Util\Silencer::suppress`                       | `./composer/src/Composer/Util/Silencer.php`                   |
|  0.1% |   2.0ms | `Composer\EventDispatcher\EventDispatcher::getListeners` | `./composer/src/Composer/EventDispatcher/EventDispatcher.php` |
|  0.1% |   2.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile`     | `./composer/src/Composer/Autoload/AutoloadGenerator.php`      |
|  0.1% |   2.0ms | `Composer\Util\Filesystem::isAbsolutePath`               | `./composer/src/Composer/Util/Filesystem.php`                 |
|  0.1% |   2.0ms | `Composer\Util\Filesystem::isReadable`                   | `./composer/src/Composer/Util/Filesystem.php`                 |
| <0.1% |   1.0ms | `(file scope)`                                           | `./composer/src/Composer/Console/Application.php`             |
| <0.1% |   1.0ms | `Composer\Console\Application::doRun`                    | `./composer/src/Composer/Console/Application.php`             |
| <0.1% |   1.0ms | `(file scope)`                                           | `./composer/src/Composer/Command/CreateProjectCommand.php`    |
| <0.1% |   1.0ms | `(file scope)`                                           | `./composer/src/Composer/Command/ArchiveCommand.php`          |
| <0.1% |   1.0ms | `Composer\Util\ErrorHandler::handle`                     | `./composer/src/Composer/Util/ErrorHandler.php`               |
| <0.1% |   1.0ms | `Composer\Factory::createComposer`                       | `./composer/src/Composer/Factory.php`                         |
| <0.1% |   1.0ms | `Composer\Factory::createConfig`                         | `./composer/src/Composer/Factory.php`                         |
| <0.1% |   1.0ms | `Composer\Util\StreamContextFactory::getTlsDefaults`     | `./composer/src/Composer/Util/StreamContextFactory.php`       |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |    Time | Caller                                                    | Location                                                                   |
| -----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 630.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Caller                                         | Location                                        |
| -----: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 576.0ms | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                                  | Location                                                               |
| -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 423.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                      | Location                                       |
| -----: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 287.0ms | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Caller                                                | Location                                          |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 99.6% | 232.0ms | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  0.4% |   1.0ms | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                             | Location                                                                |
| -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 196.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Caller                                               | Location                                         |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                                  | Location                                                               |
| ----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 73.2% | 115.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| 26.8% |  42.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                  | Location                                       |
| ----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 94.6% | 140.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  5.4% |   8.0ms | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                    | Location                                       |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 100.0% | 142.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                  | Location                                       |
| -----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 100.0% | 139.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                                        | Location                                                                   |
| ----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 97.8% | 131.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  1.5% |   2.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.7% |   1.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |   Time | Caller                                             | Location                                                                |
| -----: | -----: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 99.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Caller                         | Location                                       |
| ----: | -----: | ------------------------------ | ---------------------------------------------- |
| 99.0% | 95.0ms | `Composer\Pcre\Preg::match`    | `./composer/vendor/composer/pcre/src/Preg.php` |
|  1.0% |  1.0ms | `Composer\Pcre\Preg::matchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Caller                                      | Location                                                 |
| -----: | -----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 64.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|     % |   Time | Caller                                                                      | Location                                                                   |
| ----: | -----: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 94.5% | 52.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  5.5% |  3.0ms | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `./composer/vendor/symfony/finder/Finder.php`                              |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Caller                                                                          | Location                                                                       |
| -----: | -----: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% | 44.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

|      % |   Time | Caller                                   | Location                                        |
| -----: | -----: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% | 36.0ms | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`)

|     % |   Time | Caller                                             | Location                                                 |
| ----: | -----: | -------------------------------------------------- | -------------------------------------------------------- |
| 65.6% | 21.0ms | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |
| 31.3% | 10.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  3.1% |  1.0ms | `Composer\Util\Filesystem::findShortestPathCode`   | `./composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\Pcre\Preg::replaceCallback` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Caller                                                        | Location                                                                   |
| ----: | -----: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 84.2% | 16.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
| 10.5% |  2.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  5.3% |  1.0ms | `Composer\Util\Platform::expandPath`                          | `./composer/src/Composer/Util/Platform.php`                                |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |   Time | Caller                                             | Location                                                 |
| -----: | -----: | -------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 18.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Autoload\ClassLoader::loadClass` (`./composer/vendor/composer/ClassLoader.php`)

|     % |  Time | Caller                                             | Location                                                    |
| ----: | ----: | -------------------------------------------------- | ----------------------------------------------------------- |
| 12.5% | 2.0ms | `Composer\Console\Application::doRun`              | `./composer/src/Composer/Console/Application.php`           |
| 12.5% | 2.0ms | `Composer\Console\Application::getDefaultCommands` | `./composer/src/Composer/Console/Application.php`           |
| 12.5% | 2.0ms | `Composer\Factory::createComposer`                 | `./composer/src/Composer/Factory.php`                       |
| 12.5% | 2.0ms | `Composer\Util\HttpDownloader::__construct`        | `./composer/src/Composer/Util/HttpDownloader.php`           |
|  6.3% | 1.0ms | `(file scope)`                                     | `./composer/vendor/symfony/console/Command/HelpCommand.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Caller                                                    | Location                                                                   |
| -----: | -----: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 14.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:353`)

|      % |   Time | Caller                         | Location                                    |
| -----: | -----: | ------------------------------ | ------------------------------------------- |
| 100.0% | 10.0ms | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Caller                                      | Location                                                 |
| -----: | ----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 6.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Caller                                          | Location                                                  |
| -----: | ----: | ----------------------------------------------- | --------------------------------------------------------- |
| 100.0% | 3.0ms | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `(file scope)` (`./composer/src/Composer/Command/ShowCommand.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 2.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\Silencer::suppress` (`./composer/src/Composer/Util/Silencer.php`)

|      % |  Time | Caller                         | Location                                    |
| -----: | ----: | ------------------------------ | ------------------------------------------- |
| 100.0% | 2.0ms | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\EventDispatcher\EventDispatcher::getListeners` (`./composer/src/Composer/EventDispatcher/EventDispatcher.php`)

|      % |  Time | Caller                                                 | Location                                                      |
| -----: | ----: | ------------------------------------------------------ | ------------------------------------------------------------- |
| 100.0% | 2.0ms | `Composer\EventDispatcher\EventDispatcher::doDispatch` | `./composer/src/Composer/EventDispatcher/EventDispatcher.php` |

##### `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Caller                                      | Location                                                 |
| -----: | ----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::isAbsolutePath` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Caller                                             | Location                                                 |
| -----: | ----: | -------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::isReadable` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Caller                                               | Location                                                |
| -----: | ----: | ---------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 2.0ms | `Composer\Util\StreamContextFactory::getTlsDefaults` | `./composer/src/Composer/Util/StreamContextFactory.php` |

##### `(file scope)` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Caller                                       | Location                                            |
| -----: | ----: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 1.0ms | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `(file scope)` (`./composer/src/Composer/Command/CreateProjectCommand.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Command/ArchiveCommand.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\ErrorHandler::handle` (`./composer/src/Composer/Util/ErrorHandler.php`)

|      % |  Time | Caller                             | Location                                    |
| -----: | ----: | ---------------------------------- | ------------------------------------------- |
| 100.0% | 1.0ms | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|      % |  Time | Caller                     | Location                              |
| -----: | ----: | -------------------------- | ------------------------------------- |
| 100.0% | 1.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Factory::createConfig` (`./composer/src/Composer/Factory.php`)

|      % |  Time | Caller                             | Location                              |
| -----: | ----: | ---------------------------------- | ------------------------------------- |
| 100.0% | 1.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Util\StreamContextFactory::getTlsDefaults` (`./composer/src/Composer/Util/StreamContextFactory.php`)

|      % |  Time | Caller                                      | Location                                          |
| -----: | ----: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 1.0ms | `Composer\Util\HttpDownloader::__construct` | `./composer/src/Composer/Util/HttpDownloader.php` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Function                                                  | Location                                                                   |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 84.8% |   3.33s | `Symfony\Component\Console\Command\Command::run`          | `./composer/vendor/symfony/console/Command/Command.php`                    |
| 83.4% |   3.27s | `Symfony\Component\Console\Application::run`              | `./composer/vendor/symfony/console/Application.php`                        |
| 83.2% |   3.27s | `Composer\Console\Application::run`                       | `./composer/src/Composer/Console/Application.php`                          |
| 79.0% |   3.10s | `Composer\Console\Application::doRun`                     | `./composer/src/Composer/Console/Application.php`                          |
| 77.0% |   3.02s | `(file scope)`                                            | `./profile.php`                                                            |
| 73.5% |   2.88s | `Symfony\Component\Console\Application::doRunCommand`     | `./composer/vendor/symfony/console/Application.php`                        |
| 73.2% |   2.87s | `Symfony\Component\Console\Application::doRun`            | `./composer/vendor/symfony/console/Application.php`                        |
| 71.5% |   2.81s | `Composer\Autoload\AutoloadGenerator::dump`               | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
| 71.5% |   2.81s | `Composer\Command\DumpAutoloadCommand::execute`           | `./composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
| 67.8% |   2.66s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 61.9% |   2.43s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 41.7% |   1.64s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 25.4% | 995.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 23.6% | 926.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 20.2% | 792.0ms | `Composer\Pcre\Preg::matchStrictGroups`                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 17.1% | 670.0ms | `Composer\Factory::createComposer`                        | `./composer/src/Composer/Factory.php`                                      |
| 17.0% | 667.0ms | `Composer\Factory::create`                                | `./composer/src/Composer/Factory.php`                                      |
| 17.0% | 666.0ms | `Composer\Console\Application::getComposer`               | `./composer/src/Composer/Console/Application.php`                          |
| 17.0% | 666.0ms | `Composer\Command\BaseCommand::tryComposer`               | `./composer/src/Composer/Command/BaseCommand.php`                          |
| 16.6% | 653.0ms | `Composer\Command\BaseCommand::initialize`                | `./composer/src/Composer/Command/BaseCommand.php`                          |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Function                                                      | Location                                                                   |
| ----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 84.8% |   3.33s | `Symfony\Component\Console\Command\Command::run`              | `./composer/vendor/symfony/console/Command/Command.php`                    |
| 83.4% |   3.27s | `Symfony\Component\Console\Application::run`                  | `./composer/vendor/symfony/console/Application.php`                        |
| 73.5% |   2.88s | `Symfony\Component\Console\Application::doRunCommand`         | `./composer/vendor/symfony/console/Application.php`                        |
| 73.2% |   2.87s | `Symfony\Component\Console\Application::doRun`                | `./composer/vendor/symfony/console/Application.php`                        |
| 67.8% |   2.66s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`     | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 61.9% |   2.43s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`       | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 41.7% |   1.64s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 25.4% | 995.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 23.6% | 926.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 20.2% | 792.0ms | `Composer\Pcre\Preg::matchStrictGroups`                       | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 15.9% | 624.0ms | `Symfony\Component\Process\Process::run`                      | `./composer/vendor/symfony/process/Process.php`                            |
| 14.8% | 580.0ms | `Symfony\Component\Process\Process::wait`                     | `./composer/vendor/symfony/process/Process.php`                            |
| 14.8% | 579.0ms | `Symfony\Component\Process\Process::readPipes`                | `./composer/vendor/symfony/process/Process.php`                            |
| 14.7% | 577.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`     | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 13.5% | 530.0ms | `Composer\Pcre\Preg::match`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  7.3% | 287.0ms | `Composer\Pcre\Preg::pregMatch`                               | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.0% | 197.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.4% | 174.0ms | `Symfony\Component\Console\Terminal::readFromProcess`         | `./composer/vendor/symfony/console/Terminal.php`                           |
|  4.4% | 174.0ms | `Symfony\Component\Console\Terminal::getSttyColumns`          | `./composer/vendor/symfony/console/Terminal.php`                           |
|  4.4% | 174.0ms | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php`                           |

##### Ours

|     % |    Time | Function                                                      | Location                                                       |
| ----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------- |
| 83.2% |   3.27s | `Composer\Console\Application::run`                           | `./composer/src/Composer/Console/Application.php`              |
| 79.0% |   3.10s | `Composer\Console\Application::doRun`                         | `./composer/src/Composer/Console/Application.php`              |
| 77.0% |   3.02s | `(file scope)`                                                | `./profile.php`                                                |
| 71.5% |   2.81s | `Composer\Autoload\AutoloadGenerator::dump`                   | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
| 71.5% |   2.81s | `Composer\Command\DumpAutoloadCommand::execute`               | `./composer/src/Composer/Command/DumpAutoloadCommand.php`      |
| 17.1% | 670.0ms | `Composer\Factory::createComposer`                            | `./composer/src/Composer/Factory.php`                          |
| 17.0% | 667.0ms | `Composer\Factory::create`                                    | `./composer/src/Composer/Factory.php`                          |
| 17.0% | 666.0ms | `Composer\Console\Application::getComposer`                   | `./composer/src/Composer/Console/Application.php`              |
| 17.0% | 666.0ms | `Composer\Command\BaseCommand::tryComposer`                   | `./composer/src/Composer/Command/BaseCommand.php`              |
| 16.6% | 653.0ms | `Composer\Command\BaseCommand::initialize`                    | `./composer/src/Composer/Command/BaseCommand.php`              |
| 16.1% | 633.0ms | `Composer\Package\Loader\RootPackageLoader::load`             | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
| 16.0% | 628.0ms | `Composer\Package\Version\VersionGuesser::guessVersion`       | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
| 16.0% | 627.0ms | `Composer\Util\ProcessExecutor::runProcess`                   | `./composer/src/Composer/Util/ProcessExecutor.php`             |
| 16.0% | 627.0ms | `Composer\Util\ProcessExecutor::doExecute`                    | `./composer/src/Composer/Util/ProcessExecutor.php`             |
| 16.0% | 627.0ms | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`             |
| 10.6% | 414.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  6.3% | 249.0ms | `Composer\Util\Silencer::call`                                | `./composer/src/Composer/Util/Silencer.php`                    |
|  3.4% | 134.0ms | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  2.9% | 113.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`            | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  2.6% | 103.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

|     % |  Time | Caller                                                | Location                                            |
| ----: | ----: | ----------------------------------------------------- | --------------------------------------------------- |
| 86.7% | 2.88s | `Symfony\Component\Console\Application::doRunCommand` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Caller                              | Location                                          |
| ----: | ----: | ----------------------------------- | ------------------------------------------------- |
| 99.8% | 3.27s | `Composer\Console\Application::run` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

|     % |  Time | Caller         | Location        |
| ----: | ----: | -------------- | --------------- |
| 92.2% | 3.01s | `(file scope)` | `./profile.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|     % |  Time | Caller                                       | Location                                            |
| ----: | ----: | -------------------------------------------- | --------------------------------------------------- |
| 99.9% | 3.10s | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Caller                                         | Location                                            |
| ----: | ----: | ---------------------------------------------- | --------------------------------------------------- |
| 99.4% | 2.87s | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Caller                                | Location                                          |
| ----: | ----: | ------------------------------------- | ------------------------------------------------- |
| 98.8% | 2.84s | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Caller                                          | Location                                                  |
| -----: | ----: | ----------------------------------------------- | --------------------------------------------------------- |
| 100.0% | 2.81s | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Caller                                           | Location                                                |
| -----: | ----: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 2.81s | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |  Time | Caller                                      | Location                                                 |
| -----: | ----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.66s | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |  Time | Caller                                                    | Location                                                                   |
| -----: | ----: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 2.43s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |  Time | Caller                                                  | Location                                                               |
| -----: | ----: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 1.64s | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Caller                                                   | Location                                                                |
| ----: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 99.9% | 994.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.1% |   1.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                                        | Location                                                                   |
| ----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 96.8% | 896.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.2% |  20.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
|  1.1% |  10.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                    | Location                                       |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 100.0% | 792.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|     % |    Time | Caller                     | Location                              |
| ----: | ------: | -------------------------- | ------------------------------------- |
| 99.6% | 667.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

|     % |    Time | Caller                                      | Location                                          |
| ----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 99.9% | 666.0ms | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

|      % |    Time | Caller                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 666.0ms | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

|     % |    Time | Caller                                     | Location                                          |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------- |
| 98.0% | 653.0ms | `Composer\Command\BaseCommand::initialize` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

|     % |    Time | Caller                                           | Location                                                |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 79.9% | 522.0ms | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|      % |    Time | Caller                             | Location                              |
| -----: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 633.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                            | Location                                                       |
| -----: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 628.0ms | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Caller                                     | Location                                           |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 627.0ms | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Caller                                   | Location                                           |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 627.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Caller                                                        | Location                                                     |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 43.5% | 273.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 21.4% | 134.0ms | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 16.4% | 103.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.9% |  56.0ms | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.8% |  55.0ms | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Caller                                      | Location                                           |
| -----: | ------: | ------------------------------------------- | -------------------------------------------------- |
| 100.0% | 624.0ms | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Caller                                   | Location                                        |
| -----: | ------: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% | 580.0ms | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Caller                                            | Location                                        |
| ----: | ------: | ------------------------------------------------- | ----------------------------------------------- |
| 99.5% | 576.0ms | `Symfony\Component\Process\Process::wait`         | `./composer/vendor/symfony/process/Process.php` |
|  0.5% |   3.0ms | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Caller                                         | Location                                        |
| -----: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 577.0ms | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                  | Location                                       |
| ----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 96.4% | 511.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  3.6% |  19.0ms | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                                  | Location                                                     |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 414.0ms | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                      | Location                                       |
| -----: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 287.0ms | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Caller                                                | Location                                          |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 97.6% | 243.0ms | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  1.6% |   4.0ms | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |
|  0.8% |   2.0ms | `Composer\Console\Application::__construct`           | `./composer/src/Composer/Console/Application.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                             | Location                                                                |
| -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 197.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Caller                                               | Location                                         |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Caller                                                        | Location                                         |
| -----: | ------: | ------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensionsUsingStty` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Caller                                               | Location                                         |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms | `Symfony\Component\Console\Terminal::initDimensions` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                                     | Location                                                     |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 134.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |    Time | Caller                                      | Location                                                 |
| -----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 113.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                                  | Location                                                     |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 103.0ms | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

|     % |    Time | Callee                                          | Location                                                  |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------- |
| 84.3% |   2.81s | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |
| 15.7% | 522.0ms | `Composer\Command\BaseCommand::initialize`      | `./composer/src/Composer/Command/BaseCommand.php`         |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

|     % |    Time | Callee                                          | Location                                          |
| ----: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| 94.7% |   3.10s | `Composer\Console\Application::doRun`           | `./composer/src/Composer/Console/Application.php` |
|  5.2% | 169.0ms | `Symfony\Component\Console\Terminal::getHeight` | `./composer/vendor/symfony/console/Terminal.php`  |
|  0.2% |   5.0ms | `Symfony\Component\Console\Terminal::getWidth`  | `./composer/vendor/symfony/console/Terminal.php`  |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Callee                                       | Location                                            |
| -----: | ----: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.27s | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|     % |    Time | Callee                                         | Location                                            |
| ----: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| 91.5% |   2.84s | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |
|  7.8% | 243.0ms | `Composer\Util\Silencer::call`                 | `./composer/src/Composer/Util/Silencer.php`         |
|  0.5% |  17.0ms | `Symfony\Component\Console\Application::find`  | `./composer/vendor/symfony/console/Application.php` |
|  0.1% |   2.0ms | `Composer\Autoload\ClassLoader::loadClass`     | `./composer/vendor/composer/ClassLoader.php`        |

##### `(file scope)` (`./profile.php`)

|     % |  Time | Callee                                      | Location                                          |
| ----: | ----: | ------------------------------------------- | ------------------------------------------------- |
| 99.7% | 3.01s | `Composer\Console\Application::run`         | `./composer/src/Composer/Console/Application.php` |
|  0.1% | 3.0ms | `Composer\Autoload\ClassLoader::loadClass`  | `./composer/vendor/composer/ClassLoader.php`      |
|  0.1% | 3.0ms | `Composer\Console\Application::__construct` | `./composer/src/Composer/Console/Application.php` |
|  0.1% | 2.0ms | `(file scope)`                              | `./composer/src/bootstrap.php`                    |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Callee                                           | Location                                                |
| -----: | ----: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 2.88s | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Callee                                                 | Location                                            |
| ----: | ----: | ------------------------------------------------------ | --------------------------------------------------- |
| 99.9% | 2.87s | `Symfony\Component\Console\Application::doRunCommand`  | `./composer/vendor/symfony/console/Application.php` |
| <0.1% | 1.0ms | `Symfony\Component\Console\Application::find`          | `./composer/vendor/symfony/console/Application.php` |
| <0.1% | 1.0ms | `Symfony\Component\Console\Application::getDefinition` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |    Time | Callee                                                    | Location                                                                   |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 94.8% |   2.66s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  4.0% | 113.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.7% |  20.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.2% |   5.0ms | `Composer\Util\Filesystem::filePutContentsIfModified`     | `./composer/src/Composer/Util/Filesystem.php`                              |
| <0.1% |   1.0ms | `Composer\ClassMapGenerator\ClassMap::sort`               | `./composer/vendor/composer/class-map-generator/src/ClassMap.php`          |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Callee                                      | Location                                                 |
| -----: | ----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.81s | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|     % |   Time | Callee                                                                          | Location                                                                       |
| ----: | -----: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 91.3% |  2.43s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  2.1% | 55.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  1.7% | 45.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  0.8% | 21.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  0.5% | 14.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`            | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|     % |    Time | Callee                                             | Location                                                                |
| ----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 67.3% |   1.64s | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  5.0% | 121.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`         | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|  1.7% |  42.0ms | `Composer\Pcre\Preg::matchAll`                     | `./composer/vendor/composer/pcre/src/Preg.php`                          |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Callee                                                   | Location                                                                |
| ----: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 60.8% | 994.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| 12.0% | 197.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.7% |  11.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.3% |   5.0ms | `Composer\Pcre\Preg::isMatch`                            | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|  0.2% |   4.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Callee                                    | Location                                       |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 90.1% | 896.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Callee                                  | Location                                       |
| ----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 85.5% | 792.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Callee                                      | Location                                       |
| ----: | ------: | ------------------------------------------- | ---------------------------------------------- |
| 64.5% | 511.0ms | `Composer\Pcre\Preg::match`                 | `./composer/vendor/composer/pcre/src/Preg.php` |
| 17.6% | 139.0ms | `Composer\Pcre\Preg::enforceNonNullMatches` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|     % |    Time | Callee                                            | Location                                                       |
| ----: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| 94.5% | 633.0ms | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  2.4% |  16.0ms | `Composer\Json\JsonFile::validateSchema`          | `./composer/src/Composer/Json/JsonFile.php`                    |
|  1.0% |   7.0ms | `Composer\Factory::createHttpDownloader`          | `./composer/src/Composer/Factory.php`                          |
|  0.4% |   3.0ms | `Composer\Autoload\ClassLoader::loadClass`        | `./composer/vendor/composer/ClassLoader.php`                   |
|  0.3% |   2.0ms | `Composer\Factory::createConfig`                  | `./composer/src/Composer/Factory.php`                          |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Callee                             | Location                              |
| -----: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 667.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

|      % |    Time | Callee                     | Location                              |
| -----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 666.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Callee                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 666.0ms | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Callee                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 653.0ms | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|     % |    Time | Callee                                                  | Location                                                     |
| ----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 99.2% | 628.0ms | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  0.5% |   3.0ms | `Composer\Package\Loader\ArrayLoader::load`             | `./composer/src/Composer/Package/Loader/ArrayLoader.php`     |
|  0.2% |   1.0ms | `Composer\Autoload\ClassLoader::loadClass`              | `./composer/vendor/composer/ClassLoader.php`                 |
|  0.2% |   1.0ms | `Composer\Repository\RepositoryFactory::defaultRepos`   | `./composer/src/Composer/Repository/RepositoryFactory.php`   |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Callee                                                        | Location                                                     |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 65.9% | 414.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 16.4% | 103.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.9% |  56.0ms | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.8% |  55.0ms | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Callee                                           | Location                                                      |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------------- |
| 99.5% | 624.0ms | `Symfony\Component\Process\Process::run`         | `./composer/vendor/symfony/process/Process.php`               |
|  0.2% |   1.0ms | `Symfony\Component\Process\Process::__construct` | `./composer/vendor/symfony/process/Process.php`               |
|  0.2% |   1.0ms | `Symfony\Component\Process\Process::getOutput`   | `./composer/vendor/symfony/process/Process.php`               |
|  0.2% |   1.0ms | `Seld\Signal\SignalHandler::create`              | `./composer/vendor/seld/signal-handler/src/SignalHandler.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Callee                                      | Location                                           |
| -----: | ------: | ------------------------------------------- | -------------------------------------------------- |
| 100.0% | 627.0ms | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Callee                                     | Location                                           |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 627.0ms | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Callee                                     | Location                                        |
| ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 92.9% | 580.0ms | `Symfony\Component\Process\Process::wait`  | `./composer/vendor/symfony/process/Process.php` |
|  7.1% |  44.0ms | `Symfony\Component\Process\Process::start` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Callee                                            | Location                                        |
| ----: | ------: | ------------------------------------------------- | ----------------------------------------------- |
| 99.3% | 576.0ms | `Symfony\Component\Process\Process::readPipes`    | `./composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Callee                                                    | Location                                                |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% | 577.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php` |
|  0.3% |   2.0ms | `(anonymous)`                                             | `./composer/vendor/symfony/process/Process.php:1324`    |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|    % |  Time | Callee                                                 | Location                                                    |
| ---: | ----: | ------------------------------------------------------ | ----------------------------------------------------------- |
| 0.2% | 1.0ms | `Symfony\Component\Process\Pipes\AbstractPipes::write` | `./composer/vendor/symfony/process/Pipes/AbstractPipes.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 54.2% | 287.0ms | `Composer\Pcre\Preg::pregMatch`          | `./composer/vendor/composer/pcre/src/Preg.php` |
| 17.9% |  95.0ms | `Composer\Pcre\Preg::checkOffsetCapture` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Callee                                                        | Location                                                     |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 65.9% | 273.0ms | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`           |
| 32.4% | 134.0ms | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  1.4% |   6.0ms | `Composer\Util\Git::getNoShowSignatureFlag`                   | `./composer/src/Composer/Util/Git.php`                       |
|  0.2% |   1.0ms | `Composer\Autoload\ClassLoader::loadClass`                    | `./composer/vendor/composer/ClassLoader.php`                 |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|    % |   Time | Callee                             | Location                                              |
| ---: | -----: | ---------------------------------- | ----------------------------------------------------- |
| 4.0% | 10.0ms | `(anonymous)`                      | `./composer/src/Composer/Console/Application.php:353` |
| 2.4% |  6.0ms | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php`           |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|    % |  Time | Callee                                            | Location                                                                |
| ---: | ----: | ------------------------------------------------- | ----------------------------------------------------------------------- |
| 0.5% | 1.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::peek` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Callee                                                | Location                                         |
| -----: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms | `Symfony\Component\Console\Terminal::readFromProcess` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensionsUsingStty` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Callee                                               | Location                                         |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 174.0ms | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Callee                                   | Location                                           |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 134.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |   Time | Callee                                       | Location                                      |
| ----: | -----: | -------------------------------------------- | --------------------------------------------- |
| 70.8% | 80.0ms | `Composer\Util\Filesystem::findShortestPath` | `./composer/src/Composer/Util/Filesystem.php` |
| 22.1% | 25.0ms | `Composer\Util\Filesystem::normalizePath`    | `./composer/src/Composer/Util/Filesystem.php` |
|  1.8% |  2.0ms | `Composer\Util\Filesystem::isAbsolutePath`   | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Callee                                   | Location                                           |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 103.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← `(file scope)` (`./profile.php`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 16.1% | 630.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10.8% | 423.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  6.5% | 256.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                        |
|  5.9% | 232.0ms | `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`) ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.1% | 201.0ms | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← truncated |
|  5.0% | 196.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                              |
|  4.3% | 169.0ms | `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`) ← `Symfony\Component\Console\Terminal::getSttyColumns` ← `Symfony\Component\Console\Terminal::initDimensionsUsingStty` ← `Symfony\Component\Console\Terminal::initDimensions` ← `Symfony\Component\Console\Terminal::getHeight`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.5% | 138.0ms | `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                              |
|  3.4% | 135.0ms | `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                              |
|  3.4% | 134.0ms | `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                            |
|  3.3% | 131.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                      |
|  3.2% | 125.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← truncated                                                                                                                                                                                                                     |
|  2.9% | 115.0ms | `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |  99.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.4% |  93.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                     |
|  2.3% |  91.0ms | `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                   |
|  1.7% |  65.0ms | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                            |
|  1.6% |  64.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.3% |  51.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← truncated                                                                                                                   |
|  1.3% |  50.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessHgVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                         |

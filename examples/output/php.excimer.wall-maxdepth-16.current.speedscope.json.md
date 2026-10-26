# Sampling profile

Took 3.69s over 3,134 samples (1.2ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| Third-party | 91.2% |   3.37s |   2,981 |
| Ours        |  8.8% | 327.0ms |     153 |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

Call stacks missing their outermost callers account for 22.5% of the time spent.

`…` stands for omitted frames. `truncated` stands for missing outermost callers.

## Call tree

Call paths to the hottest functions.

```
├── … 2.85s (77.3%) Symfony\Component\Console\Application::run at ./composer/vendor/symfony/console/Application.php
│   └── 2.84s (76.9%) Composer\Console\Application::doRun at ./composer/src/Composer/Console/Application.php
│       ├── … 2.61s (70.8%) Symfony\Component\Console\Command\Command::run at ./composer/vendor/symfony/console/Command/Command.php
│       │   └── 2.60s (70.3%) Composer\Command\DumpAutoloadCommand::execute at ./composer/src/Composer/Command/DumpAutoloadCommand.php
│       │       └── 2.59s (70.3%) Composer\Autoload\AutoloadGenerator::dump at ./composer/src/Composer/Autoload/AutoloadGenerator.php
│       │           ├── 2.45s (66.3%, self 1.6%) Composer\ClassMapGenerator\ClassMapGenerator::scanPaths at ./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php
│       │           │   ├── 2.27s (61.5%, self 17.9%) Composer\ClassMapGenerator\PhpFileParser::findClasses at ./composer/vendor/composer/class-map-generator/src/PhpFileParser.php
│       │           │   │   ├── 1.43s (38.7%, self 11.5%) Composer\ClassMapGenerator\PhpFileCleaner::clean at ./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php
│       │           │   │   │   ├── 804.0ms (21.7%, self 2.5%) Composer\ClassMapGenerator\PhpFileCleaner::match
│       │           │   │   │   │   └── 713.0ms (19.3%, self 4.2%) Composer\Pcre\Preg::isMatchStrictGroups at ./composer/vendor/composer/pcre/src/Preg.php
│       │           │   │   │   │       └── 559.0ms (15.1%, self 3.8%) Composer\Pcre\Preg::matchStrictGroups
│       │           │   │   │   │           ├── 285.0ms (7.7%, self 3.9%) Composer\Pcre\Preg::match
│       │           │   │   │   │           │   ├── 84.0ms (2.3%) Composer\Pcre\Preg::checkOffsetCapture
│       │           │   │   │   │           │   └── 56.0ms (1.5%) Composer\Pcre\Preg::pregMatch
│       │           │   │   │   │           └── 133.0ms (3.6%) Composer\Pcre\Preg::enforceNonNullMatches
│       │           │   │   │   ├── 177.0ms (4.8%) Composer\ClassMapGenerator\PhpFileCleaner::skipString
│       │           │   │   │   └── 15.0ms (0.4%) Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc
│       │           │   │   ├── 131.0ms (3.5%) Composer\Pcre\Preg::matchAllStrictGroups at ./composer/vendor/composer/pcre/src/Preg.php
│       │           │   │   │   └── 130.0ms (3.5%, self 3.5%, self 4.8% globally) Composer\Pcre\Preg::matchAll
│       │           │   │   └── 50.0ms (1.4%, self 1.3%) Composer\Pcre\Preg::matchAll at ./composer/vendor/composer/pcre/src/Preg.php
│       │           │   ├── 42.0ms (1.1%) Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren at ./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php
│       │           │   │   └── 40.0ms (1.1%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
│       │           │   ├── 36.0ms (1.0%) Composer\ClassMapGenerator\ClassMapGenerator::normalizePath
│       │           │   └── 40.0ms (1.1%) 9 more callees, led by (0.2%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
│       │           ├── 113.0ms (3.1%) Composer\Autoload\AutoloadGenerator::getPathCode
│       │           │   ├── 67.0ms (1.8%) Composer\Util\Filesystem::findShortestPath at ./composer/src/Composer/Util/Filesystem.php
│       │           │   │   ├── 31.0ms (0.8%, self 0.5%) Composer\Util\Filesystem::normalizePath
│       │           │   │   └── 20.0ms (0.5%) Composer\Pcre\Preg::isMatch at ./composer/vendor/composer/pcre/src/Preg.php
│       │           │   └── 29.0ms (0.8%, self 0.6%, self 1.2% globally) Composer\Util\Filesystem::normalizePath at ./composer/src/Composer/Util/Filesystem.php
│       │           └── 16.0ms (0.4%) Composer\Autoload\AutoloadGenerator::getStaticFile
│       └── 206.0ms (5.6%, self 5.2%) Composer\Util\Silencer::call at ./composer/src/Composer/Util/Silencer.php
└── 833.0ms (22.5%) truncated
    ├── … 428.0ms (11.6%) Composer\Package\Version\VersionGuesser::guessVersion at ./composer/src/Composer/Package/Version/VersionGuesser.php
    │   ├── … 249.0ms (6.7%, self 15.0% globally) Symfony\Component\Process\Pipes\UnixPipes::readAndWrite at ./composer/vendor/symfony/process/Pipes/UnixPipes.php
    │   └── 178.0ms (4.8%) 3 more callees, led by (2.4%) Composer\Package\Version\VersionGuesser::guessFossilVersion
    ├── … 228.0ms (6.2%) Composer\ClassMapGenerator\ClassMapGenerator::scanPaths at ./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php
    │   ├── … 188.0ms (5.1%, self 7.0% globally) Composer\Pcre\Preg::pregMatch at ./composer/vendor/composer/pcre/src/Preg.php
    │   └── … 40.0ms (1.1%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
    ├── … 7.0ms (0.2%) Symfony\Component\Process\Process::start at ./composer/vendor/symfony/process/Process.php
    └── 155.0ms (4.2%) 8 more root frames, led by (3.3%) Composer\Command\BaseCommand::initialize at ./composer/src/Composer/Command/BaseCommand.php
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                                                    | Location                                                                   |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 17.9% | 662.0ms |     662 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 15.0% | 556.0ms |     176 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 11.5% | 427.0ms |     427 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  7.0% | 259.0ms |     259 | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  5.4% | 199.0ms |      25 | `Composer\Util\Silencer::call`                                              | `./composer/src/Composer/Util/Silencer.php`                                |
|  4.8% | 177.0ms |     177 | `Composer\Pcre\Preg::matchAll`                                              | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.8% | 177.0ms |     177 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.2% | 157.0ms |     157 | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.2% | 157.0ms |     157 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.9% | 145.0ms |     145 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 140.0ms |     140 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.5% |  93.0ms |      93 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.5% |  92.0ms |      92 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  1.6% |  59.0ms |      59 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.2% |  43.0ms |      43 | `Composer\Util\Filesystem::normalizePath`                                   | `./composer/src/Composer/Util/Filesystem.php`                              |
|  1.1% |  42.0ms |      42 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  40.0ms |      40 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.5% |  18.0ms |      18 | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  0.5% |  18.0ms |      18 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  0.5% |  17.0ms |      17 | `Composer\Autoload\ClassLoader::loadClass`                                  | `./composer/vendor/composer/ClassLoader.php`                               |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Samples | Function                                                                    | Location                                                                   |
| ----: | ------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 17.9% | 662.0ms |     662 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 15.0% | 556.0ms |     176 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 11.5% | 427.0ms |     427 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  7.0% | 259.0ms |     259 | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.8% | 177.0ms |     177 | `Composer\Pcre\Preg::matchAll`                                              | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.8% | 177.0ms |     177 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.2% | 157.0ms |     157 | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.2% | 157.0ms |     157 | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.9% | 145.0ms |     145 | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.8% | 140.0ms |     140 | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.5% |  93.0ms |      93 | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.5% |  92.0ms |      92 | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  1.6% |  59.0ms |      59 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.1% |  42.0ms |      42 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.1% |  40.0ms |      40 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.5% |  18.0ms |      18 | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  0.5% |  18.0ms |      18 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  0.5% |  17.0ms |      17 | `Composer\Autoload\ClassLoader::loadClass`                                  | `./composer/vendor/composer/ClassLoader.php`                               |
|  0.4% |  13.0ms |       3 | `Symfony\Component\Console\Terminal::readFromProcess`                       | `./composer/vendor/symfony/console/Terminal.php`                           |
|  0.3% |  11.0ms |      11 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |

##### Ours

|     % |    Time | Samples | Function                                             | Location                                                 |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
|  5.4% | 199.0ms |      25 | `Composer\Util\Silencer::call`                       | `./composer/src/Composer/Util/Silencer.php`              |
|  1.2% |  43.0ms |      43 | `Composer\Util\Filesystem::normalizePath`            | `./composer/src/Composer/Util/Filesystem.php`            |
|  0.5% |  17.0ms |      17 | `Composer\Autoload\AutoloadGenerator::getPathCode`   | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  0.4% |  14.0ms |      14 | `Composer\Util\Filesystem::findShortestPath`         | `./composer/src/Composer/Util/Filesystem.php`            |
|  0.3% |  10.0ms |      10 | `(anonymous)`                                        | `./composer/src/Composer/Console/Application.php:349`    |
|  0.1% |   4.0ms |       4 | `Composer\Autoload\AutoloadGenerator::dump`          | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  0.1% |   3.0ms |       3 | `Composer\Factory::createComposer`                   | `./composer/src/Composer/Factory.php`                    |
|  0.1% |   3.0ms |       3 | `Composer\Util\Filesystem::filesAreEqual`            | `./composer/src/Composer/Util/Filesystem.php`            |
|  0.1% |   3.0ms |       3 | `Composer\Util\Silencer::suppress`                   | `./composer/src/Composer/Util/Silencer.php`              |
|  0.1% |   3.0ms |       3 | `Composer\Util\Filesystem::isReadable`               | `./composer/src/Composer/Util/Filesystem.php`            |
|  0.1% |   3.0ms |       3 | `Composer\Util\Platform::getCwd`                     | `./composer/src/Composer/Util/Platform.php`              |
|  0.1% |   2.0ms |       2 | `Composer\Factory::createConfig`                     | `./composer/src/Composer/Factory.php`                    |
|  0.1% |   2.0ms |       2 | `Composer\Util\StreamContextFactory::getTlsDefaults` | `./composer/src/Composer/Util/StreamContextFactory.php`  |
|  0.1% |   2.0ms |       2 | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|  0.1% |   2.0ms |       2 | `Composer\Util\ErrorHandler::handle`                 | `./composer/src/Composer/Util/ErrorHandler.php`          |
|  0.1% |   2.0ms |       2 | `Composer\Util\Filesystem::isAbsolutePath`           | `./composer/src/Composer/Util/Filesystem.php`            |
| <0.1% |   1.0ms |       1 | `Composer\Console\Application::doRun`                | `./composer/src/Composer/Console/Application.php`        |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `./composer/src/Composer/Command/InitCommand.php`        |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `./composer/src/Composer/Command/ShowCommand.php`        |
| <0.1% |   1.0ms |       1 | `(anonymous)`                                        | `./composer/src/Composer/Command/RequireCommand.php`     |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |    Time | Samples | Caller                                                    | Location                                                                   |
| -----: | ------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 662.0ms |     662 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Samples | Caller                                         | Location                                        |
| -----: | ------: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 556.0ms |     176 | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                                  | Location                                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 427.0ms |     427 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                      | Location                                       |
| -----: | ------: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 259.0ms |     259 | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Samples | Caller                                                | Location                                          |
| ----: | ------: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 97.5% | 194.0ms |      20 | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  2.5% |   5.0ms |       5 | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                  | Location                                                               |
| ----: | ------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 72.3% | 128.0ms |     128 | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| 27.7% |  49.0ms |      49 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                                |
| -----: | ------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 177.0ms |     177 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                  | Location                                       |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------------------------- |
| 96.2% | 151.0ms |     151 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  3.8% |   6.0ms |       6 | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                        | Location                                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 98.1% | 154.0ms |     154 | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  1.3% |   2.0ms |       2 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  0.6% |   1.0ms |       1 | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                    | Location                                       |
| -----: | ------: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 100.0% | 145.0ms |     145 | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                  | Location                                       |
| -----: | ------: | ------: | --------------------------------------- | ---------------------------------------------- |
| 100.0% | 140.0ms |     140 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Samples | Caller                         | Location                                       |
| ----: | -----: | ------: | ------------------------------ | ---------------------------------------------- |
| 98.9% | 92.0ms |      92 | `Composer\Pcre\Preg::match`    | `./composer/vendor/composer/pcre/src/Preg.php` |
|  1.1% |  1.0ms |       1 | `Composer\Pcre\Preg::matchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |   Time | Samples | Caller                                                   | Location                                                                |
| ----: | -----: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 98.9% | 91.0ms |      91 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  1.1% |  1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                      | Location                                                 |
| -----: | -----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 59.0ms |      59 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`)

|     % |   Time | Samples | Caller                                             | Location                                                 |
| ----: | -----: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
| 48.8% | 21.0ms |      21 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 44.2% | 19.0ms |      19 | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |
|  7.0% |  3.0ms |       3 | `Composer\Util\Filesystem::findShortestPathCode`   | `./composer/src/Composer/Util/Filesystem.php`            |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|     % |   Time | Samples | Caller                                                                      | Location                                                                   |
| ----: | -----: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 97.6% | 41.0ms |      41 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  2.4% |  1.0ms |       1 | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `./composer/vendor/symfony/finder/Finder.php`                              |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Samples | Caller                                                                          | Location                                                                       |
| -----: | -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% | 40.0ms |      40 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

|      % |   Time | Samples | Caller                                   | Location                                        |
| -----: | -----: | ------: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% | 18.0ms |      18 | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Samples | Caller                                                    | Location                                                                   |
| -----: | -----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 18.0ms |      18 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Autoload\ClassLoader::loadClass` (`./composer/vendor/composer/ClassLoader.php`)

|     % |  Time | Samples | Caller                                               | Location                                            |
| ----: | ----: | ------: | ---------------------------------------------------- | --------------------------------------------------- |
| 17.6% | 3.0ms |       3 | `Composer\Console\Application::doRun`                | `./composer/src/Composer/Console/Application.php`   |
| 17.6% | 3.0ms |       3 | `Composer\Console\Application::getDefaultCommands`   | `./composer/src/Composer/Console/Application.php`   |
| 11.8% | 2.0ms |       2 | `Composer\Util\HttpDownloader::__construct`          | `./composer/src/Composer/Util/HttpDownloader.php`   |
| 11.8% | 2.0ms |       2 | `Composer\Factory::createComposer`                   | `./composer/src/Composer/Factory.php`               |
|  5.9% | 1.0ms |       1 | `Symfony\Component\Console\Application::__construct` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |   Time | Samples | Caller                                      | Location                                                 |
| -----: | -----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 17.0ms |      17 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |   Time | Samples | Caller                                             | Location                                                 |
| -----: | -----: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 14.0ms |      14 | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |   Time | Samples | Caller                                               | Location                                         |
| -----: | -----: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 13.0ms |       3 | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |   Time | Samples | Caller                                                   | Location                                                                |
| -----: | -----: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 11.0ms |      11 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:349`)

|      % |   Time | Samples | Caller                         | Location                                    |
| -----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 10.0ms |      10 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                          | Location                                                  |
| -----: | ----: | ------: | ----------------------------------------------- | --------------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|      % |  Time | Samples | Caller                     | Location                              |
| -----: | ----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 3.0ms |       3 | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Util\Filesystem::filesAreEqual` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Samples | Caller                               | Location                                      |
| -----: | ----: | ------: | ------------------------------------ | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `Composer\Util\Filesystem::safeCopy` | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Util\Silencer::suppress` (`./composer/src/Composer/Util/Silencer.php`)

|      % |  Time | Samples | Caller                         | Location                                    |
| -----: | ----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 3.0ms |       3 | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Util\Filesystem::isReadable` (`./composer/src/Composer/Util/Filesystem.php`)

|     % |  Time | Samples | Caller                                               | Location                                                 |
| ----: | ----: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| 33.3% | 1.0ms |       1 | `Composer\Util\StreamContextFactory::getTlsDefaults` | `./composer/src/Composer/Util/StreamContextFactory.php`  |
| 33.3% | 1.0ms |       1 | `Composer\Autoload\AutoloadGenerator::dump`          | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 33.3% | 1.0ms |       1 | `Composer\Console\Application::doRun`                | `./composer/src/Composer/Console/Application.php`        |

##### `Composer\Util\Platform::getCwd` (`./composer/src/Composer/Util/Platform.php`)

|     % |  Time | Samples | Caller                                | Location                                          |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------- |
| 66.7% | 2.0ms |       2 | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |
| 33.3% | 1.0ms |       1 | `Composer\Factory::createComposer`    | `./composer/src/Composer/Factory.php`             |

##### `Composer\Factory::createConfig` (`./composer/src/Composer/Factory.php`)

|      % |  Time | Samples | Caller                             | Location                              |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Util\StreamContextFactory::getTlsDefaults` (`./composer/src/Composer/Util/StreamContextFactory.php`)

|      % |  Time | Samples | Caller                                      | Location                                          |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Util\HttpDownloader::__construct` | `./composer/src/Composer/Util/HttpDownloader.php` |

##### `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                      | Location                                                 |
| -----: | ----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\ErrorHandler::handle` (`./composer/src/Composer/Util/ErrorHandler.php`)

|      % |  Time | Samples | Caller                             | Location                                    |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Util\Filesystem::isAbsolutePath` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Samples | Caller                                       | Location                                      |
| -----: | ----: | ------: | -------------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `Composer\Util\Filesystem::findShortestPath` | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Caller                                       | Location                                            |
| -----: | ----: | ------: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `(anonymous)` (`./composer/src/Composer/Command/InitCommand.php`)

|      % |  Time | Samples | Caller        | Location                                         |
| -----: | ----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`./composer/src/Composer/Command/ShowCommand.php`)

|      % |  Time | Samples | Caller        | Location                                         |
| -----: | ----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(anonymous)` (`./composer/src/Composer/Command/RequireCommand.php`)

|      % |  Time | Samples | Caller        | Location                                         |
| -----: | ----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function                                                  | Location                                                                   |
| ----: | ------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 89.5% |   3.31s |   3,031 | `Symfony\Component\Console\Command\Command::run`          | `./composer/vendor/symfony/console/Command/Command.php`                    |
| 83.7% |   3.09s |   2,910 | `Symfony\Component\Console\Application::run`              | `./composer/vendor/symfony/console/Application.php`                        |
| 83.5% |   3.08s |   2,904 | `Composer\Console\Application::run`                       | `./composer/src/Composer/Console/Application.php`                          |
| 83.4% |   3.08s |   2,910 | `Composer\Console\Application::doRun`                     | `./composer/src/Composer/Console/Application.php`                          |
| 77.9% |   2.88s |   2,881 | `Symfony\Component\Console\Application::doRunCommand`     | `./composer/vendor/symfony/console/Application.php`                        |
| 77.8% |   2.87s |   2,878 | `Symfony\Component\Console\Application::doRun`            | `./composer/vendor/symfony/console/Application.php`                        |
| 77.5% |   2.86s |   2,681 | `(anonymous)`                                             | `./profile.php`                                                            |
| 76.5% |   2.83s |   2,830 | `Composer\Command\DumpAutoloadCommand::execute`           | `./composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
| 76.5% |   2.82s |   2,828 | `Composer\Autoload\AutoloadGenerator::dump`               | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
| 72.4% |   2.67s |   2,679 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 66.6% |   2.46s |   2,462 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 43.8% |   1.61s |   1,618 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 26.9% | 994.0ms |     994 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 25.3% | 934.0ms |     934 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 21.0% | 777.0ms |     777 | `Composer\Pcre\Preg::matchStrictGroups`                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 16.7% | 619.0ms |     239 | `Composer\Factory::createComposer`                        | `./composer/src/Composer/Factory.php`                                      |
| 16.7% | 619.0ms |     239 | `Composer\Factory::create`                                | `./composer/src/Composer/Factory.php`                                      |
| 16.7% | 619.0ms |     239 | `Composer\Console\Application::getComposer`               | `./composer/src/Composer/Console/Application.php`                          |
| 16.6% | 615.0ms |     235 | `Composer\Command\BaseCommand::tryComposer`               | `./composer/src/Composer/Command/BaseCommand.php`                          |
| 16.3% | 604.0ms |     228 | `Composer\Command\BaseCommand::initialize`                | `./composer/src/Composer/Command/BaseCommand.php`                          |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Samples | Function                                                  | Location                                                                   |
| ----: | ------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 89.5% |   3.31s |   3,031 | `Symfony\Component\Console\Command\Command::run`          | `./composer/vendor/symfony/console/Command/Command.php`                    |
| 83.7% |   3.09s |   2,910 | `Symfony\Component\Console\Application::run`              | `./composer/vendor/symfony/console/Application.php`                        |
| 77.9% |   2.88s |   2,881 | `Symfony\Component\Console\Application::doRunCommand`     | `./composer/vendor/symfony/console/Application.php`                        |
| 77.8% |   2.87s |   2,878 | `Symfony\Component\Console\Application::doRun`            | `./composer/vendor/symfony/console/Application.php`                        |
| 72.4% |   2.67s |   2,679 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 66.6% |   2.46s |   2,462 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 43.8% |   1.61s |   1,618 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 26.9% | 994.0ms |     994 | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 25.3% | 934.0ms |     934 | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 21.0% | 777.0ms |     777 | `Composer\Pcre\Preg::matchStrictGroups`                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 15.6% | 578.0ms |     198 | `Symfony\Component\Process\Process::run`                  | `./composer/vendor/symfony/process/Process.php`                            |
| 15.1% | 557.0ms |     177 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 15.1% | 557.0ms |     177 | `Symfony\Component\Process\Process::readPipes`            | `./composer/vendor/symfony/process/Process.php`                            |
| 15.1% | 557.0ms |     177 | `Symfony\Component\Process\Process::wait`                 | `./composer/vendor/symfony/process/Process.php`                            |
| 13.7% | 508.0ms |     508 | `Composer\Pcre\Preg::match`                               | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  7.0% | 259.0ms |     259 | `Composer\Pcre\Preg::pregMatch`                           | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.9% | 180.0ms |     180 | `Composer\Pcre\Preg::matchAll`                            | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.8% | 177.0ms |     177 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  3.8% | 140.0ms |     140 | `Composer\Pcre\Preg::enforceNonNullMatches`               | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.5% | 131.0ms |     131 | `Composer\Pcre\Preg::matchAllStrictGroups`                | `./composer/vendor/composer/pcre/src/Preg.php`                             |

##### Ours

|     % |    Time | Samples | Function                                                      | Location                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------- |
| 83.5% |   3.08s |   2,904 | `Composer\Console\Application::run`                           | `./composer/src/Composer/Console/Application.php`              |
| 83.4% |   3.08s |   2,910 | `Composer\Console\Application::doRun`                         | `./composer/src/Composer/Console/Application.php`              |
| 77.5% |   2.86s |   2,681 | `(anonymous)`                                                 | `./profile.php`                                                |
| 76.5% |   2.83s |   2,830 | `Composer\Command\DumpAutoloadCommand::execute`               | `./composer/src/Composer/Command/DumpAutoloadCommand.php`      |
| 76.5% |   2.82s |   2,828 | `Composer\Autoload\AutoloadGenerator::dump`                   | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
| 16.7% | 619.0ms |     239 | `Composer\Factory::createComposer`                            | `./composer/src/Composer/Factory.php`                          |
| 16.7% | 619.0ms |     239 | `Composer\Factory::create`                                    | `./composer/src/Composer/Factory.php`                          |
| 16.7% | 619.0ms |     239 | `Composer\Console\Application::getComposer`                   | `./composer/src/Composer/Console/Application.php`              |
| 16.6% | 615.0ms |     235 | `Composer\Command\BaseCommand::tryComposer`                   | `./composer/src/Composer/Command/BaseCommand.php`              |
| 16.3% | 604.0ms |     228 | `Composer\Command\BaseCommand::initialize`                    | `./composer/src/Composer/Command/BaseCommand.php`              |
| 15.8% | 585.0ms |     205 | `Composer\Package\Loader\RootPackageLoader::load`             | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
| 15.7% | 581.0ms |     201 | `Composer\Util\ProcessExecutor::runProcess`                   | `./composer/src/Composer/Util/ProcessExecutor.php`             |
| 15.7% | 581.0ms |     201 | `Composer\Util\ProcessExecutor::doExecute`                    | `./composer/src/Composer/Util/ProcessExecutor.php`             |
| 15.7% | 581.0ms |     201 | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`             |
| 15.7% | 581.0ms |     201 | `Composer\Package\Version\VersionGuesser::guessVersion`       | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
| 10.5% | 390.0ms |      95 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  5.9% | 218.0ms |      44 | `Composer\Util\Silencer::call`                                | `./composer/src/Composer/Util/Silencer.php`                    |
|  3.4% | 125.0ms |      29 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  3.1% | 113.0ms |     113 | `Composer\Autoload\AutoloadGenerator::getPathCode`            | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  2.6% |  97.0ms |      56 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

|     % |  Time | Samples | Caller                                                | Location                                            |
| ----: | ----: | ------: | ----------------------------------------------------- | --------------------------------------------------- |
| 87.0% | 2.88s |   2,881 | `Symfony\Component\Console\Application::doRunCommand` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Caller                              | Location                                          |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 99.8% | 3.08s |   2,904 | `Composer\Console\Application::run` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

|     % |  Time | Samples | Caller        | Location        |
| ----: | ----: | ------: | ------------- | --------------- |
| 92.6% | 2.85s |   2,674 | `(anonymous)` | `./profile.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|     % |  Time | Samples | Caller                                       | Location                                            |
| ----: | ----: | ------: | -------------------------------------------- | --------------------------------------------------- |
| 99.9% | 3.08s |   2,907 | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Caller                                         | Location                                            |
| ----: | ----: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| 99.8% | 2.87s |   2,875 | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Caller                                | Location                                          |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------- |
| 99.4% | 2.86s |   2,860 | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Samples | Caller                                           | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 2.83s |   2,830 | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Samples | Caller                                          | Location                                                  |
| -----: | ----: | ------: | ----------------------------------------------- | --------------------------------------------------------- |
| 100.0% | 2.82s |   2,828 | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |  Time | Samples | Caller                                      | Location                                                 |
| -----: | ----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.67s |   2,679 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |  Time | Samples | Caller                                                    | Location                                                                   |
| -----: | ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 2.46s |   2,462 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |  Time | Samples | Caller                                                  | Location                                                               |
| -----: | ----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 1.61s |   1,618 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Caller                                                   | Location                                                                |
| ----: | ------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 99.8% | 992.0ms |     992 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.2% |   2.0ms |       2 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                        | Location                                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 96.6% | 902.0ms |     902 | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  1.7% |  16.0ms |      16 | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
|  1.7% |  16.0ms |      16 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                    | Location                                       |
| -----: | ------: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 100.0% | 777.0ms |     777 | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Samples | Caller                     | Location                              |
| -----: | ------: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 619.0ms |     239 | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Samples | Caller                                      | Location                                          |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 619.0ms |     239 | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

|     % |    Time | Samples | Caller                                      | Location                                          |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 99.4% | 615.0ms |     235 | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

|     % |    Time | Samples | Caller                                     | Location                                          |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------- |
| 98.2% | 604.0ms |     228 | `Composer\Command\BaseCommand::initialize` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

|     % |    Time | Samples | Caller                                           | Location                                                |
| ----: | ------: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 79.6% | 481.0ms |     201 | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|      % |    Time | Samples | Caller                             | Location                              |
| -----: | ------: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 585.0ms |     205 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Samples | Caller                                     | Location                                           |
| -----: | ------: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 581.0ms |     201 | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Samples | Caller                                   | Location                                           |
| -----: | ------: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 581.0ms |     201 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Caller                                                        | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 44.4% | 258.0ms |      63 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 21.5% | 125.0ms |      29 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 16.7% |  97.0ms |      56 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.3% |  48.0ms |      24 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  7.9% |  46.0ms |      26 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Caller                                            | Location                                                       |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 581.0ms |     201 | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Samples | Caller                                      | Location                                           |
| -----: | ------: | ------: | ------------------------------------------- | -------------------------------------------------- |
| 100.0% | 578.0ms |     198 | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Samples | Caller                                         | Location                                        |
| -----: | ------: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 557.0ms |     177 | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Caller                                            | Location                                        |
| ----: | ------: | ------: | ------------------------------------------------- | ----------------------------------------------- |
| 99.8% | 556.0ms |     176 | `Symfony\Component\Process\Process::wait`         | `./composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Samples | Caller                                   | Location                                        |
| -----: | ------: | ------: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% | 557.0ms |     177 | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                  | Location                                       |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------------------------- |
| 96.9% | 492.0ms |     492 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  3.1% |  16.0ms |      16 | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Caller                                                  | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 390.0ms |      95 | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                      | Location                                       |
| -----: | ------: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 259.0ms |     259 | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Samples | Caller                                                | Location                                          |
| ----: | ------: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 94.5% | 206.0ms |      32 | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  3.7% |   8.0ms |       8 | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |
|  0.9% |   2.0ms |       2 | `Composer\Factory::getHomeDir`                        | `./composer/src/Composer/Factory.php`             |
|  0.9% |   2.0ms |       2 | `Composer\Console\Application::__construct`           | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Caller                                                  | Location                                                               |
| ----: | ------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 72.2% | 130.0ms |     130 | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| 27.8% |  50.0ms |      50 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Samples | Caller                                             | Location                                                                |
| -----: | ------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 177.0ms |     177 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                  | Location                                       |
| -----: | ------: | ------: | --------------------------------------- | ---------------------------------------------- |
| 100.0% | 140.0ms |     140 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Samples | Caller                                                  | Location                                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 131.0ms |     131 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Caller                                                     | Location                                                     |
| -----: | ------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 125.0ms |      29 | `Composer\Package\Version\VersionGuesser::guessGitVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |    Time | Samples | Caller                                      | Location                                                 |
| -----: | ------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 113.0ms |     113 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |   Time | Samples | Caller                                                  | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 97.0ms |      56 | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

|     % |    Time | Samples | Callee                                          | Location                                                  |
| ----: | ------: | ------: | ----------------------------------------------- | --------------------------------------------------------- |
| 85.5% |   2.83s |   2,830 | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |
| 14.5% | 481.0ms |     201 | `Composer\Command\BaseCommand::initialize`      | `./composer/src/Composer/Command/BaseCommand.php`         |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Callee                                          | Location                                          |
| ----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| 99.6% | 3.08s |   2,907 | `Composer\Console\Application::doRun`           | `./composer/src/Composer/Console/Application.php` |
|  0.2% | 7.0ms |       2 | `Symfony\Component\Console\Terminal::getHeight` | `./composer/vendor/symfony/console/Terminal.php`  |
|  0.2% | 6.0ms |       1 | `Symfony\Component\Console\Terminal::getWidth`  | `./composer/vendor/symfony/console/Terminal.php`  |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Samples | Callee                                       | Location                                            |
| -----: | ----: | ------: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.08s |   2,904 | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|     % |    Time | Samples | Callee                                         | Location                                            |
| ----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| 92.7% |   2.86s |   2,860 | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |
|  6.7% | 206.0ms |      32 | `Composer\Util\Silencer::call`                 | `./composer/src/Composer/Util/Silencer.php`         |
|  0.4% |  11.0ms |      11 | `Symfony\Component\Console\Application::find`  | `./composer/vendor/symfony/console/Application.php` |
|  0.1% |   3.0ms |       3 | `Composer\Autoload\ClassLoader::loadClass`     | `./composer/vendor/composer/ClassLoader.php`        |
|  0.1% |   2.0ms |       2 | `Composer\Util\Platform::getCwd`               | `./composer/src/Composer/Util/Platform.php`         |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Samples | Callee                                           | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 2.88s |   2,881 | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Samples | Callee                                                 | Location                                            |
| ----: | ----: | ------: | ------------------------------------------------------ | --------------------------------------------------- |
| 99.9% | 2.87s |   2,875 | `Symfony\Component\Console\Application::doRunCommand`  | `./composer/vendor/symfony/console/Application.php` |
|  0.1% | 2.0ms |       2 | `Symfony\Component\Console\Application::getDefinition` | `./composer/vendor/symfony/console/Application.php` |
| <0.1% | 1.0ms |       1 | `Symfony\Component\Console\Application::find`          | `./composer/vendor/symfony/console/Application.php` |

##### `(anonymous)` (`./profile.php`)

|     % |  Time | Samples | Callee                                      | Location                                          |
| ----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 99.8% | 2.85s |   2,674 | `Composer\Console\Application::run`         | `./composer/src/Composer/Console/Application.php` |
|  0.2% | 5.0ms |       5 | `Composer\Console\Application::__construct` | `./composer/src/Composer/Console/Application.php` |
| <0.1% | 1.0ms |       1 | `(anonymous)`                               | `./composer/src/bootstrap.php`                    |
| <0.1% | 1.0ms |       1 | `Composer\Autoload\ClassLoader::loadClass`  | `./composer/vendor/composer/ClassLoader.php`      |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|     % |  Time | Samples | Callee                                      | Location                                                 |
| ----: | ----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 99.9% | 2.82s |   2,828 | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
| <0.1% | 1.0ms |       1 | `Composer\IO\ConsoleIO::write`              | `./composer/src/Composer/IO/ConsoleIO.php`               |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                                   |
| ----: | ------: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 94.7% |   2.67s |   2,679 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  4.0% | 113.0ms |     113 | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.6% |  16.0ms |      16 | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.3% |   8.0ms |       8 | `Composer\Util\Filesystem::filePutContentsIfModified`     | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.1% |   3.0ms |       3 | `Composer\Util\Filesystem::safeCopy`                      | `./composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|     % |   Time | Samples | Callee                                                                          | Location                                                                       |
| ----: | -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 91.9% |  2.46s |   2,462 | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  1.6% | 43.0ms |      43 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  1.6% | 42.0ms |      42 | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  1.3% | 36.0ms |      36 | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  0.3% |  8.0ms |       8 | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|     % |    Time | Samples | Callee                                                    | Location                                                                |
| ----: | ------: | ------: | --------------------------------------------------------- | ----------------------------------------------------------------------- |
| 65.7% |   1.61s |   1,618 | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  5.3% | 131.0ms |     131 | `Composer\Pcre\Preg::matchAllStrictGroups`                | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|  2.0% |  50.0ms |      50 | `Composer\Pcre\Preg::matchAll`                            | `./composer/vendor/composer/pcre/src/Preg.php`                          |
| <0.1% |   1.0ms |       1 | `Composer\ClassMapGenerator\PhpFileParser::getExtraTypes` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`  |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                                   | Location                                                                |
| ----: | ------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 61.3% | 992.0ms |     992 | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| 10.9% | 177.0ms |     177 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.9% |  15.0ms |      15 | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.2% |   4.0ms |       4 | `Composer\Pcre\Preg::isMatch`                            | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|  0.2% |   3.0ms |       3 | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Samples | Callee                                    | Location                                       |
| ----: | ------: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 90.7% | 902.0ms |     902 | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                  | Location                                       |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------------------------- |
| 83.2% | 777.0ms |     777 | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                      | Location                                       |
| ----: | ------: | ------: | ------------------------------------------- | ---------------------------------------------- |
| 63.3% | 492.0ms |     492 | `Composer\Pcre\Preg::match`                 | `./composer/vendor/composer/pcre/src/Preg.php` |
| 18.0% | 140.0ms |     140 | `Composer\Pcre\Preg::enforceNonNullMatches` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|     % |    Time | Samples | Callee                                            | Location                                                       |
| ----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| 94.5% | 585.0ms |     205 | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  2.1% |  13.0ms |      13 | `Composer\Json\JsonFile::validateSchema`          | `./composer/src/Composer/Json/JsonFile.php`                    |
|  1.0% |   6.0ms |       6 | `Composer\Factory::createHttpDownloader`          | `./composer/src/Composer/Factory.php`                          |
|  0.6% |   4.0ms |       4 | `Composer\Factory::createConfig`                  | `./composer/src/Composer/Factory.php`                          |
|  0.3% |   2.0ms |       2 | `Composer\Autoload\ClassLoader::loadClass`        | `./composer/vendor/composer/ClassLoader.php`                   |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Samples | Callee                             | Location                              |
| -----: | ------: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 619.0ms |     239 | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

|      % |    Time | Samples | Callee                     | Location                              |
| -----: | ------: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 619.0ms |     239 | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                          |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 615.0ms |     235 | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Samples | Callee                                      | Location                                          |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 604.0ms |     228 | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|     % |    Time | Samples | Callee                                                  | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 99.3% | 581.0ms |     201 | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  0.3% |   2.0ms |       2 | `Composer\Package\Loader\ArrayLoader::load`             | `./composer/src/Composer/Package/Loader/ArrayLoader.php`     |
|  0.2% |   1.0ms |       1 | `Composer\Autoload\ClassLoader::loadClass`              | `./composer/vendor/composer/ClassLoader.php`                 |
|  0.2% |   1.0ms |       1 | `Composer\Repository\RepositoryFactory::defaultRepos`   | `./composer/src/Composer/Repository/RepositoryFactory.php`   |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Samples | Callee                                         | Location                                                      |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------------- |
| 99.5% | 578.0ms |     198 | `Symfony\Component\Process\Process::run`       | `./composer/vendor/symfony/process/Process.php`               |
|  0.2% |   1.0ms |       1 | `Composer\Autoload\ClassLoader::loadClass`     | `./composer/vendor/composer/ClassLoader.php`                  |
|  0.2% |   1.0ms |       1 | `Seld\Signal\SignalHandler::create`            | `./composer/vendor/seld/signal-handler/src/SignalHandler.php` |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::getOutput` | `./composer/vendor/symfony/process/Process.php`               |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Samples | Callee                                      | Location                                           |
| -----: | ------: | ------: | ------------------------------------------- | -------------------------------------------------- |
| 100.0% | 581.0ms |     201 | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Samples | Callee                                     | Location                                           |
| -----: | ------: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 581.0ms |     201 | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 67.1% | 390.0ms |      95 | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 16.7% |  97.0ms |      56 | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.3% |  48.0ms |      24 | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  7.9% |  46.0ms |      26 | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                     | Location                                        |
| ----: | ------: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 96.4% | 557.0ms |     177 | `Symfony\Component\Process\Process::wait`  | `./composer/vendor/symfony/process/Process.php` |
|  3.6% |  21.0ms |      21 | `Symfony\Component\Process\Process::start` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|    % |  Time | Samples | Callee                                                   | Location                                                    |
| ---: | ----: | ------: | -------------------------------------------------------- | ----------------------------------------------------------- |
| 0.2% | 1.0ms |       1 | `Symfony\Component\Process\Pipes\AbstractPipes::unblock` | `./composer/vendor/symfony/process/Pipes/AbstractPipes.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Samples | Callee                                                    | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 557.0ms |     177 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Samples | Callee                                         | Location                                        |
| ----: | ------: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 99.8% | 556.0ms |     176 | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms |       1 | `Symfony\Component\Process\Process::isRunning` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                   | Location                                       |
| ----: | ------: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 51.0% | 259.0ms |     259 | `Composer\Pcre\Preg::pregMatch`          | `./composer/vendor/composer/pcre/src/Preg.php` |
| 18.1% |  92.0ms |      92 | `Composer\Pcre\Preg::checkOffsetCapture` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Samples | Callee                                                        | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 66.2% | 258.0ms |      63 | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`           |
| 32.1% | 125.0ms |      29 | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  1.8% |   7.0ms |       3 | `Composer\Util\Git::getNoShowSignatureFlag`                   | `./composer/src/Composer/Util/Git.php`                       |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|    % |   Time | Samples | Callee                             | Location                                              |
| ---: | -----: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 4.6% | 10.0ms |      10 | `(anonymous)`                      | `./composer/src/Composer/Console/Application.php:349` |
| 4.1% |  9.0ms |       9 | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php`           |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|    % |  Time | Samples | Callee                                   | Location                                       |
| ---: | ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 1.1% | 2.0ms |       2 | `Composer\Pcre\Preg::checkSetOrder`      | `./composer/vendor/composer/pcre/src/Preg.php` |
| 0.6% | 1.0ms |       1 | `Composer\Pcre\Preg::checkOffsetCapture` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Samples | Callee                                       | Location                                       |
| ----: | ------: | ------: | -------------------------------------------- | ---------------------------------------------- |
| 99.2% | 130.0ms |     130 | `Composer\Pcre\Preg::matchAll`               | `./composer/vendor/composer/pcre/src/Preg.php` |
|  0.8% |   1.0ms |       1 | `Composer\Pcre\Preg::enforceNonNullMatchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Samples | Callee                                   | Location                                           |
| -----: | ------: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 125.0ms |      29 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |   Time | Samples | Callee                                       | Location                                      |
| ----: | -----: | ------: | -------------------------------------------- | --------------------------------------------- |
| 59.3% | 67.0ms |      67 | `Composer\Util\Filesystem::findShortestPath` | `./composer/src/Composer/Util/Filesystem.php` |
| 25.7% | 29.0ms |      29 | `Composer\Util\Filesystem::normalizePath`    | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |   Time | Samples | Callee                                   | Location                                           |
| -----: | -----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 97.0ms |      56 | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← `(anonymous)` (`./profile.php`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 17.9% | 662.0ms |     662 | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 11.5% | 427.0ms |     427 | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  6.7% | 249.0ms |      54 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                        |
|  5.2% | 194.0ms |      20 | `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  5.1% | 188.0ms |     188 | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← truncated |
|  4.8% | 177.0ms |     177 | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.2% | 154.0ms |     154 | `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.9% | 145.0ms |     145 | `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                          |
|  3.8% | 141.0ms |     141 | `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                        |
|  3.6% | 133.0ms |     133 | `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                          |
|  3.5% | 128.0ms |     128 | `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.3% | 123.0ms |      27 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← truncated                                                                                                                                                                                                                     |
|  2.5% |  91.0ms |      91 | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.4% |  89.0ms |      48 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                     |
|  2.3% |  84.0ms |      84 | `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                               |
|  1.6% |  59.0ms |      59 | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.5% |  56.0ms |      56 | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                        |
|  1.3% |  49.0ms |      49 | `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% |  48.0ms |      24 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessHgVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                         |
|  1.1% |  41.0ms |      21 | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessSvnVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← truncated                                                                                                                                                                        |

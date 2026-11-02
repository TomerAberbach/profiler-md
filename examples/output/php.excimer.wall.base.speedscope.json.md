# Sampling profile

Took 4.16s.

| Category    |     % |    Time |
| ----------- | ----: | ------: |
| Third-party | 90.6% |   3.77s |
| Ours        |  9.4% | 393.0ms |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 4.16s (99.8%) Symfony\Component\Console\Application::run at ./composer/vendor/symfony/console/Application.php
    ├── 3.99s (95.8%) Composer\Console\Application::doRun at ./composer/src/Composer/Console/Application.php
    │   ├── … 3.69s (88.7%) Symfony\Component\Console\Command\Command::run at ./composer/vendor/symfony/console/Command/Command.php
    │   │   ├── 2.94s (70.7%) Composer\Command\DumpAutoloadCommand::execute at ./composer/src/Composer/Command/DumpAutoloadCommand.php
    │   │   │   └── 2.94s (70.7%) Composer\Autoload\AutoloadGenerator::dump at ./composer/src/Composer/Autoload/AutoloadGenerator.php
    │   │   │       ├── 2.78s (66.9%, self 1.8%) Composer\ClassMapGenerator\ClassMapGenerator::scanPaths at ./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php
    │   │   │       │   ├── 2.52s (60.5%, self 15.8%) Composer\ClassMapGenerator\PhpFileParser::findClasses at ./composer/vendor/composer/class-map-generator/src/PhpFileParser.php
    │   │   │       │   │   ├── 1.66s (39.9%, self 10.4%) Composer\ClassMapGenerator\PhpFileCleaner::clean at ./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php
    │   │   │       │   │   │   ├── 989.0ms (23.8%, self 2.6%) Composer\ClassMapGenerator\PhpFileCleaner::match
    │   │   │       │   │   │   │   └── 882.0ms (21.2%, self 3.3%) Composer\Pcre\Preg::isMatchStrictGroups at ./composer/vendor/composer/pcre/src/Preg.php
    │   │   │       │   │   │   │       └── 743.0ms (17.8%, self 3.3%) Composer\Pcre\Preg::matchStrictGroups
    │   │   │       │   │   │   │           ├── 467.0ms (11.2%, self 3.4%) Composer\Pcre\Preg::match
    │   │   │       │   │   │   │           │   ├── 252.0ms (6.1%, self 6.6% globally) Composer\Pcre\Preg::pregMatch
    │   │   │       │   │   │   │           │   └── 75.0ms (1.8%) Composer\Pcre\Preg::checkOffsetCapture
    │   │   │       │   │   │   │           └── 138.0ms (3.3%) Composer\Pcre\Preg::enforceNonNullMatches
    │   │   │       │   │   │   ├── 203.0ms (4.9%, self 4.9%) Composer\ClassMapGenerator\PhpFileCleaner::skipString
    │   │   │       │   │   │   └── 19.0ms (0.5%) Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc
    │   │   │       │   │   ├── 158.0ms (3.8%) Composer\Pcre\Preg::matchAllStrictGroups at ./composer/vendor/composer/pcre/src/Preg.php
    │   │   │       │   │   │   └── 155.0ms (3.7%, self 3.7%, self 4.5% globally) Composer\Pcre\Preg::matchAll
    │   │   │       │   │   └── 42.0ms (1.0%, self 0.8%) Composer\Pcre\Preg::matchAll at ./composer/vendor/composer/pcre/src/Preg.php
    │   │   │       │   ├── 55.0ms (1.3%) Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren at ./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php
    │   │   │       │   │   └── 55.0ms (1.3%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
    │   │   │       │   ├── … 51.0ms (1.2%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
    │   │   │       │   └── 77.0ms (1.8%) 10 more callees, led by (0.9%) Composer\ClassMapGenerator\ClassMapGenerator::normalizePath
    │   │   │       ├── 112.0ms (2.7%) Composer\Autoload\AutoloadGenerator::getPathCode
    │   │   │       │   ├── 35.0ms (0.8%) Composer\Util\Filesystem::normalizePath at ./composer/src/Composer/Util/Filesystem.php
    │   │   │       │   └── 67.0ms (1.6%) 2 more callees, led by (1.6%) Composer\Util\Filesystem::findShortestPath at ./composer/src/Composer/Util/Filesystem.php
    │   │   │       └── 22.0ms (0.5%) Composer\Autoload\AutoloadGenerator::getStaticFile
    │   │   └── … 748.0ms (18.0%) Composer\Factory::createComposer at ./composer/src/Composer/Factory.php
    │   │       ├── 710.0ms (17.1%) Composer\Package\Loader\RootPackageLoader::load at ./composer/src/Composer/Package/Loader/RootPackageLoader.php
    │   │       │   └── 705.0ms (16.9%) Composer\Package\Version\VersionGuesser::guessVersion at ./composer/src/Composer/Package/Version/VersionGuesser.php
    │   │       │       ├── 458.0ms (11.0%) Composer\Package\Version\VersionGuesser::guessGitVersion
    │   │       │       │   ├── … 299.0ms (7.2%) Symfony\Component\Process\Process::run at ./composer/vendor/symfony/process/Process.php
    │   │       │       │   │   ├── … 277.0ms (6.7%, self 15.5% globally) Symfony\Component\Process\Pipes\UnixPipes::readAndWrite at ./composer/vendor/symfony/process/Pipes/UnixPipes.php
    │   │       │       │   │   └── 18.0ms (0.4%, self 0.9% globally) Symfony\Component\Process\Process::start
    │   │       │       │   └── 154.0ms (3.7%) 3 more callees, led by (3.5%) Composer\Package\Version\VersionGuesser::versionFromGitTags
    │   │       │       └── 247.0ms (5.9%) 3 more callees, led by (3.0%) Composer\Package\Version\VersionGuesser::guessFossilVersion
    │   │       └── … 4.0ms (0.1%) JsonSchema\Uri\UriRetriever::loadSchema at ./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php
    │   └── 279.0ms (6.7%, self 6.3%) Composer\Util\Silencer::call at ./composer/src/Composer/Util/Silencer.php
    └── … 161.0ms (3.9%) Symfony\Component\Console\Terminal::readFromProcess at ./composer/vendor/symfony/console/Terminal.php
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Function                                                                    | Location                                                                   |
| ----: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 15.8% | 659.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 15.5% | 645.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.4% | 435.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  6.6% | 276.0ms | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  6.5% | 269.0ms | `Composer\Util\Silencer::call`                                              | `./composer/src/Composer/Util/Silencer.php`                                |
|  4.9% | 202.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.5% | 187.0ms | `Composer\Pcre\Preg::matchAll`                                              | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.0% | 167.0ms | `Symfony\Component\Console\Terminal::readFromProcess`                       | `./composer/vendor/symfony/console/Terminal.php`                           |
|  3.6% | 149.0ms | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 143.0ms | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 142.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 141.0ms | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.6% | 107.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.0% |  84.0ms | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  1.8% |  77.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.3% |  55.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.3% |  54.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.9% |  39.0ms | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  0.8% |  33.0ms | `Composer\Util\Filesystem::normalizePath`                                   | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.5% |  20.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Function                                                                    | Location                                                                   |
| ----: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 15.8% | 659.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 15.5% | 645.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`                   | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 10.4% | 435.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  6.6% | 276.0ms | `Composer\Pcre\Preg::pregMatch`                                             | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.9% | 202.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.5% | 187.0ms | `Composer\Pcre\Preg::matchAll`                                              | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.0% | 167.0ms | `Symfony\Component\Console\Terminal::readFromProcess`                       | `./composer/vendor/symfony/console/Terminal.php`                           |
|  3.6% | 149.0ms | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 143.0ms | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 142.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  3.4% | 141.0ms | `Composer\Pcre\Preg::enforceNonNullMatches`                                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  2.6% | 107.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  2.0% |  84.0ms | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  1.8% |  77.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  1.3% |  55.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  1.3% |  54.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  0.9% |  39.0ms | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                            |
|  0.5% |  20.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`               | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  0.4% |  17.0ms | `Composer\Pcre\Preg::replaceCallback`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  0.4% |  16.0ms | `Composer\Pcre\Preg::isMatch`                                               | `./composer/vendor/composer/pcre/src/Preg.php`                             |

##### Ours

|     % |    Time | Function                                             | Location                                                       |
| ----: | ------: | ---------------------------------------------------- | -------------------------------------------------------------- |
|  6.5% | 269.0ms | `Composer\Util\Silencer::call`                       | `./composer/src/Composer/Util/Silencer.php`                    |
|  0.8% |  33.0ms | `Composer\Util\Filesystem::normalizePath`            | `./composer/src/Composer/Util/Filesystem.php`                  |
|  0.4% |  16.0ms | `Composer\Util\Filesystem::findShortestPath`         | `./composer/src/Composer/Util/Filesystem.php`                  |
|  0.3% |  14.0ms | `(anonymous)`                                        | `./composer/src/Composer/Console/Application.php:353`          |
|  0.2% |  10.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`   | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  0.1% |   6.0ms | `Composer\Autoload\AutoloadGenerator::dump`          | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  0.1% |   4.0ms | `Composer\Util\Filesystem::filesAreEqual`            | `./composer/src/Composer/Util/Filesystem.php`                  |
|  0.1% |   3.0ms | `Composer\Util\Http\CurlDownloader::__construct`     | `./composer/src/Composer/Util/Http/CurlDownloader.php`         |
|  0.1% |   3.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
| <0.1% |   2.0ms | `Composer\Json\JsonFile::validateSchema`             | `./composer/src/Composer/Json/JsonFile.php`                    |
| <0.1% |   2.0ms | `Composer\Util\Filesystem::isReadable`               | `./composer/src/Composer/Util/Filesystem.php`                  |
| <0.1% |   1.0ms | `(file scope)`                                       | `./composer/src/Composer/IO/BaseIO.php`                        |
| <0.1% |   1.0ms | `Composer\Console\Application::doRun`                | `./composer/src/Composer/Console/Application.php`              |
| <0.1% |   1.0ms | `(file scope)`                                       | `./composer/src/Composer/Command/InitCommand.php`              |
| <0.1% |   1.0ms | `(file scope)`                                       | `./composer/src/Composer/Command/SuggestsCommand.php`          |
| <0.1% |   1.0ms | `Composer\IO\ConsoleIO::isVerbose`                   | `./composer/src/Composer/IO/ConsoleIO.php`                     |
| <0.1% |   1.0ms | `Composer\Util\ErrorHandler::handle`                 | `./composer/src/Composer/Util/ErrorHandler.php`                |
| <0.1% |   1.0ms | `Composer\Util\Silencer::suppress`                   | `./composer/src/Composer/Util/Silencer.php`                    |
| <0.1% |   1.0ms | `Composer\Factory::createConfig`                     | `./composer/src/Composer/Factory.php`                          |
| <0.1% |   1.0ms | `(file scope)`                                       | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |    Time | Caller                                                    | Location                                                                   |
| -----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 659.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Caller                                         | Location                                        |
| -----: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 645.0ms | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                                  | Location                                                               |
| -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 435.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                      | Location                                       |
| -----: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 276.0ms | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Caller                                                | Location                                          |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 97.8% | 263.0ms | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  1.1% |   3.0ms | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |
|  0.7% |   2.0ms | `Composer\Factory::getHomeDir`                        | `./composer/src/Composer/Factory.php`             |
|  0.4% |   1.0ms | `Composer\Console\Application::__construct`           | `./composer/src/Composer/Console/Application.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                             | Location                                                                |
| -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 202.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                                  | Location                                                               |
| ----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 81.8% | 153.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| 18.2% |  34.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Caller                                               | Location                                         |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 167.0ms | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                  | Location                                       |
| ----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 97.3% | 145.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  2.7% |   4.0ms | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                    | Location                                       |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 100.0% | 143.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                                        | Location                                                                   |
| ----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 97.9% | 139.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  1.4% |   2.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.7% |   1.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                  | Location                                       |
| -----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 100.0% | 141.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                             | Location                                                                |
| -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 107.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Caller                         | Location                                       |
| ----: | -----: | ------------------------------ | ---------------------------------------------- |
| 91.7% | 77.0ms | `Composer\Pcre\Preg::match`    | `./composer/vendor/composer/pcre/src/Preg.php` |
|  8.3% |  7.0ms | `Composer\Pcre\Preg::matchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Caller                                      | Location                                                 |
| -----: | -----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 77.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|      % |   Time | Caller                                                                          | Location                                                                       |
| -----: | -----: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% | 55.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|     % |   Time | Caller                                                                      | Location                                                                   |
| ----: | -----: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 94.4% | 51.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  5.6% |  3.0ms | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `./composer/vendor/symfony/finder/Finder.php`                              |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

|      % |   Time | Caller                                   | Location                                        |
| -----: | -----: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% | 39.0ms | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`)

|     % |   Time | Caller                                             | Location                                                 |
| ----: | -----: | -------------------------------------------------- | -------------------------------------------------------- |
| 54.5% | 18.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 42.4% | 14.0ms | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |
|  3.0% |  1.0ms | `Composer\Util\Filesystem::findShortestPathCode`   | `./composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |   Time | Caller                                                    | Location                                                                   |
| -----: | -----: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 20.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::replaceCallback` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Caller                                                        | Location                                                                   |
| ----: | -----: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 76.5% | 13.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
| 23.5% |  4.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::isMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |   Time | Caller                                             | Location                                                                |
| ----: | -----: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 87.5% | 14.0ms | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`                           |
| 12.5% |  2.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |   Time | Caller                                             | Location                                                 |
| -----: | -----: | -------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 16.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:353`)

|      % |   Time | Caller                         | Location                                    |
| -----: | -----: | ------------------------------ | ------------------------------------------- |
| 100.0% | 14.0ms | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |   Time | Caller                                      | Location                                                 |
| -----: | -----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 10.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Caller                                          | Location                                                  |
| -----: | ----: | ----------------------------------------------- | --------------------------------------------------------- |
| 100.0% | 6.0ms | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Util\Filesystem::filesAreEqual` (`./composer/src/Composer/Util/Filesystem.php`)

|      % |  Time | Caller                               | Location                                      |
| -----: | ----: | ------------------------------------ | --------------------------------------------- |
| 100.0% | 4.0ms | `Composer\Util\Filesystem::safeCopy` | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Util\Http\CurlDownloader::__construct` (`./composer/src/Composer/Util/Http/CurlDownloader.php`)

|      % |  Time | Caller                                      | Location                                          |
| -----: | ----: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 3.0ms | `Composer\Util\HttpDownloader::__construct` | `./composer/src/Composer/Util/HttpDownloader.php` |

##### `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Caller                                      | Location                                                 |
| -----: | ----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 3.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Json\JsonFile::validateSchema` (`./composer/src/Composer/Json/JsonFile.php`)

|      % |  Time | Caller                             | Location                              |
| -----: | ----: | ---------------------------------- | ------------------------------------- |
| 100.0% | 2.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Util\Filesystem::isReadable` (`./composer/src/Composer/Util/Filesystem.php`)

|     % |  Time | Caller                                      | Location                                                 |
| ----: | ----: | ------------------------------------------- | -------------------------------------------------------- |
| 50.0% | 1.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
| 50.0% | 1.0ms | `Composer\Json\JsonFile::read`              | `./composer/src/Composer/Json/JsonFile.php`              |

##### `(file scope)` (`./composer/src/Composer/IO/BaseIO.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Caller                                       | Location                                            |
| -----: | ----: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 1.0ms | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `(file scope)` (`./composer/src/Composer/Command/InitCommand.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Command/SuggestsCommand.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\IO\ConsoleIO::isVerbose` (`./composer/src/Composer/IO/ConsoleIO.php`)

|      % |  Time | Caller                               | Location                                        |
| -----: | ----: | ------------------------------------ | ----------------------------------------------- |
| 100.0% | 1.0ms | `Composer\Util\ErrorHandler::handle` | `./composer/src/Composer/Util/ErrorHandler.php` |

##### `Composer\Util\ErrorHandler::handle` (`./composer/src/Composer/Util/ErrorHandler.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\Silencer::suppress` (`./composer/src/Composer/Util/Silencer.php`)

|      % |  Time | Caller                         | Location                                    |
| -----: | ----: | ------------------------------ | ------------------------------------------- |
| 100.0% | 1.0ms | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Factory::createConfig` (`./composer/src/Composer/Factory.php`)

|      % |  Time | Caller                             | Location                              |
| -----: | ----: | ---------------------------------- | ------------------------------------- |
| 100.0% | 1.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `(file scope)` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|      % |  Time | Caller        | Location                                         |
| -----: | ----: | ------------- | ------------------------------------------------ |
| 100.0% | 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Function                                                  | Location                                                                   |
| -----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |   4.16s | `(file scope)`                                            | `./profile.php`                                                            |
|  99.8% |   4.16s | `Symfony\Component\Console\Application::run`              | `./composer/vendor/symfony/console/Application.php`                        |
|  99.8% |   4.16s | `Composer\Console\Application::run`                       | `./composer/src/Composer/Console/Application.php`                          |
|  95.8% |   3.99s | `Composer\Console\Application::doRun`                     | `./composer/src/Composer/Console/Application.php`                          |
|  88.7% |   3.69s | `Symfony\Component\Console\Application::doRun`            | `./composer/vendor/symfony/console/Application.php`                        |
|  88.7% |   3.69s | `Symfony\Component\Console\Command\Command::run`          | `./composer/vendor/symfony/console/Command/Command.php`                    |
|  88.7% |   3.69s | `Symfony\Component\Console\Application::doRunCommand`     | `./composer/vendor/symfony/console/Application.php`                        |
|  70.7% |   2.94s | `Composer\Autoload\AutoloadGenerator::dump`               | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  70.7% |   2.94s | `Composer\Command\DumpAutoloadCommand::execute`           | `./composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
|  66.9% |   2.78s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  60.5% |   2.52s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  39.9% |   1.66s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  23.8% | 989.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  21.9% | 911.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  18.5% | 769.0ms | `Composer\Pcre\Preg::matchStrictGroups`                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  18.0% | 748.0ms | `Composer\Factory::createComposer`                        | `./composer/src/Composer/Factory.php`                                      |
|  18.0% | 748.0ms | `Composer\Factory::create`                                | `./composer/src/Composer/Factory.php`                                      |
|  18.0% | 748.0ms | `Composer\Console\Application::getComposer`               | `./composer/src/Composer/Console/Application.php`                          |
|  18.0% | 748.0ms | `Composer\Command\BaseCommand::tryComposer`               | `./composer/src/Composer/Command/BaseCommand.php`                          |
|  18.0% | 748.0ms | `Composer\Command\BaseCommand::initialize`                | `./composer/src/Composer/Command/BaseCommand.php`                          |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Function                                                  | Location                                                                   |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 99.8% |   4.16s | `Symfony\Component\Console\Application::run`              | `./composer/vendor/symfony/console/Application.php`                        |
| 88.7% |   3.69s | `Symfony\Component\Console\Application::doRun`            | `./composer/vendor/symfony/console/Application.php`                        |
| 88.7% |   3.69s | `Symfony\Component\Console\Command\Command::run`          | `./composer/vendor/symfony/console/Command/Command.php`                    |
| 88.7% |   3.69s | `Symfony\Component\Console\Application::doRunCommand`     | `./composer/vendor/symfony/console/Application.php`                        |
| 66.9% |   2.78s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| 60.5% |   2.52s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`   | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
| 39.9% |   1.66s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 23.8% | 989.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| 21.9% | 911.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                 | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 18.5% | 769.0ms | `Composer\Pcre\Preg::matchStrictGroups`                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| 16.7% | 695.0ms | `Symfony\Component\Process\Process::run`                  | `./composer/vendor/symfony/process/Process.php`                            |
| 15.6% | 650.0ms | `Symfony\Component\Process\Process::wait`                 | `./composer/vendor/symfony/process/Process.php`                            |
| 15.5% | 646.0ms | `Symfony\Component\Process\Process::readPipes`            | `./composer/vendor/symfony/process/Process.php`                            |
| 15.5% | 645.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
| 12.1% | 502.0ms | `Composer\Pcre\Preg::match`                               | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  6.6% | 276.0ms | `Composer\Pcre\Preg::pregMatch`                           | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.9% | 203.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  4.7% | 197.0ms | `Composer\Pcre\Preg::matchAll`                            | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  4.0% | 167.0ms | `Symfony\Component\Console\Terminal::readFromProcess`     | `./composer/vendor/symfony/console/Terminal.php`                           |
|  4.0% | 167.0ms | `Symfony\Component\Console\Terminal::getSttyColumns`      | `./composer/vendor/symfony/console/Terminal.php`                           |

##### Ours

|      % |    Time | Function                                                      | Location                                                       |
| -----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% |   4.16s | `(file scope)`                                                | `./profile.php`                                                |
|  99.8% |   4.16s | `Composer\Console\Application::run`                           | `./composer/src/Composer/Console/Application.php`              |
|  95.8% |   3.99s | `Composer\Console\Application::doRun`                         | `./composer/src/Composer/Console/Application.php`              |
|  70.7% |   2.94s | `Composer\Autoload\AutoloadGenerator::dump`                   | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|  70.7% |   2.94s | `Composer\Command\DumpAutoloadCommand::execute`               | `./composer/src/Composer/Command/DumpAutoloadCommand.php`      |
|  18.0% | 748.0ms | `Composer\Factory::createComposer`                            | `./composer/src/Composer/Factory.php`                          |
|  18.0% | 748.0ms | `Composer\Factory::create`                                    | `./composer/src/Composer/Factory.php`                          |
|  18.0% | 748.0ms | `Composer\Console\Application::getComposer`                   | `./composer/src/Composer/Console/Application.php`              |
|  18.0% | 748.0ms | `Composer\Command\BaseCommand::tryComposer`                   | `./composer/src/Composer/Command/BaseCommand.php`              |
|  18.0% | 748.0ms | `Composer\Command\BaseCommand::initialize`                    | `./composer/src/Composer/Command/BaseCommand.php`              |
|  17.1% | 710.0ms | `Composer\Package\Loader\RootPackageLoader::load`             | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  16.9% | 705.0ms | `Composer\Package\Version\VersionGuesser::guessVersion`       | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|  16.9% | 703.0ms | `Composer\Util\ProcessExecutor::doExecute`                    | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|  16.9% | 703.0ms | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|  16.8% | 701.0ms | `Composer\Util\ProcessExecutor::runProcess`                   | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|  11.0% | 458.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   6.9% | 287.0ms | `Composer\Util\Silencer::call`                                | `./composer/src/Composer/Util/Silencer.php`                    |
|   3.5% | 147.0ms | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   3.0% | 125.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   2.7% | 112.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`            | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Caller                              | Location                                          |
| -----: | ----: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 4.16s | `Composer\Console\Application::run` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Caller         | Location        |
| -----: | ----: | -------------- | --------------- |
| 100.0% | 4.16s | `(file scope)` | `./profile.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Caller                                       | Location                                            |
| -----: | ----: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.99s | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Caller                                | Location                                          |
| -----: | ----: | ------------------------------------- | ------------------------------------------------- |
| 100.0% | 3.69s | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

|      % |  Time | Caller                                                | Location                                            |
| -----: | ----: | ----------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.69s | `Symfony\Component\Console\Application::doRunCommand` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Caller                                         | Location                                            |
| -----: | ----: | ---------------------------------------------- | --------------------------------------------------- |
| 100.0% | 3.69s | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |  Time | Caller                                          | Location                                                  |
| -----: | ----: | ----------------------------------------------- | --------------------------------------------------------- |
| 100.0% | 2.94s | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Caller                                           | Location                                                |
| -----: | ----: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 2.94s | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|      % |  Time | Caller                                      | Location                                                 |
| -----: | ----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.78s | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|      % |  Time | Caller                                                    | Location                                                                   |
| -----: | ----: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% | 2.52s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |  Time | Caller                                                  | Location                                                               |
| -----: | ----: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 1.66s | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                             | Location                                                                |
| -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 989.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                                        | Location                                                                   |
| ----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 96.8% | 882.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  1.9% |  17.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
|  1.3% |  12.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                                    | Location                                       |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 100.0% | 769.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Caller                     | Location                              |
| -----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 748.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Caller                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 748.0ms | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

|      % |    Time | Caller                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 748.0ms | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Caller                                     | Location                                          |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------- |
| 100.0% | 748.0ms | `Composer\Command\BaseCommand::initialize` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Caller                                           | Location                                                |
| -----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 748.0ms | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|      % |    Time | Caller                             | Location                              |
| -----: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 710.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                            | Location                                                       |
| -----: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 705.0ms | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Caller                                   | Location                                           |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 703.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Caller                                                        | Location                                                     |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 43.2% | 304.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 20.9% | 147.0ms | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 17.8% | 125.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  9.0% |  63.0ms | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.3% |  58.0ms | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Caller                                     | Location                                           |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 701.0ms | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Caller                                      | Location                                           |
| -----: | ------: | ------------------------------------------- | -------------------------------------------------- |
| 100.0% | 695.0ms | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|      % |    Time | Caller                                   | Location                                        |
| -----: | ------: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% | 650.0ms | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Caller                                            | Location                                        |
| ----: | ------: | ------------------------------------------------- | ----------------------------------------------- |
| 99.8% | 645.0ms | `Symfony\Component\Process\Process::wait`         | `./composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

|      % |    Time | Caller                                         | Location                                        |
| -----: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 645.0ms | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                  | Location                                       |
| ----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 96.6% | 485.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  3.4% |  17.0ms | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                                  | Location                                                     |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 458.0ms | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|     % |    Time | Caller                                                | Location                                          |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 97.2% | 279.0ms | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  1.4% |   4.0ms | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |
|  0.7% |   2.0ms | `Composer\Factory::getHomeDir`                        | `./composer/src/Composer/Factory.php`             |
|  0.7% |   2.0ms | `Composer\Console\Application::__construct`           | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

|      % |    Time | Caller                      | Location                                       |
| -----: | ------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 276.0ms | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|      % |    Time | Caller                                             | Location                                                                |
| -----: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 203.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Caller                                                  | Location                                                               |
| ----: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 78.7% | 155.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| 21.3% |  42.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Caller                                               | Location                                         |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 167.0ms | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Caller                                                        | Location                                         |
| -----: | ------: | ------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 167.0ms | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                                     | Location                                                     |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 147.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Caller                                                  | Location                                                     |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 125.0ms | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|      % |    Time | Caller                                      | Location                                                 |
| -----: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 112.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(file scope)` (`./profile.php`)

|     % |  Time | Callee                                                 | Location                                              |
| ----: | ----: | ------------------------------------------------------ | ----------------------------------------------------- |
| 99.8% | 4.16s | `Composer\Console\Application::run`                    | `./composer/src/Composer/Console/Application.php`     |
|  0.1% | 3.0ms | `Composer\Console\Application::__construct`            | `./composer/src/Composer/Console/Application.php`     |
| <0.1% | 2.0ms | `Composer\Autoload\ClassLoader::loadClass`             | `./composer/vendor/composer/ClassLoader.php`          |
| <0.1% | 1.0ms | `(file scope)`                                         | `./composer/src/bootstrap.php`                        |
| <0.1% | 1.0ms | `Symfony\Component\Console\Output\Output::__construct` | `./composer/vendor/symfony/console/Output/Output.php` |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

|     % |    Time | Callee                                          | Location                                          |
| ----: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| 96.0% |   3.99s | `Composer\Console\Application::doRun`           | `./composer/src/Composer/Console/Application.php` |
|  3.9% | 161.0ms | `Symfony\Component\Console\Terminal::getHeight` | `./composer/vendor/symfony/console/Terminal.php`  |
|  0.1% |   6.0ms | `Symfony\Component\Console\Terminal::getWidth`  | `./composer/vendor/symfony/console/Terminal.php`  |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

|      % |  Time | Callee                                       | Location                                            |
| -----: | ----: | -------------------------------------------- | --------------------------------------------------- |
| 100.0% | 4.16s | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|     % |    Time | Callee                                         | Location                                            |
| ----: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| 92.6% |   3.69s | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |
|  7.0% | 279.0ms | `Composer\Util\Silencer::call`                 | `./composer/src/Composer/Util/Silencer.php`         |
|  0.3% |  13.0ms | `Symfony\Component\Console\Application::find`  | `./composer/vendor/symfony/console/Application.php` |
|  0.1% |   3.0ms | `Composer\Autoload\ClassLoader::loadClass`     | `./composer/vendor/composer/ClassLoader.php`        |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

|     % |  Time | Callee                                                 | Location                                            |
| ----: | ----: | ------------------------------------------------------ | --------------------------------------------------- |
| 99.9% | 3.69s | `Symfony\Component\Console\Application::doRunCommand`  | `./composer/vendor/symfony/console/Application.php` |
|  0.1% | 2.0ms | `Symfony\Component\Console\Application::getDefinition` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

|     % |    Time | Callee                                          | Location                                                  |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------- |
| 79.7% |   2.94s | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |
| 20.3% | 748.0ms | `Composer\Command\BaseCommand::initialize`      | `./composer/src/Composer/Command/BaseCommand.php`         |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

|      % |  Time | Callee                                           | Location                                                |
| -----: | ----: | ------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 3.69s | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |    Time | Callee                                                    | Location                                                                   |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 94.6% |   2.78s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  3.8% | 112.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.7% |  22.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  0.2% |   5.0ms | `Composer\Util\Filesystem::safeCopy`                      | `./composer/src/Composer/Util/Filesystem.php`                              |
|  0.1% |   4.0ms | `Composer\Util\Filesystem::filePutContentsIfModified`     | `./composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

|      % |  Time | Callee                                      | Location                                                 |
| -----: | ----: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 2.94s | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

|     % |   Time | Callee                                                                          | Location                                                                       |
| ----: | -----: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 90.5% |  2.52s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
|  2.0% | 55.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  2.0% | 55.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  1.3% | 36.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
|  0.4% | 11.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`            | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|     % |    Time | Callee                                                    | Location                                                                |
| ----: | ------: | --------------------------------------------------------- | ----------------------------------------------------------------------- |
| 65.9% |   1.66s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  6.3% | 158.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`                | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|  1.7% |  42.0ms | `Composer\Pcre\Preg::matchAll`                            | `./composer/vendor/composer/pcre/src/Preg.php`                          |
| <0.1% |   1.0ms | `Composer\ClassMapGenerator\PhpFileParser::getExtraTypes` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`  |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Callee                                                   | Location                                                                |
| ----: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 59.6% | 989.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| 12.2% | 203.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  1.1% |  19.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  0.5% |   9.0ms | `Composer\Pcre\Preg::isMatch`                            | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|  0.3% |   5.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|     % |    Time | Callee                                    | Location                                       |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 89.2% | 882.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Callee                                  | Location                                       |
| ----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 84.4% | 769.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Callee                                      | Location                                       |
| ----: | ------: | ------------------------------------------- | ---------------------------------------------- |
| 63.1% | 485.0ms | `Composer\Pcre\Preg::match`                 | `./composer/vendor/composer/pcre/src/Preg.php` |
| 18.3% | 141.0ms | `Composer\Pcre\Preg::enforceNonNullMatches` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|     % |    Time | Callee                                            | Location                                                       |
| ----: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| 94.9% | 710.0ms | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  2.4% |  18.0ms | `Composer\Json\JsonFile::validateSchema`          | `./composer/src/Composer/Json/JsonFile.php`                    |
|  0.7% |   5.0ms | `Composer\Factory::createHttpDownloader`          | `./composer/src/Composer/Factory.php`                          |
|  0.4% |   3.0ms | `Composer\Factory::createConfig`                  | `./composer/src/Composer/Factory.php`                          |
|  0.3% |   2.0ms | `Composer\Autoload\ClassLoader::loadClass`        | `./composer/vendor/composer/ClassLoader.php`                   |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

|      % |    Time | Callee                             | Location                              |
| -----: | ------: | ---------------------------------- | ------------------------------------- |
| 100.0% | 748.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

|      % |    Time | Callee                     | Location                              |
| -----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 748.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Callee                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 748.0ms | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

|      % |    Time | Callee                                      | Location                                          |
| -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 100.0% | 748.0ms | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

|     % |    Time | Callee                                                                 | Location                                                           |
| ----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 99.3% | 705.0ms | `Composer\Package\Version\VersionGuesser::guessVersion`                | `./composer/src/Composer/Package/Version/VersionGuesser.php`       |
|  0.3% |   2.0ms | `Composer\Package\Loader\ValidatingArrayLoader::hasPackageNamingError` | `./composer/src/Composer/Package/Loader/ValidatingArrayLoader.php` |
|  0.3% |   2.0ms | `Composer\Repository\RepositoryFactory::defaultRepos`                  | `./composer/src/Composer/Repository/RepositoryFactory.php`         |
|  0.1% |   1.0ms | `Composer\Package\Loader\ArrayLoader::load`                            | `./composer/src/Composer/Package/Loader/ArrayLoader.php`           |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Callee                                                        | Location                                                     |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 65.0% | 458.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
| 17.7% | 125.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.9% |  63.0ms | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  8.4% |  59.0ms | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Callee                                            | Location                                           |
| ----: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 99.7% | 701.0ms | `Composer\Util\ProcessExecutor::runProcess`       | `./composer/src/Composer/Util/ProcessExecutor.php` |
|  0.1% |   1.0ms | `Composer\Util\ProcessExecutor::outputCommandRun` | `./composer/src/Composer/Util/ProcessExecutor.php` |
|  0.1% |   1.0ms | `Symfony\Component\Process\Process::__destruct`   | `./composer/vendor/symfony/process/Process.php`    |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|      % |    Time | Callee                                     | Location                                           |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------- |
| 100.0% | 703.0ms | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|     % |    Time | Callee                                                    | Location                                                      |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------------------------- |
| 99.1% | 695.0ms | `Symfony\Component\Process\Process::run`                  | `./composer/vendor/symfony/process/Process.php`               |
|  0.4% |   3.0ms | `Seld\Signal\SignalHandler::unregister`                   | `./composer/vendor/seld/signal-handler/src/SignalHandler.php` |
|  0.1% |   1.0ms | `Composer\Autoload\ClassLoader::loadClass`                | `./composer/vendor/composer/ClassLoader.php`                  |
|  0.1% |   1.0ms | `Symfony\Component\Process\Process::fromShellCommandline` | `./composer/vendor/symfony/process/Process.php`               |

##### `Symfony\Component\Process\Process::run` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Callee                                     | Location                                        |
| ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 93.5% | 650.0ms | `Symfony\Component\Process\Process::wait`  | `./composer/vendor/symfony/process/Process.php` |
|  6.5% |  45.0ms | `Symfony\Component\Process\Process::start` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Callee                                            | Location                                        |
| ----: | ------: | ------------------------------------------------- | ----------------------------------------------- |
| 99.2% | 645.0ms | `Symfony\Component\Process\Process::readPipes`    | `./composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms | `Symfony\Component\Process\Process::isRunning`    | `./composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |
|  0.2% |   1.0ms | `Symfony\Component\Process\Process::checkTimeout` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|     % |    Time | Callee                                                    | Location                                                |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------------------- |
| 99.8% | 645.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php` |
|  0.2% |   1.0ms | `(anonymous)`                                             | `./composer/vendor/symfony/process/Process.php:1324`    |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

|     % |    Time | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 55.0% | 276.0ms | `Composer\Pcre\Preg::pregMatch`          | `./composer/vendor/composer/pcre/src/Preg.php` |
| 15.3% |  77.0ms | `Composer\Pcre\Preg::checkOffsetCapture` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|     % |    Time | Callee                                                        | Location                                                     |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
| 66.4% | 304.0ms | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`           |
| 32.1% | 147.0ms | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  1.3% |   6.0ms | `Composer\Util\Git::getNoShowSignatureFlag`                   | `./composer/src/Composer/Util/Git.php`                       |
|  0.2% |   1.0ms | `Composer\Util\Git::cleanEnv`                                 | `./composer/src/Composer/Util/Git.php`                       |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|    % |   Time | Callee                             | Location                                              |
| ---: | -----: | ---------------------------------- | ----------------------------------------------------- |
| 4.9% | 14.0ms | `(anonymous)`                      | `./composer/src/Composer/Console/Application.php:353` |
| 1.4% |  4.0ms | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php`           |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|    % |  Time | Callee                                            | Location                                                                |
| ---: | ----: | ------------------------------------------------- | ----------------------------------------------------------------------- |
| 0.5% | 1.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::peek` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|    % |  Time | Callee                                   | Location                                       |
| ---: | ----: | ---------------------------------------- | ---------------------------------------------- |
| 3.6% | 7.0ms | `Composer\Pcre\Preg::checkOffsetCapture` | `./composer/vendor/composer/pcre/src/Preg.php` |
| 1.5% | 3.0ms | `Composer\Pcre\Preg::checkSetOrder`      | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`./composer/vendor/symfony/console/Terminal.php`)

|      % |    Time | Callee                                                | Location                                         |
| -----: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 167.0ms | `Symfony\Component\Console\Terminal::readFromProcess` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Callee                                   | Location                                           |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 147.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

|      % |    Time | Callee                                   | Location                                           |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------- |
| 100.0% | 125.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|     % |   Time | Callee                                       | Location                                      |
| ----: | -----: | -------------------------------------------- | --------------------------------------------- |
| 58.9% | 66.0ms | `Composer\Util\Filesystem::findShortestPath` | `./composer/src/Composer/Util/Filesystem.php` |
| 31.3% | 35.0ms | `Composer\Util\Filesystem::normalizePath`    | `./composer/src/Composer/Util/Filesystem.php` |
|  0.9% |  1.0ms | `Composer\Util\Filesystem::isAbsolutePath`   | `./composer/src/Composer/Util/Filesystem.php` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← `(file scope)` (`./profile.php`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.8% | 659.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 10.4% | 435.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  6.7% | 277.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                 |
|  6.3% | 263.0ms | `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`) ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  6.1% | 252.0ms | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                    |
|  4.9% | 202.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  3.9% | 161.0ms | `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`) ← `Symfony\Component\Console\Terminal::getSttyColumns` ← `Symfony\Component\Console\Terminal::initDimensionsUsingStty` ← `Symfony\Component\Console\Terminal::initDimensions` ← `Symfony\Component\Console\Terminal::getHeight`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.7% | 153.0ms | `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% | 142.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) |
|  3.4% | 140.0ms | `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                      |
|  3.3% | 139.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  3.3% | 138.0ms | `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                      |
|  3.3% | 138.0ms | `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.6% | 108.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                              |
|  2.6% | 107.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.8% |  77.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.8% |  75.0ms | `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                           |
|  1.3% |  56.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessSvnVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                 |
|  1.3% |  55.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessHgVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                  |
|  1.3% |  55.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

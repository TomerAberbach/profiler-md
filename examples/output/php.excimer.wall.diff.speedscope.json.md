# Sampling profile diff

Took 4.16s → 3.94s (-220.00ms, -5.3%).

| Category    | Change |     Delta |             % |              Time |
| ----------- | -----: | --------: | ------------: | ----------------: |
| Third-party |  -4.6% | -174.00ms | 90.6% → 91.2% |     3.77s → 3.60s |
| Ours        | -11.7% |  -46.00ms |   9.4% → 8.8% | 393.0ms → 347.0ms |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-php-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── … 4.16s → 3.94s (99.8% → 99.9%) Symfony\Component\Console\Application::run at ./composer/vendor/symfony/console/Application.php
    ├── 3.99s → 3.92s (95.8% → 99.5%) Composer\Console\Application::doRun at ./composer/src/Composer/Console/Application.php
    │   ├── … 3.69s → 3.65s (88.7% → 92.6%) Symfony\Component\Console\Command\Command::run at ./composer/vendor/symfony/console/Command/Command.php
    │   │   ├── 2.94s → 2.92s (70.7% → 74.1%) Composer\Command\DumpAutoloadCommand::execute at ./composer/src/Composer/Command/DumpAutoloadCommand.php
    │   │   │   └── 2.94s → 2.92s (70.7% → 74.0%) Composer\Autoload\AutoloadGenerator::dump at ./composer/src/Composer/Autoload/AutoloadGenerator.php
    │   │   │       ├── 2.78s → 2.77s (66.9% → 70.1%, self 1.8% → 1.6%) Composer\ClassMapGenerator\ClassMapGenerator::scanPaths at ./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php
    │   │   │       │   ├── 2.52s → 2.50s (60.5% → 63.4%, self 15.8% → 17.0%) Composer\ClassMapGenerator\PhpFileParser::findClasses at ./composer/vendor/composer/class-map-generator/src/PhpFileParser.php
    │   │   │       │   │   ├── 1.66s → 1.65s (39.9% → 41.8%, self 10.4% → 10.3%) Composer\ClassMapGenerator\PhpFileCleaner::clean at ./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php
    │   │   │       │   │   │   ├── 989.0ms → 1.02s (23.8% → 25.8%, self 2.6% → 2.9%) Composer\ClassMapGenerator\PhpFileCleaner::match
    │   │   │       │   │   │   │   └── 882.0ms → 902.0ms (21.2% → 22.9%, self 3.3% → 3.2%) Composer\Pcre\Preg::isMatchStrictGroups at ./composer/vendor/composer/pcre/src/Preg.php
    │   │   │       │   │   │   │       └── 743.0ms → 776.0ms (17.8% → 19.7%, self 3.3% → 3.5%) Composer\Pcre\Preg::matchStrictGroups
    │   │   │       │   │   │   │           ├── 467.0ms → 509.0ms (11.2% → 12.9%, self 3.4% → 4.1%) Composer\Pcre\Preg::match
    │   │   │       │   │   │   │           │   ├── 252.0ms → 248.0ms (6.1% → 6.3%, self 6.6% → 6.7% globally) Composer\Pcre\Preg::pregMatch
    │   │   │       │   │   │   │           │   └── 75.0ms → 98.0ms (1.8% → 2.5%) Composer\Pcre\Preg::checkOffsetCapture
    │   │   │       │   │   │   │           └── 138.0ms → 127.0ms (3.3% → 3.2%) Composer\Pcre\Preg::enforceNonNullMatches
    │   │   │       │   │   │   ├── 203.0ms → 195.0ms (4.9%, self 4.9%) Composer\ClassMapGenerator\PhpFileCleaner::skipString
    │   │   │       │   │   │   ├── 19.0ms → 21.0ms (0.5%) Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc
    │   │   │       │   │   │   └── … 7.0ms → 0ms (0.2% → 0.0%) Composer\Pcre\Preg::pregMatch at ./composer/vendor/composer/pcre/src/Preg.php
    │   │   │       │   │   ├── 158.0ms → 144.0ms (3.8% → 3.7%) Composer\Pcre\Preg::matchAllStrictGroups at ./composer/vendor/composer/pcre/src/Preg.php
    │   │   │       │   │   │   └── 155.0ms → 141.0ms (3.7% → 3.6%, self 3.7% → 3.6%, self 4.5% globally) Composer\Pcre\Preg::matchAll
    │   │   │       │   │   └── 42.0ms → 38.0ms (1.0%, self 0.8% → 1.0%) Composer\Pcre\Preg::matchAll at ./composer/vendor/composer/pcre/src/Preg.php
    │   │   │       │   ├── … 51.0ms → 77.0ms (1.2% → 2.0%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
    │   │   │       │   ├── 36.0ms → 25.0ms (0.9% → 0.6%) Composer\ClassMapGenerator\ClassMapGenerator::normalizePath
    │   │   │       │   ├── 7.0ms → 11.0ms (0.2% → 0.3%) Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current at ./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php
    │   │   │       │   └── 89.0ms → 88.0ms (2.1% → 2.2%) 13 more callees, led by (1.3% → 1.4%) Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::hasChildren at ./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php
    │   │   │       ├── 22.0ms → 20.0ms (0.5%) Composer\Autoload\AutoloadGenerator::getStaticFile
    │   │   │       │   └── 7.0ms → 1.0ms (0.2% → <0.1%) Composer\Pcre\Preg::replace at ./composer/vendor/composer/pcre/src/Preg.php
    │   │   │       └── 132.0ms (3.2% → 3.3%) 14 more callees, led by (2.7% → 3.0%) Composer\Autoload\AutoloadGenerator::getPathCode
    │   │   └── … 748.0ms → 732.0ms (18.0% → 18.6%) Composer\Factory::createComposer at ./composer/src/Composer/Factory.php
    │   │       ├── 710.0ms → 697.0ms (17.1% → 17.7%) Composer\Package\Loader\RootPackageLoader::load at ./composer/src/Composer/Package/Loader/RootPackageLoader.php
    │   │       │   └── 705.0ms → 692.0ms (16.9% → 17.5%) Composer\Package\Version\VersionGuesser::guessVersion at ./composer/src/Composer/Package/Version/VersionGuesser.php
    │   │       │       ├── … 122.0ms → 117.0ms (2.9% → 3.0%) Symfony\Component\Process\Process::run at ./composer/vendor/symfony/process/Process.php
    │   │       │       │   ├── … 108.0ms → 97.0ms (2.6% → 2.5%, self 15.5% → 15.9% globally) Symfony\Component\Process\Pipes\UnixPipes::readAndWrite at ./composer/vendor/symfony/process/Pipes/UnixPipes.php
    │   │       │       │   └── 13.0ms → 18.0ms (0.3% → 0.5%, self 0.9% → 1.1% globally) Symfony\Component\Process\Process::start
    │   │       │       └── 580.0ms → 574.0ms (13.9% → 14.6%) 3 more callees, led by (11.0% → 11.6%) Composer\Package\Version\VersionGuesser::guessGitVersion
    │   │       ├── … 4.0ms → 10.0ms (0.1% → 0.3%) JsonSchema\Uri\UriRetriever::loadSchema at ./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php
    │   │       └── 2.0ms → 4.0ms (<0.1% → 0.1%) Composer\Autoload\ClassLoader::loadClass at ./composer/vendor/composer/ClassLoader.php
    │   ├── 279.0ms → 246.0ms (6.7% → 6.2%, self 6.3% → 5.9%) Composer\Util\Silencer::call at ./composer/src/Composer/Util/Silencer.php
    │   └── 13.0ms → 16.0ms (0.3% → 0.4%) Symfony\Component\Console\Application::find at ./composer/vendor/symfony/console/Application.php
    └── … 161.0ms → 9.0ms (3.9% → 0.2%) Symfony\Component\Console\Terminal::readFromProcess at ./composer/vendor/symfony/console/Terminal.php
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time | Function                                                                    | Location                                                                          |
| ------: | -------: | ------------: | ----------------: | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
|  +51.9% | +28.00ms |   1.3% → 2.1% |   54.0ms → 82.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +14.1% | +21.00ms |   3.6% → 4.3% | 149.0ms → 170.0ms | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|  +22.6% | +19.00ms |   2.0% → 2.6% |  84.0ms → 103.0ms | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +1.8% | +12.00ms | 15.8% → 17.0% | 659.0ms → 671.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`            |
|   +8.4% |  +9.00ms |   2.6% → 2.9% | 107.0ms → 116.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +35.7% |  +5.00ms |   0.3% → 0.5% |   14.0ms → 19.0ms | `Composer\Autoload\ClassLoader::loadClass`                                  | `./composer/vendor/composer/ClassLoader.php`                                      |
| +125.0% |  +5.00ms |   0.1% → 0.2% |     4.0ms → 9.0ms | `JsonSchema\Uri\UriRetriever::loadSchema`                                   | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
|   +2.8% |  +4.00ms |   3.4% → 3.7% | 143.0ms → 147.0ms | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
| +200.0% |  +4.00ms |  <0.1% → 0.2% |     2.0ms → 6.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`     | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
| +133.3% |  +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile`                        | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                          |
|   +7.7% |  +3.00ms |   0.9% → 1.1% |   39.0ms → 42.0ms | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                                   |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms | `(file scope)`                                                              | `./vendor/composer/autoload_classmap.php`                                         |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms | `Composer\Util\Filesystem::isAbsolutePath`                                  | `./composer/src/Composer/Util/Filesystem.php`                                     |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms | `Composer\Util\StreamContextFactory::getTlsDefaults`                        | `./composer/src/Composer/Util/StreamContextFactory.php`                           |
| +100.0% |  +2.00ms |  <0.1% → 0.1% |     2.0ms → 4.0ms | `Symfony\Component\Process\Process::wait`                                   | `./composer/vendor/symfony/process/Process.php`                                   |
|  +14.3% |  +2.00ms |   0.3% → 0.4% |   14.0ms → 16.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +20.0% |  +2.00ms |   0.2% → 0.3% |   10.0ms → 12.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`                          | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                          |
|  +12.5% |  +2.00ms |   0.4% → 0.5% |   16.0ms → 18.0ms | `Composer\Util\Filesystem::findShortestPath`                                | `./composer/src/Composer/Util/Filesystem.php`                                     |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`                      | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::getCwd`                      | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`        |

##### Third-party

|  Change |    Delta |             % |              Time | Function                                                                    | Location                                                                          |
| ------: | -------: | ------------: | ----------------: | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
|  +51.9% | +28.00ms |   1.3% → 2.1% |   54.0ms → 82.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +14.1% | +21.00ms |   3.6% → 4.3% | 149.0ms → 170.0ms | `Composer\Pcre\Preg::match`                                                 | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|  +22.6% | +19.00ms |   2.0% → 2.6% |  84.0ms → 103.0ms | `Composer\Pcre\Preg::checkOffsetCapture`                                    | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +1.8% | +12.00ms | 15.8% → 17.0% | 659.0ms → 671.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                     | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`            |
|   +8.4% |  +9.00ms |   2.6% → 2.9% | 107.0ms → 116.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`                          | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +35.7% |  +5.00ms |   0.3% → 0.5% |   14.0ms → 19.0ms | `Composer\Autoload\ClassLoader::loadClass`                                  | `./composer/vendor/composer/ClassLoader.php`                                      |
| +125.0% |  +5.00ms |   0.1% → 0.2% |     4.0ms → 9.0ms | `JsonSchema\Uri\UriRetriever::loadSchema`                                   | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
|   +2.8% |  +4.00ms |   3.4% → 3.7% | 143.0ms → 147.0ms | `Composer\Pcre\Preg::matchStrictGroups`                                     | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
| +200.0% |  +4.00ms |  <0.1% → 0.2% |     2.0ms → 6.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`     | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|   +7.7% |  +3.00ms |   0.9% → 1.1% |   39.0ms → 42.0ms | `Symfony\Component\Process\Process::start`                                  | `./composer/vendor/symfony/process/Process.php`                                   |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms | `(file scope)`                                                              | `./vendor/composer/autoload_classmap.php`                                         |
| +100.0% |  +2.00ms |  <0.1% → 0.1% |     2.0ms → 4.0ms | `Symfony\Component\Process\Process::wait`                                   | `./composer/vendor/symfony/process/Process.php`                                   |
|  +14.3% |  +2.00ms |   0.3% → 0.4% |   14.0ms → 16.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
| +200.0% |  +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`                      | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::getCwd`                      | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`        |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms | `Symfony\Component\Console\Input\ArrayInput::hasParameterOption`            | `./composer/vendor/symfony/console/Input/ArrayInput.php`                          |
|     new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms | `Symfony\Component\Finder\SplFileInfo::getRelativePathname`                 | `./composer/vendor/symfony/finder/SplFileInfo.php`                                |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `Symfony\Component\Console\Application::init`                               | `./composer/vendor/symfony/console/Application.php`                               |
|  +50.0% |  +1.00ms |  <0.1% → 0.1% |     2.0ms → 3.0ms | `Symfony\Component\Console\Input\InputOption::__construct`                  | `./composer/vendor/symfony/console/Input/InputOption.php`                         |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `Symfony\Component\Process\Process::readPipes`                              | `./composer/vendor/symfony/process/Process.php`                                   |

##### Ours

|  Change |   Delta |            % |            Time | Function                                                  | Location                                                    |
| ------: | ------: | -----------: | --------------: | --------------------------------------------------------- | ----------------------------------------------------------- |
| +133.3% | +4.00ms |  0.1% → 0.2% |   3.0ms → 7.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile`      | `./composer/src/Composer/Autoload/AutoloadGenerator.php`    |
| +300.0% | +3.00ms | <0.1% → 0.1% |   1.0ms → 4.0ms | `Composer\Util\Filesystem::isAbsolutePath`                | `./composer/src/Composer/Util/Filesystem.php`               |
|     new | +2.00ms |  0.0% → 0.1% |     0ms → 2.0ms | `Composer\Util\StreamContextFactory::getTlsDefaults`      | `./composer/src/Composer/Util/StreamContextFactory.php`     |
|  +20.0% | +2.00ms |  0.2% → 0.3% | 10.0ms → 12.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php`    |
|  +12.5% | +2.00ms |  0.4% → 0.5% | 16.0ms → 18.0ms | `Composer\Util\Filesystem::findShortestPath`              | `./composer/src/Composer/Util/Filesystem.php`               |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms | `Composer\Factory::createComposer`                        | `./composer/src/Composer/Factory.php`                       |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms | `Composer\Repository\RepositoryManager::createRepository` | `./composer/src/Composer/Repository/RepositoryManager.php`  |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms | `Composer\Command\DumpAutoloadCommand::execute`           | `./composer/src/Composer/Command/DumpAutoloadCommand.php`   |
|   +7.1% | +1.00ms |  0.3% → 0.4% | 14.0ms → 15.0ms | `(anonymous)`                                             | `./composer/src/Composer/Console/Application.php:353 → 349` |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms | `Composer\Util\Filesystem::filePutContentsIfModified`     | `./composer/src/Composer/Util/Filesystem.php`               |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms | `(file scope)`                                            | `./composer/src/Composer/Command/InstallCommand.php`        |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms | `(file scope)`                                            | `./composer/src/Composer/Package/Archiver/PharArchiver.php` |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms | `Composer\Package\Locker::__construct`                    | `./composer/src/Composer/Package/Locker.php`                |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms | `Composer\Repository\ArrayRepository::getPackages`        | `./composer/src/Composer/Repository/ArrayRepository.php`    |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms | `Composer\Command\DependsCommand::configure`              | `./composer/src/Composer/Command/DependsCommand.php`        |
|     new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms | `Composer\Autoload\AutoloadGenerator::getPlatformCheck`   | `./composer/src/Composer/Autoload/AutoloadGenerator.php`    |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time | Function                                                             | Location                                                                   |
| ------: | --------: | ------------: | ----------------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::readFromProcess`                | `./composer/vendor/symfony/console/Terminal.php`                           |
|  -13.0% |  -35.00ms |   6.5% → 5.9% | 269.0ms → 234.0ms | `Composer\Util\Silencer::call`                                       | `./composer/src/Composer/Util/Silencer.php`                                |
|   -6.2% |  -27.00ms | 10.4% → 10.3% | 435.0ms → 408.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|   -2.5% |  -16.00ms | 15.5% → 15.9% | 645.0ms → 629.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`            | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
|  -19.5% |  -15.00ms |   1.8% → 1.6% |   77.0ms → 62.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`            | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|   -4.3% |  -12.00ms |   6.6% → 6.7% | 276.0ms → 264.0ms | `Composer\Pcre\Preg::pregMatch`                                      | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|   -7.8% |  -11.00ms |   3.4% → 3.3% | 141.0ms → 130.0ms | `Composer\Pcre\Preg::enforceNonNullMatches`                          | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|   -7.0% |  -10.00ms |   3.4% → 3.3% | 142.0ms → 132.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                            | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|   -4.0% |   -8.00ms |          4.9% | 202.0ms → 194.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`              | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|   -4.3% |   -8.00ms |          4.5% | 187.0ms → 179.0ms | `Composer\Pcre\Preg::matchAll`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  -85.7% |   -6.00ms |  0.2% → <0.1% |     7.0ms → 1.0ms | `Composer\Pcre\Preg::replace`                                        | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  -25.0% |   -5.00ms |   0.5% → 0.4% |   20.0ms → 15.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`        | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  -31.3% |   -5.00ms |   0.4% → 0.3% |   16.0ms → 11.0ms | `Composer\Pcre\Preg::isMatch`                                        | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  -66.7% |   -4.00ms |          0.1% |     6.0ms → 2.0ms | `Composer\Autoload\AutoloadGenerator::dump`                          | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  -36.4% |   -4.00ms |   0.3% → 0.2% |    11.0ms → 7.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  -17.6% |   -3.00ms |          0.4% |   17.0ms → 14.0ms | `Composer\Pcre\Preg::replaceCallback`                                | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|   -9.1% |   -3.00ms |          0.8% |   33.0ms → 30.0ms | `Composer\Util\Filesystem::normalizePath`                            | `./composer/src/Composer/Util/Filesystem.php`                              |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms | `Seld\Signal\SignalHandler::unregister`                              | `./composer/vendor/seld/signal-handler/src/SignalHandler.php`              |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms | `Composer\Pcre\Preg::checkSetOrder`                                  | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| removed |   -2.00ms |  <0.1% → 0.0% |       2.0ms → 0ms | `Symfony\Component\Console\Application::find`                        | `./composer/vendor/symfony/console/Application.php`                        |

##### Third-party

|  Change |     Delta |             % |              Time | Function                                                             | Location                                                                   |
| ------: | --------: | ------------: | ----------------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::readFromProcess`                | `./composer/vendor/symfony/console/Terminal.php`                           |
|   -6.2% |  -27.00ms | 10.4% → 10.3% | 435.0ms → 408.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean`                   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|   -2.5% |  -16.00ms | 15.5% → 15.9% | 645.0ms → 629.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`            | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
|  -19.5% |  -15.00ms |   1.8% → 1.6% |   77.0ms → 62.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`            | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|   -4.3% |  -12.00ms |   6.6% → 6.7% | 276.0ms → 264.0ms | `Composer\Pcre\Preg::pregMatch`                                      | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|   -7.8% |  -11.00ms |   3.4% → 3.3% | 141.0ms → 130.0ms | `Composer\Pcre\Preg::enforceNonNullMatches`                          | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|   -7.0% |  -10.00ms |   3.4% → 3.3% | 142.0ms → 132.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                            | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|   -4.0% |   -8.00ms |          4.9% | 202.0ms → 194.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`              | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|   -4.3% |   -8.00ms |          4.5% | 187.0ms → 179.0ms | `Composer\Pcre\Preg::matchAll`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  -85.7% |   -6.00ms |  0.2% → <0.1% |     7.0ms → 1.0ms | `Composer\Pcre\Preg::replace`                                        | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  -25.0% |   -5.00ms |   0.5% → 0.4% |   20.0ms → 15.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`        | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  -31.3% |   -5.00ms |   0.4% → 0.3% |   16.0ms → 11.0ms | `Composer\Pcre\Preg::isMatch`                                        | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  -36.4% |   -4.00ms |   0.3% → 0.2% |    11.0ms → 7.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
|  -17.6% |   -3.00ms |          0.4% |   17.0ms → 14.0ms | `Composer\Pcre\Preg::replaceCallback`                                | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms | `Seld\Signal\SignalHandler::unregister`                              | `./composer/vendor/seld/signal-handler/src/SignalHandler.php`              |
| removed |   -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms | `Composer\Pcre\Preg::checkSetOrder`                                  | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| removed |   -2.00ms |  <0.1% → 0.0% |       2.0ms → 0ms | `Symfony\Component\Console\Application::find`                        | `./composer/vendor/symfony/console/Application.php`                        |
|  -40.0% |   -2.00ms |          0.1% |     5.0ms → 3.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`             | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| removed |   -2.00ms |  <0.1% → 0.0% |       2.0ms → 0ms | `Symfony\Component\Finder\Finder::normalizeDir`                      | `./composer/vendor/symfony/finder/Finder.php`                              |
|  -66.7% |   -2.00ms |  0.1% → <0.1% |     3.0ms → 1.0ms | `(file scope)`                                                       | `./vendor/composer/autoload_namespaces.php`                                |

##### Ours

|  Change |    Delta |            % |              Time | Function                                                               | Location                                                           |
| ------: | -------: | -----------: | ----------------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  -13.0% | -35.00ms |  6.5% → 5.9% | 269.0ms → 234.0ms | `Composer\Util\Silencer::call`                                         | `./composer/src/Composer/Util/Silencer.php`                        |
|  -66.7% |  -4.00ms |         0.1% |     6.0ms → 2.0ms | `Composer\Autoload\AutoloadGenerator::dump`                            | `./composer/src/Composer/Autoload/AutoloadGenerator.php`           |
|   -9.1% |  -3.00ms |         0.8% |   33.0ms → 30.0ms | `Composer\Util\Filesystem::normalizePath`                              | `./composer/src/Composer/Util/Filesystem.php`                      |
| removed |  -2.00ms | <0.1% → 0.0% |       2.0ms → 0ms | `Composer\Json\JsonFile::validateSchema`                               | `./composer/src/Composer/Json/JsonFile.php`                        |
|  -66.7% |  -2.00ms | 0.1% → <0.1% |     3.0ms → 1.0ms | `Composer\Util\Http\CurlDownloader::__construct`                       | `./composer/src/Composer/Util/Http/CurlDownloader.php`             |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `(file scope)`                                                         | `./composer/src/Composer/IO/BaseIO.php`                            |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\Console\Application::doRun`                                  | `./composer/src/Composer/Console/Application.php`                  |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `(file scope)`                                                         | `./composer/src/Composer/Command/InitCommand.php`                  |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `(file scope)`                                                         | `./composer/src/Composer/Command/SuggestsCommand.php`              |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\IO\ConsoleIO::isVerbose`                                     | `./composer/src/Composer/IO/ConsoleIO.php`                         |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\Util\ErrorHandler::handle`                                   | `./composer/src/Composer/Util/ErrorHandler.php`                    |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\Util\Silencer::suppress`                                     | `./composer/src/Composer/Util/Silencer.php`                        |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\Package\Loader\ValidatingArrayLoader::hasPackageNamingError` | `./composer/src/Composer/Package/Loader/ValidatingArrayLoader.php` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\Util\ProcessExecutor::runProcess`                            | `./composer/src/Composer/Util/ProcessExecutor.php`                 |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `(file scope)`                                                         | `./composer/src/Composer/Repository/FilesystemRepository.php`      |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `(file scope)`                                                         | `./composer/src/Composer/Installer/LibraryInstaller.php`           |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\Util\Filesystem::ensureDirectoryExists`                      | `./composer/src/Composer/Util/Filesystem.php`                      |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\Util\Filesystem::safeCopy`                                   | `./composer/src/Composer/Util/Filesystem.php`                      |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\Util\Git::cleanEnv`                                          | `./composer/src/Composer/Util/Git.php`                             |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\Json\JsonFile::read`                                         | `./composer/src/Composer/Json/JsonFile.php`                        |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

| Change |    Delta |             % |            Time | Caller                                                                      | Location                                                                   |
| -----: | -------: | ------------: | --------------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +51.0% | +26.00ms | 94.4% → 93.9% | 51.0ms → 77.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
| +66.7% |  +2.00ms |   5.6% → 6.1% |   3.0ms → 5.0ms | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `./composer/vendor/symfony/finder/Finder.php`                              |

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time | Caller                                  | Location                                       |
| -----: | -------: | ------------: | ----------------: | --------------------------------------- | ---------------------------------------------- |
| +14.5% | +21.00ms | 97.3% → 97.6% | 145.0ms → 166.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |    Delta |              % |             Time | Caller                         | Location                                       |
| ------: | -------: | -------------: | ---------------: | ------------------------------ | ---------------------------------------------- |
|  +33.8% | +26.00ms | 91.7% → 100.0% | 77.0ms → 103.0ms | `Composer\Pcre\Preg::match`    | `./composer/vendor/composer/pcre/src/Preg.php` |
| removed |  -7.00ms |    8.3% → 0.0% |      7.0ms → 0ms | `Composer\Pcre\Preg::matchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

| Change |    Delta |      % |              Time | Caller                                                    | Location                                                                   |
| -----: | -------: | -----: | ----------------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +1.8% | +12.00ms | 100.0% | 659.0ms → 671.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |      % |              Time | Caller                                             | Location                                                                |
| -----: | ------: | -----: | ----------------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
|  +8.4% | +9.00ms | 100.0% | 107.0ms → 116.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Autoload\ClassLoader::loadClass` (`./composer/vendor/composer/ClassLoader.php`)

|  Change |   Delta |             % |          Time | Caller                                              | Location                                                                             |
| ------: | ------: | ------------: | ------------: | --------------------------------------------------- | ------------------------------------------------------------------------------------ |
|     new | +2.00ms |  0.0% → 10.5% |   0ms → 2.0ms | `JsonSchema\Constraints\Factory::createInstanceFor` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/Factory.php` |
| +100.0% | +2.00ms | 14.3% → 21.1% | 2.0ms → 4.0ms | `Composer\Factory::createComposer`                  | `./composer/src/Composer/Factory.php`                                                |
| removed | -1.00ms |   7.1% → 0.0% |   1.0ms → 0ms | `(file scope)`                                      | `./composer/vendor/symfony/console/Output/Output.php`                                |
|  -25.0% | -1.00ms | 28.6% → 15.8% | 4.0ms → 3.0ms | `Composer\Console\Application::getDefaultCommands`  | `./composer/src/Composer/Console/Application.php`                                    |
| removed | -1.00ms |   7.1% → 0.0% |   1.0ms → 0ms | `Composer\Command\InstallCommand::configure`        | `./composer/src/Composer/Command/InstallCommand.php`                                 |

##### `JsonSchema\Uri\UriRetriever::loadSchema` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php`)

|  Change |   Delta |      % |          Time | Caller                                  | Location                                                                          |
| ------: | ------: | -----: | ------------: | --------------------------------------- | --------------------------------------------------------------------------------- |
| +125.0% | +5.00ms | 100.0% | 4.0ms → 9.0ms | `JsonSchema\Uri\UriRetriever::retrieve` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |   Delta |      % |              Time | Caller                                    | Location                                       |
| -----: | ------: | -----: | ----------------: | ----------------------------------------- | ---------------------------------------------- |
|  +2.8% | +4.00ms | 100.0% | 143.0ms → 147.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

|  Change |   Delta |      % |          Time | Caller                                                    | Location                                                                   |
| ------: | ------: | -----: | ------------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| +200.0% | +4.00ms | 100.0% | 2.0ms → 6.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|  Change |   Delta |      % |          Time | Caller                                      | Location                                                 |
| ------: | ------: | -----: | ------------: | ------------------------------------------- | -------------------------------------------------------- |
| +133.3% | +4.00ms | 100.0% | 3.0ms → 7.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

| Change |   Delta |      % |            Time | Caller                                   | Location                                        |
| -----: | ------: | -----: | --------------: | ---------------------------------------- | ----------------------------------------------- |
|  +7.7% | +3.00ms | 100.0% | 39.0ms → 42.0ms | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `(file scope)` (`./vendor/composer/autoload_classmap.php`)

| Change |   Delta |      % |           Time | Caller                                               | Location                                                 |
| -----: | ------: | -----: | -------------: | ---------------------------------------------------- | -------------------------------------------------------- |
| +37.5% | +3.00ms | 100.0% | 8.0ms → 11.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::isAbsolutePath` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |              % |          Time | Caller                                             | Location                                                 |
| ------: | ------: | -------------: | ------------: | -------------------------------------------------- | -------------------------------------------------------- |
|     new | +2.00ms |   0.0% → 50.0% |   0ms → 2.0ms | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |
| +100.0% | +1.00ms | 100.0% → 50.0% | 1.0ms → 2.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\StreamContextFactory::getTlsDefaults` (`./composer/src/Composer/Util/StreamContextFactory.php`)

| Change |   Delta |             % |        Time | Caller                                      | Location                                          |
| -----: | ------: | ------------: | ----------: | ------------------------------------------- | ------------------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms | `Composer\Util\HttpDownloader::__construct` | `./composer/src/Composer/Util/HttpDownloader.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|  Change |   Delta |      % |          Time | Caller                                   | Location                                        |
| ------: | ------: | -----: | ------------: | ---------------------------------------- | ----------------------------------------------- |
| +100.0% | +2.00ms | 100.0% | 2.0ms → 4.0ms | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |      % |            Time | Caller                                                   | Location                                                                |
| -----: | ------: | -----: | --------------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| +14.3% | +2.00ms | 100.0% | 14.0ms → 16.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

| Change |   Delta |      % |            Time | Caller                                      | Location                                                 |
| -----: | ------: | -----: | --------------: | ------------------------------------------- | -------------------------------------------------------- |
| +20.0% | +2.00ms | 100.0% | 10.0ms → 12.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |      % |            Time | Caller                                             | Location                                                 |
| -----: | ------: | -----: | --------------: | -------------------------------------------------- | -------------------------------------------------------- |
| +12.5% | +2.00ms | 100.0% | 16.0ms → 18.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

|  Change |   Delta |      % |          Time | Caller                                             | Location                                                                |
| ------: | ------: | -----: | ------------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::getCwd` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |   Delta |             % |        Time | Caller                                                    | Location                                                                   |
| -----: | ------: | ------------: | ----------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Console\Input\ArrayInput::hasParameterOption` (`./composer/vendor/symfony/console/Input/ArrayInput.php`)

| Change |   Delta |            % |        Time | Caller                                               | Location                                            |
| -----: | ------: | -----------: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms | `Composer\Console\Application::doRun`                | `./composer/src/Composer/Console/Application.php`   |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms | `Symfony\Component\Console\Application::configureIO` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Finder\SplFileInfo::getRelativePathname` (`./composer/vendor/symfony/finder/SplFileInfo.php`)

| Change |   Delta |             % |        Time | Caller                                                         | Location                                                           |
| -----: | ------: | ------------: | ----------: | -------------------------------------------------------------- | ------------------------------------------------------------------ |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms | `Symfony\Component\Finder\Iterator\PathFilterIterator::accept` | `./composer/vendor/symfony/finder/Iterator/PathFilterIterator.php` |

##### `Symfony\Component\Console\Application::init` (`./composer/vendor/symfony/console/Application.php`)

| Change |   Delta |             % |        Time | Caller                                        | Location                                            |
| -----: | ------: | ------------: | ----------: | --------------------------------------------- | --------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Symfony\Component\Console\Application::find` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Input\InputOption::__construct` (`./composer/vendor/symfony/console/Input/InputOption.php`)

| Change |   Delta |              % |          Time | Caller                                                             | Location                                                    |
| -----: | ------: | -------------: | ------------: | ------------------------------------------------------------------ | ----------------------------------------------------------- |
| -50.0% | -1.00ms | 100.0% → 33.3% | 2.0ms → 1.0ms | `Symfony\Component\Console\Application::getDefaultInputDefinition` | `./composer/vendor/symfony/console/Application.php`         |
|    new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms | `Composer\Console\Input\InputOption::__construct`                  | `./composer/src/Composer/Console/Input/InputOption.php`     |
|    new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms | `Symfony\Component\Console\Command\HelpCommand::configure`         | `./composer/vendor/symfony/console/Command/HelpCommand.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

| Change |   Delta |             % |        Time | Caller                                    | Location                                        |
| -----: | ------: | ------------: | ----------: | ----------------------------------------- | ----------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Symfony\Component\Process\Process::wait` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

| Change |   Delta |             % |        Time | Caller                     | Location                              |
| -----: | ------: | ------------: | ----------: | -------------------------- | ------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Repository\RepositoryManager::createRepository` (`./composer/src/Composer/Repository/RepositoryManager.php`)

| Change |   Delta |             % |        Time | Caller                                               | Location                                                   |
| -----: | ------: | ------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Repository\RepositoryFactory::createRepos` | `./composer/src/Composer/Repository/RepositoryFactory.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

| Change |   Delta |             % |        Time | Caller                                           | Location                                                |
| -----: | ------: | ------------: | ----------: | ------------------------------------------------ | ------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:349`)

| Change |   Delta |      % |            Time | Caller                         | Location                                    |
| -----: | ------: | -----: | --------------: | ------------------------------ | ------------------------------------------- |
|  +7.1% | +1.00ms | 100.0% | 14.0ms → 15.0ms | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Util\Filesystem::filePutContentsIfModified` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |             % |        Time | Caller                                      | Location                                                 |
| -----: | ------: | ------------: | ----------: | ------------------------------------------- | -------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `(file scope)` (`./composer/src/Composer/Command/InstallCommand.php`)

| Change |   Delta |             % |        Time | Caller        | Location                                         |
| -----: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Package/Archiver/PharArchiver.php`)

| Change |   Delta |             % |        Time | Caller        | Location                                         |
| -----: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Package\Locker::__construct` (`./composer/src/Composer/Package/Locker.php`)

| Change |   Delta |             % |        Time | Caller                             | Location                              |
| -----: | ------: | ------------: | ----------: | ---------------------------------- | ------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Repository\ArrayRepository::getPackages` (`./composer/src/Composer/Repository/ArrayRepository.php`)

| Change |   Delta |             % |        Time | Caller                                          | Location                                           |
| -----: | ------: | ------------: | ----------: | ----------------------------------------------- | -------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Plugin\PluginManager::loadRepository` | `./composer/src/Composer/Plugin/PluginManager.php` |

##### `Composer\Command\DependsCommand::configure` (`./composer/src/Composer/Command/DependsCommand.php`)

| Change |   Delta |             % |        Time | Caller                                                   | Location                                                |
| -----: | ------: | ------------: | ----------: | -------------------------------------------------------- | ------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Symfony\Component\Console\Command\Command::__construct` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Autoload\AutoloadGenerator::getPlatformCheck` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

| Change |   Delta |             % |        Time | Caller                                      | Location                                                 |
| -----: | ------: | ------------: | ----------: | ------------------------------------------- | -------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Caller                                               | Location                                         |
| -----: | --------: | -----: | ---------------: | ---------------------------------------------------- | ------------------------------------------------ |
| -90.4% | -151.00ms | 100.0% | 167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|  Change |    Delta |             % |              Time | Caller                                                | Location                                          |
| ------: | -------: | ------------: | ----------------: | ----------------------------------------------------- | ------------------------------------------------- |
|  -12.2% | -32.00ms | 97.8% → 98.7% | 263.0ms → 231.0ms | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
|  -50.0% |  -1.00ms |   0.7% → 0.4% |     2.0ms → 1.0ms | `Composer\Factory::getHomeDir`                        | `./composer/src/Composer/Factory.php`             |
| removed |  -1.00ms |   0.4% → 0.0% |       1.0ms → 0ms | `Composer\Console\Application::__construct`           | `./composer/src/Composer/Console/Application.php` |
|  -33.3% |  -1.00ms |   1.1% → 0.9% |     3.0ms → 2.0ms | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |    Delta |      % |              Time | Caller                                                  | Location                                                               |
| -----: | -------: | -----: | ----------------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -6.2% | -27.00ms | 100.0% | 435.0ms → 408.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

| Change |    Delta |      % |              Time | Caller                                         | Location                                        |
| -----: | -------: | -----: | ----------------: | ---------------------------------------------- | ----------------------------------------------- |
|  -2.5% | -16.00ms | 100.0% | 645.0ms → 629.0ms | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |    Delta |      % |            Time | Caller                                      | Location                                                 |
| -----: | -------: | -----: | --------------: | ------------------------------------------- | -------------------------------------------------------- |
| -19.5% | -15.00ms | 100.0% | 77.0ms → 62.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |      % |              Time | Caller                      | Location                                       |
| -----: | -------: | -----: | ----------------: | --------------------------- | ---------------------------------------------- |
|  -4.3% | -12.00ms | 100.0% | 276.0ms → 264.0ms | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |      % |              Time | Caller                                  | Location                                       |
| -----: | -------: | -----: | ----------------: | --------------------------------------- | ---------------------------------------------- |
|  -7.8% | -11.00ms | 100.0% | 141.0ms → 130.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |    Delta |             % |              Time | Caller                                                        | Location                                                                   |
| ------: | -------: | ------------: | ----------------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|   -8.6% | -12.00ms | 97.9% → 96.2% | 139.0ms → 127.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| +150.0% |  +3.00ms |   1.4% → 3.8% |     2.0ms → 5.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
| removed |  -1.00ms |   0.7% → 0.0% |       1.0ms → 0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |      % |              Time | Caller                                             | Location                                                                |
| -----: | ------: | -----: | ----------------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
|  -4.0% | -8.00ms | 100.0% | 202.0ms → 194.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time | Caller                                                  | Location                                                               |
| -----: | -------: | ------------: | ----------------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -7.8% | -12.00ms | 81.8% → 78.8% | 153.0ms → 141.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
| +11.8% |  +4.00ms | 18.2% → 21.2% |   34.0ms → 38.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::replace` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |   Delta |      % |          Time | Caller                                               | Location                                                 |
| -----: | ------: | -----: | ------------: | ---------------------------------------------------- | -------------------------------------------------------- |
| -85.7% | -6.00ms | 100.0% | 7.0ms → 1.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |   Delta |      % |            Time | Caller                                                    | Location                                                                   |
| -----: | ------: | -----: | --------------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| -25.0% | -5.00ms | 100.0% | 20.0ms → 15.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::isMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |   Delta |             % |            Time | Caller                                             | Location                                                                |
| -----: | ------: | ------------: | --------------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| -28.6% | -4.00ms | 87.5% → 90.9% | 14.0ms → 10.0ms | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`                           |
| -50.0% | -1.00ms |  12.5% → 9.1% |   2.0ms → 1.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

| Change |   Delta |      % |          Time | Caller                                          | Location                                                  |
| -----: | ------: | -----: | ------------: | ----------------------------------------------- | --------------------------------------------------------- |
| -66.7% | -4.00ms | 100.0% | 6.0ms → 2.0ms | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

| Change |   Delta |      % |           Time | Caller                                                    | Location                                                                   |
| -----: | ------: | -----: | -------------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::replaceCallback` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |   Delta |             % |           Time | Caller                                                        | Location                                                                   |
| -----: | ------: | ------------: | -------------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| -38.5% | -5.00ms | 76.5% → 57.1% | 13.0ms → 8.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |
| +50.0% | +2.00ms | 23.5% → 42.9% |  4.0ms → 6.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |             % |            Time | Caller                                             | Location                                                 |
| ------: | ------: | ------------: | --------------: | -------------------------------------------------- | -------------------------------------------------------- |
|  -16.7% | -3.00ms | 54.5% → 50.0% | 18.0ms → 15.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|   +7.1% | +1.00ms | 42.4% → 50.0% | 14.0ms → 15.0ms | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |
| removed | -1.00ms |   3.0% → 0.0% |     1.0ms → 0ms | `Composer\Util\Filesystem::findShortestPathCode`   | `./composer/src/Composer/Util/Filesystem.php`            |

##### `Seld\Signal\SignalHandler::unregister` (`./composer/vendor/seld/signal-handler/src/SignalHandler.php`)

|  Change |   Delta |             % |        Time | Caller                                      | Location                                           |
| ------: | ------: | ------------: | ----------: | ------------------------------------------- | -------------------------------------------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Pcre\Preg::checkSetOrder` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |   Delta |             % |        Time | Caller                         | Location                                       |
| ------: | ------: | ------------: | ----------: | ------------------------------ | ---------------------------------------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms | `Composer\Pcre\Preg::matchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Console\Application::find` (`./composer/vendor/symfony/console/Application.php`)

|  Change |   Delta |             % |        Time | Caller                                | Location                                          |
| ------: | ------: | ------------: | ----------: | ------------------------------------- | ------------------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |      % |          Time | Caller                                             | Location                                                                |
| -----: | ------: | -----: | ------------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| -40.0% | -2.00ms | 100.0% | 5.0ms → 3.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Finder\Finder::normalizeDir` (`./composer/vendor/symfony/finder/Finder.php`)

|  Change |   Delta |             % |        Time | Caller                                | Location                                      |
| ------: | ------: | ------------: | ----------: | ------------------------------------- | --------------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms | `Symfony\Component\Finder\Finder::in` | `./composer/vendor/symfony/finder/Finder.php` |

##### `(file scope)` (`./vendor/composer/autoload_namespaces.php`)

| Change |   Delta |      % |          Time | Caller                                               | Location                                                 |
| -----: | ------: | -----: | ------------: | ---------------------------------------------------- | -------------------------------------------------------- |
| -66.7% | -2.00ms | 100.0% | 3.0ms → 1.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Json\JsonFile::validateSchema` (`./composer/src/Composer/Json/JsonFile.php`)

|  Change |   Delta |             % |        Time | Caller                             | Location                              |
| ------: | ------: | ------------: | ----------: | ---------------------------------- | ------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Util\Http\CurlDownloader::__construct` (`./composer/src/Composer/Util/Http/CurlDownloader.php`)

| Change |   Delta |      % |          Time | Caller                                      | Location                                          |
| -----: | ------: | -----: | ------------: | ------------------------------------------- | ------------------------------------------------- |
| -66.7% | -2.00ms | 100.0% | 3.0ms → 1.0ms | `Composer\Util\HttpDownloader::__construct` | `./composer/src/Composer/Util/HttpDownloader.php` |

##### `(file scope)` (`./composer/src/Composer/IO/BaseIO.php`)

|  Change |   Delta |             % |        Time | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

|  Change |   Delta |             % |        Time | Caller                                       | Location                                            |
| ------: | ------: | ------------: | ----------: | -------------------------------------------- | --------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `(file scope)` (`./composer/src/Composer/Command/InitCommand.php`)

|  Change |   Delta |             % |        Time | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Command/SuggestsCommand.php`)

|  Change |   Delta |             % |        Time | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\IO\ConsoleIO::isVerbose` (`./composer/src/Composer/IO/ConsoleIO.php`)

|  Change |   Delta |             % |        Time | Caller                               | Location                                        |
| ------: | ------: | ------------: | ----------: | ------------------------------------ | ----------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `Composer\Util\ErrorHandler::handle` | `./composer/src/Composer/Util/ErrorHandler.php` |

##### `Composer\Util\ErrorHandler::handle` (`./composer/src/Composer/Util/ErrorHandler.php`)

|  Change |   Delta |             % |        Time | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\Silencer::suppress` (`./composer/src/Composer/Util/Silencer.php`)

|  Change |   Delta |             % |        Time | Caller                         | Location                                    |
| ------: | ------: | ------------: | ----------: | ------------------------------ | ------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Package\Loader\ValidatingArrayLoader::hasPackageNamingError` (`./composer/src/Composer/Package/Loader/ValidatingArrayLoader.php`)

|  Change |   Delta |             % |        Time | Caller                                            | Location                                                       |
| ------: | ------: | ------------: | ----------: | ------------------------------------------------- | -------------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|  Change |   Delta |             % |        Time | Caller                                     | Location                                           |
| ------: | ------: | ------------: | ----------: | ------------------------------------------ | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `(file scope)` (`./composer/src/Composer/Repository/FilesystemRepository.php`)

|  Change |   Delta |             % |        Time | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Installer/LibraryInstaller.php`)

|  Change |   Delta |             % |        Time | Caller        | Location                                         |
| ------: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\Filesystem::ensureDirectoryExists` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |             % |        Time | Caller                                      | Location                                                 |
| ------: | ------: | ------------: | ----------: | ------------------------------------------- | -------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::safeCopy` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |             % |        Time | Caller                                      | Location                                                 |
| ------: | ------: | ------------: | ----------: | ------------------------------------------- | -------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Git::cleanEnv` (`./composer/src/Composer/Util/Git.php`)

|  Change |   Delta |             % |        Time | Caller                                                     | Location                                                     |
| ------: | ------: | ------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Json\JsonFile::read` (`./composer/src/Composer/Json/JsonFile.php`)

|  Change |   Delta |             % |        Time | Caller                             | Location                              |
| ------: | ------: | ------------: | ----------: | ---------------------------------- | ------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time | Function                                                                        | Location                                                                          |
| ------: | -------: | ------------: | ----------------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
|   +7.0% | +35.00ms | 12.1% → 13.6% | 502.0ms → 537.0ms | `Composer\Pcre\Preg::match`                                                     | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +3.1% | +31.00ms | 23.8% → 25.9% |   989.0ms → 1.02s | `Composer\ClassMapGenerator\PhpFileCleaner::match`                              | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +51.9% | +28.00ms |   1.3% → 2.1% |   54.0ms → 82.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct`     | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|   +3.5% | +27.00ms | 18.5% → 20.2% | 769.0ms → 796.0ms | `Composer\Pcre\Preg::matchStrictGroups`                                         | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|  +49.1% | +26.00ms |   1.3% → 2.0% |   53.0ms → 79.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren`     | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +43.6% | +24.00ms |   1.3% → 2.0% |   55.0ms → 79.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`    |
|  +22.6% | +19.00ms |   2.0% → 2.6% |  84.0ms → 103.0ms | `Composer\Pcre\Preg::checkOffsetCapture`                                        | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +1.9% | +17.00ms | 21.9% → 23.5% | 911.0ms → 928.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +7.1% |  +8.00ms |   2.7% → 3.0% | 112.0ms → 120.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`                              | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                          |
|  +12.1% |  +8.00ms |   1.6% → 1.9% |   66.0ms → 74.0ms | `Composer\Util\Filesystem::findShortestPath`                                    | `./composer/src/Composer/Util/Filesystem.php`                                     |
| +150.0% |  +6.00ms |   0.1% → 0.3% |    4.0ms → 10.0ms | `JsonSchema\Uri\UriRetriever::loadSchema`                                       | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
|  +45.5% |  +5.00ms |   0.3% → 0.4% |   11.0ms → 16.0ms | `Symfony\Component\Console\Application::init`                                   | `./composer/vendor/symfony/console/Application.php`                               |
|  +36.4% |  +4.00ms |   0.3% → 0.4% |   11.0ms → 15.0ms | `Composer\Console\Application::getDefaultCommands`                              | `./composer/src/Composer/Console/Application.php`                                 |
|  +57.1% |  +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +60.0% |  +3.00ms |   0.1% → 0.2% |     5.0ms → 8.0ms | `Symfony\Component\Console\Command\Command::__construct`                        | `./composer/vendor/symfony/console/Command/Command.php`                           |
|  +23.1% |  +3.00ms |   0.3% → 0.4% |   13.0ms → 16.0ms | `Symfony\Component\Console\Application::find`                                   | `./composer/vendor/symfony/console/Application.php`                               |
|   +6.7% |  +3.00ms |   1.1% → 1.2% |   45.0ms → 48.0ms | `Symfony\Component\Process\Process::start`                                      | `./composer/vendor/symfony/process/Process.php`                                   |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms | `(file scope)`                                                                  | `./vendor/composer/autoload_classmap.php`                                         |
|  +42.9% |  +3.00ms |   0.2% → 0.3% |    7.0ms → 10.0ms | `JsonSchema\Uri\UriRetriever::retrieve`                                         | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms | `Composer\Util\Filesystem::isAbsolutePath`                                      | `./composer/src/Composer/Util/Filesystem.php`                                     |

##### Third-party

|  Change |    Delta |             % |              Time | Function                                                                        | Location                                                                          |
| ------: | -------: | ------------: | ----------------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
|   +7.0% | +35.00ms | 12.1% → 13.6% | 502.0ms → 537.0ms | `Composer\Pcre\Preg::match`                                                     | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +3.1% | +31.00ms | 23.8% → 25.9% |   989.0ms → 1.02s | `Composer\ClassMapGenerator\PhpFileCleaner::match`                              | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +51.9% | +28.00ms |   1.3% → 2.1% |   54.0ms → 82.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct`     | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|   +3.5% | +27.00ms | 18.5% → 20.2% | 769.0ms → 796.0ms | `Composer\Pcre\Preg::matchStrictGroups`                                         | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|  +49.1% | +26.00ms |   1.3% → 2.0% |   53.0ms → 79.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren`     | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +43.6% | +24.00ms |   1.3% → 2.0% |   55.0ms → 79.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`    |
|  +22.6% | +19.00ms |   2.0% → 2.6% |  84.0ms → 103.0ms | `Composer\Pcre\Preg::checkOffsetCapture`                                        | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
|   +1.9% | +17.00ms | 21.9% → 23.5% | 911.0ms → 928.0ms | `Composer\Pcre\Preg::isMatchStrictGroups`                                       | `./composer/vendor/composer/pcre/src/Preg.php`                                    |
| +150.0% |  +6.00ms |   0.1% → 0.3% |    4.0ms → 10.0ms | `JsonSchema\Uri\UriRetriever::loadSchema`                                       | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
|  +45.5% |  +5.00ms |   0.3% → 0.4% |   11.0ms → 16.0ms | `Symfony\Component\Console\Application::init`                                   | `./composer/vendor/symfony/console/Application.php`                               |
|  +57.1% |  +4.00ms |   0.2% → 0.3% |    7.0ms → 11.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`        |
|  +60.0% |  +3.00ms |   0.1% → 0.2% |     5.0ms → 8.0ms | `Symfony\Component\Console\Command\Command::__construct`                        | `./composer/vendor/symfony/console/Command/Command.php`                           |
|  +23.1% |  +3.00ms |   0.3% → 0.4% |   13.0ms → 16.0ms | `Symfony\Component\Console\Application::find`                                   | `./composer/vendor/symfony/console/Application.php`                               |
|   +6.7% |  +3.00ms |   1.1% → 1.2% |   45.0ms → 48.0ms | `Symfony\Component\Process\Process::start`                                      | `./composer/vendor/symfony/process/Process.php`                                   |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms | `(file scope)`                                                                  | `./vendor/composer/autoload_classmap.php`                                         |
|  +42.9% |  +3.00ms |   0.2% → 0.3% |    7.0ms → 10.0ms | `JsonSchema\Uri\UriRetriever::retrieve`                                         | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
|     new |  +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms | `Seld\Signal\SignalHandler::create`                                             | `./composer/vendor/seld/signal-handler/src/SignalHandler.php`                     |
|  +66.7% |  +2.00ms |          0.1% |     3.0ms → 5.0ms | `Symfony\Component\Console\Input\InputOption::__construct`                      | `./composer/vendor/symfony/console/Input/InputOption.php`                         |
|  +14.3% |  +2.00ms |   0.3% → 0.4% |   14.0ms → 16.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline`                      | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |
|  +10.5% |  +2.00ms |          0.5% |   19.0ms → 21.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc`                        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`           |

##### Ours

|  Change |   Delta |            % |              Time | Function                                                  | Location                                                    |
| ------: | ------: | -----------: | ----------------: | --------------------------------------------------------- | ----------------------------------------------------------- |
|   +7.1% | +8.00ms |  2.7% → 3.0% | 112.0ms → 120.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php`    |
|  +12.1% | +8.00ms |  1.6% → 1.9% |   66.0ms → 74.0ms | `Composer\Util\Filesystem::findShortestPath`              | `./composer/src/Composer/Util/Filesystem.php`               |
|  +36.4% | +4.00ms |  0.3% → 0.4% |   11.0ms → 15.0ms | `Composer\Console\Application::getDefaultCommands`        | `./composer/src/Composer/Console/Application.php`           |
| +300.0% | +3.00ms | <0.1% → 0.1% |     1.0ms → 4.0ms | `Composer\Util\Filesystem::isAbsolutePath`                | `./composer/src/Composer/Util/Filesystem.php`               |
| +200.0% | +2.00ms | <0.1% → 0.1% |     1.0ms → 3.0ms | `Composer\Util\StreamContextFactory::getTlsDefaults`      | `./composer/src/Composer/Util/StreamContextFactory.php`     |
| +200.0% | +2.00ms | <0.1% → 0.1% |     1.0ms → 3.0ms | `Composer\Console\Input\InputOption::__construct`         | `./composer/src/Composer/Console/Input/InputOption.php`     |
|  +16.7% | +1.00ms |  0.1% → 0.2% |     6.0ms → 7.0ms | `Composer\Util\Git::getVersion`                           | `./composer/src/Composer/Util/Git.php`                      |
|  +16.7% | +1.00ms |  0.1% → 0.2% |     6.0ms → 7.0ms | `Composer\Util\Git::getNoShowSignatureFlag`               | `./composer/src/Composer/Util/Git.php`                      |
| +100.0% | +1.00ms | <0.1% → 0.1% |     1.0ms → 2.0ms | `(file scope)`                                            | `./composer/src/Composer/Repository/ComposerRepository.php` |
|  +50.0% | +1.00ms | <0.1% → 0.1% |     2.0ms → 3.0ms | `Composer\Repository\RepositoryManager::createRepository` | `./composer/src/Composer/Repository/RepositoryManager.php`  |
|  +50.0% | +1.00ms | <0.1% → 0.1% |     2.0ms → 3.0ms | `Composer\Repository\RepositoryFactory::createRepos`      | `./composer/src/Composer/Repository/RepositoryFactory.php`  |
|  +50.0% | +1.00ms | <0.1% → 0.1% |     2.0ms → 3.0ms | `Composer\Repository\RepositoryFactory::defaultRepos`     | `./composer/src/Composer/Repository/RepositoryFactory.php`  |
|   +7.1% | +1.00ms |  0.3% → 0.4% |   14.0ms → 15.0ms | `(anonymous)`                                             | `./composer/src/Composer/Console/Application.php:353 → 349` |
| +100.0% | +1.00ms | <0.1% → 0.1% |     1.0ms → 2.0ms | `Composer\Plugin\PluginManager::loadRepository`           | `./composer/src/Composer/Plugin/PluginManager.php`          |
| +100.0% | +1.00ms | <0.1% → 0.1% |     1.0ms → 2.0ms | `Composer\Plugin\PluginManager::loadInstalledPlugins`     | `./composer/src/Composer/Plugin/PluginManager.php`          |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms | `(file scope)`                                            | `./composer/src/Composer/Command/AboutCommand.php`          |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms | `(file scope)`                                            | `./composer/src/Composer/Command/DependsCommand.php`        |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms | `(file scope)`                                            | `./composer/src/Composer/Command/InstallCommand.php`        |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms | `Composer\IO\BaseIO::loadConfiguration`                   | `./composer/src/Composer/IO/BaseIO.php`                     |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms | `Composer\Factory::createInstallationManager`             | `./composer/src/Composer/Factory.php`                       |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time | Function                                                      | Location                                                                   |
| -----: | --------: | ------------: | ----------------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -5.3% | -220.00ms |        100.0% |     4.16s → 3.94s | `(file scope)`                                                | `./profile.php`                                                            |
|  -5.2% | -217.00ms | 99.8% → 99.9% |     4.16s → 3.94s | `Symfony\Component\Console\Application::run`                  | `./composer/vendor/symfony/console/Application.php`                        |
|  -5.2% | -217.00ms | 99.8% → 99.9% |     4.16s → 3.94s | `Composer\Console\Application::run`                           | `./composer/src/Composer/Console/Application.php`                          |
| -94.4% | -152.00ms |   3.9% → 0.2% |   161.0ms → 9.0ms | `Symfony\Component\Console\Terminal::getHeight`               | `./composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::readFromProcess`         | `./composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::getSttyColumns`          | `./composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::initDimensions`          | `./composer/vendor/symfony/console/Terminal.php`                           |
|  -1.7% |  -67.00ms | 95.8% → 99.5% |     3.99s → 3.92s | `Composer\Console\Application::doRun`                         | `./composer/src/Composer/Console/Application.php`                          |
| -13.2% |  -38.00ms |   6.9% → 6.3% | 287.0ms → 249.0ms | `Composer\Util\Silencer::call`                                | `./composer/src/Composer/Util/Silencer.php`                                |
|  -1.0% |  -38.00ms | 88.7% → 92.7% |     3.69s → 3.66s | `Symfony\Component\Console\Application::doRun`                | `./composer/vendor/symfony/console/Application.php`                        |
|  -1.0% |  -38.00ms | 88.7% → 92.6% |     3.69s → 3.65s | `Symfony\Component\Console\Command\Command::run`              | `./composer/vendor/symfony/console/Command/Command.php`                    |
|  -1.0% |  -38.00ms | 88.7% → 92.6% |     3.69s → 3.65s | `Symfony\Component\Console\Application::doRunCommand`         | `./composer/vendor/symfony/console/Application.php`                        |
|  -0.8% |  -24.00ms | 70.7% → 74.0% |     2.94s → 2.92s | `Composer\Autoload\AutoloadGenerator::dump`                   | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|  -0.7% |  -22.00ms | 70.7% → 74.1% |     2.94s → 2.92s | `Composer\Command\DumpAutoloadCommand::execute`               | `./composer/src/Composer/Command/DumpAutoloadCommand.php`                  |
|  -0.8% |  -19.00ms | 60.5% → 63.4% |     2.52s → 2.50s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`       | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  -0.6% |  -18.00ms | 66.9% → 70.1% |     2.78s → 2.77s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`     | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  -9.1% |  -18.00ms |   4.7% → 4.5% | 197.0ms → 179.0ms | `Composer\Pcre\Preg::matchAll`                                | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms | `Composer\Factory::createComposer`                            | `./composer/src/Composer/Factory.php`                                      |
|  -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms | `Composer\Factory::create`                                    | `./composer/src/Composer/Factory.php`                                      |

##### Third-party

| Change |     Delta |             % |              Time | Function                                                      | Location                                                                   |
| -----: | --------: | ------------: | ----------------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -5.2% | -217.00ms | 99.8% → 99.9% |     4.16s → 3.94s | `Symfony\Component\Console\Application::run`                  | `./composer/vendor/symfony/console/Application.php`                        |
| -94.4% | -152.00ms |   3.9% → 0.2% |   161.0ms → 9.0ms | `Symfony\Component\Console\Terminal::getHeight`               | `./composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::readFromProcess`         | `./composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::getSttyColumns`          | `./composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php`                           |
| -90.4% | -151.00ms |   4.0% → 0.4% |  167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::initDimensions`          | `./composer/vendor/symfony/console/Terminal.php`                           |
|  -1.0% |  -38.00ms | 88.7% → 92.7% |     3.69s → 3.66s | `Symfony\Component\Console\Application::doRun`                | `./composer/vendor/symfony/console/Application.php`                        |
|  -1.0% |  -38.00ms | 88.7% → 92.6% |     3.69s → 3.65s | `Symfony\Component\Console\Command\Command::run`              | `./composer/vendor/symfony/console/Command/Command.php`                    |
|  -1.0% |  -38.00ms | 88.7% → 92.6% |     3.69s → 3.65s | `Symfony\Component\Console\Application::doRunCommand`         | `./composer/vendor/symfony/console/Application.php`                        |
|  -0.8% |  -19.00ms | 60.5% → 63.4% |     2.52s → 2.50s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`       | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`     |
|  -0.6% |  -18.00ms | 66.9% → 70.1% |     2.78s → 2.77s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`     | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|  -9.1% |  -18.00ms |   4.7% → 4.5% | 197.0ms → 179.0ms | `Composer\Pcre\Preg::matchAll`                                | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  -2.2% |  -14.00ms | 15.5% → 16.0% | 645.0ms → 631.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite`     | `./composer/vendor/symfony/process/Pipes/UnixPipes.php`                    |
|  -2.2% |  -14.00ms | 15.5% → 16.0% | 646.0ms → 632.0ms | `Symfony\Component\Process\Process::readPipes`                | `./composer/vendor/symfony/process/Process.php`                            |
|  -8.9% |  -14.00ms |   3.8% → 3.7% | 158.0ms → 144.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`                    | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  -0.7% |  -12.00ms | 39.9% → 41.8% |     1.66s → 1.65s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
|  -4.3% |  -12.00ms |   6.6% → 6.7% | 276.0ms → 264.0ms | `Composer\Pcre\Preg::pregMatch`                               | `./composer/vendor/composer/pcre/src/Preg.php`                             |
|  -1.7% |  -11.00ms | 15.6% → 16.2% | 650.0ms → 639.0ms | `Symfony\Component\Process\Process::wait`                     | `./composer/vendor/symfony/process/Process.php`                            |
|  -7.8% |  -11.00ms |   3.4% → 3.3% | 141.0ms → 130.0ms | `Composer\Pcre\Preg::enforceNonNullMatches`                   | `./composer/vendor/composer/pcre/src/Preg.php`                             |
| -30.6% |  -11.00ms |   0.9% → 0.6% |   36.0ms → 25.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### Ours

|  Change |     Delta |             % |              Time | Function                                                      | Location                                                       |
| ------: | --------: | ------------: | ----------------: | ------------------------------------------------------------- | -------------------------------------------------------------- |
|   -5.3% | -220.00ms |        100.0% |     4.16s → 3.94s | `(file scope)`                                                | `./profile.php`                                                |
|   -5.2% | -217.00ms | 99.8% → 99.9% |     4.16s → 3.94s | `Composer\Console\Application::run`                           | `./composer/src/Composer/Console/Application.php`              |
|   -1.7% |  -67.00ms | 95.8% → 99.5% |     3.99s → 3.92s | `Composer\Console\Application::doRun`                         | `./composer/src/Composer/Console/Application.php`              |
|  -13.2% |  -38.00ms |   6.9% → 6.3% | 287.0ms → 249.0ms | `Composer\Util\Silencer::call`                                | `./composer/src/Composer/Util/Silencer.php`                    |
|   -0.8% |  -24.00ms | 70.7% → 74.0% |     2.94s → 2.92s | `Composer\Autoload\AutoloadGenerator::dump`                   | `./composer/src/Composer/Autoload/AutoloadGenerator.php`       |
|   -0.7% |  -22.00ms | 70.7% → 74.1% |     2.94s → 2.92s | `Composer\Command\DumpAutoloadCommand::execute`               | `./composer/src/Composer/Command/DumpAutoloadCommand.php`      |
|   -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms | `Composer\Factory::createComposer`                            | `./composer/src/Composer/Factory.php`                          |
|   -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms | `Composer\Factory::create`                                    | `./composer/src/Composer/Factory.php`                          |
|   -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms | `Composer\Console\Application::getComposer`                   | `./composer/src/Composer/Console/Application.php`              |
|   -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms | `Composer\Command\BaseCommand::tryComposer`                   | `./composer/src/Composer/Command/BaseCommand.php`              |
|   -2.1% |  -16.00ms | 18.0% → 18.6% | 748.0ms → 732.0ms | `Composer\Command\BaseCommand::initialize`                    | `./composer/src/Composer/Command/BaseCommand.php`              |
|   -1.8% |  -13.00ms | 17.1% → 17.7% | 710.0ms → 697.0ms | `Composer\Package\Loader\RootPackageLoader::load`             | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|   -1.8% |  -13.00ms | 16.9% → 17.5% | 705.0ms → 692.0ms | `Composer\Package\Version\VersionGuesser::guessVersion`       | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   -1.6% |  -11.00ms | 16.8% → 17.5% | 701.0ms → 690.0ms | `Composer\Util\ProcessExecutor::runProcess`                   | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|   -1.6% |  -11.00ms | 16.9% → 17.5% | 703.0ms → 692.0ms | `Composer\Util\ProcessExecutor::doExecute`                    | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|   -1.6% |  -11.00ms | 16.9% → 17.5% | 703.0ms → 692.0ms | `Composer\Util\ProcessExecutor::execute`                      | `./composer/src/Composer/Util/ProcessExecutor.php`             |
|   -5.6% |   -7.00ms |          3.0% | 125.0ms → 118.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php`   |
|   -7.9% |   -5.00ms |          1.5% |   63.0ms → 58.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                  |
| removed |   -4.00ms |   0.1% → 0.0% |       4.0ms → 0ms | `Composer\Util\ErrorHandler::handle`                          | `./composer/src/Composer/Util/ErrorHandler.php`                |
| removed |   -4.00ms |   0.1% → 0.0% |       4.0ms → 0ms | `Composer\Util\Silencer::suppress`                            | `./composer/src/Composer/Util/Silencer.php`                    |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |     % |              Time | Caller                                  | Location                                       |
| -----: | -------: | ----: | ----------------: | --------------------------------------- | ---------------------------------------------- |
|  +7.0% | +34.00ms | 96.6% | 485.0ms → 519.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  +5.9% |  +1.00ms |  3.4% |   17.0ms → 18.0ms | `Composer\Pcre\Preg::isMatch`           | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |    Delta |              % |            Time | Caller                                                   | Location                                                                |
| -----: | -------: | -------------: | --------------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
|  +2.9% | +29.00ms | 100.0% → 99.8% | 989.0ms → 1.02s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|    new |  +2.00ms |    0.0% → 0.2% |     0ms → 2.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

| Change |    Delta |             % |            Time | Caller                                                                      | Location                                                                   |
| -----: | -------: | ------------: | --------------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +51.0% | +26.00ms | 94.4% → 93.9% | 51.0ms → 77.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |
| +66.7% |  +2.00ms |   5.6% → 6.1% |   3.0ms → 5.0ms | `Symfony\Component\Finder\Finder::searchInDirectory`                        | `./composer/vendor/symfony/finder/Finder.php`                              |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |      % |              Time | Caller                                    | Location                                       |
| -----: | -------: | -----: | ----------------: | ----------------------------------------- | ---------------------------------------------- |
|  +3.5% | +27.00ms | 100.0% | 769.0ms → 796.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

| Change |    Delta |      % |            Time | Caller                                                                          | Location                                                                       |
| -----: | -------: | -----: | --------------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| +49.1% | +26.00ms | 100.0% | 53.0ms → 79.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`)

| Change |    Delta |      % |            Time | Caller                                                    | Location                                                                   |
| -----: | -------: | -----: | --------------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| +43.6% | +24.00ms | 100.0% | 55.0ms → 79.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |    Delta |              % |             Time | Caller                         | Location                                       |
| ------: | -------: | -------------: | ---------------: | ------------------------------ | ---------------------------------------------- |
|  +33.8% | +26.00ms | 91.7% → 100.0% | 77.0ms → 103.0ms | `Composer\Pcre\Preg::match`    | `./composer/vendor/composer/pcre/src/Preg.php` |
| removed |  -7.00ms |    8.3% → 0.0% |      7.0ms → 0ms | `Composer\Pcre\Preg::matchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time | Caller                                                        | Location                                                                   |
| -----: | -------: | ------------: | ----------------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +2.5% | +22.00ms | 96.8% → 97.4% | 882.0ms → 904.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`            | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`    |
| -66.7% |  -8.00ms |   1.3% → 0.4% |    12.0ms → 4.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
| +17.6% |  +3.00ms |   1.9% → 2.2% |   17.0ms → 20.0ms | `Composer\Util\Filesystem::normalizePath`                     | `./composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

| Change |   Delta |      % |              Time | Caller                                      | Location                                                 |
| -----: | ------: | -----: | ----------------: | ------------------------------------------- | -------------------------------------------------------- |
|  +7.1% | +8.00ms | 100.0% | 112.0ms → 120.0ms | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |      % |            Time | Caller                                             | Location                                                 |
| -----: | ------: | -----: | --------------: | -------------------------------------------------- | -------------------------------------------------------- |
| +12.1% | +8.00ms | 100.0% | 66.0ms → 74.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `JsonSchema\Uri\UriRetriever::loadSchema` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php`)

|  Change |   Delta |      % |           Time | Caller                                  | Location                                                                          |
| ------: | ------: | -----: | -------------: | --------------------------------------- | --------------------------------------------------------------------------------- |
| +150.0% | +6.00ms | 100.0% | 4.0ms → 10.0ms | `JsonSchema\Uri\UriRetriever::retrieve` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |

##### `Symfony\Component\Console\Application::init` (`./composer/vendor/symfony/console/Application.php`)

| Change |   Delta |      % |            Time | Caller                                        | Location                                            |
| -----: | ------: | -----: | --------------: | --------------------------------------------- | --------------------------------------------------- |
| +45.5% | +5.00ms | 100.0% | 11.0ms → 16.0ms | `Symfony\Component\Console\Application::find` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::getDefaultCommands` (`./composer/src/Composer/Console/Application.php`)

| Change |   Delta |      % |            Time | Caller                                        | Location                                            |
| -----: | ------: | -----: | --------------: | --------------------------------------------- | --------------------------------------------------- |
| +36.4% | +4.00ms | 100.0% | 11.0ms → 15.0ms | `Symfony\Component\Console\Application::init` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

| Change |   Delta |      % |           Time | Caller                                                    | Location                                                                   |
| -----: | ------: | -----: | -------------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| +57.1% | +4.00ms | 100.0% | 7.0ms → 11.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Symfony\Component\Console\Command\Command::__construct` (`./composer/vendor/symfony/console/Command/Command.php`)

| Change |   Delta |             % |          Time | Caller                                             | Location                                          |
| -----: | ------: | ------------: | ------------: | -------------------------------------------------- | ------------------------------------------------- |
| +75.0% | +3.00ms | 80.0% → 87.5% | 4.0ms → 7.0ms | `Composer\Console\Application::getDefaultCommands` | `./composer/src/Composer/Console/Application.php` |

##### `Symfony\Component\Console\Application::find` (`./composer/vendor/symfony/console/Application.php`)

| Change |   Delta |      % |            Time | Caller                                | Location                                          |
| -----: | ------: | -----: | --------------: | ------------------------------------- | ------------------------------------------------- |
| +23.1% | +3.00ms | 100.0% | 13.0ms → 16.0ms | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

| Change |   Delta |      % |            Time | Caller                                   | Location                                        |
| -----: | ------: | -----: | --------------: | ---------------------------------------- | ----------------------------------------------- |
|  +6.7% | +3.00ms | 100.0% | 45.0ms → 48.0ms | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `(file scope)` (`./vendor/composer/autoload_classmap.php`)

| Change |   Delta |      % |           Time | Caller                                               | Location                                                 |
| -----: | ------: | -----: | -------------: | ---------------------------------------------------- | -------------------------------------------------------- |
| +37.5% | +3.00ms | 100.0% | 8.0ms → 11.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `JsonSchema\Uri\UriRetriever::retrieve` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php`)

| Change |   Delta |      % |           Time | Caller                                | Location                                                                       |
| -----: | ------: | -----: | -------------: | ------------------------------------- | ------------------------------------------------------------------------------ |
| +42.9% | +3.00ms | 100.0% | 7.0ms → 10.0ms | `JsonSchema\SchemaStorage::addSchema` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php` |

##### `Composer\Util\Filesystem::isAbsolutePath` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |              % |          Time | Caller                                             | Location                                                 |
| ------: | ------: | -------------: | ------------: | -------------------------------------------------- | -------------------------------------------------------- |
|     new | +2.00ms |   0.0% → 50.0% |   0ms → 2.0ms | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |
| +100.0% | +1.00ms | 100.0% → 50.0% | 1.0ms → 2.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Seld\Signal\SignalHandler::create` (`./composer/vendor/seld/signal-handler/src/SignalHandler.php`)

| Change |   Delta |            % |        Time | Caller                                      | Location                                           |
| -----: | ------: | -----------: | ----------: | ------------------------------------------- | -------------------------------------------------- |
|    new | +2.00ms | 0.0% → 66.7% | 0ms → 2.0ms | `Composer\Util\ProcessExecutor::runProcess` | `./composer/src/Composer/Util/ProcessExecutor.php` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms | `Composer\Console\Application::__construct` | `./composer/src/Composer/Console/Application.php`  |

##### `Symfony\Component\Console\Input\InputOption::__construct` (`./composer/vendor/symfony/console/Input/InputOption.php`)

|  Change |   Delta |             % |          Time | Caller                                                             | Location                                                    |
| ------: | ------: | ------------: | ------------: | ------------------------------------------------------------------ | ----------------------------------------------------------- |
| +200.0% | +2.00ms | 33.3% → 60.0% | 1.0ms → 3.0ms | `Composer\Console\Input\InputOption::__construct`                  | `./composer/src/Composer/Console/Input/InputOption.php`     |
|  -50.0% | -1.00ms | 66.7% → 20.0% | 2.0ms → 1.0ms | `Symfony\Component\Console\Application::getDefaultInputDefinition` | `./composer/vendor/symfony/console/Application.php`         |
|     new | +1.00ms |  0.0% → 20.0% |   0ms → 1.0ms | `Symfony\Component\Console\Command\HelpCommand::configure`         | `./composer/vendor/symfony/console/Command/HelpCommand.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |      % |            Time | Caller                                                   | Location                                                                |
| -----: | ------: | -----: | --------------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| +14.3% | +2.00ms | 100.0% | 14.0ms → 16.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |      % |            Time | Caller                                             | Location                                                                |
| -----: | ------: | -----: | --------------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| +10.5% | +2.00ms | 100.0% | 19.0ms → 21.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Util\StreamContextFactory::getTlsDefaults` (`./composer/src/Composer/Util/StreamContextFactory.php`)

|  Change |   Delta |      % |          Time | Caller                                      | Location                                          |
| ------: | ------: | -----: | ------------: | ------------------------------------------- | ------------------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms | `Composer\Util\HttpDownloader::__construct` | `./composer/src/Composer/Util/HttpDownloader.php` |

##### `Composer\Console\Input\InputOption::__construct` (`./composer/src/Composer/Console/Input/InputOption.php`)

| Change |   Delta |            % |        Time | Caller                                       | Location                                             |
| -----: | ------: | -----------: | ----------: | -------------------------------------------- | ---------------------------------------------------- |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms | `Composer\Command\InitCommand::configure`    | `./composer/src/Composer/Command/InitCommand.php`    |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms | `Composer\Command\RequireCommand::configure` | `./composer/src/Composer/Command/RequireCommand.php` |

##### `Composer\Util\Git::getVersion` (`./composer/src/Composer/Util/Git.php`)

| Change |   Delta |      % |          Time | Caller                                      | Location                               |
| -----: | ------: | -----: | ------------: | ------------------------------------------- | -------------------------------------- |
| +16.7% | +1.00ms | 100.0% | 6.0ms → 7.0ms | `Composer\Util\Git::getNoShowSignatureFlag` | `./composer/src/Composer/Util/Git.php` |

##### `Composer\Util\Git::getNoShowSignatureFlag` (`./composer/src/Composer/Util/Git.php`)

| Change |   Delta |      % |          Time | Caller                                                     | Location                                                     |
| -----: | ------: | -----: | ------------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| +16.7% | +1.00ms | 100.0% | 6.0ms → 7.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `(file scope)` (`./composer/src/Composer/Repository/ComposerRepository.php`)

|  Change |   Delta |      % |          Time | Caller        | Location                                         |
| ------: | ------: | -----: | ------------: | ------------- | ------------------------------------------------ |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Repository\RepositoryManager::createRepository` (`./composer/src/Composer/Repository/RepositoryManager.php`)

| Change |   Delta |      % |          Time | Caller                                               | Location                                                   |
| -----: | ------: | -----: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms | `Composer\Repository\RepositoryFactory::createRepos` | `./composer/src/Composer/Repository/RepositoryFactory.php` |

##### `Composer\Repository\RepositoryFactory::createRepos` (`./composer/src/Composer/Repository/RepositoryFactory.php`)

| Change |   Delta |      % |          Time | Caller                                                | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------------------------------------------------- | ---------------------------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms | `Composer\Repository\RepositoryFactory::defaultRepos` | `./composer/src/Composer/Repository/RepositoryFactory.php` |

##### `Composer\Repository\RepositoryFactory::defaultRepos` (`./composer/src/Composer/Repository/RepositoryFactory.php`)

| Change |   Delta |      % |          Time | Caller                                            | Location                                                       |
| -----: | ------: | -----: | ------------: | ------------------------------------------------- | -------------------------------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |

##### `(anonymous)` (`./composer/src/Composer/Console/Application.php:349`)

| Change |   Delta |      % |            Time | Caller                         | Location                                    |
| -----: | ------: | -----: | --------------: | ------------------------------ | ------------------------------------------- |
|  +7.1% | +1.00ms | 100.0% | 14.0ms → 15.0ms | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

##### `Composer\Plugin\PluginManager::loadRepository` (`./composer/src/Composer/Plugin/PluginManager.php`)

|  Change |   Delta |      % |          Time | Caller                                                | Location                                           |
| ------: | ------: | -----: | ------------: | ----------------------------------------------------- | -------------------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms | `Composer\Plugin\PluginManager::loadInstalledPlugins` | `./composer/src/Composer/Plugin/PluginManager.php` |

##### `Composer\Plugin\PluginManager::loadInstalledPlugins` (`./composer/src/Composer/Plugin/PluginManager.php`)

|  Change |   Delta |      % |          Time | Caller                             | Location                              |
| ------: | ------: | -----: | ------------: | ---------------------------------- | ------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `(file scope)` (`./composer/src/Composer/Command/AboutCommand.php`)

| Change |   Delta |             % |        Time | Caller        | Location                                         |
| -----: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Command/DependsCommand.php`)

| Change |   Delta |             % |        Time | Caller        | Location                                         |
| -----: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `(file scope)` (`./composer/src/Composer/Command/InstallCommand.php`)

| Change |   Delta |             % |        Time | Caller        | Location                                         |
| -----: | ------: | ------------: | ----------: | ------------- | ------------------------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `(anonymous)` | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\IO\BaseIO::loadConfiguration` (`./composer/src/Composer/IO/BaseIO.php`)

| Change |   Delta |             % |        Time | Caller                             | Location                              |
| -----: | ------: | ------------: | ----------: | ---------------------------------- | ------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Factory::createInstallationManager` (`./composer/src/Composer/Factory.php`)

| Change |   Delta |             % |        Time | Caller                             | Location                              |
| -----: | ------: | ------------: | ----------: | ---------------------------------- | ------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

| Change |     Delta |      % |          Time | Caller                              | Location                                          |
| -----: | --------: | -----: | ------------: | ----------------------------------- | ------------------------------------------------- |
|  -5.2% | -217.00ms | 100.0% | 4.16s → 3.94s | `Composer\Console\Application::run` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

| Change |     Delta |      % |          Time | Caller         | Location        |
| -----: | --------: | -----: | ------------: | -------------- | --------------- |
|  -5.2% | -217.00ms | 100.0% | 4.16s → 3.94s | `(file scope)` | `./profile.php` |

##### `Symfony\Component\Console\Terminal::getHeight` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |            Time | Caller                                       | Location                                            |
| -----: | --------: | -----: | --------------: | -------------------------------------------- | --------------------------------------------------- |
| -94.4% | -152.00ms | 100.0% | 161.0ms → 9.0ms | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Caller                                               | Location                                         |
| -----: | --------: | -----: | ---------------: | ---------------------------------------------------- | ------------------------------------------------ |
| -90.4% | -151.00ms | 100.0% | 167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Caller                                                        | Location                                         |
| -----: | --------: | -----: | ---------------: | ------------------------------------------------------------- | ------------------------------------------------ |
| -90.4% | -151.00ms | 100.0% | 167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensionsUsingStty` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Caller                                               | Location                                         |
| -----: | --------: | -----: | ---------------: | ---------------------------------------------------- | ------------------------------------------------ |
| -90.4% | -151.00ms | 100.0% | 167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::initDimensions` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensions` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |             % |            Time | Caller                                          | Location                                         |
| -----: | --------: | ------------: | --------------: | ----------------------------------------------- | ------------------------------------------------ |
| -94.4% | -152.00ms | 96.4% → 56.3% | 161.0ms → 9.0ms | `Symfony\Component\Console\Terminal::getHeight` | `./composer/vendor/symfony/console/Terminal.php` |
| +16.7% |   +1.00ms |  3.6% → 43.8% |   6.0ms → 7.0ms | `Symfony\Component\Console\Terminal::getWidth`  | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

| Change |    Delta |      % |          Time | Caller                                       | Location                                            |
| -----: | -------: | -----: | ------------: | -------------------------------------------- | --------------------------------------------------- |
|  -1.7% | -67.00ms | 100.0% | 3.99s → 3.92s | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|  Change |    Delta |             % |              Time | Caller                                                | Location                                          |
| ------: | -------: | ------------: | ----------------: | ----------------------------------------------------- | ------------------------------------------------- |
|  -11.8% | -33.00ms | 97.2% → 98.8% | 279.0ms → 246.0ms | `Composer\Console\Application::doRun`                 | `./composer/src/Composer/Console/Application.php` |
| removed |  -2.00ms |   0.7% → 0.0% |       2.0ms → 0ms | `Composer\Console\Application::__construct`           | `./composer/src/Composer/Console/Application.php` |
|  -50.0% |  -2.00ms |   1.4% → 0.8% |     4.0ms → 2.0ms | `Composer\Util\Filesystem::filePutContentsIfModified` | `./composer/src/Composer/Util/Filesystem.php`     |
|  -50.0% |  -1.00ms |   0.7% → 0.4% |     2.0ms → 1.0ms | `Composer\Factory::getHomeDir`                        | `./composer/src/Composer/Factory.php`             |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

| Change |    Delta |      % |          Time | Caller                                | Location                                          |
| -----: | -------: | -----: | ------------: | ------------------------------------- | ------------------------------------------------- |
|  -1.0% | -38.00ms | 100.0% | 3.69s → 3.66s | `Composer\Console\Application::doRun` | `./composer/src/Composer/Console/Application.php` |

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

| Change |    Delta |      % |          Time | Caller                                                | Location                                            |
| -----: | -------: | -----: | ------------: | ----------------------------------------------------- | --------------------------------------------------- |
|  -1.0% | -38.00ms | 100.0% | 3.69s → 3.65s | `Symfony\Component\Console\Application::doRunCommand` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

| Change |    Delta |      % |          Time | Caller                                         | Location                                            |
| -----: | -------: | -----: | ------------: | ---------------------------------------------- | --------------------------------------------------- |
|  -1.0% | -38.00ms | 100.0% | 3.69s → 3.65s | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

| Change |    Delta |      % |          Time | Caller                                          | Location                                                  |
| -----: | -------: | -----: | ------------: | ----------------------------------------------- | --------------------------------------------------------- |
|  -0.8% | -24.00ms | 100.0% | 2.94s → 2.92s | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

| Change |    Delta |      % |          Time | Caller                                           | Location                                                |
| -----: | -------: | -----: | ------------: | ------------------------------------------------ | ------------------------------------------------------- |
|  -0.7% | -22.00ms | 100.0% | 2.94s → 2.92s | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

| Change |    Delta |      % |          Time | Caller                                                    | Location                                                                   |
| -----: | -------: | -----: | ------------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -0.8% | -19.00ms | 100.0% | 2.52s → 2.50s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |    Delta |      % |          Time | Caller                                      | Location                                                 |
| -----: | -------: | -----: | ------------: | ------------------------------------------- | -------------------------------------------------------- |
|  -0.6% | -18.00ms | 100.0% | 2.78s → 2.77s | `Composer\Autoload\AutoloadGenerator::dump` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time | Caller                                                  | Location                                                               |
| -----: | -------: | ------------: | ----------------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -9.0% | -14.00ms | 78.7% → 78.8% | 155.0ms → 141.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`              | `./composer/vendor/composer/pcre/src/Preg.php`                         |
|  -9.5% |  -4.00ms | 21.3% → 21.2% |   42.0ms → 38.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

| Change |    Delta |      % |              Time | Caller                     | Location                              |
| -----: | -------: | -----: | ----------------: | -------------------------- | ------------------------------------- |
|  -2.1% | -16.00ms | 100.0% | 748.0ms → 732.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

| Change |    Delta |      % |              Time | Caller                                      | Location                                          |
| -----: | -------: | -----: | ----------------: | ------------------------------------------- | ------------------------------------------------- |
|  -2.1% | -16.00ms | 100.0% | 748.0ms → 732.0ms | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

| Change |    Delta |      % |              Time | Caller                                         | Location                                        |
| -----: | -------: | -----: | ----------------: | ---------------------------------------------- | ----------------------------------------------- |
|  -2.2% | -14.00ms | 100.0% | 645.0ms → 631.0ms | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|  Change |    Delta |             % |              Time | Caller                                            | Location                                        |
| ------: | -------: | ------------: | ----------------: | ------------------------------------------------- | ----------------------------------------------- |
|   -2.3% | -15.00ms | 99.8% → 99.7% | 645.0ms → 630.0ms | `Symfony\Component\Process\Process::wait`         | `./composer/vendor/symfony/process/Process.php` |
| +100.0% |  +1.00ms |   0.2% → 0.3% |     1.0ms → 2.0ms | `Symfony\Component\Process\Process::updateStatus` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |      % |              Time | Caller                                                  | Location                                                               |
| -----: | -------: | -----: | ----------------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -8.9% | -14.00ms | 100.0% | 158.0ms → 144.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |    Delta |      % |          Time | Caller                                                  | Location                                                               |
| -----: | -------: | -----: | ------------: | ------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -0.7% | -12.00ms | 100.0% | 1.66s → 1.65s | `Composer\ClassMapGenerator\PhpFileParser::findClasses` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php` |

##### `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |      % |              Time | Caller                      | Location                                       |
| -----: | -------: | -----: | ----------------: | --------------------------- | ---------------------------------------------- |
|  -4.3% | -12.00ms | 100.0% | 276.0ms → 264.0ms | `Composer\Pcre\Preg::match` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

| Change |    Delta |      % |              Time | Caller                                   | Location                                        |
| -----: | -------: | -----: | ----------------: | ---------------------------------------- | ----------------------------------------------- |
|  -1.7% | -11.00ms | 100.0% | 650.0ms → 639.0ms | `Symfony\Component\Process\Process::run` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |      % |              Time | Caller                                  | Location                                       |
| -----: | -------: | -----: | ----------------: | --------------------------------------- | ---------------------------------------------- |
|  -7.8% | -11.00ms | 100.0% | 141.0ms → 130.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |    Delta |      % |            Time | Caller                                                    | Location                                                                   |
| -----: | -------: | -----: | --------------: | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| -30.6% | -11.00ms | 100.0% | 36.0ms → 25.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

| Change |    Delta |      % |              Time | Caller                                      | Location                                          |
| -----: | -------: | -----: | ----------------: | ------------------------------------------- | ------------------------------------------------- |
|  -2.1% | -16.00ms | 100.0% | 748.0ms → 732.0ms | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

| Change |    Delta |      % |              Time | Caller                                     | Location                                          |
| -----: | -------: | -----: | ----------------: | ------------------------------------------ | ------------------------------------------------- |
|  -2.1% | -16.00ms | 100.0% | 748.0ms → 732.0ms | `Composer\Command\BaseCommand::initialize` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

| Change |    Delta |      % |              Time | Caller                                           | Location                                                |
| -----: | -------: | -----: | ----------------: | ------------------------------------------------ | ------------------------------------------------------- |
|  -2.1% | -16.00ms | 100.0% | 748.0ms → 732.0ms | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

| Change |    Delta |      % |              Time | Caller                             | Location                              |
| -----: | -------: | -----: | ----------------: | ---------------------------------- | ------------------------------------- |
|  -1.8% | -13.00ms | 100.0% | 710.0ms → 697.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |    Delta |      % |              Time | Caller                                            | Location                                                       |
| -----: | -------: | -----: | ----------------: | ------------------------------------------------- | -------------------------------------------------------------- |
|  -1.8% | -13.00ms | 100.0% | 705.0ms → 692.0ms | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

| Change |    Delta |      % |              Time | Caller                                     | Location                                           |
| -----: | -------: | -----: | ----------------: | ------------------------------------------ | -------------------------------------------------- |
|  -1.6% | -11.00ms | 100.0% | 701.0ms → 690.0ms | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

| Change |    Delta |      % |              Time | Caller                                   | Location                                           |
| -----: | -------: | -----: | ----------------: | ---------------------------------------- | -------------------------------------------------- |
|  -1.6% | -11.00ms | 100.0% | 703.0ms → 692.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

| Change |   Delta |             % |              Time | Caller                                                        | Location                                                     |
| -----: | ------: | ------------: | ----------------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
|  -5.6% | -7.00ms | 17.8% → 17.1% | 125.0ms → 118.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  -4.8% | -3.00ms |   9.0% → 8.7% |   63.0ms → 60.0ms | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  +0.7% | +2.00ms | 43.2% → 44.2% | 304.0ms → 306.0ms | `Composer\Package\Version\VersionGuesser::guessGitVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  -1.4% | -2.00ms | 20.9% → 21.0% | 147.0ms → 145.0ms | `Composer\Package\Version\VersionGuesser::versionFromGitTags` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  -3.4% | -2.00ms |   8.3% → 8.1% |   58.0ms → 56.0ms | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |   Delta |      % |              Time | Caller                                                  | Location                                                     |
| -----: | ------: | -----: | ----------------: | ------------------------------------------------------- | ------------------------------------------------------------ |
|  -5.6% | -7.00ms | 100.0% | 125.0ms → 118.0ms | `Composer\Package\Version\VersionGuesser::guessVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`)

|  Change |   Delta |             % |            Time | Caller                                             | Location                                                 |
| ------: | ------: | ------------: | --------------: | -------------------------------------------------- | -------------------------------------------------------- |
|   -8.6% | -3.00ms | 55.6% → 55.2% | 35.0ms → 32.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode` | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|   -3.7% | -1.00ms | 42.9% → 44.8% | 27.0ms → 26.0ms | `Composer\Util\Filesystem::findShortestPath`       | `./composer/src/Composer/Util/Filesystem.php`            |
| removed | -1.00ms |   1.6% → 0.0% |     1.0ms → 0ms | `Composer\Util\Filesystem::findShortestPathCode`   | `./composer/src/Composer/Util/Filesystem.php`            |

##### `Composer\Util\ErrorHandler::handle` (`./composer/src/Composer/Util/ErrorHandler.php`)

|  Change |   Delta |            % |        Time | Caller                             | Location                                         |
| ------: | ------: | -----------: | ----------: | ---------------------------------- | ------------------------------------------------ |
| removed | -3.00ms | 75.0% → 0.0% | 3.0ms → 0ms | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php`      |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms | `(anonymous)`                      | `./composer/vendor/composer/ClassLoader.php:575` |

##### `Composer\Util\Silencer::suppress` (`./composer/src/Composer/Util/Silencer.php`)

|  Change |   Delta |             % |        Time | Caller                         | Location                                    |
| ------: | ------: | ------------: | ----------: | ------------------------------ | ------------------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms | `Composer\Util\Silencer::call` | `./composer/src/Composer/Util/Silencer.php` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time | Callee                                   | Location                                       |
| -----: | -------: | ------------: | ----------------: | ---------------------------------------- | ---------------------------------------------- |
| +33.8% | +26.00ms | 15.3% → 19.2% |  77.0ms → 103.0ms | `Composer\Pcre\Preg::checkOffsetCapture` | `./composer/vendor/composer/pcre/src/Preg.php` |
|  -4.3% | -12.00ms | 55.0% → 49.2% | 276.0ms → 264.0ms | `Composer\Pcre\Preg::pregMatch`          | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |    Delta |             % |              Time | Callee                                    | Location                                       |
| -----: | -------: | ------------: | ----------------: | ----------------------------------------- | ---------------------------------------------- |
|  +2.5% | +22.00ms | 89.2% → 88.6% | 882.0ms → 904.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time | Callee                                      | Location                                       |
| -----: | -------: | ------------: | ----------------: | ------------------------------------------- | ---------------------------------------------- |
|  +7.0% | +34.00ms | 63.1% → 65.2% | 485.0ms → 519.0ms | `Composer\Pcre\Preg::match`                 | `./composer/vendor/composer/pcre/src/Preg.php` |
|  -7.8% | -11.00ms | 18.3% → 16.3% | 141.0ms → 130.0ms | `Composer\Pcre\Preg::enforceNonNullMatches` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`)

| Change |    Delta |             % |            Time | Callee                                                                      | Location                                                                   |
| -----: | -------: | ------------: | --------------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| +51.0% | +26.00ms | 96.2% → 97.5% | 51.0ms → 77.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php` |

##### `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`)

|  Change |    Delta |              % |            Time | Callee                                                                          | Location                                                                       |
| ------: | -------: | -------------: | --------------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  +49.1% | +26.00ms | 96.4% → 100.0% | 53.0ms → 79.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren`     | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
| removed |  -1.00ms |    1.8% → 0.0% |     1.0ms → 0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::__construct` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |

##### `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time | Callee                                  | Location                                       |
| -----: | -------: | ------------: | ----------------: | --------------------------------------- | ---------------------------------------------- |
|  +3.5% | +27.00ms | 84.4% → 85.8% | 769.0ms → 796.0ms | `Composer\Pcre\Preg::matchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|  Change |   Delta |             % |            Time | Callee                                       | Location                                      |
| ------: | ------: | ------------: | --------------: | -------------------------------------------- | --------------------------------------------- |
|  +12.1% | +8.00ms | 58.9% → 61.7% | 66.0ms → 74.0ms | `Composer\Util\Filesystem::findShortestPath` | `./composer/src/Composer/Util/Filesystem.php` |
|   -8.6% | -3.00ms | 31.3% → 26.7% | 35.0ms → 32.0ms | `Composer\Util\Filesystem::normalizePath`    | `./composer/src/Composer/Util/Filesystem.php` |
| +100.0% | +1.00ms |   0.9% → 1.7% |   1.0ms → 2.0ms | `Composer\Util\Filesystem::isAbsolutePath`   | `./composer/src/Composer/Util/Filesystem.php` |

##### `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |             % |            Time | Callee                                     | Location                                       |
| -----: | ------: | ------------: | --------------: | ------------------------------------------ | ---------------------------------------------- |
| +21.7% | +5.00ms | 34.8% → 37.8% | 23.0ms → 28.0ms | `Composer\Pcre\Preg::isMatch`              | `./composer/vendor/composer/pcre/src/Preg.php` |
|    new | +2.00ms |   0.0% → 2.7% |     0ms → 2.0ms | `Composer\Util\Filesystem::isAbsolutePath` | `./composer/src/Composer/Util/Filesystem.php`  |
|  -3.7% | -1.00ms | 40.9% → 35.1% | 27.0ms → 26.0ms | `Composer\Util\Filesystem::normalizePath`  | `./composer/src/Composer/Util/Filesystem.php`  |

##### `JsonSchema\Uri\UriRetriever::loadSchema` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php`)

| Change |   Delta |            % |        Time | Callee                                                | Location                                                                                        |
| -----: | ------: | -----------: | ----------: | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 10.0% | 0ms → 1.0ms | `JsonSchema\Uri\Retrievers\FileGetContents::retrieve` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/Retrievers/FileGetContents.php` |

##### `Symfony\Component\Console\Application::init` (`./composer/vendor/symfony/console/Application.php`)

| Change |   Delta |              % |            Time | Callee                                             | Location                                          |
| -----: | ------: | -------------: | --------------: | -------------------------------------------------- | ------------------------------------------------- |
| +36.4% | +4.00ms | 100.0% → 93.8% | 11.0ms → 15.0ms | `Composer\Console\Application::getDefaultCommands` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Console\Application::getDefaultCommands` (`./composer/src/Composer/Console/Application.php`)

|  Change |   Delta |             % |          Time | Callee                                                      | Location                                                |
| ------: | ------: | ------------: | ------------: | ----------------------------------------------------------- | ------------------------------------------------------- |
|  +75.0% | +3.00ms | 36.4% → 46.7% | 4.0ms → 7.0ms | `Symfony\Component\Console\Command\Command::__construct`    | `./composer/vendor/symfony/console/Command/Command.php` |
| +100.0% | +1.00ms |  9.1% → 13.3% | 1.0ms → 2.0ms | `Symfony\Component\Console\Application::getDefaultCommands` | `./composer/vendor/symfony/console/Application.php`     |

##### `Symfony\Component\Console\Command\Command::__construct` (`./composer/vendor/symfony/console/Command/Command.php`)

| Change |   Delta |             % |          Time | Callee                                                      | Location                                                |
| -----: | ------: | ------------: | ------------: | ----------------------------------------------------------- | ------------------------------------------------------- |
| -33.3% | -1.00ms | 60.0% → 25.0% | 3.0ms → 2.0ms | `Composer\Command\InstallCommand::configure`                | `./composer/src/Composer/Command/InstallCommand.php`    |
|    new | +1.00ms |  0.0% → 12.5% |   0ms → 1.0ms | `Symfony\Component\Console\Command\Command::getDefaultName` | `./composer/vendor/symfony/console/Command/Command.php` |
|    new | +1.00ms |  0.0% → 12.5% |   0ms → 1.0ms | `Composer\Command\ConfigCommand::configure`                 | `./composer/src/Composer/Command/ConfigCommand.php`     |
|    new | +1.00ms |  0.0% → 12.5% |   0ms → 1.0ms | `Composer\Command\InitCommand::configure`                   | `./composer/src/Composer/Command/InitCommand.php`       |
|    new | +1.00ms |  0.0% → 12.5% |   0ms → 1.0ms | `Composer\Command\DependsCommand::configure`                | `./composer/src/Composer/Command/DependsCommand.php`    |

##### `Symfony\Component\Console\Application::find` (`./composer/vendor/symfony/console/Application.php`)

| Change |   Delta |              % |            Time | Callee                                        | Location                                            |
| -----: | ------: | -------------: | --------------: | --------------------------------------------- | --------------------------------------------------- |
| +45.5% | +5.00ms | 84.6% → 100.0% | 11.0ms → 16.0ms | `Symfony\Component\Console\Application::init` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`)

|  Change |   Delta |           % |        Time | Callee                                                | Location                                        |
| ------: | ------: | ----------: | ----------: | ----------------------------------------------------- | ----------------------------------------------- |
| removed | -1.00ms | 2.2% → 0.0% | 1.0ms → 0ms | `Symfony\Component\Process\Process::resetProcessData` | `./composer/vendor/symfony/process/Process.php` |
|     new | +1.00ms | 0.0% → 2.1% | 0ms → 1.0ms | `Symfony\Component\Process\Process::getDescriptors`   | `./composer/vendor/symfony/process/Process.php` |

##### `JsonSchema\Uri\UriRetriever::retrieve` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php`)

|  Change |   Delta |              % |           Time | Callee                                        | Location                                                                          |
| ------: | ------: | -------------: | -------------: | --------------------------------------------- | --------------------------------------------------------------------------------- |
| +150.0% | +6.00ms | 57.1% → 100.0% | 4.0ms → 10.0ms | `JsonSchema\Uri\UriRetriever::loadSchema`     | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
| removed | -2.00ms |   28.6% → 0.0% |    2.0ms → 0ms | `JsonSchema\Uri\UriRetriever::translate`      | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |
| removed | -1.00ms |   14.3% → 0.0% |    1.0ms → 0ms | `JsonSchema\Uri\UriRetriever::resolvePointer` | `./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php` |

##### `Seld\Signal\SignalHandler::create` (`./composer/vendor/seld/signal-handler/src/SignalHandler.php`)

| Change |   Delta |            % |        Time | Callee                                   | Location                                                          |
| -----: | ------: | -----------: | ----------: | ---------------------------------------- | ----------------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms | `Seld\Signal\SignalHandler::__construct` | `./composer/vendor/seld/signal-handler/src/SignalHandler.php`     |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms | `(anonymous)`                            | `./composer/vendor/seld/signal-handler/src/SignalHandler.php:366` |

##### `Symfony\Component\Console\Input\InputOption::__construct` (`./composer/vendor/symfony/console/Input/InputOption.php`)

|  Change |   Delta |            % |        Time | Callee                                                    | Location                                                  |
| ------: | ------: | -----------: | ----------: | --------------------------------------------------------- | --------------------------------------------------------- |
|     new | +2.00ms | 0.0% → 40.0% | 0ms → 2.0ms | `Symfony\Component\Console\Input\InputOption::setDefault` | `./composer/vendor/symfony/console/Input/InputOption.php` |
| removed | -1.00ms | 33.3% → 0.0% | 1.0ms → 0ms | `Symfony\Component\Console\Input\InputOption::isArray`    | `./composer/vendor/symfony/console/Input/InputOption.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |   Delta |             % |            Time | Callee                                                     | Location                                                                |
| -----: | ------: | ------------: | --------------: | ---------------------------------------------------------- | ----------------------------------------------------------------------- |
| +14.3% | +2.00ms | 73.7% → 76.2% | 14.0ms → 16.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|    new | +2.00ms |   0.0% → 9.5% |     0ms → 2.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match`         | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Composer\Console\Input\InputOption::__construct` (`./composer/src/Composer/Console/Input/InputOption.php`)

|  Change |   Delta |      % |          Time | Callee                                                     | Location                                                  |
| ------: | ------: | -----: | ------------: | ---------------------------------------------------------- | --------------------------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms | `Symfony\Component\Console\Input\InputOption::__construct` | `./composer/vendor/symfony/console/Input/InputOption.php` |

##### `Composer\Util\Git::getVersion` (`./composer/src/Composer/Util/Git.php`)

| Change |   Delta |      % |          Time | Callee                                   | Location                                           |
| -----: | ------: | -----: | ------------: | ---------------------------------------- | -------------------------------------------------- |
| +16.7% | +1.00ms | 100.0% | 6.0ms → 7.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\Git::getNoShowSignatureFlag` (`./composer/src/Composer/Util/Git.php`)

| Change |   Delta |      % |          Time | Callee                          | Location                               |
| -----: | ------: | -----: | ------------: | ------------------------------- | -------------------------------------- |
| +16.7% | +1.00ms | 100.0% | 6.0ms → 7.0ms | `Composer\Util\Git::getVersion` | `./composer/src/Composer/Util/Git.php` |

##### `(file scope)` (`./composer/src/Composer/Repository/ComposerRepository.php`)

| Change |   Delta |            % |        Time | Callee                                     | Location                                     |
| -----: | ------: | -----------: | ----------: | ------------------------------------------ | -------------------------------------------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms | `Composer\Autoload\ClassLoader::loadClass` | `./composer/vendor/composer/ClassLoader.php` |

##### `Composer\Repository\RepositoryManager::createRepository` (`./composer/src/Composer/Repository/RepositoryManager.php`)

|  Change |   Delta |             % |          Time | Callee                                                | Location                                                    |
| ------: | ------: | ------------: | ------------: | ----------------------------------------------------- | ----------------------------------------------------------- |
| +100.0% | +1.00ms | 50.0% → 66.7% | 1.0ms → 2.0ms | `Composer\Autoload\ClassLoader::loadClass`            | `./composer/vendor/composer/ClassLoader.php`                |
| removed | -1.00ms |  50.0% → 0.0% |   1.0ms → 0ms | `Composer\Repository\ComposerRepository::__construct` | `./composer/src/Composer/Repository/ComposerRepository.php` |

##### `Composer\Repository\RepositoryFactory::createRepos` (`./composer/src/Composer/Repository/RepositoryFactory.php`)

| Change |   Delta |      % |          Time | Callee                                                    | Location                                                   |
| -----: | ------: | -----: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms | `Composer\Repository\RepositoryManager::createRepository` | `./composer/src/Composer/Repository/RepositoryManager.php` |

##### `Composer\Repository\RepositoryFactory::defaultRepos` (`./composer/src/Composer/Repository/RepositoryFactory.php`)

| Change |   Delta |      % |          Time | Callee                                               | Location                                                   |
| -----: | ------: | -----: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms | `Composer\Repository\RepositoryFactory::createRepos` | `./composer/src/Composer/Repository/RepositoryFactory.php` |

##### `Composer\Plugin\PluginManager::loadRepository` (`./composer/src/Composer/Plugin/PluginManager.php`)

|  Change |   Delta |             % |        Time | Callee                                                        | Location                                                 |
| ------: | ------: | ------------: | ----------: | ------------------------------------------------------------- | -------------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms | `Composer\Repository\RepositoryUtils::filterRequiredPackages` | `./composer/src/Composer/Repository/RepositoryUtils.php` |
|     new | +1.00ms |  0.0% → 50.0% | 0ms → 1.0ms | `Composer\Autoload\ClassLoader::loadClass`                    | `./composer/vendor/composer/ClassLoader.php`             |
|     new | +1.00ms |  0.0% → 50.0% | 0ms → 1.0ms | `Composer\Repository\ArrayRepository::getPackages`            | `./composer/src/Composer/Repository/ArrayRepository.php` |

##### `Composer\Plugin\PluginManager::loadInstalledPlugins` (`./composer/src/Composer/Plugin/PluginManager.php`)

|  Change |   Delta |      % |          Time | Callee                                          | Location                                           |
| ------: | ------: | -----: | ------------: | ----------------------------------------------- | -------------------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms | `Composer\Plugin\PluginManager::loadRepository` | `./composer/src/Composer/Plugin/PluginManager.php` |

##### `(file scope)` (`./composer/src/Composer/Command/AboutCommand.php`)

| Change |   Delta |             % |        Time | Callee                                     | Location                                     |
| -----: | ------: | ------------: | ----------: | ------------------------------------------ | -------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Autoload\ClassLoader::loadClass` | `./composer/vendor/composer/ClassLoader.php` |

##### `(file scope)` (`./composer/src/Composer/Command/DependsCommand.php`)

| Change |   Delta |             % |        Time | Callee                                     | Location                                     |
| -----: | ------: | ------------: | ----------: | ------------------------------------------ | -------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Autoload\ClassLoader::loadClass` | `./composer/vendor/composer/ClassLoader.php` |

##### `Composer\IO\BaseIO::loadConfiguration` (`./composer/src/Composer/IO/BaseIO.php`)

| Change |   Delta |             % |        Time | Callee                                     | Location                                     |
| -----: | ------: | ------------: | ----------: | ------------------------------------------ | -------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Autoload\ClassLoader::loadClass` | `./composer/vendor/composer/ClassLoader.php` |

##### `Composer\Factory::createInstallationManager` (`./composer/src/Composer/Factory.php`)

| Change |   Delta |             % |        Time | Callee                                     | Location                                     |
| -----: | ------: | ------------: | ----------: | ------------------------------------------ | -------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms | `Composer\Autoload\ClassLoader::loadClass` | `./composer/vendor/composer/ClassLoader.php` |

##### `(file scope)` (`./profile.php`)

|  Change |     Delta |             % |          Time | Callee                                                 | Location                                              |
| ------: | --------: | ------------: | ------------: | ------------------------------------------------------ | ----------------------------------------------------- |
|   -5.2% | -217.00ms | 99.8% → 99.9% | 4.16s → 3.94s | `Composer\Console\Application::run`                    | `./composer/src/Composer/Console/Application.php`     |
|  -50.0% |   -1.00ms |         <0.1% | 2.0ms → 1.0ms | `Composer\Autoload\ClassLoader::loadClass`             | `./composer/vendor/composer/ClassLoader.php`          |
|  -33.3% |   -1.00ms |          0.1% | 3.0ms → 2.0ms | `Composer\Console\Application::__construct`            | `./composer/src/Composer/Console/Application.php`     |
| removed |   -1.00ms |  <0.1% → 0.0% |   1.0ms → 0ms | `Symfony\Component\Console\Output\Output::__construct` | `./composer/vendor/symfony/console/Output/Output.php` |

##### `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`)

| Change |     Delta |             % |            Time | Callee                                               | Location                                            |
| -----: | --------: | ------------: | --------------: | ---------------------------------------------------- | --------------------------------------------------- |
| -94.4% | -152.00ms |   3.9% → 0.2% | 161.0ms → 9.0ms | `Symfony\Component\Console\Terminal::getHeight`      | `./composer/vendor/symfony/console/Terminal.php`    |
|  -1.7% |  -67.00ms | 96.0% → 99.6% |   3.99s → 3.92s | `Composer\Console\Application::doRun`                | `./composer/src/Composer/Console/Application.php`   |
| +16.7% |   +1.00ms |   0.1% → 0.2% |   6.0ms → 7.0ms | `Symfony\Component\Console\Terminal::getWidth`       | `./composer/vendor/symfony/console/Terminal.php`    |
|    new |   +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms | `Symfony\Component\Console\Application::configureIO` | `./composer/vendor/symfony/console/Application.php` |

##### `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`)

| Change |     Delta |      % |          Time | Callee                                       | Location                                            |
| -----: | --------: | -----: | ------------: | -------------------------------------------- | --------------------------------------------------- |
|  -5.2% | -217.00ms | 100.0% | 4.16s → 3.94s | `Symfony\Component\Console\Application::run` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Terminal::getHeight` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |            Time | Callee                                               | Location                                         |
| -----: | --------: | -----: | --------------: | ---------------------------------------------------- | ------------------------------------------------ |
| -94.4% | -152.00ms | 100.0% | 161.0ms → 9.0ms | `Symfony\Component\Console\Terminal::initDimensions` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::getSttyColumns` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Callee                                                | Location                                         |
| -----: | --------: | -----: | ---------------: | ----------------------------------------------------- | ------------------------------------------------ |
| -90.4% | -151.00ms | 100.0% | 167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::readFromProcess` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensionsUsingStty` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Callee                                               | Location                                         |
| -----: | --------: | -----: | ---------------: | ---------------------------------------------------- | ------------------------------------------------ |
| -90.4% | -151.00ms | 100.0% | 167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::getSttyColumns` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Symfony\Component\Console\Terminal::initDimensions` (`./composer/vendor/symfony/console/Terminal.php`)

| Change |     Delta |      % |             Time | Callee                                                        | Location                                         |
| -----: | --------: | -----: | ---------------: | ------------------------------------------------------------- | ------------------------------------------------ |
| -90.4% | -151.00ms | 100.0% | 167.0ms → 16.0ms | `Symfony\Component\Console\Terminal::initDimensionsUsingStty` | `./composer/vendor/symfony/console/Terminal.php` |

##### `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)

| Change |    Delta |             % |              Time | Callee                                         | Location                                            |
| -----: | -------: | ------------: | ----------------: | ---------------------------------------------- | --------------------------------------------------- |
|  -1.0% | -38.00ms | 92.6% → 93.2% |     3.69s → 3.66s | `Symfony\Component\Console\Application::doRun` | `./composer/vendor/symfony/console/Application.php` |
| -11.8% | -33.00ms |   7.0% → 6.3% | 279.0ms → 246.0ms | `Composer\Util\Silencer::call`                 | `./composer/src/Composer/Util/Silencer.php`         |
| +23.1% |  +3.00ms |   0.3% → 0.4% |   13.0ms → 16.0ms | `Symfony\Component\Console\Application::find`  | `./composer/vendor/symfony/console/Application.php` |
| -33.3% |  -1.00ms |          0.1% |     3.0ms → 2.0ms | `Composer\Autoload\ClassLoader::loadClass`     | `./composer/vendor/composer/ClassLoader.php`        |
|    new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `Composer\Util\Filesystem::isReadable`         | `./composer/src/Composer/Util/Filesystem.php`       |

##### `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`)

|  Change |   Delta |           % |            Time | Callee                             | Location                                                    |
| ------: | ------: | ----------: | --------------: | ---------------------------------- | ----------------------------------------------------------- |
| removed | -4.00ms | 1.4% → 0.0% |     4.0ms → 0ms | `Composer\Util\Silencer::suppress` | `./composer/src/Composer/Util/Silencer.php`                 |
|   +7.1% | +1.00ms | 4.9% → 6.0% | 14.0ms → 15.0ms | `(anonymous)`                      | `./composer/src/Composer/Console/Application.php:353 → 349` |

##### `Symfony\Component\Console\Application::doRun` (`./composer/vendor/symfony/console/Application.php`)

| Change |    Delta |     % |          Time | Callee                                                | Location                                            |
| -----: | -------: | ----: | ------------: | ----------------------------------------------------- | --------------------------------------------------- |
|  -1.0% | -38.00ms | 99.9% | 3.69s → 3.65s | `Symfony\Component\Console\Application::doRunCommand` | `./composer/vendor/symfony/console/Application.php` |

##### `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`)

| Change |    Delta |             % |              Time | Callee                                          | Location                                                  |
| -----: | -------: | ------------: | ----------------: | ----------------------------------------------- | --------------------------------------------------------- |
|  -0.7% | -22.00ms | 79.7% → 80.0% |     2.94s → 2.92s | `Composer\Command\DumpAutoloadCommand::execute` | `./composer/src/Composer/Command/DumpAutoloadCommand.php` |
|  -2.1% | -16.00ms | 20.3% → 20.0% | 748.0ms → 732.0ms | `Composer\Command\BaseCommand::initialize`      | `./composer/src/Composer/Command/BaseCommand.php`         |

##### `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`)

| Change |    Delta |      % |          Time | Callee                                           | Location                                                |
| -----: | -------: | -----: | ------------: | ------------------------------------------------ | ------------------------------------------------------- |
|  -1.0% | -38.00ms | 100.0% | 3.69s → 3.65s | `Symfony\Component\Console\Command\Command::run` | `./composer/vendor/symfony/console/Command/Command.php` |

##### `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`)

|  Change |    Delta |             % |              Time | Callee                                                     | Location                                                                   |
| ------: | -------: | ------------: | ----------------: | ---------------------------------------------------------- | -------------------------------------------------------------------------- |
|   -0.6% | -18.00ms | 94.6% → 94.7% |     2.78s → 2.77s | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths`  | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php` |
|   +7.1% |  +8.00ms |   3.8% → 4.1% | 112.0ms → 120.0ms | `Composer\Autoload\AutoloadGenerator::getPathCode`         | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
|   -9.1% |  -2.00ms |          0.7% |   22.0ms → 20.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile`       | `./composer/src/Composer/Autoload/AutoloadGenerator.php`                   |
| removed |  -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms | `Composer\EventDispatcher\EventDispatcher::dispatchScript` | `./composer/src/Composer/EventDispatcher/EventDispatcher.php`              |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms | `Composer\Util\Filesystem::ensureDirectoryExists`          | `./composer/src/Composer/Util/Filesystem.php`                              |

##### `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)

| Change |    Delta |              % |          Time | Callee                                             | Location                                                 |
| -----: | -------: | -------------: | ------------: | -------------------------------------------------- | -------------------------------------------------------- |
|  -0.8% | -24.00ms | 100.0% → 99.9% | 2.94s → 2.92s | `Composer\Autoload\AutoloadGenerator::dump`        | `./composer/src/Composer/Autoload/AutoloadGenerator.php` |
|    new |  +1.00ms |   0.0% → <0.1% |   0ms → 1.0ms | `Symfony\Component\Console\Input\Input::getOption` | `./composer/vendor/symfony/console/Input/Input.php`      |

##### `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`)

|  Change |    Delta |            % |              Time | Callee                                                    | Location                                                                |
| ------: | -------: | -----------: | ----------------: | --------------------------------------------------------- | ----------------------------------------------------------------------- |
|   -8.9% | -14.00ms |  6.3% → 5.8% | 158.0ms → 144.0ms | `Composer\Pcre\Preg::matchAllStrictGroups`                | `./composer/vendor/composer/pcre/src/Preg.php`                          |
|   -0.7% | -12.00ms |        65.9% |     1.66s → 1.65s | `Composer\ClassMapGenerator\PhpFileCleaner::clean`        | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|   -9.5% |  -4.00ms |  1.7% → 1.5% |   42.0ms → 38.0ms | `Composer\Pcre\Preg::matchAll`                            | `./composer/vendor/composer/pcre/src/Preg.php`                          |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `Composer\ClassMapGenerator\PhpFileParser::getExtraTypes` | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`  |

##### `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |    Delta |             % |            Time | Callee                                                                          | Location                                                                       |
| -----: | -------: | ------------: | --------------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| +43.6% | +24.00ms |   2.0% → 2.9% | 55.0ms → 79.0ms | `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` | `./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php` |
|  -0.8% | -19.00ms | 90.5% → 90.4% |   2.52s → 2.50s | `Composer\ClassMapGenerator\PhpFileParser::findClasses`                         | `./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`         |
| -30.6% | -11.00ms |   1.3% → 0.9% | 36.0ms → 25.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath`                   | `./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`     |
| +57.1% |  +4.00ms |   0.3% → 0.4% |  7.0ms → 11.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current`         | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |
| -36.4% |  -4.00ms |   0.4% → 0.3% |  11.0ms → 7.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next`            | `./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`     |

##### `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`)

|  Change |   Delta |           % |        Time | Callee                                   | Location                                       |
| ------: | ------: | ----------: | ----------: | ---------------------------------------- | ---------------------------------------------- |
| removed | -7.00ms | 3.6% → 0.0% | 7.0ms → 0ms | `Composer\Pcre\Preg::checkOffsetCapture` | `./composer/vendor/composer/pcre/src/Preg.php` |
| removed | -3.00ms | 1.5% → 0.0% | 3.0ms → 0ms | `Composer\Pcre\Preg::checkSetOrder`      | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`)

|  Change |    Delta |             % |              Time | Callee                                            | Location                                                       |
| ------: | -------: | ------------: | ----------------: | ------------------------------------------------- | -------------------------------------------------------------- |
|   -1.8% | -13.00ms | 94.9% → 95.2% | 710.0ms → 697.0ms | `Composer\Package\Loader\RootPackageLoader::load` | `./composer/src/Composer/Package/Loader/RootPackageLoader.php` |
|  -22.2% |  -4.00ms |   2.4% → 1.9% |   18.0ms → 14.0ms | `Composer\Json\JsonFile::validateSchema`          | `./composer/src/Composer/Json/JsonFile.php`                    |
| +100.0% |  +2.00ms |   0.3% → 0.5% |     2.0ms → 4.0ms | `Composer\Autoload\ClassLoader::loadClass`        | `./composer/vendor/composer/ClassLoader.php`                   |
| removed |  -2.00ms |   0.3% → 0.0% |       2.0ms → 0ms | `Composer\Json\JsonFile::read`                    | `./composer/src/Composer/Json/JsonFile.php`                    |
|  -33.3% |  -1.00ms |   0.4% → 0.3% |     3.0ms → 2.0ms | `Composer\Factory::createConfig`                  | `./composer/src/Composer/Factory.php`                          |

##### `Composer\Factory::create` (`./composer/src/Composer/Factory.php`)

| Change |    Delta |      % |              Time | Callee                             | Location                              |
| -----: | -------: | -----: | ----------------: | ---------------------------------- | ------------------------------------- |
|  -2.1% | -16.00ms | 100.0% | 748.0ms → 732.0ms | `Composer\Factory::createComposer` | `./composer/src/Composer/Factory.php` |

##### `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`)

| Change |   Delta |           % |        Time | Callee                                                   | Location                                                    |
| -----: | ------: | ----------: | ----------: | -------------------------------------------------------- | ----------------------------------------------------------- |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms | `Symfony\Component\Process\Pipes\AbstractPipes::unblock` | `./composer/vendor/symfony/process/Pipes/AbstractPipes.php` |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms | `Symfony\Component\Process\Pipes\AbstractPipes::write`   | `./composer/vendor/symfony/process/Pipes/AbstractPipes.php` |

##### `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`)

|  Change |    Delta |           % |              Time | Callee                                                    | Location                                                |
| ------: | -------: | ----------: | ----------------: | --------------------------------------------------------- | ------------------------------------------------------- |
|   -2.2% | -14.00ms |       99.8% | 645.0ms → 631.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php` |
| removed |  -1.00ms | 0.2% → 0.0% |       1.0ms → 0ms | `(anonymous)`                                             | `./composer/vendor/symfony/process/Process.php:1324`    |

##### `Composer\Pcre\Preg::matchAllStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`)

| Change |    Delta |             % |              Time | Callee                                       | Location                                       |
| -----: | -------: | ------------: | ----------------: | -------------------------------------------- | ---------------------------------------------- |
|  -9.0% | -14.00ms | 98.1% → 97.9% | 155.0ms → 141.0ms | `Composer\Pcre\Preg::matchAll`               | `./composer/vendor/composer/pcre/src/Preg.php` |
| -50.0% |  -1.00ms |   1.3% → 0.7% |     2.0ms → 1.0ms | `Composer\Pcre\Preg::enforceNonNullMatchAll` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`)

| Change |    Delta |             % |              Time | Callee                                                   | Location                                                                |
| -----: | -------: | ------------: | ----------------: | -------------------------------------------------------- | ----------------------------------------------------------------------- |
|  +2.9% | +29.00ms | 59.6% → 61.8% |   989.0ms → 1.02s | `Composer\ClassMapGenerator\PhpFileCleaner::match`       | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
|  -3.9% |  -8.00ms | 12.2% → 11.8% | 203.0ms → 195.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString`  | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| -88.9% |  -8.00ms |   0.5% → 0.1% |     9.0ms → 1.0ms | `Composer\Pcre\Preg::isMatch`                            | `./composer/vendor/composer/pcre/src/Preg.php`                          |
| +10.5% |  +2.00ms |   1.1% → 1.3% |   19.0ms → 21.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |
| -20.0% |  -1.00ms |   0.3% → 0.2% |     5.0ms → 4.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToPhp`   | `./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php` |

##### `Symfony\Component\Process\Process::wait` (`./composer/vendor/symfony/process/Process.php`)

|  Change |    Delta |             % |              Time | Callee                                         | Location                                        |
| ------: | -------: | ------------: | ----------------: | ---------------------------------------------- | ----------------------------------------------- |
|   -2.3% | -15.00ms | 99.2% → 98.6% | 645.0ms → 630.0ms | `Symfony\Component\Process\Process::readPipes` | `./composer/vendor/symfony/process/Process.php` |
| +200.0% |  +2.00ms |   0.2% → 0.5% |     1.0ms → 3.0ms | `Symfony\Component\Process\Process::isRunning` | `./composer/vendor/symfony/process/Process.php` |

##### `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`)

| Change |   Delta |             % |           Time | Callee                                    | Location                                       |
| -----: | ------: | ------------: | -------------: | ----------------------------------------- | ---------------------------------------------- |
| -66.7% | -8.00ms | 33.3% → 16.0% | 12.0ms → 4.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |
| +50.0% | +2.00ms | 11.1% → 24.0% |  4.0ms → 6.0ms | `Composer\Pcre\Preg::replaceCallback`     | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`)

| Change |    Delta |      % |              Time | Callee                     | Location                              |
| -----: | -------: | -----: | ----------------: | -------------------------- | ------------------------------------- |
|  -2.1% | -16.00ms | 100.0% | 748.0ms → 732.0ms | `Composer\Factory::create` | `./composer/src/Composer/Factory.php` |

##### `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`)

| Change |    Delta |      % |              Time | Callee                                      | Location                                          |
| -----: | -------: | -----: | ----------------: | ------------------------------------------- | ------------------------------------------------- |
|  -2.1% | -16.00ms | 100.0% | 748.0ms → 732.0ms | `Composer\Console\Application::getComposer` | `./composer/src/Composer/Console/Application.php` |

##### `Composer\Command\BaseCommand::initialize` (`./composer/src/Composer/Command/BaseCommand.php`)

| Change |    Delta |      % |              Time | Callee                                      | Location                                          |
| -----: | -------: | -----: | ----------------: | ------------------------------------------- | ------------------------------------------------- |
|  -2.1% | -16.00ms | 100.0% | 748.0ms → 732.0ms | `Composer\Command\BaseCommand::tryComposer` | `./composer/src/Composer/Command/BaseCommand.php` |

##### `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`)

| Change |    Delta |           % |              Time | Callee                                                                 | Location                                                           |
| -----: | -------: | ----------: | ----------------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  -1.8% | -13.00ms |       99.3% | 705.0ms → 692.0ms | `Composer\Package\Version\VersionGuesser::guessVersion`                | `./composer/src/Composer/Package/Version/VersionGuesser.php`       |
| -50.0% |  -1.00ms | 0.3% → 0.1% |     2.0ms → 1.0ms | `Composer\Package\Loader\ValidatingArrayLoader::hasPackageNamingError` | `./composer/src/Composer/Package/Loader/ValidatingArrayLoader.php` |
| +50.0% |  +1.00ms | 0.3% → 0.4% |     2.0ms → 3.0ms | `Composer\Repository\RepositoryFactory::defaultRepos`                  | `./composer/src/Composer/Repository/RepositoryFactory.php`         |

##### `Composer\Package\Version\VersionGuesser::guessVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |   Delta |             % |              Time | Callee                                                        | Location                                                     |
| -----: | ------: | ------------: | ----------------: | ------------------------------------------------------------- | ------------------------------------------------------------ |
|  -5.6% | -7.00ms | 17.7% → 17.1% | 125.0ms → 118.0ms | `Composer\Package\Version\VersionGuesser::guessFossilVersion` | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  -4.8% | -3.00ms |   8.9% → 8.7% |   63.0ms → 60.0ms | `Composer\Package\Version\VersionGuesser::guessHgVersion`     | `./composer/src/Composer/Package/Version/VersionGuesser.php` |
|  -5.1% | -3.00ms |   8.4% → 8.1% |   59.0ms → 56.0ms | `Composer\Package\Version\VersionGuesser::guessSvnVersion`    | `./composer/src/Composer/Package/Version/VersionGuesser.php` |

##### `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|  Change |   Delta |             % |              Time | Callee                                                    | Location                                                      |
| ------: | ------: | ------------: | ----------------: | --------------------------------------------------------- | ------------------------------------------------------------- |
|   -1.2% | -8.00ms | 99.1% → 99.6% | 695.0ms → 687.0ms | `Symfony\Component\Process\Process::run`                  | `./composer/vendor/symfony/process/Process.php`               |
| removed | -3.00ms |   0.4% → 0.0% |       3.0ms → 0ms | `Seld\Signal\SignalHandler::unregister`                   | `./composer/vendor/seld/signal-handler/src/SignalHandler.php` |
|     new | +2.00ms |   0.0% → 0.3% |       0ms → 2.0ms | `Seld\Signal\SignalHandler::create`                       | `./composer/vendor/seld/signal-handler/src/SignalHandler.php` |
| removed | -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms | `Symfony\Component\Process\Process::fromShellCommandline` | `./composer/vendor/symfony/process/Process.php`               |

##### `Composer\Util\ProcessExecutor::doExecute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

|  Change |    Delta |           % |              Time | Callee                                                  | Location                                                |
| ------: | -------: | ----------: | ----------------: | ------------------------------------------------------- | ------------------------------------------------------- |
|   -1.6% | -11.00ms |       99.7% | 701.0ms → 690.0ms | `Composer\Util\ProcessExecutor::runProcess`             | `./composer/src/Composer/Util/ProcessExecutor.php`      |
| removed |  -1.00ms | 0.1% → 0.0% |       1.0ms → 0ms | `Composer\Util\ProcessExecutor::outputCommandRun`       | `./composer/src/Composer/Util/ProcessExecutor.php`      |
|     new |  +1.00ms | 0.0% → 0.1% |       0ms → 1.0ms | `Symfony\Component\Process\Pipes\UnixPipes::__destruct` | `./composer/vendor/symfony/process/Pipes/UnixPipes.php` |

##### `Composer\Util\ProcessExecutor::execute` (`./composer/src/Composer/Util/ProcessExecutor.php`)

| Change |    Delta |      % |              Time | Callee                                     | Location                                           |
| -----: | -------: | -----: | ----------------: | ------------------------------------------ | -------------------------------------------------- |
|  -1.6% | -11.00ms | 100.0% | 703.0ms → 692.0ms | `Composer\Util\ProcessExecutor::doExecute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`)

| Change |   Delta |      % |              Time | Callee                                   | Location                                           |
| -----: | ------: | -----: | ----------------: | ---------------------------------------- | -------------------------------------------------- |
|  -5.6% | -7.00ms | 100.0% | 125.0ms → 118.0ms | `Composer\Util\ProcessExecutor::execute` | `./composer/src/Composer/Util/ProcessExecutor.php` |

##### `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`)

| Change |   Delta |             % |            Time | Callee                                    | Location                                       |
| -----: | ------: | ------------: | --------------: | ----------------------------------------- | ---------------------------------------------- |
| -38.5% | -5.00ms | 20.6% → 13.8% |  13.0ms → 8.0ms | `Composer\Pcre\Preg::replaceCallback`     | `./composer/vendor/composer/pcre/src/Preg.php` |
| +17.6% | +3.00ms | 27.0% → 34.5% | 17.0ms → 20.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` | `./composer/vendor/composer/pcre/src/Preg.php` |

##### `Composer\Util\ErrorHandler::handle` (`./composer/src/Composer/Util/ErrorHandler.php`)

|  Change |   Delta |            % |        Time | Callee                              | Location                                   |
| ------: | ------: | -----------: | ----------: | ----------------------------------- | ------------------------------------------ |
| removed | -2.00ms | 50.0% → 0.0% | 2.0ms → 0ms | `Composer\IO\ConsoleIO::writeError` | `./composer/src/Composer/IO/ConsoleIO.php` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms | `Composer\IO\ConsoleIO::isVerbose`  | `./composer/src/Composer/IO/ConsoleIO.php` |

##### `Composer\Util\Silencer::suppress` (`./composer/src/Composer/Util/Silencer.php`)

|  Change |   Delta |            % |        Time | Callee                               | Location                                        |
| ------: | ------: | -----------: | ----------: | ------------------------------------ | ----------------------------------------------- |
| removed | -3.00ms | 75.0% → 0.0% | 3.0ms → 0ms | `Composer\Util\ErrorHandler::handle` | `./composer/src/Composer/Util/ErrorHandler.php` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) ← `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← `(file scope)` (`./profile.php`)

|  Change |    Delta |             % |              Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------: | -------: | ------------: | ----------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +51.0% | +26.00ms |   1.2% → 2.0% |   51.0ms → 77.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::__construct` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::getChildren` ← `Symfony\Component\Finder\Iterator\ExcludeDirectoryFilterIterator::getChildren` (`./composer/vendor/symfony/finder/Iterator/ExcludeDirectoryFilterIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +16.4% | +23.00ms |   3.4% → 4.1% | 140.0ms → 163.0ms | `Composer\Pcre\Preg::match` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +30.7% | +23.00ms |   1.8% → 2.5% |   75.0ms → 98.0ms | `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   +1.8% | +12.00ms | 15.8% → 17.0% | 659.0ms → 671.0ms | `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   +8.4% |  +9.00ms |   2.6% → 2.9% | 107.0ms → 116.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +45.5% |  +5.00ms |   0.3% → 0.4% |   11.0ms → 16.0ms | `Symfony\Component\Process\Process::start` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize`                                                                                                                                                                                                                                                                                                                                                                            |
| +125.0% |  +5.00ms |   0.1% → 0.2% |     4.0ms → 9.0ms | `JsonSchema\Uri\UriRetriever::loadSchema` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Uri/UriRetriever.php`) ← `JsonSchema\Uri\UriRetriever::retrieve` ← `JsonSchema\SchemaStorage::addSchema` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/SchemaStorage.php`) ← `JsonSchema\SchemaStorage::getSchema` ← `JsonSchema\SchemaStorage::resolveRef` ← `JsonSchema\SchemaStorage::resolveRefSchema` ← `JsonSchema\Constraints\Constraint::checkUndefined` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/Constraint.php`) ← `JsonSchema\Constraints\SchemaConstraint::check` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Constraints/SchemaConstraint.php`) ← `JsonSchema\Validator::validate` (`./composer/vendor/justinrainbow/json-schema/src/JsonSchema/Validator.php`) ← `JsonSchema\Validator::check` ← `Composer\Json\JsonFile::validateJsonSchema` (`./composer/src/Composer/Json/JsonFile.php`) ← `Composer\Json\JsonFile::validateSchema` ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` |
| +100.0% |  +5.00ms |   0.1% → 0.3% |    5.0ms → 10.0ms | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::isMatch` ← `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +200.0% |  +4.00ms |  <0.1% → 0.2% |     2.0ms → 6.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::current` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +11.8% |  +4.00ms |   0.8% → 1.0% |   34.0ms → 38.0ms | `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +133.3% |  +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms | `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms | `(file scope)` (`./vendor/composer/autoload_classmap.php`) ← `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms | `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::isMatch` ← `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +300.0% |  +3.00ms |  <0.1% → 0.1% |     1.0ms → 4.0ms | `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +100.0% |  +2.00ms |  <0.1% → 0.1% |     2.0ms → 4.0ms | `Composer\Autoload\ClassLoader::loadClass` (`./composer/vendor/composer/ClassLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   +0.7% |  +2.00ms |   6.7% → 7.1% | 277.0ms → 279.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessGitVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize`                                                                                                                                                                                                         |
|   +1.4% |  +2.00ms |   3.3% → 3.5% | 138.0ms → 140.0ms | `Composer\Pcre\Preg::matchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +14.3% |  +2.00ms |   0.3% → 0.4% |   14.0ms → 16.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipToNewline` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::skipHeredoc` ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +50.0% |  +2.00ms |   0.1% → 0.2% |     4.0ms → 6.0ms | `Composer\Pcre\Preg::replaceCallback` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `Symfony\Component\Console\Application::run` (`./composer/vendor/symfony/console/Application.php`) ← `Composer\Console\Application::run` (`./composer/src/Composer/Console/Application.php`) ← `(file scope)` (`./profile.php`)

|  Change |     Delta |             % |              Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------: | --------: | ------------: | ----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -94.4% | -152.00ms |   3.9% → 0.2% |   161.0ms → 9.0ms | `Symfony\Component\Console\Terminal::readFromProcess` (`./composer/vendor/symfony/console/Terminal.php`) ← `Symfony\Component\Console\Terminal::getSttyColumns` ← `Symfony\Component\Console\Terminal::initDimensionsUsingStty` ← `Symfony\Component\Console\Terminal::initDimensions` ← `Symfony\Component\Console\Terminal::getHeight`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -12.2% |  -32.00ms |   6.3% → 5.9% | 263.0ms → 231.0ms | `Composer\Util\Silencer::call` (`./composer/src/Composer/Util/Silencer.php`) ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   -6.2% |  -27.00ms | 10.4% → 10.3% | 435.0ms → 408.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -19.5% |  -15.00ms |   1.8% → 1.6% |   77.0ms → 62.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   -9.4% |  -13.00ms |   3.3% → 3.2% | 139.0ms → 126.0ms | `Composer\Pcre\Preg::isMatchStrictGroups` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   -7.8% |  -12.00ms |   3.7% → 3.6% | 153.0ms → 141.0ms | `Composer\Pcre\Preg::matchAll` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAllStrictGroups` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -10.2% |  -11.00ms |   2.6% → 2.5% |  108.0ms → 97.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::guessFossilVersion` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                              |
|   -8.0% |  -11.00ms |   3.3% → 3.2% | 138.0ms → 127.0ms | `Composer\Pcre\Preg::enforceNonNullMatches` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                      |
|   -4.0% |   -8.00ms |          4.9% | 202.0ms → 194.0ms | `Composer\ClassMapGenerator\PhpFileCleaner::skipString` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |   -7.00ms |   0.2% → 0.0% |       7.0ms → 0ms | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::isMatch` ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -85.7% |   -6.00ms |  0.2% → <0.1% |     7.0ms → 1.0ms | `Composer\Pcre\Preg::replace` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Autoload\AutoloadGenerator::getStaticFile` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -25.0% |   -5.00ms |   0.5% → 0.4% |   20.0ms → 15.0ms | `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -71.4% |   -5.00ms |   0.2% → 0.1% |     7.0ms → 2.0ms | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\ClassMapGenerator::normalizePath` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |   -5.00ms |   0.1% → 0.0% |       5.0ms → 0ms | `Composer\Pcre\Preg::checkOffsetCapture` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::matchAll` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   -2.8% |   -4.00ms |   3.4% → 3.5% | 142.0ms → 138.0ms | `Symfony\Component\Process\Pipes\UnixPipes::readAndWrite` (`./composer/vendor/symfony/process/Pipes/UnixPipes.php`) ← `Symfony\Component\Process\Process::readPipes` (`./composer/vendor/symfony/process/Process.php`) ← `Symfony\Component\Process\Process::wait` ← `Symfony\Component\Process\Process::run` ← `Composer\Util\ProcessExecutor::runProcess` (`./composer/src/Composer/Util/ProcessExecutor.php`) ← `Composer\Util\ProcessExecutor::doExecute` ← `Composer\Util\ProcessExecutor::execute` ← `Composer\Package\Version\VersionGuesser::versionFromGitTags` (`./composer/src/Composer/Package/Version/VersionGuesser.php`) ← `Composer\Package\Version\VersionGuesser::guessGitVersion` ← `Composer\Package\Version\VersionGuesser::guessVersion` ← `Composer\Package\Loader\RootPackageLoader::load` (`./composer/src/Composer/Package/Loader/RootPackageLoader.php`) ← `Composer\Factory::createComposer` (`./composer/src/Composer/Factory.php`) ← `Composer\Factory::create` ← `Composer\Console\Application::getComposer` (`./composer/src/Composer/Console/Application.php`) ← `Composer\Command\BaseCommand::tryComposer` (`./composer/src/Composer/Command/BaseCommand.php`) ← `Composer\Command\BaseCommand::initialize` ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`) |
|   -1.6% |   -4.00ms |   6.1% → 6.3% | 252.0ms → 248.0ms | `Composer\Pcre\Preg::pregMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Pcre\Preg::match` ← `Composer\Pcre\Preg::matchStrictGroups` ← `Composer\Pcre\Preg::isMatchStrictGroups` ← `Composer\ClassMapGenerator\PhpFileCleaner::match` (`./composer/vendor/composer/class-map-generator/src/PhpFileCleaner.php`) ← `Composer\ClassMapGenerator\PhpFileCleaner::clean` ← `Composer\ClassMapGenerator\PhpFileParser::findClasses` (`./composer/vendor/composer/class-map-generator/src/PhpFileParser.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                    |
|  -28.6% |   -4.00ms |          0.3% |   14.0ms → 10.0ms | `Composer\Pcre\Preg::isMatch` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Util\Filesystem::findShortestPath` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -36.4% |   -4.00ms |   0.3% → 0.2% |    11.0ms → 7.0ms | `Symfony\Component\Finder\Iterator\RecursiveDirectoryIterator::next` (`./composer/vendor/symfony/finder/Iterator/RecursiveDirectoryIterator.php`) ← `Composer\ClassMapGenerator\ClassMapGenerator::scanPaths` (`./composer/vendor/composer/class-map-generator/src/ClassMapGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -66.7% |   -4.00ms |          0.1% |     6.0ms → 2.0ms | `Composer\Autoload\AutoloadGenerator::dump` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -42.9% |   -3.00ms |   0.2% → 0.1% |     7.0ms → 4.0ms | `Composer\Pcre\Preg::replaceCallback` (`./composer/vendor/composer/pcre/src/Preg.php`) ← `Composer\Util\Filesystem::normalizePath` (`./composer/src/Composer/Util/Filesystem.php`) ← `Composer\Autoload\AutoloadGenerator::getPathCode` (`./composer/src/Composer/Autoload/AutoloadGenerator.php`) ← `Composer\Autoload\AutoloadGenerator::dump` ← `Composer\Command\DumpAutoloadCommand::execute` (`./composer/src/Composer/Command/DumpAutoloadCommand.php`) ← `Symfony\Component\Console\Command\Command::run` (`./composer/vendor/symfony/console/Command/Command.php`) ← `Symfony\Component\Console\Application::doRunCommand` (`./composer/vendor/symfony/console/Application.php`) ← `Symfony\Component\Console\Application::doRun` ← `Composer\Console\Application::doRun` (`./composer/src/Composer/Console/Application.php`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

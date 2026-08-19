<?php

$outDir      = $argv[1] ?? null;
$eventArg    = $argv[2] ?? 'cpu';
$composerSrc = $argv[3] ?? null;
$targetDir   = $argv[4] ?? null;

if ($outDir === null || $composerSrc === null || $targetDir === null) {
    fwrite(STDERR, "usage: php profile.php <out-dir> <cpu|wall> <composer-src> <target-dir>\n");
    exit(2);
}

if (!extension_loaded('excimer')) {
    fwrite(STDERR, "excimer extension is not loaded\n");
    exit(2);
}

// Composer 2.7 uses constants PHP 8.4 deprecated, and its own error handler
// re-emits each notice. Keep the notices off stdout.
ini_set('display_errors', 'stderr');

// Repeat the workload so a 1ms period yields thousands of samples.
const REPETITIONS = 20;

$profiler = new ExcimerProfiler();

$eventType = $eventArg === 'wall' ? EXCIMER_REAL : EXCIMER_CPU;
$profiler->setEventType($eventType);

// 1ms is Excimer's conventional period.
$profiler->setPeriod(0.001);

$profiler->start();

// Composer runs in this process rather than as a subprocess, because Excimer
// samples only the interpreter it is loaded into. A subprocess run would
// record the wait alone.
require "$composerSrc/src/bootstrap.php";

$exitCode = 0;
for ($i = 0; $i < REPETITIONS; $i++) {
    $app = new Composer\Console\Application();
    $app->setAutoExit(false);
    $exitCode = $app->run(
        new Symfony\Component\Console\Input\ArrayInput([
            'command'    => 'dump-autoload',
            '--optimize' => true,
            '-d'         => $targetDir,
        ]),
        new Symfony\Component\Console\Output\BufferedOutput()
    );
    if ($exitCode !== 0) {
        break;
    }
}

$profiler->stop();

if ($exitCode !== 0) {
    fwrite(STDERR, "composer dump-autoload failed (exit $exitCode)\n");
    exit($exitCode);
}

$log = $profiler->getLog();
fwrite(STDERR, 'Collected ' . count($log) . " samples\n");

$json = json_encode($log->getSpeedscopeData());
if ($json === false) {
    fwrite(STDERR, 'failed to json-encode speedscope data: ' . json_last_error_msg() . "\n");
    exit(1);
}

foreach (["$outDir/php.speedscope.json" => $json, "$outDir/php.collapsed" => $log->formatCollapsed()] as $path => $contents) {
    if (file_put_contents($path, $contents) === false) {
        fwrite(STDERR, "failed to write $path\n");
        exit(1);
    }
}

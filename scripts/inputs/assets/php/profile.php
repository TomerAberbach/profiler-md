<?php

$out         = $argv[1] ?? null;
$eventArg    = $argv[2] ?? 'cpu';
$guzzleDir   = $argv[3] ?? null;
$composerPhar = $argv[4] ?? null;

if ($out === null || $guzzleDir === null || $composerPhar === null) {
    fwrite(STDERR, "usage: php profile.php <out> <cpu|wall> <guzzle-dir> <composer.phar>\n");
    exit(2);
}

if (!extension_loaded('excimer')) {
    fwrite(STDERR, "excimer extension is not loaded\n");
    exit(2);
}

$profiler = new ExcimerProfiler();

$eventType = $eventArg === 'wall' ? EXCIMER_REAL : EXCIMER_CPU;
$profiler->setEventType($eventType);

// Keep the period small so a short workload still yields a handful of samples,
// but not so small that the generated input balloons. 1ms is Excimer's common default.
$profiler->setPeriod(0.001);

$profiler->start();

$cmd = sprintf(
    '%s %s dump-autoload --optimize -d %s',
    escapeshellarg(PHP_BINARY),
    escapeshellarg($composerPhar),
    escapeshellarg($guzzleDir)
);
$exitCode = 0;
passthru($cmd, $exitCode);

$profiler->stop();

if ($exitCode !== 0) {
    fwrite(STDERR, "composer dump-autoload failed (exit $exitCode)\n");
    exit($exitCode);
}

$data = $profiler->getLog()->getSpeedscopeData();
$json = json_encode($data);
if ($json === false) {
    fwrite(STDERR, 'failed to json-encode speedscope data: ' . json_last_error_msg() . "\n");
    exit(1);
}

if (file_put_contents($out, $json) === false) {
    fwrite(STDERR, "failed to write $out\n");
    exit(1);
}

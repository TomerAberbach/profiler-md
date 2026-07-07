#include <cstdio>
#include <string>
#include <vector>

#include <fmt/chrono.h>
#include <fmt/format.h>

int main()
{
  struct Row
  {
    const char *name;
    int count;
    double ratio;
  };
  const Row rows[] = {
      {"profile", 1024, 3.14159},
      {"snapshot", 65536, 0.001234},
      {"markdown", 42, 2.718281828},
      {"fixture", -7, 1.0e9},
      {"gperftools", 999999, -0.5},
  };

  std::size_t total = 0;
  // Retain a sampling of results so the heap profiler sees live allocations.
  std::vector<std::string> retained;
  retained.reserve(256);

  for (int i = 0; i < 1'500'000; ++i)
  {
    const Row &r = rows[i % 5];
    std::string s = fmt::format(
        "{:>12} | #{:08x} | {:>8} | {:+.4f} | {:>6.2f}% | {}", r.name, i,
        r.count, r.ratio, (r.ratio * 100.0), fmt::format("{}-{}", r.name, i));
    total += s.size();
    if ((i % 6000) == 0)
    {
      retained.push_back(std::move(s));
    }
  }

  // Keep the results observable so the optimizer can't elide the work (the
  // fprintf forces `total` and `retained` to be computed).
  std::fprintf(stderr, "total=%zu retained=%zu\n", total, retained.size());
  return 0;
}

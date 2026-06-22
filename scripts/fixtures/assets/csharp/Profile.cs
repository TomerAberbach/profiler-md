using System;

using Newtonsoft.Json;

namespace Profile
{
    class Node
    {
        public string Name { get; set; }
        public int Count { get; set; }
        public double Ratio { get; set; }
        public string[] Tags { get; set; }
        public Node[] Children { get; set; }
    }

    static class Program
    {
        static Node Sample() => new Node
        {
            Name = "profiler-md",
            Count = 1024,
            Ratio = 3.14159,
            Tags = new[] { "profile", "snapshot", "markdown", "fixture" },
            Children = new[]
            {
                new Node { Name = "child-a", Count = 2, Tags = new[] { "a", "b" } },
                new Node { Name = "child-b", Count = 3, Tags = new[] { "c", "d" } },
            },
        };

        static void Main()
        {
            long total = 0;
            var sample = Sample();
            for (int i = 0; i < 1_000_000; i++)
            {
                string json = JsonConvert.SerializeObject(sample);
                var back = JsonConvert.DeserializeObject<Node>(json);
                total += json.Length + back.Tags.Length;
            }

            // Keep the result observable so the work can't be optimized away.
            Console.Error.WriteLine($"total={total}");
        }
    }
}

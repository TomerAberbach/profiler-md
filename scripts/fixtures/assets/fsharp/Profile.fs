module Profile

open Argu

type Arg =
    | [<Mandatory>] Name of string
    | Count of int
    | [<AltCommandLine("-v")>] Verbose
    | Tag of string

    interface IArgParserTemplate with
        member this.Usage =
            match this with
            | Name _ -> "the name"
            | Count _ -> "the count"
            | Verbose -> "verbose output"
            | Tag _ -> "a tag (repeatable)"

[<EntryPoint>]
let main _ =
    let parser = ArgumentParser.Create<Arg>(programName = "profile")
    let argv =
        [| "--name"; "profiler-md"; "--count"; "42"; "-v"
           "--tag"; "profile"; "--tag"; "snapshot"; "--tag"; "markdown" |]

    let mutable total = 0
    for _ in 1..500000 do
        let results = parser.Parse(argv, raiseOnUsage = false)
        total <- total + results.GetResult Count + List.length (results.GetResults Tag)

    // Keep the result observable so the work can't be optimized away.
    eprintfn "total=%d" total
    0

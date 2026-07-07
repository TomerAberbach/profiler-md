using Profile
using JSON3

using PProf

# Parse the document many times. `keep` accumulates a value derived from each
# parse and re-serialize so the work can't be optimized away and stays agnostic
# to the document's shape.
function parse_workload(iterations::Int, doc::String)
    keep = 0
    for _ in 1:iterations
        obj = JSON3.read(doc)
        keep += length(JSON3.write(obj))
    end
    return keep
end

function capture_cpu(out::String, doc::String)
    # Warm up first so JIT compilation (type inference, codegen) isn't captured
    # as part of the profile.
    parse_workload(20, doc)

    Profile.clear()
    @profile parse_workload(2_000, doc)

    pprof(out = out, web = false, from_c = false)
    return nothing
end

function capture_alloc(out::String, doc::String)
    # Warm up first so JIT compilation isn't captured.
    parse_workload(20, doc)

    Profile.Allocs.clear()
    # `Profile.Allocs.@profile` (Julia >= 1.8) records one sample per allocation
    # scaled by `sample_rate` (1.0 = every allocation). Parsing a ~600 KB JSON
    # doc allocates enormously, so `sample_rate=1` over many iterations records
    # tens of millions of samples. Keep BOTH the rate and the iteration count
    # small so the sampled set stays in the low thousands.
    Profile.Allocs.@profile sample_rate = 0.0001 parse_workload(100, doc)

    PProf.Allocs.pprof(out = out, web = false)
    return nothing
end

function main()
    if length(ARGS) != 3
        println(stderr, "usage: julia profile.jl <cpu|alloc> <out.pb.gz> <json-file>")
        exit(2)
    end
    mode, out, json_file = ARGS[1], ARGS[2], ARGS[3]
    doc = read(json_file, String)
    if mode == "cpu"
        capture_cpu(out, doc)
    elseif mode == "alloc"
        capture_alloc(out, doc)
    else
        println(stderr, "unknown mode: $mode (expected cpu|alloc)")
        exit(2)
    end
end

main()

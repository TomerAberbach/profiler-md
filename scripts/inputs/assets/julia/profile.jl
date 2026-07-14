using Profile
using JSON3

# PProf pulls in many packages whose methods and types are live heap objects
# that would bloat a heap snapshot, and heap mode exports without it, so only
# the pprof-exporting modes load it.
if !isempty(ARGS) && ARGS[1] != "heap"
    using PProf
end

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
    # in the profile.
    parse_workload(20, doc)

    Profile.clear()
    @profile parse_workload(2_000, doc)

    pprof(out = out, web = false, from_c = false)
    return nothing
end

function capture_wall(out::String, doc::String)
    # Warm up first so JIT compilation (type inference, codegen) isn't captured
    # in the profile.
    parse_workload(20, doc)

    Profile.clear()
    # `Profile.@profile_walltime` (Julia >= 1.12) samples all live tasks
    # regardless of scheduling state, so it counts blocked/waiting time too.
    Profile.@profile_walltime parse_workload(2_000, doc)

    # Wall-time samples land in the same buffer as `@profile`, so the same
    # `pprof` call exports them.
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

function capture_heap(out::String, doc::String)
    # Keep parsed documents live so the snapshot contains workload data on top
    # of the runtime's own heap.
    docs = [JSON3.read(doc) for _ in 1:10]

    # `Profile.take_heap_snapshot` (Julia >= 1.9) writes a V8-format heap
    # snapshot of every live object, uncompressed.
    Profile.take_heap_snapshot(out)
    return length(docs)
end

function main()
    if length(ARGS) != 3
        println(stderr, "usage: julia profile.jl <cpu|wall|alloc|heap> <out> <json-file>")
        exit(2)
    end
    mode, out, json_file = ARGS[1], ARGS[2], ARGS[3]
    doc = read(json_file, String)
    if mode == "cpu"
        capture_cpu(out, doc)
    elseif mode == "wall"
        capture_wall(out, doc)
    elseif mode == "alloc"
        capture_alloc(out, doc)
    elseif mode == "heap"
        capture_heap(out, doc)
    else
        println(stderr, "unknown mode: $mode (expected cpu|wall|alloc|heap)")
        exit(2)
    end
end

main()

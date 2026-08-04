//! Parses and re-renders every Zig source file under a directory, the work
//! `zig fmt` does, using the compiler frontend that ships in the standard
//! library.
//!
//! Arguments: <source directory> <passes>

const std = @import("std");

const max_source_bytes = 16 * 1024 * 1024;

pub fn main(init: std.process.Init.Minimal) !void {
    // tcmalloc replaces malloc under LD_PRELOAD, so the C allocator routes
    // every allocation through the heap profiler.
    const gpa = std.heap.c_allocator;

    var threaded: std.Io.Threaded = .init(gpa, .{});
    defer threaded.deinit();
    const io = threaded.io();

    var args = init.args.iterate();
    _ = args.next();
    const source_path = args.next() orelse return error.MissingSourceDirectory;
    const passes = try std.fmt.parseInt(usize, args.next() orelse "1", 10);

    var source_dir = try std.Io.Dir.cwd().openDir(io, source_path, .{ .iterate = true });
    defer source_dir.close(io);

    var parsed_files: usize = 0;
    var rendered_bytes: usize = 0;

    for (0..passes) |_| {
        var walker = try source_dir.walk(gpa);
        defer walker.deinit();

        while (try walker.next(io)) |entry| {
            if (entry.kind != .file) continue;
            if (!std.mem.endsWith(u8, entry.basename, ".zig")) continue;

            const source = try entry.dir.readFileAllocOptions(
                io,
                entry.basename,
                gpa,
                .limited(max_source_bytes),
                .of(u8),
                0,
            );
            defer gpa.free(source);

            var tree = try std.zig.Ast.parse(gpa, source, .zig);
            defer tree.deinit(gpa);
            if (tree.errors.len > 0) continue;

            const formatted = try tree.renderAlloc(gpa);
            defer gpa.free(formatted);

            parsed_files += 1;
            rendered_bytes += formatted.len;
        }
    }

    std.debug.print("parsed {d} files, rendered {d} bytes\n", .{ parsed_files, rendered_bytes });
}

//! Parses and re-renders every Zig source file under a directory, the work
//! `zig fmt` does, using the compiler frontend that ships in the standard
//! library. The same workload as `profile.zig`, written against the Zig 0.15
//! standard library, which predates `std.Io`.
//!
//! Arguments: <source directory> <passes>

const std = @import("std");

const max_source_bytes = 16 * 1024 * 1024;

pub fn main() !void {
    // tcmalloc replaces malloc under LD_PRELOAD, so the C allocator routes
    // every allocation through the heap profiler.
    const gpa = std.heap.c_allocator;

    var args = try std.process.argsWithAllocator(gpa);
    defer args.deinit();
    _ = args.next();
    const source_path = args.next() orelse return error.MissingSourceDirectory;
    const passes = try std.fmt.parseInt(usize, args.next() orelse "1", 10);

    var source_dir = try std.fs.cwd().openDir(source_path, .{ .iterate = true });
    defer source_dir.close();

    var parsed_files: usize = 0;
    var rendered_bytes: usize = 0;

    for (0..passes) |_| {
        var walker = try source_dir.walk(gpa);
        defer walker.deinit();

        while (try walker.next()) |entry| {
            if (entry.kind != .file) continue;
            if (!std.mem.endsWith(u8, entry.basename, ".zig")) continue;

            const source = try entry.dir.readFileAllocOptions(
                gpa,
                entry.basename,
                max_source_bytes,
                null,
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

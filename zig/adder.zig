const std = @import("std");

pub fn main() !void {
    var stdin_buffer: [100]u8 = undefined;
    var stdin_reader = std.fs.File.stdin().reader(&stdin_buffer);
    const reader = &stdin_reader.interface;

    var stdout_buffer: [100]u8 = undefined;
    var stdout_writer = std.fs.File.stdout().writer(&stdout_buffer);
    const stdout = &stdout_writer.interface;

    const line = try reader.takeDelimiterExclusive('\n');

    var iter = std.mem.splitScalar(u8, std.mem.trim(u8, line, &std.ascii.whitespace), ' ');

    const a = try std.fmt.parseInt(i32, iter.next() orelse return, 10);
    const b = try std.fmt.parseInt(i32, iter.next() orelse return, 10);

    const sum = a + b;
    try stdout.print("{}\n", .{sum});
    try stdout.flush();
}

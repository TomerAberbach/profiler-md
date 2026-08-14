import Foundation
import SwiftParser
import SwiftSyntax

final class KindCounter: SyntaxAnyVisitor {
  var counts: [SyntaxKind: Int] = [:]

  override func visitAny(_ node: Syntax) -> SyntaxVisitorContinueKind {
    counts[node.kind, default: 0] += 1
    return .visitChildren
  }
}

let arguments = CommandLine.arguments
guard arguments.count == 3, let passes = Int(arguments[2]), passes > 0 else {
  FileHandle.standardError.write(Data("usage: profile <directory> <passes>\n".utf8))
  exit(2)
}
let root = arguments[1]

var sources: [String] = []
let enumerator = FileManager.default.enumerator(atPath: root)!
for case let path as String in enumerator where path.hasSuffix(".swift") {
  if let source = try? String(contentsOfFile: root + "/" + path, encoding: .utf8) {
    sources.append(source)
  }
}
sources.sort()

var nodes = 0
var withErrors = 0
for _ in 0..<passes {
  for source in sources {
    let tree = Parser.parse(source: source)
    let counter = KindCounter(viewMode: .sourceAccurate)
    counter.walk(tree)
    nodes += counter.counts.values.reduce(0, +)
    withErrors += tree.hasError ? 1 : 0
  }
}

print("parsed \(sources.count) files x \(passes) passes: \(nodes) nodes, \(withErrors) with errors")

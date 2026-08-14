// swift-tools-version:5.9
import PackageDescription

let package = Package(
  name: "profile",
  dependencies: [
    .package(url: "https://github.com/swiftlang/swift-syntax.git", exact: "601.0.1")
  ],
  targets: [
    .executableTarget(
      name: "profile",
      dependencies: [
        .product(name: "SwiftParser", package: "swift-syntax"),
        .product(name: "SwiftSyntax", package: "swift-syntax"),
      ]
    )
  ]
)

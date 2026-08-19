{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs =
    { nixpkgs, ... }:
    let
      systems = [
        "aarch64-darwin"
      ];

      toolchainFor =
        pkgs:
        let
          # PHP with the Excimer sampling profiler extension enabled.
          phpWithExcimer = pkgs.php.withExtensions ({ enabled, all }: enabled ++ [ all.excimer ]);

          # julia-bin repackages the official Julia binaries, but its
          # installCheckPhase runs Julia's entire stdlib test suite, which
          # takes forever. We only need a working Julia, so skip the check.
          julia = pkgs.julia-bin.overrideAttrs (_: {
            doInstallCheck = false;
          });

          # GHC's cost-centre profiler records a library only when it was
          # compiled the profiling way, so the toolchain ships a GHC that
          # already has aeson's profiling libraries registered.
          ghcWithProfiling = pkgs.haskellPackages.ghcWithPackages (p: [ p.aeson ]);

          # dotnet-trace is a .NET global tool published on NuGet, not a
          # standalone nixpkgs package; build it with buildDotnetGlobalTool so
          # it's pinned in the toolchain instead of `dotnet tool install`ed at
          # capture time.
          dotnet-trace = pkgs.buildDotnetGlobalTool {
            pname = "dotnet-trace";
            version = "8.0.532401";
            executables = "dotnet-trace";
            nugetHash = "sha256-QBmHKujgFYM/kDBcmX3jp0ZnSbkisjhUdbVaNmL/sHI=";
          };
        in
        with pkgs;
        [
          nodejs_22
          deno
          bun
          go
          pprof
          cargo
          rustc
          julia
          dotnet-sdk
          dotnet-trace
          jdk
          kotlin
          phpWithExcimer
          erlang
          elixir
          rebar3
          ghcWithProfiling
          python3
          async-profiler
          qemu
          cdrtools
          cmake
          ninja
          zstd
          git
          curl
          gnutar
          gzip
        ];

      forAllSystems =
        f: nixpkgs.lib.genAttrs systems (system: f { pkgs = import nixpkgs { inherit system; }; });
    in
    {
      devShells = forAllSystems (
        { pkgs }: {
          default = pkgs.mkShell {
            packages = toolchainFor pkgs;

            ASYNC_PROFILER_HOME = "${pkgs.async-profiler}";
            DOTNET_ROOT = "${pkgs.dotnet-sdk}/share/dotnet";

            # Mark the shell so `scripts/generate-inputs` knows it's already
            # inside it and skips re-bootstrapping.
            shellHook = ''
              export PROFILER_MD_INPUT_GENERATION_SHELL=1
            '';
          };
        }
      );
    };
}

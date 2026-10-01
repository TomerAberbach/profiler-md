{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    # Julia before 1.12.7 writes `-1` as the element index of every `Memory`
    # edge in a heap snapshot (JuliaLang/julia#60930). Julia comes from this
    # newer pin, so the rest of the toolchain stays on the pin its committed
    # inputs were generated with.
    nixpkgs-julia.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs =
    { nixpkgs, nixpkgs-julia, ... }:
    let
      systems = [
        "aarch64-darwin"
      ];

      toolchainFor =
        { pkgs, juliaPkgs }:
        let
          phpWithExcimer = pkgs.php.withExtensions ({ enabled, all }: enabled ++ [ all.excimer ]);

          # julia-bin's installCheckPhase runs Julia's entire stdlib test
          # suite, and the workloads need only a working Julia.
          julia = juliaPkgs.julia-bin.overrideAttrs (_: {
            doInstallCheck = false;
          });

          # GHC's cost-centre profiler records a library only when it was
          # compiled the profiling way, so the toolchain ships a GHC that
          # already has aeson's profiling libraries registered.
          ghcWithProfiling = pkgs.haskellPackages.ghcWithPackages (p: [ p.aeson ]);

          # dotnet-trace is a .NET global tool published on NuGet.
          # buildDotnetGlobalTool pins it in the toolchain instead of
          # `dotnet tool install`ing it at capture time.
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
          nix
          jq
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
        f:
        nixpkgs.lib.genAttrs systems (
          system:
          f {
            pkgs = import nixpkgs { inherit system; };
            juliaPkgs = import nixpkgs-julia { inherit system; };
          }
        );
    in
    {
      devShells = forAllSystems (
        { pkgs, juliaPkgs }: {
          default = pkgs.mkShell {
            packages = toolchainFor { inherit pkgs juliaPkgs; };

            ASYNC_PROFILER_HOME = "${pkgs.async-profiler}";
            DOTNET_ROOT = "${pkgs.dotnet-sdk}/share/dotnet";

            # Marks the shell, so `scripts/generate-inputs` skips re-executing
            # itself inside it.
            shellHook = ''
              export PROFILER_MD_INPUT_GENERATION_SHELL=1
            '';
          };
        }
      );
    };
}

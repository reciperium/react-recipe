{
  description = "React components for recipe-lang";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    devenv.url = "github:cachix/devenv";
    devenv.inputs.nixpkgs.follows = "nixpkgs";

    gitignore.url = "github:hercules-ci/gitignore.nix";
    gitignore.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs@{ flake-parts, nixpkgs, gitignore, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      debug = true;
      imports = [
        inputs.devenv.flakeModule
      ];

      systems = [ "x86_64-linux" "aarch64-darwin" "x86_64-darwin" ];
      perSystem = { config, self', inputs', pkgs, system, ... }:
        let
          nodejs = pkgs.nodejs_20;
        in
        {
          packages = {
            react-recipe = pkgs.buildNpmPackage {
              name = "react-recipe";
              src = gitignore.lib.gitignoreSource ./.;
              npmDeps = pkgs.importNpmLock {
                npmRoot = ./.;
              };
              npmConfigHook = pkgs.importNpmLock.npmConfigHook;

              nativeBuildInputs = [ nodejs ];
              buildPhase = ''
                ${nodejs}/bin/npm run build --unsafe-perm=true
              '';
              installPhase = ''
                mkdir -p $out
                cp -R dist/* $out
              '';
            };

            storybook-static = pkgs.buildNpmPackage {
              name = "storybook-static";
              src = gitignore.lib.gitignoreSource ./.;
              npmDeps = pkgs.importNpmLock {
                npmRoot = ./.;
              };
              npmConfigHook = pkgs.importNpmLock.npmConfigHook;

              nativeBuildInputs = [ nodejs ];
              buildPhase = ''
                ${nodejs}/bin/npm run build-storybook --unsafe-perm=true
              '';
              installPhase = ''
                mkdir -p $out
                cp -R storybook-static/* $out
              '';
            };
          };

          devenv.shells.default = {
            name = "react-recipe-shell";
            packages = with pkgs; [
              just
              commitizen
              nodejs_20
              prefetch-npm-deps
            ];

            enterShell = ''
              just --list
            '';
          };
        };
    };
}

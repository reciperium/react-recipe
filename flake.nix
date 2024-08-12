{
  description = "React components for recipe-lang";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    devenv.url = "github:cachix/devenv";
    devenv.inputs.nixpkgs.follows = "nixpkgs";

    gitignore.url = "github:hercules-ci/gitignore.nix";
    gitignore.inputs.nixpkgs.follows = "nixpkgs";

    nix-filter.url = "github:numtide/nix-filter";

  };

  outputs = inputs@{ flake-parts, nixpkgs, gitignore, nix-filter, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      debug = true;
      imports = [
        inputs.devenv.flakeModule
      ];

      systems = [ "x86_64-linux" "aarch64-darwin" "x86_64-darwin" ];
      perSystem = { config, self', inputs', pkgs, system, ... }:
        let
          nodejs = pkgs.nodejs_20;
          node_modules = pkgs.stdenv.mkDerivation {
            name = "node_modules";
            src = nix-filter {
              root = ./.;
              include = [
                ./package.json
                ./package-lock.json
              ];
            };
            # HACK: break the nix sandbox so we can fetch the dependencies. This
            # requires Nix to have `sandbox = relaxed` in its config.
            __noChroot = true;
            configurePhase = ''
              # NPM writes cache directories etc to $HOME.
              export HOME=$TMP
            '';
            buildInputs = [ nodejs ];
            buildPhase = ''
              ${nodejs}/bin/npm ci
            '';

            installPhase = ''
              mkdir $out
              mv node_modules $out/node_modules
            '';
          };
        in
        {
          packages = {
            react-recipe = pkgs.stdenv.mkDerivation {
              name = "react-recipe";
              src = gitignore.lib.gitignoreSource ./.;
              nativeBuildInputs = with pkgs; [
                nodejs
              ] ++ lib.optionals stdenv.isDarwin [
                libiconv
                darwin.apple_sdk_11_0.frameworks.Cocoa
                darwin.apple_sdk_11_0.frameworks.CoreServices
                darwin.apple_sdk_11_0.frameworks.Security
              ];

              # Normally required by autotools, but in this case we configure env variables for the
              # upcoming build phase.
              configurePhase = ''
                # NPM writes cache directories etc to $HOME.
                ln -sf ${node_modules}/node_modules node_modules
                export HOME=$TMP
              '';

              # Compiling phase
              buildPhase = ''
                ${nodejs}/bin/npm run build
              '';

              installPhase = ''
                mv dist $out
              '';
            };

            storybook-static = pkgs.stdenv.mkDerivation {
              name = "react-recipe";
              src = gitignore.lib.gitignoreSource ./.;
              nativeBuildInputs = with pkgs; [
                nodejs
              ] ++ lib.optionals stdenv.isDarwin [
                libiconv
                darwin.apple_sdk_11_0.frameworks.Cocoa
                darwin.apple_sdk_11_0.frameworks.CoreServices
                darwin.apple_sdk_11_0.frameworks.Security
              ];

              # Normally required by autotools, but in this case we configure env variables for the
              # upcoming build phase.
              configurePhase = ''
                # NPM writes cache directories etc to $HOME.
                ln -sf ${node_modules}/node_modules node_modules
                export HOME=$TMP
              '';

              # Compiling phase
              buildPhase = ''
                ${nodejs}/bin/npm run build-storybook
              '';

              installPhase = ''
                mv dist $out
              '';
            };
          };

          devenv.shells.default = {
            name = "react-recipe";
            packages = with pkgs; [
              just
              commitizen

            ] ++ [ nodejs ] ++ lib.optionals stdenv.isDarwin [
              libiconv
              darwin.apple_sdk_11_0.frameworks.Cocoa
              darwin.apple_sdk_11_0.frameworks.CoreServices
              darwin.apple_sdk_11_0.frameworks.Security
            ];

            enterShell = ''
              just --list
            '';
          };
        };
    };
}

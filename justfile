# run development environment
run:
    npm run dev

# build the npm package
build:
    npm run build

# build the storybook static files
build-storybook:
    npm run build-storybook

# publish the npm package
publish:
    npm publish

# increase the version of the npm package
bump:
    cz bump --yes

# build nix expression for the npm package
nix-build:
    nix build --fallback --option sandbox relaxed .#react-recipe --out-link dist

# build nix expression for the storybook static files
nix-build-storybook:
    nix build --fallback --option sandbox relaxed .#storybook-static --out-link static

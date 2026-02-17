# run development environment
run:
    npm i
    npm run dev

# build the npm package
build:
    npm run build

# build the storybook static files
build-storybook:
    npm run build-storybook

# publish the npm package
publish:
    npm publish --provenance --access public

# increase the version of the npm package
bump:
    cz bump --yes

# build nix expression for the npm package
build-nix:
    nix build --fallback --option sandbox relaxed .#react-recipe

# copy package from the nix store
copy-nix-build:
    mkdir -p dist
    cp -r result/* dist

# build nix expression for the storybook static files
build-nix-storybook:
    nix build --fallback --option sandbox relaxed .#storybook-static --out-link storybook-static

# copy storybook from the nix store
copy-nix-storybook-build:
    mkdir -p dist
    cp -r storybook-static/* static

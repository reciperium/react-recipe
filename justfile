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

#!/bin/sh
yarn tsc

rm -rf ./dist/lambda/package.json
node -e '
    const package = require("./package.json");
    package.main = "index.js";
    delete package.devDependencies;
    console.log(JSON.stringify(package, null, 2))
' >> ./dist/lambda/package.json
cp -avr ./.ask/ ./dist/
cp -avr ./skill-package/ ./dist/
cp -avr ./ask-resources.json ./dist/ask-resources.json
cp -arv ./index.js ./dist/lambda/index.js

#!/bin/sh
yarn tsc

cp -avr ./package.json ./dist/lambda
cp -avr ./.ask/ ./dist/.ask/
cp -avr ./skill-package/ ./dist/skill-package/
cp -avr ./ask-resources.json ./dist/ask-resources.json
cp -arv ./index.js ./dist/lambda/index.js
cp -arv ./package.json ./dist/package.json

#!/bin/sh
yarn tsc

cp -avr ./package.json ./dist/lambda/
cp -avr ./.ask/ ./dist/
cp -avr ./skill-package/ ./dist/
cp -avr ./ask-resources.json ./dist/ask-resources.json
cp -arv ./index.js ./dist/lambda/index.js

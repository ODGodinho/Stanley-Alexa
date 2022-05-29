#!/bin/sh

yarn build

cd dist/

git add .
git commit -m "build(Deploy): $1"
git push --force
git push origin origin/dev

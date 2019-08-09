#!/bin/env bash

yarn site:doc
git checkout gh-pages
mv -f docs/* ./
git add .
git commit -m "update site:doc"
git push --set-upstream origin gh-pages
git checkout -
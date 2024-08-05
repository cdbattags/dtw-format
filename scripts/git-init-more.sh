#!/usr/bin/env bash

git init .
curl -o .gitignore --fail --show-error --silent --location https://raw.github.com/github/gitignore/master/$1.gitignore
git add .gitignore && git commit -m "added gitignore from GitHub"

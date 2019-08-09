#!/bin/env bash

# major: 主版本号
# premajor: 预备主版本
# minor: 次版本号
# preminor: 预备次版本
# patch: 修订号
# prepatch: 预备修订版
# prerelease: 预发布版本

npm version $1 && \
    git push
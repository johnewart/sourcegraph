#!/bin/bash 

curl -sL -o hadolint "https://github.com/hadolint/hadolint/releases/download/v1.15.0/hadolint-$(uname -s)-$(uname -m)" && chmod 700 hadolint
git ls-files | grep Dockerfile | xargs ./hadolint


#!/bin/sh

echo 'TTTTTTTTTTTTTT'
echo $1
echo 'TTTTTTTTTTTTTT'

GIT_AUTHOR_DATE=$1 GIT_COMMITTER_DATE=$1 git commit --allow-empty -m 'inception contributor'

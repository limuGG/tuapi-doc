#!/usr/bin/env bash
script_name=$(basename "$0")
remote_branch=master
git_init() {
    remote_url=$(git config --local --get remote.origin.url)
    set -vuex
    rm -rf ./.git && git init
    git checkout --orphan latest_branch
    git add -A .
    git config user.name "limuGG" && git config user.email "-"
    git commit -am "Initial commit"
    test -n "$remote_url" && git remote add origin "$remote_url"
    if test $# -eq 0 || test -z "$1" || test -z "$remote_url"; then
        git checkout -b $remote_branch
        git branch -D latest_branch
        set +vuex
    fi
    if test "$1" = 'reset'; then
        echo "git reset"
        git checkout -b $remote_branch
        git branch -D latest_branch
        git fetch
        git branch --set-upstream-to=origin/$remote_branch $remote_branch
        set +vuex
    fi
    if test "$1" = 'pull'; then
        echo "git pull"
        git fetch
        git checkout -b $remote_branch origin/$remote_branch
        git branch -D latest_branch
        git pull
        set +vuex
    fi
}
git_push() {
    git_init "reset"
    git push -f origin $remote_branch
    git pull
}
git_add() {
    git add -A .
    git commit -am "update"
}
run() {
    echo "$script_name"
    case $1 in
    init) shift 1 && git_init "$@" ;;
    reset) shift 1 && git_init "reset" ;;
    pull) shift 1 && git_init 'pull' ;;
    push) shift 1 && git_push "$@" ;;
    add) shift 1 && git_add "$@" ;;
    *) echo "unknown command: $1" ;;
    esac
}
run "$@"
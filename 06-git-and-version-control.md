---
title: Git and Version Control Fundamentals
category: Software Development Tools
id: SE-GIT-001
---

# Git and Version Control Fundamentals

Version control records changes to files over time. It allows developers to track history, restore earlier versions, collaborate, compare changes, and experiment safely.

## Git

Git is a distributed version control system. Each developer normally has a complete local copy of the repository and its history.

## Repository

A repository is a project folder managed by Git.

Create a repository:

    git init

Clone an existing repository:

    git clone REPOSITORY_URL

## Git Status

The following command displays modified, staged, and untracked files:

    git status

## Staging Changes

Stage one file:

    git add filename

Stage all current changes:

    git add .

## Commits

A commit is a saved snapshot of staged changes.

    git commit -m "Add login validation"

Commit messages should clearly describe the purpose of the change.

## Commit History

Display detailed history:

    git log

Display a shorter history:

    git log --oneline

## Branches

A branch is an independent line of development.

Create and switch to a new branch:

    git switch -c feature-name

Switch to an existing branch:

    git switch feature-name

List branches:

    git branch

## Merging

Merging combines changes from one branch into another.

    git switch main
    git merge feature-name

## Merge Conflicts

A merge conflict occurs when Git cannot automatically combine competing changes.

To resolve a conflict:

1. Open the conflicting file.
2. Select the content that should remain.
3. Remove the conflict markers.
4. Stage the corrected file.
5. Commit the resolution.

## Remote Repositories

A remote repository is stored on another system, such as GitHub.

View configured remotes:

    git remote -v

Add a remote:

    git remote add origin REPOSITORY_URL

## Push

Push uploads local commits to a remote repository.

    git push origin main

For a new branch:

    git push -u origin feature-name

## Pull

Pull downloads and integrates remote changes.

    git pull origin main

## Fetch

Fetch downloads remote information without automatically merging it.

    git fetch origin

## Gitignore

The `.gitignore` file specifies files and folders that Git should not track.

Typical entries include:

    node_modules/
    .env
    *.log
    data/*.db

Passwords, API keys, and environment variables should never be committed.

## Restoring Changes

Discard unstaged changes:

    git restore filename

Remove a file from the staging area while keeping its changes:

    git restore --staged filename

Reverse an earlier commit by creating a new commit:

    git revert COMMIT_ID

## Git Best Practices

- Create small and focused commits.
- Write meaningful commit messages.
- Use branches for features and fixes.
- Review changes before committing.
- Keep secret information outside the repository.
- Keep the main branch stable.
- Resolve merge conflicts carefully.

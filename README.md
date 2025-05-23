git init
// initializes a local folder into a Git Repository
// The repository stores all your project's history and versions.

git status
// An untracked file is any file in your project folder that Git is not yet tracking.
// These are files you've created or copied into the folder, but haven't told Git to watch.
// To make a file tracked, you need to add it to the staging area

git pull
// pulls changes from remote to local device

STAGING COMMANDS - to select what changes you want to commit into memory
git add . 
// adds all the files
git add <file> - Stage a file
git add --all or git add -A - Stage all changes
git status - See what is staged
git restore --staged <file> - Unstage a file


git commit -m "Whatevermessage, e.g, Initial Commit"
// It records a snapshot of your files at a certain time, with a message describing what changed.

git branch -M main
// renames the branch from default ("master") to "main"

CREATING NEW BRANCHES
git branch branch_name
git checkout branch_name 
// changes from current branch, e.g. main, to branch_name
git checkout -b branch_name
// both creates and changes to the new branch

MERGES 
git merge branch_name
// Usually, you first switch to the branch you want to merge into (often main or master)
git branch -d branch_name
// once you no longer need the branch
there can be a clash sometimes, doing it this way.

MERGES #2
git push origin branch_name
// pushes the branch that only existed locally, unto the remote repository
look onto github.com
create pull request to merge branch to main

git remote add origin git@github.com:jwangr/module1.git
// destination of pushed codes from local to github

git push -u origin main
// pushes the commands onto Github

git pull
// pulls versions from the cloud repository

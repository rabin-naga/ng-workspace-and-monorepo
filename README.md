# NgWorkspaceAndMonorepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## To merge changes only of app-one project from dev branch to main branch, you can follow these steps:

<b> Step 1: Checkout the target branch </b> <br/>
First, switch to the branch where you want to merge the changes. <br/>

- git checkout `<target-branch>`
  <br/> For eg: <b> git checkout main </b>

<br/>
<hr>
<b> Step 2: Use git checkout to checkout only the specific project </b> <br/>
You can use git checkout with a path to apply changes from a specific directory (project) on another branch:

- git checkout `<source-branch>` -- `path/to/project`
  <br/><i> This will stage the changes from path/to/project from source-branch into your working directory on target-branch. </i>
  <br/> For eg: <b>git checkout dev -- projects/app-one </b>
  <br/><i> This will stage the changes from app-one project only to main branch. </i>

<br/>
<hr>
<b>Step 3: Commit the changes</b>
<br/>After checking out the specific project, you need to commit the changes.

- git add `path/to/project`
  <br/> For eg: <b>git add projects/app-one</b>
  <br/>
- git commit -m "Merged changes from project X from source-branch"
  <br/> For eg: <b>git commit -m "App one dev to main "</b>

<br/>
<hr>
<b>Step 4: Push the changes</b>
<br/>Finally, push the changes to the remote repository.

- git push origin `<target-branch>`
  <br/> For eg: <b>git push origin main</b>

# BDL-DEV-CLIENT
A OSS repo for contributions to the Bad Date List project
##

# Contributor Guide
##
#### First Steps:
 * Fork this repo, then clone your fork locally (do all work on your own local forked clone)
 * Set an upstream remote to this repo, keep your origin branch pointed at your fork.
 * Go to [This Repo](https://github.com/DianaVashti/BDL-DEV-API) and follow the installation instructions to set up the API for this web-application.

Tips:
 * Run `git fetch --all` to see if there are any new changes to upstream master branch so you know if you need to rebase your branch when you are ready to push up a PR.
 * While this repo does not need any special files specific to your local fork to run, the API does, do don't forget about those steps!

##
#### How to contribute:

##### Picking an Issue:
Once you have forked this repo, and cloned your fork, the first step is to pick an issue and communicate this with your product manager (Di). Once the issue has been assigned to you, you can move to step two: creating a branch!


##### Creating a Branch
Once you have an issue the next step is to create a branch for your work/issue. Your branch should be named as follows:
[issue#]-[super-concise-description]

Here's an example: `112-admin-login-bug`

This way I know that the work for this PR on the branch "112-admin-login-bug" relates to issue 112 and both the code and the issue should have something to do with a bug with admin logins.

#### Di's Rules for PR submission:
 * Squash your commits to one long-as-it-has-to-be commit.
   * The first sentence should be short enough to serve as the title of the PR without flowing over in to the the rest on github. The rest should describe the work you did, and what issue it resolves, and if there are specific steps I need to take to replicate the bug in it's current and then resolved state, please include that information as well. Write in the present tense. (e.g. "Fixes Admin Login Bug. (<--Title of PR) (Body of PR -->) Moves the AJAX call to the API out of the `componenetWillUnmount()` function and attaches it to the `onClick()` method of the Submit button")
 * Follow the guideline for how to name your branches.
 * Let me know when you submit a PR and include a link to the PR URL. If I don't acknowledge receiving it remind me after a day or two, I am forgetful.
 * Keep your local branch and work until I confirm with you that I am merging your work for deployment.
 	* It is likely I will have some comments or requests for changes that I will leave as a code review on your PR on github.
 * Only submit PRs for issues I have already assigned to you. If you want to take on an issue and it doesn't seem to be claimed, just ask, and I will add you to the issue on github.

##
# Disclaimer:
This app is meant to serve the sex-worker communities of the Bay Area. I ask that if you have been invited to work on this project and you do not agree with the work being done that you respect that this is a project that has been requested by a deeply underserved community of people and take care not to harm or jeopardize this resource and simply do not participate in this project.

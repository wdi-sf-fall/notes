##Getting Started

**Resources**

[Git](http://git-scm.com/book/en)

**Objectives**

- Define version control systems
- Identify main git commands to manage files
- Distinguish bewteen local and remote repositories
- Create git repository on github and collaborate with others 
- Show how to setup and use git branches
- Apply git commands and github UI to create and manage repositories from scratch

**Motivation**

Have you ever worked on a paper or any document collaboratively with others? What have you noticed? What was the workflow like? What did work, what didn't?

Now enter software programming. Programming is a highly team based activity. That's why I love programming: A project is always more fun when you’ve got friends working with you. Sometimes very large teams work on a single project. Google: 'how many engineers work on Mac OS".

**What is version control, and why should you care?**

So how do you collaborate in software projects, and what are some useful workflows and best practices?

In the most fundamental way, version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

More specifically, a VCS allows you to:

- revert files back to a previous state
- revert the entire project back to a previous state
- review changes made over time
- collaborate on a set of files with others!!
- see who last modified something that might be causing a problem

Plus it functions as a backup system, a safe place for all your work. Using a VCS means that if you screw things up or lose files, you can generally recover easily. In addition, you get all this for very little overhead.

There are many VCS, and git has become the VCS of choice for most software teams. Do you know other VCS?

##Definitions

Git and github provide a framework, tools and workflows for collaboration.

**git**

	git is a version control system

**github**

It's a social network build around git. I has has completely changed the way we, as programmers, work. GitHub is now the largest online storage space of collaborative works.

	git and github together is a distributed version control system

[DVCS diagram](http://git-scm.com/figures/18333fig0103-tn.png)

We're going to talk about git first. git is local (Computer A). Nearly every operation is local. Most operations in Git only need local files and resources to operate - generally no information is needed from another computer on your network.

Github is the "Server Computer", we get to it in the second part of this lecture.

##Git

A word about folder management.

Create "Code" folder in your home diretcory. This is the place for all source code that you create at GA (projects, labs, homework). Let's talk about folder structure.

Options:

* By time
* By project
* A combination of both

Discuss approach. What works for you? I recommend that you decide on a structure in the first week and stick to it.

Create file that contains your name and contact info. Example:

	~/Code/week0/git_intro/my_contact.txt

This is our first 'project'. Let's put it under version control. First, *cd* into git_intro folder. 

Check that git is installed

  	git --version

The first step is creating a version database, i.e. a repository

  	git init

Now add files to the repo - this is also called staging. You can add files individually or the entire directory, including sub folders.

  	git add my_contact.txt 
  	
  	git add . (to add everything in the directory)

The files and folders are now under git management, or tracked.

Let's say you're done for now and want to save a version.

  	git commit -m 'initial commit'

**Let's look of what we just did**

[Git states](http://git-scm.com/figures/18333fig0106-tn.png)

- working directory; that's the project's root folder (git_intro)
- staging area: now file is tracked in git (virtual)
- git repository: a snapshot of your committed work (where is it?)

Now let's go and change the and check status:

  	git status my_contact.txt

check differences, what changed since last commit

  	git diff my_contact.txt

Now *stage* change (note: you use the *add* command to begin tracking new files or to stage files)

  	git add my_contact.txt

Now commit first change. Your staging area is set up the way you want it, you can commit your changes. Remember that anything that is still unstaged - any files you have created or modified that you haven't run *git add* on since you edited them - will not be committed.

  	git commit -m 'comment'

**Note Staging is optional**: Although it can be amazingly useful for crafting commits exactly how you want them, the staging area is sometimes a bit more complex than you need in your workflow. If you want to skip the staging area, Git provides a simple shortcut. Providing the -a option to the git commit command makes Git automatically stage every file that is already tracked before doing the commit, letting you skip the git add part.

Let's try this out:

- Create a new file in git_intro
- Add it to git (start tracking it)
- git status
- change the file
- git status - discuss the output
- git diff - there are two versions
- commit the latest, skip staging
		
		git commit -a -m'a commit skipping staging'
	
check log - shows the version history, let's take a look

  	git log <file>

getting help

  	git help <command> - super useful

**My personal workflow looks something like this**

- Do some programming.
	- git status <file> or . to see which files I changed.
	- git diff <file> or . to see exactly what I modified.
	- git commit -m 'message' <file> or . to commit

Remember that each file in your working directory can be in one of two states: tracked or untracked. Tracked files are files that were in the last snapshot; they can be unmodified, modified, or staged. Untracked files are everything else.

Now lets blow away out work!

	rm *.*

Let's get it back

	git checkout .
				
Let's delete a file for good

  	git rm <file>
  	git commit -a -m'deleted file'

**Note (important): Git repositories may not contain other git repositories.**

##Github

Now, everything is still local, on your computer.

So far we have looked solely at local repositories, remember most of what you do in git is local. However, in order to share your code and collaborate, you need to create a remote repository.

Remote repositories are versions of your project that are hosted on the Internet or network somewhere. You can have several of them, each of which generally is either read-only or read/write for you. Collaborating with others involves managing these remote repositories and pushing and pulling data to and from them when you need to share work. Plus: remote repositories functions as backups, they cannot get lost, like your laptop. It's like saving 'in the cloud'.

Enter Github - a place to host and share remote repositories.

Go to github.com and explore. Some interesting repositories:

- https://github.com/ruby - ruby source code
- https://github.com/facebook - facebook on github
- https://github.com/google - google on github

Now check git configuration:

- git config --global user.name
- git config --global user.email
- git config -l | grep user

Ok, good to go. Let's put our local repo on your github.

Create repo, name it 'git_intro' (it could have any name, but why not be consistent?)

  	git remote add origin git@github.com:wdi-sf-fall/git_intro.git

Reads: *Link the remote repository git_intro to my local repo/workspace. The remote repo shall be known as 'origin'*

Push changes to remote/github - you may have to authenticate. Note: you can setup password caching [see here](https://help.github.com/articles/set-up-git)

	  git push origin master

Reads: *Upload the code in my local repository, which is known as master, to github (origin)*

Check if changes made it to github. Now make a local change. **5 min**

  	make change
  	git add .
	git commit -m 'my comment' .
	git push origin master

Did the changes make it to github?

Let's be adventurous. Delete the git_intor folder on your local computer/

	rm -rf git_intro 

... and get it back from github:

	git clone ... (grab url from git repo page, either SSH or HTTPS)


###Activity (15 min)

The real power of Git comes out when you are collaborating with others on a project.

If you own a repo, you can ask others to collaborate with you as contributors.

Get into pairs, one is A the other is B

A makes B collaborator on their repository

  Github -> Repos page ->Settings > Collaborators

B clones repository of A on to their local machine

  	git clone <repo>

B makes a change

  	git commit -m'a comment' <file>
  	git status <file>
  	git push origin master

A picks up changes

  	git pull origin master

This is a very simplistic workflow. In the real world, things are a bit more complex and we will get there in time.

##Branching

The master branch is where we've currently been working. Normally this branch is reserved for production code, meaning that it is ready to be put on production servers for the whole world to use. Instead, development is normally done on other branches. Currently there are master branches both locally and remotely.

Use case: Let's say you need to work on a larger feature that takes about a week, you want to create a separate code branch and start work there. This is called 'topic branch'. The idea is that you want to keep a clean, production ready master branch at all time. Why? Let's say a severe bug was discovered on the live web site, pointy haired boss asks you to fix it. You Create another branch from the clean master branch, fix the bug and merge the fix back to master.

List of branches:

  	git branch

Just like in a tree, you can create a branch off an existing branch.

	git branch development

Now that a new branch has been created, let's move to it.

  	git checkout development
  	git checkout -b development (create and switch at the same time)

Notice that the branch has changed. What was in master? Your files should also show up in the development branch because it was branched from the master. Check it using ls.

Ok, let's start working in this branch. Please go ahead an make a change, modify a file.

Commit the change and check git status.

If clean, switch back to 'master'

  	git checkout master

Now that we are back in master, we have to merge the changes form the dev branch back to master. Remember, master is our production branch, we always push to github from master.

check which branch you are in:

  	git branch

now merge development branch:

  	git merge development

This should succeed (happy path). Now that master is clean, push it to Github.

Note: for lab assignments and mini projects, using branches is overkill. It's fine to work in the master branch. However, when you get to larger projects, branches become your friend.

####Activity 2 (15 min)

[Lab 2](https://gist.github.com/neurosaurus/2b5013313c2fa28eab89)






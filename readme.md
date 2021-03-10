# Minno Suire doc site

This page covers editing and extending this doc site.

0.  Install Hugo, folling the instructions [here](https://gohugo.io/getting-started/installing/).  Also [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you need to.

1.  Get a copy of the docsite [here](https://github.com/minnojs/docsite).  Download it using git, such as with `git clone https://github.com/minnojs/docsite.git`

2.  From the command line in the docsite folder, run `git submodule update --init --recursive` to download the Hugo theme used by the docsite.

2.  You can read a guide on using the Hugo docsy theme that our doc site makes use of [here](https://www.docsy.dev/).  In general you will be editing files in the content subfolder.  Each folder in that is one layer of the nested sidebar menu, with the _index.md file inside it for the html that appears when you click on that menu item.  Those files will have a weight at the top that determines their order in the menu: the pages with the lowest weight appear first.

3.  To start the server, from the command line in the docsite folder, run `hugo server -t docsy --baseURL=localhost/docsite` .  Then you should be able to go to `http://localhost:1313/docsite/` in your browser and view the site.  It should auto update the pages when you edit them, although you may have to restart to see changes to the sidebar menu.  press ctrl/command+c in the command line window when you are ready to shut it down.

4.  Run `env HUGO_ENV="production" hugo -t docsy` in the command line in the docsite folder to compile it when you are finished.  Then the generated site will appear in the docs folder in the docsite directory.


Using git:

1.  After you have [installed git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), run `git checkout https://github.com/minnojs/docsite.git`

2.  Make your edits and test them.

3.  In your docsite folder, run `git pull` to make sure that there are no other remote updates to the docsite, then run `git add .`, followed by `git commit -m "comment describing your updates to the docsite"` and finally `git push origin master` .  

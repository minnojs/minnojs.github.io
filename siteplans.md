Recursion through all files/directories

copy any non identified file (html/css)
highlight using prism.jd (part of the layout)
md => marked + fixes?
    - upgrade links to use github style glyphs (already do that with marked).
    - possibly parse front matter, alternatively parse the md itself like lhorie (currently we only have title and subtitle).
    - rename to .html
    - toc gets transported into the menu like lhorie
    - api can and should be broken into separate files?
js =>
    - copy
    - have a universal playground that we can allways use

each dir has a menu.md
if it is not found the dir tree is climbed up to us a parent menu
all links should be translated to absolute links (like lhorie does) - maybe just decide that only top directories get a menu


leave copying of libs, dist to bash.

documentation as part of the main repository.
rendered into docs which is gitignored and holds the gh-pages branch (broken into versions)
I don't want the main repository to inflate too much with built files.

lhorie is a genious

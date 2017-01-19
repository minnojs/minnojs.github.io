var fs = require('fs');
var marked = require('marked');

var layout = fs.readFileSync('landing/layout.html', 'utf-8');
var markdown = fs.readFileSync('landing/landing.md', 'utf-8');
var quest = fs.readFileSync('landing/rosenberg.js', 'utf-8');
var time = fs.readFileSync('landing/stroop.js', 'utf-8');
var manager = fs.readFileSync('landing/mgr.js', 'utf-8');

var body = marked(markdown, {renderer: getRenderer()})
    .replace(/\[quest\]/, quest)
    .replace(/\[time\]/, time)
    .replace(/\[manager\]/, manager);

var index = layout.replace(/\[body\]/, body)

fs.writeFileSync('index.html', index, 'utf-8');

function getRenderer(){
    var renderer = new marked.Renderer();

    renderer.heading = function (text, level) {
        // from https://github.com/thlorenz/anchor-markdown-header/blob/master/anchor-markdown-header.js
        var escapedText =  text.replace(/ /g,'-')
            .toLowerCase()
            // escape codes
            .replace(/%([abcdef]|\d){2,2}/ig, '')
            // single chars that are removed
            .replace(/[\/?!:\[\]`.,()*"';{}+=<>~\$|#@]/g,'');

        return [
            '<h' + level + '>',
            '<a name="' + escapedText + '" class="header-link" href="#' + escapedText + '">',
            '<span></span>',
            '</a>',
            text,
            '</h' + level + '>'
        ].join('');
    };

    return renderer;
} 

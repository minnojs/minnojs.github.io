var fs = require("fs")
var landing = fs.readFileSync("landing/index.html", "utf-8")
var quest = fs.readFileSync("landing/rosenberg.js", "utf-8")
var time = fs.readFileSync("landing/stroop.js", "utf-8")
var manager = fs.readFileSync("landing/mgr.js", "utf-8")
var index = landing
    .replace(/\[quest\]/, quest)
    .replace(/\[time\]/, time)
    .replace(/\[manager\]/, manager);

fs.writeFileSync('index.html', index, "utf-8");


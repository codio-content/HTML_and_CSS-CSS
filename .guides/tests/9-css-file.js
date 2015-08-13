var fs = require('fs');
var cheerio = require('cheerio');

var errors = [];
var basepath = '/home/codio/workspace';
var indexpath = basepath + "/css-file/index.html";


if (!fs.existsSync(indexpath)) {
    errors.push("index.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(indexpath));
  
    var $link = $("link")

    if (!($link.length == 1 && $link.attr('rel')=="stylesheet" && $link.attr("href") == "style.css" && $link.attr("type") == "text/css" && $link.parent()[0].tagName == "head" )) {
        errors.push("The link to the stylesheet is incorrect");
    }
}


if( errors.length <= 0 ) {
  process.stdout.write('Well done!!!\n');
  process.exit(0);
}
else {
  process.stdout.write(errors.join("\n"));
  process.stdout.write('\n');
  process.exit(1);
}


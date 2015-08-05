var fs = require('fs');
var util = require('util');
var cssutils = require('codio-css-utils');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/10-alignment/style.css";


var ast = cssutils.get_ast(stylepath);

if (ast.ast == undefined) {
    errors.push(stylepath + " doesn't exist or cannot be parsed");   
} else {
    if (!ast.selector_has_property("h1","text-align","center")) {
      errors.push("h1 doesnt have text-align center");
    }
  
    if (!ast.selector_has_property("h2","text-align","center")) {
      errors.push("h2 doesnt have text-align center");
    }
  
    if (!ast.selector_has_property("h1","text-decoration","underline")) {
      errors.push("h1 doesnt have text-decoration underline");
    }
  
    if (!ast.selector_has_property("h2","text-decoration","underline")) {
      errors.push("h2 doesnt have text-decoration underline");
    }
  
    if (!ast.selector_has_property("h1","text-transform","uppercase")) {
      errors.push("h1 doesnt have text-transform uppercase");
    }
  
    if (!ast.selector_has_property("h2","text-transform","uppercase")) {
      errors.push("h2 doesnt have text-transform uppercase");
    }
  
    if (!ast.selector_has_property("p","text-align","left")) {
      errors.push("p doesnt have text-align left");
    }
  
    
}

if( errors.length <= 0 ) {
    process.stdout.write('Well done!!!');
    process.exit(0);
}
else {
    process.stdout.write(errors.join("\n"));
    process.exit(1);
}
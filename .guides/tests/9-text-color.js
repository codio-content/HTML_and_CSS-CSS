var fs = require('fs');
var util = require('util');
var cssutils = require('codio-css-utils');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/9-text-color/style.css";


var ast = cssutils.get_ast(stylepath);

if (ast.ast == undefined) {
    errors.push(stylepath + " doesn't exist or cannot be parsed");   
} else {
    if (!ast.selector_has_property("h1","color","red")) {
      errors.push("h1 doesnt have color red");
    }
  
    if (!ast.selector_has_property("h2","color","orange")) {
      errors.push("h2 doesnt have color orange");
    }
  
    if (!ast.selector_has_property("p","color","blue")) {
      errors.push("p doesnt have color blue");
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
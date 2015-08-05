var fs = require('fs');
var util = require('util');
var cssutils = require('codio-css-utils');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/13-font-size/style.css";


var ast = cssutils.get_ast(stylepath);

if (ast.ast == undefined) {
    errors.push(stylepath + " doesn't exist or cannot be parsed");   
} else {
  
    if (!ast.selector_has_property("h1","font-size","400%")) {
      errors.push("h1 doesnt have the correct font size in %");
    }
    
    if (!ast.selector_has_property("h2","font-size","300%")) {
      errors.push("h2 doesnt have the correct font size in %");
    }
    
    if (!ast.selector_has_property("h3","font-size","200%")) {
      errors.push("h3 doesnt have the correct font size in %");
    }
  
    if (!ast.selector_has_property("h4","font-size","100%")) {
      errors.push("h4 doesnt have the correct font size in %");
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
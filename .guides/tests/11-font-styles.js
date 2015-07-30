var fs = require('fs');
var util = require('util');
var cssutils = require('./css_utils.js');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/11-font-styles/style.css";


var ast = cssutils.get_ast(stylepath);

if (ast.ast == undefined) {
    errors.push(stylepath + " doesn't exist or cannot be parsed");   
} else {
    if (!( ast.selector_has_property("i","font-weight","bold") || ast.selector_has_property("i","font-weight","700")) ) {
      errors.push("i doesnt have font-weight bold or 700");
    }
  
    if (!ast.selector_has_property("i","font-style","normal")) {
      errors.push("i doesnt have font-style normal");
    }
  
    if (!(ast.selector_has_property("b","font-weight","normal") || ast.selector_has_property("b","font-weight","400")) ) {
      errors.push("b doesnt have font-weight normal or 400");
    }
  
    if (!ast.selector_has_property("b","font-style","italic")) {
      errors.push("b doesnt have font-style italic");
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
var fs = require('fs');
var util = require('util');
var cssutils = require('./css_utils.js');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/12-font-families/style.css";


var ast = cssutils.get_ast(stylepath);

if (ast.ast == undefined) {
    errors.push(stylepath + " doesn't exist or cannot be parsed");   
} else {
  
    if (! (ast.selector_has_property("h1","font-family","Indie Flower") || ast.selector_has_property("h1","font-family","'Indie Flower'"))) {
      errors.push("h1 doesnt have font-family Indie Flower");
    }
  
    if (! (ast.selector_has_property("h2","font-family","Lobster") || ast.selector_has_property("h2","font-family","'Lobster'"))) {
      errors.push("h2 doesnt have font-family Lobster");
    }
  
    if (! (ast.selector_has_property("h3","font-family","Poiret One") || ast.selector_has_property("h4","font-family","'Poiret One'"))) {
      errors.push("h3 doesnt have font-family Poiret One");
    }
  
    if (! (ast.selector_has_property("h4","font-family","Dancing Script") || ast.selector_has_property("h1","font-family","'Dancing Script'"))) {
      errors.push("h4 doesnt have font-family Dancing Script");
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
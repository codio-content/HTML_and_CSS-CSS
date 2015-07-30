var fs = require('fs');
var jsdom = require('jsdom');


var errors = [];
var box_domain = process.env.CODIO_BOX_DOMAIN;
var fullurl = "http://"+ box_domain + "/14-img-styling/image.html";

jsdom.env(
  fullurl,
  ["http://code.jquery.com/jquery.js"],
  {
    features: {
      FetchExternalResources : ["css"]
    }
  },
  function (err, window) {
     if (err) {
       errors.push("Error loading image.html");
     }
    
    var img = window.$("img")[0];
    
    if (img.style.borderBottomColor != "DarkGreen") {
      errors.push("Bottom border color is not DarkGreen")
    }
    
    if (img.style.bordeLeftColor != "DarkGreen") {
      errors.push("Left border color is not DarkGreen")
    }
    
    if (img.style.borderRightColor != "LightGreen") {
      errors.push("Right border color is not LightGreen")
    }
    
    if (img.style.borderTopColor != "LightGreen") {
      errors.push("Top border color is not LightGreen")
    }
    
    if (img.style.borderStyle != "solid") {
      errors.push("Border style is not solid")
    }
    
    if (img.style.borderWidth != "3px") {
      errors.push("Border width is not 3px : "+img.style.borderWidth )
    }
    
    if( errors.length <= 0 ) {
        process.stdout.write('Well done!!!')
        process.exit(0);
    }
    else {
        process.stdout.write(errors.join("\n"))
        process.exit(1);
    }

    
  }
);




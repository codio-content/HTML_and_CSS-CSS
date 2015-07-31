var fs = require('fs');
var phantom = require('phantom');

var box_domain = process.env.CODIO_BOX_DOMAIN;
var fullurl = "http://"+ box_domain + "/14-img-styling/image.html";
var errors = [];

//console.log(fullurl);

phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open(fullurl, function (status) {
      //console.log("opened ? ", status);
      page.evaluate(function () { 
        
        var errors =  [];
        
        var img = document.querySelector("img");
        var style = getComputedStyle(img,null);
        
        //errors.push(style.borderBottomColor);
        
        var darkgreen = "rgb(0, 100, 0)";
        var ligthgreen = "rgb(144, 238, 144)";

        if (style.borderBottomColor != darkgreen) {
          errors.push("Bottom border color is not DarkGreen")
        }

        if (style.borderLeftColor != darkgreen) {
          errors.push("Left border color is not DarkGreen")
        }

        if (style.borderRightColor != ligthgreen) {
          errors.push("Right border color is not LightGreen")
        }

        if (style.borderTopColor != ligthgreen) {
          errors.push("Top border color is not LightGreen")
        }

        if (style.borderTopStyle != "solid" || style.borderBottomStyle != "solid" || style.borderRightStyle != "solid" || style.borderLeftStyle != "solid") {
          errors.push("Border style is not solid")
        }

        if (style.borderTopWidth != "3px" || style.borderBottomWidth != "3px" || style.borderLeftWidth != "3px" || style.borderRightWidth != "3px") {
          errors.push("Border width is not 3px : "+img.style.borderWidth )
        }

        return errors;
        
      
      }, function (retErrors) {
        
        if (!retErrors) {
          process.stdout.write("There was a problem running the test");
          ph.exit();
          process.exit(1);
        } else {
          if(retErrors.length <= 0 ) {
            process.stdout.write('Well done!!!')
            ph.exit();
            process.exit(0);
          }
          else {
            process.stdout.write(retErrors.join("\n"))
            ph.exit();
            process.exit(1);
          }
        }
        
      });
    });
  });
});







  

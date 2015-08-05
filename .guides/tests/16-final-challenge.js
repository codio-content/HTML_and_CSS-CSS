var fs = require('fs');
var phantom = require('phantom');
var cssutils = require('codio-css-utils');

var box_domain = process.env.CODIO_BOX_DOMAIN;
var fullurl = "http://"+ box_domain + "/16-challenge/index.html";
var jqueryurl = "http://"+ box_domain + "/.guides/tests/jquery.js";
var errors = [];

//console.log(fullurl);


//for some reason border-radius test fails in phantom ?
//I will do it with css utils
var stylepath = "/home/codio/workspace/16-challenge/style.css";
var ast = cssutils.get_ast(stylepath);

if (!ast.selector_has_property_anyvalue("img","border-radius")) {
  errors.push("Images do not have rounded corners");
}


phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open(fullurl, function (status) {
      //console.log("opened ? ", status);
      page.includeJs(jqueryurl, function(){
        page.evaluate(function () { 
        
          var errors =  [];

          var body = document.querySelector("body");
          var body_style = getComputedStyle(body,null);
          
          if (body_style.fontFamily.indexOf("Arial") == -1 || body_style.fontFamily.indexOf("sans-serif") == -1) {
            errors.push("You didnt put font family Arial, sans-serif on all texts.");
          }
          
          var $h1 = $('h1');
          
          if ($h1 && ($h1.length == 1)  && ($h1.text().trim().toLowerCase() == "my big page")) {
            
            var h1 = $h1[0];
            var h1_style = getComputedStyle(h1,null);
            
            var orange = "rgb(255, 165, 0)";
            
            if (h1_style.color != orange) {
              errors.push("You didnt put orange color on the h1.");
            }
            
            if (h1_style.textAlign != "center") {
              errors.push("You didnt center the text in the h1.")
            }
            
            if (h1_style.textTransform != "uppercase") {
              errors.push("You didnt force uppercase on the h1."); 
            }
            
            
          } else {
            errors.push("You didn't put a h1 tag with text 'My big page'.");
          }
          
          var $p = $('p');
          
          if ($p && ($p.length == 2)) {
            
            var blue = "rgb(0, 0, 255)";
              
            var p1 = $p[0];
            var p1_style = getComputedStyle(p1,null);
            if (p1_style.textAlign != "left") {
              errors.push("You didnt left align in the first paragraph.")
            }
            
            if (p1_style.color != blue) {
              errors.push("You didnt put the first paragraph in blue color.")
            }
            
            
            var p2 = $p[1];
            var p2_style = getComputedStyle(p2,null);
            if (p2_style.textAlign != "left") {
              errors.push("You didnt left align in the second paragraph.")
            }
            
            if (p2_style.color != blue) {
              errors.push("You didnt put the second paragraph in blue color.")
            }
            
          } else {
              errors.push("You didnt put 2 paragraphs in the page.")
          }
          
          
          var $img= $('img');
          var cpt = 1;
          
          if ($img && ($img.length == 3)) {
            
            $img.each(function(){
              
              if(!$(this).attr('src')) {
                errors.push("Image #"+cpt+" should have a src attribute.");
              } else {
                if ($(this).attr('src').length < 5) {
                  errors.push("The src attribute of the Image #"+cpt+" is too short.")
                }
              }
              var img = $(this)[0];
              var img_style = getComputedStyle(img,null);
              
              //this fails even if there is actually a border radius
              
              //if ((img_style.borderRadius == "0px") || (img_style.borderRadius == "")) {
              //  errors.push("Image #"+cpt+" should have rounded corners.")
              //}
              
              if (img_style.boxShadow == "none") {
                errors.push("Image #"+cpt+" should have shadows.")
              }
              
              cpt++;
              
            })
            
            
          } else {
            errors.push("You didnt put the 3 images in the page.")
          }


          return errors;


        }, function (retErrors) {
          
          var allerrors = retErrors.concat(errors)

          if (!allerrors) {
            process.stdout.write("There was a problem running the test");
            ph.exit();
            process.exit(1);
          } else {
            if(allerrors.length <= 0 ) {
              process.stdout.write('Well done!!!')
              ph.exit();
              process.exit(0);
            }
            else {
              process.stdout.write(allerrors.join("\n"))
              ph.exit();
              process.exit(1);
            }
          }

        });
        
      });
    });
  });
});







  



function treeview(selector, content, selectedElem) {
    
    var parser = new DOMParser();
    var doc = parser.parseFromString(content, "text/html");

    var tree_content = "";
    
    var parseElement = function(elem){
        if (elem.tagName.toLowerCase() == selectedElem.toLowerCase()) {
            tree_content+='<a href="#" class="selected"> &lt;'+elem.tagName+'&gt;</a>'
        } else {
            tree_content+='<a href="#"> &lt;'+elem.tagName+'&gt;</a>'
        }
    }
    
    var parseChildren = function(elem){
        var enfants = elem.children;
        
        
        if (!enfants) {
            tree_content+='<li>';
            parseElement(elem);            
            tree_content+='</li>';
            
        } else {
            
            tree_content+='<li>';
                parseElement(elem);
                
                if (enfants.length > 0) {
                    tree_content+='<ul>';

                    for (var i = 0; i < enfants.length; i++) {
                        parseChildren(enfants[i]);  
                    }

                    tree_content+='</ul>';
                }
                    
            tree_content+='</li>';
            
        }
        
    }
    
    
    parseChildren(doc.documentElement);
    
    $(selector).html("<ul>"+tree_content+"</ul>");
}

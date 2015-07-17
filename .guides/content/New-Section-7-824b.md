|||definition
# CSS : Cascading Style Sheet

It is a standard language to define and attach visual styles to the elements of an HTML document. So it is a style sheet that you attach to a document to style it.

It is composed of 2 parts :

## The style definition

To define visual properties of HTML elements, example : 
```css
color:red;
font-size:10px;
margin:10px;
```
    
## The selector

To tell the browser which elements these style will apply to, example :

```css
p {
    //all the style definitions inside here 
    //will be applied to the <p> tags in the document.
}

h1 {
    //all the style definitions inside here 
    //will be applied to the <h1> tags in the document.
}
```

We will come back later on term "cascading" in the name, but simply it allow us to "cascade" multiple styles to an element.

|||

# Where do we put our style ?
There are 3 options :

* In a separate CSS file, that we will reference from our HTML document.
* Inside `<style>  </style>` tags in the head of our HTML document.
* Directly on a HTML tag as a `style="..."` attribute, and then it won't require a selector as it is already attached to a tag.

Putting style attributes directly on the html tags, as in the 3rd option defeats the purpose of css which was to separate the styling from the structure of the document, and so is rarely used, except for specific cases as we will see in a later unit.

In the next two sections we will see how to use the 2 first options to add some style to our pages!
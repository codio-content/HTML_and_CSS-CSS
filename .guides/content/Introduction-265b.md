# Styling your content with CSS

Until now we have been structuring our content with html tags. This is a title, this is a paragraph, this is an image. We have not really paid attention to the look and feel of our pages. Nevertheless, in today's web, the visual parts of a web page have been getting better and more complex. The visual has become a critical part to a site's success.

Historically there was only HTML, but rapidly the people creating HTML pages discovered that they were repeating the same tags over and over again to apply the same styling to different elements. The process was tedious and repetitive and the HTML documents ended being very big and redundant. Moreover HTML was originally designed to structure content, with the visual part being far less important and largely being left to the browser.

Someone came with a great idea to remove all the styling attributes of the tags and put them in a separate place than the HTML. This would simplify the HTML, allow to reuse the same styles on different elements of a page en even in different pages. CSS Was born ! 

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

Let's try some CSS in the next section.


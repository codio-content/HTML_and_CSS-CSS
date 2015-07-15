Let's add an external css file now !

In the previous section we have been adding our style into the `<head>` of the document. This works very well, but doesn't allow us to share one style sheet for multiple html pages.In

Now let's create a file next to our `index.html`, let's name it `style.css` and Codio will propose as a template "CSS". Go on with it, open it and make it completely empty.

Now we have to tell the browser to load our `style.css` file along when it load `index.html`

Again this is accomplished by adding a tag in the head of our html document. But this time it will be a link tag :

```html
<link rel="stylesheet" href="style.css" type="text/css">
```

Let's analyse this tag in detail :
So we are "link"ing something to our html document, in this case the relation `rel="stylesheet"` tells the browser we are linking to a stylesheet and the `type="text/css"` means the document is of type `text/css` (css is just plain text), finally as we have seen for the `<a>` tags, the `href` attributes gives the browser the "hyper-reference" which is basically its address, where to find the document.So

Now that we have created an external stylesheet and linked it to our html document, it's time for a little challenge.

But just before that, I'd like to demonstrate the power of css! Let's see how css was used to do the tree view of an html document that we used in the previous section.

Imagine we have this html code :
```html
    <h1> some title </h1>
    <p> some text </p>
    
    <h1> another title </h1>
    <p> another text</p>
    
    <h1> our last title</h1>
    <p> and our last text</p>
```

Nothing fancy, just some titles and some texts.
If we display it without any styling, it should look like this :

<iframe  width="100%" height="70%" src="/tree/empty.html" bgcolor="fff" frameborder="0" allowfullscreen></iframe>


Now let see what could be done with css, so we keep exactly the same structure and just add css.Now

<iframe  width="100%" height="80%" src="/tree/withstyle1.html" bgcolor="fff" frameborder="0" allowfullscreen></iframe>

And now can get really crazy (try to put your mouse over the elements) :

<iframe  width="100%" height="90%" src="/tree/withstyle2.html" bgcolor="fff" frameborder="0" allowfullscreen></iframe>




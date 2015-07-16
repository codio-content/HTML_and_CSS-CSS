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






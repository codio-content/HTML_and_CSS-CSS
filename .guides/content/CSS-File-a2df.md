In the previous section we have been adding our style into the `<head>` of the document. This works very well, but doesn't allow us to share one style sheet for multiple HTML pages.In

We have created a file called `index.html`, as well as a stylesheet called `style.css`.

In order to tell the browser to load our `style.css` file as well when it loads the `index.html` we need to add a tag in the head of our HTML document. 

This time it will be a `link` tag and it should be like this :

```html
<link rel="stylesheet" href="style.css" type="text/css">
```

Let's analyse this tag in detail :
We are "link"ing something to our html document :
- The relation `rel="stylesheet"` tells the browser we are linking to a stylesheet.
- The `type="text/css"` means the document is of type `text/css` (CSS is just plain text)
- Finally as we have seen for the `<a>` tags, the `href` attributes gives the browser the "hyper-reference" which is basically its address, where to find the document.

{Check It!|assessment}(test-1436869713)

|||guidance

Solution:

```html
<!DOCTYPE html>
<html>
<head>
  <title> CSS File </title>
  <link rel="stylesheet" href="style.css" type="text/css">
</head>
<body>

</body>
</html>
```

|||

Now that we have linked our stylesheet to our HTML document, it's time to learn some more CSS properties.






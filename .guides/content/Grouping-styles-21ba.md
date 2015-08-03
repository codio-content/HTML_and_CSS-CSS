Now let's try to use inheritance to our advantage. Imagine we want to apply a certain font to all the text in our page.
How would we do that ? We have text inside `<h1>`, `<h2>`, `<p>`, `<b>`, `<i>` tags so we could write some css like this :

```css
h1 {
    font-family:Arial;
}
h2 {
    font-family:Arial;
}
p {
    font-family:Arial;
}
b {
    font-family:Arial;
}
i {
    font-family:Arial;
}
```

Or if we use a shorter notation :

```css
h1, h2, p, b, i {
    font-family:Arial;
}
```

The comma in a css selector means "or". So `h1, h2, p, b, i` means : Apply the styles to `h1` or `h2` or `p` or `b` o `i`, so to any of those.

But using the power of inheritance, we could just write :

```css
body {
    font-family:Arial;
}
```

So anything inside the body would receive Arial font.

Let's see, how it would look like in our tree view of the document :

![](.guides/img/iframe6.png)

Not only is this notation simpler and shorter but also what would happen if we were using the previous notation and somebody decides to add a `<h3>` tag ? We would have to modify our stylesheet to add styling for our `<h3>` tag otherwise it would have a different font than the rest of the document.

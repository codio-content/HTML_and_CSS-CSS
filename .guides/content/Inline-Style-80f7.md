# Inline style

Let's look at our index.html in the left code editor.

Inside the `<head>` of the document add :

```html
<style>

</style>
```

Now let's target our `<p>` tags with some css, inside our `<style>` tag add :

```css
p {
    font-size:small;
    color:blue;
}
```

Preview the result now ..
Do you notice something strange ?

The small font size and blue color have been applied to all the `<p>` tags as expected BUT also to the `<b>` and `<i>` tags inside the `<p>`
This is due to a concept called inheritance!
Certain css properties are inherited from the parents.

# Inheritance

Lets visualize our `index.html` in a tree form :

<iframe  width="100%" height="45%" src="/tree/tree.html#url=/inline-style/index.html" frameborder="0" allowfullscreen></iframe>

It is yet another way of seeing the html document.

Now let's try to visualize what elements are affected when we write :

```css
p {
    font-size:small;
    color:blue;
}
```

Here is the same tree view of the html document, with the elements affected by the previous css highlighted in green :

<iframe  width="100%" height="45%" src="/tree/tree.html#url=/inline-style/index.html&selected=p" frameborder="0" allowfullscreen></iframe>

We see that the `<b>` and `<i>` tags are also affected by this style, They "inherit" the style from their parent `<p>` tag.

This is a very interesting concept and is one of the reasons css is so powerful.

|||warning
# Caution
Not all css propertires are inherited ! It is really important to note that only certain css properties inherit. For example, all the properties related to the styling of text inherit, font size, color, style ... are inherited but all the properties such as borders, margins, backgrounds and so on do NOT inherit. And that is by design! If you apply a border to a p tag, you wouldn't want that all the b i u tags inside it would also get a border. In general it is useful, when you learn a new css property if it inherists or not.
|||

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

<iframe  width="100%" height="40%" src="/tree/tree.html#url=doc1.html&selected=body" frameborder="0" allowfullscreen></iframe>

Not only is this notation simpler and shorter but also what would happen if we were using the previous notation and somebody decides to add a `<h3>` tag ? We would have to modify our stylesheet to add styling for our `<h3>` tag otherwise it would have a different font than the rest of the document.





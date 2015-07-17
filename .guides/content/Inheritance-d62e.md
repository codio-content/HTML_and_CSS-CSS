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
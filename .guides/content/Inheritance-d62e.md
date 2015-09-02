Lets visualize our `index.html` in a tree form :

![](.guides/img/iframe4.png)

It is yet another way of seeing the HTML document.

Now let's try to visualize what elements are affected when we write :

```css
p {
    font-size:small;
    color:blue;
}
```

Here is the same tree view of the HTML document, with the elements affected by the previous CSS highlighted in green :

![](.guides/img/iframe5.png)

We see that the `<b>` and `<i>` tags are also affected by this style, They "inherit" the style from their parent `<p>` tag.

This is a very interesting concept and is one of the reasons CSS is so powerful.

|||warning
# Caution
Not all CSS propertires are inherited ! 

It is really important to note that only certain CSS properties inherit. For example, all the properties related to the styling of text inherit, font size, color, style ... are inherited but all the properties such as borders, margins, backgrounds and so on do NOT inherit.

That behaviour is by design! If you apply a border to a `<p>` tag, you wouldn't want that all the `<b>` `<i>` `<u>` tags inside it would also get a border. 

In general it is useful, when you learn a new CSS property, to check if it inherits or not.
|||
# Inline style

Let's look at our `index.html` in the left code editor.

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

This is due to a concept called *inheritance*. Let's go to the next section to find out more about this.

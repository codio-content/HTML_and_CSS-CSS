# Adding some cool CSS3 styles

CSS3 give us many more properties to play with that can add nice visual effects to our web pages. A later lesson will be devoted to CSS3 but until then here are 2 very useful properties:

# Rounded corners

Now let's make our images corners more rounded, because it's nicer!

In the top left window, add this style on the img tags :

```css
border-radius: 30px;
```

`border-radius` is quite self explanatory, it will round the corners of the shape using the length you provide.

Now see the effect it has in the preview...

You can even push it further and put `200px` and it will look like a nice "pill". If the shape was originaly square it would end up being a round.

# Shadows !

Now let's add some shadows to our image, add the following to our CSS for the `img` tag.

```css
box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.7); 
```

Here are the parameters of `box-shadow` :

```css
box-shadow: h-pos v-pos (blur) (spread) (color) (inset);
```

Where the two first are mandatory parameters, here are the details on each of those :

<table>
<tr><td> h-pos </td> <td> Horizontal position of the shadow.</td></tr>
<tr><td> v-pos </td> <td> Vertical position of the shadow.</td></tr>
<tr><td> blur </td> <td> Size of the blur of the shadow.</td></tr>
<tr><td> spread </td> <td> Size of the shadow.</td></tr>
<tr><td> color </td> <td> Color of the shadow.</td></tr>
<tr><td> inset </td> <td> If value "inset" is set there it means the shadow will be internal to the element and not external.</td></tr>
</table>

Our pictures look much nicer now with some rounded corners and a little shadow !


# Congratulations 

You have seen the basics of css and now you can make your webpages look much better !
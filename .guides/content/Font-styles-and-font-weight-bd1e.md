# font-style

This property allows you to put your text in italic as we did with the `<i>` tags before, but directly from CSS. 

| Code | Preview |
|:----:|:------: |
| `font-style:normal;` | <div style="font-style:normal;">my text</div> |
| `font-style:italic;` | <div style="font-style:italic;">my text</div> |
| `font-style:oblique;` | <div style="font-style:oblique;">my text</div> |


The difference between `italic` and `oblique` is that the first one is the `italic` version of a font, created by the font designer and `oblique` is just the normal font inclined a bit. In general it's better to use `italic`.


# font-weight

After seeing how to do italic in CSS, let's see how to do bold without the `<b>` tag. The font-weight property does exactly that, it can have either textual values or numerical values as we will see in the table here under.


| Code | Preview |
|:----:|:------: |
| `font-weight:lighter;` | <div style="font-weight:lighter;">my NICE text</div> |
| `font-weight:200;` | <div style="font-weight:200;">my NICE text</div> |
| `font-weight:normal;` | <div style="font-weight:normal;">my NICE text</div> |
| `font-weight:400;` | <div style="font-weight:400;">my NICE text</div> |
| `font-weight:bold;` | <div style="font-weight:bold;">my NICE text</div> |
| `font-weight:700;` | <div style="font-weight:700;">my NICE text</div> |
| `font-weight:bolder;` | <div style="font-weight:bolder;">my NICE text</div> |
| `font-weight:900;` | <div style="font-weight:900;">my NICE text</div> |


The acceptable values for the textual version are `lighter`, `normal`, `bold`, `bolder`

And the acceptable values for the numerical version are 100, 200, 300, 400, 500, 600, 700, 800, 900

You can see in the table above the correlation between the textual and numerical values.

|||warning
# Attention

As you see in the example above, `bold` and `bolder` give the same visual result. This is normal and depends if the creator of the font you are using did create a `bolder` version of the font or not.

In general you will see that most of the time `normal` and `bold` are available but the other values depend on each font.

|||

{Check It!|assessment}(test-2534955054)

|||guidance

Solution :

```css
i {
  font-weight:bold;
  font-style:normal;
}

b {
  font-weight:normal;
  font-style:italic;
}

```

|||



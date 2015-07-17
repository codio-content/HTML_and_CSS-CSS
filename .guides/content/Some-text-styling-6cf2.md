Now let's enter into some details about text styling :

# Text color

To specify the color of our texts, we just use the css `color` property, here are some examples :

| Code | Preview |
|:----:|:------: |
| `color:black;` | <div style="color:black;"> let's add colors</div> |
| `color:red;` | <div style="color:red;">let's add colors</div> |
| `color:#00ff00;` | <div style="color:#00ff00">let's add colors</div> |
| `color:rgb(0,0,255);` | <div style="color:rgb(0,0,255);">let's add colors</div> |


These are 3 different ways of defining colors in CSS :

The first one is the textual one and you can choose between a long list of color names, here is the [list](http://www.w3schools.com/cssref/css_colornames.asp) 

The second one is called "hexadecimal" notation, and is structured like this :

$$
{\sf\large
\underbrace{\text{#}}_\text{start} \underbrace{\text{XX}}_\text{red}
\underbrace{\text{YY}}_\text{green}
\underbrace{\text{ZZ}}_\text{blue} }
$$


It always start with a # and is followed by three hexadecimal values XX, YY, ZZ representing the red, green and blue colors and are between 00 and FF.

If you don't know what is hexadecimal or want to know more about hexadecimal colors, have a look [here](http://www.smashingmagazine.com/2012/10/04/the-code-side-of-color/)

Finally , the last notation `rgb(255,0,0)` allow you to define the r g and b components using values from 0 to 255 and is quite self explanatory.

Hopefully, with Codio you dont have to search on the web or do the calculations yourself, just click a color in a css file in codio and it will give you a convenient color picker that will let you choose your color visually.

For that just type in a css file :

```css
color:#fff;
```

then put your mouse over `#fff` and a little square will appear like this showing the white color (step 1). 

Then if you click inside the square, a nice color picker will appear, allowing you to choose your color visually, when you are done it will output the correct code inside your css (step 2).

| step 1 | step 2 |
|:------:|:------:|
|![Hover](.guides/img/color_hover.png) | ![Color Picker](.guides/img/color_click.png) |






# Alignment, Transform and decoration of text


### text-align
We can specify the alignment of our text with `text-align` :

Here is how to use it :

| Code | Preview |
|:----:|:------: |
| `text-align:left;` | <div style="text-align:left;">my text</div> |
| `text-align:center;` | <div style="text-align:center;">my text</div> |
| `text-align:right;` | <div style="text-align:right;">my text</div> |


### text-transform

With this you can force your text in lowercase or uppercase even if it was not originally written like this :


| Code | Preview |
|:----:|:------: |
| `text-transform:none;` | <div style="text-transform:none;">my nice text</div> |
| `text-transform:uppercase;` | <div style="text-transform:uppercase;">my nice text</div> |
| `text-transform:lowercase;` | <div style="text-transform:lowercase;">my nice text</div> |
| `text-transform:capitalize;` | <div style="text-transform:capitalize;">my nice text</div> |

### text-decoration

We can add some "decorations" to our text like this :

| Code | Preview |
|:----:|:------: |
| `text-decoration:none;` | <div style="text-decoration:none;">my NICE text</div> |
| `text-decoration:underline;` | <div style="text-decoration:underline;">my nice text</div> |
| `text-decoration:overline;` | <div style="text-decoration:overline;">my NICE text</div> |
| `text-decoration:line-through;` | <div style="text-decoration:line-through;">my nice text</div> |

In CSS3 this is a short notation for `text-decoration-line` which is more explicit.

# Font styles and weights

### font-style

This property allows you to put you text in italic as we did with the `<i>` tags before but directly from css. The difference between `italic` and `oblique` here under is that the first one is that `italic` version of a font, created by the font designer and `oblique` is just the normal font inclined a bit. In general it's better to use `italic`.

| Code | Preview |
|:----:|:------: |
| `font-style:normal;` | <div style="font-style:normal;">my text</div> |
| `font-style:italic;` | <div style="font-style:italic;">my text</div> |
| `font-style:oblique;` | <div style="font-style:oblique;">my text</div> |


### font-weight

After seeing how to do italic in css, let's see how to do bold without the `<b>` tag. The font-weight property does exactly that, it can have either textual values or numerical values as we will see in the table here under.


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

You can see in the table above the correspondance between the textual and numerical values.

|||warning
# Attention

As you see in the example above, `bold` and `bolder` give the same visual result. This is normal and this depends if the creator of the font you are using did create a `bolder` version of it's font or not.

In general you will see that most of the time `normal` and `bold` are available but the other values depend each font.

|||


# Font families

Fonts in the web are a difficult problem. The difficulty come from the fact that a font might or not be available on a computer. The fonts are system-based, meaning they are a part of windows/mac/linux. So it's almost impossible to know if a font will be available or not on every computer.

Their are 2 ways it is solved :

1) Use the so called "web-safe" fonts (ones that are supposedly available on all systems) and provide a list of fonts instead of just one.

2) Make the browser load a webfont directly so you will be sure it's available, a "webfont" is a special version of a font that is downloadable and usable by the web browsers.

We will not see in this unit the second option as it is a bit more complicated and will be loaded later.

Let's see how to use the first option :

The css property is called `font-family` and is used to declare what font you want. In general you declare multiple options separated by a `,` so the browser will try the first in the list, it he finds it on the system, he will use it, otherwise he will try the next one in the list .. and so on. Moreover in general you start with a specific font in the list and continues going to less specific and ending up with a generic font family.

Here are the generic font families :

cursive
fantasy
monospace
sans-serif
serif

| Code | Preview |
|:----:|:------: |
| `font-family:cursive;` | <div style="font-family:cursive;">A white rabbit and a red fox</div> |
| `font-family:fantasy;` | <div style="font-family:fantasy;">A white rabbit and a red fox</div> |
| `font-family:monospace;` | <div style="font-family:monospace;">A white rabbit and a red fox</div> |
| `font-family:sans-serif;` | <div style="font-family:sans-serif;">A white rabbit and a red fox</div> |
| `font-family:serif;` | <div style="font-family:serif;">A white rabbit and a red fox</div> |

But using a family doesn't guarantee you what font you will end up with, it's just guarantee you it will take one font in this family

When you want a specific font you should declare it first and then end up with a generic family just in case.

Here are some examples :

| Code | Preview |
|:----:|:------: |
| `font-family:"Times New Roman", Times, serif;` | <div style='font-family:"Times New Roman", Times, serif;'>A white rabbit and a red fox</div> |
| `font-family:Verdana, Geneva, sans-serif;` | <div style='font-family:Verdana, Geneva, sans-serif;'>A white rabbit and a red fox</div> |
| `font-family:"Comic Sans MS", cursive, sans-serif;` | <div style='font-family:"Comic Sans MS", cursive, sans-serif;'>A white rabbit and a red fox</div> |
| `font-family:"Courier New", Courier, monospace;` | <div style='font-family:"Courier New", Courier, monospace;'>A white rabbit and a red fox</div> |

In general don't forget that fonts will look slightly different on different oses and browsers, even if you use the same font.

# Font size.

Now let's talk a little bit about the font sizes.

You can easily specify a font size like this :

| Code | Preview |
|:----:|:------: |
| `font-size:xx-small;` | <div style='font-size:xx-small;'>Different sizes of text</div> |
| `font-size:x-small;` | <div style='font-size:x-small;'>Different sizes of text</div> |
| `font-size:small;` | <div style='font-size:small;'>Different sizes of text</div> |
| `font-size:medium;` | <div style='font-size:medium;'>Different sizes of text</div> |
| `font-size:large;` | <div style='font-size:large;'>Different sizes of text</div> |
| `font-size:x-large;` | <div style='font-size:x-large;'>Different sizes of text</div> |
| `font-size:xx-large;` | <div style='font-size:xx-large;'>Different sizes of text</div> |

These are the textual values for `font-size`.

Now there are two other textual values but they are different

| Code | Preview |
|:----:|:------: |
| `font-size:larger;` | <div style='font-size:larger;'>Different sizes of text</div> |
| `font-size:smaller;` | <div style='font-size:smaller;'>Different sizes of text</div> |

These will set the font size to a larger/smaller font size than the parent element of the targeted element.

If you want to use a font size that depends from the parent size, you can also use a numerical `%` value and it will set the size as the specified pourcentage of the size of the parent element.

| Code | Preview |
|:----:|:------: |
| `font-size:100%;` | <div style='font-size:100%;'>The parent size</div> |
| `font-size:200%;` | <div style='font-size:200%;'>Double the parent size</div> |
| `font-size:50%;` | <div style='font-size:50%;'>Half the parent size</div> |

You can also use fixed numerical values for the `font-size` but before that we need to introduce the different available units for that.


### font-size units

**(em)**: The “em” is a scalable unit that is used in web document media. An em is equal to the current font-size, for instance, if the font-size of the document is 12pt, 1em is equal to 12pt. Ems are scalable in nature, so 2em would equal 24pt, .5em would equal 6pt, etc. Ems are becoming increasingly popular in web documents due to scalability and their mobile-device-friendly nature.

**(px)**: Pixels are fixed-size units that are used in screen media (i.e. to be read on the computer screen). One pixel is equal to one dot on the computer screen (the smallest division of your screen’s resolution). Many web designers use pixel units in web documents in order to produce a pixel-perfect representation of their site as it is rendered in the browser. One problem with the pixel unit is that it does not scale upward for visually-impaired readers or downward to fit mobile devices.


**(pt)** : Points are traditionally used in print media (anything that is to be printed on paper, etc.). One point is equal to 1/72 of an inch. Points are much like pixels, in that they are fixed-size units and cannot scale in size.

Let's see the difference in action, the first column represents the case when the body would have a font-size of 12pt and the second column a font-size of 16pt.

| | <span style="color:#000; text-transform:lowercase">`body { font-size: 12pt; }`</span> | <span style="color:#000; text-transform:lowercase">`body { font-size: 16pt; }`</span> |
| :--: | :--: | :--: |
| `font-size:1em;` |<span style="font-size:12pt;"> A nice text </span>  | <span style="font-size:16pt;"> A nice text </span> |
| `font-size:0.5em;` |<span style="font-size:6pt;"> A nice text </span>  | <span style="font-size:8pt;"> A nice text </span> |
| `font-size:12px;` |<span style="font-size:12px;"> A nice text </span>  | <span style="font-size:12px;"> A nice text </span> |
| `font-size:16px;` |<span style="font-size:16px;"> A nice text </span>  | <span style="font-size:16px;"> A nice text </span> |
| `font-size:12pt;` |<span style="font-size:12pt;"> A nice text </span>  | <span style="font-size:12pt;"> A nice text </span> |

You can see that the 2 first rows change as the body font size changes. The last 3 columns do not change when the body font size changes.


|||Challenge
# Prank with b's and i's
In the left treeview, open the stylesheet called `style.css`

In it I would like you to redefine the style for the `<b>` and `<i>` tags.

We want to do a joke for the teacher, so we want the `<b>` tag to display in *italic* and the `<i>` tag to display in **bold** !

When you are done, open the `test.html` and check if it works !

{Check it!! | custom}(test-bui)

|||




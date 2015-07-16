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

the mouse over the `#fff` part and a little square will appear like this showing the white color : 

![Hover](.guides/img/color_hover.png)

Then if you click inside the square, a nice color picker will appear, allowing you to choose your color visually, when you are done it will output the correct code inside your css.

![Color Picker](.guides/img/color_click.png)


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



### font-weight

### font-variant

# font-family

# font-size

# size units



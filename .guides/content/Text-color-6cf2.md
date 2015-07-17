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

|||Challenge
# Challenge with colors

Some challenge with colors

{Check it!! | custom}(test-bui)

|||
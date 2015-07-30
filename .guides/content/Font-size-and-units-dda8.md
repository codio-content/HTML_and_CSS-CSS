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

{Check It!|assessment}(test-983659498)

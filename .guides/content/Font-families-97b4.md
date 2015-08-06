Handling fonts on the web is a difficult problem. The difficulty come from the fact that a font might not be available on the client computer. The fonts are system-based, meaning they are a part of Windows/Mac/Linux. 

Their are 2 ways it is solved :

1) Use the so called "web-safe" fonts (ones that are supposedly available on all systems) and provide a list of fonts instead of just one.

2) Make the browser load a webfont directly so you will be sure it's available, a "webfont" is a special version of a font that is downloadable and usable by the web browsers.

## 1) System fonts and web-safe fonts.

Let's see how to use the first option :

The css property is called `font-family` and is used to declare what font you want. In general you declare multiple options separated by a `,` so the browser will try the first in the list, it it finds it on the system, it will use it, otherwise it will try the next one in the list and so on. Moreover in general you start with a specific font in the list and continues going to less specific and ending up with a generic font family.

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

In general don't forget that fonts will look slightly different on different systems and browsers, even if you use the same font.

## 2) Web fonts

Nowadays people are used to have very nice and pretty fonts in webpages. As these fonts are not available on everyone's computers, they have to be loaded by the browser when the page displays.

Until recently using webfonts was a tedious process, involving converting a specific fonts in different formats for the different browsers, then referencing them in the stylesheet and then using them.

Recentlu, Companies simplified this process for us by creating catalogs of pre-made webfonts. Particularely Google has a catalog of free webfonts that anyone can use in their webpages (Normal fonts are often expensive and have restrictive licence).

In order to use a google webfont, there are 2 steps :

### 1) Choose a font : 

[Click here](https://www.google.com/fonts) to go to the google fonts webpage.
Browse at your ease and select a font, for our example we will use the font called "Roboto" (but choose any font you like)

It should look like this :

![](.guides/img/google-font-1.png)

in 1) You see the name of the font
in 2) You see a preview of the font
in 3) This allow you to quickly use the font.

### 2) Add it into your page :

Click on 3) and you will land on the font download page.
It's quite well explained, but basically scroll down until you find the section 3, it gives you the line of code to add to the `head` of your html page.

![](.guides/img/google-font-2.png)

Then if you go a bit lower you will see the name of the font to use in your css, like this :

![](.guides/img/google-font-3.png)

In the next challenge we have already preselected 4 fonts from google and they were added to your html document for you.


{Check It!|assessment}(test-811827856)

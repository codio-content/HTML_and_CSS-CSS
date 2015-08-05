Handling fonts on the web is a difficult problem. The difficulty come from the fact that a font might not be available on the client computer. The fonts are system-based, meaning they are a part of Windows/Mac/Linux. 

Their are 2 ways it is solved :

1) Use the so called "web-safe" fonts (ones that are supposedly available on all systems) and provide a list of fonts instead of just one.

2) Make the browser load a webfont directly so you will be sure it's available, a "webfont" is a special version of a font that is downloadable and usable by the web browsers. We will not see the second option in this unit as it is a bit more complicated.

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

{Check It!|assessment}(test-811827856)

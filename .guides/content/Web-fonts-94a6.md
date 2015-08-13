Nowadays people are used to having very sophisticated fonts in webpages. As these fonts are not always available on everyone’s computers, they have to be loaded by the browser from the internet when the page displays.

Until recently using webfonts was a very tedious process. It involved choosing which subset of the font to use, converting it in various formats for the different browsers, then referencing them in a stylesheet and finally using them.

Recently, Companies simplified this process for us by creating catalogs of pre-made webfonts. Particularly Google has a catalog of free webfonts that anyone can use in their webpages (Normal fonts are often expensive and have restrictive licences).

In order to use a google webfont, there are 2 steps :

## 1) Choose a font : 

[Click here](https://www.google.com/fonts) to go to the google fonts webpage.
Browse at your ease and select a font, for our example we will use the font called "Roboto" (but choose any font you like)

It should look like this :

![](.guides/img/google-font-1.png)

in 1) You see the name of the font
in 2) You see a preview of the font
in 3) This allow you to quickly use the font.

## 2) Add it into your page :

Click on 3) and you will land on the font download page.
It's quite well explained, but basically scroll down until you find the section 3, it gives you the line of code to add to the `head` of your html page.

![](.guides/img/google-font-2.png)

Then if you go a bit lower you will see the name of the font to use in your css, like this :

![](.guides/img/google-font-3.png)

In the next challenge we have already preselected 4 fonts from google and they were added to your html document for you.

Attention : Altough in this challenge we use 4 different webfonts it is recommended in real web pages not to load too many differents fonts, loading them can take a long time on slower internet connections and thus will result in a bad user experience ...


{Check It!|assessment}(test-811827856)

|||guidance

Solution :

```css
h1 { font-family : Indie Flower; }
h2 { font-family : Lobster; }
h3 { font-family : Poiret One; }
h4 { font-family : Dancing Script; }
```

|||


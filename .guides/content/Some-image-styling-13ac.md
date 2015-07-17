Let's have a look at the preview of `image.html` on the top left, it displays pictures of cute animals. This html file is referencing the `style.css` that we will be changing. Everytime we change the `style.css` file on bottom left, don't forget to refresh the preview to see your changes.

# Adding some borders

Now let's add some borders to our images :

In the `style.css` file add inside the img declaration :

```css
border : 3px solid blue;
```

Let's analyse this in more details :

$$
{\sf
\underbrace{\text{border}}_\text{declaration}
\text{ : } 
\underbrace{\text{3px}}_\text{size}
\underbrace{\text{solid}}_\text{style}  
\underbrace{\text{blue}}_\text{color} 
}
$$

So in one line we defined the border size, it's visual style and its color.

Let see some more examples of this :

| Code | Preview |
|:---- |:------: |
| `border : 3px solid blue;` | <div style='border : 3px solid blue;'>With solid border</div> |
| `border : 3px dashed blue;` | <div style='border : 3px dashed blue;'>With dashed border</div> |
| `border : 1px solid blue;` | <div style='border : 1px solid blue;'>Thin border</div> |
| `border : 10px solid blue;` | <div style='border : 10px solid blue;'>Huge border</div> |
| `border : 1px dotted blue;` | <div style='border : 1px dotted blue;'>A dotted border</div> |

You can even target directly only parts of the border or sub properties, for example :

| Code | Preview |
|:----|:------: |
| `border-style : solid;`<br>`border-width:3px;`<br>`border-color:red;` | <div style='border-style:solid; border-width:3px;border-color:red;'>With solid red border</div> |
| `border-top : 3px solid blue;` <br> `border-bottom : 3px solid red;` <br> `border-left : 3px solid yellow;` <br> `border-right : 3px solid green;`  | <div style='border-top : 3px solid blue;border-bottom : 3px solid red;border-left : 3px solid yellow;border-right : 3px solid green;'>Multicolor border</div> |
| `border-style:solid;` <br> `border-color:blue;` <br> `border-width: 5px 10px 15px 20px;` | <div style='border-style:solid; border-color:blue;border-width: 5px 10px 15px 20px;'>Irregulat border</div> |


|||Challenge

In our style.css file you should add style for our img tags, it shoud add a border that should :

- Have 3 px everywhere and be solid.
- Color should be 'LightGreen'  on top and right.
- Color should be 'DarkGreen'  on bottom and left.

{Check it!! | custom}(test-bui)

|||





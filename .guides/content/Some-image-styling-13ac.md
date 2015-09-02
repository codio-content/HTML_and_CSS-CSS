Let's have a look at the preview of `image.html` on the bottom left, it displays pictures of cute animals. This HTML file is referencing the `style.css` that we will be changing. Everytime we change the `style.css` file on top left, don't forget to refresh the preview to see your changes.

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
| `border-style:solid;` <br> `border-color:blue;` <br> `border-width: 5px 10px 15px 20px;` | <div style='border-style:solid; border-color:blue;border-width: 5px 10px 15px 20px;'>Irregular border</div> |

{Check It!|assessment}(test-4136172481)


|||guidance

Solution : 

```css
img {
  margin-bottom:30px;
  border-width:3px;
  border-style:solid;
  border-left-color:darkgreen;
  border-bottom-color:darkgreen;
  border-right-color:lightgreen;
  border-top-color:lightgreen;
}
```

|||





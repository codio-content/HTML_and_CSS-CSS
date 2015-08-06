Now that we have seen what CSS is and how it's structured, let see where and how to add it to our html pages, there are 3 options:

* In a separate CSS file, that we will reference from our HTML document.
  (This is displayed on the left, the top part is the html and the bottom part the css)
* Inside `<style>  </style>` tags in the head of our HTML document.
  [Click to see an example](close_all panel=0;close_all panel=1; open_file 3-where/inline.html panel=0).
* Directly on a HTML tag as a `style="..."` attribute, and then it won't require a selector as it is already attached to a tag.
  [Click to see an example](close_all panel=0;close_all panel=1; open_file 3-where/onthetag.html panel=0).

Putting style attributes directly on the html tags, as in the 3rd option defeats the purpose of css which was to separate the styling from the structure of the document, and so is rarely used, except for specific cases as we will see in a later unit.

In the next sections we will see how to use the 2 first options to add some style to our pages!

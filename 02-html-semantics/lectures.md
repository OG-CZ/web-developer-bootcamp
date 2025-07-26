# what is HTML5?

- html5 is the latest evolution of the standard that defines HTML
- it includes larger set of technologies

<img src="https://i.sstatic.net/mGTYI.png" >

## Inline elements

this shares a space inside a block

- anchor tags

## block elements

this takes up a entire block

- like header tags
- paragraph tags

## Span and Div

> Link: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span

### Div (Block-level element)

Used to group large sections of content or layout structures.

Starts on a new line and stretches the full width of its container by default.

Perfect for wrapping blocks like paragraphs, images, cards, menus, sections, etc.

```html
<div class="warning">
  <img
    src="/shared-assets/images/examples/leopard.jpg"
    alt="An intimidating leopard."
  />
  <p>Beware of the leopard</p>
</div>
```

### Span (Inline element)

Used to wrap small pieces of content inside a line (e.g. a few words or characters).

Does not break the line it just applies style or structure within a paragraph or other inline text.

Useful for styling part of a sentence or attaching behavior to a word.

```html
<p>
  Add the <span class="ingredient">basil</span>,
  <span class="ingredient">pine nuts</span> and
  <span class="ingredient">garlic</span> to a blender and blend into a paste.
</p>
```

### Entity Codes?

- these are special codes that will result in different characters
- like copyright symbol or emojies that arent easy to type
  So, these html elements allows with this

it starts with (&) ends with semicolon (;)
https://www.toptal.com/designers/htmlarrows/symbols/

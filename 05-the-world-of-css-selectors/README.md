## css rules

```css
selector {
  property: value;
}
```

- selector: which concist of all elements to specific selector
- properties: which style we apply
- value: the actual value of the style

### universal selector

- select everything!
- not that use cause we make everything at one style
- not reccomended

```css
* {
  color: black;
}
```

### id selector

- id is something we can add in element and style it differently
- An id must be unique, only one element on the page should have a specific id.
- ❌ No, should be unique per page

```html
<p id="id_name">hello, world</p>
```

```css
#id_name {
  color: black;
}
```

### class selector

- select all elements with the same class (for this instance ".complete")
- For styling or targeting groups of elements
- ✅ Yes, can be used on multiple elements

```css
.complete {
  color: green;
}
```

### descendant selector (nested)

- select all < a > that are nested inside a < li >
- A descendant tag is any HTML element that is inside another, no matter how deeply nested.

```css
li a {
  color: black;
}
```

```html
<div>
  <section>
    <article>
      <p>This is deeply nested.</p>
      <!-- <p> is still a descendant of <div> -->
    </article>
  </section>
</div>
```

### adjacent selector (combinator)

- an adjacent sibling selector is used to style an element that comes immediately after another element

```css
element1 + element2 {
  /* styles here */
}
```

- it will style element 2 and only if it comes directly after element1.

```html
<h1>Title</h1>
<p>This paragraph is directly after h1.</p>
<p>This paragraph is not directly after h1.</p>
```

### direct child

the > selector only targets immediate children

- direct child selector targets elements that are immediately nested inside a specific parent not deeper grandchildren.
- select element2 if its a children of element1

```css
element1 > element2 {
  /* styles here */
}
```

#### adjacent vs direct child

| Feature                           | `h1 + p` (Adjacent Sibling)                            | `.parent > p` (Direct Child)                                |
| --------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| **Meaning**                       | Selects the **first `<p>`** immediately after `<h1>`   | Selects all `<p>` that are **direct children** of `.parent` |
| **Depends on element order?**     | ✅ Yes — only works if `<p>` is **right after** `<h1>` | ❌ No — as long as `<p>` is a child of the parent           |
| **Can skip siblings in between?** | ❌ No — nothing allowed between `<h1>` and `<p>`       | ✅ Yes — as long as `<p>` is a direct child                 |
| **Can match multiple elements?**  | ❌ No — only one adjacent element matched              | ✅ Yes — all matching direct children                       |
| **Nested elements affected?**     | ❌ No — only works at same sibling level               | ❌ No — only matches direct children                        |

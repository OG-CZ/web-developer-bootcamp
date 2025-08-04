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

### attribute selector

- A CSS attribute selector lets you style HTML elements based on their attributes or the value of those attributes.

```css
element[attribute] {
  /* styles */
}
```

| Selector          | Meaning                                   | Example Match                     |                                     |
| ----------------- | ----------------------------------------- | --------------------------------- | ----------------------------------- |
| `[attr~="value"]` | Contains word in **space-separated** list | `<div class="btn primary">`       |                                     |
| \`\[attr          | ="value"]\`                               | Exact or **starts with** `value-` | `<p lang="en">`, `<p lang="en-US">` |
| `[attr^="value"]` | **Starts with** value                     | `<a href="https://site.com">`     |                                     |
| `[attr$="value"]` | **Ends with** value                       | `<a href="file.pdf">`             |                                     |
| `[attr*="value"]` | **Contains** value anywhere               | `<div data-user="admin-123">`     |                                     |

<b>example</b>

html

```html
<input type="text" />
<input type="password" />
<a href="https://example.com">Link</a>
<div class="card btn"></div>
```

css

```css
input[type="password"] {
  background: pink;
}

a[href^="https"] {
  color: green;
}

div[class~="btn"] {
  border: 1px solid black;
}
```

### pseudo classes

- A pseudo-class is a special keyword in CSS that lets you style elements based on their state or position, without adding extra classes.

- keyword added to a selector that specifies a special state of selected elements

  | **Pseudo-Class**  | **What It Selects / Does**                                                     |
  | ----------------- | ------------------------------------------------------------------------------ |
  | `:hover`          | Element when the mouse is over it                                              |
  | `:active`         | Element when it's being clicked or tapped (mouse button is held down)          |
  | `:focus`          | Element that is currently focused (e.g., a text input when you click into it)  |
  | `:checked`        | Checkbox, radio button, or option that is selected                             |
  | `:disabled`       | Form elements that are disabled (can’t be interacted with)                     |
  | `:enabled`        | Form elements that are enabled                                                 |
  | `:first-child`    | First child element inside its parent                                          |
  | `:last-child`     | Last child element inside its parent                                           |
  | `:nth-child(n)`   | Element that is the `n`-th child of its parent (e.g., `:nth-child(3)`)         |
  | `:nth-of-type(n)` | `n`-th element of the same tag type within the parent (e.g., third `<p>` only) |
  | `:not(selector)`  | Selects every element **except** the one matching the selector                 |
  | `:visited`        | A visited link (has been clicked before)                                       |
  | `:link`           | An unvisited link                                                              |
  | `:required`       | Input fields that are marked as required                                       |
  | `:optional`       | Input fields that are not required                                             |
  | `:valid`          | Input field with valid content (e.g., correct email format)                    |
  | `:invalid`        | Input field with invalid content                                               |
  | `:empty`          | Elements with no children (not even text)                                      |

### pseudo elements

- Pseudo-elements let you style specific parts of an element’s content, even if those parts don’t exist as real HTML elements.

- Pseudo-elements let you style specific parts of an element without adding extra HTML tags.

| Pseudo-element   | What it targets                                                   | Example                                           |
| ---------------- | ----------------------------------------------------------------- | ------------------------------------------------- |
| `::before`       | Inserts content **before** an element                             | Add an icon or symbol before a heading            |
| `::after`        | Inserts content **after** an element                              | Add something like a quote mark or arrow          |
| `::first-line`   | Styles only the **first line** of text                            | Make the first line bold or larger                |
| `::first-letter` | Styles the **first letter**                                       | Big decorative letters at the start of paragraphs |
| `::placeholder`  | Styles the text inside an `<input>` or `<textarea>`'s placeholder | Change color of placeholder text                  |

### specificity

- Specificity is how CSS decides which style wins when multiple styles could apply to the same element.

- it is a measure of how specific a given selector is. the more specific selector "wins"

general formula to remember
id > class > element

- the id will beat out any class elements and class element will beat any element selector

```css
button { color: blue; }          /* 1 point */
.primary { color: red; }         /* 10 points */
#saveBtn { color: green; }       /* 100 points */
✅ Green wins, because #saveBtn has the highest specificity.
```

### inline & !important

- so there are another ways to beat any specificity, its !important and inline

- they are much stronger than any body else
  !important > inline > id > class > element

### css inheritance

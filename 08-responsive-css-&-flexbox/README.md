## responsive css & flexbox

focus on concepts, not memorize the properties!

🔑 In Flexbox

- Main axis = the direction your flex items flow (controlled by flex-direction)
- Cross axis = the direction perpendicular to the main axis

🔎 If flex-direction: row (the default)

- Main axis = horizontal (x) → left ↔ right
- Cross axis = vertical (y) → top ↕ bottom

🔎 If flex-direction: column

- Main axis = vertical (y) → top ↕ bottom
- Cross axis = horizontal (x) → left ↔ right

📌 So the key idea:

- Main axis is not always x or y — it depends on what you set flex-direction to.
- Cross axis is always the other direction (perpendicular to main axis).

### what is flexbox?

Flexbox (short for Flexible Box Layout) is a CSS layout module that makes it easier to design flexible and responsive layouts without using floats, tables, or tricky positioning.

- it is a series of properties to layout items in a box of items

why flex?

- flex box allows us to distribute space dynamically across elements of an unknown size, hence the term "flex"
- also to adapt different devices

### flex-direction

flex-direction = the direction in which the flex items flow inside the container.

📌 Quick Visual

- row → [📦 📦 📦] left → right

- row-reverse → [📦 📦 📦] right → left

- column ↓
  📦
  📦
  📦

- column-reverse ↑
  📦
  📦
  📦

### justify content

- justify content is a Flexbox (and CSS Grid) property that controls how items are aligned along the main axis of the container.

values of justify-content

- flex-start (default)
  Items are packed at the start of the main axis.
  [📦📦📦 ]

- flex-end
  Items are packed at the end of the main axis.
  [ 📦📦📦]

- center
  Items are centered along the main axis.
  [ 📦📦📦 ]

- space-between
  First item at the start, last item at the end, others evenly spaced between.
  [📦 📦 📦]

- space-around
  Equal space around each item (half-space at edges).
  [ 📦 📦 📦 ]

- space-evenly
  Equal space between and at edges.
  [ 📦 📦 📦 ]

### flex wrap

- controls whether flex items should stay in a single line or wrap onto multiple lines when there isn’t enough space in the container.

Example (Imagine 6 boxes in a row):

- nowrap → 📦📦📦📦📦📦 (all in one line, might overflow).

- wrap →
  📦📦📦
  📦📦📦

- wrap-reverse →
  📦📦📦
  📦📦📦 (but stacked upwards).

### align items

controls how flex items are aligned along the cross axis (the direction perpendicular to the main axis).

- if justify is along the main axis or vertical axis while align is cross axis or vertical
  🖼 Visual (Row direction → main axis = horizontal, cross axis = vertical)

align-items: flex-start

```
📦
📦
📦
```

align-items: flex-end

```
      📦
      📦
      📦
```

align-items: center

```
📦
📦
📦
```

align-items: stretch

```
📦
📦
📦 (all stretched to full height)
```

✅ So:

justify-content → controls alignment on the main axis
align-items → controls alignment on the cross axis

### align content & align self

🔹 align-content

It controls how multiple flex lines are spaced in the cross-axis.

It only applies when you have flex-wrap: wrap and there’s extra space in the cross-axis (like multiple rows of items).

Think of it like justify-content, but instead of spacing items along the main axis, it spaces the whole lines along the cross-axis.

🔹 align-self

This lets you override align-items for a single flex item.

So if the container has align-items: center, but you want one item at the top, you can use align-self: flex-start;.

### flex sizing properties

#### flex-basis

- Defines the **initial size** of a flex item (before free space is distributed).
- Can be set in px, %, etc.
- Example: `flex-basis: 200px;`

#### flex-grow

- Defines how much amount of avaialable space of an element should take up, accepts a unit-less number value
- Default: `0` (won’t grow).
- Example: `flex-grow: 1;` → item takes available space.

#### flex-shrink

- if items are larger than the container. they shrink according to flex-shrink
- Default: `1` (shrinks).
- Example: `flex-shrink: 0;` → item won’t shrink.

### responsive design

The problem

- As mobile devices and tablets became widely available developers had a problem.. how do we create websites that look good on all sizes?

One approach

- Early on, it was common to create stylesheets for different or even completely different websites for each sizes

Enter responsive

- These days, we typically create ONE website and stylesheet that is able to respond to different devices sizes and features

we can do this on

### media queries

allow us to modify our styles depending on particular parameter like screen width or device type?

basic syntax
```css
/* CSS for all devices (default) */
body {
  background-color: lightblue;
}

/* CSS for devices with a maximum width of 600px */
@media (max-width: 600px) {
  body {
    background-color: lightcoral;
  }
}

/* CSS for devices with a minimum width of 601px */
@media (min-width: 601px) {
  body {
    background-color: lightgreen;
  }
}

```

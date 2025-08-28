## Bootstrap

> Note: im using bootstrap version 5

- the world's most popular CSS framework

### Framework?

- like a framework in construction it's like a skeleton and you can construct everything on top of it.
- in short this tools helps alot in speeding up the process
- it helps create fast and nice-looking modern website

### what is it?

Bootsrap helps us quickly build responsive websites

#### components

bootstrap gives us access to a bunch of pre-built components that we can incorporate into our own web

#### grid system

bootstrap also comes with a grid system. which helps us construct our own custom, responsive layout

> documentation: https://getbootstrap.com/docs/5.3/getting-started/introduction/

### getting started

you should always look up for the newest version, code might be interchangebly

```html
<!-- default bootstrap template -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

- in working with boostrap you must go in documentation to get the latest
- add the online bootsrap css link, in a real worl dev it is best to download it bcs url might be broken sooner
- add the script tag just before the end tag of body

> note: all the styles are going active with class="" automatically

### breakpoints

- its like the savepoint of where it will resize as we shrink or maximize our windows

### Containers

https://getbootstrap.com/docs/5.3/layout/containers/

- are used to contain, pad and content wth them
- its the quickest way to get space and contain our content

```html
<div class="container">
  <!-- Content here -->
</div>
```

### utilities

Those "primary, success, danger, warning, info, etc." things are called Theme Colors in Bootstrap.
By default (Bootstrap 5):

primary → blue

secondary → gray

success → green

danger → red

warning → yellow/orange

info → cyan/light blue

light → white/very light gray

dark → black/dark gray

### typographies

Bootstrap typography is the set of text-related styles and utilities that Bootstrap (the popular front-end CSS framework) provides for quickly styling text, headings, paragraphs, blockquotes, lists, and inline elements without writing custom CSS.

### buttons

In Bootstrap, a button is a clickable element styled using built-in classes instead of writing custom CSS. Bootstrap makes buttons look modern, responsive, and consistent.

### badges, alerts, and buttongroups

- Badges are small count or label indicators often used inside buttons or next to text.
- Alerts are boxes used to show messages like success, warnings, or errors.
- Button groups group multiple buttons together on a single line.

### intro to bootstrap grid

The Bootstrap grid system is essentially a flexbox-based layout system, but it’s structured with rows and columns to make responsive layouts easier. Let me break it down clearly.

Grid is just flexbox under the hood.

- .row = flex container
- .col = flex item

Everything is responsive by default with breakpoint classes
You don’t need to write custom flexbox CSS for normal layouts

#### bootstrap's grid 12-unit system

- Every .row is divided into 12 equal “columns”.
- Each .col-\* class specifies how many of those 12 units a column should take.

12 is divisible by 2, 3, 4, and 6, so it’s very flexible for splitting layouts:

- Half: 6/12
- Third: 4/12
- Quarter: 3/12
- Sixth: 2/12

This makes it easy to create responsive layouts without worrying about complex percentages.

### responsive bootstrap grid

Bootstrap’s grid is 12 columns wide.

- col-md-6 means → at md screen size (≥768px), use 6/12 (half width).
- Before md, it will be full width by default.

  | Screen size         | Class rule used | Layout                          |
  | ------------------- | --------------- | ------------------------------- |
  | 📱 Phone (<768px)   | `col-sm-12`     | Each takes full width (stacked) |
  | 📲 Tablet (≥768px)  | `col-md-6`      | Each takes 6/12 → 2 per row     |
  | 💻 Desktop (≥992px) | `col-lg-4`      | Each takes 4/12 → 3 per row     |

  - The idea:
    You “stack” breakpoints in the class.
    At each screen width, Bootstrap looks at the largest matching rule and applies it.
    Smaller than that → it falls back to full width (col-12).

    its like a discipline when we hit that size it will be only in that part

#### responsive image

A “responsive image” = the image shrinks and grows with the parent container, instead of overflowing or breaking the layout.
it just make the image scale based upon the containing element

#### gutters

When you use the Bootstrap grid (.row + .col), Bootstrap automatically gives horizontal padding between columns so that the content isn’t glued together.
That space is called a gutter.

### useful grid utilities

Nice one Bootstrap’s **grid utilities** are little helper classes that let you tweak how the grid behaves without writing custom CSS.

#### **Alignment Utilities (Flexbox helpers)**

Since rows use Flexbox, you can align easily:

```html
<div class="row align-items-center">...</div>
<!-- vertical alignment -->
<div class="row justify-content-center">...</div>
<!-- horizontal alignment -->
```

**In summary:**
The most practical Bootstrap grid utilities are:

- **`g-*` (gutters)**
- **`row-cols-*` (auto column counts)**
- **`col-auto` (auto sizing)**
- **`order-*` (reordering)**
- **`offset-*` (spacing shifts)**
- **alignment helpers** (justify / align).

### bootstrap & forms

Rule of thumb: Always wrap inputs with .form-control, use .mb-\* for spacing, and combine with grid if you want multiple fields in one row.

.form-control → makes inputs full-width & styled.
.form-label → proper spacing & style for labels.
.form-check → for checkboxes/radios.
.form-select → for dropdowns.
.mb-3 (margin bottom) → spacing between fields.

Stacked (default) → inputs are vertical.
Inline form → add .row and .col for grid layout.
Floating labels → .form-floating for modern effect.

- the logic here is to create forms then if u wanna make it side by side add .row and after wards add one .col if we wanna stack inside the forms

### bootstrap navbar

A Bootstrap navbar is just a flexbox container with utility classes that control:

- Layout (horizontal row, brand on left, links on right, etc.)
- Responsiveness (collapsing into a hamburger menu on smaller screens).
- Styling (background, colors, spacing).

2. Key Classes & Their Logic

- navbar → base class for navbars.
- navbar-expand-md → navbar stays horizontal on md screens and up, collapses below that.
- navbar-light / navbar-dark → controls link color (dark text vs light text).
- bg-light / bg-dark → background color.
- container-fluid → makes content span full width.
- navbar-toggler → button that triggers collapse.
- collapse navbar-collapse → hides menu items on small screens, expands on larger screens.
- ms-auto → pushes nav items to the right (using Bootstrap’s margin utilities).

3. Responsive Logic
- On large screens, the navbar-expand-md keeps links visible inline.
- On small screens, links collapse into a hamburger menu controlled by JavaScript (collapse).

So the flow is:
- Navbar shows brand + menu inline (desktop).
- Shrink viewport → menu collapses → hamburger appears.
- Click hamburger → data-bs-toggle="collapse" toggles the hidden menu.

4. Customization

- Add forms, buttons, or dropdowns inside navbar-nav.
- Use alignment utilities (ms-auto, me-auto) to position items.
- Swap expand breakpoint (navbar-expand-sm, -lg, -xl, etc.) depending on when you want it to collapse.

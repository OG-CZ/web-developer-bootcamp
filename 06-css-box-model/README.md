### css box model

ChatGPT said:
The CSS box model is a way of understanding how every element on a webpage is structured and how its size is calculated.

Think of every HTML element as being inside an invisible box that’s made of four layers:

```scss
┌───────────────────────────┐
│        Margin             │  ← Outside space
│  ┌─────────────────────┐  │
│  │      Border         │  │  ← Edge of the box
│  │  ┌─────────────────┐│  │
│  │  │    Padding      ││  │  ← Space between border & content
│  │  │  ┌─────────────┐││  │
│  │  │  │  Content    │││  │  ← Text, images, etc.
│  │  │  └─────────────┘││  │
│  │  └─────────────────┘│  │
│  └─────────────────────┘  │
└───────────────────────────┘

```

The 4 parts of the box model:

- Content – The actual stuff inside the element (text, images, etc.).
- Padding – The space between the content and the border. It makes the box bigger but keeps the background color.
- Border – A visible edge around the padding and content.
- Margin – The space outside the border, creating distance from other elements.

### border properties (important ones)

- border-width
  control thickness of border
- border-color
  controls color of border
- border-style
  controls the line style - dashed, solid and etc.

### padding properties

is the actual space between content and border

##### individual properties

- padding-left
- padding-right
- padding-bottom
- padding-top

##### shorthand property

set all four sides at once!

- padding: 10px

vertical | horizontal

- padding: 5px 10px;

top | horizontal | bottom

- padding: 1px 2px 2px;

top | right | bottom | left

- padding: 5px 1px 0 2px;

### margin

is the space out of the element's border

##### individual properties

- margin-left
- margin-right
- margin-bottom
- margin-top

##### shorthand property

set all four sides at once!

- padding: 10px

vertical | horizontal

- padding: 5px 10px;

top | horizontal | bottom

- padding: 1px 2px 2px;

top | right | bottom | left

- padding: 5px 1px 0 2px;

### display property

The display property lets you convert any element’s layout behavior — so you can turn:

inline

- width and height are ignored. margin & padding push elements away horizontally but not vertically

Block

- block elements break the flow of a document. Width, height margin and padding are respected

inline-block

- behaved like an inline element except width, height, margin and padding are respected

#### common display properties

| Value          | Behavior                                         |
| -------------- | ------------------------------------------------ |
| `block`        | Starts on a new line, takes full width           |
| `inline`       | Flows with text, only as wide as content         |
| `inline-block` | Behaves like inline but you can set width/height |
| `flex`         | Turns the element into a **flex container**      |
| `grid`         | Turns the element into a **grid container**      |
| `none`         | Hides the element completely (no space left)     |

## css units revisted

#### percentage

- percentage are alwasy relative to some other value
- width: 50% - half width of the parent
- line-height: 50% - half the font-size of the element itself

#### em

em's are relative units

In simple terms:

**`em` is a CSS unit that copies the parent’s font size and lets you scale it.**

- parent: 30px;

- `1em` = same size as the parent = 30px
- `2em` = double the parent’s size = 2 \* 30 = 60px
- `0.5em` = half the parent’s size = 2 / 30 = 25px

It’s **relative** because its value changes depending on the parent’s font size.

#### rem (root ems)

em vs rem
em → copies size from its parent element (and can change again if you nest more parents).
rem → copies size from the root element (html), no matter how many parents you have.

if the root font-size is 20px, 1 rem is always 20px no matter what nested we have

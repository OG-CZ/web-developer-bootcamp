### opacity & the alpha channel

- rgba(0, 209, 112, 0.5)
  - 0 = is green
  - 209 = is red
  - 112 = is blue
  - 0.5 = is the opacity

### position properties

position css property sets how an element is positioned in a document. the top right bottom and elft proeprties determine the final location of positioned elements

it has several values:

| Value                  | Description                                                                                                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`static`** (default) | Element is positioned in the normal document flow. No top/left/bottom/right offsets apply.                                                                                 |
| **`relative`**         | Element is positioned relative to its **original position** in the normal flow. Offsets (`top`, `left`, etc.) move it without removing it from the flow.                   |
| **`absolute`**         | Element is positioned relative to the **nearest positioned ancestor** (one that’s not `static`). Removed from normal flow, so it doesn’t affect other elements’ positions. |
| **`fixed`**            | Element is positioned relative to the **viewport**. It stays in the same place even when the page scrolls.                                                                 |
| **`sticky`**           | Element behaves like `relative` until it reaches a scroll threshold, then it “sticks” like `fixed` within its parent container.                                            |

### transition property

https://easings.net/

The transition property in CSS controls how smoothly changes happen when you change a CSS property instead of the change being instant.

property → the CSS property you want to animate (color, background-color, transform, all, etc.)

duration → how long the animation takes (0.5s, 200ms, etc.)

timing-function → speed curve of the animation (ease, linear, ease-in, etc.)

delay (optional) → wait before starting the animation (0s, 1s, etc.)

### css transform

In CSS, transform is a property that lets you visually manipulate an element in 2D or 3D space without actually changing its HTML layout.

its like photoshop's free transform tool

### background properties

CSS background properties control how the background of an element looks and behaves including its color, image, size, position, and how it repeats.
| **Property** | **Description** | **Example** |
| ------------------------ | ---------------------------------------------------- | ----------------------------------------------------------------- |
| `background-color` | Sets the background color. | `background-color: lightblue;` |
| `background-image` | Sets one or more background images. | `background-image: url('image.jpg');` |
| `background-repeat` | Controls if/how the background image repeats. | `background-repeat: no-repeat;` |
| `background-position` | Sets the starting position of the background image. | `background-position: center;` |
| `background-size` | Controls the scaling of the background image. | `background-size: cover;` |
| `background-attachment` | Determines if the background scrolls or stays fixed. | `background-attachment: fixed;` |
| `background-clip` | Defines how far the background extends. | `background-clip: content-box;` |
| `background-origin` | Sets the origin position for background positioning. | `background-origin: padding-box;` |
| `background-blend-mode` | Sets blending mode for background layers. | `background-blend-mode: multiply;` |
| `background` (shorthand) | Combines multiple background properties into one. | `background: #000 url('image.jpg') no-repeat center/cover fixed;` |

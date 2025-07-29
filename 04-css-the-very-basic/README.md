## Cascading Style Sheet css

it’s the language used to style and design the appearance of websites.

- we use css rules to style certain elements in a website

there are alot CSS properties, we can look it up
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

## including styles correctly

inline styles

- you can write your styles directly but this is NOT A GOOD IDEA most of the time

the < style > element
you can write your sttle inside of a < style > element. this is easy but it makes it impossible ot share styles between document. Not recommended either

external stylesheet
write your style in a .css file, and then include using < link > in the head of your html document. Recommended!

### background vs background-color properties

**`background`** is a shorthand property that can include multiple background-related values (like color, image, position, repeat, etc.),
while **`background-color`** only sets the background color.

✅ Example:

```css
background: red url("image.png") no-repeat center;
background-color: red;
```

### color systems: hexadecimal

what is decimal?

- 0,1,2,3,4,5,6,7,8,9

what is hexadecimal?
it is a 16 bit so it has 16 choices

- 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
  THE LARGEST VALUE WE CAN DISPLAY IS ( F ) = 15

> #ffffff
> red(ff) green(ff) blue(ff)

it's basically saying 0 to 255 per red, green, or blue

#### semiconlons in css

the semi colons is important in every css style we add

### css text properties

- text align

## font size basics w/ pixels

absolute

- px
- pt
- cm
- in
- mm

relative

- em
- rem
- vh
- vw
- %
- and more...

pixels -> by far most commonly used aboslute unit
but.. 1px does not necessarly equal to the width of 1 pixels
NOT RECOMMENDED FOR RESPONSIVE WEBSITES
it varies by alot of reason but it is guaranteed to be very small if 1 px

### the font familty property

The font-family property defines which font is used for your text. However, not all fonts are available on every device—some users may not have certain fonts installed. To handle this, CSS allows you to specify a font stack, which is a prioritized list of fonts.

font stack

- so we set font family based on priortiest list
- font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
- segoe ui > tahoma > geneva > verdana > san-serif > // ! if one of them is not available then it won't continue

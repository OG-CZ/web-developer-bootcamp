### Strings

"Strings of characters"
Strings are another primitive type in javascript. they represent text, and must be wrapped in quotes

Primitive types in JS:
string
number
boolean
undefined
null
symbol (ES6)
bigint (ES11 / ES2020)
All of these are immutable (can’t be changed once created) and are compared by value.

### indices nad length

String are indexed in javascript

- each character in a string has a corresponding index ( a positional number that starts with 0 )

```javascript
let word = "Hello";

console.log(word[0]); // "H"
console.log(word[1]); // "e"
console.log(word[4]); // "o"
console.log(word[5]); // undefined (no character at index 5)
```

So "Hello" has indices:
H(0) e(1) l(2) l(3) o(4)

String length
The .length property tells you how many characters are in the string.
let word = "hello" -> 5 characters

### String methods w/ arguments

### template literals

- this are string that allows embedded expressions
  just like print(f{3+7}) in python

but this uses ( ` ) -> backticks

```javascript
`i counted ${3 + 4} sheep`; // output: i counted 7 sheep
```

### undefines and null

- Null
  - "intentional absence of any value"
  - Must be assigned
- Undefined
  - Variables that do not have an assigned value are undefined

so undefined is just like a way of JS is saying I DONT KNOW
while Null is an actual value/data that is empty

### math object

a collection of properties or method that is related to mathematics

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045 (Euler’s number)
console.log(Math.SQRT2); // 1.4142135623730951 (√2)
console.log(Math.LN2); // 0.6931471805599453 (ln 2)

console.log(Math.abs(-7)); // 7 (absolute value)
console.log(Math.pow(2, 3)); // 8 (2³)
console.log(Math.sqrt(25)); // 5 (square root)
console.log(Math.cbrt(27)); // 3 (cube root)

console.log(Math.floor(4.9)); // 4 (round down)
console.log(Math.ceil(4.1)); // 5 (round up)
console.log(Math.round(4.5)); // 5 (nearest integer)
console.log(Math.trunc(4.7)); // 4 (remove decimal part)

console.log(Math.min(5, 1, 7)); // 1
console.log(Math.max(5, 1, 7)); // 7

console.log(Math.random()); // random number 0 ≤ x < 1
```

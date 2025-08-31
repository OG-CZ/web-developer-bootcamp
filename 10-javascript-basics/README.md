# Javascript

- JavaScript is a high-level, interpreted programming language that is a core technology of the web platform, alongside HTML and CSS.
- It is primarily used to create dynamic and interactive content on websites, enabling features like interactive maps, animated graphics, real-time content updates, and user-driven interactions such as dropdown menus and form validation.

### javascript on work

> https://codepen.io/ste-vg/pen/GRooLza

1. Learn JS on its own.
2. use js to manipulate html/css

### javascript console

When people say JavaScript console in web, they usually mean the Developer Tools Console that’s built into every modern browser (Chrome, Edge, Firefox, Safari).

- What it is
  A panel in the browser where you can run JavaScript code directly.
  Shows errors, warnings, and logs from your webpage.
  Used for debugging websites, testing small snippets, and inspecting objects.

### R E P L

REPL stands for:
Read → Eval → Print → Loop

- What it is
  A REPL is an interactive environment where you can type code one line at a time and see results immediately.
  It’s like a live playground for a programming language.

### NaN

- Not a Number
  Nan is a numeric value that represents something that is... not a number
  because it's mathematically error like

0/0 -> is NaN
1 + NaN -> NaN
200 + 0/0 -> NaN

but in javascript if we do
typeof 4 > outputs "number"
typeof "asa" > outputs "string"

- type of NaN > outputs "number"  
  because It’s a special numeric value used to represent the result of an invalid or undefined mathematical operation.

### pemdas in js

- JavaScript follows PEMDASLR (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction, Left-to-Right) just like in math.

- \*\* in javascript is -> “raised to the power of”

### variables and let

- variables are like placeholder for a value
- let -> we can do this via let
  so its

```javascript
let someName = value;
let year = 2025;
let name = "My Name";
```

### increment operator difference

- i++ → Post-increment
  Returns the original value of i, then increments.

- ++i → Pre-increment
  Increments i first, then returns the new value

### var vs const vs let

- const -> works just ike let, but you CANNOT change the value its permanent
  so

```javascript
const x = 1;
const z = x + y; // not allowed = TypeError
```

why this for?

- well we can store a value that dont change like, let days = 7; or let pi = 3.14159;
- but when we get to array and objects or DSA and const becomes useuful

(old variable keyword)

- var -> before let & const, var was the only way of declaring variables, these days. there isnt really a reason to use it.
  but it still works

### variables can change name

```javascript
let numDog = 1; // number
numDog = false; // now a boolean
numDog = 200; // back to number
```

### variable naming and conventions

These are not rules, but what developers usually follow:

1. camelCase for variables and functions
   let firstName = "colt";
   let totalPrice = 150;
   function calculateTotal() {}

2. UPPER_CASE_SNAKE_CASE for constants
   const PI = 3.14159;
   const MAX_USERS = 100;

3. PascalCase for Classes & Constructors
   class UserAccount {}
   function CarModel() {}

4. Descriptive names

```javascript
✅ Good: let userAge = 25;
❌ Bad: let x = 25; (unless it’s obvious like in math code)
```

5. Booleans often start with is, has, can, should
   let isLoggedIn = true;
   let hasDiscount = false;

# Scope

- Variable visibility - where the location is defined dictates where we have access to that variable

### Function Scope

Variables declared inside a function are **function-scoped**, meaning they can only be accessed within that function.

```javascript
let radius = 0;
function check() {
  msg = "hi";
}
console.log(radius); // 0
console.log(msg); // no access
```

### Block Scope

Variables declared with `let` and `const` are **block-scoped**, meaning they can only be accessed within the block `{}` where they're declared.

```javascript
let radius = 0;
if (radious == 0) {
  let PI = 3.14159;
  let msg = "hi!";
}

console.log(radius); // 0
console.log(msg); // no access
```

### lexical scope

- an inner function nested in some paretn function will have access outer of that function's variable

```javascript
function bankRob() {
  const heroes = ["police", "miltary", "swat"];

  function cryForHelp() {
    for (let hero of heroes) {
      function anotherIn() {
        console.log("please help us!", hero.toUpperCase());
      }
    }
    anotherIn();
  }
  cryForHelp();
}
```

### function expression

- this is just like python's lambda but here our function doesnt have a name unless we add a variable name in by that function

```javascript
const squared = function (num) {
  return num * num;
};
squared(7); // 49
```

### higher order functions

functions that operate on/with other functions.
they can:

- accept other functions as args
- return a function

```javascript
function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

function callTwice(func) {
  func();
  func();
}

callTwice(rollDie);
```

### returning functions

- its basically just returning a function isntaed of a variable which by default runs that function when returned

```javascript
function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      // returning function
      console.log("random > 0.5");
    };
  } else {
    return function () {
      // return this
      console.log("random <= 0.5");
    };
  }
}
// makeMysteryFunc returns a function. You need to call the returned function:
const mystery = makeMysteryFunc();
mystery();
makeMysteryFunc()(); // call the function you got back
```

```javascript
let num = 80;
function isBetween(num) {
  return num >= 50 && num <= 100;
}
console.log(isBetween(num));
```

### methods

method is just a function that is palce on a property on a object -> like object.function()
we can add functions as propeties on objects

- we call them methods!

```javascript
const math = {
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
};
```

### methods vs class

methods

- It’s a singleton object — there’s only one math.
- You can call math.multiply(2,3) but you can’t make “new instances” of math.
- It’s like a namespace of utility functions.
  classes
- Classes are blueprints.
- They’re for creating multiple objects (instances) that share behavior.
- Each instance can hold its own data (this.something) and use the class’s methods.

```javascript
class Calculator {
  constructor(name) {
    this.name = name; // each calculator has its own name
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    return x / y;
  }
}

const calc1 = new Calculator("Casio");
const calc2 = new Calculator("Sharp");

console.log(calc1.name, calc1.multiply(2, 5)); // Casio 10
console.log(calc2.name, calc2.divide(10, 2)); // Sharp 5
```

### the mysterious keyword 'this'

- 'this' is used to access other properties on the same object

```javascript
const person = {
  first: "robert",
  last: "herjavec",
  fullName() {
    return `${this.first} ${this.last}`;
  },
};
person.fullName(); // robert herjavec
```

##### window level object DOM intro

- In a browser environment, window is the global object.
- Any variable or function you define in the global scope becomes a property of window.

```javascript
function scream() {
  console.log("AHHHH!");
}

scream(); // AHHHH!
window.scream(); // AHHHH!
```

### Try Catch

they have somethign to do with errors or exceptions in javascrip

- they prevent errors from breaking our code or executing
## Array Methods

what is call back?

A callback is a function that is passed as an argument to another function and is executed at a later time. The name "callback" comes from the fact that the function is "called back" when needed.

### Foreach

foreach - accepts a callback function. calls the function once per element in the array

### map

creates a new array with the results of calling a callback on every element in the array

The .map() method creates a new array by calling a callback function on every element in the original array. It transforms each element and returns a new array with the transformed values.

im short it just read the current array and creates a new one with it that you can apply programming

### arrow functions

- syntactically compact alternative to a regular function expresssion
- basically replace function to '=>'

```javascript
const square = (x) => {
  return x * x;
};
```

### set timeout and set interval

set timeout it except 2 things callback and number of millisecond to delay the function executions

set internval - we can repeate somethign at a interval

### the filter method

The .filter() method creates a new array with only the elements that pass a test (return true) from the callback function.

- this callback needs to return true or false

### Every

test whether all elements in array pass the provided function. It return a boolean value

- imagine this as a and gate, every thing must be true

```javascript
const exams = [80, 90, 95, 92, 86, 74, 79, 82, 99];
let result = exams.every((score) => score >= 75); // false
```

### some

similar to every but returns true if any of the array elements pass the function

- imagine to it as a or gate, some atleast one can be true

### reduce

- executesa a reducer function on each element of the array resulting a single value
  basically its just like prefix sum

## Important about function

```javascript
// ...existing code...

// Method 1: Function declaration
function allEvens(arr) {
  return arr.every((n) => n % 2 == 0);
}

console.log(allEvens([2, 4, 6, 8])); // true
console.log(allEvens([2, 4, 6, 7])); // false

// Method 2: Arrow function
const allEvens2 = (arr) => {
  return arr.every((n) => n % 2 == 0);
};

console.log(allEvens2([2, 4, 6, 8])); // true

// Method 3: One-liner arrow function
const allEvens3 = (arr) => arr.every((n) => n % 2 == 0);

console.log(allEvens3([2, 4, 6, 8])); // true
```

```javascript
// Function to check if any number is odd
const hasOdds = (arr) => arr.some((n) => n % 2 !== 0);
console.log(hasOdds([2, 4, 6, 8])); // false
console.log(hasOdds([2, 4, 6, 7])); // true

// Function to check if all words are short
const allShortWords = (words) => words.every((word) => word.length < 5);
console.log(allShortWords(["cat", "dog", "bee"])); // true
console.log(allShortWords(["cat", "elephant", "bee"])); // false

// Function to check if any word is long
const hasLongWord = (words) => words.some((word) => word.length > 5);
console.log(hasLongWord(["cat", "dog", "bee"])); // false
console.log(hasLongWord(["cat", "elephant", "bee"])); // true
```

### arrow function and this keyword

you can use this in both, but with arrow functions you cannot access the existing this data of the object itself.
Regular functions: Create their own this context
Arrow functions: Inherit this from where they're defined

```javascript
// Global scope: this = window/global
const globalThis = this;

const person = {
  name: "Alice",

  // Arrow function inherits 'this' from global scope
  method1: () => {
    console.log(this === globalThis); // true
    console.log(this.name); // undefined
  },

  // Regular function gets 'this' = person object
  method2: function () {
    console.log(this === person); // true
    console.log(this.name); // 'Alice'

    // Arrow function inherits 'this' from method2
    const inner = () => {
      console.log(this === person); // true
      console.log(this.name); // 'Alice'
    };
    inner();
  },
};
```

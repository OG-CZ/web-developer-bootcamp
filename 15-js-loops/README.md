### Loops

loops allow us to repeat code

- print 'hello' 10 time
- sum all numbers in a array

There are multiple types:

- for loop
- while
- for... of loop
- for... in loop

#### For loop

```javascript
for (let i = 0; i < 5; i++) {
  // code to run each iteration
}
```

#### While loop

```javascript
let i = 0;
while (i < 5) {
  // code to run while condition is true
  i++;
}
```

#### For...of loop

```javascript
const items = ["a", "b", "c"];
for (const item of items) {
  // item is each value
}
```

#### For...in loop

```javascript
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  // key is each property name
  const value = obj[key];
}
```

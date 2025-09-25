// slice to get part of a array
let colors = ['red','blue','green','violet','aqua'];

console.log('slice');
// copy of a portion of an array from the start index up to, but not including, the end index.
console.log(colors.slice());
console.log(colors.slice(3)); // violet aqua
console.log(colors.slice(1,2)); // blue
console.log(colors.slice(2,4)); // green violet

console.log('splice');
// splice 
console.log(colors.splice(2,3)); // green violet aqua
colors.splice(1,0,'green-violet'); // at index 1, remove 0, add green violet at index 1
console.log(colors);
 
console.log('sort');
let alphabet = ['d','b','c','a','e'];
let number = [5,4,3,2,1];

console.log(alphabet.sort());
console.log(number.sort());


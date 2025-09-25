// so array are comparing the reference to in the memory
let num1 = [1,2,3] 
let num2 = [1,2,3]

// it is checking the memory in the array not the actual content

console.log(num1 == num2);  // false
console.log(num1 === num2); // false

let num1Copy = num1
console.log(num1 == num1Copy); // true
console.log(num1 === num1Copy); // true



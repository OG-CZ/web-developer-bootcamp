console.log('abc'.length === 3 && 4 + 4 === 8); // true

console.log(1 + 1 == 2 || 1 - 1 == 2); // true, either one of them is true

console.log(!(1 == 1)) // false, invert the expression output
console.log(!null) // true, inverted originally from false

const mystery = 'P1234567810'


if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('1') !== -1){
    console.log("YOU GOT IT!!!");
}
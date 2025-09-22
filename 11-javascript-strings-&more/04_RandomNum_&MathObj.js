console.log(Math.PI);        // 3.141592653589793
console.log(Math.E);         // 2.718281828459045 (Euler’s number)
console.log(Math.SQRT2);     // 1.4142135623730951 (√2)
console.log(Math.LN2);       // 0.6931471805599453 (ln 2)


console.log(Math.abs(-7));    // 7 (absolute value)
console.log(Math.pow(2, 3));  // 8 (2³)
console.log(Math.sqrt(25));   // 5 (square root)
console.log(Math.cbrt(27));   // 3 (cube root)

console.log(Math.floor(4.9)); // 4 (round down)
console.log(Math.ceil(4.1));  // 5 (round up)
console.log(Math.round(4.5)); // 5 (nearest integer)
console.log(Math.trunc(4.7)); // 4 (remove decimal part)

console.log(Math.min(5, 1, 7)); // 1
console.log(Math.max(5, 1, 7)); // 7

console.log(Math.random());   // random number 0 ≤ x < 1

let step1 = Math.random() * 10;
let step2 = Math.floor(step1);
let step3 = step2 + 1
console.log(step3)
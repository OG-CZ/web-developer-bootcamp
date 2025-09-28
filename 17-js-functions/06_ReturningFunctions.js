function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () { // returning function
            console.log('random > 0.5');
        };
    } else {
        return function () { // return this
            console.log('random <= 0.5');
        };
    }
}
// makeMysteryFunc returns a function. You need to call the returned function:
const mystery = makeMysteryFunc();
mystery();
makeMysteryFunc()(); // call the function you got back

let num = 80;
function isBetween(num) {
    return num >= 50 && num <= 100;
}
console.log(isBetween(num));


function makeBeetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;    
    }
}
let output = makeBeetweenFunc(100,200)(120);
console.log(output);


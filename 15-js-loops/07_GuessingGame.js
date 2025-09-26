let max = parseInt(prompt('enter the max number!'));
while (!max) {
    max = parseInt(prompt('enter a valid numnber!'))
}

const target = Math.floor(Math.random() * max) + 1;
console.log(target);

let guess = parseInt(prompt('enter your first guess'));
let attempt = 1;

while (guess !== target) {
    attempt++;
    if (guess > target) {
        guess = parseInt(prompt('too high! enter a new guess'));
    } else {
        guess = parseInt(prompt('too low! enter a new guess'))
    }
}
console.log('you win but you got', attempt, 'guesses')
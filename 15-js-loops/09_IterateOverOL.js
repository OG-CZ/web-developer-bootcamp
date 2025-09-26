const testScores = {
    keenan: 90,
    damon: 78,
    kim: 100,
    shawn: 77,
    dwayne:86
}

for (let person in testScores) {
    console.log(person, 'scored', testScores[person]);
}

let keys = Object.keys(testScores);
let values = Object.values(testScores);

console.log(keys);
console.log(values);

let sum = 0;
for (let score of Object.values(testScores)) {
    sum += score;
}
console.log(sum);
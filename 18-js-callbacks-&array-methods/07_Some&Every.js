// every method

const exams = [80,90,95,92,86,74,79,82,99];
let result = exams.every(score => score >= 75);
console.log(result);

// some method

const words = ['dog','hen','chicks','bees']
result = words.some(word => word.length >= 5);
console.log(result);


let allEvens = (arr) => {
    return arr.every(n => (n % 2) == 0);
};
console.log(allEvens([2,4,6,8]));

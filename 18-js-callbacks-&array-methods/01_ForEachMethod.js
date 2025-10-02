const numbers = [1,2,3,4,50];

function print(element) {
    console.log(element);
}

print(numbers[0]);
numbers.forEach(print);

// old version

numbers.forEach(function (element) {
    console.log(element);
});


// new version 

for (let el of numbers) {
    console.log(el);
}

console.log()

const movies = [
    {title: 'a', score: 99},
    {title: 'b', score: 80},
    {title: 'c', score: 90},
];

movies.forEach(function (movie){
    console.log('movie title and score:', movie.title, movie.score);
}) 
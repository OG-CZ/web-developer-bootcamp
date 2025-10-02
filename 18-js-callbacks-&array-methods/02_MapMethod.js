const numbers = [1,2,3,4,5,6,7,8,9,10];

const doubles = numbers.map(function (num) {
    return num * 2;
});

console.log(doubles);    // 2,  4,  6,  8, 10, 12, 14, 16, 18, 20


// get title
const movies = [
    {title: 'a', score: 99},
    {title: 'b', score: 80},
    {title: 'c', score: 90},
];

const titles = movies.map(function (movie){
    return movie.title;
});

console.log(titles);
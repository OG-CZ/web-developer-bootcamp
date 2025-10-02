const movies = [
    {title: 'a', score: 99},
    {title: 'b', score: 80},
    {title: 'c', score: 90},
];

const x = movies.map((movie) => {
    return `${movie.title} - ${movie.score/10}`;
})

console.log(x);
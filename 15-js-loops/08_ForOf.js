const animals = ['cat', 'dog', 'bird', 'elephant', 'lion', 'tiger', 'giraffe', 'zebra'];

for (const animal of animals) {
    console.log(animal);
}

const seatingChart = [
  ['Alice', 'Bob', 'Charlie'],
  ['Diana', 'Evan', 'Fiona'],
  ['Gina', 'Hank', 'Iris']
];

for (const row of seatingChart) {
    for (const name of row) {
        console.log(name);
    }
}


const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

for(let number of numbers) {
    console.log(number * number)
}
for (let i = 0; i < 3; i++) {
    console.log(`i is: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`   j is: ${j}`)
    }
}

const seatingChart = [
  ['Alice', 'Bob', 'Charlie'],
  ['Diana', 'Evan', 'Fiona'],
  ['Gina', 'Hank', 'Iris']
];

for (let i = 0; i < seatingChart.length; i++) {
  for (let j = 0; j < seatingChart[i].length; j++) { 
    console.log(seatingChart[i][j]);
  }
}
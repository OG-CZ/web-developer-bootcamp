const cat = {
    name: 'blue steele',
    color: 'gray',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says:`);
        console.log('meow...meow...meow!');
    },
    info() {
        console.log(this.name, 'color is', this.color);
    },
    all() {
        console.log(this); // window object built in js
    }
}

cat.meow();
cat.info();
cat.all();

console.log();


const meow2 = cat.meow;
meow2(); // the cat objects is lost

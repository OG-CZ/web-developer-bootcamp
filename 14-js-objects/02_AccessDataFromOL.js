const person = { 
    firstname: 'mick',
    lastname: 'galagher',
    age: '23',
    usernames: ['rnadom123','chicekngang','horseman'],
    isStudent: false
}; // -> {} this creat

console.log(person['firstname'] + " " + person['lastname']);
console.log(person.firstname, "is not a student so it's", person.isStudent)

const year = {
    1990: 'GOOD', // this will be converted into a string
    false: 2000
}

console.log(year[1990]);
console.log(year[false]); // 2000 converted into a string


//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = (restaurant['address'] + ', '+ restaurant['city'] + ', '+ restaurant["state"] + ' ' + restaurant["zipcode"]);

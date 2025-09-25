// create a nested array inside an object
const persons = [
    { 
        firstname: 'mick',
        lastname: 'johnson',
        age: 28,
        isEmployed: true,
        hobbies: ['reading', 'gaming', 'hiking', 'photography', 'cooking'],
        address: {
            street: '123 Main St',
            city: 'Springfield',
            zip: '12345'
        }
    },
    { 
        firstname: 'sarah',
        lastname: 'williams',
        age: 32,
        isEmployed: false,
        hobbies: ['yoga', 'traveling', 'painting', 'baking'],
        address: {
            street: '456 Oak Ave',
            city: 'Greenville',
            zip: '67890'
        }
    },
    { 
        firstname: 'tom',
        lastname: 'lee',
        age: 24,
        isEmployed: true,
        hobbies: ['cycling', 'movies', 'coding'],
        address: {
            street: '789 Pine Rd',
            city: 'Hilltown',
            zip: '54321'
        }
    }
];

console.log(persons[0].firstname + "'s hobbies are: " + persons[0].hobbies[0] + ", " + persons[0].hobbies[1] + ", and " + persons[0].hobbies[2]);   

// create a nested object inside an object
const students = [
    {
        firstname: 'danielle',
        age: 20,
        isEnrolled: true,
        hobbies: ['painting', 'cycling'],
        courses: {
            math: 'A',
            science: 'B',
            literature: 'A',
            history: 'B+'
        }
    },
    {
        firstname: 'alex',
        age: 22,
        isEnrolled: false,
        hobbies: ['music', 'soccer'],
        courses: {
            math: 'B',
            science: 'A',
            literature: 'B+',
            history: 'A-'
        }
    },
    {
        firstname: 'jordan',
        age: 19,
        isEnrolled: true,
        hobbies: ['coding', 'chess'],
        courses: {
            math: 'A+',
            science: 'A',
            literature: 'B',
            history: 'B'
        }
    }
];

console.log(students[0].firstname + "'s grade in science is: " + students[0].courses.science);  
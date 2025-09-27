function greet(firstName, lastName) {
    console.log('hey there', firstName, lastName);
}

greet('georgia', 'Lee')

function repeat(str, number) {
    let word = '';
    for (let i = 0; i < number; i++) {
        word += str;
    }
    console.log(word)
}

repeat('#', 10);


function isSnakeEyes(num1,num2) {
    if (num1 == 1 && num2 == 1) {
        console.log('Snake Eyes!')
    } else {
        console.log('Not Snake Eyes!')
    }
}
isSnakeEyes(1,1);
isSnakeEyes(1,2);
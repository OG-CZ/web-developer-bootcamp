let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

const SECRET = 'code';
let guess = prompt(`what's the password`);

while (guess !== SECRET) {
    let guess = prompt(`what's the password`);
}
console.log('go in...')
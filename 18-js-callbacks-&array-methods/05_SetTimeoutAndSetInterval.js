//  set time out
console.log('wait for 1500 millisecond');
setTimeout(() => {
    console.log('HELLO!!!')
}, 1500)


//  set interval
let count = 0;
const id = setInterval(() => {
    console.log(Math.random());
    count++;
    if (count == 10) clearInterval(id);
}, 1000);


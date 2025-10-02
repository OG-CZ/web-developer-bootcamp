const numbers = [1,2,3,4,5,6,7,8,9,10];

let result = numbers.filter(n => {
    return n < 4;
});

console.log(result);

console.log('asdasdas'.length);


function validUserNames(usernames) {
   return usernames.filter(name => name.length < 10);
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));
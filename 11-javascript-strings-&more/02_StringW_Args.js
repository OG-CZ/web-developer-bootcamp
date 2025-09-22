let what = 'catdog';

what = what.indexOf('dog'); // 3
console.log(what);

'hello world'.indexOf('o'); // 4
'hello world'.lastIndexOf('o'); // 7   
'hello world'.indexOf('cat'); // -1 
'hello world'.indexOf('d'); // 10 

str = 'hello world';
str = str.slice(0, 5); // "hello"
str = str.slice(6); // "world"

str = 'hello world';
str = str.substring(0, 5); // "hello"
str = str.substring(6); // "world"

let word = 'skateboard';
console.log(word.slice(5).replace('o','e'));
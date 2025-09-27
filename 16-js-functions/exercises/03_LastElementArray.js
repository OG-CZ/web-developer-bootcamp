function lastElement(array) {
    if (array.length === 0) {
        return null;
    }
    return array[array.length-1];
}

console.log(lastElement([3,5,7]));
console.log(lastElement([]));
console.log(lastElement([17]));

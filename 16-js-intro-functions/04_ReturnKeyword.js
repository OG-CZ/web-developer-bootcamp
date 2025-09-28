function add(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') { return false };
    return x + y;
}

console.log(add(1,1));
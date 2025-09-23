let testOne = "";

if (testOne) {
    console.log('truthy')
} else {
    console.log('falsey')
}


testOne = 0;

if (testOne) {
    console.log('truthy')
} else {
    console.log('falsey')
}

testOne = undefined;

if (testOne) {
    console.log('truthy')
} else {
    console.log('falsey')
}

testOne = false;

if (testOne) {
    console.log('truthy')
} else {
    console.log('falsey')
}

testOne = NaN;

if (testOne) {
    console.log('truthy')
} else {
    console.log('falsey')
}
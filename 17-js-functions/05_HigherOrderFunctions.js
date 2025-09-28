function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}


function callTwice(func) {
    func();
    func();
}

callTwice(rollDie);
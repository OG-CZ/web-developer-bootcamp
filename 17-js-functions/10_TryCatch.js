function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        // console.log(e)
        console.log('please pass a string');
    }
}

yell('hello');
yell(11); // error
yell(true); // error
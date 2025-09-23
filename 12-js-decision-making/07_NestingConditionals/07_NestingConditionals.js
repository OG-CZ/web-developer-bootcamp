const password = prompt('please enter a password');

if (password.length >= 6) {
    if (password.match(' ')) {
        console.log('password cannot include space')
    } else {
        console.log('working')
    }
} else {
    console.log('password to short')
}
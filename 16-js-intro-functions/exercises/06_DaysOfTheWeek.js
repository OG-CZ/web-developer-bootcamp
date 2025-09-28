function returnDay(number) {
    if (number > 7) {
        return null;
    }

    if (number == 7) {
        return 'Sunday'
    } else if (number == 6) {
        return 'Saturday'
    } else if (number == 5) {
        return 'Friday'
    } else if (number == 4) {
        return 'Thursday'
    } else if (number == 3) {
        return 'Wednesday'
    } else if (number == 2) {
        return 'Tuesday'
    } else if (number == 1) {
        return 'Monday'
    } 
    return null;
}

console.log(returnDay(1));
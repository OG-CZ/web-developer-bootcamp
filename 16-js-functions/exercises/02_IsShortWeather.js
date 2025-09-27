function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}

// More concise version:
// function isShortsWeather(temperature) {
//     return temperature >= 75;
// }

console.log(isShortsWeather(10)); // false - too cold for shorts
console.log(isShortsWeather(80)); // true - perfect for shorts
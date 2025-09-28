
const math = {
    multiply : function (x,y) {
        return x * y;
    },
    divide : function(x,y) {
        return x / y;
    },
    square : function (x) {
        return x * x;
    }
}
console.log(math.multiply(10,10)); // 100

const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}
console.log(myMath.PI); // 3.14159
console.log(myMath.square(myMath.PI)); // 9.869587728099999
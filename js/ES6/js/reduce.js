//reduce 

//es6

var numbers = [10, 20, 30];
var sum = 0;

//es6

var sumValue = numbers.reduce(function (sum2, number2) {
    return sum2 += number2;
}, 100)

console.log(sumValue);


//c场景2

//将数组中的对象某个属性抽离到另外一个数组中

var primaryColors = [
    { color: "red" },
    { color: "yellow" },
    { color: "blue" }
];
var colors = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(colors);


// 判断括号是否对称

function balanceParens(string) {
    return string.split("").reduce(function (previous, char) {
        if (char == "(") { return ++previous; }
        if (char == ")") { return ++previous; }
        return  previous;
    }, 0)
}

console.log(balanceParens("(((("))
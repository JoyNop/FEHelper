// 场景1

// 假定一个数组(A)，将A数组中的值以双倍的形式放到数组B

var numbers = [1, 2, 3];

var doubledNmubers = [];

//es5

for (var i = 0; i < numbers.length; i++) {
    doubledNmubers.push(numbers[i] * 2);
}
console.log(doubledNmubers);

//es5

for (var i = 0; i < doubledNmubers.length; i++) {
    console.log(doubledNmubers[i]);
}

console.log("---------------");


//es6 map

var doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubled);


//es6 foreach

doubled.forEach(function (number) {
    console.log(number);
})


// 场景2

// 假定有一个数组A，将数组A中的对象某个属性存储到数组B中


var cars = [
    { model: "Buick", price: "CHEAP" },
    { model: "BMW", price: "expensive" }
];

var prices = cars.map(function (car) {
    return car.price;
})
console.log(prices);
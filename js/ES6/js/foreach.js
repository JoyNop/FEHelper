var colors=["red","blue","green"];
//es5遍历数组
for(var i=0;i<colors.length;i++){
    console.log(colors[i]);
}

//es6  foreach

colors.forEach(function(color){
    console.log(color);
})

//练习遍历数组的值，并计算总和

var numbers=[1,2,3,4,5];

var sum=0;

numbers.forEach(function(number){
    sum+=number;
    
})
console.log(sum);


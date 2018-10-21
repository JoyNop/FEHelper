# forEach、for-in与for-of的区别

#forEach介绍

```javascript
objArr.forEach(function (value){
    console.log(value);
});
```

> `foreach` 方法没办法使用`break`语句跳出循环，或者使用`return`从函数体内返回

# for-in介绍

```javascript
for(var index in objArr){
    console.log(objArr[index])
}
```

以上代码会出现的问题

1. `index`值会是字符串（`string`）类型
2. 循环不仅会遍历数组元素，还会遍历其他任意自定义添加的属性，如`objArr`上面包含的自定义属性，`objArr.name`，那这次循环中也会出现`name`属性
3. 在某些情况下上述代码会随机循环数组

>`for-in`循环设计之初，是给普通义字符串的值的key的对象使用的，而非数组。

# for-of介绍

```JavaScript
for(let value of objArr){
    console.log(value)
}
```

1. 可以避免所有`for-in`循环的陷阱
2. 不同于`forEach()`可以使用`break`，`continue`,和`return `
3. `for-of`循环不仅仅支持数组的遍历。同样适用于很多类似数组的对象
4. 他也支持`字符串`遍历
5. `for-of` 并不适用于处理原有原生对象

#for-of 遍历Set

```JavaScript
var uniqueWords=new Set(words);

for(var word of uniqueWords){
    console.log(word);
}
```

#for-of 遍历Map

```JavaScript
for(var [key,value] of phoneBookeMap){
    console.log(key+"'s phone number is:"+value);
}
```

>`map`是键值对组成，需要使用ES6的新特性`解构`

#for-of 遍历原生对象

```JavaScript
//输出对象自身可以枚举的值
for(var key of Object.keys(someObject)){
    console.log(key + ": " + someObject[key]);
}
```
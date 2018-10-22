# 重排序的两个方法

`reverse()`方法会反转数组项的顺序

ex

```JavaScript
var values = [1, 2, 3, 4, 5];
values.reverse();
alert(values);
```

这里的初始值是1,2,3,4,5。而调用数组的reverse方法后，其值的顺序变成了5,4,3,2,1  

`sort()`方法在默认情况下，sort()方法按升序排列数组项——即最小的位置位于最前面，最大的值排在最后面，sort()方法会调用每个数组项的`toString()`转型方法，然后比较得到的字符串，以确定如何额排序，及时数组中的每一项都是数值`sort()`方法也比较的是字符串

```JavaScript
var values=[0,5,15,20];
values.sort();
alert(values)// 0,15,20,5
```

因此`sort()`方法可以接受一个比较函数作为参数，以便我们制定哪个值位于哪个值前面

比较函数设置两个参数，如果第一个参数位于第二个之前啧返回一个负数，如果两个参数相当则返回0，如果第一个参数位于第二个之后，则返回一个整数，↓

```JavaScript
var values = [0, 5, 15, 20];
debugger
values.sort(compare);
alert(values);

function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
```



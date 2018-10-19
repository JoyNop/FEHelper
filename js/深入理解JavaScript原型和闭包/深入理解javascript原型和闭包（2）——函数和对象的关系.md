函数就是对象的一种，因为可以通过instanceof函数可以判断

```JavaScript
var fn=function(){
};
console.log(fn instanceof Object);//true
```

对！函数是一种对象，但是函数却不像数组一样——你可以说数组是对象的一种，，却不仅仅是一种包含关系，函数和对象之间的关系比较复杂，甚至有一点鸡生蛋蛋生鸡的逻辑

ex:

```JavaScript
function Fn{
    this.name='JoyNope';
    this.year='1997';
}
var fn1=new Fn();
```
console.log(Fn);

console.log(fn1);

得到结果

![console.log(Fn);
console.log(fn1);](img/2_1.jpg)

上面的例子很简单，说明对象可以通过函数来创建。对！也只能说明这一点

但是我要说**对象都是通过函数来创建的**肯定会有人反驳：不对！因为：

```JavaScript
var obj={a:10,b:20};
var arr={5,'x',true};
```

但是不好意思，这个**真的**是**一种**`快捷方式`，在编程语言中，一般称作“语法糖”。

做语法糖做的最好的可能是微软大哥，它吧他们家C#那小子弄的不男不女的，本想图个人见人爱，谁知道还得到处跟人解释——其实他是个男孩！

以上代码的本质是：

```JavaScript
//var obj = { a: 10, b: 20 };
//var arr = [5, 'x', true];

var obj=new Object();
obj.a=10;
obj.b=20;

var arr=new Array();
arr[0]=5;
arr[1]='x';
arr[2]=true;
```

而其中 Object 和Array都是函数

```JavaScript
console.log(typeof (Object));  // function
console.log(typeof (Array));  // function
```

所以我很负责人的来说，**对象都是通过函数来创建的**

现在是不是糊涂了，对象是函数创建的，而函数又以一种对象！天安函数和对象到底是什么关系


别着急！揭开这个谜底，还得先去了解一下另一位老朋友——prototype原型。
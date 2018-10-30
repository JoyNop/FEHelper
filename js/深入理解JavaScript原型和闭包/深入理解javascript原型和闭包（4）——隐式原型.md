*注意：本文不是javascript基础教程，如果你没有接触过原型的基本知识，应该先去了解一下，推荐看《javascript高级程序设计（第三版）》第6章：面向对象的程序设计。*

上节已经提到**每个函数`function`都有一个`prototype`**,既原型，这里在加上一句话——**每个对象都有一个`__proto__`**可成为隐式原型

这个`__proto__`是一个隐藏的属性，JavaScript不希望开发者用到这个属性，有点低版本浏览器甚至不支持这个属性值

```javascript
var obj={};
console.log(onj.__prptp__);
```

![](img/4-1.png)

上面截图来看，obj.__proto和Object.prototype属性一样，这么巧！

答案呢就是一样

obj这个对象的本事是object函数创建的，因此`obj.__proto__===Object.prototype`我们可以用一个图表来表示

![](img/4-2.png)

> **每个对象都有一个`__proto__`属性，指向创建该对象函数的prototype**

那么上图中的`Object prototype`也是一个对象，他的`__proto__`指向哪里？

好问题

在说明"Object prototype"之前，先说一下自定义函数的prototype。自定义函数的prototype本质上就是和`var object={}`是一样的，都是被Object创建，所以他的__proto__指向的就是`object.prototype`

但是**Object.prototype确实是一个特例——他的__proto__指向的是null**

![](img/4-3.png)


还有——函数也是一种对象，函数也有__proto__吗？

又一个好问题！——当然有。

函数也不是从石头缝里蹦出来的，函数也是被创建出来的。谁创建了函数呢？——Function——注意这个大写的“F”。

且看如下代码。

```javascript
function fn(x,y){
    return x+y;

}
console.log(fn(10,20));

var fun1=new Function("x","y","return x+y;")

console.log(fn1(5,6));
```

以上代码中，第一种方式比较传统函数创建方式，第二种用new Function创建

首先根本不推荐采用第二种方式

这里只是向大家展示，函数被function创建

好了，根据上面的一句话——对象__proto__指向的是创建他的prototype，就会出现 `Object.__proto__ === Function.prototype`用一个图来表示。

![](img/4-4.png)

上图中，很明显的标出了：自定义函数Foo.__proto__指向Function.prototype，Object.__proto__指向Function.prototype，唉，怎么还有一个……Function.__proto__指向Function.prototype？这不成了循环引用了？

对！是一个环形结构。

其实稍微想一下就明白了。Function也是一个函数，函数是一种对象，也有__proto__属性。既然是函数，那么它一定是被Function创建。所以——Function是被自身创建的。所以它的__proto__指向了自身的Prototype。

 

篇幅不少了，估计也都看烦了。快结束了。

最后一个问题：Function.prototype指向的对象，它的__proto__是不是也指向Object.prototype？

答案是肯定的。因为Function.prototype指向的对象也是一个普通的被Object创建的对象，所以也遵循基本的规则。

![](img/4-5.png)

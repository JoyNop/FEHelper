接着上一节讲的话，应该轮到“执行上下文栈”了，但是这里不得不插入一节，把this说一下。因为this很重要

> **在函数中this到底取何值，实在函数真正被调用执行的时候确定的，函数定义的时候确定不来** 

因为this的取值是执行上下文环境的一部分，每次调用函数，都会产生一个新的执行上下文环境。

this的取值，分为四种情况

## 情况1：构造函数

所谓构造函数就是用来new对象的函数，其实严格来说，所有的函数都可以new一个对象，但是有些函数的定义是为了new一个对象，而有些函数就需要另外注意，构造函数的函数名第一个字母大写（规则约定）例如Object、Array、Function

```javascript
function Foo(){
    this.name='renny';
    this.year='20';
    console.log(this);//Foo{name:"renny,year=20}
}

var f1=new Foo();

console.log(f1.name);//renny
console.log(f1.year);//20
```
以上代码中，如果函数作为构造函数用，那么其中的this就代表他即将new出来的对象

注意，以上仅限new Foo()的情况，即Foo函数作为构造函数的情况，如果直接调用Foo，而不是newFoo() ，情况就不太一样了


```javascript
function Foo(){
    this.name='renny';
    this.year='20';
    console.log(this);//window{top:window,windows:Window,location:location,exter}
}
foo();
```







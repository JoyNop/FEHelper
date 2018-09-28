注意：本文记录作者在学习和使用vuejs开发中的点点滴滴，从vuejs1.0开始直到现在的vuejs2.0以后的版本。期中部分1.0的内容已经过时，仅作各位朋友参考，建议重点关注2.0相关的内容，会随着我对vuejs有了更多的体会后不断维护更新，也欢迎朋友们批评指正共同学习提高。

## 所有的VueJs组件都是被扩展的Vue实例

```javascript

var MyComponent=Vue.extend(
    {
        ///扩展选项对象
    }
)
var myComponentInstance=new MyComponent();
```

## 每个Vue实例都会代理这个恶势力的data属性的所有属性

```Javascript

var data={a:1}
var vm=new Vue({
    dat:data
}) 
vm.a===data.a//->true
//设置属性也会影响到原始数据

vm.a=2
data.a //->2
//反之亦然
data.a=3
vm.a//->3
```

## 所有Vue实例本身暴露的属性和方法，都以$为头来区别，对应Vue.set global API

例如：vm.data,vm.el, vm.$watch,这个有利于和data属性对象的数据来区分；

## 所有的directive都以v-xxxx形式存在
 
```JavaScript

<p v-if="greeting">Hello!</p>//根据greeting表达式的值来插入或者删除P元素
<a v-bind:href="url"></a>//href是argument，表示a元素的href属性和url属性绑定起来
其对应的缩写为
<a href="url"></a>//是个缩写行事
<a v-on:click="dosomething">//click是参数，表示onclick时，执行dosomething这个表达式（函数）
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>

<!-- 缩写 -->

<a @click="dosomething"></a>
<a v-bind:href.literal="/a/b/c"></a>//href为argument，literal为修饰符，表示后面“/a/b/c”d字面值，而不是表达式
<button :disabled="someDynamicCondition">Button</button>//版顶到一个布尔值，如果真，则disabled属性就加载button上
```

## directive object context暴露出来公update/bind函数使用

> `el:` the element the directive is bound to
> `vm: `the context ViewModel that owns this directive.
> `expression` the expression of the binding ,excluding arguments and filtres.
> `arg` the argument ,if present
> `name` the name of the diective ,with the prefix.
> `modifiers` an object containing modifiers ,if any
> `description` an object that contains the parsing result of the entire directive
> `params` an object containing param attributes.


```

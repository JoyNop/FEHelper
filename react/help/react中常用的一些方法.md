# React中常用的一些方法

## React.createClass:

创建一个ReactClass（组件类），参数是一个对象且必须带有render属性方法，该方法必须返回一个封闭的容器（容器内可以有其他不限结构的容器）或者null/false（表示啥都不渲染）

## React.createElement:

**第一个参数是`DOM名称`，第二个参数是`属性`，第三个参数是`值`**

> 第一个参数是必填，传入的是似HTML标签名称，eg: ul, li 
> 第二个参数是选填，表示的是属性，eg: className 
> 第三个参数是选填, 子节点，eg: 要显示的文本内容

创建一个指定类型的React元素，注意第三个参数`children`是可以任意个react元素

```JavaScript
React.createElement('p',null,)
React.createElement('span',null,'Hello'),
React.createElement(Component,{a:1})
```

`React.createElement(type,props,children)`


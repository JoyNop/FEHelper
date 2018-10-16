# 优化CSS重排重绘与浏览器性能

关于CSS重排和重绘的概念，最近看到不少这方面的文章，觉得挺有用，在制作中考虑浏览器的性能，减少重排能够节省浏览器对其子元素及父类元素的重新渲染；避免过分的重绘也能节省浏览器性能；优化动画，使用3D启用GPU硬件加速；慎重选择高消耗的样式，如box-shadow、border-radius、transform、css filters等。

## 浏览器渲染机制

浏览器渲染展示页的过程，大致可以分为一下几个步骤

1. 解析HTML(HTML Parser)
2. 构建DOM(DOM Tree)
3. 渲染树构建(Render Tree)
4. 绘制渲染树(Painting)

![](img/1_1.png)

## 慎重选择高消耗的样式

什么css的属性是高消耗的？那就是绘制前需要进行大量的计算属性

- box-shadows
- border-radius
- transparency
- transforms
- Cssfilters(性能杀手)

## 什么是reflow

浏览器为了而重新渲染部分或整个页面，重新计算页面的元素位置和几何结构的进程叫做`reflow`

通俗点说就是当开发人员定义好了样式后（也包括浏览器的默认样式），浏览器根据这样样式在计算饼根据结果将元素放到它对应出现的位置上，这个过程叫做`reflow`

由于`reflow`如何减少是浏览器中的用户拦截操作，所以我们了解reflow次数，DOM的层级，css效率队reflow次数多影响十分有必要的

reflow（回流）是导致DOM脚本执行效率低的关键因素之一，页面上任何一个节点触发了reflow，会导致它的子节点级祖先节点重新渲染

简单解释一下reflow 当元素改变的时候，会影响文档内容和结构，元素位置，此过程被称为reflow

```html
<body>
  <div class="hello">
    <h4>hello</h4>
    <p><strong>Name:</strong>BDing</p>
    <h5>male</h5>
    <ol>
      <li>coding</li>
      <li>loving</li>
    </ol>
  </div>
</body>
```
 

当p节点上发生reflow时，hello和body也会重新渲染，甚至h5和ol都会收到影响。

## 什么时候会导致reflow发生呢？

- 改变窗口大小
- 改变文字大小
- 添加/删除样式表
- 内容的改变（用户输入框写入内容也会）
- 激活伪类 如`:hover`
- 操作class属性
- 计算脚本DOM
- 计算offsetWidth和offsetHeight
- 设置style属性

|常见重排元素||||
|---|---|---|---|
|width|height	|padding	|margin|
display|	border-width|	border|	top|
|position	|font-size|	float|	text-align|
|overflow-y	|font-weight|	overflow|	left|
|font-family|	line-height|	vertical-align|	right|
|clear	|white-space|	bottom	|min-height|

## 减少reflow对性能的影响的建议

1. 不要一条一条的修改DOM 样式，预先定好class，然后修改DOM的`className`
2. 把DOM离线后修改出来，比如：先把DOM给`display:none`(又一次Reflow)，然后修改100次，然后再把它显示出来
3. 不要把DOM节点的属性值放在一个循环里当成循环变量
4. 尽可能不要修改大范围DOM
5. 为动画元素使用绝对定位`absolute/fixed`
6. 不要使用table布局，很可能一个小改动会造成整个table重新布局
 
尽可能限制reflow的影响范围，尽可能在低层级的DOM节点上，上述例子中，如果你要改变p的样式，class就不要加在div上，通过父元素去影响子元素不好。

避免设置大量的style属性，因为通过设置style属性改变结点样式的话，每一次设置都会触发一次reflow，所以最好是使用class属性

实现元素的动画，它的position属性，最好是设为absoulte或fixed，这样不会影响其他元素的布局

动画实现的速度的选择。比如实现一个动画，以1个像素为单位移动这样最平滑，但是reflow就会过于频繁，大量消耗CPU资源，如果以3个像素为单位移动则会好很多。

不要使用table布局，因为table中某个元素旦触发了reflow，那么整个table的元素都会触发reflow。那么在不得已使用table的场合，可以设置table-layout:auto;或者是table-layout:fixed这样可以让table一行一行的渲染，这种做法也是为了限制reflow的影响范围

如果CSS里面有计算表达式，每次都会重新计算一遍，出发一次reflow

## 什么是repaint
repaint是在一个元素的外观被改变，但没有改变布局的情况下发生的，如改变了visibility、outline、background等。当repaint发生时，浏览器会验证DOM树上所有其他节点的visibility属性。

通俗来说，就是当各种盒子的位置、大小以及其他属性，例如颜色、字体都确定下来后，浏览器便把这些元素都按照各自的特性绘制一遍，于是页面的内容出现了，这个过程叫做repaint

## 避免过分重绘(Repaints)
当元素改变的时候，将不会影响元素在页面当中的位置（比如 background-color, border-color, visibility），浏览器仅仅会应用新的样式重绘此元素，此过程称为 Repaint。 

## 优化动画
css3 动画是优化的重中之重。除了做到上面两点，减少 Reflow 和 Repaints 之外，还需要注意以下方面。

启用 GPU 硬件加速

GPU（Graphics Processing Unit） 是图像处理器。GPU 硬件加速是指应用 GPU 的图形性能对浏览器中的一些图形操作交给 GPU 来完成，因为 GPU 是专门为处理图形而设计，所以它在速度和能耗上更有效率。
GPU 加速可以不仅应用于3D，而且也可以应用于2D。这里， GPU 加速通常包括以下几个部分：Canvas2D，布局合成（Layout Compositing）, CSS3转换（transitions），CSS3 3D变换（transforms），WebGL和视频(video)。

```HTML

/*
 * 根据上面的结论
 * 将 2d transform 换成 3d
 * 就可以强制开启 GPU 加速
 * 提高动画性能
 */
div {
  transform: translate(10px, 10px);
}
div {
  transform: translate3d(10px, 10px, 0);
}

```

[参考资料](http://caibaojian.com/css-reflow-repaint.html)
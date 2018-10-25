# React生命周期方法

1. `componentWillReceiveProps()`

该方法会接受新属性对象，让你可以根据新属性设置state，还可以进行其他工作以确保组件状态保持正常。

2. `componentWillUpdate()`

当你的组件再次渲染时，在`render()`方法前调用（在组件的props或者state发生改变时触发该方法）。

3. `componentDidUpdate()`

在`render()`函数执行完毕，并且更新的组件已经被同步到DOM后立即调用，该方法不会再初始化渲染时触发。

4. `componentWillMount()`

在新节点插入DOM结构之前触发。

5. `componentDidMount()`

在新节点插入DOM结构之后触发。

6. `componentWillUnmount()`

在组件从DOM中移除时立刻触发。

7. `shouldCcomponentUpdate(newProps,newState)`

这个方法在componentWillUpdate()之前触发，给你一个机会返回false以取消更新组件，这意味着render()方法将不会被调用。这在性能关键的应用场景中非常有用。

当你认为更变的内容没什么特别或者没有重新渲染的需要时，可以实现该方法。要决定是否更新，只需比较newState参数和目前的状态`this.state`的区别，以及`newProps`参数和目前的属性`this.props`的区别。

当然也可以直接认为该组件是景泰的而无需更新
>index.js:1452 Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
    in input (at App.js:95)
    in div (at App.js:78)
    in App (at src/index.js:7)


# 原因：

如果设置`value`，那`value`就永远是设置的那个值，要通过输入内容改变只能通过`onChange`，要么就把这个`input`设置成`readOnly`的

英文讲得很明白，如果你希望的是给字段赋初值那就用 defaultValue，如果用了类似

```javascript 
<input value={1} />
```

这种，那这个输入框的值将永远为1，无法通过输入来更改，只能通过`onChange`来修改
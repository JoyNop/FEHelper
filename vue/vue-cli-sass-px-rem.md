
```css

//跟字体大小
  html{
    font-size: 100px;
  }

  $baseFontSize:100;//基数
  @function px2rem($px){
    @return $px / $baseFontSize * 1rem;
  }
//调用
  .box{
    width: px2rem(600);
    height: px2rem(400);;
    background-color: lawngreen;
  }

 ```
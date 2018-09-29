# 用webpack（2.x语法）手动搭建Vue项目

webpack是一个模块加载器， 一切东西都是模块（包括css、html、js、图片等）, 最后都打包到一块了。
下面我将搭建一个简单的demo

## 一、新建目录结构

```
|-index.html
    |-main.js   //入口文件
    |-App.vue   //vue文件，官方推荐命名法（首字母大写）
    |-package.json  //工程文件(项目依赖、名称、配置)，记录需要的依赖包
        npm init --yes 生成
    |-webpack.config.js //webpack配置文件

```

## 二、编写相关文件

1. index.html页面：展示页面
   
    ```html
   <body>
    <div class="box">  <!-- //用于挂载到vue实例上 -->
      <app></app>  <!-- //app组件 -->
    </div>
    <script src="build.js"></script><!-- //引入用webpack打包后的js文件 -->
   </body>
   ```

2. App.vue组件：写一条数据
   
   ```html
   <template>
   <div>
   <h1>hellow word</h1>
   <h2>{{ msg }}</h2>
   </div>
   </template>
   <script>
   export default {
       data() {
           return {
               msg: 'welcome Vue'
               }
            }
        }
    </script>
<style>
  body{
    background-color: #ccc;
  }
</style>

```
3. main.js入口文件（需要在webpack.config中规定）
   ```
   import Vue from 'vue'  //引入主角vue.js，这里是因为在webpack.config中进行配置地址了
import App from './App.vue'

new Vue({
    el: '.box',
    components:{
        app: App
    }
})

```  
4. webpack.config文件配置webpack的选项
   ```
   var webpack = require('webpack')  //引入文件
module.exports={
    entry:'./main.js', //配置入口
    output:{  //配置输出选项
        path:__dirname,//输出路径为，当前路径下
        filename:'build.js'//输出后的文件名称
    },
    resolve: {//其他的配置选项
        alias: {
            'vue': 'vue/dist/vue.js'//vue文件地址配置
        }
    },
    module:{
        loaders:[//loader配置，需要解析啥东西就用相关的loader
            {test:/\.vue$/, loader:'vue-loader'},
            {test:/\.js$/, loader:'babel-loader', exclude:/node_modules/}//设置node_modules里的js文件不用解析
        ]
    },
    plugins: [//这个是2.x中加的，各种loader的配置选项
        new webpack.LoaderOptionsPlugin({
            options: {
              babel:{
                  presets:['es2015'],
                  plugins:['transform-runtime']
              }
            }
        })
    ]
};
```
5. package.json文件
注意：devDependencies和dependencies不是手动写入的，是在安装依赖的时候自动保存进来的

```
{
  "name": "webpacklist",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "start": "webpack",
    "dev": "webpack-dev-server --inline --hot --port 8088"  //设置启动服务命令，热更新
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel": "^6.23.0", //解析es6语法
    "babel-core": "^6.24.1",//解析es6语法
    "babel-loader": "^6.4.1",//解析es6语法
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",//解析es6语法
    "babel-runtime": "^6.23.0",
    "css-loader": "^0.28.0",
    "vue-hot-reload-api": "^2.1.0",//解析js文件
    "vue-html-loader": "^1.2.4",//解析vue中的html语法啊
    "vue-loader": "^11.3.4",
    "vue-style-loader": "^3.0.0",//解析行间样式，需要两个一起写（和css-load）的时候style-loader必须要写在前面
    "vue-template-compiler": "^2.2.6",//解析vue中的template
    "webpack": "^2.4.1",
    "webpack-dev-server": "^2.4.2"
  },
  "dependencies": {
      "vue": "^2.2.6"  //vue.js主文件
  }
}
```
6. 安装依赖文件
运行命令 => npm install --save-dev "模块名称"

7. 开启服务
运行命令 => npm run dev
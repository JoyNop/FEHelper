# vue2.0项目中使用Ueditor富文本编辑器示例

一、Ueditor介绍——官方网站
UEditor 是由百度「FEX前端研发团队」开发的所见即所得富文本web编辑器。 

二、Vue中使用
1. 用vue脚手架创建一个项目。
2. 配置下载好的Ueditor文件。
将下载好的文件解压后放到static文件夹内。找到ueditor.config.js文件并打开，找到serverUrl，注掉或者删掉。因为本文中不涉及图片显示。项目路径如下图：

3. 配置Vue
A. 编写SetUeditor.vue文件
这里就不叙述vue-router和组件了。首先在setUeditor.vue中设置一个容器，并定义id。


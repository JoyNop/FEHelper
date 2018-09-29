<template>
  <div id="app">
    <h1>{{title}}</h1>
    <app-Header></app-Header>
    <user></user>
    <app-ueditor ></app-ueditor>
    <app-Footer></app-Footer>

  </div>
</template>

<script>
  //局部注册
  import Header from './components/Header'
  import User from './components/User'
  import Footer from './components/Footer'
  import ueditor from './components/ueditor'



  export default {
    name: 'App',
    data() {
      return {
        title: "this is my first vue cli"
      }
    },
    components: {
      "user": User,
      "app-Header": Header,
      "app-Footer": Footer,
      "app-ueditor":ueditor

    }
  }
</script>

<style scoped>
  h1 {
    color: aquamarine;
  }
</style>

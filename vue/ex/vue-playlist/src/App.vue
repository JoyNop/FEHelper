<template>
  <div id="app">
    <h1>{{title}}</h1>
    <app-Header></app-Header>
    <user></user>
    <app-Footer></app-Footer>
  </div>
</template>

<script>
  //局部注册
  import Header from './components/Header'
  import User from './components/User'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    data() {
      return {
        title: "this is my first vue=cli"
      }
    },
    components: {
      "user": User,
      "app-Header": Header,
      "app-Footer": Footer
    }
  }
</script>

<style scoped>
  h1 {
    color: aquamarine;
  }
</style>

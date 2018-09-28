<template>
  <div id="app">
    <h1>{{title}}</h1>
    <user></user>
  </div>
</template>

<script>
  //局部注册
  import User from './components/User'
  export default {
    name: 'App',
    data() {
      return {
        title: "this is my first vue=cli"
      }
    },
    components: {
      "user": User
    }
  }
</script>

<style>

</style>

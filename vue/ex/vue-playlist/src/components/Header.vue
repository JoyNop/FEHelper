<template>
  <header><h1>{{title}}</h1></header>
</template>

<script>
  export default {
    name: "app-Header",
    data() {
      return {
        title: "Vue.js Demo"
      }
    }
  }
</script>

<style scoped>
  header {
    background: lightgreen;
    padding: 10px;
  }

  h1 {
    color: #222;
    text-align: center;

  }
</style>

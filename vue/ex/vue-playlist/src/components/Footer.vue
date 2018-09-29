<template>
  <footer><p>{{copyright}}</p></footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        copyright: "Copyright By Rennysky"
      }
    }
  }
</script>

<style scoped>
  p {
    color: lightgreen;
    text-align: center;
  }

  footer {
    background: #222;
    padding: 6px;
  }

</style>

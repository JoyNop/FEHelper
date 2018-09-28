<template>
  <div class="User">
    <ul>
      <li v-for="users in (user) ">{{users}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        user: ["Henry", "Bucky", "Emily"]
      }
    }
  }
</script>

<style scoped>

</style>

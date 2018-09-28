<template>
  <div class="User">
    <h1>Hello Users</h1>
    <ul>
      <li v-for="user in users " v-on:click="user.show=!user.show"><h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>

    </ul>

  </div>
</template>

<script>
  export default {
    name: "Users",
    data() {
      return {
        users: [
          {name: "Tom", position: "前端", show: false},
          {name: "Tom", position: "前端", show: false},
          {name: "Tom", position: "前端", show: false},
          {name: "Tom", position: "前端", show: false},
          {name: "Tom", position: "前端", show: false},
          {name: "Tom", position: "前端", show: false},
          {name: "Tom", position: "前端", show: false},
          {name: "Tom", position: "前端", show: false},
          {name: "Tom", position: "前端", show: false}
        ]
      }
    }
  }
</script>

<style scoped>
  .User {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>

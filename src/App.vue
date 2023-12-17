<template>
  <nav-home></nav-home>
    <router-view></router-view>
</template>
<script>


import NavHome from "@/components/Nav/navHome.vue";

export default {
  name: 'App',
  components: {
    NavHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

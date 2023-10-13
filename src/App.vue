<template>
  <ListTask></ListTask>
</template>

<script>

import ListTask from "@/components/Task/ListTask.vue";

export default {
  name: 'App',
  components: {
    ListTask,
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
  margin-top: 60px;
}
</style>

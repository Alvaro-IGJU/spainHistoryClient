<template>
  <h1>Products</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <RouterLink class="col" class-active="active" to="/load" >Products load json</RouterLink>
    <RouterLink class="col" class-active="active" to="/" >Login</RouterLink>
    <button v-if="token" class="col" v-on:click="logout">Logout</button>
    <RouterLink class="col" class-active="active" to="/register">Registro</RouterLink>
    <RouterLink v-if="token" class="col" class-active="active" to="/task">Tareas</RouterLink>
    <RouterLink v-if="token" class="col" class-active="active" to="/products">Productos</RouterLink>

  </nav>
  <main>
    <RouterView/>
  </main>

</template>

<script>

import axios from "axios";
export default {
  name: 'App',
  data() {
    return {
      token: null
    }
  },
  mounted() {
    this.token = localStorage.getItem('session_token');
  },

  methods: {
    async logout() {
      try {
        await axios.get(this.foo + 'logout')
            .then(response => {
              if (response) {
                localStorage.setItem('session_token', '');
                this.token = '';
              }
            })
            .catch(error => {
              console.error('Error logout: ' + error);
            });
      } catch (e) {
        console.log(e)
      }
    },

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

nav:hover,
nav:active {
  background-color: indianred;
  cursor: pointer;
}

</style>

<template>
  <div class="container" id="block-registration">

    <div class="form-outline">
      <input type="email" v-model="email" placeholder="email@email.com" class="form-control  m-1" required/>
    </div>
    <div class="form-outline">
      <input type="password" v-model="password" placeholder="Password" class="form-control m-1" required/>
    </div>
    <div class="container">

      <button class="btn btn-dark  m-1" v-on:click="loginUser()">Entra</button>

    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'login-user',

  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    loginUser() {
      try {
        axios.post(this.foo + 'login', {username: this.email, password: this.password})
            .then(response => {
              if (response.data) {
                console.log(response.data)
              }
            })
            .catch(error => {
              console.error('Error al registrar user : ' + error);
            });
      } catch (e) {
        console.log(e)
      }

    }

  }
}

</script>


<style scoped>

</style>
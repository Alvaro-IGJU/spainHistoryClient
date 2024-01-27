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
import Cookies from "js-cookie";



export default {
  name: 'login-user',

  data() {
    return {
      email: null,
      password: null,

    }
  },
  methods: {
    loginUser() {
      try {
        axios.post(this.foo + 'login', {username: this.email, password: this.password})
            .then(response => {
              if (response.data) {
                if(response.data.token){
                  this.setUserLogged(response.data.user);
                  localStorage.setItem('token',response.data.token);
                  this.$emit('token',true);
                  location.reload();

                }
              }
            })
            .catch(error => {
              console.error('Error al registrar user : ' + error);
            });
      } catch (e) {
        console.log(e)
      }

    },
    setUserLogged(userLogged) {
      Cookies.set("userLogged", userLogged);
    },
    getUserLogged() {
      return Cookies.get("userLogged");
    },

  }
}

</script>


<style scoped>

</style>
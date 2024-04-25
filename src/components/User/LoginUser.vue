<template>

  <div class="container mt-3" id="block-registration">

    {{ email }}
    <div class="row">
      <div class="col-6">
        <h5>Login</h5>
      </div>
      <div class="col-6">
        <button class="btn btn-primary float-end  m-1" v-on:click="loginUser">Login in</button>
      </div>
    </div>
    <div class="form-outline">
      <input type="email" v-model="username" name="username" placeholder="email@email.com" class="form-control  m-1"/>
    </div>
    <div class="form-outline">
      <input type="password" v-model="password" name="password" placeholder="Password" class="form-control m-1"/>
    </div>
  </div>


</template>
<script>
import axios from "axios";


export default {
  name: 'login-user',

  data() {
    return {
      username: null,
      password: null,
      email: null
    }
  },
  mounted() {
    this.email = localStorage.getItem('email');

  },
  watch: {
    email(value) {
      value =localStorage.getItem('email');
      return value
    }
  },


  methods: {
    async loginUser() {
      try {
        await axios.post(this.foo + 'login', {email: this.username, pass: this.password},)
            .then(response => {
              if (response) {
                let token = response.data.session_token;
                this.email=  localStorage.setItem('email', response.data.user);
                localStorage.setItem('session_token', token);
                location.reload()
              }
            })
            .catch(error => {
              console.error('Error al acceso : ' + error);
            });
      } catch (e) {
        console.log(e)
      }
    }

  }

}


</script>
<style scoped>
#block-registration {
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
}
</style>

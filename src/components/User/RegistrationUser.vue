<template>

  <div class="container" id="block-registration">
    <div class="row">

      <div class="col-6">
        <h5>Registration user</h5>
      </div>
      <div class="col-6">
        <button class="btn btn-primary float-end  m-1" v-on:click="saveUSer">Save</button>
      </div>
    </div>

    <div class="form-outline">
      <input type="email" v-model="email" placeholder="email@email.com" class="form-control  m-1"/>
    </div>
    <div class="form-outline">
      <input type="password" v-model="password" placeholder="Password" class="form-control m-1"/>

    </div>


  </div>

</template>

<script>

import axios from "axios";

export default {
  name: 'registration-user',

  data() {
    return {
      email: null,
      password: null
    }
  },

  methods: {

    saveUSer() {
      try {
        axios.post(this.foo + 'add-user', {email: this.email, pass: this.password})
            .then(response => {
              if (response.data) {
                this.email = "";
                this.password = "";
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
#block-registration {
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
}

</style>

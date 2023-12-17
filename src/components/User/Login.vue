<script setup>

</script>

<template>
  <div class="container" id="block-registration">


    <div class="form-outline">
      <input type="email" v-model="email" placeholder="email@email.com" class="form-control  m-1"/>
    </div>
    <div class="form-outline">
      <input type="password" v-model="password" placeholder="Password" class="form-control m-1"/>

    </div>
    <div class="row">

      <div class="col-6">
        <h5>Registration user</h5>
      </div>
      <div class="col-6">
        <button class="btn btn-primary float-end  m-1" v-on:click="saveUSer">Entra</button>
      </div>
    </div>

  </div>



</template>

<style scoped>

</style>
<!--<template>-->
<!--  <div class="container mt-3">-->
<!--    <table>-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th>-->
<!--          <router-link to="/" > <button class="btn btn-primary m-1">HOME</button></router-link>-->
<!--          <router-link to="/user" v-if="tokenValidate"> <button class="btn btn-primary m-1">ADD USER</button></router-link>-->
<!--          <router-link to="/task" v-if="tokenValidate"> <button class="btn btn-primary m-1">TASK</button></router-link>-->
<!--          <router-link  v-if="!tokenValidate" to="/login"> <button class="btn btn-primary m-1">LOGIN</button></router-link>-->
<!--          <button v-if="tokenValidate" v-on:click="tokenValidateAction(false)" class="btn btn-danger">LOGOUT</button>-->
<!--        </th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--    </table>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->

<!--export default {-->
<!--  name: 'NavHome',-->
<!--  props:{-->
<!--    tokenValidate:null-->
<!--  },-->

<!--  data() {-->
<!--    return {-->
<!--    }-->
<!--  },-->
<!--  methods:{-->
<!--    tokenValidateAction(value){-->
<!--      if(!value){-->
<!--        this.$emit('token',false);-->
<!--      }else {-->
<!--        this.$emit('token',true);-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->

<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<template>

  <nav-home :token-validate="tokenValidate"  @token="tokenValidateAction"></nav-home>
    <router-view  v-if="tokenValidate || this.$route.path==='/login' || this.$route.path==='/'"></router-view>

</template>
<script>


import NavHome from "@/components/Nav/navHome.vue";
import {mixin} from "@/mixin";


export default {
  name: 'App',
  mixins:[mixin],

  data(){
    return{
      tokenValidate:null,
    }
  },

  components: {
    NavHome
  },
  methods:{
    tokenValidateAction(value){
      this.tokenValidate=value;
      if(!value){
        localStorage.removeItem('token');
      }
    },

  },
  created() {
    if(localStorage.getItem('token')){
      this.tokenValidateAction(true);
    }
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

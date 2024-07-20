<template>
  <div id="app">
    <HeaderHome :isAuthenticated="isAuthenticated" @login="handleLogin" @register="handleRegister"></HeaderHome>

    <main id="mainSection">
      <HomeMain></HomeMain>
      
      <RouterView id="sectionContent"></RouterView>
    </main>
    
    <LoginUser @authenticated="setAuthenticated" @login="handleLogin" v-show="login"></LoginUser>
    <RegisterUser @register="handleRegister" v-show="register"></RegisterUser>
  </div>
</template>

<script>
import HeaderHome from '@/components/Header/HeaderHome.vue';
import HomeMain from '@/components/Home/HomeMain.vue';
import LoginUser from '@/components/User/LoginUser.vue';
import RegisterUser from '@/components/User/RegisterUser.vue';
import { isAuthenticated } from '@/utils/auth';

export default {
  name: 'App',
  components: {
    HeaderHome,
    HomeMain,
    LoginUser,
    RegisterUser
  },
  data() {
    return {
      login: false,
      register: false,
      isAuthenticated: false
    };
  },
  mounted() {
    this.isAuthenticated = isAuthenticated();
  },
  methods: {
    handleLogin(login) {
      this.login = login;
    },
    handleRegister(register) {
      this.register = register;
    },
    setAuthenticated(status) {
      this.isAuthenticated = status;
    },
    
  }
};
</script>


<style scoped>
#mainSection {
  margin: 2% 20%;
}

#sectionContent {
  margin-top: 2%;
  width: 100%;
  height: 70vh;
}
</style>

<template>
  <div class="userProfileBtn" @click="goToProfile">
    <img :src="profile_img" alt="">
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'header-user-profile-btn',
  
  data() {
    return {
      user_id: null,
      server: this.foo || 'http://127.0.0.1:8000/', 
      profile_img : ''
    };
  },
  mounted(){
    this.user_id = parseInt((localStorage.getItem("user_id")));
    this.getUserInfo()
  },
  methods: {
    goToProfile() {
      this.$router.push('/profile').catch(err => {
        console.error(err);
      });
    },
    async getUserInfo(){
      try {
        let id = parseInt(this.user_id);
        const response = await axios.get(`${this.server}listUsers/?id=${id}`);
        let user = response.data.listUsers.items[0];
        this.name = user.name;
        this.profile_img = user.profile_image; // Asegúrate de que esto sea una cadena Base64 válida
        this.articles = user.articles;
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    },
  }
};
</script>

<style scoped>
.userProfileBtn {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 20%;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.userProfileBtn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

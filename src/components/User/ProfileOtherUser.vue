<template>
  <div class="profileContainer">
    <div class="headerProfile">
      <div class="profileRow">
        <img class="backgroundProfile" :src="profile_banner" alt="">
        <div class="photoDiv">
          <img class="photoProfile" :src="profile_img" alt="Profile Photo" >
        </div>
      </div>
      <div class="userSpecs">
        <h4>{{ name }}</h4>
        <span>Desarrollador web y administrador</span>
      </div>
    </div>
    <div class="userContents">
      <section>
        <h2>Artículos</h2>
        <div v-if="articles.length">
          <ArticleUserList :articles="articles"/>
        </div>
        <div v-else>
          Aún no ha subido artículos.
        </div>
      </section>
      <section>
        <h2>Reseñas</h2>
        <div v-if="reviews.length">
        </div>
        <div v-else>
          Aún no ha subido reseñas.
        </div>
      </section>
      <section>
        <h2>Podcasts</h2>
        <div v-if="podcasts.length">
        </div>
        <div v-else>
          Aún no ha subido podcasts.
        </div>
      </section>
    </div>
   
  </div>
</template>

<script>
import ArticleUserList from "@/components/Article/ArticleUserList.vue";
import axios from "axios";

export default {
  name: 'profile-other-user',
  components: {
    ArticleUserList,
  },
  data() {
    return {
      name: '',
      profile_img: '',
      profile_banner:'',
      articles: [],  // Tus artículos aquí
      reviews: [],   // Tus reseñas aquí
      podcasts: [],  // Tus podcasts aquí
      user_id: null,
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 3,
      filter: '',
      isProfilePhotoUserForm: false,
      server: this.foo || 'http://127.0.0.1:8000/', // Asegúrate de definir foo o un valor predeterminado
    };
  },
  mounted(){
    this.user_id = parseInt(this.$route.params.id);
    this.getUserInfo();
  },
  methods: {
    async getUserInfo(){
      try {
        let id = parseInt(this.user_id);
        const response = await axios.get(`${this.server}listUsers/?id=${id}`);
        let user = response.data.listUsers.items[0];
        console.log(user)
        this.name = user.name;
        this.profile_img = user.profile_image; // Asegúrate de que esto sea una cadena Base64 válida
        this.profile_banner = user.profile_banner;
        this.articles = user.articles;
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    },
   
  }
};
</script>

<style>
.profileContainer {
    width: 100%;
    display: flex;
    height: fit-content;
    flex-direction: column;
}

.headerProfile {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.profileRow {
    width: 100%;
    height: 23vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; /* Asegúrate de que el contenedor sea relativo */
    flex-direction: column;
}

.backgroundProfile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    border-radius: 10px;
}

.photoDiv {
    position: relative; /* Contenedor relativo para el ícono de edición */
}

.photoProfile {
    position: relative;
    height: 17vh;
    width: 17vh;
    border-radius: 100px;
    margin: 3%;
    z-index: 1; /* Asegúrate de que el z-index sea menor que el del ícono de edición */
    margin-top: 150px;
    border: 5px solid white;
}

.editPhoto {
    position: absolute;
    bottom: 10px; 
    right: 20px; 
    width: 30px;
    height: 30px; 
    z-index: 2; 
    cursor: pointer; 
}

.editBackgroundPhoto {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.userSpecs {
    border-bottom: 5px solid #a3151a;
    height: 10vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
}

.userContents {
    padding: 20px;
}

.userContents section {
    margin-bottom: 20px;
}

.userContents h2 {
    margin-bottom: 10px;
    color: #a3151a;
}

</style>

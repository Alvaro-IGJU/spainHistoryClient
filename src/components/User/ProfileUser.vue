<template>
  <div class="profileContainer">
    <div class="headerProfile">
      <div class="profileRow">
        <img class="backgroundProfile" src="https://upload.wikimedia.org/wikipedia/commons/1/10/Batalla_de_las_Navas_de_Tolosa%2C_por_Francisco_van_Halen.jpg" alt="">
        <img :src="require('@/assets/pen-square-svgrepo-com.svg')" alt="Pen Icon" class="editBackgroundPhoto" />
        <div class="photoDiv">
          <img class="photoProfile" :src="profile_img" alt="Profile Photo" ref="profilePhotoImg">
          <img @click="showProfilePhotoUserForm" :src="require('@/assets/pen-square-svgrepo-com.svg')" alt="Pen Icon" class="editPhoto" />
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
    <ProfilePhotoUserForm 
      v-if="isProfilePhotoUserForm" 
      @isProfilePhotoUserForm="handleProfilePhotoFormEvent" 
      @photoUpdated="updatePhoto" 
      :user_id="user_id">
    </ProfilePhotoUserForm>
  </div>
</template>

<script>
import ArticleUserList from "@/components/Article/ArticleUserList.vue";
import ProfilePhotoUserForm from "@/components/User/ProfilePhotoUserForm.vue";
import axios from "axios";

export default {
  name: 'ProfileUserForm',
  components: {
    ArticleUserList,
    ProfilePhotoUserForm
  },
  data() {
    return {
      name: '',
      profile_img: '',
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
    this.user_id = parseInt(localStorage.getItem("user_id"));
    this.getUserInfo();
  },
  methods: {
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
    showProfilePhotoUserForm(){
      this.isProfilePhotoUserForm = true;
    },
    handleProfilePhotoFormEvent(value) {
      this.isProfilePhotoUserForm = value;
    },
    updatePhoto(newPhoto) {
      this.$refs.profilePhotoImg.src = newPhoto;
      
    }
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

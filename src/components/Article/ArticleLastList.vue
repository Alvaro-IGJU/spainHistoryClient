<template>
  <div id="lastArticles">
    <h3>Artículos recientes</h3>
    <div class="article" v-for="(item, index) in article" :key="item.id" :style="{ animationDelay: `${index * 0.02}s` }">
      <div class="last-article-content">
        <h1 class="truncate-multiline">{{ item.title }}</h1>
        <router-link :to="`/profile/${item.user.id}`" class="userArticle" active-class="active">
            <img :src="item.user.photo" class="userPhoto" alt="">
            <span>{{ item.user.name }}</span>
        </router-link>
        
        
        <p class="truncate-multiline">{{ item.content }}</p>
      </div>
      <div class="last-article-image"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'article-last-list',
  data() {
    return {
      article: [],
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 3,
      filter: '',
      server: this.foo || 'http://127.0.0.1:8000/', // Asegúrate de definir foo o un valor predeterminado
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    addArticle() {
      this.articleUpdate = null;
      this.addArticleShow = !this.addArticleShow;
    },
    updateArticle(item) {
      this.productUpdate = item;
    },
    async deleteArticle(id) {
      try {
        const response = await axios.post(this.server + 'article-delete', { delete: id });
        if (response.data) {
          alert('Producto eliminado');
          this.fetchData();
        }
      } catch (error) {
        console.error('Error al eliminar producto:', error);
      }
    },
    loadItemsPage() {
      this.fetchData();
    },
    async fetchData() {
      console.log(this.server);
      try {
        const response = await axios.get(`${this.server}article?page=${this.currentPage}&itemsPerPage=${this.itemsPerPage}&filter=${this.filter}`);
        this.article = response.data.listArticles.items;
        console.log(this.article)
        this.totalPages = Math.ceil(response.data.listArticles.totalArticles / this.itemsPerPage);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchData();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }
    },
  }
}
</script>

<style scoped>
h3{
  color: #a3151a !important;
  padding-bottom: 10px;
}
.article {
  height: 190px;
  display: flex;
  margin-bottom: 10px; /* Añade un margen entre artículos */
  justify-content: space-between;
  cursor: pointer;
  transform: translateY(-100%);
    animation: slideIn 0.2s ease-out forwards;
    animation-delay: var(--animation-delay);
}

.last-article-content {
  width: 70%;
  overflow: hidden; /* Oculta el contenido que se desborde */
}
.truncate-multiline {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4; /* Número máximo de líneas antes de truncar */
  white-space: normal; /* Permite múltiples líneas */
}
.last-article-image {
  width: 28%;
  background-image: url("https://imagenes.muyinteresante.com/files/article_social_75/uploads/2023/03/02/640093dc930d0.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.userArticle{
  color: #a3151a;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 50%;
}

.userArticle:hover span{
  text-decoration: underline;
  font-weight: 600;
}

.userPhoto{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right:2%;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes slideIn {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

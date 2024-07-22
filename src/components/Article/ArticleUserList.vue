<template>
  <div id="lastArticles">
    <div class="article" v-for="(item, index) in articles" :key="item.id" :style="{ animationDelay: `${index * 0.02}s` }">
      <div class="last-article-content">
        <h1 class="truncate-multiline">{{ item.title }}</h1>
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
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
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

.article {
  height: 180px;
  display: flex;
  margin-bottom: 10px; /* Añade un margen entre artículos */
  justify-content: space-between;
  cursor: pointer;
  transform: translateY(-100%);
    animation: slideIn 0.2s ease-out forwards;
    animation-delay: var(--animation-delay);
}
.article:hover h1 {
  color: #a3151a;
  text-decoration: underline;
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
  -webkit-line-clamp: 5; /* Número máximo de líneas antes de truncar */
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


<template>

    <div class="container table-responsive mt-3 " id="block-list-article">

      <button class="btn btn-dark" v-on:click="fetchData">List Articles</button>
      <button class="btn btn-primary m-1" v-on:click="addArticle">ADD +</button>
      <article-form @new-article-list="fetchData" v-show="addArticleShow"></article-form>
      <table class="table" v-show="!addArticleShow">
        <thead>
        <tr>
          <th>
            nombre
          </th>
          <th>
            Descripción
          </th>

        </tr>
        </thead>
        <tbody>
        <tr v-show="article" v-for="item in article" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>

          <td>
            <div v-if="item.image">
              <div v-if="!item.image.includes('http')">
                <img :src="server+'uploads/images/'+item.image" alt="Uploaded Image" width="200">
              </div>
              <div v-else>
                <img :src="item.image" alt="Uploaded Image" width="200">
              </div>
            </div>
          </td>
          <td>
            <button class="btn btn-danger m-1" v-on:click="deleteArticle(item.id)">Delete</button>
            <button class="btn btn-warning m-1" v-on:click="updateArticle(item)" disabled>Update</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-2">
          <input class="form-control" type="text" id="item-page" v-model="filter" :placeholder="'Filtrar'"
                 v-on:keydown="loadItemsPage">
        </div>
        <div class="col-6">
          <button class="btn btn-default" v-on:click="prevPage" :disabled="currentPage === 1">Previous</button>
          <span class="m-2">Page {{ currentPage }} of {{ totalPages }}</span>
          <button class="btn btn-default" v-on:click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
        <div class="col-2">
          <input class="form-control" type="number" v-model="itemsPerPage">
        </div>
        <div class="col-1">
          <button :disabled="!itemsPerPage" class="btn btn-primary" v-on:click="loadItemsPage">Aplicar</button>
        </div>
      </div>
    </div>

  </template>


<script>
  import ArticleForm from "@/components/Article/ArticleForm.vue";
  import axios from "axios";

  export default {
    name: 'article-list',
    components: {ArticleForm},
    data(){
      return{
        article:null,
        articleUpdate: null,
        addArticleShow: false,
        items: [],
        currentPage: 1,
        totalPages: 1,
        itemsPerPage: null ?? 3,
        filter: '',
        server: this.foo
      }
    },
    mounted(){
      console.log('Componente montado');
      this.fetchData();
    },

    methods:{
      addArticle(){
        this.articleUpdate = null;
        this.addArticleShow = !this.addArticleShow;
      },
      updateArticle(item) {
        this.productUpdate = item;
      },

      async deleteArticle(id){
        try{
          await axios.post(this.foo + 'article-delete', {delete:id})
              .then(response => {
                if(response.data){
                  alert('Producto eliminado')
                  this.fetchData()
                }
              })
              .catch(error => {
                console.error('Error al eliminar producto : ' +error);
              })
        }catch(e){
          console.log(e);
        }
      },
      loadItemsPage() {
        this.fetchData();
      },
      fetchData(){
        axios.get(this.foo + `article?page=${this.currentPage}&itemsPerPage=${this.itemsPerPage}&filter=${this.filter}`)
            .then(response => {
              this.article = response.data.listArticles.items;
              this.totalPages = Math.ceil(response.data.listArticles.totalArticles / this.itemsPerPage);
            })
            .catch(error => {
              console.error('Error al cargar productos:', error);
            });
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

</style>



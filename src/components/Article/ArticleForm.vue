<template>
  <div>
    <form @submit.prevent="saveArticle">
      <div class="row mb-2">
        <!--      <p>Task title is: {{ !taskUpdate ? title : taskUpdate.title }}</p>-->
        <div class="col-2">
          <label for="title" class="form-label">Título:</label>
          <input type="text" class="form-control text-start" id="title" v-model="title" required>
        </div>
        <div class="col-6">
          <label for="content" class="form-label">Contenido:</label>
          <textarea class="form-control text-start" id="content" v-model="content" required></textarea>
        </div>
        <div class="col-3 ">
          <label for="save" class="form-label">-</label>
          <button type='submit' class="btn btn-primary" id="save">Guardar</button>
        </div>

      </div>
    </form>
  </div>

</template>

<script>
import axios from "axios";

  export default {
    name:'articleForm',
    data() {
      return {
        title: null,
        content: null
      }
    },
    methods:{
      async saveArticle(){
        let validate =  confirm("Desea subir el artículo?");
        if(validate) {
          try{
            const formData = new FormData();
            formData.append('title', this.title);
            formData.append('content', this.content);

            await axios.post(this.foo + 'article-store' , formData, {
              headers:{
                'Content-Type': 'multipart/form-data'
              },
            }).then(response => {
              console.log(response)
              if(response){
                this.$emit('newArticleLastList', null)
              }
            }).catch(error => {
              console.error('Error al guardar el producto: ' + error);
            });
          } catch(e){
            console.log(e);
          }
        }
      }
    }
  }

</script>

<style scoped>

</style>
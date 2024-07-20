<template>

  <div class="container table-responsive mt-3 " id="block-list-task">

    <button class="btn btn-dark" v-on:click="fetchData">List Products</button>
    <button class="btn btn-primary m-1" v-on:click="addProduct">ADD +</button>
    <product-form @new-product-list="fetchData" v-show="addProductShow"></product-form>
    <table class="table" v-show="!addProductShow">
      <thead>
      <tr>
        <th>
          nombre
        </th>
        <th>
          Descripción
        </th>
        <th>
          Precio
        </th>
        <th>IVA</th>
        <th>Imagen</th>
        <th>Opciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-show="product" v-for="item in product" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.price }} €</td>
        <td>{{ item.iva }} %</td>
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
          <button class="btn btn-danger m-1" v-on:click="deleteTask(item.id)">Delete</button>
          <button class="btn btn-warning m-1" v-on:click="updateTask(item)" disabled>Update</button>
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

import axios from "axios";
import ProductForm from "@/components/Product/ProductForm.vue";

export default {
  name: 'ListProduct',
  components: {ProductForm},

  data() {
    return {
      product: null,
      productUpdate: null,
      addProductShow: false,
      items: [],
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: null ?? 3,
      filter: '',
      server: this.foo
    }
  },

  mounted() {
    console.log('Componente montado')
    this.fetchData();

  },
  unmounted() {

  },




  methods: {
    addProduct() {
      this.productUpdate = null;
      this.addProductShow = !this.addProductShow;
    },
    updateTask(item) {
      this.productUpdate = item;
    },

    async deleteTask(id) {
      try {
        await axios.post(this.foo + 'product-delete', {delete: id})
            .then(response => {
              if (response.data) {
                alert('Producto eliminado')
                this.fetchData()
              }
            })
            .catch(error => {
              console.error('Error al eliminar producto : ' + error);
            });
      } catch (e) {
        console.log(e)
      }
    },

    //   TODO :Pagination

    loadItemsPage() {
      this.fetchData();
    },

    fetchData() {
      axios.get(this.foo + `product?page=${this.currentPage}&itemsPerPage=${this.itemsPerPage}&filter=${this.filter}`)
          .then(response => {
            this.product = response.data.listProducts.items;
            this.totalPages = Math.ceil(response.data.listProducts.totalProducts / this.itemsPerPage);
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
  },


}

</script>

<style scoped>

</style>

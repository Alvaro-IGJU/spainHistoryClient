<template>

  <div class="container table-responsive mt-3 " id="block-list-task">
    <button class="btn btn-dark" v-on:click="getListProduct">List Products</button>
    <button class="btn btn-primary m-1" v-on:click="addProduct">ADD +</button>
    <product-form @new-product-list="getListProduct" v-show="addProductShow"></product-form>
    <table class="table">
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
          <button class="btn btn-danger m-1" v-on:click="deleteTask(item.id)">Delete</button>
          <button class="btn btn-warning m-1" v-on:click="updateTask(item)">Update</button>
        </td>

      </tr>
      </tbody>
    </table>


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
    }
  },
  methods: {
    getListProduct() {
      try {
        this.productUpdate = "";
        axios.get(this.foo + 'product')
            .then(response => {
              this.product = response.data.listProducts;
              this.addProduct();
            })
            .catch(error => {
              console.error('Error al cargar la lista de productos: ' + error);
            });
      } catch (e) {
        console.log(e)
      }

    },


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
                this.getListProduct();
                this.addProduct();
              }
            })
            .catch(error => {
              console.error('Error al eliminar producto : ' + error);
            });
      } catch (e) {
        console.log(e)
      }
    },
  }


}

</script>

<style scoped>

</style>

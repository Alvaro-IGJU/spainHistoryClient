<template>
  <div>
    <button class="btn btn-success mt-2" v-on:click="save()">Guardar en base de datos</button>
    <list-load-products :items="items"></list-load-products>

  </div>
</template>

<script>

import axios from "axios";
import ListLoadProducts from "@/components/LoadProduct/ListLoadProducts.vue";

export default {
  name: 'load-json',
  components: {ListLoadProducts},

  data() {
    return {
      items: []
    }

  },
  mounted() {
    this.loadFileProductsJson();
  },
  methods: {
    async loadFileProductsJson() {
      try {
        await axios.get('/load.json').then(response => {
          if (response) {
            this.items = response.data.SearchResult.Items;
          }
        });


      } catch (error) {
        console.error('Error loading the JSON data', error);
      }
    },
    save() {

      let validate = confirm("¿ Desea introducir los productos en  base de datos?");
      if (validate) {
        try {
          let product = {}
          this.items.forEach((value) => {

            product = {
              image: value.Images.Primary.Large.URL,
              name: value.ItemInfo.Title.DisplayValue,
              total: value.Offers.Listings[0].Price.Amount,
              description: value.ItemInfo.Features.DisplayValues[0],
              iva: 0.0
            };
            axios.post(this.foo + 'product-store', product, {
              headers: {
                'Content-Type': 'multipart/form-data'
              },

            }).then(response => {
              if (response){
                console.log('producto cargado')
              }
            }).catch(error => {
              console.error('Error al guardar el producto: ' + error);
            });

          });

          alert('la carga a finalizado puede ir al listado de productos')


        } catch (e) {
          console.log(e)
        }
      }


    }
  }
}

</script>

<style scoped>

</style>
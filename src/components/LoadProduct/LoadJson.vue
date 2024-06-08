<template>
  <div>

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
        await axios.get('/load.json').then(response=>{
          if(response){
              this.items=response.data.SearchResult.Items;
              console.log(response.data.SearchResult.Items)
          }
        });



      } catch (error) {
        console.error('Error loading the JSON data', error);
      }
    }
  }
}

</script>

<style scoped>

</style>
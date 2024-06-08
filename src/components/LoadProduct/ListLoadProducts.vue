<template>
  <div v-if="items">

    <div class="grid grid-cols-4  border-1 mt-5 mb-3">
      <div>Producto</div>
      <div>Nuestra puntuación</div>
      <div>Característticas clave</div>
      <div>Opciones</div>
    </div>

    <div v-for="item in items" :key="item">

      <div class="grid grid-cols-4  border-1">
        <!-- Image product-->
        <div class="border-1">
          <a :href="item.DetailPageURL" target="_blank">
            <img class="h-auto max-w-full rounded-lg" alt="image description" :src="item.Images.Primary.Large.URL"
                 :width="500" :height="500"
                 :title="item.ItemInfo.Title.DisplayValue">
          </a>
        </div>
        <!-- Image reviews users-->
        <div class="border-1 content-center">
          <p class="font-bold text-review">9.{{ Math.floor(Math.random() * 10) }}</p>
          <div class=" pb-4">
            <div class="d-inline-flex items-center mb-2">
              <div class="flex text-yellow-500">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                      d="M10 15l-5.878 3.09L5.73 12.174.53 8.41l6.2-.901L10 .5l2.274 7.009 6.2.901-5.201 3.764L15.878 18z"/>
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                      d="M10 15l-5.878 3.09L5.73 12.174.53 8.41l6.2-.901L10 .5l2.274 7.009 6.2.901-5.201 3.764L15.878 18z"/>
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                      d="M10 15l-5.878 3.09L5.73 12.174.53 8.41l6.2-.901L10 .5l2.274 7.009 6.2.901-5.201 3.764L15.878 18z"/>
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                      d="M10 15l-5.878 3.09L5.73 12.174.53 8.41l6.2-.901L10 .5l2.274 7.009 6.2.901-5.201 3.764L15.878 18z"/>
                </svg>
                <svg class="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                  <path
                      d="M10 15l-5.878 3.09L5.73 12.174.53 8.41l6.2-.901L10 .5l2.274 7.009 6.2.901-5.201 3.764L15.878 18z"/>
                </svg>
              </div>
            </div>
          </div>
          <a href="">'Excelente'</a>
        </div>

        <!-- Info product-->
        <div class=" border-1 text-start p-4">

          <p v-if="item.ItemInfo.Title.DisplayValue.length<8">{{ item.ItemInfo.Title.DisplayValue }}</p>
          <p v-else>{{ item.ItemInfo.Title.DisplayValue.substring(0, 100) + " ..." }}</p>
          <div class="mt-3 text-zinc-400">{{ item.ItemInfo.ByLineInfo.Brand.DisplayValue }}</div>
          <div class="mt-5">
            <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              {{ item.Offers.Listings[0].Price.Savings.Percentage }}% Descuento
            </button>
            <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-2">
              Envío gratis
            </button>
          </div>
          <div class="mt-5" v-on:click="showProduct(item.ASIN)">
            <a :href="'#'+item.ASIN">Mostrar más {{item.ASIN===selected?'ʌ':'v'}}</a>
          </div>

          <div>

          </div>
        </div>

        <!-- Options-->
        <div class="border-1 content-center">


          <div class="mt-5 font-bold">
            <button type="button"
                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
              Comprar ahora
            </button>
          </div>
          <div class="d-inline-flex items-center">
            <a href="">
              <img class="h-auto max-w-full rounded-lg" alt="image description"
                   src="https://m.media-amazon.com/images/G/02/social_share/amazon_logo._CB633267861_.png"
                   width="300"
                   >
            </a>
          </div>
        </div>

      </div>

      <view-product :item="item" :selected="selected"></view-product>


    </div>


  </div>
</template>

<script>

import ViewProduct from "@/components/LoadProduct/ViewProduct.vue";


export default {
  name: 'list-load-products',

  components: {ViewProduct},

  props: {
    items: null
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    showProduct(value) {

      if (this.selected.length > 0 && this.selected === value) {
        this.selected = '';
      } else {
        this.selected = value;
      }


    }
  }

}

</script>


<style scoped>
a {
  text-decoration: none;
}

.text-review {
  font-size: 250%;
}

</style>
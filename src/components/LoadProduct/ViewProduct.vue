<template>

  <div v-if="item.ASIN === selected" class="text-start p-3">
    <div class="grid grid-cols-4 ">
      <div class="col-span-3">
        <ul v-for="value in item.ItemInfo.Features.DisplayValues" :key="value">
          <li>{{value}}</li>
        </ul>
      </div>

      <div class="flex items-end">
        <div class="py-2 grid justify-items-center">
          <a href="">
            <img  alt="image description"
                 src="https://m.media-amazon.com/images/G/02/social_share/amazon_logo._CB633267861_.png"
                 width="300"
            >
          </a>
          <button type="button" class="btn btn-warning">Comprar ahora</button>

        </div>
        <div class="content-start">

        </div>

      </div>
    </div>


  </div>

</template>
<script>

export default {
  name: 'view-product',

  props: {
    item: null,
    selected: null
  }


}

</script>

<style scoped>
ul {
  list-style: initial;
}

</style>
<template>
  <div>
    <form @submit.prevent="saveProduct">
      <div class="row mb-2">
        <!--      <p>Task title is: {{ !taskUpdate ? title : taskUpdate.title }}</p>-->
        <div class="col-2">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control text-start" id="name" v-model="name" required>
        </div>
        <div class="col-6">
          <label for="description" class="form-label">Descripción</label>
          <textarea class="form-control text-start" id="description" v-model="description" required></textarea>
        </div>
        <div class="col-2">
          <label for="price" class="form-label">Precio</label>
          <input type="number" class="form-control text-start" id="price" v-model="price" v-on:change="selectedIva"
                 required>
        </div>
        <div class="col-2">
          <label for="iva-product" class="form-label">IVA</label>
          <select class="form-select " id="iva-product" v-model="iva" v-on:change="selectedIva">
            <option value="0">No IVA</option>
            <option value="4">4 %</option>
            <option value="10">10 %</option>
            <option value="21">21 %</option>
          </select>
        </div>



      </div>
      <div class="row">

        <div class="col-6">
          <label for="total" class="form-label text-start">Añada una imagen</label>
          <input class="form-control" type="file" ref="file" name='file' v-on:change="handleFileChange">
        </div>

        <div class="col-3">

          <label for="total" class="form-label">Total</label>
          <input class="form-control text-start" id="total" disabled :value="total+'€'">
        </div>
        <div class="col-3 ">
          <label for="save" class="form-label">-</label>
          <button type='submit' class="btn btn-primary" id="save">Guardar</button>
        </div>
      </div>
    </form>

    <hr>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'productForm',
  data() {
    return {
      name: null,
      price: null,
      description: null,
      iva: null,
      file: null,
      total: 0
    }
  },


  methods: {
   handleFileChange() {

     this.file = this.$refs.file.files[0];
      // console.log(this.file);
    },

   async saveProduct() {
      let validate = confirm("Desea guadar el producto?");
      if (validate) {
        try {
          const formData = new FormData();
          formData.append('file', this.file);
          formData.append('iva',this.iva);
          formData.append('name',this.name);
          formData.append('total',this.total);
          formData.append('description',this.description)
          await axios.post(this.foo + 'product-store', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },

          }).then(response => {
            if (response) {
              this.$emit('newProductList', null)
            }
          })
              .catch(error => {
                console.error('Error al guardar el producto: ' + error);
              });
        } catch (e) {
          console.log(e)
        }
      }

    },
    selectedIva() {
      if (!this.iva) {
        this.total = this.price
      }

      if (this.price) {
        let total = this.price + (this.price * this.iva / 100);
        this.total = total;
      } else {
        alert('Por favor , introduzca un valor en el precio')
      }
    }
  }

}


</script>


<style scoped>

</style>

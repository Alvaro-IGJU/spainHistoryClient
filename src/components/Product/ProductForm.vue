<template>
  <div>
    <form @submit.prevent="saveProduct">
      <div class="row mb-2">
        <!--      <p>Task title is: {{ !taskUpdate ? title : taskUpdate.title }}</p>-->
        <div class="col-2">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control text-start" id="name" v-model="name" required>
        </div>
        <div class="col-5">
          <label for="description" class="form-label">Descripción</label>
          <textarea class="form-control text-start" id="description" v-model="description" required></textarea>
        </div>
        <div class="col-1">
          <label for="price" class="form-label">Precio</label>
          <input type="number" class="form-control text-start" id="price" v-model="price" v-on:change="selectedIva"
                 required>
        </div>
        <div class="col-2">
          <label for="iva" class="form-label">IVA</label>
          <select class="form-select " id="iva" v-model="iva" v-on:change="selectedIva">
            <option value="0">No IVA</option>
            <option value="4">4 %</option>
            <option value="10">10 %</option>
            <option value="21">21 %</option>
          </select>
        </div>
        <div class="col-1">
          <label for="total" class="form-label">Total</label>
          <input class="form-control text-start" disabled :value="total+'€'">
        </div>
        <div class="col-1 ">
          <label for="save" class="form-label">-</label>
          <button type='submit' class="btn btn-primary">Guardar</button>
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
      total: 0
    }
  },
  methods: {
    saveProduct() {
      let validate = confirm("Desea guadar el producto?");
      if (validate) {
        try {
          axios.post(this.foo + 'product-store', {
            id: null,
            name: this.name,
            description: this.description,
            price: this.total,
            IVA: this.iva
          }).then(response => {
            if (response) {
              alert('producto guardado correctamente')
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

<template>
  <div class="profilePhotoForm-overlay">
    <div class="blur-background" @click="closeProfilePhotoForm"></div>
    <div class="profilePhotoForm-container">
      <button class="btn-close" @click="closeProfilePhotoForm"></button>
      <div class="container" id="block-profilePhotoForm">
        <h5 class="text-center">ACTUALIZAR FOTO DE PERFIL</h5>
        
        <div class="form-outline mt-4">
          <input type="file" @change="handleFileUpload" name="base64Image" placeholder="email@email.com" class="m-1 input-profilePhotoForm"/>
        </div>
      
        <div class="col-12 text-center mt-4">
          <button class="btn profilePhotoFormBtnRed m-1" v-on:click="updateProfilePhoto">Actualizar</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'profilePhotoForm-user',
  data() {
    return {
      base64Image: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.base64Image = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    async updateProfilePhoto() {
      if (!this.base64Image) {
        alert("Por favor, selecciona una imagen.");
        return;
      }

      try {
        const response = await axios.post(this.foo + 'updateProfile', { base64Image: this.base64Image });
        if (response.data.success) {
          alert("Foto de perfil actualizada exitosamente.");
          this.closeProfilePhotoForm();
        }
      } catch (error) {
        console.error('Error al actualizar la foto de perfil: ' + error);
      }
    },
    closeProfilePhotoForm() {
      this.$emit('isProfilePhotoUserForm', false);
    }
  }
};
</script>


<style scoped>
.profilePhotoForm-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.blur-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 53, 0.5); /* Fondo semi-transparente */
  backdrop-filter: blur(5px); /* Efecto de desenfoque */
}

.profilePhotoForm-container {
  position: relative;
  width: 80%; /* Ajusta el ancho según necesites */
  max-width: 600px; /* Ancho máximo del formulario */
  background-color: white;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Sombra suave */
  transform: translateY(-100%);
  animation: slideIn 0.2s forwards;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  z-index: 1100; /* Asegura que esté por encima del contenido */
}

#block-profilePhotoForm {
  margin: auto;
}

.input-profilePhotoForm {
  background-color: white; /* Fondo blanco */
  border: 1px solid #a3151a; /* Borde rojo */
  border-radius: 8px;
  width: 100%;
  padding: 2%;
  box-sizing: border-box; /* Para incluir el padding en el ancho total */
}

.profilePhotoFormBtnRed {
  background-color: #a3151a; /* Fondo blanco */
  color: white;
  padding: 2% 3%;
}

.profilePhotoFormBtnRed:hover {
  background-color: #831216; /* Fondo blanco */
  color: white;
  padding: 2% 3%;
}

.btn-close:hover {
  color: #831216;
}

@keyframes slideIn {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

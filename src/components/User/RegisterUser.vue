<template>
  <div class="register-overlay">
    <div class="blur-background" @click="closeRegister"></div>
    <div class="register-container">
      <button class="btn-close" @click="closeRegister"></button>
      <div class="container " id="block-register">
        <!-- Contenido actual del formulario de inicio de sesión -->
         <h5 class="text-center">REGISTRARSE</h5>
        
        <div class="form-outline mt-4">
          <input type="email" v-model="username" name="username" placeholder="Email" class="m-1 input-register"/>
        </div>
        <div class="form-outline">
          <input type="password" v-model="password" name="password" placeholder="Contraseña" class="m-1 input-register"/>
        </div>
        <div class="col-12 text-center mt-4">
          <button class="btn  registerBtnRed m-1" v-on:click="registerUser">Registrarme</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'register-user',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  mounted() {
    let email = localStorage.getItem('email');
    this.username = email != 'undefined' ?  email: '';
  },
  methods: {
    async registerUser() {
      try {
        await axios.post(this.foo + 'register', {email: this.username, pass: this.password})
          .then(response => {
            if (response) {
              let token = response.data.session_token;
              localStorage.setItem('email', response.data.user);
              localStorage.setItem('session_token', token);
              location.reload();
            }
          })
          .catch(error => {
            console.error('Error al acceso : ' + error);
          });
      } catch (e) {
        console.log(e)
      }
    },
    closeRegister() {
      this.$emit('register', false); // Emitir el evento 'close' al padre
    }
  }
}
</script>

<style scoped>
.register-overlay {
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

.register-container {
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

#block-register {
  margin: auto;
}



.input-register {
  background-color: white; /* Fondo blanco */
  border: 1px solid #a3151a; /* Borde rojo */
  border-radius: 8px;

  width: 100%;
  padding: 2%;
  box-sizing: border-box; /* Para incluir el padding en el ancho total */
}

.registerBtnRed{
  background-color: #a3151a; /* Fondo blanco */
  color: white;
  padding: 2% 3%;
}
.registerBtnRed:hover{
  background-color: #831216; /* Fondo blanco */
  color: white;
  padding: 2% 3%;
}
.btn-close:hover{
  
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

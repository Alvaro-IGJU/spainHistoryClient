<template>
  <div class="login-overlay">
    <div class="blur-background" @click="closeLogin"></div>
    <div class="login-container">
      <button class="btn-close" @click="closeLogin"></button>
      <div class="container " id="block-login">
        <!-- Contenido actual del formulario de inicio de sesión -->
        <h5 class="text-center">INICIAR SESIÓN</h5>
        
        <div class="form-outline mt-4">
          <input type="email" v-model="username" name="username" placeholder="email@email.com" class="m-1 input-login"/>
        </div>
        <div class="form-outline">
          <input type="password" v-model="pass" name="password" placeholder="Password" class="m-1 input-login"/>
        </div>
        <div class="col-12 text-center mt-4">
          <button class="btn loginBtnRed m-1" v-on:click="loginUser">Entrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login-user',
  data() {
    return {
      username: null,
      pass: null,
    };
  },
  mounted() {
    const email = localStorage.getItem('email');
    this.username = email != 'undefined' ? email : '';
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post(this.foo + 'login', { email: this.username, pass: this.pass });
        if (response.data.token) {
          const token = response.data.token;
          console.log("USRAIUO",response.data)
          localStorage.setItem('email', response.data.user);
          localStorage.setItem('jwtToken', token);
          localStorage.setItem('user_id', response.data.user_id);
          this.$emit('authenticated', true);
          this.$emit('photo', response.data.photo);

          this.closeLogin();
        }
      } catch (error) {
        console.error('Error al iniciar sesión: ' + error);
      }
    },
    closeLogin() {
      this.$emit('login', false);
    }
  }
};
</script>

<style scoped>
.login-overlay {
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

.login-container {
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

#block-login {
  margin: auto;
}



.input-login {
  background-color: white; /* Fondo blanco */
  border: 1px solid #a3151a; /* Borde rojo */
  border-radius: 8px;

  width: 100%;
  padding: 2%;
  box-sizing: border-box; /* Para incluir el padding en el ancho total */
}

.loginBtnRed{
  background-color: #a3151a; /* Fondo blanco */
  color: white;
  padding: 2% 3%;
}
.loginBtnRed:hover{
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

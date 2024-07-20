<!-- HeaderLoginBtn.vue -->
<template>
    <button @click="goLogin" id="loginBtn">Iniciar Sesión</button>
</template>

<script>
export default {
    name: 'HeaderLoginBtn',
    data() {
    return {
      login: false
    }
  },
    methods: {
        goLogin() {
            console.log("Login button clicked in HeaderLoginBtn");
            this.$emit('login', true); // Emitir el evento 'login' con el valor true
        }
    }
}
</script>

<style scoped>
#loginBtn {
    background-color: #a3151a;
    padding: 2%;
    color: white;
    font-weight: 500;
    border-radius: 12px;
    margin-right: 5%;
}

#loginBtn:hover {
    background-color: #961519;
    font-weight: 600;
}
</style>

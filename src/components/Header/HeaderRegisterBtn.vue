<!-- HeaderRegisterBtn.vue -->
<template>
    <button @click="goRegister" id="registerBtn">Registrarse</button>
</template>

<script>
export default {
    name: 'HeaderRegisterBtn',
    data() {
    return {
      register: false
    }
  },
    methods: {
        goRegister() {
            console.log("Register button clicked in HeaderRegisterBtn");
            this.$emit('register', true); // Emitir el evento 'login' con el valor true
        }
    }
}
</script>

<style scoped>
#registerBtn {
    background-color: #a3151a;
    padding: 2%;
    color: white;
    font-weight: 500;
    border-radius: 12px;
    margin-right: 5%;
}

#registerBtn:hover {
    background-color: #961519;
    font-weight: 600;
}
</style>

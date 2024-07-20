<!-- HeaderLoginBtn.vue -->
<template>
    <router-link class="userProfileBtn" active-class="active" to="/profile"></router-link>

   
</template>

<script>
export default {
    name: 'header-user-profile-btn',
    data() {
    return {
      
    }
  },
    methods: {
        
    }
}
</script>

<style scoped>
.userProfileBtn{
    width: 90px;
    height: 90px;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 20%;
    cursor: pointer;
}
</style>

<template>
    <router-link class="userProfileBtn" active-class="active" to="/profile">
      <img :src="photo" alt="">
    </router-link>
  </template>
  
  <script>
  export default {
    name: 'header-user-profile-btn',
    props: {
      photo: String
    }
  };
  </script>
  
  <style scoped>
  .userProfileBtn {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-right: 20%;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .userProfileBtn img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  
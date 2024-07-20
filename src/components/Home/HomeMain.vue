<template>
    <nav id="navHome">
      <router-link class="col" active-class="active" to="/article">Historia</router-link>
      <router-link class="col" active-class="active" to="/podcast">Podcast</router-link>
      <router-link class="col" active-class="active" to="/load">Reseñas</router-link>
      <router-link class="col" active-class="active" to="/discussion">Discusiones</router-link>
      <router-link class="col" active-class="active" to="/contact">Contacto</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'HomeMain'
  }
  </script>
  
  <style>
  #navHome {
    height: 70px;
    border-top: 2px solid #a3151a;
    border-bottom: 2px solid #a3151a;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  #navHome a {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    color: black;
    text-decoration: none;
  }
  
  #navHome a:hover {
    cursor: pointer;
    font-weight: 500;
    border-top: 3px solid #a3151a;
    border-bottom: 3px solid #a3151a;
  }
  </style>
  
<template>
  <div class="container mt-3">
    <table>
      <thead>
      <tr>
        <th>
          <router-link to="/user"> <button class="btn btn-primary m-1">ADD USER</button></router-link>
          <router-link to="/task"> <button class="btn btn-primary m-1">TASK</button></router-link>
          <router-link to="/login"> <button class="btn btn-primary m-1">LOGIN</button></router-link>
        </th>
      </tr>
      </thead>
    </table>
  </div>
</template>
<script>

export default {
  name: 'NavHome',

  data() {
    return {
    }
  },
}

</script>

<style scoped>

</style>
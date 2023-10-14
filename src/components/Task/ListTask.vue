<template>


  <div class="container" v-show="showRegistrationUser">
    <registration-user></registration-user>
  </div>

  <div class="container table-responsive mt-1 " id="block-list-task">
    <table class="table">
      <thead>
      <tr>
        <th>
          <button class="btn btn-dark" v-on:click="getListTask">List Task</button>
          <button class="btn btn-dark ms-1" v-on:click="addUser">Registration User</button>
          <button class="btn btn-primary m-1" v-on:click="addTask">ADD +</button>
        </th>

        <th>
          <form-task @new-task-list="newTasklist" :task="task" :task-update="taskUpdate"></form-task>
        </th>

      </tr>
      </thead>
      <tbody>
      <tr v-show="addTaskShow" v-for="item in task" :key="item.id">
        <td>{{ item.title }}</td>
        <td>
          <button class="btn btn-danger m-1" v-on:click="deleteTask(item.id)">Delete</button>
          <button class="btn btn-warning m-1" v-on:click="updateTask(item)">Update</button>
        </td>
      </tr>
      </tbody>
    </table>


  </div>

</template>

<script>


import axios from "axios";
import FormTask from "@/components/Task/formTask.vue";
import RegistrationUser from "@/components/User/RegistrationUser.vue";


export default {
  name: 'ListTask',
  components: {RegistrationUser, FormTask},

  data() {
    return {
      task: null,
      taskUpdate: null,
      addTaskShow: false,
      showRegistrationUser: false
    }
  },

  methods: {

    getListTask() {
      try {
        this.taskUpdate = "";
        axios.get(this.foo + 'task')
            .then(response => {
              this.task = response.data.listTask;
              this.addTask();
            })
            .catch(error => {
              console.error('Error al cargar la lista de tareas: ' + error);
            });
      } catch (e) {
        console.log(e)
      }

    },
    newTasklist(id) {

      this.getListTask();

      if (id) {
        this.addTask()
      }

    },
    updateTask(item) {
      this.taskUpdate = item;
    },

    async deleteTask(id) {
      try {
        await axios.post(this.foo + 'task-delete', {delete: id})
            .then(response => {
              if (response.data) {
                this.getListTask();
                this.addTask();
              }
            })
            .catch(error => {
              console.error('Error al eliminar task : ' + error);
            });
      } catch (e) {
        console.log(e)
      }
    },

    addTask() {
      this.taskUpdate = null;
      this.addTaskShow = !this.addTaskShow;
    },
    addUser() {
      this.showRegistrationUser = !this.showRegistrationUser;

    }


  }


}

</script>

<style scoped>


</style>
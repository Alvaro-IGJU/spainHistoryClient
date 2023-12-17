<template>
  <div class="container">
    <h2>list task</h2>

    <form-task :task-update="taskUpdate" @new-task-list="newTask()"></form-task>
    <div class="table table-responsive">
      <table class="table">
        <thead>
        <tr>
          <th>Tilte</th>
          <th>Options</th>

        </tr>


        </thead>
        <tbody>


        <tr v-for="item in taskList" :key="item.id">
          <td>{{ item.title }}</td>
          <td>
            <button class="btn btn-danger m-1" v-on:click="deleteTask(item.id)">Delete</button>
            <button class="btn btn-warning m-1" v-on:click="updateTask(item)">Update</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>


import axios from "axios";
import FormTask from "@/components/Task/formTask.vue";

export default {
  name: 'ListTask',
  components: {FormTask},


  data() {
    return {
      task: null,
      taskUpdate: null,
      taskList: null,
      showFormTask: false,
      titleMod: null,
    }
  },
  mounted() {
    this.getListTask();
  },

  methods: {
    getListTask() {
      try {
        // this.taskUpdate = "";
        axios.get(this.foo + 'task')
            .then(response => {
              this.taskList = response.data.listTask;
              // this.addTask();
            })
            .catch(error => {
              console.error('Error al cargar la lista de tareas: ' + error);
            });
      } catch (e) {
        console.error(e)
      }

    },
    newTask() {
      this.getListTask();
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

              }
            })
            .catch(error => {
              console.error('Error al eliminar task : ' + error);
            });
      } catch (e) {
        console.log(e)
      }
    },

    // addTask() {
    //  if(!this.taskUpdate){
    //    this.taskUpdate=null
    //  }
    //   this.showFormTask = !this.showFormTask;
    //
    // }

  }
}

</script>

<style scoped>


</style>
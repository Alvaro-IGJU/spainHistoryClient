<template>
  <div>
    <p>Task title is: {{ !taskUpdate ? title : taskUpdate.title }}</p>
    <input v-model="title" placeholder="edit me"/>
    <button v-on:click="saveTask(task,taskUpdate?taskUpdate.id:null)">Save</button>

  </div>

</template>


<script>

import axios from "axios";

export default {
  name: 'formTask',
  props: {
    task: null,
    taskUpdate: null,
  },

  data() {
    return {
      title: null,
    }
  },

  methods: {
    saveTask(task, id) {
      try {
        axios.post(this.foo + 'task-store', {
          id: id,
          title: this.title
        }).then(response => {
          if (response.data === true) {
            this.$emit('newTaskList',id)
          }

        })
            .catch(error => {
              console.error('Error al guardar la tarea: ' + error);
            });
      } catch (e) {
        console.log(e)
      }

    }
  }
}

</script>

<style scoped>

</style>
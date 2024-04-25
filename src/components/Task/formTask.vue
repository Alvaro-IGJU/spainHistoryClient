<template>
  <div>
<!--    <button class="btn btn-primary m-1" v-on:click="addTask()">NEW TASK</button>-->
    <p>Task title is: {{ title=!taskUpdate ? title : taskUpdate.title}}</p>
    <input   v-model="title" placeholder="new task" />
    <button v-on:click="saveTask(task,taskUpdate?taskUpdate.id:null)" v-show="btnTaskSave">Save</button>

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
      title:null,
      btnTaskSave:false,
    }
  },
  watch:{
    title(value){
      if(this.$props.taskUpdate){
        this.$props.taskUpdate.title=value
      }
        this.btnTaskSave= value.length > 0;
    },
  },


  methods: {

    saveTask(task, id) {
      console.log(task,id,this.title)
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

    },
    addTask(){
      window.location.reload()
    }
  }
}

</script>

<style scoped>

</style>

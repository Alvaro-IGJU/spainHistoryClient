import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import RegistrationUser from "@/components/User/RegistrationUser.vue";
import {createRouter, createWebHashHistory} from "vue-router";

import listTask from "@/components/Task/ListTask.vue";
import loginUser from "@/components/User/LoginUser.vue";




const routes=[

    {path:'/user',component:RegistrationUser},
    {path:'/task',component:listTask},
    {path:'/login',component:loginUser},
]

const app=createApp(App);
const router =  createRouter({
     history: createWebHashHistory(process.env.BASE_URL),
    routes,
})
app.use(router)
app.mount('#app')

app.config.globalProperties.foo = "http://127.0.0.1:34525/";


import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import {createRouter, createWebHashHistory} from "vue-router";


import RegistrationUser from "./components/User/RegistrationUser.vue";
import listTask from "./components/Task/ListTask.vue";
import loginUser from "./components/User/LoginUser.vue";
import IndexHome from "@/components/Home/IndexHome.vue";



let routes=[

    {path:'/login',component:loginUser},
    {path:'/task',component:listTask},
    {path:'/user',component:RegistrationUser},
    {path: '/', component: IndexHome}
]

const app=createApp(App);

const router =  createRouter({
     history: createWebHashHistory(process.env.BASE_URL),
    routes,
})
app.use(router);
app.mount('#app')
app.config.globalProperties.foo = "http://127.0.0.1:38275/";


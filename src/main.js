import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import LoginUser from "@/components/User/LoginUser.vue";
import ListTask from "@/components/Task/ListTask.vue";
import {createMemoryHistory, createRouter} from "vue-router";
import RegistrationUser from "@/components/User/RegistrationUser.vue";
import ListProduct from "@/components/Product/ListProduct.vue";

const routes = [
    { path: '/', component: LoginUser },
    { path: '/task', component: ListTask },
    { path: '/register', component: RegistrationUser },
    { path: '/products', component: ListProduct },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


const app=createApp(App);
app.use(router)
app.mount('#app')
app.config.globalProperties.foo = "http://127.0.0.1:8000/";



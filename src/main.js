import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//import LoginUser from "@/components/User/LoginUser.vue";
//import ListTask from "@/components/Task/ListTask.vue";
import {createMemoryHistory, createRouter} from "vue-router";
//import RegistrationUser from "@/components/User/RegistrationUser.vue";
//import ListProduct from "@/components/Product/ListProduct.vue";
//import LoadJson from "@/components/LoadProduct/LoadJson.vue";
import ArticleLastList from "@/components/Article/ArticleLastList.vue";
//import HeaderHome from "./components/Header/HeaderHome.vue";
//import HomeMain from "./components/Home/HomeMain.vue";
import ListLastPodcast from "./components/Podcast/ListLastPodcast.vue";
import ProfileUser from "./components/User/ProfileUser.vue";


const routes = [
    { path: '/', component: ArticleLastList },
    { path: '/article', component: ArticleLastList },
    { path: '/podcast', component: ListLastPodcast },
    { path: '/profile', component: ProfileUser },
    
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


const app=createApp(App);
app.use(router)
app.mount('#app')
app.config.globalProperties.foo = "http://127.0.0.1:8000/";



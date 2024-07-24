import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createRouter, createWebHistory } from 'vue-router'
import ArticleLastList from "@/components/Article/ArticleLastList.vue"
import ListLastPodcast from "@/components/Podcast/ListLastPodcast.vue"
import ProfileUser from "@/components/User/ProfileUser.vue"
import ProfileOtherUser from "@/components/User/ProfileOtherUser.vue"

// Define las rutas
const routes = [
    { path: '/', component: ArticleLastList },
    { path: '/article', component: ArticleLastList },
    { path: '/podcast', component: ListLastPodcast },
    { path: '/profile', component: ProfileUser },
    { path: '/profile/:id', component: ProfileOtherUser },
]

// Crea el enrutador con el historial web
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
app.config.globalProperties.foo = "http://127.0.0.1:8000/"

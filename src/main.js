import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app=createApp(App);
app.mount('#app')
app.config.globalProperties.foo = "http://127.0.0.1:8000/";



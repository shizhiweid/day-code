import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import { createPinia } from "pinia"

createApp(App).use(ElementPlus, {
    locale: zhCn
}).use(ElementPlus).use(createPinia()).mount('#app')

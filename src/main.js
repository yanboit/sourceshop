import {
	createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入和注册element-ui
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/mine.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import 'element-plus/theme-chalk/src/index.scss'
import './style.scss'
import './permission'

createApp(App).use(router).use(store).mount('#app')

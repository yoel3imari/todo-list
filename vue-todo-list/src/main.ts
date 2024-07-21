import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

import ApiService from '@/utils/ApiService'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import { useAuthStore } from './stores/authStore'

const app = createApp(App)

ApiService.init(app)
app.use(createPinia())
app.use(VueQueryPlugin)
app.use(router)
app.use(Antd)
app.mount('#app')

// const authStore = useAuthStore()
// await authStore.verify_token()

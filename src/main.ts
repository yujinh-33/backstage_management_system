import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import { createPinia } from 'pinia'
import { registerApp } from './global'

const pinia = createPinia()
const app = createApp(App)

// registerApp(app)
// 使用app.use传入一个函数时, 它会帮我们执行这个函数, 并且传入app对象
app.use(registerApp)
app.use(router)
app.use(pinia)
app.mount('#app')

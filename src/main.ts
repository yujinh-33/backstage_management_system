import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import { createPinia } from 'pinia'
import { registerApp } from './global'
import 'normalize.css'
import './assets/css/index.less'

const pinia = createPinia()
const app = createApp(App)

// registerApp(app)
// 使用app.use传入一个函数时, 它会帮我们执行这个函数, 并且传入app对象
app.use(registerApp)
app.use(router)
app.use(pinia)

// 当网站刷新时pinia中的数据会消失, 我们可以在这里调用一下pinia action请求函数
import { useLoginStore } from '@/store'
const loginStore = useLoginStore()
loginStore.loadLocalLogin()

app.mount('#app')

import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 路由导航守卫: 返回一个路劲, 会跳转
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getItem('token')
    if (!token) return '/login'
  }
})

export default router

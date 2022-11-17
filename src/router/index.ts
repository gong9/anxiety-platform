import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter(
  {
    history: createWebHashHistory(),
    routes: [
      {
        path: '/login',
        component: () => import('@/views/Login.vue'),
      },
    ],
  },
)

export default router

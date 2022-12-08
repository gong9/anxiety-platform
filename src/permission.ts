import router from './router'
import { useUserStore } from './store/modules/user'

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (userStore.token) {
    if (to.path === '/login') {
      next('/')
    }
    else {
      if (!userStore.userInfo)
        userStore.getUserInfo()

      next()
    }
  }
  else {
    if (to.path === '/login')
      next()
    else
      next('/login')
  }
})

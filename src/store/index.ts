import { createStore } from 'vuex'
import userModules from './modules/user'

const store = createStore({
  modules: {
    userModules,
  },
})

export default store

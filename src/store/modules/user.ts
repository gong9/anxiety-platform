import { defineStore } from 'pinia'
import { Md5 } from 'ts-md5'
import { getUserInfo as getUserInfoApi, login as loginApi } from '@/api/login'
import localstorage from '@/utils/localstorage'
import { TOKEN } from '@/constant'

export const useUserStore = defineStore(
  'user',
  {
    state: () => {
      return {
        token: localstorage.getItem(TOKEN) || '',
        userInfo: null,
      }
    },
    actions: {
      async login(username: string, password: string) {
        const res = await loginApi({ username, password: Md5.hashStr(password) })

        this.token = res.data.token
        localstorage.setItem(TOKEN, this.token)

        return Promise.resolve(true)
      },

      async getUserInfo() {
        const res = await getUserInfoApi()
        this.userInfo = res.data
      },
    },
  },
)

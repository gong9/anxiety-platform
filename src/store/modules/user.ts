import { defineStore } from 'pinia'
import { Md5 } from 'ts-md5'

import localstorage from '@/utils/localstorage'
import { TOKEN } from '@/constant'
import { login as loginApi } from '@/api/login'

export const useUserStore = defineStore(
  'user',
  {
    state: () => {
      return {
        token: localstorage.getItem(TOKEN) || '',
      }
    },
    actions: {
      async login(username: string, password: string) {
        const res = await loginApi({ username, password: Md5.hashStr(password) })

        this.token = res.data.token
        localstorage.setItem(TOKEN, this.token)

        return Promise.resolve(true)
      },
    },
  },
)

import { defineStore } from 'pinia'
import { Md5 } from 'ts-md5'

import { login as loginApi } from '@/api/login'

export const useUserStore = defineStore(
  'user',
  {
    state: () => {
      return {
        token: '',
      }
    },
    actions: {
      async login(username: string, password: string) {
        const res = await loginApi({ username, password: Md5.hashStr(password) })

        this.token = res.data.token
      },
    },
  },
)

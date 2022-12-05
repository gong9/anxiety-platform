/**
 * @file localstorage
 */

const localstorage = {
  setItem(key: string, data: unknown) {
    if (data === null || typeof data === 'function')
      throw new Error('Illegal data structure')

    let cache: string

    if (typeof data === 'object')
      cache = JSON.stringify(data)
    else
      cache = data as string

    window.localStorage.setItem(key, cache)
  },

  getItem(key: string) {
    const data = window.localStorage.getItem(key)

    if (data) {
      try {
        return JSON.parse(data)
      }
      catch (error) {
        return data
      }
    }
    else {
      return null
    }
  },

  removeItem(key: string) {
    window.localStorage.removeItem(key)
  },

  clean() {
    window.localStorage.clear()
  },
}

export default localstorage

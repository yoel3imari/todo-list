import ApiService from '@/utils/ApiService'
import TokenService from '@/utils/TokenService'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Auth {
  id: number
  name: string
  email: string
  email_verified: string | null
  token: string
  total_pending: number
  created_at: string
  updated_at: string
}

export const useAuthStore = defineStore('auth', () => {
  const auth = ref<Auth | null>(null)
  const isAuth = ref<boolean>(false)
  const error = ref<String | null>(null)

  const login = async (cred: { email: string; password: string }) => {
    return ApiService.post('/auth/login', cred)
      .then(({ data }) => {
        // console.log(data);
        setSession(data.data)
      })
      .catch((data) => {
        error.value = data.message
      })
  }

  const register = async (data: { name: string; email: string; password: string }) => {
    return ApiService.post('/auth/register', data)
      .then(({ data }) => {
        // console.log(data.data);
        setSession(data.data)
      })
      .catch((data) => {
        error.value = data.message
      })
  }

  const setSession = (data: Auth) => {
    // console.log(data);
    error.value = null
    auth.value = data
    isAuth.value = true
    TokenService.saveToken(auth.value.token)
  }

  const purgeAuth = () => {
    auth.value = null
    error.value = null
    isAuth.value = false
    TokenService.destroyToken()
  }

  const verify_token: () => Promise<boolean> = async () => {
    const token = TokenService.getToken()
    ApiService.setToken();
    console.log(`token: ${token}`)

    if (!token) {
      console.log('token missing')
      purgeAuth()
      return false;
    }

    try {
      const {data} = await ApiService.get('/auth/verify')
      console.log('token verified')
      setSession(data.data)
      return true
    } catch (error) {
      console.log('token not valid')
      return false; 
    }
  }

  const logout = async () => {
    const token = TokenService.getToken()
    if (token) {
      ApiService.get('/auth/logout').then(() => {
        purgeAuth()
      })
    }
  }

  return {
    auth,
    error,
    isAuth,
    login,
    register,
    verify_token,
    logout
  }
})

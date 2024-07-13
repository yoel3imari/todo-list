import ApiService from '@/utils/ApiService'
import TokenService from '@/utils/TokenService'
import { defineStore } from 'pinia'
import { pushScopeId, ref } from 'vue'
import { useRouter } from 'vue-router'

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
  const auth = ref<Auth | null>(null);
  const error = ref<String | null>(null);

  const login = async (cred: { email: string; password: string }) => {
    // send credentials
    // get response
    // store token
    // store user info
    return ApiService.post('/auth/login', cred).then(({ data }) => {
      setSession(data.data)
    }).catch((data) => {
      error.value = data.message
    })
  }

  const register = async (data: { name: string; email: string; password: string }) => {
    // send credentials
    // get response
    // store token
    // store user info
    return ApiService.post('/auth/register', data).then(({ data }) => {
      setSession(data.data)
    }).catch((data) => {
      error.value = data.message
    })
  }

  const setSession = (data: Auth) => {
    // console.log(data);
    auth.value = data
    TokenService.saveToken(auth.value.token)
    error.value = null;
  }

  const purgeAuth = () => {
    auth.value = null
    TokenService.destroyToken()
  }

  const verify_token = async () => {
    if (TokenService.getToken()) {
      ApiService.get('/auth/verify')
        .then(({ data }) => {
          setSession(data.data)
        })
        .catch(() => {
          logout()
        })
    } else {
      logout()
    }
  }

  const logout = async () => {
    purgeAuth();
    ApiService.get('/auth/logout').finally(() => {
      const router = useRouter();
      router.push({name: "login"})
    });
  }

  return {
    auth,
    error,
    login,
    register,
    verify_token,
    logout,
  }
})

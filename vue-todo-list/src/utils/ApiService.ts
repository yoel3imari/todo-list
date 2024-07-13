import axios from 'axios'
import env from '@/env'
import type { App } from 'vue'
import VueAxios from 'vue-axios'
import TokenService from './TokenService'

class ApiService {
  private static vueInstance: App

  static init(app: App<Element>) {
    ApiService.vueInstance = app
    ApiService.vueInstance.use(VueAxios, axios)
    ApiService.vueInstance.axios.defaults.baseURL = env.API_URL
    ApiService.vueInstance.axios.defaults.withCredentials = true

    ApiService.vueInstance.axios.defaults.headers.common['Accept'] = 'application/json'
    ApiService.vueInstance.axios.defaults.headers.common['Content-Type'] = 'application/json'

    this.setToken()
  }

  static setToken() {
    /**
     * set axios headers
     */
    ApiService.vueInstance.axios.defaults.headers.common['Authorization'] =
      `Bearer ${TokenService.getToken()}`
  }

  static get(endpoint: string, params = {}) {
    return axios({
      method: 'get',
      url: endpoint,
      data: params
    })
  }

  static post(endpoint: string, body: Object) {
    return axios({
      method: 'post',
      url: endpoint,
      data: body
    })
  }

  static put(endpoint: string, body: Object) {
    return axios({
      method: 'put',
      url: endpoint,
      data: body
    })
  }

  static delete(endpoint: string) {
    return axios({
      method: 'delete',
      url: endpoint
    })
  }

  static postWithMedia(endpoint: string, formData: FormData) {
    return axios.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default ApiService

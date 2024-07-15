import { useAuthStore } from '@/stores/authStore'
import TokenService from '@/utils/TokenService'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home'
      },
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/auth',
      component: () => import('../layouts/AuthLayout.vue'),
      children: [
        {
          path: '/auth/login',
          name: 'login',
          meta: {
            title: 'Login'
          },
          component: () => import('../views/auth/SignIn.vue')
        },
        {
          path: '/auth/sign-up',
          name: 'signup',
          meta: {
            title: 'Sign up'
          },
          component: () => import('../views/auth/SignUp.vue')
        }
      ]
    },
    {
      path: '/dashboard',
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: {
        middleware: 'auth'
      },
      children: [
        {
          path: '/dashboard/overview',
          component: () => import('../views/dashboard/OverviewPage.vue'),
          name: 'dashboard-overview',
          meta: {
            title: 'Dashboard'
          }
        },
        {
          path: '/dashboard/todos',
          component: () => import('../views/dashboard/TodoPage.vue'),
          name: 'dashboard-todos',
          meta: {
            title: 'Todos'
          }
        },
        {
          path: '/dashboard/items',
          component: () => import('../views/dashboard/ItemPage.vue'),
          name: 'dashboard-items',
          meta: {
            title: 'Items'
          }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: {
        title: 'Not Found'
      },
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  window.document.title = String(to.meta?.title) || ''
  const store = useAuthStore()
  if (to.meta.middleware === 'auth') {
    // console.log('verifying auth before entering: ' + to.name?.toString())
    // console.log('token: ' + TokenService.getToken())
    // const isValid = await store.verify_token()
    if (!store.isAuth) {
      router.push({ name: 'login' })
    }
  }
})

export default router

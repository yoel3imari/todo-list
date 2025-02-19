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
        title: 'Todo'
      },
      component: () => import('../App.vue'),
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
          path: '/dashboard/lists',
          component: () => import('../views/dashboard/ItemPage.vue'),
          name: 'dashboard-lists',
          meta: {
            title: 'Lists'
          }
        },
        {
          path: '/dashboard/schedules',
          component: () => import('../views/dashboard/TodoPage.vue'),
          name: 'dashboard-schedules',
          meta: {
            title: 'Schedules'
          }
        },
        {
          path: '/dashboard/teams',
          component: () => import('../views/dashboard/ItemPage.vue'),
          name: 'dashboard-teams',
          meta: {
            title: 'Teams'
          }
        },
        {
          path: '/dashboard/meeting',
          component: () => import('../views/dashboard/ItemPage.vue'),
          name: 'dashboard-meeting',
          meta: {
            title: 'Meeting'
          }
        },
        {
          path: '/dashboard/events',
          component: () => import('../views/dashboard/ItemPage.vue'),
          name: 'dashboard-events',
          meta: {
            title: 'Events'
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
    const isValid = await store.verify_token()
    if (!isValid) {
      router.push({ name: 'login' })
      return;
    }
  }

  if (to.name?.toString() && ['login', 'signup'].includes(to.name.toString())) {
    if (store.isAuth) {
      router.push({ name: 'dashboard-overview' })
      return;
    }
  }
})

export default router

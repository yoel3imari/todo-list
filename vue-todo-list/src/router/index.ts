import { useAuthStore } from '@/stores/authStore'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home',
      },
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/auth/login',
      name: 'login',
      meta: {
        title: 'Login',
      },
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/auth/sign-up',
      name: 'signup',
      meta: {
        title: 'Sign up',
      },
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: {
        middleware: 'auth',
      },
      children: [
        {
          path: '/overview',
          component: () => import('../views/dashboard/OverviewPage.vue'),
          name: 'dashboard-overview',
          meta: {
            title: 'Dashboard'
          }
        },
        {
          path: '/todos',
          component: () => import('../views/dashboard/TodoPage.vue'),
          name: 'dashboard-overview',
          meta: {
            title: 'Todos'
          }
        },
        {
          path: '/items',
          component: () => import('../views/dashboard/ItemPage.vue'),
          name: 'dashboard-overview',
          meta: {
            title: 'Items'
          }
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: {
        title: 'Not Found',
      },
      component: () => import ('../views/NotFound.vue')
    }
  ]
})


router.beforeEach(async (to, from, next) => {
  
  const store = useAuthStore()

  if( to.meta.middleware === 'auth' ) {
    await store.verify_token();
    return;
  }
  return next();
})

export default router

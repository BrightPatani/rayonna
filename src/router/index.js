import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import About from '@/views/About.vue'
import Community from '@/views/Community.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
      {
        path: '/signin',
        name: 'Signin',
        component: Signin
      },
      {
        path: '/signup',
        name: 'Signup',
        component: Signup
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/community',
        name: 'Community',
        component: Community
      }
  ],
})

export default router

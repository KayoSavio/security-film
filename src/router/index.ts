import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/servicos',
      name: 'services',
      component: Services
    },
    {
      path: '/galeria',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/sobre',
      name: 'about',
      component: About
    },
    {
      path: '/contato',
      name: 'contact',
      component: Contact
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

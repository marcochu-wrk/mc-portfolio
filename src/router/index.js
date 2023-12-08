import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Projects from '../views/projects.vue'
import Timeline from '../views/timeline.vue'
import Photos from '../views/photos.vue'
import Games from '../views/games.vue'
import NotFound from '../views/notFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path:'/projects',
    name:'projects',
    component: Projects
  },
  {
    path:'/timeline',
    name:'timeline',
    component: Timeline
  },
  {
    path:'/photos',
    name:'photos',
    component: Photos
  },
  {
    path:'/games',
    name:'games',
    component: Games
  },
  {
    path:'/:catchAll(.*)',
    name:'notFound',
    component: NotFound

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import AddACleaner from '@/views/AddACleaner'
import Cleaners from '@/views/Cleaners'
import Cleaner from '@/views/Cleaner'
import Schedule from '@/views/Schedule'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/addACleaner',
    name: 'Add a cleaner',
    component: AddACleaner
  },
  {
    path: '/cleaner/:id',
    name: 'Cleaner',
    component: Cleaner
  },
  {
    path: '/cleaners',
    name: 'Cleaners',
    component: Cleaners
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Congress from '@/views/Congress.vue'
import Attendance from '@/views/Attendance.vue'
import Loyalty from '@/views/Loyalty.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:congress',
      name: 'congress',
      component: Congress
    },
    {
      path: '/attendance/:congress',
      name: 'attendance',
      component: Attendance
    },
    {
      path: '/loyalty/:congress',
      name: 'congress',
      component: Loyalty
    }
  ]
})
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }

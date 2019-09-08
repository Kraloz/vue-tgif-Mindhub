import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import House from '@/views/House.vue'
import Senate from '@/views/Senate.vue'
import AttendanceHouse from '@/views/AttendanceHouse.vue'
import AttendanceSenate from '@/views/AttendanceSenate.vue'
import LoyaltyHouse from '@/views/LoyaltyHouse.vue'
import LoyaltySenate from '@/views/LoyaltySenate.vue'


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
      path: '/house',
      name: 'house',
      component: House
    },
    {
      path: '/senate',
      name: 'senate',
      component: Senate
    },
    {
      path: '/attendance/house',
      name: 'attendanceHouse',
      component: AttendanceHouse
    },
    {
      path: '/attendance/senate',
      name: 'attendanceSenate',
      component: AttendanceSenate
    },
    {
      path: '/loyalty/house',
      name: 'loyaltyHouse',
      component: LoyaltyHouse
    },
    {
      path: '/loyalty/senate',
      name: 'loyaltySenate',
      component: LoyaltySenate
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

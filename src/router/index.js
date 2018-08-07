import Vue from 'vue'
import Router from 'vue-router'
import BasicTrade from '@/components/pc/BasicTrade'
import Home from '@/components/pc/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/BasicTrade',
      name: 'BasicTrade',
      component: BasicTrade
    }
  ]
})

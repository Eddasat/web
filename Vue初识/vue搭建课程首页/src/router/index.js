import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Detail from '@/page/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/detail',
    	name: 'Detail',
    	component: Detail
    }
  ]
})

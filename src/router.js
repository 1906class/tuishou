import Vue from 'vue'
import Router from 'vue-router'
import banner from './pages/banner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shouye',
      // redirect:'/shouye',
      component: banner
    },
    {
      path: '/',
      redirect:'/shouye',
      component: banner
    },
    
  ]
})

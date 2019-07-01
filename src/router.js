import Vue from 'vue'
import Router from 'vue-router'
import banner from './pages/banner'
import Debt from './pages/debt.vue'

import My from './components/my.vue'
Vue.use(Router)
import Forget from './pages/forget'
import Register from './pages/register'
import Login from './pages/login'
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
    },{
    
      path: '/debt',
      component: Debt
    },
    {
      path: '/my',
      
      component: My,
     
      children:[
        {
          path:'forget',
          component:Forget
        },
        {
          path:'register',
          component:Register
        },
        {
          path:'login',
          component:Login
        }
      ]
    }
  
  ]
 
})

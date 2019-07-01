import Vue from 'vue'
import Router from 'vue-router'
import banner from './pages/banner'
import Debt from './pages/debt.vue'
import Details from "pages/details"
import Fund from "pages/fund"
import My_creditor from "pages/my_creditor"

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
      
    },
    {
      path: '/my_creditor',
      component: My_creditor
    },
    {
      path: '/fund',
      component: Fund
    },
    {
      path:'/details',
      component: Details
    }
  
  ]
 
})

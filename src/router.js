import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import My from './components/my.vue'
Vue.use(Router)
import Forget from './pages/forget'
import Register from './pages/register'
import Login from './pages/login'
export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      // beforeEnter:(to,from,next)=>{
      //   console.log('路由独享',to,from)
      //   let login=true
      //   if(login){
      //     next()
      //   }else{
      //     next('/my')
      //   }
       
      // }
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

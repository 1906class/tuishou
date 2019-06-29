import Vue from 'vue'
import Router from 'vue-router'
import Debt from './pages/debt.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/debt',
      component: Debt
    }
  ]
})

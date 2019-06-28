import Vue from 'vue'
import Router from 'vue-router'
import Debt from './pages/debt.vue'
import DebtDetail from './components/debtDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/debt',
      component: Debt,
      children:[
        {
          path:'debtDetail/:id',
          component:DebtDetail
        }
      ]
    }
  ]
})

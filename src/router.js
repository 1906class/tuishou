import Vue from 'vue'
import Router from 'vue-router'
import Details from "pages/details"
import Fund from "pages/fund"
import My_creditor from "pages/my_creditor"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Details
    },
    {
      path: '/my_creditor',
      component: My_creditor
    },
    {
      path: '/fund',
      component: Fund
    }
  ]
})

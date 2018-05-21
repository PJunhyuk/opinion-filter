import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import main from '@/components/main'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/main/:user_id',
      name: 'main',
      component: main
    },
    {
      path: '/error',
      name: 'error',
      component: error
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Full from '@/containers/Full'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import Form from '@/views/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'form',
          name: 'Formulario',
          component: Form
        }
      ]
    }
  ]
})

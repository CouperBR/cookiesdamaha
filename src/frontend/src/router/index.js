import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Pedido from '@/pages/pedido/pedido'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pedido',
      name: 'Pedido',
      component: Pedido
    },

  ]
})

  

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import InventoryForm from '@/components/InventoryForm'
import HomeTwo from '@/components/HomeTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/inventoryForm',
      name: 'inventory',
      component: InventoryForm
    },
    {
      path: '/home2',
      name: '',
      component: HomeTwo
    }
  ]
})

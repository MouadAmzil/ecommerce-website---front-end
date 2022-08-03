import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login/LoginView.vue'
import SignUp from '../views/Login/SignupView.vue'
Vue.use(VueRouter)

const routes = [
  { 
    path: '/home',
    name: 'home',

    component: HomeView
  },
  {
    path:'/login',
    name: 'login',
    component: Login
  },
  {
    path:'/signup',
    name: 'SignUp',
    component: SignUp
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
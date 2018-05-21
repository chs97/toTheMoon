import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/pages/index'
import Login from '@/pages/login'
import Register from '@/pages/register'
import UserManager from '@/pages/userManager'
import Home from '@/pages/home'
import SignManager from '@/pages/signManager'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Index',
  component: Index,
  meta: {
    onlyMain: true
  }
}, {
  path: '/login',
  name: 'Login',
  component: Login,
  meta: {
    onlyMain: true
  }
}, {
  path: '/register',
  name: 'Register',
  component: Register,
  meta: {
    onlyMain: true
  }
}, {
  path: '/home',
  name: 'Home',
  component: Home,
  meta: {
    level: 1,
    text: 'HOME',
    icon: 'fa-line-chart'
  }
}, {
  path: '/sign',
  name: 'Sign',
  component: Login,
  meta: {
    level: 1,
    text: 'SIGN',
    icon: 'fa-calendar-check-o'
  }
}, {
  path: '/signManager',
  name: 'SignManager',
  component: SignManager,
  meta: {
    level: 9,
    text: 'SIGN',
    icon: 'fa-pencil'
  }
}, {
  path: '/userManager',
  name: 'UserManager',
  component: UserManager,
  meta: {
    level: 10,
    text: 'APPLY',
    icon: 'fa-users'
  }
}]

const router = new Router({
  mode: 'history',
  routes
})

const allRoutes = routes.map(({ path, name, meta }) => ({
  path,
  name,
  meta
}))

export { router, allRoutes }
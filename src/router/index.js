import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/pages/login'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Hello',
  component: Hello,
  meta: {
    // onlyMain: true
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
  component: Login,
  meta: {
    onlyMain: true
  }
}, {
  path: '/index',
  name: 'Index',
  component: Login,
  meta: {
    level: 1,
    text: '主页',
    icon: 'fa-line-chart'
  }
}, {
  path: '/sign',
  name: 'Sign',
  component: Login,
  meta: {
    level: 1,
    text: '签到',
    icon: 'fa-calendar-check-o'
  }
}, {
  path: '/signManager',
  name: 'SignManager',
  component: Login,
  meta: {
    level: 9,
    text: '签到管理'
  }
}, {
  path: '/userManager',
  name: 'UserManager',
  component: Login,
  meta: {
    level: 10,
    text: '用户管理'
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
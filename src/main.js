// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
import { router } from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import './style/normalize.css'
import './style/global.less'
import './style/font-awesome.less'

Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
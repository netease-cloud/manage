// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import iView from 'iview'
import util from '@/lib/util.js'
import store from './store/index'
import 'iview/dist/styles/iview.css'
import '../index.less'
Vue.config.productionTip = false

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

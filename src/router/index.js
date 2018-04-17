import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
// import HelloWorld from '@/components/HelloWorld'
import {routers, appRouter} from './router.js'

Vue.use(Router)


const RouterConfig = {
  routes: routers
}

export  const router = new Router(RouterConfig)
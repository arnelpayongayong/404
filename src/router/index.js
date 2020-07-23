import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/404';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '404',
      component: NotFound
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',  影响后期打包路由跳转
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/msite',
      name: 'msite',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited. 懒加载
      component: () => import(/* webpackChunkName: "about" */ './views/msite/msite.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "about" */ './views/order/order.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './views/profile/profile.vue')
    }, 
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "about" */ './views/search/search.vue')
    }
  ]
})

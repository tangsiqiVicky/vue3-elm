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
      // 所有商品列表
      path: '/msite',
      name: 'msite',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited. 懒加载
      component: () => import(/* webpackChunkName: "about" */ './views/msite/msite.vue')
    },
    // 订单列表
    {
      path: '/order',
      name: 'order',searchAddress
      component: () => import(/* webpackChunkName: "about" */ './views/order/order.vue')
    },
    // 我的主页
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './views/profile/profile.vue')
    }, 
    // 搜索页面
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "about" */ './views/search/search.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./views/shop/shop.vue')
    }
  ]
})

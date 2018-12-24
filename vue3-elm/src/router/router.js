import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
const msite = () => import(/* webpackChunkName: "about" */ '../views/msite/msite.vue')
const order = () => import('@/views/order/order.vue')
const profile = () => import('@/views/profile/profile.vue')
const search = () => import('@/views/search/search.vue')
const shop = () => import('@/views/shop/shop.vue')
const shopDetail = () => import('@/views/shop/children/shopDetail.vue')
const foodDetail = () => import('@/views/shop/children/foodDetail.vue')
const login = () => import('@/views/login/login.vue')
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
      component: msite,
      meta: {
        keepAlive: true
      }
    },
    {
      // 订单列表
      path: '/order',
      name: 'order',
      component: order
    },
    {
      // 我的主页
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      // 搜索页面
      path: '/search',
      name: 'search',
      component: search
    },
    {
      // 店铺页面
      path: '/shop',
      name: 'shop',
      component: shop,
      children: [{
        // 商铺详情页
        path: 'shopDetail',
        name: 'shopDetail',
        component: shopDetail
      }, {
        // 商品详情页
        path: 'foodDetail',
        name: 'foodDetail',
        component: foodDetail
      }
      ]
    },
    {
      // 登录
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

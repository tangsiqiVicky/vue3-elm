import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store.js'
import './config/rem.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import svgIcon from './components/common/svg';
Vue.use(VueAwesomeSwiper)
// Vue.use(svgIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations' // 直接提交变量 同步修改状态
// import actions from './action' // 是提交到mutations 异步修改状态
// import getters from './getters' // 进行计算过滤 加工
Vue.use(Vuex)
// 状态
const state = {
  userInfo: null // 用户信息
}

export default new Vuex.Store({
    state,
    // getters,
    // actions,
    mutations,
})
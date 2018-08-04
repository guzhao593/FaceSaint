import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0
  },
  getter: {
    total (state) {
      return state.count++
    }
  },
  mutation: {
    increment (state) {
      // 变更状态
      state.count++
    }
  },
  action: {
    increment (context) {
      context.commit('increment')
    }
  }
})

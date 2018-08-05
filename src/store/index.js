import Vue from 'vue'
import Vuex from 'vuex'
import { SELECT_KNOWLEDGE_NAME, SELECT_QUESTION_INFO } from './constants/mutation-type'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    knowledgeName: '',
    questionInfo: {}
  },
  getters: {
  },
  mutations: {
    [SELECT_KNOWLEDGE_NAME] (state, payload) {
      state.knowledgeName = payload
    },
    [SELECT_QUESTION_INFO] (state, payload) {
      state.questionInfo = payload
    }
  },
  action: {
  }
})

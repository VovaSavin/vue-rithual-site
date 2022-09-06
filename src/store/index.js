import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendUrl: "https://django-rithual-site.herokuapp.com/api/v1",
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getServerUrl: state => {
      return state.backendUrl
    },
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

import login from './modules/login'
import pages from './modules/pages'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  mutations,
  modules:{
    login,
    pages
  }
})

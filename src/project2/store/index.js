import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import main from './modules/main'
import event from './modules/event'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations,
  getters,
  actions,
  modules: { main, event }
})

// document.addEventListener('click', evnt => store.dispatch('triggerEvent', evnt))
// window.addEventListener('resize', evnt => store.dispatch('triggerEvent', evnt))

export default store

import Vuex from 'vuex'

import state from './state/index'
import mutations from './mutations/index'
import getters from './getters/index'
import actions from './actions/index'

export default () => {
  const store = new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    state,
    mutations,
    getters,
    actions
  })

  if (module.hot) {
    module.hot.accept([
      './state/index',
      './mutations/index',
      './getters/index',
      './actions/index'
    ], () => {
      const newState = require('./state/index').default
      const newMutations = require('./mutations/index').default
      const newGetters = require('./getters/index').default
      const newActions = require('./actions/index').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}

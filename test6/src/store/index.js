import { createStore } from 'vuex'

export default createStore({
  state: {
    "isloading" : true
  },
  mutations: {
    setLoading(state) {
      state.isloading = false
    },
    setLoading2(state) {
      state.isloading = true
    }
  },
  actions: {
    actionSetLoading(context, data){
      context.commit('setLoading', data)
      console.log(context)
    },
  },
  modules: {
  }
})

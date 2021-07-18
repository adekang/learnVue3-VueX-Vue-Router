import {createStore} from 'vuex'
import moduleB from './moduleB'
import moduleA from './moduleA'

const store = createStore({
  state: {
    userInfo: {
      name: 'long'
    }
  },
  mutations: {
    getUserInfo(state, name) {
      state.userInfo.name = name
    }
  },
  actions: {
    asyncGetUserInfo({commit}) {
      setTimeout(() => {
        commit('getUserInfo', +new Date() + 'action')
      }, 1000)
    }
  },
  getters: {
    userInfoGetter(state) {
      return state.userInfo.name
    }
  },
  modules:{
    ma: moduleA,
    mb: moduleB
  }
})

export default store

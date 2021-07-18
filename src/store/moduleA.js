const moduleA = {
  state: {
    name: 'moduleA',
    age: 23,
  },
  mutations: {

  },
  getters: {
    userInfoGetterMa(state,getters,rootState) {
      return state.name+rootState.userInfo.name
    }
  },
  actions: {

  }
};

export  default  moduleA
import { createStore } from 'vuex'

// includes all singleton data that needs to be shared across the app
const store = createStore({
  state: {
    serverPath: 'http://localhost:8000',
  },
  mutations: {
    setSessionId(state, id) {
      state.sessionId = id
    }
  },
  actions: {
    
  },
})

export default store
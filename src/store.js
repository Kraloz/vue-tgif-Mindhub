import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    url: '',
    members: [],
    key: process.env.VUE_APP_API_KEY
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loading = status
    },
    SET_MEMBERS(state, members) {
      state.members = members
    }
  },
  actions: {
    fetchMembers(context){
      context.commit('SET_LOADING_STATUS', true)
      fetch(this.url, {
        method: 'GET',
        // mode: 'cors',
        headers: {
          'X-API-Key': this.state.key
        }
      }).then(function (response) {
        if(!response.ok){
          throw new Error('Error while fetching data :(')
        }
        return response.json()
      }).then(json => {
        context.commit('SET_MEMBERS', json.results[0].members)
        context.commit('SET_LOADING_STATUS', false)
      }).catch(error => {
        context.commit('SET_LOADING_STATUS', false)
        // eslint-disable-next-line no-console
        console.error(error)
      })
    }
  }
})

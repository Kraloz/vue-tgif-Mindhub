import Vue from 'vue'
import Vuex from 'vuex'
import Party from '@/assets/js/Party.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    url: 'https://api.propublica.org/congress/v1/113/house/members.json',
    members: [],
    key: process.env.VUE_APP_SECRET,
    stats: {
        d: new Party('Democrats'),
        r: new Party('Republicans'),
        i: new Party('Independents')
    }
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loading = status
    },
    SET_MEMBERS(state, members) {
      state.members = members
    },
    SET_MEMBERS_PARTY(state, payload) {
      state.stats[payload.party].members = payload.members
    }
  },
  actions: {
    fetchMembers(context) {
      context.commit('SET_LOADING_STATUS', true)
      fetch(this.state.url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'X-API-Key': this.state.key
        }
      }).then(function (response) {
        if(!response.ok){
          throw new Error('Error while fetching data :(')
        }
        return response.json()
      }).then(json => {
        context.commit('SET_LOADING_STATUS', false)
        context.commit('SET_MEMBERS', json.results[0].members)
      
        context.dispatch('fillParties')
      }).catch(error => {
        context.commit('SET_LOADING_STATUS', false)
        // eslint-disable-next-line no-console
        console.error(error)
      })
    },
    fillParties(context) {
      let list = {
        d: [],
        r: [],
        i: []
      }
      this.state.members.forEach(member => {
        switch (member.party.toLowerCase()) {
          case 'd':
            list.d.push(member)
            break
          case 'r':
            list.r.push(member)
            break
          case 'i':
            list.i.push(member)
            break
        }
      })
      for (const party in list) {
        // eslint-disable-next-line no-prototype-builtins
        if (list.hasOwnProperty(party)) {
          if(list[party].length) context.commit('SET_MEMBERS_PARTY', { party, members:list[party] })
        }
      }
    }
  },
  getters: {
    statsOf: (state) => (party) => {
      return state.stats[party]
    },
    membersSize: (state) => state.members.length
  }

})

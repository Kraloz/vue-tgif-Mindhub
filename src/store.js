import Vue from 'vue'
import Vuex from 'vuex'
import Party from '@/assets/js/Party.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    loading: false,
    key: process.env.VUE_APP_SECRET,
    members: {
      house: [],
      senate: []
    },
    stats: {
      house: {
        d: new Party('Democrats'),
        r: new Party('Republicans'),
        i: new Party('Independents')
      },
      senate: {
        d: new Party('Democrats'),
        r: new Party('Republicans'),
        i: new Party('Independents')
      }
    }
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loading = status
    },
    SET_MEMBERS(state, payload) {
      state.members[payload.congress] = payload.members
    },
    SET_MEMBERS_PARTY(state, payload) {
      state.stats[payload.congress][payload.party].members = payload.members
    }
  },
  actions: {
    fetchMembers(context, congress) {
      context.commit('SET_LOADING_STATUS', true)
      fetch(`https://api.propublica.org/congress/v1/113/${congress}/members.json`, {
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
        context.commit('SET_MEMBERS', { congress, members: json.results[0].members })
        context.dispatch('fillParties', congress)
      }).catch(error => {
        context.commit('SET_LOADING_STATUS', false)
        // eslint-disable-next-line no-console
        console.error(error)
      })
    },
    fillParties(context, congress) {
      let list = {
        d: [],
        r: [],
        i: []
      }
      this.state.members[congress].forEach(member => {
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
          if(list[party].length) context.commit('SET_MEMBERS_PARTY', { party: party, congress: congress , members: list[party] })
        }
      }
    }
  },
  getters: {
    statsOf: (state) => (congress, party) => state.stats[congress][party],
    membersSize: (state) => (congress) => state.members[congress].length,
    states: (state) => (congress) => {
      let res = []
      state.members[congress].forEach(member => {
        if(!res.includes(member.state)) {
          res.push(member.state)
        }
      })
      return res.sort()
    }
  }
})

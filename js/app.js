const key = 'L6LZMRhYsvWY9t2BEJNmVHmaKGDyuI3OgXLdYzVu'
const url = `https://api.propublica.org/congress/v1/113/${tableTarget}/members.json`
const path = location.pathname

const app = new Vue({
  el: '#app',
  data: {
    loading: false,
    members: [],
    filters: {
      state: '',
      parties: []
    }
  },
  beforeMount: function () {
    this.fetchMembers()
  },
  computed: {
    states: function () {
      let res = []
      this.members.forEach(member => {
        if(!res.includes(member.state)) {
          res.push(member.state)
        }
      })
      return res.sort()
    },
    parties: function () {
      parties = {
        republicans: new Party('r'),
        democrats: new Party('d'),
        independents: new Party('i')
      }
      this.members.forEach(member => {
        switch (member.party.toLowerCase()) {
          case 'd':
            parties.democrats.addMember(member);
            break;
          case 'r':
            parties.republicans.addMember(member);
            break;
          case 'i':
            parties.independents.addMember(member);
            break;
        }
      });
      return parties
    }
  },
  methods: {
    fetchMembers: function () {
      this.loading = true
      fetch(url, {
        method: 'GET',
        // mode: 'cors',
        headers: {
          'X-API-Key': key
        }
      }).then(function (response) {
        if(!response.ok){
          throw new Error('Error while fetching data :(')
        }
        return response.json()
      }).then(json => {
        app.members = json.results[0].members
        this.loading = false
      }).catch(error => {
        console.error(error)
        this.loading = false
      });
    }
  }
})
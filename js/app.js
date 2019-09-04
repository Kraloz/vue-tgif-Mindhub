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
    stats: function () {
      let stats = {
        parties : {
          republicans: new Party('Republicans'),
          democrats: new Party('Democrats'),
          independents: new Party('Independents')
        },
        total: function () {
          console.log(this)
          // let total = 0
          // this.parties.forEach(party => {
          //   total += party.no_members
          // });
          // return total
        }
      }
      this.members.forEach(member => {
        switch (member.party.toLowerCase()) {
          case 'd':
            stats.parties.democrats.addMember(member);
            break;
          case 'r':
            stats.parties.republicans.addMember(member);
            break;
          case 'i':
            stats.parties.independents.addMember(member);
            break;
        }
      });
      return stats
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
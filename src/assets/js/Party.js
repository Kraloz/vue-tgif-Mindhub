export default class Party {
  constructor(party) {
    this.party = () => party[0].toUppercase()
    this.__members = []
    this.avg_votes_with_party = 0
    this.least_engaged = []
    this.most_engaged = []
    this.least_loyal = []
    this.most_loyal = []
  }

  set members(members) {
    this.__members = members
    this.calc()
  }

  get members() {
    return this.__members
  }

  get no_members() {
    return this.__members.length
  }

  calc() {
    this.calcStats()
    this.calcTops()
  }

  calcStats() {
    let votes_pct = 0
    this.members.forEach((member) => {
      votes_pct += member.votes_with_party_pct
    })
    votes_pct /= this.members.length
    this.avg_votes_with_party = Math.round(votes_pct * 100) / 100
  }
  
  calcTops() {
    let tenPct = Math.round(this.members.length * 0.10)
    this.least_engaged = []
    this.most_engaged = []
    
    let members = [...this.members]
    members.sort((a, b) => {
      return a.missed_votes_pct - b.missed_votes_pct
    })
    this.most_engaged.push(...members.slice(0, tenPct))
    this.least_engaged.push(...members.slice((members.length-tenPct), members.length))
  }







  // segir ac+á mas tardwe
    sortMembers() {
    membersSortedByLoyalty = [...members].sort(function (a, b) {
        return b.votes_with_party_pct - a.votes_with_party_pct
    });
    membersVotesPercAsc = [...members].sort(function (a, b) {
        return a.votes_with_party_pct - b.votes_with_party_pct
    });
    membersMissedVotesPercDesc = [...members].sort(function (a, b) {
        return b.missed_votes_pct - a.missed_votes_pct
    });
    membersMissedVotesPercAsc = [...members].sort(function (a, b) {
        return a.missed_votes_pct - b.missed_votes_pct
    });
}
  makeTenPercent(array, key, finalArray) {
    for (var i = 0; i < array.length; i++) {
        if (i < array.length / 10) {
            finalArray.push(array[i]);
        } else if (array[i][key] == array[i - 1][key]) {
            finalArray.push(array[i]);
        } else {
            break;
        }
    }
    return finalArray;
}
}
class Party {
  constructor(party) {
    this.party = party;
    this.members = [];
    this.no_members = 0;
    this.avg_votes_with_party = 0;
    this.least_engaged = [],
    this.most_engaged = []
  }
  
  addMember(member) {
    if(member.party.toLowerCase() === this.party) {
      this.members.push(member);
      this.no_members++;
      this.calcStats();
      this.calcTops();
    }
  }

  calcStats() {
    let votes_pct = 0;
    this.members.forEach((member) => {
      votes_pct += member.votes_with_party_pct;
    });
    votes_pct /= this.members.length;
    this.avg_votes_with_party = Math.round(votes_pct * 100) / 100;
  }
  
  calcTops() {
    this.top_10_least_engaged = [];
    this.top_10_most_engaged = [];
    let members = [...this.members];
    members.sort((a, b) => {
      return a.missed_votes_pct - b.missed_votes_pct;
    });
    this.top_10_most_engaged.push(...members.slice(0, 10));
    this.top_10_least_engaged.push(...members.slice((members.length-10), members.length));
  }
}
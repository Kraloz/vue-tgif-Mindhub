<template>
  <main>
    <div class="container my-3">
      <div class="row">
        <div class="col">
          <h2 class="mt-3">Attendance</h2>
          <p>The Constitution specifies that a majority of members constitutes a quorum to do business in each house.
             Representatives and senators rarely force the presence of a quorum by demanding quorum calls; thus, in most
             cases, debates continue even if a majority is not present.</p>
          <p>The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator stating "aye"
             or "no" when his or her name is announced. The House reserves roll-call votes for the most formal matters,
             as a roll-call of all 435 representatives takes quite some time; normally, members vote by electronic device.
             In the case of a tie, the motion in question fails. In the Senate, the Vice President may (if present)
             cast the tiebreaking vote.</p>
        </div>
        <resumeTable class="col"/>
      </div>
      <hr>
      <div class="col d-flex justify-content-end">
          <party-filters class="row" @changedParty="changeDisplayParty"/>
      </div>
      <div class="row mt-1">
          <party-top-table class="col"
            title="Least Engaged (Bottom 10 Attendance)"
            tableHeadData="No. of Missed Votes"
            tableHeadPct="Missed"
            :stats="statsOf(displayParty)"
            whichSlice="least"
            :whichData="whichData"
          />
          <party-top-table class="col"
            title="Most Engaged (Top 10 Attendance)"
            tableHeadData="No. of Missed Votes"
            tableHeadPct="Missed"
            :stats="statsOf(displayParty)"
            whichSlice="most"
            :whichData="whichData"
          />
      </div>
    </div>
    
  </main>
</template>

<script>
import ResumeTable from '@/components/ResumeTable.vue'
import PartyTopTable from '@/components/PartyTopTable.vue'
import PartyFilters from '@/components/PartyFilters.vue'
import { mapActions, mapGetters } from 'vuex'
// TODO: MAPSTATE Y MAP ACTIONS NO ANDA QUE ONDAAAAAA
export default {
  name: 'AttendanceHouse',
  components: {
    ResumeTable,
    PartyTopTable,
    PartyFilters
  },
  data () {
    return {
      whichData: 'engaged',
      displayParty: 'd'
    }
  },
  created() {
    if(!this.membersSize) {
      this.fetchMembers()
    }
  },
  computed: {
    ...mapGetters(['statsOf','membersSize'])
  },
  methods: {
    ...mapActions(['fetchMembers']),
    changeDisplayParty(party) {
      this.displayParty = party
    },
  }
}
</script>
<template>
  <main>
    <div class="container my-3">
      <div class="row">
        <div class="col">
          <h2 class="mt-3">Loyalty</h2>
          <p>Those who consider themselves to be strong partisans, strong Democrats
            and strong Republicans respectively, tend to be the most faithful in voting
            for their party's nominee for office and legislation that backs their
            party's agenda.</p>
        </div>
        <resumeTable class="col"/>
      </div>
      <hr>
      <div class="col d-flex justify-content-end">
          <party-filters class="row" @changedParty="changeDisplayParty"/>
      </div>
      <div class="row mt-1">
          <party-top-table class="col"
            title="Least Loyal (Bottom 10% of Party)"
            tableHeadData="No. of Missed Votes"
            tableHeadPct="Missed"
            :stats="statsOf(congress, displayParty)"
            whichSlice="least"
            :whichData="whichData"
          />
          <party-top-table class="col"
            title="Most Loyal (Top 10% of Party)"
            tableHeadData="No. of Missed Votes"
            tableHeadPct="Missed"
            :stats="statsOf(congress, displayParty)"
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
export default {
  name: 'Loyalty',
  components: {
    ResumeTable,
    PartyTopTable,
    PartyFilters
  },
  data () {
    return {
      whichData: 'loyal',
      displayParty: 'd'
    }
  },
  created() {
    if(!this.membersSize(this.congress)) {
      this.fetchMembers(this.congress)
    }
  },
  computed: {
    ...mapGetters(['statsOf','membersSize']),
    congress() {
      return this.$route.params.congress
    }
  },
  methods: {
    ...mapActions(['fetchMembers']),
    changeDisplayParty(party) {
      this.displayParty = party
    },
  }
}
</script>
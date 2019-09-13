<template>
  <main>
    <div class="container my-3">
      <div class="row">
        <div class="col">
          <h2 class="mt-3">Loyalty</h2>
          <p>Those who consider themselves to be strong partisans, strong Democrats and strong Republicans respectively, tend to be the most faithful in voting for their party's nominee for office and legislation that backs their party's agenda.</p>
        </div>
        <ResumeTable class="col"/>
      </div>
      <hr/>
      <div class="row mt-1">
        <div class="col">
          <h4 class="text-muted">Least Engaged (Bottom 10 Attendance)</h4>
          <div id="table-filters" class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="option1" data-target="democrats" /> Democrats
            </label>
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="option2" data-target="republicans" /> Republicans
            </label>
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="option3" data-target="independents" /> Independents
            </label>
          </div>
          <table id="least-engaged" class="table">
            <thead>
              <tr class="align-items-center">
                <th scope="col">Name</th>
                <th scope="col">No. Missed Votes</th>
                <th scope="col">% Missed</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="col">
          <h4 class="text-muted">Most Engaged (Top 10 Attendance)</h4>
          <table id="most-engaged" class="mt-5 table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">No. of Missed Votes</th>
                <th scope="col">% Missed</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ResumeTable from '@/components/ResumeTable.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    ResumeTable
  },
  methods: {
    ...mapActions(['fetchMembers'])
  },
  computed: {
    ...mapGetters(['membersSize'])
  },
  created() {
    if(!this.membersSize) {
      this.fetchMembers()
    }
  }
}
</script>
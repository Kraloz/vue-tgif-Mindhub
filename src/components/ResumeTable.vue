<template>
  <div>
    <h4 class="text-right text-muted mt-3">House at a glance</h4>
    <table id="resume-table" class="table">
      <thead>
        <tr>
          <th>Party</th>
          <th>No. of Reps</th>
          <th>% Voted w/Party</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(party, index) in stats[congress]"
          :key="index"
        >
          <td>{{ party.name }}</td>
          <td>{{ party.no_members }}</td>
          <td>{{ party.avg_votes_with_party }}</td>
         </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ResumeTable',
  computed: {
    ...mapGetters(['statsOf','membersSize']),
    ...mapState(['stats']),
    congress() {
      return this.$route.params.congress
    }
  }
}
</script>
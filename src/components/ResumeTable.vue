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
          v-for="(party, index) in stats"
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
import { mapState } from 'vuex'

export default {
  name: 'ResumeTable',
  computed: {
    ...mapState(['stats'])
  }
}
</script>
<template>
  <div>
    <h4 class="text-muted">{{ title }}</h4>
    <table class="table">
      <thead>
        <tr class="align-items-center">
          <th scope="col">Name<span class="fas fa-link"></span></th>
          <th scope="col">{{ tableHeadData }}</th>
          <th scope="col">% {{ tableHeadPct }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(member, index) in stats[`${whichSlice}_${whichData}`]"
          :key="index">
          <td><a :href="member.url">{{ `${member.first_name} ${member.middle_name || ''} ${member.last_name}` }}</a></td>
          <td>{{ member.missed_votes }}</td>
          <td>{{ member.missed_votes_pct }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PartyTopTable',
  props: {
    title: String,
    tableHeadData: String,
    tableHeadPct: String,
    stats: Object,
    whichSlice: String,
    whichData: String
  }
}
</script>